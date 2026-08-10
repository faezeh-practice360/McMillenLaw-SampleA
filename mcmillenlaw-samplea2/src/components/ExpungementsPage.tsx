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
  Sparkles,
  FileCheck,
  Quote
} from "lucide-react";

// @ts-ignore
import internalHeroBg from "../assets/images/pa_expungement_1781207618354.jpg";
// @ts-ignore
import contactBg from "../assets/images/ChatGPT Image Jul 25, 2026, 02_20_34 AM.png";

interface ExpungementsPageProps {
  language: "en" | "es";
  onNavigateHome: (sectionId?: string) => void;
  onNavigateToConsultation: () => void;
  onNavigatePractice?: (practiceId: string) => void;
}

export function ExpungementsPage({ 
  language, 
  onNavigateHome, 
  onNavigateToConsultation,
  onNavigatePractice 
}: ExpungementsPageProps) {
  const isEn = language === "en";

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "Expungements",
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
      caseType: "Expungements",
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
            <option value="Expungements">Expungements</option>
            <option value="Criminal Defense">Criminal Defense</option>
            <option value="DUI / DWI Defense">DUI / DWI Defense</option>
            <option value="Drug Charges">Drug Charges</option>
            <option value="Traffic Tickets">Traffic Tickets</option>
            <option value="Protective Orders">Protective Orders</option>
          </select>
        </div>

        <div>
          <textarea 
            name={`caseDescription_${uniqueId}`}
            rows={3} 
            placeholder="Tell us about your prior arrest or court record..." 
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
      active: false, 
      action: () => onNavigatePractice ? onNavigatePractice("traffic") : onNavigateHome("practice") 
    },
    { 
      title: "Expungements & Record Sealing", 
      active: true, 
      action: () => { const el = document.getElementById("expunge-hero"); el?.scrollIntoView({ behavior: "smooth" }); } 
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
          If you have a prior arrest, dismissed charge, or completed sentence in Oklahoma, contact McMillen Legal today to evaluate your eligibility.
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
      q: "What does an expungement do in Oklahoma?",
      a: "An expungement seals eligible court or arrest records from public access. This can prevent the record from appearing in many ordinary public searches and background checks. The exact effect depends on the type of expungement granted."
    },
    {
      q: "Does a dismissed criminal charge automatically disappear?",
      a: "No. A dismissed case may still appear in court records, arrest records, and background reports unless the appropriate expungement process is completed."
    },
    {
      q: "What is the difference between a Section 18 and Section 991(c) expungement?",
      a: "A Section 18 expungement may seal an eligible arrest record and related criminal history. A Section 991(c) expungement applies to a successfully completed deferred sentence and changes the public court disposition, but it does not automatically remove the underlying arrest record."
    },
    {
      q: "What types of records may qualify for expungement?",
      a: "Eligibility may include arrests without filed charges, acquittals, dismissed charges, completed deferred sentences, certain misdemeanor convictions, and some nonviolent felony convictions. Qualification depends on the complete criminal history and current Oklahoma law."
    },
    {
      q: "Can a felony be expunged in Oklahoma?",
      a: "Some nonviolent felony records may qualify when the applicable legal requirements and waiting periods are satisfied. Violent offenses, registration-related offenses, pending cases, and additional convictions may affect eligibility."
    },
    {
      q: "Can a DUI or drug charge be expunged?",
      a: "Certain DUI, drug, and controlled-substance cases may qualify depending on the charge, final disposition, prior record, sentence, and time that has passed. The case must be reviewed individually."
    },
    {
      q: "Can I expunge more than one arrest?",
      a: "Potentially. Multiple arrests in the same Oklahoma county may sometimes be included in one petition. Records located in different counties generally require separate petitions in each county."
    },
    {
      q: "Can the state object to an expungement?",
      a: "Yes. A prosecutor, OSBI, arresting agency, or another interested agency may object even when the person appears to meet an eligibility category. The court ultimately decides whether the requested relief should be granted."
    },
    {
      q: "How long does an Oklahoma expungement take?",
      a: "The total timeline depends on gathering records, preparing the petition, providing required notice, scheduling the hearing, resolving objections, and processing the final order. After OSBI receives a certified order and required fee, processing the arrest record may take approximately one month."
    },
    {
      q: "Will an expungement update my FBI record?",
      a: "OSBI states that an approved Oklahoma criminal history expungement will also update the related FBI record. Processing should still be confirmed after the order is completed."
    },
    {
      q: "Are fingerprints destroyed after an expungement?",
      a: "No. OSBI may continue maintaining fingerprints and other identifying information. However, that identifying information will not remain attached to the sealed arrest information in the same way."
    },
    {
      q: "Do I need an attorney to file for expungement?",
      a: "Individuals may represent themselves, but expungement petitions involve eligibility, paperwork, notice, and procedural requirements. An attorney can help identify the correct form of relief and avoid mistakes that may delay or weaken the petition."
    },
    {
      q: "Is Oklahoma automatically clearing criminal records?",
      a: "Oklahoma is implementing a Clean Slate process for certain eligible records. Because implementation is ongoing, individuals should verify whether their record has actually been sealed rather than assuming automatic relief has already occurred."
    },
    {
      q: "How much does an expungement cost?",
      a: "Costs may include court filing expenses, an OSBI arrest-record processing fee, local agency fees, record-request expenses, and attorney fees. The total depends on the number of cases, counties, agencies, and whether the petition is contested."
    },
    {
      q: "Do you offer confidential consultations?",
      a: "Yes. A consultation allows McMillen Legal to review the arrest, case outcome, criminal history, and possible expungement options. An attorney-client relationship begins only after a written representation agreement is signed."
    }
  ];

  return (
    <div id="expungements-page" className="bg-[#FCFBF8] text-[#202735]">
      
      {/* HERO SECTION */}
      <section 
        id="expunge-hero" 
        className="relative bg-black py-[100px] md:py-[140px] text-white overflow-hidden min-h-[480px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={internalHeroBg} 
            alt="Record Sealing Legal Backdrop" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-[#D4A74A] uppercase border-b-2 border-[#D4A74A]/30 pb-1 mb-4">
            EXPUNGEMENTS
          </span>
          
          <h1 className="font-serif text-[clamp(2.1rem,3.8vw,3.5rem)] font-light leading-[1.15] text-white uppercase max-w-[920px]">
            {isEn ? (
              <>
                Clear Your Record.
                <br />
                Move Forward With Confidence.
              </>
            ) : (
              <>
                Limpie su Historial.
                <br />
                Avance con Confianza.
              </>
            )}
          </h1>
          
          <p className="mt-6 text-[16px] leading-relaxed text-white/90 max-w-[750px] font-sans font-light">
            McMillen Legal helps eligible individuals pursue criminal record expungements in Tulsa and throughout Northeast Oklahoma. We review your complete history, determine which record-sealing option may apply, and guide you through the required court and agency procedures.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onNavigateToConsultation}
              id="expunge-hero-consult-btn"
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
      <section id="expunge-main-content" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 1: Tulsa Expungement Attorney */}
              <div>
                <h2 className="font-serif text-[clamp(2rem,3.2vw,2.5rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Tulsa Expungement Attorney
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  An arrest, dismissed charge, deferred sentence, misdemeanor, or older felony can continue appearing on public court searches and background checks long after the case has ended.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  A visible criminal record may create difficulties involving employment, housing, education, professional licensing, financial opportunities, and personal reputation. Completing the sentence or having the charges dismissed does not always remove the arrest and court records from public access.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  At McMillen Legal, we review the outcome of each case, the type of offense, applicable waiting periods, prior criminal history, and any pending charges to determine whether Oklahoma expungement relief may be available.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  We assist clients with matters such as:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    "Section 18 expungements",
                    "Section 991(c) expungements",
                    "Arrests that did not result in charges",
                    "Dismissed criminal charges",
                    "Successfully completed deferred sentences",
                    "Qualifying misdemeanor convictions",
                    "Qualifying nonviolent felony convictions",
                    "DUI and traffic-related record reviews",
                    "Drug-related record reviews",
                    "Multiple arrests or court cases",
                    "OSBI criminal history records",
                    "Court record sealing",
                    "Contested expungement petitions",
                    "Clean Slate eligibility reviews"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4A74A] shrink-0 mt-2" />
                      <span className="text-[14.5px] font-sans font-medium text-[#132444] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15px] text-[#202735]/80 font-sans leading-[1.8] bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                  An Oklahoma expungement generally seals eligible records from public access. It does not necessarily mean that every physical document or identifying record is destroyed.
                </p>
              </div>

              {/* Part 2: McMillen Legal: Your Tulsa Expungement Advocates */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  McMillen Legal: Your Tulsa Expungement Advocates
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  Expungement eligibility depends on more than the name of the original charge. The result of the case, sentence imposed, completion date, criminal history, pending charges, restitution, and classification of the offense may all affect whether a petition can be filed.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  McMillen Legal begins by reviewing the complete record rather than relying only on what appears in an online court search.
                </p>

                <div className="font-serif font-bold text-[17px] text-[#132444] mb-4">
                  Our legal team may review:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {[
                    "OSBI criminal history reports",
                    "Oklahoma court docket records",
                    "Arrest and booking information",
                    "Charging documents and amended charges",
                    "Dismissal orders and case dispositions",
                    "Deferred sentence documents",
                    "Judgment and sentencing records",
                    "Proof of sentence completion",
                    "Probation or supervision records",
                    "Payment of fines, costs, and restitution",
                    "Applicable statutory waiting periods",
                    "Pending misdemeanor or felony charges",
                    "Prior convictions in Oklahoma or other states",
                    "Whether an offense is classified as violent or nonviolent",
                    "Records held by courts and law enforcement agencies",
                    "Potential objections from prosecutors, OSBI, or arresting agencies"
                  ].map((checkItem, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0 mt-1" />
                      <span className="text-[14.5px] font-sans font-medium text-[#202735] leading-snug">{checkItem}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  After determining eligibility, we can prepare the petition, identify the agencies that must receive notice, organize the supporting records, and represent the client during the court process.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans">
                  If an agency objects, we can address the stated concerns and present information showing why sealing the record is appropriate under the circumstances.
                </p>
              </div>

              {/* Part 3: Section 18 and Section 991(c) Expungements */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Section 18 and Section 991(c) Expungements
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  A Section 18 expungement is generally used to seal an eligible arrest record and related criminal history information. Eligibility is determined under Oklahoma law and may include certain acquittals, dismissed charges, deferred cases, misdemeanors, and nonviolent felonies.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  A Section 991(c) expungement applies to certain successfully completed deferred sentences. It can remove the guilty or no-contest plea from the public court record and update the disposition to show that the person pleaded not guilty and the case was dismissed.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                  However, a Section 991(c) expungement does not, by itself, seal the underlying arrest record held by OSBI. Some people may need a separate Section 18 expungement to address the arrest history.
                </p>
              </div>

              {/* Part 4: Why Hiring a Tulsa Expungement Attorney Matters */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Why Hiring a Tulsa Expungement Attorney Matters
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] text-[#132444] font-semibold font-sans mb-5">
                  A Tulsa expungement attorney can help you:
                </p>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Obtain and review your complete criminal history.",
                    "Determine whether you currently qualify for expungement.",
                    "Identify the correct statutory eligibility category.",
                    "Distinguish between Section 18 and Section 991(c) relief.",
                    "Confirm whether a required waiting period has passed.",
                    "Identify records held by courts, OSBI, and law enforcement agencies.",
                    "Prepare the petition and supporting documents correctly.",
                    "Provide notice to the required agencies.",
                    "Address records involving multiple arrests or cases.",
                    "Respond when a prosecutor or agency objects.",
                    "Seek sealing of both court and arrest records when available.",
                    "Verify whether the expungement order has been processed.",
                    "Avoid relying on incomplete or outdated online information."
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <CheckCircle2 size={16} className="text-[#132444] shrink-0 mt-1" />
                      <span className="text-[15px] font-sans text-[#202735] font-medium leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#132444]/5 p-6 border border-[#132444]/15">
                    Oklahoma is developing a Clean Slate system for some eligible records. However, individuals should not assume that an old or qualifying case has already been sealed automatically. A record review can determine what remains publicly visible and whether a petition should be filed.
                  </p>

                  <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                    McMillen Legal provides expungement assistance from its Tulsa office at 2930 S. Yale Ave, Suite C, Tulsa, OK 74114.
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

      {/* TYPES OF EXPUNGEMENTS WE HANDLE */}
      <section id="expunge-types-cases" className="py-[100px] bg-[#FCFBF8] border-t border-b border-[#EFECE7]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">
              TYPES OF EXPUNGEMENTS WE HANDLE
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
                  <FileCheck size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Arrests Without Charges
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  An arrest can remain visible even when prosecutors never filed a criminal case. Depending on the circumstances and statutory eligibility, the arrest record may qualify to be sealed.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <Sparkles size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Dismissed Charges & Acquittals
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  People whose charges were dismissed or who were found not guilty may be eligible to seek an expungement. The correct process depends on the case disposition and other eligibility requirements.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <FileText size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Deferred-Sentence Expungements
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  After a person successfully completes a qualifying deferred sentence, the court may dismiss the charge and remove the plea from the public court record under Section 991(c). This relief does not necessarily seal the complete arrest record.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <Scale size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Misdemeanor Record Expungements
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Certain misdemeanor convictions and completed deferred sentences may qualify for broader record sealing. Eligibility can depend on the offense, sentence completion, waiting period, and subsequent criminal history.
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
                  Nonviolent Felony Expungements
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Some nonviolent felony records may be eligible for expungement when the statutory requirements are satisfied. The number of convictions, type of offense, sentence completion, and required waiting period must be reviewed carefully.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Multiple Arrests or Records
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  A person may have records from several cases or arrests. Multiple matters in the same county may sometimes be included in one petition, while records located in different counties generally require separate filings.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TWO-COLUMN CONTENT SECTION 2: CONSIDERATIONS & INDIVIDUALIZED STRATEGY */}
      <section id="expunge-considerations-strategy" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 5: Key Tulsa Expungement Considerations */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] block mb-2">
                  OKLAHOMA EXPUNGEMENT PROCEDURE
                </span>
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Key Tulsa Expungement Considerations
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Oklahoma uses more than one record-clearing process. Understanding the difference between them is important because a limited court-record update may not provide the same relief as a full arrest-record expungement.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Section 18 and Section 991(c) Are Different
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      A Section 18 expungement can seal qualifying arrest and criminal-history records. A Section 991(c) expungement applies to certain successfully completed deferred sentences and removes the plea from the public court record, but it does not by itself erase the complete arrest record.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      The Oklahoma State Bureau of Investigation specifically distinguishes between these two forms of relief. Some people may qualify to pursue both processes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Eligibility Depends on the Complete Record
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Eligibility cannot be determined from the charge name alone. The analysis may include:
                    </p>
                    <div className="space-y-1.5 my-3 pl-2">
                      {[
                        "Whether charges were filed",
                        "How the case was resolved",
                        "Whether the sentence was deferred",
                        "Whether all sentence requirements were completed",
                        "The type and number of convictions",
                        "Whether the offense was violent or nonviolent",
                        "How much time has passed",
                        "Whether later charges or convictions exist",
                        "Whether outstanding fines, fees, or warrants remain"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-[14px] text-[#132444] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A74A]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      McMillen Legal reviews court records and criminal-history information before filing to reduce the risk of relying on incomplete information.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Expungement Usually Requires a Court Process
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      For a traditional Section 18 expungement, the petitioner generally files in the district court where the arrest information is located. Required agencies must receive notice and may have an opportunity to object.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      The court evaluates statutory eligibility and whether the record should be sealed. Qualifying for consideration does not always guarantee that the request will be granted.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Records in Different Counties May Require Separate Petitions
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      The OSBI states that multiple arrests within the same county may be included in one petition, but separate petitions generally must be filed for records located in different counties.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      A complete statewide criminal-history review can help identify every case that needs to be addressed rather than sealing one record while another remains publicly visible.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Expungement Seals Records Rather Than Destroying Everything
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      An expungement generally restricts public access to qualifying records. It does not necessarily destroy every physical or identifying record, and certain information may remain available for legally authorized purposes.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      OSBI explains that fingerprints and identifying information may still be maintained, but should no longer reference or remain attached to the sealed arrest information.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Clean Slate Is Developing in Oklahoma
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Oklahoma has authorized a state-initiated Clean Slate process for certain eligible records. As of July 2026, OSBI reported that implementation was proceeding in phases and that there was not yet a clear statewide completion deadline.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Because automatic sealing should not be assumed, individuals should verify the status of their records and determine whether a petition-based expungement remains appropriate.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      An Expungement Has Important but Limited Effects
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Sealing a criminal record may improve privacy and reduce its visibility in routine public background searches. However, it does not automatically remove every reference from private databases, news reports, licensing records, or unrelated administrative proceedings.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      The final order should be sent to the agencies and record holders identified in the case, and the record should later be checked to confirm that the order was processed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Part 6: Individualized Strategy / How McMillen Legal Helps */}
              <div className="border-t border-black/10 pt-10">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] block mb-2">
                  INDIVIDUALIZED STRATEGY
                </span>
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  How McMillen Legal Helps
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  A successful expungement requires more than completing a generic form. Incorrect case information, missing agencies, unresolved obligations, or filing under the wrong statute can delay the process.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  McMillen Legal works to:
                </div>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Obtain and analyze the relevant records",
                    "Determine the appropriate statutory procedure",
                    "Identify every case that may need attention",
                    "Prepare the petition and proposed order",
                    "Notify prosecutors, law enforcement, OSBI, and other agencies",
                    "Respond to objections when necessary",
                    "Represent the client at the expungement hearing",
                    "Help ensure the final order reaches the correct record holders"
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
                    “Our goal is to make the Tulsa expungement process clear, accurate, and efficient.”
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column with Confidential Consultation Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {renderFormSidebar("expunge_considerations")}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="expunge-faq" className="bg-[#FCFBF8] py-[100px] text-[#202735] border-b border-[#EFECE7]">
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
        id="expunge-contact-section" 
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
              Clear your criminal record and open doors to new employment, housing, and financial opportunities. Contact McMillen Legal today to schedule a confidential consultation.
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
                  <option value="Expungements">Expungements</option>
                  <option value="Criminal Defense">Criminal Defense</option>
                  <option value="DUI / DWI Defense">DUI / DWI Defense</option>
                  <option value="Drug Charges">Drug Charges</option>
                  <option value="Traffic Tickets">Traffic Tickets</option>
                  <option value="Protective Orders">Protective Orders</option>
                </select>
              </div>

              <div>
                <textarea 
                  name="caseDescription_bottom"
                  rows={4} 
                  placeholder="Tell us about your prior arrest, charge, or court record..." 
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
                  Thank you for reaching out to McMillen Legal. A member of our legal team will review your record details and contact you shortly.
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
