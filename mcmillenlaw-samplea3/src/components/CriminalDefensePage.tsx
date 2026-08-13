import React, { useState } from "react";
import { translations } from "../translations";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ShieldAlert, 
  ChevronUp, 
  ChevronDown, 
  Gavel, 
  FileText, 
  AlertTriangle, 
  Scale,
  Quote
} from "lucide-react";

// @ts-ignore
import internalHeroBg from "../assets/images/pa_criminal_1781207564027.jpg";
// @ts-ignore
import contactBg from "../assets/images/ChatGPT Image Jul 25, 2026, 02_20_34 AM.png";

interface CriminalDefensePageProps {
  language: "en" | "es";
  onNavigateHome: (sectionId?: string) => void;
  onNavigateToConsultation: () => void;
  onNavigatePractice?: (practiceId: string) => void;
}

export function CriminalDefensePage({ 
  language, 
  onNavigateHome, 
  onNavigateToConsultation,
  onNavigatePractice 
}: CriminalDefensePageProps) {
  const isEn = language === "en";

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "Criminal Defense",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  // FAQ states
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
      caseType: "Criminal Defense",
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
            <option value="Criminal Defense">Criminal Defense</option>
            <option value="DUI / DWI Defense">DUI / DWI Defense</option>
            <option value="Drug Charges">Drug Charges</option>
            <option value="Traffic Tickets">Traffic Tickets</option>
            <option value="Expungements">Expungements</option>
            <option value="Protective Orders">Protective Orders</option>
          </select>
        </div>

        <div>
          <textarea 
            name={`caseDescription_${uniqueId}`}
            rows={3} 
            placeholder="Tell us about your case..." 
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
    { title: "Criminal Defense", active: true, action: () => { const el = document.getElementById("cd-hero"); el?.scrollIntoView({ behavior: "smooth" }); } },
    { title: "DUI & Traffic Justice", active: false, action: () => onNavigatePractice ? onNavigatePractice("dui") : onNavigateHome("practice") },
    { title: "Drug Charges", active: false, action: () => onNavigatePractice ? onNavigatePractice("drugs") : onNavigateHome("practice") },
    { title: "Traffic Tickets & Offenses", active: false, action: () => onNavigatePractice ? onNavigatePractice("traffic") : onNavigateHome("practice") },
    { title: "Expungements & Record Sealing", active: false, action: () => onNavigatePractice ? onNavigatePractice("expungement") : onNavigateHome("practice") },
    { title: "Protective Order Violations", active: false, action: () => onNavigatePractice ? onNavigatePractice("protective") : onNavigateHome("practice") }
  ];

  const renderPracticeAreasSidebar = () => (
    <div className="space-y-6 text-left">
      {/* Practice Area Navigation Widget */}
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

      {/* Quick Contact / Help Card */}
      <div className="bg-[#FAF8F5] p-6 border border-[#132444]/15 shadow-sm text-left">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A74A] block mb-1">
          NEED LEGAL ASSISTANCE?
        </span>
        <h4 className="font-serif text-[18px] font-bold text-[#132444] uppercase mb-2">
          Speak With Our Team
        </h4>
        <p className="text-[13px] text-[#202735]/80 leading-relaxed font-sans mb-5">
          If you or a family member are facing criminal allegations or have questions about a pending case, contact McMillen Legal today.
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
      q: "What types of criminal cases does McMillen Legal handle?",
      a: "McMillen Legal represents clients in DUI and DWI cases, drug offenses, felonies, misdemeanors, assault allegations, domestic violence matters, protective orders, traffic cases, probation violations, bond reduction proceedings, and expungements. The firm handles matters in Tulsa and throughout Northeast Oklahoma."
    },
    {
      q: "What should I do after being arrested in Tulsa?",
      a: "Remain calm, avoid discussing the allegations with law enforcement or other people, and do not consent to a search without understanding your rights. Ask to speak with a criminal defense attorney and carefully follow all bond conditions and scheduled court dates."
    },
    {
      q: "Can a criminal defense attorney get my charges dismissed?",
      a: "Dismissal may be possible when evidence is insufficient, constitutional rights were violated, witnesses are unreliable, or the prosecution cannot prove the allegations. However, no attorney can guarantee a dismissal. The available options depend on the facts and evidence in the individual case."
    },
    {
      q: "What happens during the Oklahoma criminal defense process?",
      a: "The process may include an arrest or citation, booking, an initial court appearance or arraignment, bond decisions, evidence exchange, negotiations, pretrial motions, and possibly a trial. The exact process depends on whether the matter is a misdemeanor, felony, municipal case, or state-court prosecution."
    },
    {
      q: "Can McMillen Legal help reduce my bond?",
      a: "McMillen Legal assists clients with bond-related matters, including requests to review or reduce bond conditions. A court will consider the circumstances of the charge, criminal history, community ties, flight risk, and other relevant factors when deciding whether bond should be modified."
    },
    {
      q: "Will a criminal charge affect my immigration status?",
      a: "Some criminal charges, convictions, and plea agreements can create immigration consequences. Noncitizens should obtain legal guidance before accepting a plea or making decisions that may affect their immigration status."
    },
    {
      q: "Can an arrest or criminal record be expunged in Oklahoma?",
      a: "Certain arrests, dismissed charges, deferred sentences, and qualifying convictions may be eligible for expungement or record sealing. Eligibility depends on the type of case, its outcome, criminal history, and applicable waiting periods."
    },
    {
      q: "How much does a Tulsa criminal defense attorney cost?",
      a: "Legal fees depend on the seriousness of the allegations, the amount of evidence involved, the court where the case is filed, and whether the matter is resolved through negotiations or proceeds toward trial. McMillen Legal can explain the fee arrangement during a confidential consultation."
    },
    {
      q: "How long will my criminal case take?",
      a: "Some cases may be resolved through early negotiations, while others require investigation, motions, multiple hearings, or trial preparation. The timeline depends on the charges, evidence, court schedule, and legal strategy."
    },
    {
      q: "Do you offer confidential legal consultations?",
      a: "Yes. A consultation gives you an opportunity to explain what happened, discuss the charges or investigation, and learn about possible next steps. Contacting the firm does not create an attorney-client relationship until a written agreement is signed."
    }
  ];

  return (
    <div id="criminal-defense-page" className="bg-[#FCFBF8] text-[#202735]">
      
      {/* HERO SECTION */}
      <section 
        id="cd-hero" 
        className="relative bg-black py-[100px] md:py-[140px] text-white overflow-hidden min-h-[480px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={internalHeroBg} 
            alt="Courtroom Backdrop" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-[#D4A74A] uppercase border-b-2 border-[#D4A74A]/30 pb-1 mb-4">
            CRIMINAL JUSTICE
          </span>
          
          <h1 className="font-serif text-[clamp(2.1rem,3.8vw,3.5rem)] font-light leading-[1.15] text-white uppercase max-w-[920px]">
            {isEn ? "Tulsa Criminal Defense Lawyers Fighting for Your Future" : "Abogados de Defensa Criminal en Tulsa Luchando por su Futuro"}
          </h1>
          
          <p className="mt-6 text-[16px] leading-relaxed text-white/90 max-w-[700px] font-sans font-light">
            McMillen Legal represents individuals facing criminal charges, investigations, protective-order matters, and serious traffic allegations in Tulsa and throughout Northeast Oklahoma. We provide strategic legal guidance at every stage of the criminal justice process.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onNavigateToConsultation}
              id="cd-hero-consult-btn"
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

      {/* TWO-COLUMN CONTENT SECTION 1 WITH CONSULTATION FORM SIDEBAR */}
      <section id="cd-main-content" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 1: Tulsa Criminal Defense Attorney */}
              <div>
                <h2 className="font-serif text-[clamp(2rem,3.2vw,2.5rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Tulsa Criminal Defense Attorney
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  Being arrested, investigated, or charged with a crime can affect your freedom, reputation, employment, immigration status, driving privileges, and family relationships.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  At McMillen Legal, we help clients understand the allegations against them, the possible consequences, and the legal options available. Our attorneys investigate how the arrest occurred, examine the prosecution’s evidence, identify potential constitutional violations, and communicate with prosecutors on the client’s behalf.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  We represent clients facing matters such as:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    "DUI and DWI charges",
                    "Drug possession and controlled-substance offenses",
                    "Felony and misdemeanor charges",
                    "Assault and battery allegations",
                    "Domestic violence accusations",
                    "Protective-order proceedings",
                    "Theft and property crimes",
                    "Serious traffic citations",
                    "Probation violations",
                    "Bond reduction requests",
                    "Expungements and criminal record sealing",
                    "Municipal and district court cases"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4A74A] shrink-0 mt-2" />
                      <span className="text-[14.5px] font-sans font-medium text-[#132444] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15px] text-[#202735]/80 font-sans leading-[1.8] bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                  We also consider how a criminal case may affect a client’s immigration status. When immigration consequences are a concern, potential plea agreements and case resolutions should be evaluated carefully before decisions are made.
                </p>
              </div>

              {/* Part 2: McMillen Legal: Your Tulsa Criminal Defense Advocates */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  McMillen Legal: Your Tulsa Criminal Defense Advocates
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Every criminal case presents different factual, legal, and personal challenges. McMillen Legal develops a focused defense strategy based on the allegations, available evidence, police conduct, criminal history, court jurisdiction, and the client’s long-term priorities.
                </p>

                <div className="font-serif font-bold text-[17px] text-[#132444] mb-4">
                  Our legal team may examine:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {[
                    "Police reports and arrest affidavits",
                    "Body-camera and dash-camera footage",
                    "Surveillance recordings and photographs",
                    "Witness statements and potential alibis",
                    "Search warrants and probable-cause allegations",
                    "Traffic-stop and vehicle-search procedures",
                    "Breath, blood, and field sobriety test evidence",
                    "Laboratory and controlled-substance reports",
                    "Phone records, messages, and digital evidence",
                    "Court records and prior case dispositions",
                    "Bond terms and release conditions",
                    "Evidence that may support dismissal, reduction, or mitigation"
                  ].map((checkItem, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0 mt-1" />
                      <span className="text-[14.5px] font-sans font-medium text-[#202735] leading-snug">{checkItem}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  We look for inconsistencies, unsupported allegations, unlawful searches, unreliable witnesses, procedural mistakes, and weaknesses in the prosecution’s case.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans">
                  When appropriate, we negotiate with prosecutors regarding reduced charges, alternative resolutions, sentencing options, or dismissal. However, every case is prepared with the possibility of litigation or trial in mind.
                </p>
              </div>

              {/* Part 3: Why Hiring a Tulsa Criminal Defense Attorney Matters */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Why Hiring a Tulsa Criminal Defense Attorney Matters
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] text-[#132444] font-semibold font-sans mb-5">
                  A Tulsa criminal defense attorney can help you:
                </p>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Understand the charges and possible penalties you face.",
                    "Avoid statements that could damage your defense.",
                    "Prepare for arraignments, hearings, and court deadlines.",
                    "Challenge unlawful stops, searches, seizures, or arrests.",
                    "Review whether evidence was collected and handled properly.",
                    "Identify witnesses and preserve time-sensitive evidence.",
                    "Request reasonable bond terms or a bond reduction.",
                    "Communicate and negotiate directly with prosecutors.",
                    "Evaluate plea offers before accepting permanent consequences.",
                    "Address possible employment, licensing, driving, or immigration concerns.",
                    "Pursue expungement or record-sealing options when eligible.",
                    "Prepare a strategic defense for negotiations, motions, or trial."
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <CheckCircle2 size={16} className="text-[#132444] shrink-0 mt-1" />
                      <span className="text-[15px] font-sans text-[#202735] font-medium leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#132444]/5 p-6 border border-[#132444]/15">
                  Early representation can give your attorney more time to investigate the allegations, preserve evidence, communicate with witnesses, and address release conditions before avoidable problems develop.
                </p>
              </div>

            </div>

            {/* Right Sidebar Column with Practice Areas Navigation */}
            <div className="lg:col-span-4">
              <div className="sticky top-42 space-y-6">
                {renderPracticeAreasSidebar()}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TYPES OF CRIMINAL CASES WE HANDLE */}
      <section id="cd-types-cases" className="py-[100px] bg-[#FCFBF8] border-t border-b border-[#EFECE7]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">
              TYPES OF CRIMINAL CASES WE HANDLE
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
                  <Gavel size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Misdemeanor Charges
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  A misdemeanor should not be treated as a minor inconvenience. A conviction may result in jail, fines, probation, court costs, and a public criminal record. We evaluate the evidence and help clients pursue an appropriate resolution.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <ShieldAlert size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Felony Charges
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Felony accusations carry serious potential consequences and require careful preparation from the beginning. We examine the prosecution’s allegations, investigate the available evidence, and prepare a defense based on the specific facts of the case.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  DUI and Traffic-Related Offenses
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  DUI charges and serious traffic offenses may threaten a person’s driving privileges, employment, insurance costs, and freedom. We review the reason for the stop, field sobriety testing, chemical-test evidence, and other circumstances surrounding the arrest.
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
                  Drug-Related Criminal Matters
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Drug cases may involve allegations of possession, possession with intent, distribution, trafficking, or drug paraphernalia. The defense may depend on where the substance was found, who controlled the location, and whether the search was lawful.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Protective Order Violations
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  An alleged violation of a protective order can lead to arrest and additional restrictions. Because these cases may involve disputed communications, locations, or conduct, we carefully review the order and the evidence supporting the allegation.
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
                  Bond Reductions and Warrants
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  High bond or an outstanding warrant can make it difficult to work, care for family, and prepare a defense. McMillen Legal helps clients understand their options for addressing warrants and requesting reasonable release conditions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TWO-COLUMN CONTENT SECTION 2: CONSIDERATIONS & INDIVIDUALIZED STRATEGY (PLACED AFTER TYPES OF CASES) */}
      <section id="cd-considerations-strategy" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 4: Key Tulsa Criminal Defense Considerations */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] block mb-2">
                  OKLAHOMA CRIMINAL PROCEDURE
                </span>
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Key Tulsa Criminal Defense Considerations
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Understanding the Oklahoma criminal process can help you avoid decisions that may weaken your defense. McMillen Legal guides clients through each stage while protecting their rights and preparing for the next step.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Misdemeanor and Felony Charges Are Different
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Oklahoma criminal cases may be prosecuted as misdemeanors or felonies depending on the alleged conduct and applicable law. Felony charges generally carry more severe consequences and involve additional court procedures.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      The classification of an offense can affect possible incarceration, fines, court hearings, and long-term consequences. We explain what the filed charge means and what options may be available.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Your First Court Appearance Matters
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      After an arrest or criminal filing, the court may address the charges, bond, release conditions, and future hearing dates. Missing court or violating a release condition can create additional problems.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Speaking with a Tulsa criminal defense attorney early allows time to review the allegations and prepare for important court appearances.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Felony Cases May Include a Preliminary Hearing
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      In an Oklahoma felony case, a preliminary hearing generally determines whether there is probable cause to believe that a crime occurred and that the accused committed it. Oklahoma does not use preliminary examinations in misdemeanor cases.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Depending on the circumstances, the defense may examine witnesses, challenge the prosecution’s evidence, or evaluate whether waiving the hearing serves a strategic purpose.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Police Evidence Should Be Carefully Examined
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Police reports do not always tell the complete story. Body-camera footage, dashboard-camera video, dispatch records, photographs, witness statements, forensic evidence, and phone data may provide important additional context.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      We also examine whether a search, seizure, traffic stop, or questioning complied with constitutional requirements. When evidence was obtained unlawfully, the defense may have grounds to challenge its use.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      A Conviction Can Have Long-Term Consequences
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Criminal penalties may extend beyond incarceration, probation, or fines. A conviction can also affect employment, professional licensing, housing, driving privileges, firearm rights, immigration matters, and future background checks.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      McMillen Legal considers both the immediate charge and its possible long-term impact when evaluating a defense strategy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Do Not Wait to Prepare Your Defense
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Evidence can become harder to obtain as time passes. Surveillance footage may be erased, witnesses may become difficult to locate, and memories may fade.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Early legal assistance gives the defense more time to preserve evidence, investigate the allegations, review court deadlines, and prepare for negotiations or trial.
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
                  Every criminal case requires an individualized strategy. McMillen Legal does not assume that an arrest report presents the full story.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  We work to:
                </div>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Explain the charges and court process clearly",
                    "Investigate the facts surrounding the accusation",
                    "Review the prosecution’s evidence",
                    "Identify legal and factual defenses",
                    "Address bond and release concerns",
                    "Negotiate when doing so serves the client’s interests",
                    "Prepare thoroughly for hearings or trial"
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
                    “With more than 20 years of combined experience, our firm provides criminal-defense representation focused on protecting the rights and future of clients in Tulsa and across Oklahoma.”
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column with Consultation Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-42 space-y-6">
                {renderFormSidebar("sidebar2")}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="cd-faq" className="bg-[#FCFBF8] py-[100px] text-[#202735] border-b border-[#EFECE7]">
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
        id="cd-contact-section" 
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
              Don't navigate the criminal justice system alone. Contact McMillen Legal today to schedule a confidential consultation regarding your case.
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
                  placeholder="Full Name" 
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
                  placeholder="Phone Number" 
                  required
                  value={formValues.phone}
                  onChange={(e) => setFormValues({...formValues, phone: e.target.value})}
                  className="w-full h-11 bg-white border border-[#132444]/20 px-4 text-sm text-[#202735] focus:border-[#D4A74A] outline-none rounded-none"
                />
                <input 
                  type="email" 
                  name="email_bottom"
                  placeholder="Email Address" 
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
                  <option value="Criminal Defense">Criminal Defense</option>
                  <option value="DUI / DWI Defense">DUI / DWI Defense</option>
                  <option value="Drug Charges">Drug Charges</option>
                  <option value="Traffic Tickets">Traffic Tickets</option>
                  <option value="Expungements">Expungements</option>
                  <option value="Protective Orders">Protective Orders</option>
                </select>
              </div>

              <div>
                <textarea 
                  name="caseDescription_bottom"
                  rows={4} 
                  placeholder="Tell us about your case..." 
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
              <div className="absolute inset-0 bg-[#FCFBF8]/95 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#202735]">Request Sent Successfully</h4>
                <p className="text-sm text-[#202735]/80 mt-2 max-w-[320px] leading-relaxed">
                  Thank you. Your request has been submitted. Our legal team will review your message promptly.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-xs font-bold text-[#D4A74A] uppercase hover:underline"
                >
                  Close
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
