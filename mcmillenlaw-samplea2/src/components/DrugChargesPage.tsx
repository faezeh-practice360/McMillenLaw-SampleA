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
  Pill,
  Search,
  FlaskConical,
  Quote
} from "lucide-react";

// @ts-ignore
import internalHeroBg from "../assets/images/pa_drugs_1781207589657.jpg";
// @ts-ignore
import contactBg from "../assets/images/ChatGPT Image Jul 25, 2026, 02_20_34 AM.png";

interface DrugChargesPageProps {
  language: "en" | "es";
  onNavigateHome: (sectionId?: string) => void;
  onNavigateToConsultation: () => void;
  onNavigatePractice?: (practiceId: string) => void;
}

export function DrugChargesPage({ 
  language, 
  onNavigateHome, 
  onNavigateToConsultation,
  onNavigatePractice 
}: DrugChargesPageProps) {
  const isEn = language === "en";

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "Drug Charges",
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
      caseType: "Drug Charges",
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
            <option value="Drug Charges">Drug Charges</option>
            <option value="DUI / DWI Defense">DUI / DWI Defense</option>
            <option value="Criminal Defense">Criminal Defense</option>
            <option value="Traffic Tickets">Traffic Tickets</option>
            <option value="Expungements">Expungements</option>
            <option value="Protective Orders">Protective Orders</option>
          </select>
        </div>

        <div>
          <textarea 
            name={`caseDescription_${uniqueId}`}
            rows={3} 
            placeholder="Tell us about your drug charge case..." 
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
      active: true, 
      action: () => { const el = document.getElementById("drug-hero"); el?.scrollIntoView({ behavior: "smooth" }); } 
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
          If you or a loved one are facing drug allegations or search warrant investigations in Oklahoma, contact McMillen Legal today.
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
      q: "What drug-related criminal matters does McMillen Legal handle?",
      a: "McMillen Legal represents clients facing drug possession, prescription-drug allegations, possession with intent to distribute, distribution, trafficking, manufacturing, paraphernalia, and drug-related probation matters in Tulsa and throughout Northeast Oklahoma."
    },
    {
      q: "What should I do after being arrested for a drug charge?",
      a: "Do not explain the situation, answer investigative questions, or discuss ownership of the alleged substance without legal guidance. Remain calm, request an attorney, follow your bond conditions, and save all documents related to the arrest and court case."
    },
    {
      q: "Can police search my vehicle without a warrant?",
      a: "A warrant is not required in every vehicle search, but police must generally have a legally recognized reason for conducting the search. An attorney can review whether there was valid consent, probable cause, or another lawful basis for the search."
    },
    {
      q: "What does constructive possession mean?",
      a: "Constructive possession may be alleged when a controlled substance was not found directly on a person but the prosecution claims that the person knew about it and had control over it. This issue commonly arises when drugs are found in a shared vehicle, residence, or other jointly used location."
    },
    {
      q: "Can I be charged if the drugs belonged to someone else?",
      a: "Yes, an arrest or charge may still occur when several people had access to the location where drugs were discovered. However, the prosecution must establish the required connection between the accused person and the alleged substance. Shared access alone may not answer every question about knowledge or control."
    },
    {
      q: "Can a drug charge result from prescription medication?",
      a: "Yes. A person may face criminal allegations involving controlled medication when law enforcement claims that the prescription was invalid, belonged to another person, was obtained unlawfully, or was possessed with an unlawful purpose. Valid prescription and medical records may be important evidence."
    },
    {
      q: "What is possession with intent to distribute?",
      a: "Possession with intent to distribute involves an allegation that a person possessed a controlled substance for delivery or distribution rather than solely for personal use. Prosecutors may rely on quantity, packaging, communications, cash, scales, witness statements, or other surrounding evidence."
    },
    {
      q: "How is drug trafficking different from simple possession?",
      a: "Drug trafficking is a more serious accusation generally connected to particular controlled substances and statutory quantity thresholds. A trafficking case may be based heavily on the alleged type and weight of the substance, making accurate testing and measurement important parts of the defense."
    },
    {
      q: "Can laboratory evidence in a drug case be challenged?",
      a: "Yes. The defense may examine how the substance was collected, stored, transported, tested, and documented. Questions involving contamination, measurement, chain of custody, testing methods, or incomplete records may affect the reliability of the evidence."
    },
    {
      q: "Can illegally obtained drugs be excluded from the case?",
      a: "Evidence obtained through an unconstitutional stop, detention, search, or seizure may be challenged through a motion to suppress. Whether suppression is available depends on the facts of the police encounter and the legal justification offered for the search."
    },
    {
      q: "Are diversion or treatment programs available for Oklahoma drug charges?",
      a: "Some defendants may qualify for diversion, treatment, deferred sentencing, or another alternative resolution. Eligibility depends on the charge, criminal history, court, prosecutor, substance involved, and circumstances of the case."
    },
    {
      q: "Will a drug charge affect my immigration status?",
      a: "A drug-related charge, plea, or conviction may have serious immigration consequences for a noncitizen. Immigration concerns should be considered before accepting a plea agreement or choosing another case resolution."
    },
    {
      q: "Can a drug charge be expunged in Oklahoma?",
      a: "Certain dismissed cases, deferred sentences, arrests, and qualifying convictions may eventually be eligible for expungement. Eligibility depends on the outcome of the case, criminal history, applicable waiting period, and other legal requirements."
    },
    {
      q: "How much does a Tulsa drug crime attorney cost?",
      a: "Legal fees depend on the seriousness of the charge, volume of evidence, number of court appearances, need for expert review, and whether the case requires motions or trial preparation. McMillen Legal can explain the fee arrangement during a confidential consultation."
    },
    {
      q: "Do you offer confidential consultations?",
      a: "Yes. During a confidential consultation, you can discuss the arrest, search, alleged substance, court documents, and possible next steps. An attorney-client relationship begins only after a written representation agreement is signed."
    }
  ];

  return (
    <div id="drug-charges-page" className="bg-[#FCFBF8] text-[#202735]">
      
      {/* HERO SECTION */}
      <section 
        id="drug-hero" 
        className="relative bg-black py-[100px] md:py-[140px] text-white overflow-hidden min-h-[480px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={internalHeroBg} 
            alt="Legal & Defense Backdrop" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-[#D4A74A] uppercase border-b-2 border-[#D4A74A]/30 pb-1 mb-4">
            DRUG-RELATED CRIMINAL MATTERS
          </span>
          
          <h1 className="font-serif text-[clamp(2.1rem,3.8vw,3.5rem)] font-light leading-[1.15] text-white uppercase max-w-[920px]">
            {isEn ? (
              <>
                Challenging the Evidence.
                <br />
                Protecting Your Future.
              </>
            ) : (
              <>
                Desafiando las Pruebas.
                <br />
                Protegiendo su Futuro.
              </>
            )}
          </h1>
          
          <p className="mt-6 text-[16px] leading-relaxed text-white/90 max-w-[750px] font-sans font-light">
            McMillen Legal represents people accused of drug possession, distribution, trafficking, and other controlled-substance offenses in Tulsa and throughout Northeast Oklahoma. We investigate how the evidence was obtained and build a focused defense around the facts of each case.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onNavigateToConsultation}
              id="drug-hero-consult-btn"
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
      <section id="drug-main-content" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 1: Tulsa Drug Crime Attorney */}
              <div>
                <h2 className="font-serif text-[clamp(2rem,3.2vw,2.5rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Tulsa Drug Crime Attorney
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  A drug-related arrest can threaten your freedom, employment, education, professional license, immigration status, and reputation. Even when the allegation begins with a traffic stop or a small amount of a controlled substance, the resulting criminal case can have serious and lasting consequences.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  At McMillen Legal, we examine every stage of the investigation—from the initial police contact and search to the laboratory testing and filing of criminal charges. Our attorneys identify weaknesses in the prosecution’s evidence, challenge constitutional violations, and help clients understand the options available to them.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  We represent people facing matters such as:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    "Possession of a controlled dangerous substance",
                    "Possession of marijuana or other controlled substances",
                    "Prescription-drug possession allegations",
                    "Possession with intent to distribute",
                    "Drug distribution or delivery charges",
                    "Drug trafficking allegations",
                    "Drug manufacturing charges",
                    "Possession of drug paraphernalia",
                    "Methamphetamine-related offenses",
                    "Cocaine, heroin, fentanyl, and opioid charges",
                    "Allegations involving pills or controlled medications",
                    "Drugs allegedly found inside a vehicle",
                    "Drugs allegedly found inside a home or shared property",
                    "Drug-related probation violations",
                    "Search-warrant investigations",
                    "State and federal drug investigations"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4A74A] shrink-0 mt-2" />
                      <span className="text-[14.5px] font-sans font-medium text-[#132444] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15px] text-[#202735]/80 font-sans leading-[1.8] bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A] mb-4">
                  The seriousness of a drug case may depend on the substance involved, the alleged quantity, how the evidence was found, whether distribution is alleged, and the person’s prior record.
                </p>

                <p className="text-[15px] text-[#202735]/80 font-sans leading-[1.8] bg-[#132444]/5 p-5 border border-[#132444]/15">
                  We also consider how a proposed plea or conviction could affect a noncitizen’s immigration status. Drug-related criminal matters can create complex immigration concerns, so potential resolutions should be evaluated carefully before a decision is made.
                </p>
              </div>

              {/* Part 2: McMillen Legal: Your Tulsa Drug Crime Defense Advocates */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  McMillen Legal: Your Tulsa Drug Crime Defense Advocates
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  Possession does not always mean ownership. Drugs may be discovered in a shared vehicle, residence, hotel room, bag, or other location used by more than one person. In these situations, the prosecution may attempt to argue that a person knew about and controlled the substance even when it was not found directly on them.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  McMillen Legal develops a defense strategy based on the location of the evidence, the legality of the police conduct, the reliability of laboratory results, and whether the prosecution can connect the accused person to the substance.
                </p>

                <div className="font-serif font-bold text-[17px] text-[#132444] mb-4">
                  Our legal team may review:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {[
                    "Police reports and arrest affidavits",
                    "Search warrants and supporting affidavits",
                    "Body-camera and dash-camera recordings",
                    "Traffic-stop recordings",
                    "Surveillance footage and photographs",
                    "Statements made during police questioning",
                    "The reason for the initial stop or detention",
                    "Consent-to-search allegations",
                    "Vehicle and property ownership records",
                    "Witness and passenger statements",
                    "Fingerprint or DNA evidence",
                    "Drug-testing and laboratory reports",
                    "Evidence-handling and chain-of-custody records",
                    "Packaging, scales, cash, or other alleged distribution evidence",
                    "Phone records, text messages, and digital communications",
                    "Prescription and medical documentation",
                    "Confidential-informant evidence",
                    "Prior criminal records and probation conditions"
                  ].map((checkItem, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0 mt-1" />
                      <span className="text-[14.5px] font-sans font-medium text-[#202735] leading-snug">{checkItem}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  We examine whether officers had a lawful reason to stop, detain, search, or arrest the client. We may also evaluate whether a warrant was valid, whether police exceeded the scope of consent, and whether statements were obtained in violation of the client’s rights.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  Depending on the circumstances, available strategies may include challenging the search, disputing possession or knowledge, questioning the identification or weight of the substance, contesting an allegation of intent to distribute, seeking suppression of evidence, or pursuing an alternative resolution.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans">
                  When appropriate, we negotiate with prosecutors regarding dismissals, reduced charges, deferred outcomes, treatment-based alternatives, or sentencing options. If a fair resolution cannot be reached, we prepare the case for motions, hearings, or trial.
                </p>
              </div>

              {/* Part 3: Why Hiring a Tulsa Drug Crime Attorney Matters */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Why Hiring a Tulsa Drug Crime Attorney Matters
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] text-[#132444] font-semibold font-sans mb-5">
                  A Tulsa drug crime attorney can help you:
                </p>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Understand the exact charge and possible consequences.",
                    "Avoid statements that may damage your defense.",
                    "Determine whether the stop, search, or arrest was lawful.",
                    "Challenge evidence obtained through an unlawful search.",
                    "Examine whether a search warrant was properly supported.",
                    "Dispute claims that you knowingly possessed the substance.",
                    "Question laboratory testing and evidence-handling procedures.",
                    "Challenge allegations of intent to distribute or traffic drugs.",
                    "Preserve body-camera, dash-camera, and surveillance footage.",
                    "Review confidential-informant or controlled-buy evidence.",
                    "Explore diversion, treatment, or deferred-resolution options.",
                    "Address probation, bond, or release conditions.",
                    "Evaluate employment, licensing, and immigration consequences.",
                    "Prepare for negotiations, pretrial motions, hearings, or trial."
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <CheckCircle2 size={16} className="text-[#132444] shrink-0 mt-1" />
                      <span className="text-[15px] font-sans text-[#202735] font-medium leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                  Early legal representation gives your attorney more time to secure recordings, examine the location where the evidence was found, review police procedures, interview witnesses, and identify constitutional issues before important evidence is lost.
                </p>
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

      {/* TYPES OF DRUG CASES WE HANDLE */}
      <section id="drug-types-cases" className="py-[100px] bg-[#FCFBF8] border-t border-b border-[#EFECE7]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">
              TYPES OF DRUG CASES WE HANDLE
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
                  <Pill size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Drug Possession Charges
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Possession cases may involve allegations concerning marijuana, methamphetamine, cocaine, fentanyl, prescription medication, or another controlled substance. The prosecution must connect the accused to the substance, which may be disputed when drugs are found in a shared vehicle, home, or other location.
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
                  Possession With Intent to Distribute
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Prosecutors may rely on the quantity involved, packaging, cash, messages, scales, or other circumstantial evidence to allege an intent to distribute. We examine whether that evidence actually supports the prosecution’s interpretation.
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
                  Drug Distribution Charges
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Distribution allegations may arise from an alleged sale, transfer, delivery, or law-enforcement operation. These cases can involve informants, undercover officers, controlled purchases, surveillance, recordings, and digital communications.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <Gavel size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Drug Trafficking Allegations
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Oklahoma trafficking charges can be based on the type and alleged quantity of a controlled substance. A trafficking accusation does not necessarily require evidence of crossing state lines or completing a sale. The substance’s identity, weight, testing, and chain of custody may therefore be critical.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <FileText size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Prescription Drug Offenses
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Charges may involve possessing medication without a valid prescription, prescription fraud, unauthorized distribution, or possessing another person’s medication. We review the prescription history, ownership, intent, and circumstances surrounding the alleged offense.
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
                  Drug Paraphernalia & Marijuana
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Oklahoma’s medical-marijuana laws do not make every form of marijuana possession, transfer, transportation, or cultivation lawful. Cases may also involve allegations concerning paraphernalia or violations of licensing and possession requirements.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TWO-COLUMN CONTENT SECTION 2: CONSIDERATIONS & INDIVIDUALIZED STRATEGY */}
      <section id="drug-considerations-strategy" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 4: Key Tulsa Drug-Charge Considerations */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] block mb-2">
                  OKLAHOMA DRUG CHARGE PROCEDURE
                </span>
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Key Tulsa Drug-Charge Considerations
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Oklahoma drug cases can vary significantly based on the substance, quantity, alleged conduct, location, criminal history, and manner in which evidence was obtained. McMillen Legal evaluates each of these factors before recommending a defense strategy.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Possession Must Be Connected to the Accused
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Finding a controlled substance near someone does not automatically establish that the person knowingly possessed it. Drug cases may involve actual possession or allegations that the person exercised control over the substance or location.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      When drugs are discovered in a shared vehicle, residence, hotel room, or other common space, ownership and control may be disputed. Statements, fingerprints, personal belongings, location, and access can become important evidence.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      The Alleged Quantity Can Affect the Charge
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      The identity and quantity of a substance can influence whether prosecutors allege simple possession, possession with intent, distribution, or trafficking.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Oklahoma’s trafficking statute addresses specified controlled substances and quantity thresholds. Because the weight can change the nature of the allegation, laboratory procedures, packaging, mixture weight, and evidence handling should be carefully reviewed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Intent May Be Based on Circumstantial Evidence
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      In possession-with-intent cases, prosecutors may point to packaging materials, scales, cash, multiple phones, messages, or the alleged quantity as evidence of distribution.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      The presence of these items does not always establish criminal intent. Their ownership, location, lawful purpose, and connection to the accused must be evaluated within the complete context.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Searches and Seizures Must Be Lawful
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Drug evidence may be discovered during a traffic stop, vehicle search, home search, probation search, or execution of a warrant. Officers must act within constitutional and statutory limits.
                    </p>
                    <div className="space-y-1.5 my-3 pl-2">
                      {[
                        "The reason for the initial stop or detention",
                        "Whether consent was requested and voluntarily given",
                        "The factual basis for a search warrant",
                        "Whether officers exceeded the permitted scope",
                        "How long the person was detained",
                        "Whether an exception to the warrant requirement applied"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-[14px] text-[#132444] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A74A]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      If evidence was obtained through an unlawful search, the defense may have grounds to request that it be excluded.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Laboratory Testing and Evidence Handling Matter
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      A field test is not necessarily the final proof of a substance’s identity. Laboratory analysis may be used to identify the substance and determine its weight.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      McMillen Legal may review how the evidence was collected, sealed, transported, stored, tested, and documented. Missing records, contamination risks, measurement questions, or an incomplete chain of custody may affect the reliability of the evidence.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Medical Marijuana Has Legal Limits
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      A valid Oklahoma medical-marijuana license may authorize certain conduct, but it does not permit every type of possession, transfer, distribution, or cultivation. A license also does not automatically resolve disputes over quantity, ownership, transportation, or compliance.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      The defense should review the person’s license status and the precise conduct alleged rather than assuming that every marijuana-related charge is valid—or automatically protected.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Drug Charges Can Create Lasting Consequences
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      A conviction may affect employment, education, housing, professional licenses, firearm rights, immigration status, and future background checks. The consequences may extend far beyond jail, probation, or a fine.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      These risks should be considered before accepting a plea or making statements about the allegations.
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
                  Drug prosecutions can rely heavily on assumptions about possession, ownership, and intent. McMillen Legal examines whether the evidence supports those assumptions and whether law enforcement followed the law.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  We work to:
                </div>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Explain the charge and potential consequences",
                    "Investigate how the evidence was discovered",
                    "Examine the legality and scope of the search",
                    "Review laboratory reports and evidence records",
                    "Challenge disputed possession or intent",
                    "Evaluate available motions and defenses",
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
                    “Our goal is to protect the rights and future of clients facing drug allegations in Tulsa and throughout Oklahoma.”
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column with Confidential Consultation Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {renderFormSidebar("drug_considerations")}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="drug-faq" className="bg-[#FCFBF8] py-[100px] text-[#202735] border-b border-[#EFECE7]">
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
        id="drug-contact-section" 
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
              Don't face drug allegations alone. Contact McMillen Legal today to schedule a confidential consultation regarding your case.
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
                  <option value="Drug Charges">Drug Charges</option>
                  <option value="DUI / DWI Defense">DUI / DWI Defense</option>
                  <option value="Criminal Defense">Criminal Defense</option>
                  <option value="Traffic Tickets">Traffic Tickets</option>
                  <option value="Expungements">Expungements</option>
                  <option value="Protective Orders">Protective Orders</option>
                </select>
              </div>

              <div>
                <textarea 
                  name="caseDescription_bottom"
                  rows={4} 
                  placeholder="Tell us about your drug case..." 
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
                <h4 className="font-serif text-xl font-bold text-[#132444]">Request Received</h4>
                <p className="text-sm text-[#202735]/80 mt-2 leading-relaxed">
                  Thank you for reaching out to McMillen Legal. An attorney will review your information and respond shortly.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-xs font-bold text-[#D4A74A] uppercase hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
