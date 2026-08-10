import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ShieldAlert, 
  ChevronUp, 
  ChevronDown, 
  Gavel, 
  FileText, 
  AlertTriangle, 
  Scale,
  Car,
  Quote
} from "lucide-react";

// @ts-ignore
import internalHeroBg from "../assets/images/pa_traffic_1781207603331.jpg";
// @ts-ignore
import contactBg from "../assets/images/ChatGPT Image Jul 25, 2026, 02_20_34 AM.png";

interface TrafficTicketsPageProps {
  language: "en" | "es";
  onNavigateHome: (sectionId?: string) => void;
  onNavigateToConsultation: () => void;
  onNavigatePractice?: (practiceId: string) => void;
}

export function TrafficTicketsPage({ 
  language, 
  onNavigateHome, 
  onNavigateToConsultation,
  onNavigatePractice 
}: TrafficTicketsPageProps) {
  const isEn = language === "en";

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "Traffic Tickets",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  // FAQ accordion states
  const [faqStates, setFaqStates] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setFaqStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setFormValues({
      name: "",
      phone: "",
      email: "",
      caseType: "Traffic Tickets",
      message: ""
    });
    setTimeout(() => {
      setSuccess(false);
    }, 6000);
  };

  const renderFormSidebar = (uniqueId: string) => (
    <div className="bg-[#132444] text-white p-6 md:p-8 shadow-xl border border-[#D4A74A]/35 text-left relative">
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A74A] block mb-1">
        SCHEDULE A CONSULTATION
      </span>
      <h3 className="font-serif text-[20px] font-bold text-white uppercase mb-3">
        Confidential Case Evaluation
      </h3>
      <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <input 
            type="text" 
            name={`fullName_${uniqueId}`}
            placeholder="Full Name *" 
            required
            value={formValues.name}
            onChange={(e) => setFormValues({...formValues, name: e.target.value})}
            className="w-full h-10 bg-white/10 border border-white/20 px-3.5 text-xs text-white placeholder-white/60 focus:border-[#D4A74A] focus:bg-white/15 outline-none rounded-none transition-all"
          />
        </div>

        <div>
          <input 
            type="tel" 
            name={`phone_${uniqueId}`}
            placeholder="Phone Number *" 
            required
            value={formValues.phone}
            onChange={(e) => setFormValues({...formValues, phone: e.target.value})}
            className="w-full h-10 bg-white/10 border border-white/20 px-3.5 text-xs text-white placeholder-white/60 focus:border-[#D4A74A] focus:bg-white/15 outline-none rounded-none transition-all"
          />
        </div>

        <div>
          <input 
            type="email" 
            name={`email_${uniqueId}`}
            placeholder="Email Address *" 
            required
            value={formValues.email}
            onChange={(e) => setFormValues({...formValues, email: e.target.value})}
            className="w-full h-10 bg-white/10 border border-white/20 px-3.5 text-xs text-white placeholder-white/60 focus:border-[#D4A74A] focus:bg-white/15 outline-none rounded-none transition-all"
          />
        </div>

        <div>
          <select 
            name={`caseType_${uniqueId}`}
            value={formValues.caseType}
            onChange={(e) => setFormValues({...formValues, caseType: e.target.value})}
            className="w-full h-10 bg-[#132444] border border-white/20 px-3.5 text-xs text-white focus:border-[#D4A74A] outline-none rounded-none transition-all"
          >
            <option value="Traffic Tickets">Traffic Tickets</option>
            <option value="DUI / DWI Defense">DUI / DWI Defense</option>
            <option value="Criminal Defense">Criminal Defense</option>
            <option value="Drug Charges">Drug Charges</option>
            <option value="Expungements">Expungements</option>
            <option value="Protective Orders">Protective Orders</option>
          </select>
        </div>

        <div>
          <textarea 
            name={`caseDescription_${uniqueId}`}
            rows={3} 
            placeholder="Tell us about your traffic ticket or citation..." 
            required
            value={formValues.message}
            onChange={(e) => setFormValues({...formValues, message: e.target.value})}
            className="w-full bg-white/10 border border-white/20 p-3 text-xs text-white placeholder-white/60 focus:border-[#D4A74A] focus:bg-white/15 outline-none rounded-none transition-all"
          />
        </div>

        <button 
          type="submit"
          className="w-full h-11 bg-[#D4A74A] text-[#132444] text-center uppercase tracking-widest text-[11px] font-bold transition-all duration-300 hover:bg-white cursor-pointer"
        >
          SUBMIT REQUEST
        </button>
      </form>

      {success && (
        <div className="absolute inset-0 bg-[#132444] p-6 flex flex-col items-center justify-center text-center z-20">
          <div className="h-10 w-10 bg-[#D4A74A] text-[#132444] rounded-full flex items-center justify-center mb-3">
            <CheckCircle2 size={22} />
          </div>
          <h4 className="font-serif text-base font-bold text-white">Request Sent</h4>
          <p className="text-xs text-white/80 mt-2 leading-relaxed">
            Thank you. Our legal team will review your message promptly.
          </p>
          <button 
            onClick={() => setSuccess(false)}
            className="mt-4 text-xs font-bold text-[#D4A74A] uppercase hover:underline"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );

  const practiceAreasList = [
    { 
      title: "Criminal Defense", 
      active: false, 
      action: () => onNavigatePractice ? onNavigatePractice("criminal") : onNavigateHome("practice") 
    },
    { 
      title: "DUI & Traffic Justice", 
      active: false, 
      action: () => onNavigatePractice ? onNavigatePractice("dui") : onNavigateHome("practice") 
    },
    { 
      title: "Drug Charges", 
      active: false, 
      action: () => onNavigatePractice ? onNavigatePractice("drugs") : onNavigateHome("practice") 
    },
    { 
      title: "Traffic Tickets & Offenses", 
      active: true, 
      action: () => { const el = document.getElementById("traffic-hero"); el?.scrollIntoView({ behavior: "smooth" }); } 
    },
    { 
      title: "Expungements & Record Sealing", 
      active: false, 
      action: () => onNavigatePractice ? onNavigatePractice("expungement") : onNavigateHome("practice") 
    },
    { 
      title: "Protective Order Violations", 
      active: false, 
      action: () => onNavigatePractice ? onNavigatePractice("protective") : onNavigateHome("practice") 
    }
  ];

  const renderPracticeAreasSidebar = () => (
    <div className="space-y-6 text-left">
      <div className="bg-[#132444] text-white p-6 md:p-8 shadow-xl border border-[#D4A74A]/35 text-left">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A74A] block mb-1">
          PRACTICE AREAS
        </span>
        <h3 className="font-serif text-[20px] font-bold text-white uppercase mb-3">
          Our Legal Services
        </h3>
        <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

        <ul className="space-y-2 font-sans text-[13.5px]">
          {practiceAreasList.map((pa, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={pa.action}
                className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all border cursor-pointer ${
                  pa.active
                    ? "bg-[#D4A74A] text-[#132444] font-bold border-[#D4A74A]"
                    : "bg-white/5 text-white/90 border-white/10 hover:border-[#D4A74A] hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{pa.title}</span>
                <span className="text-[12px] font-bold">→</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#FAF8F5] p-6 border border-[#132444]/15 shadow-sm text-left">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A74A] block mb-1">
          NEED LEGAL ASSISTANCE?
        </span>
        <h4 className="font-serif text-[18px] font-bold text-[#132444] uppercase mb-2">
          Speak With Our Team
        </h4>
        <p className="text-[13px] text-[#202735]/80 leading-relaxed font-sans mb-5">
          If you received a traffic citation or face potential license points or CDL issues in Oklahoma, contact McMillen Legal today.
        </p>
        <button
          type="button"
          onClick={onNavigateToConsultation}
          className="w-full bg-[#132444] text-white hover:bg-[#D4A74A] hover:text-[#132444] py-3.5 px-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-all cursor-pointer"
        >
          REQUEST CONSULTATION
        </button>
      </div>
    </div>
  );

  const faqData = [
    {
      q: "What types of traffic tickets does McMillen Legal handle?",
      a: "McMillen Legal assists clients with speeding, reckless driving, careless driving, failure to yield, improper passing, unsafe lane changes, suspended-license allegations, insurance-related citations, failure-to-appear matters, and CDL violations in Tulsa and throughout Northeast Oklahoma."
    },
    {
      q: "Should I simply pay my traffic ticket?",
      a: "Paying a ticket may be treated as accepting responsibility for the violation. Before paying, consider whether the citation could add points, affect your license, increase insurance costs, or create employment or CDL consequences."
    },
    {
      q: "How does Oklahoma’s traffic point system work?",
      a: "Points are added to a driver’s record following convictions for certain violations. Service Oklahoma states that ten or more points accumulated within five years results in suspension. A first point suspension lasts one month, while later point suspensions may last longer."
    },
    {
      q: "Can points be removed from my Oklahoma driving record?",
      a: "Service Oklahoma states that completing an approved six-hour Driver Improvement or Defensive Driving Course can remove two points once within a 24-month period. Two points may also be removed after 12 consecutive months without a pointable conviction, and the point total may return to zero after three consecutive years without one."
    },
    {
      q: "Can a speeding ticket be reduced or dismissed?",
      a: "A speeding ticket may sometimes be dismissed, amended, or resolved with reduced consequences depending on the evidence, speed alleged, driving history, court, prosecutor, and circumstances of the stop. No specific result can be guaranteed."
    },
    {
      q: "How can a traffic attorney challenge a speeding ticket?",
      a: "An attorney may review the officer’s observations, vehicle identification, posted speed limit, radar or lidar evidence, equipment records, road conditions, recordings, and other available evidence."
    },
    {
      q: "Is reckless driving more serious than a regular ticket?",
      a: "Yes. Reckless driving is an Oklahoma criminal traffic offense rather than an ordinary moving violation. A conviction may involve fines, possible incarceration, and driving-record consequences."
    },
    {
      q: "What happens if I miss my traffic court date?",
      a: "Missing a required court date may lead to additional court action, a warrant, failure-to-appear consequences, or problems with your driving privileges. Review the citation and contact the appropriate court or an attorney promptly rather than ignoring the matter."
    },
    {
      q: "Can you help if my license is suspended?",
      a: "McMillen Legal can review why the license was suspended, any unresolved citations, point accumulation, reinstatement requirements, and related criminal allegations. Service Oklahoma notes that driving privileges remain suspended or revoked until all applicable reinstatement requirements are completed."
    },
    {
      q: "Can I get a modified license after a point suspension?",
      a: "Service Oklahoma indicates that a modified driver’s license may be available in some cases involving point suspensions and certain non-DUI suspensions. Eligibility depends on the reason for the suspension and the driver’s circumstances."
    },
    {
      q: "Can a traffic ticket affect my CDL?",
      a: "Yes. Speeding, reckless driving, unsafe lane changes, following too closely, and other violations may affect commercial driving privileges. CDL holders may also face federal reporting and anti-masking rules that do not apply in the same way to ordinary drivers."
    },
    {
      q: "Does a ticket received in my personal vehicle affect my CDL?",
      a: "It can. Some convictions received while operating a personal vehicle may still appear on the driver’s record and affect CDL eligibility, depending on the offense and the driver’s history."
    },
    {
      q: "Do I need to appear in court for my traffic ticket?",
      a: "Court requirements depend on the citation, jurisdiction, and type of charge. Do not assume that hiring an attorney automatically excuses your appearance. Review the ticket and confirm all appearance requirements with your attorney."
    },
    {
      q: "How much does a Tulsa traffic ticket attorney cost?",
      a: "Legal fees depend on the type and number of citations, court jurisdiction, driving history, CDL concerns, and whether the matter requires negotiations or a contested hearing. McMillen Legal can explain the applicable fee during a confidential consultation."
    },
    {
      q: "Do you offer confidential consultations?",
      a: "Yes. A consultation allows you to discuss the citation, driving record, court date, license status, and possible next steps. Representation begins only after a written attorney-client agreement is signed."
    }
  ];

  return (
    <div id="traffic-tickets-page" className="bg-[#FCFBF8] text-[#202735]">
      
      {/* HERO SECTION */}
      <section 
        id="traffic-hero" 
        className="relative bg-black py-[100px] md:py-[140px] text-white overflow-hidden min-h-[480px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={internalHeroBg} 
            alt="Highway & Traffic Legal Backdrop" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-[#D4A74A] uppercase border-b-2 border-[#D4A74A]/30 pb-1 mb-4">
            TRAFFIC TICKETS
          </span>
          
          <h1 className="font-serif text-[clamp(2.1rem,3.8vw,3.5rem)] font-light leading-[1.15] text-white uppercase max-w-[920px]">
            {isEn ? (
              <>
                Protecting Your Record.
                <br />
                Keeping You on the Road.
              </>
            ) : (
              <>
                Protegiendo su Historial.
                <br />
                Manteniéndolo en la Carretera.
              </>
            )}
          </h1>
          
          <p className="mt-6 text-[16px] leading-relaxed text-white/90 max-w-[750px] font-sans font-light">
            McMillen Legal represents drivers facing speeding tickets, moving violations, license-related charges, and serious traffic citations in Tulsa and throughout Northeast Oklahoma. We help clients understand the possible consequences and pursue an appropriate resolution based on their driving record and circumstances.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onNavigateToConsultation}
              id="traffic-hero-consult-btn"
              className="bg-[#D4A74A] hover:bg-white text-[#132444] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all rounded-none text-center shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              {isEn ? "SCHEDULE A CONSULTATION" : "PROGRAMAR UNA CONSULTA"}
            </button>
            <a
              href="tel:9184190176"
              className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/20 hover:border-[#D4A74A] hover:bg-white/10 px-6 py-4 transition-all"
            >
              <Phone size={13} fill="currentColor" className="text-[#D4A74A]" />
              <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase">918.419.0176</span>
            </a>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN CONTENT SECTION 1 WITH PRACTICE AREAS SIDEBAR */}
      <section id="traffic-main-content" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 1: Tulsa Traffic Ticket Attorney */}
              <div>
                <h2 className="font-serif text-[clamp(2rem,3.2vw,2.5rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Tulsa Traffic Ticket Attorney
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  A traffic ticket may appear minor, but paying it can be treated as accepting the violation. Depending on the citation and your driving history, the outcome may affect your driving record, license, insurance costs, employment, or commercial driving privileges.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  At McMillen Legal, we review the traffic stop, citation, officer’s allegations, available recordings, and the legal requirements of the charged offense. We then help the client evaluate whether to contest the ticket, negotiate an amended charge, or pursue another available resolution.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  We represent drivers facing traffic matters such as:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    "Speeding tickets",
                    "Aggravated or excessive speeding allegations",
                    "Reckless driving",
                    "Careless driving",
                    "Running a red light or stop sign",
                    "Failure to yield",
                    "Improper passing",
                    "Unsafe lane changes",
                    "Following too closely",
                    "Distracted-driving allegations",
                    "Driving without insurance verification",
                    "Driving without a valid license",
                    "Driving with a suspended or revoked license",
                    "Failure to carry a driver’s license",
                    "Equipment-related citations",
                    "Failure to appear or resolve a prior ticket",
                    "Point-related license problems",
                    "Commercial driver and CDL citations",
                    "Municipal, state, and tribal traffic matters"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4A74A] shrink-0 mt-2" />
                      <span className="text-[14.5px] font-sans font-medium text-[#132444] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15px] text-[#202735]/80 font-sans leading-[1.8] bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                  Some traffic violations are treated more seriously than ordinary citations. Under Oklahoma law, reckless driving involves operating a vehicle in a careless or wanton manner without regard for the safety of people or property and may carry criminal penalties in addition to fines.
                </p>
              </div>

              {/* Part 2: McMillen Legal: Your Tulsa Traffic Defense Advocates */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  McMillen Legal: Your Tulsa Traffic Defense Advocates
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Every traffic case presents different evidence and potential consequences. McMillen Legal develops a focused strategy based on the type of citation, the reason for the stop, the driver’s record, the available evidence, and whether the case could affect employment or driving privileges.
                </p>

                <div className="font-serif font-bold text-[17px] text-[#132444] mb-4">
                  Our legal team may review:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {[
                    "The traffic citation and charging language",
                    "Police reports and officer notes",
                    "Body-camera and dash-camera recordings",
                    "Traffic-camera or surveillance footage",
                    "Radar or lidar evidence",
                    "Speed-measurement records",
                    "The location and conditions of the traffic stop",
                    "Road signs and posted speed limits",
                    "Weather, visibility, and roadway conditions",
                    "Witness and passenger statements",
                    "Vehicle registration and insurance records",
                    "Driver’s license and reinstatement records",
                    "Prior traffic convictions and accumulated points",
                    "Court notices and failure-to-appear records",
                    "Commercial driver qualification concerns",
                    "Tribal, municipal, or state-court jurisdiction"
                  ].map((checkItem, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0 mt-1" />
                      <span className="text-[14.5px] font-sans font-medium text-[#202735] leading-snug">{checkItem}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  We may examine whether the officer accurately identified the vehicle, whether the alleged violation can be proven, whether speed-measuring equipment was properly used, and whether the citation correctly reflects what occurred.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans">
                  When appropriate, we communicate with prosecutors regarding dismissal, amendment to a less serious offense, reduced penalties, deferred outcomes, or other available resolutions. If the matter cannot be resolved fairly, we are prepared to contest the allegations in court.
                </p>
              </div>

              {/* Part 3: Why Hiring a Tulsa Traffic Ticket Attorney Matters */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Why Hiring a Tulsa Traffic Ticket Attorney Matters
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] text-[#132444] font-semibold font-sans mb-5">
                  A Tulsa traffic ticket attorney can help you:
                </p>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Understand whether the citation may add points to your driving record.",
                    "Determine whether paying the ticket could create additional consequences.",
                    "Review the evidence supporting the alleged violation.",
                    "Challenge an inaccurate or unsupported citation.",
                    "Examine radar, lidar, video, and officer observations.",
                    "Address missed court dates or unresolved traffic matters.",
                    "Respond to a suspended or revoked license allegation.",
                    "Seek an amended charge or reduced penalty when available.",
                    "Protect employment-related driving privileges.",
                    "Evaluate the effect of a citation on a commercial driver’s license.",
                    "Address multiple tickets arising from the same traffic stop.",
                    "Prepare for negotiations, hearings, or trial."
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <CheckCircle2 size={16} className="text-[#132444] shrink-0 mt-1" />
                      <span className="text-[15px] font-sans text-[#202735] font-medium leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#132444]/5 p-6 border border-[#132444]/15">
                    Oklahoma uses a mandatory point system for certain traffic convictions. Service Oklahoma currently states that accumulating ten or more points within five years results in license suspension. Suspension periods increase for subsequent point suspensions.
                  </p>

                  <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#132444]/5 p-6 border border-[#132444]/15">
                    Commercial drivers should be particularly careful before paying a citation. Oklahoma’s 2026 Traffic Violation Code Book states that federal law prohibits courts or states from hiding or “masking” CDL-related convictions, including through some reductions or deferred resolutions.
                  </p>

                  <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                    Obtaining legal guidance before resolving the ticket can help you understand how the decision may affect your record, license, and ability to drive for work.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column with Practice Areas List */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {renderPracticeAreasSidebar()}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TYPES OF TRAFFIC TICKETS WE HANDLE */}
      <section id="traffic-types-cases" className="py-[100px] bg-[#FCFBF8] border-t border-b border-[#EFECE7]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">
              TYPES OF TRAFFIC TICKETS WE HANDLE
            </span>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,2.75rem)] font-light leading-tight text-[#132444] uppercase mt-2">
              Every Case Is Unique. <br className="hidden sm:inline" />We’re Ready for All of Them.
            </h2>
            <div className="w-16 h-1 bg-[#D4A74A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <Car size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Speeding Tickets
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  A speeding citation may affect your driving record, insurance costs, and employment. We review the alleged speed, posted limit, location, officer’s observations, and method used to measure speed.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Reckless or Careless Driving
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Reckless or careless driving allegations are more serious than an ordinary moving violation. These cases may involve claims of excessive speed, aggressive driving, unsafe passing, racing, or conduct that allegedly endangered others.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <ShieldAlert size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Suspended or Revoked License
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Driving while suspended or revoked can create additional penalties and make restoring lawful driving privileges more difficult. We examine why the license was suspended, whether proper notice was provided, and what options may be available.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <FileText size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Failure to Yield & Traffic Controls
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Tickets may arise from allegations of running a red light or stop sign, failing to yield, making an improper turn, or disregarding another traffic-control device. Intersection layout, visibility, signage, recordings, and witness accounts may be relevant.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <Gavel size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Insurance & Equipment Violations
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Drivers may receive citations involving proof of insurance, expired registration, defective equipment, or an improper license. Some issues may be corrected, but the appropriate response depends on the citation and available documentation.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <Scale size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Commercial Driver Citations
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  A traffic conviction can have serious professional consequences for a commercial driver. Speeding, lane violations, following too closely, railroad-crossing violations, or operating without proper credentials may threaten CDL status and employment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TWO-COLUMN CONTENT SECTION 2: CONSIDERATIONS & INDIVIDUALIZED STRATEGY */}
      <section id="traffic-considerations-strategy" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 4: Key Tulsa Traffic Ticket Considerations */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] block mb-2">
                  OKLAHOMA TRAFFIC TICKET PROCEDURE
                </span>
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Key Tulsa Traffic Ticket Considerations
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Before paying a Tulsa traffic ticket, it is important to understand what that payment means and how the violation could affect your record. McMillen Legal helps drivers evaluate the complete consequences rather than focusing only on the initial fine.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Paying a Ticket May Resolve It as a Conviction
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Paying a traffic ticket is not always the same as making the problem disappear. Payment may be treated as a guilty plea or result in a conviction being reported on your driving record.
                    </p>
                    <p className="text-[15px] font-semibold text-[#132444] mb-2">
                      Before paying, consider whether the violation could affect:
                    </p>
                    <div className="space-y-1.5 my-3 pl-2">
                      {[
                        "Driver’s-license points",
                        "Insurance premiums",
                        "Employment that requires driving",
                        "Commercial driving privileges",
                        "Existing probation or deferred terms",
                        "Future treatment of traffic violations"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-[14px] text-[#132444] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A74A]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Some Violations Add Points to Your Record
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Oklahoma assigns different codes and reporting consequences to traffic violations. Moving violations may add points or otherwise affect a driver’s record, depending on the offense and disposition.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      The current Oklahoma Traffic Violation Code Book identifies violations used by Service Oklahoma when processing driving records. Drivers with previous tickets should be especially careful about resolving another citation without understanding its effect.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Missing Court Can Make the Situation Worse
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      A traffic citation normally includes a response or court date. Ignoring it may lead to additional court action, a warrant, extra costs, or complications involving driving privileges.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Keep the citation, confirm the court listed on it, and respond before the stated deadline. If the date has already passed, legal assistance may help determine what must be done next.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Speed-Measurement Evidence Is Not Infallible
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Speeding allegations may rely on radar, lidar, pacing, aircraft observation, or an officer’s visual estimate. The reliability of that evidence may depend on equipment operation, maintenance, calibration, traffic conditions, and the officer’s ability to identify the correct vehicle.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      McMillen Legal evaluates how the alleged speed was determined and whether the available evidence supports the citation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      CDL Holders Face Additional Risks
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Commercial drivers may face employment consequences even when a citation occurred in a personal vehicle. Certain violations can result in disqualification, employer reporting requirements, or loss of driving opportunities.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Because options that may be available to ordinary drivers are not always available to CDL holders, commercial citations should be evaluated carefully before entering a plea.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Out-of-State Drivers Should Not Ignore Tulsa Tickets
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      A driver who lives outside Oklahoma may still face consequences in the licensing state. Ignoring an Oklahoma citation can also create court and license complications.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      An attorney can explain whether the matter requires a personal appearance and what options may be available under the procedures of the court handling the citation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Part 5: Individualized Strategy / How McMillen Legal Helps */}
              <div className="border-t border-black/10 pt-10">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] block mb-2">
                  INDIVIDUALIZED STRATEGY
                </span>
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  How McMillen Legal Helps
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Traffic-ticket defense should begin with an assessment of the complete effect on the driver—not just the amount printed on the citation.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  McMillen Legal works to:
                </div>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Explain the alleged violation and possible consequences",
                    "Review the driver’s history and license status",
                    "Examine reports, recordings, and speed evidence",
                    "Identify factual or procedural defenses",
                    "Communicate with the appropriate Tulsa-area court",
                    "Pursue a reasonable negotiated outcome when available",
                    "Prepare for a contested hearing when necessary"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0 mt-1" />
                      <span className="text-[15px] font-sans text-[#202735] font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#132444] text-white p-6 sm:p-7 border-l-4 border-[#D4A74A] flex items-start gap-4">
                  <Quote size={28} className="text-[#D4A74A] shrink-0 mt-0.5 opacity-90" />
                  <p className="text-[15px] sm:text-[16px] leading-[1.8] font-sans font-light italic">
                    “Our goal is to help Tulsa drivers protect their records, driving privileges, and ability to work.”
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column with Confidential Consultation Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {renderFormSidebar("traffic_considerations")}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="traffic-faq" className="bg-[#FCFBF8] py-[100px] text-[#202735] border-b border-[#EFECE7]">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-none text-[#132444] uppercase mt-2 mb-12">
            Questions & Answers
          </h2>

          <div className="space-y-4 max-w-[880px] mx-auto text-left">
            {faqData.map((item, idx) => {
              const isOpen = faqStates[idx];
              return (
                <div key={idx} className="border border-[#EFECE7] bg-white shadow-sm">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left text-[16px] md:text-[17.5px] font-semibold text-[#132444] hover:text-[#D4A74A] font-serif transition-colors"
                    type="button"
                  >
                    <span className="pr-4">{item.q}</span>
                    {isOpen ? (
                      <ChevronUp size={20} className="text-[#D4A74A] shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-[#D4A74A] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-6 border-t border-[#EFECE7] text-[15px] leading-[1.8] text-[#202735]/85 font-sans font-normal bg-[#FAF8F5]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT / CONSULTATION SECTION */}
      <section 
        id="traffic-contact-section" 
        className="relative w-full overflow-hidden bg-cover bg-center flex items-stretch border-t border-black/5" 
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />
        
        <div className="relative z-10 mx-auto w-full max-w-[1180px] grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch py-20 px-6">
          
          {/* Left Contact Details */}
          <div className="text-left text-white flex flex-col justify-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] mb-2">CONFIDENTIAL CASE EVALUATION</span>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light uppercase leading-[1.2] text-[#D4A74A]">
              Get Legal <span className="inline text-white font-semibold">Guidance Today</span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-white/90 font-sans font-light">
              Don't let a traffic citation compromise your driving record, license, or insurance premiums. Contact McMillen Legal today to schedule a confidential consultation.
            </p>
            
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 text-white">
                <div className="h-11 w-11 bg-black/50 flex items-center justify-center border border-[#D4A74A]/40 shrink-0 text-[#D4A74A]">
                  <Phone size={18} fill="currentColor" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#D4A74A]">CONFIDENTIAL PHONE</div>
                  <a href="tel:9184190176" className="font-sans text-[22px] font-bold block leading-tight text-white hover:text-[#D4A74A] transition-colors">918.419.0176</a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-white">
                <div className="h-11 w-11 bg-black/50 flex items-center justify-center border border-[#D4A74A]/40 shrink-0 text-[#D4A74A]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#D4A74A]">OFFICE LOCATION</div>
                  <div className="font-sans text-[18px] font-bold block leading-tight text-white">2930 S. Yale Ave, Suite C, Tulsa, OK 74114</div>
                </div>
              </div>

              <div className="flex items-start gap-4 text-white">
                <div className="h-11 w-11 bg-black/50 flex items-center justify-center border border-[#D4A74A]/40 shrink-0 text-[#D4A74A]">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#D4A74A]">EMAIL ADDRESS</div>
                  <a href="mailto:info@mcmillenlegal.com" className="font-sans text-[20px] font-bold block leading-tight text-white hover:text-[#D4A74A] transition-colors">
                    info@mcmillenlegal.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Consultation Form */}
          <div className="bg-[#FCFBF8] p-8 md:p-10 shadow-2xl border border-white/10 relative text-left">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A74A] mb-2">SCHEDULE A CONSULTATION</div>
            <h3 className="font-serif text-[22px] font-semibold text-[#202735] mb-6">Confidential Case Evaluation</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="fullName_bottom"
                  placeholder="Full Name *" 
                  required
                  value={formValues.name}
                  onChange={(e) => setFormValues({...formValues, name: e.target.value})}
                  className="w-full h-11 bg-white border border-[#132444]/20 px-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="tel" 
                  name="phone_bottom"
                  placeholder="Phone Number *" 
                  required
                  value={formValues.phone}
                  onChange={(e) => setFormValues({...formValues, phone: e.target.value})}
                  className="w-full h-11 bg-white border border-[#132444]/20 px-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                />
                <input 
                  type="email" 
                  name="email_bottom"
                  placeholder="Email Address *" 
                  required
                  value={formValues.email}
                  onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                  className="w-full h-11 bg-white border border-[#132444]/20 px-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                />
              </div>

              <div>
                <select 
                  name="caseType_bottom"
                  value={formValues.caseType}
                  onChange={(e) => setFormValues({...formValues, caseType: e.target.value})}
                  className="w-full h-11 bg-white border border-[#132444]/20 px-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                >
                  <option value="Traffic Tickets">Traffic Tickets</option>
                  <option value="DUI / DWI Defense">DUI / DWI Defense</option>
                  <option value="Criminal Defense">Criminal Defense</option>
                  <option value="Drug Charges">Drug Charges</option>
                  <option value="Expungements">Expungements</option>
                  <option value="Protective Orders">Protective Orders</option>
                </select>
              </div>

              <div>
                <textarea 
                  name="caseDescription_bottom"
                  rows={4} 
                  placeholder="Tell us about your traffic citation or license issue..." 
                  required
                  value={formValues.message}
                  onChange={(e) => setFormValues({...formValues, message: e.target.value})}
                  className="w-full bg-white border border-[#132444]/20 p-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full h-12 bg-[#D4A74A] text-[#132444] text-center uppercase tracking-widest text-[11px] font-bold transition-all duration-300 hover:bg-[#132444] hover:text-white cursor-pointer"
              >
                SUBMIT REQUEST
              </button>
            </form>

            {success && (
              <div className="absolute inset-0 bg-[#FCFBF8] p-8 flex flex-col items-center justify-center text-center z-20">
                <div className="h-12 w-12 bg-[#D4A74A] text-[#132444] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={26} />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#132444]">Request Submitted Successfully</h4>
                <p className="text-sm text-[#202735]/80 mt-2 max-w-xs leading-relaxed">
                  Thank you for reaching out to McMillen Legal. A member of our legal team will contact you shortly regarding your traffic ticket.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-xs font-bold text-[#D4A74A] uppercase tracking-wider hover:underline"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
