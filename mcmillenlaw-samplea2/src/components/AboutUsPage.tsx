import React from "react";
import { ArrowRight, ShieldCheck, Scale, Award, GraduationCap, Landmark } from "lucide-react";

interface AboutUsPageProps {
  language: "en" | "es";
  onBackToHome: () => void;
  onNavigateContact: () => void;
  maryPortrait: string;
  officeImage?: string;
  lawBooksImage?: string;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  language,
  onBackToHome,
  onNavigateContact,
  maryPortrait
}) => {
  const isEs = language === "es";

  const t = {
    subtitle: isEs ? "CONSEJO JURÍDICO INDEPENDIENTE" : "INDEPENDENT LEGAL COUNSEL",
    heroHeading: isEs 
      ? "Soluciones legales confiables para sus mayores ambiciones." 
      : "Reliable legal solutions for your highest ambitions.",
    heroDesc: isEs
      ? "Servicios personalizados para individuos, familias y empresas. Obtenga claridad, proteja sus derechos y avance con total serenidad."
      : "Tailored services for individuals, families, and businesses. Gain clarity, protect your rights, and move forward with absolute peace of mind.",
    btnSchedule: isEs ? "Programar consulta" : "Schedule consultation",
    btnDiscover: isEs ? "Descubrir servicios" : "Discover services",
    
    servicesSub: isEs ? "NUESTROS SERVICIOS" : "OUR SERVICES",
    
    s1Title: isEs ? "Defensa Penal Estratégica" : "Strategic Criminal Defense",
    s1Desc: isEs ? "Representación rigurosa en tribunales estatales y federales para proteger su libertad." : "Rigorous representation in state and federal courts to protect your freedom.",
    
    s2Title: isEs ? "Defensa de Inmigración" : "Immigration Defense",
    s2Desc: isEs ? "Optimización de casos migratorios y defensa contra deportación con total confidencialidad." : "Immigration case optimization and deportation defense with complete confidentiality.",
    
    s3Title: isEs ? "Asesoría Legal Estratégica" : "Strategic Legal Counsel",
    s3Desc: isEs ? "Recomendaciones personalizadas para salvaguardar sus intereses y asegurar su futuro." : "Personalized recommendations to safeguard your interests and secure your future.",
    
    moreLink: isEs ? "Saber más" : "Learn more",

    bioSub: isEs ? "BIOGRAFÍA DE LA ABOGADA" : "ATTORNEY BIOGRAPHY",
    bioTitle: isEs ? "Mary McMillen — Defensora Inquebrantable de sus Derechos" : "Mary McMillen — Dedicated Advocate for Your Rights",
    bioP1: isEs 
      ? "Mary McMillen ha dedicado su carrera legal a defender a personas que enfrentan desafíos jurídicos decisivos en todo Oklahoma. Con años de experiencia en los tribunales, Mary ha construido una reputación de defensa firme, estrategia rigurosa y profunda empatía hacia sus clientes."
      : "Mary McMillen has dedicated her legal career to standing up for individuals facing life-altering legal challenges across Oklahoma. With years of courtroom experience, Mary has built a reputation for fierce advocacy, strategic defense, and deep empathy for her clients.",
    bioP2: isEs
      ? "Como fundadora de McMillen Legal, Mary gestiona una amplia gama de casos que incluyen Defensa Penal (DUI/DWI, cargos por drogas, multas de tráfico, cancelación de antecedentes y órdenes de protección) y Servicios de Inmigración. Ella cree firmemente que cada persona merece una voz poderosa en los tribunales y una estrategia legal elaborada minuciosamente."
      : "As the founder of McMillen Legal, Mary handles a wide array of matters including Criminal Defense (DUI/DWI, drug charges, traffic citations, expungements, and protective orders) and Immigration Defense. She firmly believes that every individual deserves a powerful voice in the courtroom and a meticulously crafted legal strategy.",
    bioP3: isEs
      ? "Mary se destaca por su trato cercano y comunicación directa con sus clientes. Reconociendo la riqueza de la comunidad de Oklahoma, ofrece atención bilingüe completa en inglés y español, garantizando que el idioma nunca sea un obstáculo para recibir la mejor justicia."
      : "Mary is known for her hands-on approach and direct communication with every client. Recognizing the diversity of Oklahoma's community, she offers fully bilingual legal representation in English and Spanish, ensuring language is never a barrier to accessing justice.",
    bioBtn: isEs ? "PROGRAMAR CONSULTA CON MARY" : "SCHEDULE A CONSULTATION WITH MARY",
    
    statsTagline: isEs ? "RESULTADOS QUE IMPORTAN" : "RESULTS THAT MATTER",

    stats1Val: "250+",
    stats1Label: isEs ? "Clientes acompañados" : "Clients represented",
    stats2Val: "15+",
    stats2Label: isEs ? "Años de experiencia" : "Years of experience",
    stats3Val: "98%",
    stats3Label: isEs ? "Satisfacción del cliente" : "Client satisfaction",
    stats4Val: "500+",
    stats4Label: isEs ? "Casos gestionados" : "Cases handled"
  };

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
              {t.bioSub}
            </div>
            <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-normal text-[#132444] leading-tight">
              {t.bioTitle}
            </h2>
            <div className="space-y-4 text-[#202735]/85 text-base sm:text-lg leading-relaxed font-normal">
              <p>{t.bioP1}</p>
              <p>{t.bioP2}</p>
              <p>{t.bioP3}</p>
            </div>
          </div>

          {/* Credentials / Honors / Education / Bar Admissions 2x2 Grid with Blue Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black/10">
            {/* HONORS */}
            <div className="flex items-start gap-3.5">
              <div className="text-[#132444] p-1 mt-0.5 shrink-0">
                <Award size={24} className="text-[#132444]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#132444]">
                  {isEs ? "RECONOCIMIENTOS" : "HONORS"}
                </div>
                <div className="font-sans font-bold text-[#132444] text-sm sm:text-base mt-0.5 leading-snug">
                  {isEs 
                    ? "Abogada Destacada en Defensa Penal y Litigios de Oklahoma" 
                    : "Top-Rated Oklahoma Criminal Defense & Trial Attorney"
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
                    ? "Defensa Penal • DUI y Tráfico • Cargos de Drogas • Cancelación de Antecedentes • Inmigración" 
                    : "Criminal Defense • DUI & Traffic • Drug Charges • Expungements • Immigration"
                  }
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="flex items-start gap-3.5">
              <div className="text-[#132444] p-1 mt-0.5 shrink-0">
                <GraduationCap size={24} className="text-[#132444]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#132444]">
                  {isEs ? "EDUCACIÓN" : "EDUCATION"}
                </div>
                <div className="font-sans font-bold text-[#132444] text-sm sm:text-base mt-0.5 leading-snug">
                  {isEs 
                    ? "Doctora en Jurisprudencia (J.D.), Facultad de Derecho" 
                    : "J.D., University Law School"
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
                  {isEs ? "ADMISIONES AL COLEGIO DE ABOGADOS" : "BAR ADMISSIONS"}
                </div>
                <div className="font-sans font-bold text-[#132444] text-sm sm:text-base mt-0.5 leading-snug">
                  {isEs 
                    ? "Oklahoma • Tribunales Federales de Distrito de Oklahoma" 
                    : "Oklahoma • Federal District Courts of Oklahoma"
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
              {t.bioBtn} <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#132444] text-white py-16">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/15">
            <div className="p-4">
              <div className="font-serif text-[2.5rem] lg:text-[3rem] font-bold text-[#D4A74A] leading-none mb-2">{t.stats1Val}</div>
              <div className="text-[11px] uppercase font-bold tracking-[0.18em] text-white/80">{t.stats1Label}</div>
            </div>
            <div className="p-4">
              <div className="font-serif text-[2.5rem] lg:text-[3rem] font-bold text-[#D4A74A] leading-none mb-2">{t.stats2Val}</div>
              <div className="text-[11px] uppercase font-bold tracking-[0.18em] text-white/80">{t.stats2Label}</div>
            </div>
            <div className="p-4">
              <div className="font-serif text-[2.5rem] lg:text-[3rem] font-bold text-[#D4A74A] leading-none mb-2">{t.stats3Val}</div>
              <div className="text-[11px] uppercase font-bold tracking-[0.18em] text-white/80">{t.stats3Label}</div>
            </div>
            <div className="p-4">
              <div className="font-serif text-[2.5rem] lg:text-[3rem] font-bold text-[#D4A74A] leading-none mb-2">{t.stats4Val}</div>
              <div className="text-[11px] uppercase font-bold tracking-[0.18em] text-white/80">{t.stats4Label}</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

