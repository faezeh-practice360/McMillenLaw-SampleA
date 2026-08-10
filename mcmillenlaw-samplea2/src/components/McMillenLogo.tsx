import React from "react";

interface McMillenLogoProps {
  className?: string; // Additional classes for positioning
  iconSize?: number;  // Height of the icon, width auto or matching ratio
  textColorClass?: string; // Text color overrides
  iconColorClass?: string; // Icon color overrides
}

export function McMillenLogo({
  className = "",
  iconSize = 48,
  textColorClass = "text-[#132444]",
  iconColorClass = "text-[#132444]",
}: McMillenLogoProps) {
  // Calculated size based on aspect ratio
  const height = iconSize;
  const width = (iconSize * 3.3).toFixed(1); // Aspect ratio of icon + text is around 3.3x

  return (
    <div className={`flex items-center gap-3 ${className}`} id="mcmillen-logo-wrapper">
      {/* 1. Shield Icon Vector */}
      <svg
        id="mcmillen-shield-svg"
        width={height}
        height={height}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 transition-colors duration-300 ${iconColorClass}`}
      >
        {/* Outer Shield Border */}
        <polygon
          points="50,2 96,16 96,78 50,113 4,78 4,16"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinejoin="miter"
        />

        {/* Inner Solid Shield Body */}
        <polygon
          points="50,9 90,21 90,74 50,104 10,74 10,21"
          fill="currentColor"
        />

        {/* Column & Arch details (Rendered in white/background mask for perfect cutout effect or contrasting overlay) */}
        {/* We use white fill/stroke for column components inside the filled shield */}
        <g fill="white">
          {/* Top Arch Bar (Roof Chevron) */}
          <path d="M 19 33 C 25 28, 38 25, 50 25 C 62 25, 75 28, 81 33 C 81 35, 79 36, 77 35 C 69 33, 60 30, 50 30 C 40 30, 31 33, 23 35 C 21 36, 19 35, 19 33 Z" />

          {/* Middle Arch Bar */}
          <path d="M 23 42 C 29 38, 40 36, 50 36 C 60 36, 71 38, 77 42 C 77 44, 75 45, 73 44 C 66 42, 58 40, 50 40 C 42 40, 34 42, 27 44 C 25 45, 23 44, 23 42 Z" />

          {/* Capital Beam (Third Arch) */}
          <path d="M 27 50 C 33 47, 41 45, 50 45 C 59 45, 67 47, 73 50 C 73 52, 71 53, 69 52 C 63 50, 57 49, 50 49 C 43 49, 37 50, 31 52 C 29 53, 27 52, 27 50 Z" />

          {/* Left Column Shaft */}
          <path d="M 37 53 C 37 51, 41 51, 45 53 L 45 84 L 37 84 Z" />

          {/* Center Column Shaft (Ends in a point at bottom to match shield shape) */}
          <polygon points="49,53 51,53 55,54 55,95 50,101 45,95 45,54" />

          {/* Right Column Shaft */}
          <path d="M 55 53 C 55 51, 59 51, 63 53 L 63 84 L 55 84 Z" />

          {/* Sidebar lines or framing to mimic column structural details */}
          <rect x="31" y="55" width="2" height="30" opacity="0.9" />
          <rect x="67" y="55" width="2" height="30" opacity="0.9" />
        </g>
      </svg>

      {/* 2. Brand Name Typography */}
      <div className="flex flex-col select-none leading-[1.05]" id="mcmillen-text-part">
        <span
          className={`font-serif text-[1.45rem] font-bold tracking-[0.04em] ${textColorClass} transition-colors duration-300`}
        >
          McMillen
        </span>
        <span
          className={`font-serif text-[1.25rem] font-extrabold uppercase tracking-[0.16em] ${textColorClass} transition-colors duration-300`}
        >
          LEGAL
        </span>
      </div>
    </div>
  );
}
