import React, { useState } from "react";
import { ArrowRight, Phone, Clock, Search, ChevronRight, BookOpen, FileText } from "lucide-react";

interface ResourcesPageProps {
  language: "en" | "es";
  onBackToHome: () => void;
  onNavigateAbout: () => void;
  onNavigateContact: () => void;
  lawBooksImage: string;
  maryPortrait: string;
  officeImage: string;
}

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  language,
  onBackToHome,
  onNavigateAbout,
  onNavigateContact,
  lawBooksImage,
  maryPortrait,
  officeImage
}) => {
  const isEs = language === "es";

  // Initial visible items count for load more grid
  const [visibleCount, setVisibleCount] = useState(6);


  const allArticles: Article[] = [
    {
      id: "1",
      category: isEs ? "Derecho Penal" : "Criminal Defense",
      title: isEs ? "Entendiendo sus derechos durante una investigación policial en Oklahoma" : "Understanding your rights during a police investigation in Oklahoma",
      excerpt: isEs 
        ? "Conozca los pasos esenciales que debe seguir y los errores comunes que debe evitar al enfrentar preguntas de las autoridades."
        : "Learn the essential steps to take and common mistakes to avoid when questioned by law enforcement authorities.",
      date: "Aug 10",
      readTime: "10 min read",
      image: lawBooksImage
    },
    {
      id: "2",
      category: isEs ? "Inmigración" : "Immigration",
      title: isEs ? "Guía completa para la renovación y ajuste de estatus migratorio" : "Complete guide to immigration status renewal and adjustment",
      excerpt: isEs
        ? "Una visión detallada de los requisitos actuales de USCIS y cómo preparar un expediente sólido para su familia."
        : "A detailed breakdown of current USCIS requirements and how to prepare a robust application for your family.",
      date: "Aug 12",
      readTime: "8 min read",
      image: officeImage
    },
    {
      id: "3",
      category: isEs ? "Tribunales" : "Court Process",
      title: isEs ? "Qué esperar en su primera comparecencia ante el tribunal de Tulsa" : "What to expect at your first court appearance in Tulsa",
      excerpt: isEs
        ? "Prepárese con confianza con nuestra guía paso a paso sobre el proceso de lectura de cargos y fianzas."
        : "Prepare with confidence using our step-by-step guide regarding arraignments and bond hearings.",
      date: "Aug 15",
      readTime: "6 min read",
      image: maryPortrait
    },
    {
      id: "4",
      category: isEs ? "Consejos Legales" : "Legal Advice",
      title: isEs ? "Cómo elegir al abogado adecuado para su defensa en Oklahoma" : "How to choose the right attorney for your defense in Oklahoma",
      excerpt: isEs
        ? "Factores clave a considerar al evaluar la experiencia, reputación y dedicación de su representante legal."
        : "Key factors to consider when evaluating experience, reputation, and dedication of your legal representative.",
      date: "Aug 18",
      readTime: "12 min read",
      image: lawBooksImage
    },
    {
      id: "5",
      category: isEs ? "Derechos de Familia" : "Family Rights",
      title: isEs ? "Protegiendo los derechos de los padres en el sistema estatal" : "Protecting parental rights within the state court system",
      excerpt: isEs
        ? "Estrategias legales para asegurar acuerdos justos y proteger el bienestar de sus seres queridos."
        : "Legal strategies to ensure fair agreements and protect the well-being of your loved ones.",
      date: "Aug 20",
      readTime: "9 min read",
      image: officeImage
    },
    {
      id: "6",
      category: isEs ? "Defensa Federal" : "Federal Defense",
      title: isEs ? "Diferencias clave entre los cargos estatales y federales" : "Key differences between state and federal criminal charges",
      excerpt: isEs
        ? "Comprenda las jurisdicciones, penalidades y la importancia de contar con un abogado licenciado en tribunales federales."
        : "Understand jurisdictions, penalties, and the critical importance of federal court representation.",
      date: "Aug 22",
      readTime: "15 min read",
      image: maryPortrait
    },
    {
      id: "7",
      category: isEs ? "Ciudadanía" : "Citizenship",
      title: isEs ? "Preparación para el examen de naturalización y entrevista" : "Preparation for the naturalization test and interview",
      excerpt: isEs
        ? "Consejos prácticos y recursos oficiales para superar con éxito el examen cívico y de inglés."
        : "Practical tips and official resources to successfully pass the civics and English examination.",
      date: "Aug 25",
      readTime: "7 min read",
      image: lawBooksImage
    },
    {
      id: "8",
      category: isEs ? "Audiencias" : "Hearings",
      title: isEs ? "Moción para suprimir pruebas: ¿Cuándo aplica en su caso?" : "Motion to suppress evidence: When does it apply in your case?",
      excerpt: isEs
        ? "Cómo las violaciones constitucionales de la Cuarta Enmienda pueden impactar positivamente su defensa."
        : "How Fourth Amendment constitutional violations can positively impact your criminal defense.",
      date: "Aug 28",
      readTime: "11 min read",
      image: officeImage
    }
  ];

  const sidebarArticles = [
    {
      title: isEs ? "Estrategias clave para la defensa penal en Oklahoma" : "Key strategies for criminal defense in Oklahoma",
      date: "Aug 10",
      readTime: "10 min read",
      image: lawBooksImage
    },
    {
      title: isEs ? "Consejos para preparar una consulta legal exitosa" : "Tips for preparing a successful legal consultation",
      date: "Aug 10",
      readTime: "10 min read",
      image: officeImage
    },
    {
      title: isEs ? "Cómo establecer una jerarquía clara en casos complejos" : "Exploring how to establish clear visual hierarchy for clients",
      date: "Aug 10",
      readTime: "10 min read",
      image: maryPortrait
    },
    {
      title: isEs ? "Uso de precedentes para influir en las decisiones judiciales" : "How to use precedents to influence judicial decisions",
      date: "Aug 10",
      readTime: "10 min read",
      image: lawBooksImage
    }
  ];

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, allArticles.length));
  };

  const t = {
    brandName: "MCMILLEN LAW",
    tagline: isEs ? "RECURSOS Y ARTÍCULOS" : "RESOURCES & ARTICLES",
    navHome: isEs ? "Inicio" : "Home",
    navAbout: isEs ? "Sobre nosotros" : "About Us",
    navServices: isEs ? "Servicios" : "Services",
    navContact: isEs ? "Contacto" : "Contact",
    latestPostTitle: isEs ? "Últimas publicaciones" : "Latest post",
    foundersCorner: isEs ? "Rincón legal y fundacional" : "Founders corner",
    loadMore: isEs ? "Cargar más artículos" : "Load more articles",
    featuredCategory: isEs ? "Categoría principal" : "Category",
    featuredTitle: isEs ? "Fortaleciendo la defensa legal con estrategias modernas y dedicación inquebrantable" : "Enhancing Legal Defense and Client Advocacy: A Game-Changer for Modern Workflows",
    featuredDesc: isEs ? "Acceda a recursos exclusivos, guías detalladas y análisis jurídicos preparados por la abogada Mary McMillen para proteger sus derechos." : "Access exclusive resources, detailed guides, and legal analysis prepared by attorney Mary McMillen to protect your rights.",
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#202735] font-sans antialiased flex flex-col">

      {/* Main Container matching reference framing */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 sm:px-10 py-12 space-y-16">

        {/* Top Hero Section: Large Featured Card on Left + Sidebar Latest Post on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Large Feature Card */}
          <div className="lg:col-span-8 bg-[#132444] text-white overflow-hidden border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#D4A74A]">
                <span className="w-2 h-2 bg-[#D4A74A]" />
                {t.featuredCategory}
              </div>
              <h1 className="font-serif text-[clamp(1.6rem,2.5vw,2.4rem)] font-normal text-white leading-tight">
                {t.featuredTitle}
              </h1>
              <div className="relative overflow-hidden mb-4 group pt-2">
                <img
                  src={lawBooksImage}
                  alt="Featured Article"
                  className="w-full h-[280px] sm:h-[350px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
              </div>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {t.featuredDesc}
              </p>
              <div className="flex items-center gap-3 text-xs text-white/60 pt-2 font-medium">
                <span>Aug 10</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Latest Post list */}
          <div className="lg:col-span-4 bg-[#132444] text-white p-6 sm:p-8 border border-white/10 space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-[20px] font-bold text-white border-b border-white/10 pb-4">
                {t.latestPostTitle}
              </h2>

              <div className="space-y-6 mt-6">
                {sidebarArticles.map((art, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-5 border-b border-white/10 last:border-none last:pb-0 group cursor-pointer">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-20 h-20 object-cover shrink-0 group-hover:scale-105 transition-transform opacity-90"
                    />
                    <div className="space-y-1.5 flex-1">
                      <h3 className="font-serif text-[13px] font-bold text-white group-hover:text-[#D4A74A] transition-colors line-clamp-2 leading-snug">
                        {art.title}
                      </h3>
                      <div className="text-[11px] text-white/60 flex items-center gap-2">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Founders corner & Articles Grid Section with Load More */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <h2 className="font-serif text-[24px] sm:text-[28px] font-normal text-[#132444]">
              {t.foundersCorner}
            </h2>
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {allArticles.slice(0, visibleCount).map((article) => (
              <div 
                key={article.id} 
                className="bg-[#132444] text-white overflow-hidden border border-white/10 hover:border-[#D4A74A]/40 transition-all flex flex-col justify-between group h-full p-6"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#D4A74A]">
                    <span className="w-1.5 h-1.5 bg-[#D4A74A]" />
                    {article.category}
                  </div>
                  <h3 className="font-serif text-[18px] font-bold text-white group-hover:text-[#D4A74A] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <div className="relative overflow-hidden h-44 bg-black/20 my-2">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                  </div>

                  <p className="text-white/80 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs text-white/60 border-t border-white/10 mt-4">
                  <div className="flex items-center gap-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  {/* Button removed */}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < allArticles.length && (
            <div className="pt-8 text-center">
              <button
                onClick={handleLoadMore}
                className="bg-[#D4A74A] hover:bg-white text-[#132444] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow cursor-pointer inline-flex items-center gap-2"
              >
                {t.loadMore} <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>

      </main>


    </div>
  );
};
