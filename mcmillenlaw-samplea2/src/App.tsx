import React, { useState } from "react";
import { McMillenLogo } from "./components/McMillenLogo";
import { translations } from "./translations";
import { CriminalDefensePage } from "./components/CriminalDefensePage";
import { DuiTrafficPage } from "./components/DuiTrafficPage";
import { DrugChargesPage } from "./components/DrugChargesPage";
import { TrafficTicketsPage } from "./components/TrafficTicketsPage";
import { ExpungementsPage } from "./components/ExpungementsPage";
import { ProtectiveOrdersPage } from "./components/ProtectiveOrdersPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { ContactUsPage } from "./components/ContactUsPage";
import { ResourcesPage } from "./components/ResourcesPage";
import { TransparentImage } from "./components/TransparentImage";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Menu,
  X,
  Play,
  ArrowRight,
  Scale,
  ShieldCheck,
  Award,
  Star,
  CheckCircle2,
  FileText,
  BadgeCheck,
  Globe,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// @ts-ignore
import maryPortrait from "./assets/images/mary_crossed_arms_1781209269021.jpg";
// @ts-ignore
import tulsaSkyline from "./assets/images/beautiful-building-architecture-yokohama-city-skyline(2)(1).jpg";
// @ts-ignore
import heroVideo from "./assets/images/1695780_Tulsa_Tulsa_Ok_1280x720 - COMPRESS.mp4";
// @ts-ignore
import criminalBg from "./assets/images/pa_criminal_1781207564027.jpg";
// @ts-ignore
import drugBg from "./assets/images/pa_drugs_1781207589657.jpg";
// @ts-ignore
import duiBg from "./assets/images/pa_dui_1781207577149.jpg";
// @ts-ignore
import trafficBg from "./assets/images/pa_traffic_1781207603331.jpg";
// @ts-ignore
import expungementBg from "./assets/images/pa_expungement_1781207618354.jpg";
// @ts-ignore
import protectiveBg from "./assets/images/pa_protective_1781207633235.jpg";
// @ts-ignore
import storyOneBg from "./assets/images/story_tulsa_skyline_1781208647677.jpg";
// @ts-ignore
import storyTwoBg from "./assets/images/story_office_door_1781208666080.jpg";
// @ts-ignore
import storyThreeBg from "./assets/images/story_leather_journal_1781208685285.jpg";
// @ts-ignore
import contactBg from "./assets/images/ChatGPT Image Jul 25, 2026, 02_20_34 AM.png";
// @ts-ignore
import image4710 from "./assets/images/4710.jpg";

// Core Images matching the premium design style
const IMAGES = {
  columnsBg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
  maryPortrait: maryPortrait,
  tulsaSkyline: tulsaSkyline,
  
  practiceDefense: criminalBg,
  practiceDui: duiBg,
  practiceDrugs: drugBg,
  practiceTraffic: trafficBg,
  practiceExpunge: expungementBg,
  practiceOrder: protectiveBg,

  videoStoryOne: storyOneBg,
  videoStoryTwo: storyTwoBg,
  videoStoryThree: storyThreeBg,
  
  footerColumnsBg: contactBg,
  contactLeftBg: image4710
};

const LOCALIZED_PRACTICE_AREAS = [
  { 
    id: "criminal", 
    image: IMAGES.practiceDefense,
    getLabel: (t: any) => t.practiceCriminalLabel,
    getDescription: (t: any) => t.practiceCriminalDesc,
  },
  { 
    id: "dui", 
    image: IMAGES.practiceDui,
    getLabel: (t: any) => t.practiceDuiLabel,
    getDescription: (t: any) => t.practiceDuiDesc,
  },
  { 
    id: "drugs", 
    image: IMAGES.practiceDrugs,
    getLabel: (t: any) => t.practiceDrugsLabel,
    getDescription: (t: any) => t.practiceDrugsDesc,
  },
  { 
    id: "traffic", 
    image: IMAGES.practiceTraffic,
    getLabel: (t: any) => t.practiceTrafficLabel,
    getDescription: (t: any) => t.practiceTrafficDesc,
  },
  { 
    id: "expungement", 
    image: IMAGES.practiceExpunge,
    getLabel: (t: any) => t.practiceExpungementLabel,
    getDescription: (t: any) => t.practiceExpungementDesc,
  },
  { 
    id: "protective", 
    image: IMAGES.practiceOrder,
    getLabel: (t: any) => t.practiceProtectiveLabel,
    getDescription: (t: any) => t.practiceProtectiveDesc,
  }
];

