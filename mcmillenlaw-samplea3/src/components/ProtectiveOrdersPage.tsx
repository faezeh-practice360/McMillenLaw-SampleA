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
  ShieldCheck,
  UserX,
  Quote
} from "lucide-react";

// @ts-ignore
import internalHeroBg from "../assets/images/pa_protective_1781207633235.jpg";
// @ts-ignore
import contactBg from "../assets/images/ChatGPT Image Jul 25, 2026, 02_20_34 AM.png";

interface ProtectiveOrdersPageProps {
  language: "en" | "es";
  onNavigateHome: (sectionId?: string) => void;
  onNavigateToConsultation: () => void;
  onNavigatePractice?: (practiceId: string) => void;
}

export function ProtectiveOrdersPage({ 
  language, 
  onNavigateHome, 
  onNavigateToConsultation,
  onNavigatePractice 
}: ProtectiveOrdersPageProps) {
  const isEn = language === "en";

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "Protective Orders",
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
      caseType: "Protective Orders",
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
            <option value="Protective Orders">Protective Orders</option>
            <option value="Criminal Defense">Criminal Defense</option>
            <option value="DUI / DWI Defense">DUI / DWI Defense</option>
            <option value="Drug Charges">Drug Charges</option>
            <option value="Traffic Tickets">Traffic Tickets</option>
            <option value="Expungements">Expungements</option>
          </select>
        </div>

        <div>
          <textarea 
            name={`caseDescription_${uniqueId}`}
            rows={3} 
            placeholder="Tell us about your protective order case..." 
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
      active: false, 
      action: () => onNavigatePractice ? onNavigatePractice("expungement") : onNavigateHome("practice") 
    },
    { 
      title: "Protective Order Violations", 
      active: true, 
      action: () => { const el = document.getElementById("po-hero"); el?.scrollIntoView({ behavior: "smooth" }); } 
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
          If you are seeking or defending against a protective order in Oklahoma, contact McMillen Legal today.
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
      q: "What is a victim protective order in Oklahoma?",
      a: "A victim protective order, commonly called a VPO or restraining order, is a civil court order intended to stop domestic abuse, stalking, harassment, threats, or certain other harmful conduct. It may restrict contact and require the respondent to stay away from designated people or locations."
    },
    {
      q: "Who can request a protective order?",
      a: "A person may seek a protective order based on domestic abuse involving a qualifying family, household, dating, or intimate relationship. Oklahoma law also allows protective-order petitions involving stalking, harassment, rape, and certain other conduct."
    },
    {
      q: "Where can I file for a protective order in Tulsa?",
      a: "A petition may generally be filed in the county where the petitioner lives, where the respondent lives, or where the alleged abuse occurred. Tulsa County residents may begin the process through the appropriate Tulsa County protective-order filing location."
    },
    {
      q: "Is a police report required?",
      a: "A police report is generally not required when the petition involves a qualifying family, household, or dating relationship. When a stalking or harassment petition involves someone outside those relationship categories, a law-enforcement complaint may be required before the final hearing."
    },
    {
      q: "What is an emergency ex parte protective order?",
      a: "An emergency ex parte order is temporary protection that may be granted before the respondent has an opportunity to appear. The judge initially reviews the petitioner’s allegations and determines whether immediate protection is warranted."
    },
    {
      q: "How quickly is a final hearing scheduled?",
      a: "When an Oklahoma emergency ex parte protective order is issued, the full hearing is generally scheduled within 14 days. Both parties may then present evidence and testimony."
    },
    {
      q: "What happens at a final protective-order hearing?",
      a: "The petitioner presents evidence explaining why protection is necessary. The respondent may challenge the allegations, present evidence, question witnesses, and explain why the order should be denied or limited. The judge then decides whether to issue a final order."
    },
    {
      q: "How long can a final protective order last?",
      a: "An Oklahoma final protective order may generally remain in effect for a fixed period of up to five years. In specified circumstances involving prior order violations or violent conduct, a court may issue a continuous order."
    },
    {
      q: "Can a protective order determine child custody?",
      a: "A protective order is not intended to make a permanent custody or visitation decision. However, its restrictions may temporarily affect contact, residence, and how existing parenting arrangements operate until the appropriate court addresses those issues."
    },
    {
      q: "What should I do if I am served with a protective order?",
      a: "Read every provision carefully, follow the restrictions immediately, preserve relevant evidence, and attend the scheduled hearing. Do not contact the petitioner directly or through another person unless the order or court specifically permits it."
    },
    {
      q: "Can the petitioner give the respondent permission to make contact?",
      a: "No. Only the court can modify or dismiss the order. Permission from the protected person does not authorize the respondent to ignore a no-contact provision while the order remains in effect."
    },
    {
      q: "Can text messages and social media posts be used as evidence?",
      a: "Yes. Texts, emails, direct messages, call records, social media posts, photographs, and recordings may be relevant when properly preserved and authenticated. Avoid deleting or altering digital evidence."
    },
    {
      q: "Can a protective order affect firearm rights?",
      a: "Yes. A protective order may create firearm restrictions under state or federal law. The precise effect depends on the language and status of the order and the circumstances of the case."
    },
    {
      q: "What happens if someone violates a protective order?",
      a: "A violation may result in arrest and a separate criminal charge. Allegations involving injury, repeated violations, or other aggravating circumstances may lead to more serious consequences."
    },
    {
      q: "Can a protective order be modified or dismissed?",
      a: "Either party may ask the court to modify, extend, vacate, or dismiss an order. The order remains enforceable unless and until the court enters a new order changing it."
    },
    {
      q: "Can McMillen Legal represent either side?",
      a: "Yes. McMillen Legal can assist people seeking protection and respondents contesting protective-order allegations. The firm evaluates each matter individually and cannot represent opposing parties in the same case."
    },
    {
      q: "Do you offer confidential consultations?",
      a: "Yes. A consultation allows you to discuss the petition, allegations, evidence, hearing date, and related criminal or family proceedings. An attorney-client relationship begins only after a written representation agreement is signed."
    }
  ];

  return (
    <div id="protective-orders-page" className="bg-[#FCFBF8] text-[#202735]">
      
      {/* HERO SECTION */}
      <section 
        id="po-hero" 
        className="relative bg-black py-[100px] md:py-[140px] text-white overflow-hidden min-h-[480px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={internalHeroBg} 
            alt="Courtroom & Protection Legal Backdrop" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-[#D4A74A] uppercase border-b-2 border-[#D4A74A]/30 pb-1 mb-4">
            PROTECTIVE ORDERS
          </span>
          
          <h1 className="font-serif text-[clamp(2.1rem,3.8vw,3.5rem)] font-light leading-[1.15] text-white uppercase max-w-[920px]">
            {isEn ? "Tulsa Protective Order Lawyers Protecting Your Safety" : "Abogados de Órdenes de Protección en Tulsa Protegiendo su Seguridad"}
          </h1>
          
          <p className="mt-6 text-[16px] leading-relaxed text-white/90 max-w-[750px] font-sans font-light">
            McMillen Legal represents individuals seeking or contesting protective orders in Tulsa and throughout Northeast Oklahoma. We provide focused representation in emergency proceedings, final protective-order hearings, stalking and harassment matters, and cases connected to criminal allegations.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onNavigateToConsultation}
              id="po-hero-consult-btn"
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
      <section id="po-main-content" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 1: Tulsa Protective Order Attorney */}
              <div>
                <h2 className="font-serif text-[clamp(2rem,3.2vw,2.5rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Tulsa Protective Order Attorney
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  A protective order can affect where a person lives, who they may contact, their access to firearms, their employment, and their reputation. Because emergency orders may be issued before both parties have presented evidence, the final hearing provides an important opportunity for the court to review the complete circumstances.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  McMillen Legal represents petitioners who need court-ordered protection and respondents who have been served with a protective order. We help clients understand the restrictions, prepare evidence, meet court deadlines, and present their position clearly at the hearing.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  We assist with matters such as:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    "Emergency ex parte protective orders",
                    "Final victim protective-order hearings",
                    "Domestic abuse protective orders",
                    "Stalking and harassment protective orders",
                    "Sexual assault-related protective orders",
                    "Protective orders involving dating relationships",
                    "Orders involving spouses or former spouses",
                    "Orders involving relatives or household members",
                    "Protective orders involving minor children",
                    "Respondent defense against unsupported allegations",
                    "Modification or extension of an existing order",
                    "Requests to dismiss or vacate an order",
                    "Alleged protective-order violations",
                    "Protective orders connected to criminal charges",
                    "Digital harassment and unwanted electronic contact"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4A74A] shrink-0 mt-2" />
                      <span className="text-[14.5px] font-sans font-medium text-[#132444] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15px] text-[#202735]/80 font-sans leading-[1.8] bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                  Under Oklahoma law, a person may seek protection based on domestic abuse, stalking, harassment, rape, or certain other criminal conduct. Domestic-abuse petitions generally involve qualifying family, household, dating, or intimate relationships. Stalking-related protection may be available even when the parties do not have a family or dating relationship.
                </p>
              </div>

              {/* Part 2: McMillen Legal: Your Tulsa Protective Order Advocates */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  McMillen Legal: Your Tulsa Protective Order Advocates
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Protective-order hearings often involve conflicting accounts, emotional allegations, electronic communications, and events that occurred without independent witnesses. McMillen Legal develops a focused strategy based on the alleged conduct, relationship between the parties, prior incidents, available documentation, and any related criminal or family proceeding.
                </p>

                <div className="font-serif font-bold text-[17px] text-[#132444] mb-4">
                  Our legal team may review:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {[
                    "The petition and emergency order",
                    "Police reports and incident numbers",
                    "Photographs of injuries or property damage",
                    "Medical records",
                    "Text messages and emails",
                    "Social media posts and direct messages",
                    "Phone records and voicemail messages",
                    "Security-camera and doorbell-camera recordings",
                    "Body-camera and dash-camera footage",
                    "Witness statements",
                    "Prior protective-order filings",
                    "Evidence of stalking or repeated unwanted contact",
                    "Location information and digital records",
                    "Firearm-related restrictions",
                    "Existing divorce, custody, or visitation orders",
                    "Pending domestic violence or criminal charges",
                    "Evidence supporting or disputing the allegations"
                  ].map((checkItem, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#D4A74A] shrink-0 mt-1" />
                      <span className="text-[14.5px] font-sans font-medium text-[#202735] leading-snug">{checkItem}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  For petitioners, we help organize evidence demonstrating why court protection is necessary and what restrictions may be appropriate.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  For respondents, we examine whether the allegations meet Oklahoma’s legal requirements, whether the evidence is complete and reliable, and whether the requested restrictions are broader than necessary.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans">
                  We also help clients understand that a protective-order case is separate from a criminal prosecution. Dismissal of criminal charges does not automatically end a protective order, and dismissal of a protective order does not necessarily stop a prosecutor from pursuing a criminal case.
                </p>
              </div>

              {/* Part 3: Why Hiring a Tulsa Protective Order Attorney Matters */}
              <div className="border-t border-black/10 pt-10">
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Why Hiring a Tulsa Protective Order Attorney Matters
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] text-[#132444] font-semibold font-sans mb-5">
                  A Tulsa protective order attorney can help you:
                </p>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Determine whether the allegations meet the requirements for a protective order.",
                    "Prepare or respond to an emergency protective-order petition.",
                    "Understand every restriction contained in the temporary order.",
                    "Gather messages, photographs, recordings, and witness testimony.",
                    "Organize evidence for the final hearing.",
                    "Address disputed allegations and incomplete accounts.",
                    "Examine whether stalking or harassment involved a repeated course of conduct.",
                    "Present evidence concerning safety risks or false allegations.",
                    "Identify related criminal, custody, or divorce proceedings.",
                    "Seek appropriate modification, extension, dismissal, or enforcement.",
                    "Explain potential firearm and employment consequences.",
                    "Defend against allegations that an order was violated.",
                    "Prepare for negotiations and courtroom testimony.",
                    "Protect your safety, legal rights, and long-term interests."
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <CheckCircle2 size={16} className="text-[#132444] shrink-0 mt-1" />
                      <span className="text-[15px] font-sans text-[#202735] font-medium leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#132444]/5 p-6 border border-[#132444]/15">
                    When a court grants emergency protection, the final hearing may be scheduled quickly. Missing the hearing can significantly affect the outcome, so both petitioners and respondents should carefully review all paperwork and court dates.
                  </p>

                  <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans bg-[#FAF8F5] p-5 border-l-4 border-[#D4A74A]">
                    McMillen Legal assists clients with protective-order proceedings from its Tulsa office at 2930 S. Yale Ave, Suite C, Tulsa, OK 74114.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column with Practice Areas List */}
            <div className="lg:col-span-4">
              <div className="sticky top-42 space-y-6">
                {renderPracticeAreasSidebar()}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TYPES OF PROTECTIVE ORDER MATTERS WE HANDLE */}
      <section id="po-types-cases" className="py-[100px] bg-[#FCFBF8] border-t border-b border-[#EFECE7]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A]">
              TYPES OF PROTECTIVE ORDER MATTERS WE HANDLE
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
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Emergency Ex Parte Orders
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  A judge may issue temporary protection before the respondent participates in a hearing when the petition presents an immediate safety concern. An emergency order is not the final decision; the court generally schedules a later hearing where both parties may present evidence.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <Gavel size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Final Protective Order Hearings
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  At the final hearing, the petitioner and respondent may testify, present evidence, call witnesses, and respond to the other party’s claims. Preparation is important because a final order can create significant, long-lasting restrictions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Domestic Abuse Protective Orders
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  These cases may involve current or former spouses, dating partners, relatives, household members, or people who share a child. Allegations can include physical violence, threatened harm, intimidation, or repeated unwanted conduct.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <UserX size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Stalking & Harassment Orders
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Repeated following, unwanted contact, surveillance, threatening messages, or conduct causing fear or distress may lead to a petition. Screenshots, call records, recordings, location evidence, and witness testimony can be especially important.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <Scale size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Defense Against Allegations
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  A respondent may believe the allegations are false, exaggerated, incomplete, or connected to another dispute. McMillen Legal helps respondents understand the restrictions, preserve evidence, and present their side at the hearing.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 border border-[#EFECE7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#132444] text-[#D4A74A] flex items-center justify-center mb-6">
                  <ShieldAlert size={22} />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#132444] uppercase mb-3">
                  Alleged Order Violations
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#202735]/80 font-sans font-light">
                  Calls, messages, social-media activity, third-party contact, or being present at a prohibited location may lead to an alleged violation. These accusations require careful review because a violation can create a separate criminal case.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TWO-COLUMN CONTENT SECTION 2: CONSIDERATIONS & INDIVIDUALIZED STRATEGY */}
      <section id="po-considerations-strategy" className="py-[80px] bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 text-left space-y-12">
              
              {/* Part 4: Key Tulsa Protective Order Considerations */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A74A] block mb-2">
                  OKLAHOMA PROTECTIVE ORDER PROCEDURE
                </span>
                <h2 className="font-serif text-[clamp(1.75rem,2.8vw,2.25rem)] font-bold text-[#132444] uppercase leading-[1.2] mb-3">
                  Key Tulsa Protective Order Considerations
                </h2>
                <div className="w-12 h-1 bg-[#D4A74A] mb-6" />

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  Protective-order proceedings can move quickly. Both petitioners and respondents should understand the order, attend the scheduled hearing, and preserve evidence as early as possible.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      A Protective Order Is a Civil Court Order
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Oklahoma describes a VPO as a civil order intended to protect a person and in appropriate cases children or pets from abuse, stalking, or harassment. It can prohibit contact, threats, harassment, stalking, and other specified conduct.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      A protective order does not itself decide permanent child custody, visitation, or ownership of property. Those issues may need to be addressed in a separate family-law proceeding.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Emergency Orders Are Not Final Orders
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      An emergency or ex parte order may be entered without a full hearing involving both parties. It generally remains subject to a later hearing at which the court determines whether final protection should be granted.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      The respondent must follow the temporary order while it is in effect, even if the allegations are disputed. The hearing—not direct contact with the petitioner—is the proper place to challenge it.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Service and Notice Matter
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      A respondent should receive the petition, protective order, and notice of the hearing. Service informs the respondent of the restrictions and provides an opportunity to appear and respond.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      If you receive protective-order paperwork, read every provision carefully. Do not assume that indirect contact, social-media contact, or communication through another person is permitted.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Evidence Should Be Preserved Immediately
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Protective-order hearings may rely heavily on testimony and supporting documentation. Relevant evidence may include:
                    </p>
                    <div className="space-y-1.5 my-3 pl-2">
                      {[
                        "Text messages and emails",
                        "Call logs and voicemails",
                        "Social-media messages",
                        "Photographs and videos",
                        "Police reports",
                        "Medical records",
                        "Security-camera footage",
                        "Location information",
                        "Witness testimony",
                        "A clear timeline of events"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-[14px] text-[#132444] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A74A]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Do not edit or delete communications. Preserve complete conversations so the context can be evaluated.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Missing the Hearing Can Have Serious Consequences
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      Both parties should attend the scheduled final hearing. If the petitioner does not appear, the request may be dismissed. If the respondent does not appear after receiving proper notice, the court may proceed without hearing the respondent’s side.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Review the hearing date, location, and courtroom immediately after receiving the paperwork.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Violating an Order Can Lead to Criminal Charges
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      A protective order remains enforceable until it expires, is dismissed, or is modified by the court. The parties cannot privately agree to disregard its restrictions.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Oklahoma advises that a first prosecuted violation may be treated as a misdemeanor, while subsequent violations may lead to felony charges. If accused of violating an order, avoid discussing the allegation and seek legal advice promptly.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[18px] text-[#132444] mb-2">
                      Related Cases Require Careful Coordination
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans mb-2">
                      The same allegations may affect a criminal investigation, divorce, custody dispute, immigration matter, employment, or firearm possession. Statements made during a protective-order case could also become relevant elsewhere.
                    </p>
                    <p className="text-[15px] leading-[1.8] text-[#202735]/85 font-sans">
                      Legal strategy should account for any related proceeding before testimony or evidence is presented.
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

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  Protective-order cases require careful preparation, clear evidence, and an understanding of both civil and criminal consequences.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-4">
                  For petitioners, McMillen Legal can help organize the evidence, explain the process, prepare testimony, and present the request for appropriate protection.
                </p>

                <p className="text-[15.5px] leading-[1.8] text-[#202735]/85 font-sans mb-6">
                  For respondents, we can examine the allegations, identify missing context or contradictory evidence, explain the order’s restrictions, and present a focused response at the hearing.
                </p>

                <div className="font-serif font-bold text-[18px] text-[#132444] mb-4">
                  We work to:
                </div>

                <div className="space-y-3.5 mb-8">
                  {[
                    "Explain the order and upcoming court process",
                    "Gather and organize relevant evidence",
                    "Prepare clients and witnesses for testimony",
                    "Address emergency and final-order proceedings",
                    "Present the client’s position clearly to the court",
                    "Evaluate related criminal-law concerns",
                    "Defend allegations of protective-order violations",
                    "Pursue modification or dismissal when legally appropriate"
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
                    “Our goal is to protect safety, uphold constitutional rights, and ensure every client receives fair representation in Oklahoma protective order matters.”
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column with Confidential Consultation Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-42 space-y-6">
                {renderFormSidebar("po_considerations")}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="po-faq" className="bg-[#FCFBF8] py-[100px] text-[#202735] border-b border-[#EFECE7]">
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
        id="po-contact-section" 
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
              Protective order proceedings require immediate action and experienced representation. Contact McMillen Legal today to schedule a confidential consultation.
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
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#D4A74A]">EMAIL INQUIRIES</div>
                  <a href="mailto:info@mcmillenlegal.com" className="font-sans text-[16px] font-semibold block leading-tight text-white hover:text-[#D4A74A] transition-colors">info@mcmillenlegal.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-white">
                <div className="h-11 w-11 bg-black/50 flex items-center justify-center border border-[#D4A74A]/40 shrink-0 text-[#D4A74A]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#D4A74A]">TULSA LAW OFFICE</div>
                  <p className="font-sans text-[14px] text-white/90 leading-tight">2930 S. Yale Ave, Suite C, Tulsa, OK 74114</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            {renderFormSidebar("po_bottom_contact")}
          </div>

        </div>
      </section>

    </div>
  );
}
