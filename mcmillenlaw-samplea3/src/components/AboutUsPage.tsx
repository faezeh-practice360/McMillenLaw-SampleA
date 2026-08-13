import React from "react";
import { ArrowRight, ShieldCheck, Scale, Award, GraduationCap, Landmark } from "lucide-react";
import { TestimonialsSection } from "./TestimonialsSection";
import { ContactSection } from "./ContactSection";

interface AboutUsPageProps {
  language: "en" | "es";
  onBackToHome: () => void;
  onNavigateContact: () => void;
  maryPortrait: string;
  officeImage?: string;
  lawBooksImage?: string;
  
  // State props
  t: any;
  currentReviewIndex: number;
  setCurrentReviewIndex: (index: number) => void;
  testimonials: { text: string; client: string }[];
  formData: any;
  handleInputChange: (e: any) => void;
  handleFormSubmit: (e: any) => void;
  contactBg: string;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  language,
  onBackToHome,
  onNavigateContact,
  maryPortrait,
  
  // State props
  t,
  currentReviewIndex,
  setCurrentReviewIndex,
  testimonials,
  formData,
  handleInputChange,
  handleFormSubmit,
  contactBg
}) => {
  const isEs = language === "es";

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#202735] font-sans antialiased">

      {/* Attorney Mary McMillen Biography Section */}
      <section className="py-24 px-6 sm:px-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-3 bg-[#D4A74A]/15 rounded-xl transform -rotate-1 -z-10" />
          <div className="overflow-hidden rounded-xl shadow-2xl border border-black/10 bg-white">
            <img
              src={maryPortrait}
              alt="Attorney Mary McMillen"
              className="w-full h-[480px] sm:h-[560px] object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="text-[10px] font-bold tracking-[0.25em] text-[#D4A74A] uppercase">
              {t.aboutTagline}
            </div>
            <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-normal text-[#132444] leading-tight">
              Mary McMillen
            </h2>
            <div className="space-y-4 text-[#202735]/85 text-base sm:text-lg leading-relaxed font-normal">
              <p>{t.aboutBioP1}</p>
              <p>{t.aboutBioP2}</p>
              <p>{t.aboutBioP3}</p>
            </div>
          </div>

          {/* Credentials / Honors / Education / Bar Admissions 2x2 Grid with Blue Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black/10">
            {/* HONORS & ADVOCACY */}
            <div className="flex items-start gap-3.5">
              <div className="text-[#132444] p-1 mt-0.5 shrink-0">
                <Award size={24} className="text-[#132444]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#132444]">
                  {isEs ? "RECONOCIMIENTOS Y DEFENSORÍA" : "HONORS & ADVOCACY"}
                </div>
                <div className="font-sans font-bold text-[#132444] text-sm sm:text-base mt-0.5 leading-snug">
                  {isEs 
                    ? "Más de 10 Años Defendiendo a Tulsa • Aliada de la Comunidad LGBTQ+ y Minorías" 
                    : "10+ Years Advocating for Tulsa • Ally to LGBTQ+ Community & Minorities"
                  }
                </div>
              </div>
            </div>

            {/* PRACTICE FOCUS */}
            <div className="flex items-start gap-3.5">
              <div className="text-[#132444] p-1 mt-0.5 shrink-0">
                <Scale size={24} className="text-[#132444]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#132444]">
                  {isEs ? "ENFOQUE DE PRÁCTICA" : "PRACTICE FOCUS"}
                </div>
                <div className="font-sans font-bold text-[#132444] text-sm sm:text-base mt-0.5 leading-snug">
                  {isEs 
                    ? "Defensa Penal • DUI y Tráfico • Cargos de Drogas • Cancelación de Antecedentes • Órdenes de Protección" 
                    : "Criminal Defense • DUI & Traffic • Drug Charges • Expungements • Protective Orders"
                  }
                </div>
              </div>
            </div>

            {/* EDUCATION & BACKGROUND */}
            <div className="flex items-start gap-3.5">
              <div className="text-[#132444] p-1 mt-0.5 shrink-0">
                <GraduationCap size={24} className="text-[#132444]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#132444]">
                  {isEs ? "EDUCACIÓN Y EXPERIENCIA" : "EDUCATION & BACKGROUND"}
                </div>
                <div className="font-sans font-bold text-[#132444] text-sm sm:text-base mt-0.5 leading-snug">
                  {isEs 
                    ? "Ex Instructora en la Universidad Estatal de Northeastern (Tahlequah)" 
                    : "Former Instructor at Northeastern State University (Tahlequah)"
                  }
                </div>
              </div>
            </div>

            {/* BAR ADMISSIONS */}
            <div className="flex items-start gap-3.5">
              <div className="text-[#132444] p-1 mt-0.5 shrink-0">
                <Landmark size={24} className="text-[#132444]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#132444]">
                  {isEs ? "LICENCIA PROFESIONAL" : "BAR ADMISSION"}
                </div>
                <div className="font-sans font-bold text-[#132444] text-sm sm:text-base mt-0.5 leading-snug">
                  {isEs 
                    ? "Licenciada para Ejercer el Derecho en Oklahoma desde 2012" 
                    : "Licensed to Practice Law in Oklahoma Since 2012"
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onNavigateContact}
              className="inline-flex items-center gap-3 bg-[#132444] hover:bg-[#D4A74A] hover:text-[#132444] text-white font-bold text-[11.5px] uppercase tracking-[0.2em] px-8 py-4 transition-all shadow-lg cursor-pointer border-none"
            >
              {t.aboutButton} <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section id="results" className="bg-[#132444] text-white py-14">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="text-[11.5px] text-[#D4A74A] font-bold uppercase tracking-[0.25em] text-center mb-10">
            {t.statsTagline}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 divide-y-0 divide-x-0 lg:divide-x divide-white/10 text-center animate-fade-in">
            
            <div className="py-2">
              <div className="font-sans text-[clamp(1.8rem,3vw,2.4rem)] lg:text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold text-[#D4A74A] leading-none">{t.stats1Val}</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.18em] text-white/70 mt-2.5">{t.stats1Label}</div>
            </div>

            <div className="py-2">
              <div className="font-sans text-[clamp(1.8rem,3vw,2.4rem)] lg:text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold text-[#D4A74A] leading-none">{t.stats2Val}</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.18em] text-white/70 mt-2.5">{t.stats2Label}</div>
            </div>

            <div className="py-2">
              <div className="font-sans text-[clamp(1.8rem,3vw,2.4rem)] lg:text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold text-[#D4A74A] leading-none">{t.stats3Val}</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.18em] text-white/70 mt-2.5">{t.stats3Label}</div>
            </div>

            <div className="py-2">
              <div className="font-sans text-[clamp(1.8rem,3vw,2.4rem)] lg:text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold text-[#D4A74A] leading-none">{t.stats4Val}</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.18em] text-white/70 mt-2.5">{t.stats4Label}</div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection t={t} currentReviewIndex={currentReviewIndex} setCurrentReviewIndex={setCurrentReviewIndex} testimonials={testimonials} />
      
      {/* Contact */}
      <ContactSection t={t} formData={formData} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} contactBg={contactBg} />

    </div>
  );
};
