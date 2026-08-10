import React, { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

interface ContactUsPageProps {
  language: "en" | "es";
  onBackToHome: () => void;
  onNavigateAbout: () => void;
  contactBg: string;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({
  language,
  onBackToHome,
  onNavigateAbout,
  contactBg
}) => {
  const isEs = language === "es";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(isEs ? "Por favor complete los campos obligatorios." : "Please fill in the required fields.");
      return;
    }
    setSubmitted(true);
  };

  const t = {
    title: isEs ? "Envíenos un mensaje" : "Send us message",
    subtitle: isEs 
      ? "Póngase en contacto con nuestro equipo legal para una consulta confidencial." 
      : "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    nameLabel: isEs ? "Su nombre" : "Your name",
    namePlaceholder: isEs ? "Ingrese su nombre completo" : "Enter your full name",
    emailLabel: isEs ? "Correo electrónico" : "Email address",
    emailPlaceholder: isEs ? "Ingrese su correo electrónico" : "Enter your email address",
    phoneLabel: isEs ? "Número de teléfono" : "Phone number",
    phonePlaceholder: isEs ? "Ingrese su número de teléfono" : "Enter your phone number",
    messageLabel: isEs ? "Mensaje" : "Message",
    messagePlaceholder: isEs ? "Ingrese su mensaje" : "Enter your message",
    sendBtn: isEs ? "Enviar mensaje" : "Send Message",
    successMsg: isEs ? "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto." : "Message sent successfully! We will get back to you shortly.",
    
    officeTitle: isEs ? "Nuestra oficina" : "Our office",
    officeAddress: "2930 S. Yale Ave, Suite C, Tulsa, OK 74114",
    callTitle: isEs ? "Llámenos" : "Call us",
    phoneNum: "918.419.0176",
    hours: isEs ? "Lun - Vie, 8am - 6pm" : "Mon - Fri, 8am - 6pm",
    emailTitle: isEs ? "Enviar correo" : "Send email",
    emailAddr: "info@mcmillenlegal.com",
  };

  return (
    <div className="min-h-screen bg-white text-[#202735] font-sans antialiased flex flex-col">

      {/* Main Split Container matching reference design */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 w-full">
        
        {/* Left Side: Background Image & Contact Details */}
        <div 
          className="lg:col-span-5 bg-cover bg-center relative px-8 sm:px-12 py-16 flex flex-col justify-end text-white min-h-[500px]"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          {/* Bottom-to-top gradient overlay (top opacity 0, bottom opacity ~0.8 for text legibility) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#132444]/90 via-[#132444]/40 to-transparent" />

          <div className="relative z-10 space-y-8 mt-auto pt-16">
            {/* Contact Info blocks */}
            <div className="space-y-6">
              {/* Office */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[#D4A74A]/20 text-[#D4A74A] flex items-center justify-center shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#D4A74A] mb-1">{t.officeTitle}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{t.officeAddress}</p>
                </div>
              </div>

              {/* Call us */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[#D4A74A]/20 text-[#D4A74A] flex items-center justify-center shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#D4A74A] mb-1">{t.callTitle}</h4>
                  <a href="tel:9184190176" className="text-white font-bold text-base hover:text-[#D4A74A] transition-colors block">{t.phoneNum}</a>
                  <p className="text-white/70 text-xs mt-0.5">{t.hours}</p>
                </div>
              </div>

              {/* Send email */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[#D4A74A]/20 text-[#D4A74A] flex items-center justify-center shrink-0 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#D4A74A] mb-1">{t.emailTitle}</h4>
                  <a href="mailto:info@mcmillenlegal.com" className="text-white font-bold text-base hover:text-[#D4A74A] transition-colors block">{t.emailAddr}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Primary Blue background with Form */}
        <div className="lg:col-span-7 bg-[#132444] px-8 sm:px-16 py-16 flex flex-col justify-center relative overflow-hidden text-white">
          


          <div className="max-w-xl mx-auto w-full z-10">
            <div className="mb-8 space-y-3">
              <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-normal text-white leading-tight">
                {t.title}
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#1b2f57] p-8 shadow-lg text-center space-y-4 border border-[#D4A74A]/30">
                <div className="h-12 w-12 bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">{isEs ? "¡Mensaje Enviado!" : "Message Sent!"}</h3>
                <p className="text-sm text-white/80">{t.successMsg}</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="mt-4 bg-[#D4A74A] hover:bg-white text-[#132444] text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors cursor-pointer"
                >
                  {isEs ? "Enviar otro mensaje" : "Send another message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A74A] mb-2">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className="w-full bg-[#1b2f57] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4A74A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A74A] mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    className="w-full bg-[#1b2f57] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4A74A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A74A] mb-2">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.phonePlaceholder}
                    className="w-full bg-[#1b2f57] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4A74A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A74A] mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    className="w-full bg-[#1b2f57] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4A74A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4A74A] hover:bg-white text-[#132444] py-4 font-bold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer"
                >
                  {t.sendBtn}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Full Width Map Section */}
      <div className="w-full h-[320px] relative border-t border-black/10">
        <iframe
          title="McMillen Law Firm Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.437025807481!2d-95.9405!3d36.1156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA2JzU2LjIiTiA5NcKwNTYnMjUuOCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>

    </div>
  );
};
