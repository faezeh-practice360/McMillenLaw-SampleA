import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactSectionProps {
  t: any;
  formData: any;
  handleInputChange: (e: any) => void;
  handleFormSubmit: (e: any) => void;
  contactBg: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  t,
  formData,
  handleInputChange,
  handleFormSubmit,
  contactBg,
}) => {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-cover bg-center flex items-stretch border-t border-black/5" style={{ backgroundImage: `url(${contactBg})` }}>
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
                className="w-full bg-[#132444] text-white py-4 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-[#D4A74A] hover:text-[#132444] transition-all rounded-none cursor-pointer border-none"
              >
                {t.contactFormSubmit}
              </button>
            </form>
          </div>
        </div>
      </section>
  );
};
