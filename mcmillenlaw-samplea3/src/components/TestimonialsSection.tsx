import React from "react";
import { Star } from "lucide-react";

interface TestimonialsSectionProps {
  t: any;
  currentReviewIndex: number;
  setCurrentReviewIndex: (index: number) => void;
  testimonials: { text: string; client: string }[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  t,
  currentReviewIndex,
  setCurrentReviewIndex,
  testimonials,
}) => {
  return (
    <section id="testimonials" className="bg-[#FCFBF8] py-[100px] text-center border-t border-[#EFECE7]">
      <div className="mx-auto max-w-[1180px] px-6">
        
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="h-px w-10 bg-[#202735]/15" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">{t.reviewsTagline}</span>
          <span className="h-px w-10 bg-[#202735]/15" />
        </div>

        <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-none text-[#202735] uppercase mt-2 mb-16">
          {t.reviewsTitle}
        </h2>

        {/* Desktop View: shows 3 items, shifts smoothly */}
        <div className="hidden md:block overflow-hidden py-4">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentReviewIndex} * (33.333% + 16px)))`
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="w-1/3 shrink-0 bg-[#FCFBF8] p-8 border border-[#EFECE7] shadow-sm text-left flex flex-col justify-between min-h-[340px] relative overflow-hidden"
              >
                <div className="absolute top-4 right-6 text-[#D4A74A]/10 font-serif text-[90px] leading-none pointer-events-none select-none">
                  “
                </div>
                <div>
                  <span className="font-serif text-[42px] text-[#D4A74A] leading-none select-none block mb-1">“</span>
                  <p className="text-[17.5px] leading-[1.75] text-[#202735] font-sans font-light italic line-clamp-6">
                    {testimonial.text}
                  </p>
                </div>
                <div className="mt-5 border-t border-[#EFECE7] pt-4">
                  <h4 className="text-[15px] font-bold text-[#132444] uppercase tracking-wider">{testimonial.client}</h4>
                  <div className="flex gap-1 mt-1.5 text-[#D4A74A]">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: shows 1 item at a time, shifts smoothly */}
        <div className="block md:hidden overflow-hidden py-4 max-w-[340px] mx-auto">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentReviewIndex} * (100% + 24px)))`
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="w-full shrink-0 bg-[#FCFBF8] p-8 border border-[#EFECE7] shadow-sm text-left flex flex-col justify-between min-h-[300px] relative overflow-hidden"
              >
                <div className="absolute top-4 right-6 text-[#D4A74A]/10 font-serif text-[90px] leading-none pointer-events-none select-none">
                  “
                </div>
                <div>
                  <span className="font-serif text-[42px] text-[#D4A74A] leading-none select-none block mb-1">“</span>
                  <p className="text-[17.5px] leading-[1.75] text-[#202735] font-sans font-light italic">
                    {testimonial.text}
                  </p>
                </div>
                <div className="mt-5 border-t border-[#EFECE7] pt-4">
                  <h4 className="text-[15px] font-bold text-[#132444] uppercase tracking-wider">{testimonial.client}</h4>
                  <div className="flex gap-1 mt-1.5 text-[#D4A74A]">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentReviewIndex(i)}
              className={`h-2.5 transition-all duration-300 cursor-pointer ${
                i === currentReviewIndex ? "w-8 bg-[#D4A74A]" : "w-2.5 bg-[#132444]/20 hover:bg-[#132444]/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
