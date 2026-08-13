import React, { useEffect, useState, useRef } from "react";

interface TransparentImageProps {
  src: string;
  alt: string;
  className?: string;
  threshold?: number; // 0 to 255. Pixels with R, G, B >= threshold are treated as white background.
  id?: string;
  style?: React.CSSProperties;
}

export const TransparentImage: React.FC<TransparentImageProps> = ({
  src,
  alt,
  className,
  threshold = 240,
  id,
  style
}) => {
  const [processedSrc, setProcessedSrc] = useState<string>(src);
  const prevSrc = useRef<string>("");

  useEffect(() => {
    if (prevSrc.current === src) return;
    prevSrc.current = src;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.referrerPolicy = "no-referrer";
    img.src = src;

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;
        
        // Skip background removal if the canvas dimensions are empty or too small
        if (!width || !height) {
          setProcessedSrc(src);
          return;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          setProcessedSrc(src);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;

        // Flood fill (BFS) starting from the edges of the image to carve out the white background.
        // Doing BFS instead of simple thresholding prevents inner white details (like a white collar)
        // from becoming transparent, keeping only the actual background clear.
        const visited = new Uint8Array(width * height);
        const queue: number[] = [];

        // We use an aggressive seed threshold for background detection. 
        // Seeding from Top, Left, and Right edges, while avoiding Bottom edge to preserve her white blouse completely.
        const seedThreshold = threshold < 240 ? threshold : 185;

        const isSeedWhite = (idx: number) => {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          return r >= seedThreshold && g >= seedThreshold && b >= seedThreshold;
        };

        // Enqueue top border pixels
        for (let x = 0; x < width; x++) {
          const topIdx = x;
          if (isSeedWhite(topIdx * 4)) {
            visited[topIdx] = 1;
            queue.push(topIdx);
          }
        }

        // Enqueue left and right border pixels
        for (let y = 1; y < height - 1; y++) {
          const leftIdx = y * width;
          const rightIdx = y * width + (width - 1);

          if (isSeedWhite(leftIdx * 4)) {
            visited[leftIdx] = 1;
            queue.push(leftIdx);
          }
          if (isSeedWhite(rightIdx * 4)) {
            visited[rightIdx] = 1;
            queue.push(rightIdx);
          }
        }

        // BFS with a slightly more lenient threshold to get deep into the antialiased borders
        const fillThreshold = seedThreshold - 15;
        const isNeighborWhite = (idx: number) => {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          return r >= fillThreshold && g >= fillThreshold && b >= fillThreshold;
        };

        let queueHead = 0;
        while (queueHead < queue.length) {
          const curr = queue[queueHead++];
          const cx = curr % width;
          const cy = Math.floor(curr / width);

          // 4-way neighbors
          const neighbors: number[] = [];
          if (cx > 0) neighbors.push(curr - 1);
          if (cx < width - 1) neighbors.push(curr + 1);
          if (cy > 0) neighbors.push(curr - width);
          if (cy < height - 1) neighbors.push(curr + width);

          for (let i = 0; i < neighbors.length; i++) {
            const nIdx = neighbors[i];
            if (!visited[nIdx] && isNeighborWhite(nIdx * 4)) {
              visited[nIdx] = 1;
              queue.push(nIdx);
            }
          }
        }

        // Distance map using a BFS starting from the background pixels
        const distance = new Int32Array(width * height);
        // We set distance to -1 for non-background, and 0 for background
        for (let i = 0; i < width * height; i++) {
          if (visited[i] === 1) {
            distance[i] = 0;
          } else {
            distance[i] = -1;
          }
        }

        // Initialize the distance queue with all background pixels that are adjacent to non-background.
        // This is a multi-source BFS.
        const distQueue: number[] = [];
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            if (visited[idx] === 1) {
              // Check if it has any non-background neighbors
              let hasSubjectNeighbor = false;
              if (x > 0 && visited[idx - 1] === 0) hasSubjectNeighbor = true;
              if (x < width - 1 && visited[idx + 1] === 0) hasSubjectNeighbor = true;
              if (y > 0 && visited[idx - width] === 0) hasSubjectNeighbor = true;
              if (y < height - 1 && visited[idx + width] === 0) hasSubjectNeighbor = true;

              if (hasSubjectNeighbor) {
                distQueue.push(idx);
              }
            }
          }
        }

        let distHead = 0;
        const maxDist = 6; // Analyze up to 6 pixels deep for ultra-smooth halo-free transitions
        while (distHead < distQueue.length) {
          const curr = distQueue[distHead++];
          const cx = curr % width;
          const cy = Math.floor(curr / width);
          const currDist = distance[curr];

          if (currDist >= maxDist) continue;

          // 4-way neighbors
          const neighbors: number[] = [];
          if (cx > 0) neighbors.push(curr - 1);
          if (cx < width - 1) neighbors.push(curr + 1);
          if (cy > 0) neighbors.push(curr - width);
          if (cy < height - 1) neighbors.push(curr + width);

          for (let i = 0; i < neighbors.length; i++) {
            const nIdx = neighbors[i];
            if (distance[nIdx] === -1) {
              distance[nIdx] = currDist + 1;
              distQueue.push(nIdx);
            }
          }
        }

        // Process final image data: Clear background, feather edges dynamically, and neutralize color-bleeds (de-fringe)
        for (let i = 0; i < width * height; i++) {
          const pixelIdx = i * 4;
          const d = distance[i];

          if (d === 0) {
            data[pixelIdx + 3] = 0; // Make background fully transparent
          } else if (d > 0 && d <= maxDist) {
            const r = data[pixelIdx];
            const g = data[pixelIdx + 1];
            const b = data[pixelIdx + 2];
            const originalAlpha = data[pixelIdx + 3];

            // Calculate lightness of this border pixel
            const brightness = (r + g + b) / 3;

            // Highlight describes how close to pure white this pixel is.
            // Darker colors (like her blazer under 75 brightness) shouldn't be feathered heavily because they are sharp edges.
            // Brighter colors (like hair or skin edges which have high R, G, B due to white bleed) should be feathered and darkened.
            const highlight = Math.max(0, (brightness - 75) / 180);

            if (highlight > 0) {
              // 1. Calculate an optimal alpha scaling factor based on the distance.
              // For d = 1, we want significant transparency. For d = 6, we want it almost fully opaque.
              let alphaFactor = 1.0;
              if (d === 1) {
                alphaFactor = 1.0 - (0.94 * highlight);
              } else if (d === 2) {
                alphaFactor = 1.0 - (0.78 * highlight);
              } else if (d === 3) {
                alphaFactor = 1.0 - (0.55 * highlight);
              } else if (d === 4) {
                alphaFactor = 1.0 - (0.35 * highlight);
              } else if (d === 5) {
                alphaFactor = 1.0 - (0.18 * highlight);
              } else if (d === 6) {
                alphaFactor = 1.0 - (0.06 * highlight);
              }

              data[pixelIdx + 3] = Math.round(originalAlpha * alphaFactor);

              // 2. Perform de-fringing (anti-halo) processing.
              // White backlight shifts original colors towards 255.
              // We pull the color back towards its darker true hue by scaling down.
              // Pull is strongest at the immediate boundary (d=1) and fades out at d=maxDist.
              const pullFactor = highlight * (1.15 - d / (maxDist + 1));
              
              // Darken the colors proportional to the white bleed (pullFactor)
              const scale = 1.0 - (pullFactor * 0.38);
              data[pixelIdx] = Math.max(0, Math.round(r * scale));
              data[pixelIdx + 1] = Math.max(0, Math.round(g * scale));
              data[pixelIdx + 2] = Math.max(0, Math.round(b * scale));
            } else {
              // For sharp dark edges (like the black/navy suit), just apply a very subtle anti-aliasing softening
              // to make the edges premium and organic on high-dpi retina displays.
              if (d === 1) {
                data[pixelIdx + 3] = Math.round(originalAlpha * 0.72);
              } else if (d === 2) {
                data[pixelIdx + 3] = Math.round(originalAlpha * 0.92);
              }
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setProcessedSrc(canvas.toDataURL("image/png"));
      } catch (err) {
        console.warn("TransparentImage: Fallback triggered due to error:", err);
        setProcessedSrc(src);
      }
    };

    img.onerror = () => {
      setProcessedSrc(src);
    };
  }, [src, threshold]);

  return (
    <img
      id={id}
      src={processedSrc}
      alt={alt}
      className={className}
      style={style}
      referrerPolicy="no-referrer"
    />
  );
};