export default function App() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [activeView, setActiveView] = useState<"home" | "criminal-defense" | "dui-traffic" | "drug-charges" | "traffic-tickets" | "expungements" | "protective-orders" | "about" | "contact" | "resources">("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);
    if (activeView !== "home") {
      setActiveView("home");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  // Testimonials Carousel State
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // FAQs Toggling Accordion
  const [faqStates, setFaqStates] = useState<Record<number, boolean>>({
    0: true, // Default open first
    1: false,
    2: false,
    3: false,
    4: false
  });

  const toggleFaq = (index: number) => {
    setFaqStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Contact Intake Form
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    caseType: "Criminal Justice",
    caseDescription: ""
  });
  const [formSent, setFormSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      caseType: "Criminal Justice",
      caseDescription: ""
    });
    setTimeout(() => {
      setFormSent(false);
    }, 6000);
  };

  // Active translation set
  const t = translations[language];

  const filteredPractices = LOCALIZED_PRACTICE_AREAS.filter((p) => {
    const label = p.getLabel(t).toLowerCase();
    const desc = p.getDescription(t).toLowerCase();
    const query = searchQuery.toLowerCase();
    return label.includes(query) || desc.includes(query);
  });

  // Testimonial details map
  const testimonials = [
    { text: t.review1Text, client: t.review1Client },
    { text: t.review2Text, client: t.review2Client },
    { text: t.review3Text, client: t.review3Client },
    { text: t.review4Text, client: t.review4Client }
  ];
  const doubledTestimonials = [...testimonials, ...testimonials];

  const handlePrevReview = () => {
    setCurrentReviewIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setCurrentReviewIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#FCFBF8] text-[#202735] antialiased">
      
      {/* 1. DUAL-TIER NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#132444] text-white shadow-lg">
        {/* Tier 1: Small Contacts & Language Info */}
        <div className="border-b border-white/10 py-2.5">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 text-[11px] font-medium uppercase tracking-[0.18em]">
            <div className="flex items-center gap-2 text-white/80">
              <Globe size={13} className="text-[#D4A74A]" />
              <span className="hidden sm:inline">{t.topBarSubtitle}</span>
            </div>
            
            <div className="flex items-center gap-5 sm:gap-7">
              <a
                href="tel:9184190176"
                className="flex items-center gap-2 font-bold text-[#D4A74A] transition-colors hover:text-white"
              >
                <Phone size={13} fill="currentColor" />
                <span>918.419.0176</span>
              </a>
              <button
                onClick={() => {
                  if (activeView !== "home") {
                    setActiveView("contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    handleNavClick("contact");
                  }
                }}
                className="bg-[#D4A74A] px-4 py-1 text-[9.5px] font-bold text-[#132444] transition-all hover:bg-white hover:text-[#132444] hidden md:inline-block cursor-pointer border-none"
              >
                {t.scheduleConsultation}
              </button>
            </div>
          </div>
        </div>

        {/* Tier 2: Primary Brand & Custom Navigation */}
        <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-6">
          <button 
            onClick={(e) => {
              e.preventDefault();
              setActiveView("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} 
            className="flex items-center leading-none text-left bg-transparent border-none p-0 cursor-pointer"
          >
            <McMillenLogo iconSize={36} textColorClass="text-white" iconColorClass="text-[#D4A74A]" />
          </button>
 
          {/* Revised Navigation: About, Practice Areas Dropdown, Resources, Contact */}
          <nav className="hidden items-center gap-7 lg:flex">
            <button
              onClick={() => {
                setActiveView("about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#D4A74A] transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              {t.navAbout}
            </button>

            {/* Practice Areas Dropdown */}
            <div className="relative group py-2">
              <button
                onClick={() => handleNavClick("practice")}
                className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#D4A74A] transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center gap-1"
              >
                <span>{t.navPracticeAreas}</span>
                <ChevronDown size={13} className="text-[#D4A74A] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu Panel */}
              <div className="absolute top-full left-0 w-72 bg-[#132444] border border-[#D4A74A]/30 shadow-2xl py-2 hidden group-hover:block transition-all z-50 rounded-none">
                <button
                  onClick={() => {
                    setActiveView("criminal-defense");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full text-left px-5 py-2.5 text-[11.5px] font-medium text-white/90 hover:text-[#132444] hover:bg-[#D4A74A] transition-colors cursor-pointer border-none bg-transparent block"
                >
                  {t.practiceCriminalLabel}
                </button>
                <button
                  onClick={() => {
                    setActiveView("dui-traffic");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full text-left px-5 py-2.5 text-[11.5px] font-medium text-white/90 hover:text-[#132444] hover:bg-[#D4A74A] transition-colors cursor-pointer border-none bg-transparent block"
                >
                  {t.practiceDuiLabel}
                </button>
                <button
                  onClick={() => {
                    setActiveView("drug-charges");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full text-left px-5 py-2.5 text-[11.5px] font-medium text-white/90 hover:text-[#132444] hover:bg-[#D4A74A] transition-colors cursor-pointer border-none bg-transparent block"
                >
                  {t.practiceDrugsLabel}
                </button>
                <button
                  onClick={() => {
                    setActiveView("traffic-tickets");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full text-left px-5 py-2.5 text-[11.5px] font-medium text-white/90 hover:text-[#132444] hover:bg-[#D4A74A] transition-colors cursor-pointer border-none bg-transparent block"
                >
                  {t.practiceTrafficLabel}
                </button>
                <button
                  onClick={() => {
                    setActiveView("expungements");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full text-left px-5 py-2.5 text-[11.5px] font-medium text-white/90 hover:text-[#132444] hover:bg-[#D4A74A] transition-colors cursor-pointer border-none bg-transparent block"
                >
                  {t.practiceExpungementLabel}
                </button>
                <button
                  onClick={() => {
                    setActiveView("protective-orders");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full text-left px-5 py-2.5 text-[11.5px] font-medium text-white/90 hover:text-[#132444] hover:bg-[#D4A74A] transition-colors cursor-pointer border-none bg-transparent block"
                >
                  {t.practiceProtectiveLabel}
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveView("resources");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#D4A74A] transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              {t.navResources}
            </button>
            <button
              onClick={() => {
                setActiveView("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#D4A74A] transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              {t.navContact}
            </button>
            {/* Elegant Menu Item Language Toggle */}
            <button
              onClick={() => setLanguage(lang => lang === "en" ? "es" : "en")}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A74A] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 bg-transparent border-none p-0"
            >
              <Globe size={12} className="animate-spin-slow" />
              <span>{language === "en" ? "Hablamos Español" : "English"}</span>
            </button>
          </nav>

          {/* Mobile Navigation icons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex h-10 w-10 items-center justify-center bg-white/10 text-white hover:bg-[#D4A74A] hover:text-[#132444] cursor-pointer"
              aria-label="Toggle Search"
            >
              <Search size={16} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center bg-[#D4A74A] text-[#132444] cursor-pointer hover:bg-white"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#132444] px-6 py-6 lg:hidden">
            <nav className="flex flex-col gap-4 text-left">
              <button onClick={() => {
                setActiveView("about");
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileOpen(false);
              }} className="text-[12px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#D4A74A] text-left bg-transparent border-none p-0 cursor-pointer">{t.navAbout}</button>

              {/* Mobile Practice Areas Accordion */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <button onClick={() => handleNavClick("practice")} className="text-[12px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#D4A74A] text-left bg-transparent border-none p-0 cursor-pointer">
                    {t.navPracticeAreas}
                  </button>
                  <button
                    onClick={() => setMobilePracticeOpen(!mobilePracticeOpen)}
                    className="text-[#D4A74A] p-1 bg-transparent border-none cursor-pointer"
                  >
                    {mobilePracticeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
                {mobilePracticeOpen && (
                  <div className="ml-2 mt-3 flex flex-col gap-2.5 border-l-2 border-[#D4A74A]/40 pl-3">
                    <button onClick={() => { setActiveView("criminal-defense"); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }} className="text-[11px] font-medium text-white/90 hover:text-[#D4A74A] text-left bg-transparent border-none p-0 cursor-pointer">{t.practiceCriminalLabel}</button>
                    <button onClick={() => { setActiveView("dui-traffic"); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }} className="text-[11px] font-medium text-white/90 hover:text-[#D4A74A] text-left bg-transparent border-none p-0 cursor-pointer">{t.practiceDuiLabel}</button>
                    <button onClick={() => { setActiveView("drug-charges"); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }} className="text-[11px] font-medium text-white/90 hover:text-[#D4A74A] text-left bg-transparent border-none p-0 cursor-pointer">{t.practiceDrugsLabel}</button>
                    <button onClick={() => { setActiveView("traffic-tickets"); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }} className="text-[11px] font-medium text-white/90 hover:text-[#D4A74A] text-left bg-transparent border-none p-0 cursor-pointer">{t.practiceTrafficLabel}</button>
                    <button onClick={() => { setActiveView("expungements"); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }} className="text-[11px] font-medium text-white/90 hover:text-[#D4A74A] text-left bg-transparent border-none p-0 cursor-pointer">{t.practiceExpungementLabel}</button>
                    <button onClick={() => { setActiveView("protective-orders"); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }} className="text-[11px] font-medium text-white/90 hover:text-[#D4A74A] text-left bg-transparent border-none p-0 cursor-pointer">{t.practiceProtectiveLabel}</button>
                  </div>
                )}
              </div>

              <button onClick={() => {
                setActiveView("resources");
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileOpen(false);
              }} className="text-[12px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#D4A74A] text-left bg-transparent border-none p-0 cursor-pointer">{t.navResources}</button>
              <button onClick={() => {
                setActiveView("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileOpen(false);
              }} className="text-[12px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#D4A74A] text-left bg-transparent border-none p-0 cursor-pointer">{t.navContact}</button>
              {/* Mobile Language Selector Menu link */}
              <button
                onClick={() => {
                  setLanguage(lang => lang === "en" ? "es" : "en");
                  setMobileOpen(false);
                }}
                className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#D4A74A] hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0"
              >
                <Globe size={13} />
                <span>{language === "en" ? "Hablamos Español" : "English"}</span>
              </button>
              <a
                href="tel:9184190176"
                className="mt-2 flex h-11 items-center justify-center gap-2 bg-[#D4A74A] text-[11px] font-bold uppercase tracking-[0.18em] text-[#132444]"
              >
                <Phone size={14} fill="currentColor" />
                <span>Call 918.419.0176</span>
              </a>
            </nav>
          </div>
        )}

        {/* Search bar inside header */}
        {searchOpen && (
          <div className="border-t border-white/10 bg-[#132444]/95 px-6 py-4">
            <div className="mx-auto flex max-w-[700px] gap-2">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="h-10 w-full rounded-none border border-white/20 bg-white/15 px-4 text-sm text-white placeholder:text-white/50 outline-none focus:border-[#D4A74A]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  const el = document.getElementById("practice");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="h-10 bg-[#D4A74A] px-5 font-bold text-[11px] uppercase tracking-[0.16em] text-[#132444]"
              >
                {t.searchGo}
              </button>
            </div>
          </div>
        )}
      </header>

      {activeView === "resources" ? (
        <ResourcesPage
          language={language}
          onBackToHome={() => {
            setActiveView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigateAbout={() => {
            setActiveView("about");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigateContact={() => {
            setActiveView("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          lawBooksImage={IMAGES.videoStoryThree}
          maryPortrait={IMAGES.maryPortrait}
          officeImage={IMAGES.videoStoryTwo}
        />
      ) : activeView === "contact" ? (
        <ContactUsPage
          language={language}
          onBackToHome={() => {
            setActiveView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigateAbout={() => {
            setActiveView("about");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          contactBg={IMAGES.contactLeftBg}
        />
      ) : activeView === "about" ? (
        <AboutUsPage
          language={language}
          onBackToHome={() => {
            setActiveView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigateContact={() => {
            setActiveView("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          maryPortrait={IMAGES.maryPortrait}
          officeImage={IMAGES.videoStoryTwo}
          lawBooksImage={IMAGES.videoStoryThree}
        />
      ) : activeView === "home" ? (
        <>
          {/* 2. HERO SECTION WITH LOOPIV VIDEO BACKGROUND */}
          <section id="home" className="relative h-[720px] w-full overflow-hidden bg-black text-white flex items-center">
        {/* Ambient video background covering full section */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-[0.65] z-0 select-none"
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>
        
        {/* Lighter black gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent z-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="md:col-span-7 text-left">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">
              <span className="h-0.5 w-10 bg-[#D4A74A]" />
              <span>{t.heroTagline}</span>
            </div>
            <h1 className="font-serif text-[clamp(2.1rem,3.8vw,3.5rem)] font-light leading-[1.15] tracking-[0.035em] text-white max-w-[920px]">
              {t.heroHeadingLine1} <span className="inline text-[#D4A74A] font-semibold">{t.heroHeadingLine2}</span>
            </h1>
            <p className="mt-6 max-w-[510px] text-[15.5px] leading-[1.85] text-white/80 font-sans font-light">
              {t.heroDescription}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5">
              <button
                onClick={() => {
                  setActiveView("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-[#D4A74A] hover:bg-white text-[#132444] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all rounded-none text-center shadow-md hover:scale-105 active:scale-95 shrink-0 cursor-pointer border-none"
              >
                {t.scheduleConsultation}
              </button>

              {/* PREMIUM INLINE PHONE LINK */}
              <a
                href="tel:9184190176"
                className="inline-flex items-center gap-3.5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D4A74A] hover:bg-white/10 px-5 py-2.5 shadow-[0_10px_30px_rgba(30,37,56,0.15)] transition-all group max-sm:w-full shrink-0"
              >
                <div className="h-9 w-9 rounded-full bg-[#D4A74A]/15 flex items-center justify-center text-[#D4A74A] border border-[#D4A74A]/25 group-hover:bg-[#D4A74A] group-hover:text-[#132444] transition-colors shrink-0">
                  <Phone size={14} fill="currentColor" />
                </div>
                <div className="text-left leading-none font-sans">
                  <span className="block text-[8px] font-bold tracking-[0.25em] text-[#D4A74A] uppercase leading-none mb-1">{t.attorneyDirectMobile}</span>
                  <span className="block font-sans text-[15px] font-bold text-white tracking-wide leading-none group-hover:text-[#D4A74A] transition-colors">
                    918.419.0176
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Hero Right: Spacer column so the grid covers 12 columns properly and prevents text wrapping or overlap */}
          <div className="md:col-span-5 hidden md:block pointer-events-none" />
        </div>

        {/* Lawyer image positioned absolute at the bottom of the section with zero distance and enlarged size */}
        <div className="absolute bottom-0 right-6 lg:right-[8%] xl:right-[calc((100vw-1180px)/2+24px)] hidden md:block select-none pointer-events-none max-w-[520px] z-10">
          <TransparentImage 
            src={IMAGES.maryPortrait} 
            alt="Attorney Mary McMillen Portrait Cutout" 
            className="h-[685px] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-[1.01] transition-transform duration-500 ease-out bg-transparent pointer-events-auto"
          />
        </div>
      </section>

      {/* 3. MEET MARY MCMILLEN (ABOUT) */}
      <section id="about" className="relative py-[100px] bg-white text-left">
        <div className="mx-auto max-w-[1180px] px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Collage Left */}
          <div className="md:col-span-5 relative">
            <div className="border-[12px] border-[#FCFBF8] bg-[#FCFBF8] shadow-[0_20px_50px_rgba(30,37,56,0.1)] overflow-hidden">
              <TransparentImage 
                src={IMAGES.maryPortrait} 
                alt="Mary McMillen Professional Portrait" 
                className="w-full h-auto object-cover max-h-[480px] hover:scale-105 transition-transform duration-500 rounded-sm bg-[#132444]/5"
              />
            </div>
            {/* Elegant overlay badge */}
            <div className="absolute -bottom-4 -left-2 bg-[#132444] text-white p-4 uppercase tracking-[0.16em] border-l-4 border-[#D4A74A] shadow-lg">
              <div className="text-[10px] text-[#D4A74A] font-bold">FOUNDER & ATTORNEY</div>
              <div className="font-serif text-[15px] font-semibold mt-1 text-white">{t.aboutFounder}</div>
            </div>
          </div>

          {/* Biography & Grid Bullets Right */}
          <div className="md:col-span-7">
            <div className="text-[15px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] mb-2">
              {t.aboutTagline}
            </div>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-snug text-[#202735] uppercase">
              {t.aboutTitle1} <span className="inline text-[#D4A74A] font-semibold">{t.aboutTitle2}</span>
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.85] text-[#202735]/85 font-sans font-light">
              {t.aboutBio}
            </p>

            {/* Checklist stats grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="h-11 w-11 border border-[#D4A74A]/60 rounded-full flex items-center justify-center text-[#D4A74A] shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold uppercase tracking-[0.1em] text-[#202735]">{t.aboutBullet1Title}</h4>
                  <p className="text-[15.5px] text-[#202735]/80 mt-1.5 leading-relaxed">{t.aboutBullet1Desc}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-11 w-11 border border-[#D4A74A]/60 rounded-full flex items-center justify-center text-[#D4A74A] shrink-0 mt-0.5">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold uppercase tracking-[0.1em] text-[#202735]">{t.aboutBullet2Title}</h4>
                  <p className="text-[15.5px] text-[#202735]/80 mt-1.5 leading-relaxed">{t.aboutBullet2Desc}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-11 w-11 border border-[#D4A74A]/60 rounded-full flex items-center justify-center text-[#D4A74A] shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold uppercase tracking-[0.1em] text-[#202735]">{t.aboutBullet3Title}</h4>
                  <p className="text-[15.5px] text-[#202735]/80 mt-1.5 leading-relaxed">{t.aboutBullet3Desc}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-11 w-11 border border-[#D4A74A]/60 rounded-full flex items-center justify-center text-[#D4A74A] shrink-0 mt-0.5">
                  <Scale size={18} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold uppercase tracking-[0.1em] text-[#202735]">{t.aboutBullet4Title}</h4>
                  <p className="text-[15.5px] text-[#202735]/80 mt-1.5 leading-relaxed">{t.aboutBullet4Desc}</p>
                </div>
              </div>
            </div>

            <div className="mt-9">
              <button 
                onClick={() => {
                  setActiveView("about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-block bg-[#D4A74A] hover:bg-white text-[#132444] font-bold text-[12.5px] uppercase tracking-[0.2em] px-8 py-3.5 transition-colors shadow-md cursor-pointer border-none"
              >
                {t.aboutButton}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. STORIES THAT MATTER */}
      <section id="stories" className="bg-[#FCFBF8] py-[100px] text-center border-t border-[#EFECE7]">
        <div className="mx-auto max-w-[1180px] px-6">
          
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-10 bg-[#202735]/15" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">{t.storiesTagline}</span>
            <span className="h-px w-10 bg-[#202735]/15" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-6">
            
            {/* Story Card 1 */}
            <div 
              onClick={() => setActiveVideo(`${t.story1Title}: ${t.story1Desc}`)}
              className="group cursor-pointer relative overflow-hidden bg-black aspect-video hover:shadow-[0_20px_40px_rgba(30,37,56,0.15)] transition-all duration-500"
            >
              <img 
                src={IMAGES.videoStoryOne} 
                alt="Client Success Story Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-5 text-left">
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 bg-[#D4A74A] rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                  <Play size={18} fill="currentColor" className="ml-1" />
                </div>
                <h4 className="text-[17px] font-serif text-white font-semibold">{t.story1Title}</h4>
                <p className="text-[11px] text-[#D4A74A] uppercase tracking-[0.16em] font-bold mt-1">{t.story1Desc}</p>
              </div>
            </div>

            {/* Story Card 2 */}
            <div 
              onClick={() => setActiveVideo(`${t.story2Title}: ${t.story2Desc}`)}
              className="group cursor-pointer relative overflow-hidden bg-black aspect-video hover:shadow-[0_20px_40px_rgba(30,37,56,0.15)] transition-all duration-500"
            >
              <img 
                src={IMAGES.videoStoryTwo} 
                alt="Why Clients Choose McMillen Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-5 text-left">
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 bg-[#D4A74A] rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                  <Play size={18} fill="currentColor" className="ml-1" />
                </div>
                <h4 className="text-[17px] font-serif text-white font-semibold">{t.story2Title}</h4>
                <p className="text-[11px] text-[#D4A74A] uppercase tracking-[0.16em] font-bold mt-1">{t.story2Desc}</p>
              </div>
            </div>

            {/* Story Card 3 */}
            <div 
              onClick={() => setActiveVideo(`${t.story3Title}: ${t.story3Desc}`)}
              className="group cursor-pointer relative overflow-hidden bg-black aspect-video hover:shadow-[0_20px_40px_rgba(30,37,56,0.15)] transition-all duration-500"
            >
              <img 
                src={IMAGES.videoStoryThree} 
                alt="Meet Mary Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-5 text-left">
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 bg-[#D4A74A] rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                  <Play size={18} fill="currentColor" className="ml-1" />
                </div>
                <h4 className="text-[17px] font-serif text-white font-semibold">{t.story3Title}</h4>
                <p className="text-[11px] text-[#D4A74A] uppercase tracking-[0.16em] font-bold mt-1">{t.story3Desc}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. RESULTS THAT MATTER (STATS BLOCK) */}
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

      {/* 6. HELP / CRIMINAL PRACTICE AREAS */}
      <section id="practice" className="py-[100px] bg-white text-center">
        <div className="mx-auto max-w-[1180px] px-6">
          
          <span className="text-[12.5px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">{t.practiceTagline}</span>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-none text-[#202735] uppercase mt-2 mb-12">
            {t.practiceTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPractices.map((practice) => (
              <div 
                key={practice.id}
                onClick={() => {
                  if (practice.id === "criminal") {
                    setActiveView("criminal-defense");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else if (practice.id === "dui") {
                    setActiveView("dui-traffic");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else if (practice.id === "drugs") {
                    setActiveView("drug-charges");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else if (practice.id === "traffic") {
                    setActiveView("traffic-tickets");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else if (practice.id === "expungement") {
                    setActiveView("expungements");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else if (practice.id === "protective") {
                    setActiveView("protective-orders");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    setActiveVideo(`${practice.getLabel(t)}`);
                  }
                }}
                className="group cursor-pointer relative overflow-hidden h-[270px] bg-[#132444] shadow-md hover:shadow-[0_20px_50px_rgba(30,37,56,0.22)] transition-all duration-500 rounded-none border border-[#EFECE7]"
              >
                {/* Background image overlay of type */}
                <img 
                  src={practice.image} 
                  alt={practice.getLabel(t)} 
                  className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-transform duration-700"
                />
                
                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Info block */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
                  <div className="mb-2 h-0.5 w-10 bg-[#D4A74A]" />
                  <h3 className="font-serif text-[26px] text-white font-medium group-hover:text-[#D4A74A] transition-colors">{practice.getLabel(t)}</h3>
                  <p className="text-[16px] text-white/95 leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-36 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300 font-sans font-light">
                    {practice.getDescription(t)}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6.5 HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-[100px] bg-[#FCFBF8] text-center border-t border-b border-[#EFECE7]">
        <div className="mx-auto max-w-[1180px] px-6">
          
          {/* Eyebrow / Tagline with thin side accent lines */}
          <div className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#132444] mb-3">
            <span className="w-8 h-[1px] bg-[#D4A74A]" />
            <span>{t.howItWorksTagline}</span>
            <span className="w-8 h-[1px] bg-[#D4A74A]" />
          </div>

          {/* Section Main Title */}
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.15] text-[#202735] uppercase tracking-wide">
            {t.howItWorksTitle1}
          </h2>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.15] text-[#D4A74A] uppercase tracking-wide mb-16 md:mb-20">
            {t.howItWorksTitle2}
          </h2>

          {/* 4-Step Timeline Grid */}
          <div className="relative">
            
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-[#D4A74A]/60 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
              
              {/* Step 01 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border border-[#D4A74A] bg-white flex items-center justify-center shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-105">
                  <span className="font-serif text-[32px] font-light text-[#132444]">{t.howStep1Num}</span>
                </div>
                <h3 className="font-serif text-[22px] font-medium leading-snug text-[#202735] mt-6 mb-3">
                  {t.howStep1Title1}<br />{t.howStep1Title2}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#202735]/80 max-w-[220px] font-sans font-light">
                  {t.howStep1Desc}
                </p>
              </div>

              {/* Step 02 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border border-[#D4A74A] bg-white flex items-center justify-center shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-105">
                  <span className="font-serif text-[32px] font-light text-[#132444]">{t.howStep2Num}</span>
                </div>
                <h3 className="font-serif text-[22px] font-medium leading-snug text-[#202735] mt-6 mb-3">
                  {t.howStep2Title1}<br />{t.howStep2Title2}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#202735]/80 max-w-[220px] font-sans font-light">
                  {t.howStep2Desc}
                </p>
              </div>

              {/* Step 03 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border border-[#D4A74A] bg-white flex items-center justify-center shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-105">
                  <span className="font-serif text-[32px] font-light text-[#132444]">{t.howStep3Num}</span>
                </div>
                <h3 className="font-serif text-[22px] font-medium leading-snug text-[#202735] mt-6 mb-3">
                  {t.howStep3Title1}<br />{t.howStep3Title2}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#202735]/80 max-w-[220px] font-sans font-light">
                  {t.howStep3Desc}
                </p>
              </div>

              {/* Step 04 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border border-[#D4A74A] bg-white flex items-center justify-center shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-105">
                  <span className="font-serif text-[32px] font-light text-[#132444]">{t.howStep4Num}</span>
                </div>
                <h3 className="font-serif text-[22px] font-medium leading-snug text-[#202735] mt-6 mb-3">
                  {t.howStep4Title1}<br />{t.howStep4Title2}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#202735]/80 max-w-[220px] font-sans font-light">
                  {t.howStep4Desc}
                </p>
              </div>

            </div>
          </div>

          {/* Bottom CTA Button matching reference image */}
          <div className="mt-16 md:mt-20">
            <div className="inline-block p-[3px] border border-[#D4A74A]/60 bg-transparent">
              <button 
                onClick={() => {
                  setActiveView("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 bg-[#132444] hover:bg-[#D4A74A] text-[#D4A74A] hover:text-[#132444] px-8 py-4 text-[11.5px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer border-none"
              >
                <span>{t.howItWorksCta}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. WHY PEOPLE TRUST MCMILLEN LEGAL (SPLIT STORY) */}
      <section id="trust" className="w-full bg-[#FCFBF8] grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Left Side: Solid Dark Blue Text box */}
        <div className="bg-[#132444] text-white p-10 md:p-20 text-left flex flex-col justify-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] mb-2">
            {t.trustTagline}
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-snug uppercase">
            {t.trustTitle1} <span className="inline text-[#D4A74A] font-semibold">{t.trustTitle2}</span>
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-white/80 font-sans font-light">
            {t.trustDesc}
          </p>

          {/* Checklist bullets */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0" />
              <span className="text-[13.5px] text-white/90">{t.trustCheck1}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0" />
              <span className="text-[13.5px] text-white/90">{t.trustCheck2}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0" />
              <span className="text-[13.5px] text-white/90">{t.trustCheck3}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0" />
              <span className="text-[13.5px] text-white/90">{t.trustCheck4}</span>
            </div>
          </div>

          <div className="mt-9">
            <button 
              onClick={() => {
                setActiveView("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-block bg-[#D4A74A] hover:bg-white hover:text-[#132444] text-[#132444] font-bold text-[11px] uppercase tracking-[0.2em] px-8 py-3.5 transition-colors cursor-pointer border-none"
            >
              {t.scheduleConsultation}
            </button>
          </div>
        </div>

        {/* Right Side: Splendid Oklahoma / Tulsa Sunset Skyline */}
        <div 
          className="relative min-h-[400px] bg-cover bg-center text-left"
          style={{ backgroundImage: `url("${IMAGES.tulsaSkyline}")` }}
        >
          {/* subtle gold gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 uppercase tracking-wider text-[#132444] shadow-lg border-l-4 border-[#D4A74A]">
            <div className="text-[9px] font-bold text-[#D4A74A]">{t.trustBadgeTag}</div>
            <div className="font-serif text-[14px] font-bold mt-0.5">{t.trustBadgeVal}</div>
          </div>
        </div>

      </section>

      {/* 8. TESTIMONIALS CAROUSEL (WHAT OUR CLIENTS SAY) */}
      <section id="reviews" className="bg-white py-[100px] text-center border-b border-[#EFECE7] overflow-hidden">
        <div className="mx-auto max-w-[1180px] px-6">
          <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">{t.reviewsTagline}</span>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-none text-[#202735] uppercase mt-2 mb-12">
            {t.reviewsTitle}
          </h2>

          {/* Interactive Testimonial Carousel View */}
          <div className="relative max-w-[1120px] mx-auto mt-6">
            
            {/* Nav Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 xl:-left-16 z-20">
              <button 
                onClick={handlePrevReview}
                className="h-11 w-11 rounded-full bg-white hover:bg-[#D4A74A] hover:text-[#132444] text-[#132444] border border-[#202735]/10 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-90"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-4 xl:-right-16 z-20">
              <button 
                onClick={handleNextReview}
                className="h-11 w-11 rounded-full bg-white hover:bg-[#D4A74A] hover:text-[#132444] text-[#132444] border border-[#202735]/10 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-90"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Desktop View: shows 3 items, shifts smoothly by 1 */}
            <div className="hidden md:block overflow-hidden py-4">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(calc(-${currentReviewIndex} * (100% + 24px) / 3))`
                }}
              >
                {doubledTestimonials.map((testimonial, idx) => (
                  <div 
                    key={idx}
                    className="w-[calc((100%-48px)/3)] shrink-0 bg-[#FCFBF8] p-8 border border-[#EFECE7] shadow-sm text-left flex flex-col justify-between min-h-[320px] relative overflow-hidden hover:shadow-md transition-shadow duration-300"
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
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (RESOURCES) */}
      <section id="faq" className="bg-[#132444] py-[100px] text-white">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">{t.faqTagline}</span>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-none text-white uppercase mt-2 mb-12">
            {t.faqTitle}
          </h2>

          <div className="space-y-4 max-w-[840px] mx-auto text-left">
            
            {/* Accordion 1 */}
            <div className="border border-white/15 bg-[#132444]/90 shadow-sm">
              <button 
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 text-left text-[18px] md:text-[20px] font-semibold uppercase tracking-wider text-white hover:text-[#D4A74A] font-serif transition-colors"
              >
                <span>{t.faq1Q}</span>
                {faqStates[0] ? <ChevronUp size={22} className="text-[#D4A74A] shrink-0 ml-3" /> : <ChevronDown size={22} className="text-[#D4A74A] shrink-0 ml-3" />}
              </button>
              {faqStates[0] && (
                <div className="p-6 border-t border-white/10 text-[17.5px] leading-[1.85] text-white/90 font-sans font-light">
                  {t.faq1A}
                </div>
              )}
            </div>

            {/* Accordion 2 */}
            <div className="border border-white/15 bg-[#132444]/90 shadow-sm">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left text-[18px] md:text-[20px] font-semibold uppercase tracking-wider text-white hover:text-[#D4A74A] font-serif transition-colors"
              >
                <span>{t.faq2Q}</span>
                {faqStates[1] ? <ChevronUp size={22} className="text-[#D4A74A] shrink-0 ml-3" /> : <ChevronDown size={22} className="text-[#D4A74A] shrink-0 ml-3" />}
              </button>
              {faqStates[1] && (
                <div className="p-6 border-t border-white/10 text-[17.5px] leading-[1.85] text-white/90 font-sans font-light">
                  {t.faq2A}
                </div>
              )}
            </div>

            {/* Accordion 3 */}
            <div className="border border-white/15 bg-[#132444]/90 shadow-sm">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left text-[18px] md:text-[20px] font-semibold uppercase tracking-wider text-white hover:text-[#D4A74A] font-serif transition-colors"
              >
                <span>{t.faq3Q}</span>
                {faqStates[2] ? <ChevronUp size={22} className="text-[#D4A74A] shrink-0 ml-3" /> : <ChevronDown size={22} className="text-[#D4A74A] shrink-0 ml-3" />}
              </button>
              {faqStates[2] && (
                <div className="p-6 border-t border-white/10 text-[17.5px] leading-[1.85] text-white/90 font-sans font-light">
                  {t.faq3A}
                </div>
              )}
            </div>

            {/* Accordion 4 */}
            <div className="border border-white/15 bg-[#132444]/90 shadow-sm">
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 text-left text-[18px] md:text-[20px] font-semibold uppercase tracking-wider text-white hover:text-[#D4A74A] font-serif transition-colors"
              >
                <span>{t.faq4Q}</span>
                {faqStates[3] ? <ChevronUp size={22} className="text-[#D4A74A] shrink-0 ml-3" /> : <ChevronDown size={22} className="text-[#D4A74A] shrink-0 ml-3" />}
              </button>
              {faqStates[3] && (
                <div className="p-6 border-t border-white/10 text-[17.5px] leading-[1.85] text-white/90 font-sans font-light">
                  {t.faq4A}
                </div>
              )}
            </div>

            {/* Accordion 5 */}
            <div className="border border-white/15 bg-[#132444]/90 shadow-sm">
              <button 
                onClick={() => toggleFaq(4)}
                className="w-full flex items-center justify-between p-6 text-left text-[18px] md:text-[20px] font-semibold uppercase tracking-wider text-white hover:text-[#D4A74A] font-serif transition-colors"
              >
                <span>{t.faq5Q}</span>
                {faqStates[4] ? <ChevronUp size={22} className="text-[#D4A74A] shrink-0 ml-3" /> : <ChevronDown size={22} className="text-[#D4A74A] shrink-0 ml-3" />}
              </button>
              {faqStates[4] && (
                <div className="p-6 border-t border-white/10 text-[17.5px] leading-[1.85] text-white/90 font-sans font-light">
                  {t.faq5A}
                </div>
              )}
            </div>

          </div>

          {/* Button removed as requested */}

        </div>
      </section>

      {/* 10. INTAKE REGISTRATION SECTION & CONTACT FORM SCREEN */}
      <section id="contact" className="relative w-full overflow-hidden bg-cover bg-center flex items-stretch border-t border-black/5" style={{ backgroundImage: `url(${IMAGES.footerColumnsBg})` }}>
        {/* Gradient overlay from left to right fading to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
        
        <div className="relative z-10 mx-auto w-full max-w-[1180px] grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch py-20 px-6">
          
          {/* Left Text Detail Column */}
          <div className="text-left text-white flex flex-col justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] mb-2">{t.contactTagline}</span>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light uppercase leading-[1.2] text-[#D4A74A]">
              {t.contactTitle1} <span className="inline text-[#D4A74A] font-semibold">{t.contactTitle2}</span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-white font-sans font-light">
              {t.contactDesc}
            </p>
            
            {/* Translucent Stack with Phone, Address, and Email */}
            <div className="mt-8 space-y-5">
              
              {/* Telephone */}
              <div className="flex items-start gap-4 text-white">
                <div className="h-11 w-11 bg-black/50 flex items-center justify-center border border-[#D4A74A]/40 shrink-0 text-[#D4A74A]">
                  <Phone size={18} fill="currentColor" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#D4A74A]">{t.contactSubtitle}</div>
                  <a href="tel:9184190176" className="font-sans text-[24px] font-bold block leading-tight text-white hover:text-[#D4A74A] transition-colors">918.419.0176</a>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4 text-white hover:text-white/80 transition-colors">
                <div className="h-11 w-11 bg-black/50 flex items-center justify-center border border-[#D4A74A]/40 shrink-0 text-[#D4A74A]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#D4A74A]">OFFICE ADDRESS</div>
                  <div className="font-sans text-[22px] font-bold block leading-tight text-white">2930 S. Yale Ave, Suite C, Tulsa, OK 74114</div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-4 text-white">
                <div className="h-11 w-11 bg-black/50 flex items-center justify-center border border-[#D4A74A]/40 shrink-0 text-[#D4A74A]">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#D4A74A]">EMAIL ADDRESS</div>
                  <a href="mailto:info@mcmillenlegal.com" className="font-sans text-[24px] font-bold block leading-tight text-white hover:text-[#D4A74A] transition-colors">
                    info@mcmillenlegal.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right White Form Box */}
          <div className="bg-[#FCFBF8] p-8 md:p-10 shadow-2xl border border-white/10 relative text-left">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A74A] mb-2">{t.scheduleConsultation}</div>
            <h3 className="font-serif text-[22px] font-semibold text-[#202735] mb-6">{t.contactConfidential}</h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder={t.contactFormLabelName} 
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full h-11 bg-white border border-[#132444]/20 px-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder={t.contactFormLabelPhone} 
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full h-11 bg-white border border-[#132444]/20 px-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder={t.contactFormLabelEmail} 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-11 bg-white border border-[#132444]/20 px-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                />
              </div>

              <div>
                <select 
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleInputChange}
                  className="w-full h-11 bg-white border border-[#132444]/20 px-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                >
                  <option value="Criminal Defense">{t.practiceCriminalLabel}</option>
                  <option value="DUI / DWI Defense">{t.practiceDuiLabel}</option>
                  <option value="Drug Charges">{t.practiceDrugsLabel}</option>
                  <option value="Traffic Tickets">{t.practiceTrafficLabel}</option>
                  <option value="Expungements">{t.practiceExpungementLabel}</option>
                  <option value="Protective Orders">{t.practiceProtectiveLabel}</option>
                </select>
              </div>

              <div>
                <textarea 
                  name="caseDescription"
                  rows={4} 
                  placeholder={t.contactFormLabelDesc} 
                  required
                  value={formData.caseDescription}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#132444]/20 p-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full h-12 bg-[#D4A74A] text-[#132444] text-center uppercase tracking-widest text-[11px] font-bold transition-all duration-300 hover:bg-[#132444] hover:text-white cursor-pointer"
              >
                {t.contactFormSubmit}
              </button>
            </form>

            {formSent && (
              <div className="absolute inset-0 bg-[#FCFBF8]/95 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#202735]">{t.contactSuccessHead}</h4>
                <p className="text-sm text-[#202735]/80 mt-2 max-w-[320px] leading-relaxed">
                  {t.contactSuccessDesc}
                </p>
                <button 
                  onClick={() => setFormSent(false)}
                  className="mt-6 text-xs font-bold text-[#D4A74A] uppercase hover:underline"
                >
                  {t.contactGoBack}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
        </>
      ) : activeView === "traffic-tickets" ? (
        <TrafficTicketsPage
          language={language}
          onNavigateHome={(sectionId) => {
            setActiveView("home");
            if (sectionId) {
              setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 150);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          onNavigateToConsultation={() => {
            setActiveView("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigatePractice={(practiceId) => {
            if (practiceId === "criminal") {
              setActiveView("criminal-defense");
            } else if (practiceId === "dui") {
              setActiveView("dui-traffic");
            } else if (practiceId === "drugs") {
              setActiveView("drug-charges");
            } else if (practiceId === "expungement") {
              setActiveView("expungements");
            } else if (practiceId === "protective") {
              setActiveView("protective-orders");
            } else {
              setActiveView("home");
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      ) : activeView === "expungements" ? (
        <ExpungementsPage
          language={language}
          onNavigateHome={(sectionId) => {
            setActiveView("home");
            if (sectionId) {
              setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 150);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          onNavigateToConsultation={() => {
            setActiveView("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigatePractice={(practiceId) => {
            if (practiceId === "criminal") {
              setActiveView("criminal-defense");
            } else if (practiceId === "dui") {
              setActiveView("dui-traffic");
            } else if (practiceId === "drugs") {
              setActiveView("drug-charges");
            } else if (practiceId === "traffic") {
              setActiveView("traffic-tickets");
            } else if (practiceId === "protective") {
              setActiveView("protective-orders");
            } else {
              setActiveView("home");
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      ) : activeView === "protective-orders" ? (
        <ProtectiveOrdersPage
          language={language}
          onNavigateHome={(sectionId) => {
            setActiveView("home");
            if (sectionId) {
              setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 150);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          onNavigateToConsultation={() => {
            setActiveView("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigatePractice={(practiceId) => {
            if (practiceId === "criminal") {
              setActiveView("criminal-defense");
            } else if (practiceId === "dui") {
              setActiveView("dui-traffic");
            } else if (practiceId === "drugs") {
              setActiveView("drug-charges");
            } else if (practiceId === "traffic") {
              setActiveView("traffic-tickets");
            } else if (practiceId === "expungement") {
              setActiveView("expungements");
            } else {
              setActiveView("home");
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      ) : activeView === "dui-traffic" ? (
        <DuiTrafficPage
          language={language}
          onNavigateHome={(sectionId) => {
            setActiveView("home");
            if (sectionId) {
              setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 150);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          onNavigateToConsultation={() => {
            setActiveView("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigatePractice={(practiceId) => {
            if (practiceId === "criminal") {
              setActiveView("criminal-defense");
            } else if (practiceId === "drugs") {
              setActiveView("drug-charges");
            } else if (practiceId === "traffic") {
              setActiveView("traffic-tickets");
            } else if (practiceId === "expungement") {
              setActiveView("expungements");
            } else if (practiceId === "protective") {
              setActiveView("protective-orders");
            } else {
              setActiveView("home");
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      ) : activeView === "drug-charges" ? (
        <DrugChargesPage
          language={language}
          onNavigateHome={(sectionId) => {
            setActiveView("home");
            if (sectionId) {
              setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 150);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          onNavigateToConsultation={() => {
            setActiveView("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigatePractice={(practiceId) => {
            if (practiceId === "criminal") {
              setActiveView("criminal-defense");
            } else if (practiceId === "dui") {
              setActiveView("dui-traffic");
            } else if (practiceId === "traffic") {
              setActiveView("traffic-tickets");
            } else if (practiceId === "expungement") {
              setActiveView("expungements");
            } else if (practiceId === "protective") {
              setActiveView("protective-orders");
            } else {
              setActiveView("home");
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      ) : (
        <CriminalDefensePage 
          language={language}
          onNavigateHome={(sectionId) => {
            setActiveView("home");
            if (sectionId) {
              setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 150);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          onNavigateToConsultation={() => {
            setActiveView("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigatePractice={(practiceId) => {
            if (practiceId === "dui") {
              setActiveView("dui-traffic");
            } else if (practiceId === "drugs") {
              setActiveView("drug-charges");
            } else if (practiceId === "traffic") {
              setActiveView("traffic-tickets");
            } else if (practiceId === "expungement") {
              setActiveView("expungements");
            } else if (practiceId === "protective") {
              setActiveView("protective-orders");
            } else {
              setActiveView("home");
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}

      {/* 11. IMMERSIVE VIDEO MODAL */}
      {activeVideo && (
        <div 
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-5 max-w-[760px] w-full relative shadow-2xl border border-[#D4A74A]/20"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-4 -right-4 h-10 w-10 bg-[#D4A74A] rounded-full flex items-center justify-center text-[#132444] hover:bg-white shadow-md cursor-pointer z-50 transition-all hover:scale-105"
            >
              <X size={18} />
            </button>

            <div className="bg-[#132444] text-white aspect-video flex flex-col justify-center items-center text-center p-8 border-2 border-[#132444]">
              <div className="h-16 w-16 bg-[#D4A74A] text-[#132444] rounded-full flex items-center justify-center animate-pulse mb-5">
                <Play size={24} fill="currentColor" className="ml-1" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A74A]">{t.storyPortalBadge}</span>
              <h4 className="font-serif text-xl font-bold mt-2 max-w-[480px]">{activeVideo}</h4>
              <p className="text-xs text-white/60 mt-4 leading-relaxed max-w-[440px]">
                {t.storyPortalModalText}
              </p>
              <button 
                onClick={() => setActiveVideo(null)}
                className="mt-6 border border-[#D4A74A]/50 text-white hover:bg-[#D4A74A] hover:text-[#132444] px-5 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors"
              >
                {t.storyPortalClose}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 12. FOOTER */}
      <footer className="bg-[#202735] text-white pt-16 border-t border-white/5">
        <div className="mx-auto max-w-[1180px] px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 text-left">
          
          {/* Footer Logo & Brand info */}
          <div className="space-y-5">
            <McMillenLogo iconSize={36} textColorClass="text-white" iconColorClass="text-[#D4A74A]" />
            <p className="text-[13px] text-white/50 leading-relaxed font-sans font-light">
              {t.footerDesc}
            </p>
            <div className="flex gap-3 text-white/50">
              <a href="#" className="h-8 w-8 border border-white/10 flex items-center justify-center hover:border-[#D4A74A] hover:text-[#D4A74A] transition-colors">f</a>
              <a href="#" className="h-8 w-8 border border-white/10 flex items-center justify-center hover:border-[#D4A74A] hover:text-[#D4A74A] transition-colors">ln</a>
              <a href="#" className="h-8 w-8 border border-white/10 flex items-center justify-center hover:border-[#D4A74A] hover:text-[#D4A74A] transition-colors">ig</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[#D4A74A] border-b border-white/5 pb-2.5 mb-4">{t.footerQuickLinks}</h4>
            <ul className="space-y-2.5 text-[13px] text-white/60 font-sans font-light">
              <li><button onClick={() => {
                setActiveView("about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} className="hover:text-[#D4A74A] transition-colors bg-transparent border-none p-0 cursor-pointer">{t.navAbout}</button></li>
              <li><button onClick={() => handleNavClick("practice")} className="hover:text-[#D4A74A] transition-colors bg-transparent border-none p-0 cursor-pointer">{t.navPracticeAreas}</button></li>
              <li><button onClick={() => {
                setActiveView("resources");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} className="hover:text-[#D4A74A] transition-colors bg-transparent border-none p-0 cursor-pointer">{t.navResources}</button></li>
              <li><button onClick={() => {
                setActiveView("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} className="hover:text-[#D4A74A] transition-colors bg-transparent border-none p-0 cursor-pointer">{t.navContact}</button></li>
            </ul>
          </div>

          {/* Practice Areas Links */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[#D4A74A] border-b border-white/5 pb-2.5 mb-4">{t.footerPractices}</h4>
            <ul className="space-y-2.5 text-[13px] text-white/60 font-sans font-light">
              <li>
                <button 
                  onClick={() => {
                    setActiveView("criminal-defense");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }} 
                  className="hover:text-[#D4A74A] transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  {t.practiceCriminalLabel}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setActiveView("dui-traffic");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }} 
                  className="hover:text-[#D4A74A] transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  {t.practiceDuiLabel}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setActiveView("drug-charges");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }} 
                  className="hover:text-[#D4A74A] transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  {t.practiceDrugsLabel}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setActiveView("traffic-tickets");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }} 
                  className="hover:text-[#D4A74A] transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  {t.practiceTrafficLabel}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setActiveView("expungements");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }} 
                  className="hover:text-[#D4A74A] transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  {t.practiceExpungementLabel}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setActiveView("protective-orders");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }} 
                  className="hover:text-[#D4A74A] transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  {t.practiceProtectiveLabel}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[#D4A74A] border-b border-white/5 pb-2.5 mb-4">{t.footerContactUs}</h4>
            <ul className="space-y-3.5 text-[13px] text-white/60 font-sans font-light font-light">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#D4A74A] shrink-0 mt-0.5" />
                <span>2930 S. Yale Ave, Suite C, Tulsa, OK 74114</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[#D4A74A] shrink-0" />
                <a href="tel:9184190176" className="hover:text-[#D4A74A] transition-colors">918.419.0176</a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-[#D4A74A] shrink-0" />
                <a href="mailto:info@mcmillenlegal.com" className="hover:text-[#D4A74A] transition-colors">info@mcmillenlegal.com</a>
              </li>
              <li className="text-[11px] text-white/40 pt-1 font-serif italic border-t border-white/5">
                Se Habla Español
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright footer */}
        <div className="border-t border-white/5 py-6 bg-[#181E29] text-center text-[11px] text-white/45 tracking-wide">
          <div className="mx-auto max-w-[1180px] px-6 flex flex-col md:flex-row justify-between gap-4 text-left md:text-center">
            <p>{t.footerCopyright}</p>
            <div className="flex gap-4">
              <a href="#contact" className="hover:text-[#D4A74A]">{t.footerDisclaimer}</a>
              <span>|</span>
              <a href="#contact" className="hover:text-[#D4A74A]">{t.footerPrivacy}</a>
            </div>
          </div>
        </div>
      </footer>



    </div>
  );
}
