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
import internalHeroBg from "../assets/images/pa_dui_1781207577149.jpg";
// @ts-ignore
import contactBg from "../assets/images/ChatGPT Image Jul 25, 2026, 02_20_34 AM.png";

interface DuiTrafficPageProps {
  language: "en" | "es";
  onNavigateHome: (sectionId?: string) => void;
  onNavigateToConsultation: () => void;
  onNavigatePractice?: (practiceId: string) => void;
}

export function DuiTrafficPage({ 
  language, 
  onNavigateHome, 
  onNavigateToConsultation,
  onNavigatePractice 
}: DuiTrafficPageProps) {
  const isEn = language === "en";

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "DUI / DWI Defense",
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
      caseType: "DUI / DWI Defense",
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
            <option value="DUI / DWI Defense">DUI / DWI Defense</option>
            <option value="Criminal Defense">Criminal Defense</option>
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
            placeholder="Tell us about your DUI or traffic case..." 
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
      active: true, 
      action: () => { const el = document.getElementById("dui-hero"); el?.scrollIntoView({ behavior: "smooth" }); } 
    },
    { 
      title: "Drug Charges", 
      active: false, 
      action: () => onNavigatePractice ? onNavigatePractice("drugs") : onNavigateHome("practice") 
    },
    { 
      title: "Traffic Tickets & Offenses", 
      active: false, 
      action: () => onNavigatePractice ? onNavigatePractice("traffic") : onNavigateHome("practice") 
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
          If you or a family member are facing a DUI charge, license suspension, or traffic citation, contact McMillen Legal today.
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
      q: "What is the difference between DUI and DWI in Oklahoma?",
      a: "DUI generally involves an allegation that a driver operated or was in actual physical control of a vehicle while under the influence of alcohol, drugs, or another intoxicating substance. Oklahoma law also recognizes a separate impaired-driving offense. The correct charge and possible consequences depend on the evidence and circumstances of the case."
    },
    {
      q: "Can I be arrested for DUI if my blood alcohol level is below 0.08?",
      a: "Potentially. Oklahoma law does not limit DUI allegations solely to a blood or breath alcohol concentration of 0.08 or higher. A person may also be accused of driving under the influence based on alleged impairment by alcohol, drugs, another intoxicating substance, or a combination of substances."
    },
    {
      q: "Can a prescription medication lead to a DUI charge?",
      a: "Yes. A person may face a DUI allegation when law enforcement claims that a prescription medication or another substance made the person incapable of safely operating a vehicle. Having a lawful prescription does not automatically resolve the allegation."
    },
    {
      q: "What happens to my driver’s license after a DUI arrest?",
      a: "The state may initiate a process that affects your driving privileges after reviewing the impaired-driving affidavit and any available test results. Notices can contain important requirements and deadlines, so they should not be ignored."
    },
    {
      q: "What is Oklahoma’s Impaired Driver Accountability Program?",
      a: "The Impaired Driver Accountability Program, commonly called IDAP, is an Oklahoma program connected to certain DUI-related driving-privilege matters. Eligibility and requirements depend on the arrest, license status, revocation history, enrollment timing, and other circumstances."
    },
    {
      q: "Can a DUI attorney challenge a breath or blood test?",
      a: "An attorney may review whether the test was legally requested, properly administered, accurately documented, and handled according to applicable procedures. Medical conditions, equipment records, collection methods, laboratory handling, and timing may also be relevant."
    },
    {
      q: "Can a traffic ticket affect my driver’s license?",
      a: "Yes. Some Oklahoma traffic violations may add points to a driving record or contribute to suspension and reinstatement issues. The effect depends on the violation, driving history, license type, and case outcome."
    },
    {
      q: "Should I hire an attorney for a speeding ticket?",
      a: "Many minor citations can be resolved without an attorney. Legal representation may be particularly important when a citation threatens a license, employment, commercial driving privileges, insurance costs, or involves multiple or serious allegations."
    },
    {
      q: "Can McMillen Legal help commercial drivers?",
      a: "McMillen Legal can review traffic and DUI allegations involving commercial drivers. Because a conviction or administrative action may affect a commercial driver’s livelihood, CDL holders should obtain guidance before entering a plea or paying a citation."
    },
    {
      q: "Can my DUI or traffic charge be dismissed?",
      a: "Dismissal may be possible when the stop was unlawful, evidence is insufficient, testing procedures are unreliable, required elements cannot be proven, or another legal issue weakens the case. No outcome can be guaranteed, and the available defense depends on the facts of the individual matter."
    },
    {
      q: "How much does a Tulsa DUI or traffic attorney cost?",
      a: "The cost depends on the charge, number of citations, available evidence, court jurisdiction, required hearings, and whether the matter proceeds toward trial. McMillen Legal can explain the applicable fee arrangement during a confidential consultation."
    },
    {
      q: "Do you offer confidential consultations?",
      a: "Yes. A consultation allows you to discuss the traffic stop, arrest, citation, testing, court paperwork, and potential next steps. An attorney-client relationship begins only after the parties sign a written representation agreement."
    }
  ];

  return (
    <div id="dui-traffic-page" className="bg-[#FCFBF8] text-[#202735]">
      
      {/* HERO SECTION */}
      <section 
        id="dui-hero" 
        className="relative bg-black py-[100px] md:py-[140px] text-white overflow-hidden min-h-[480px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={internalHeroBg} 
            alt="Courtroom & Highway Backdrop" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-[#D4A74A] uppercase border-b-2 border-[#D4A74A]/30 pb-1 mb-4">
            DUI & TRAFFIC JUSTICE
          </span>
          
          <h1 className="font-serif text-[clamp(2.1rem,3.8vw,3.5rem)] font-light leading-[1.15] text-white uppercase max-w-[920px]">
            {isEn ? (
              <>
                Protecting Your License.
                <br />
                Defending Your Future.
              </>
            ) : (
              <>
                Protegiendo su Licencia.
                <br />
                Defendiendo su Futuro.
              </>
            )}
          </h1>
          
          <p className="mt-6 text-[16px] leading-relaxed text-white/90 max-w-[750px] font-sans font-light">
            McMillen Legal represents drivers facing DUI allegations, serious traffic charges, license problems, and traffic citations in Tulsa and throughout Northeast Oklahoma. We help clients understand their options and develop a focused strategy for protecting their driving privileges, record, and future.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onNavigateToConsultation}
              id="dui-hero-consult-btn"
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
      <section id="dui-main-content" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 1: Tulsa DUI and Traffic Attorney */}
              <div>
                <h2 className="font-serif text-[clamp(2rem,3.2vw,2.5rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Tulsa DUI and Traffic Attorney
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  A DUI arrest or serious traffic citation can create consequences beyond paying a fine. Depending on the circumstances, you may face criminal prosecution, restrictions on your driving privileges, increased insurance costs, employment concerns, court appearances, or conditions that affect your ability to travel.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  At McMillen Legal, we examine how the traffic stop began, why the officer believed a violation occurred, whether testing procedures were followed, and whether the available evidence supports the allegations.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  We represent drivers facing matters such as:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    "DUI and DWI charges",
                    "Actual physical control allegations",
                    "Alcohol-related driving offenses",
                    "Drug-related DUI allegations",
                    "Breath and blood alcohol testing",
                    "Chemical-test refusal allegations",
                    "Field sobriety test disputes",
                    "Reckless or careless driving",
                    "Speeding and serious traffic citations",
                    "Driving with a suspended or revoked license",
                    "Driving without a valid license",
                    "Failure to appear on a traffic matter",
                    "Leaving the scene allegations",
                    "CDL and professional-driver violations",
                    "Point-related license problems",
                    "Municipal and district court traffic cases"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4A74A] shrink-0 mt-2" />
                      <span className="text-[14.5px] font-sans font-medium text-[#132444] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15px] text-[#202735]/80 font-sans leading-[1.8] bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                  Oklahoma DUI law can apply when a person is accused of driving, operating, or being in actual physical control of a vehicle while impaired by alcohol, drugs, another intoxicating substance, or a combination of substances.
                </p>
              </div>

              {/* Part 2: McMillen Legal: Your Tulsa DUI and Traffic Defense Advocates */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  McMillen Legal: Your Tulsa DUI and Traffic Defense Advocates
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Every DUI or traffic case depends on its own evidence. McMillen Legal develops a defense strategy based on the reason for the stop, officer conduct, testing procedures, available video, witness accounts, and the client’s driving and criminal history.
                </p>

                <div className="font-serif font-bold text-[17px] text-[#132444] mb-4">
                  Our legal team may review:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {[
                    "Police reports and arrest affidavits",
                    "Body-camera and dash-camera recordings",
                    "Traffic-camera or surveillance footage",
                    "The stated reason for the traffic stop",
                    "Officer observations and written notes",
                    "Field sobriety test administration",
                    "Breath-testing records and procedures",
                    "Blood-test collection and laboratory reports",
                    "Search and seizure issues",
                    "Witness and passenger statements",
                    "Medical conditions that may affect testing",
                    "Prescription medication information",
                    "Road, lighting, and weather conditions",
                    "Driving records and prior citations",
                    "Commercial driver’s license implications",
                    "Notices concerning suspension or revocation"
                  ].map((checkItem, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0 mt-1" />
                      <span className="text-[14.5px] font-sans font-medium text-[#202735] leading-snug">{checkItem}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  We may investigate whether the officer had a lawful basis for the stop, whether probable cause supported an arrest, whether testing procedures were properly followed, and whether the prosecution can prove each required element.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans">
                  When appropriate, we communicate with prosecutors regarding dismissal, amended charges, reduced penalties, deferred resolutions, or other available outcomes. When a reasonable resolution cannot be reached, we prepare the matter for hearings, motions, or trial.
                </p>
              </div>

              {/* Part 3: Why Hiring a Tulsa DUI and Traffic Attorney Matters */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Why Hiring a Tulsa DUI and Traffic Attorney Matters
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] text-[#132444] font-semibold font-sans mb-5">
                  A Tulsa DUI and traffic attorney can help you:
                </p>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Understand the criminal and driving-related consequences you may face.",
                    "Review whether the officer had a valid reason to stop your vehicle.",
                    "Examine breath, blood, and field sobriety test evidence.",
                    "Identify inconsistencies in reports, recordings, and witness accounts.",
                    "Protect important video and testing records before they are lost.",
                    "Respond to court dates, notices, and filing deadlines.",
                    "Address bond requirements or release conditions after a DUI arrest.",
                    "Evaluate how a plea may affect your license and criminal record.",
                    "Challenge unsupported or improperly issued traffic allegations.",
                    "Seek reduced charges, penalties, or alternative outcomes when available.",
                    "Address point accumulation and license-reinstatement concerns.",
                    "Protect a commercial driver’s license or employment-related driving privileges.",
                    "Prepare a defense for negotiations, motions, hearings, or trial."
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <CheckCircle2 size={16} className="text-[#132444] shrink-0 mt-1" />
                      <span className="text-[15px] font-sans text-[#202735] font-medium leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#132444]/5 p-6 border border-[#132444]/15">
                    A DUI matter may involve both a criminal court case and a separate process affecting driving privileges. Service Oklahoma states that traffic and criminal offenses can affect a person’s license and that DUI-related reinstatement requirements may include participation in the Impaired Driver Accountability Program.
                  </p>

                  <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                    Obtaining legal guidance early gives your attorney more time to preserve evidence, review notices, evaluate testing procedures, and identify deadlines that may affect your options.
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

      {/* TYPES OF DUI AND TRAFFIC CASES WE HANDLE */}
      <section id="dui-types-cases" className="py-[100px] bg-[#FCFBF8] border-t border-b border-[#EFECE7]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">
              TYPES OF DUI AND TRAFFIC CASES WE HANDLE
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
                  Alcohol-Related DUI Charges
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Oklahoma DUI cases may be based on a chemical-test result or an officer’s allegation that alcohol affected a driver’s ability to operate a vehicle safely. We review the stop, arrest, testing process, and evidence of alleged impairment.
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
                  Drug-Related DUI Charges
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  A driver may face DUI allegations involving illegal substances, medical marijuana, prescription medication, or a combination of substances. Lawful use of a medication does not necessarily prevent a charge, but the prosecution must still establish the required elements of the alleged offense.
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
                  Actual Physical Control Cases
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  A person does not necessarily have to be driving when approached by police to face an alcohol-related vehicle charge. Actual physical control cases can depend on factors such as the person’s location, possession of the keys, vehicle condition, and surrounding circumstances.
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
                  Underage DUI & Alcohol Violations
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Oklahoma applies different alcohol rules to drivers under 21. These cases may affect driving privileges, educational opportunities, employment, and insurance costs. Early legal guidance can help the driver and family understand the process.
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
                  Reckless & Careless Driving
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Alleged excessive speed, unsafe passing, aggressive driving, racing, or other dangerous conduct may lead to more serious charges than an ordinary citation. We examine the officer’s observations and other evidence supporting the allegation.
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
                  Traffic Citations & License Matters
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Speeding, failure to yield, improper turns, driving under suspension, and other citations can create consequences beyond the initial fine. This is especially important for commercial drivers and people whose employment depends on maintaining a valid license.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TWO-COLUMN CONTENT SECTION 2: CONSIDERATIONS & INDIVIDUALIZED STRATEGY */}
      <section id="dui-considerations-strategy" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 4: Key Tulsa DUI and Traffic Considerations */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] block mb-2">
                  OKLAHOMA DUI & TRAFFIC PROCEDURE
                </span>
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Key Tulsa DUI and Traffic Considerations
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Understanding both the Oklahoma criminal process and the potential licensing consequences is essential. McMillen Legal helps Tulsa drivers evaluate the complete situation before deciding how to respond.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Oklahoma DUI and DWI Are Not Identical
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Oklahoma recognizes different alcohol-related driving offenses. A driver may face DUI allegations based on a blood or breath alcohol concentration of 0.08 or higher or other evidence of impairment. DWI may apply when the alcohol concentration is above 0.05 but below 0.08 and additional evidence indicates that alcohol affected safe vehicle operation.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      The applicable charge does not depend on the test result alone. Officer observations, driving behavior, testing procedures, and other evidence may also be important.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Drug DUI Does Not Require Alcohol
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Oklahoma DUI laws also address controlled substances and other intoxicating substances that allegedly make a person incapable of safely operating a vehicle. These cases may involve blood, urine, or saliva testing, officer observations, and drug-recognition evidence.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Having a valid prescription or authorization to use a substance does not automatically prevent a DUI allegation. The circumstances and reliability of the evidence must be examined carefully.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      The Traffic Stop Must Be Lawful
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      An officer generally needs a legally sufficient reason to stop a vehicle. That reason could involve an alleged traffic violation, equipment problem, or observed driving behavior.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Dash-camera footage, body-camera recordings, dispatch information, and the officer’s report may help determine whether the stop and subsequent investigation complied with constitutional requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Field Sobriety and Chemical Tests Can Be Challenged
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Field sobriety exercises may be affected by medical conditions, injuries, footwear, weather, lighting, road conditions, or unclear instructions. Breath and blood results may raise questions involving calibration, maintenance, collection, storage, timing, and laboratory procedures.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      A test result should be evaluated alongside the complete record rather than treated as unquestionable proof.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Criminal and License Matters May Be Separate
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      A DUI arrest may create a criminal court case and a separate process affecting driving privileges. An outcome in one proceeding does not necessarily resolve the other.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Current Oklahoma impaired-driving materials state that Service Oklahoma may issue an order of revocation or disqualification after reviewing an officer’s affidavit and test information. That order contains the applicable appeal instructions and deadline, making prompt review important.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      A Traffic Plea Can Have Additional Consequences
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Paying a citation generally resolves it as a guilty plea or conviction. Depending on the offense and driving history, this may affect license points, insurance premiums, employment, or commercial driving privileges.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Before paying a serious citation, it can be helpful to understand the full consequences and whether another resolution may be available.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Prior Offenses Can Increase the Risk
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      A prior DUI or traffic history may affect how a new allegation is charged and resolved. The court and prosecution may consider earlier convictions, deferred sentences, license actions, and other circumstances.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      McMillen Legal reviews the client’s history and the current charge before recommending a defense strategy.
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
                  Every DUI and traffic case requires an individual assessment. McMillen Legal examines what happened before, during, and after the traffic stop instead of relying solely on the officer’s written account.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  We work to:
                </div>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Explain the criminal charge and license implications",
                    "Review recordings, reports, and test evidence",
                    "Evaluate the legality of the stop and arrest",
                    "Identify weaknesses in the prosecution’s case",
                    "Address court appearances and driving concerns",
                    "Negotiate when doing so serves the client’s interests",
                    "Prepare the case for hearings or trial when necessary"
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
                    “Our goal is to help Tulsa drivers make informed decisions while protecting their rights, driving privileges, and future.”
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column with Confidential Consultation Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {renderFormSidebar("considerations")}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="dui-faq" className="bg-[#FCFBF8] py-[100px] text-[#202735] border-b border-[#EFECE7]">
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
        id="dui-contact-section" 
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
              Don't navigate DUI charges or driver's license suspension alone. Contact McMillen Legal today to schedule a confidential consultation regarding your case.
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
                  <option value="DUI / DWI Defense">DUI / DWI Defense</option>
                  <option value="Criminal Defense">Criminal Defense</option>
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
                  placeholder="Tell us about your DUI or traffic case..." 
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
