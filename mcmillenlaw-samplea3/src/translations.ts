export interface TranslationSet {
  topBarSubtitle: string;
  topBarSeHabla: string;
  scheduleConsultation: string;
  firmTitle: string;
  firmSubtitle: string;
  
  // Navigation
  navHome: string;
  navAbout: string;
  navPracticeAreas: string;
  navStories: string;
  navResources: string;
  navContact: string;
  navLuxury: string;

  // Hero
  heroTagline: string;
  heroHeadingLine1: string;
  heroHeadingLine2: string;
  heroDescription: string;
  attorneyDirectMobile: string;
  
  // About
  aboutTagline: string;
  aboutTitle1: string;
  aboutTitle2: string;
  aboutBio: string;
  aboutBioP1: string;
  aboutBioP2: string;
  aboutBioP3: string;
  aboutFounder: string;
  aboutButton: string;
  
  // About checklist
  aboutBullet1Title: string;
  aboutBullet1Desc: string;
  aboutBullet2Title: string;
  aboutBullet2Desc: string;
  aboutBullet3Title: string;
  aboutBullet3Desc: string;
  aboutBullet4Title: string;
  aboutBullet4Desc: string;
  
  // Stories
  storiesTagline: string;
  story1Title: string;
  story1Desc: string;
  story2Title: string;
  story2Desc: string;
  story3Title: string;
  story3Desc: string;
  storyPortalBadge: string;
  storyPortalModalText: string;
  storyPortalClose: string;
  
  // Stats
  statsTagline: string;
  stats1Val: string;
  stats1Label: string;
  stats2Val: string;
  stats2Label: string;
  stats3Val: string;
  stats3Label: string;
  stats4Val: string;
  stats4Label: string;
  
  // Practice Areas
  practiceTagline: string;
  practiceTitle: string;
  practiceButton: string;
  searchPlaceholder: string;
  searchGo: string;
  
  // Practice areas details
  practiceCriminalLabel: string;
  practiceCriminalDesc: string;
  practiceDuiLabel: string;
  practiceDuiDesc: string;
  practiceDrugsLabel: string;
  practiceDrugsDesc: string;
  practiceTrafficLabel: string;
  practiceTrafficDesc: string;
  practiceExpungementLabel: string;
  practiceExpungementDesc: string;
  practiceProtectiveLabel: string;
  practiceProtectiveDesc: string;

  // Why Us
  trustTagline: string;
  trustTitle1: string;
  trustTitle2: string;
  trustDesc: string;
  trustCheck1: string;
  trustCheck2: string;
  trustCheck3: string;
  trustCheck4: string;
  trustBadgeTag: string;
  trustBadgeVal: string;

  // Testimonials
  reviewsTagline: string;
  reviewsTitle: string;
  review1Text: string;
  review1Client: string;
  review2Text: string;
  review2Client: string;
  review3Text: string;
  review3Client: string;
  review4Text: string;
  review4Client: string;

  // How It Works
  howItWorksTagline?: string;
  howItWorksTitle1?: string;
  howItWorksTitle2?: string;
  howStep1Num?: string;
  howStep1Title1?: string;
  howStep1Title2?: string;
  howStep1Desc?: string;
  howStep2Num?: string;
  howStep2Title1?: string;
  howStep2Title2?: string;
  howStep2Desc?: string;
  howStep3Num?: string;
  howStep3Title1?: string;
  howStep3Title2?: string;
  howStep3Desc?: string;
  howStep4Num?: string;
  howStep4Title1?: string;
  howStep4Title2?: string;
  howStep4Desc?: string;
  howItWorksCta?: string;

  // FAQs
  faqTagline: string;
  faqTitle: string;
  faqButton: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  faq5Q?: string;
  faq5A?: string;

  // Contact / Intake
  contactTagline: string;
  contactTitle1: string;
  contactTitle2: string;
  contactDesc: string;
  contactSubtitle: string;
  contactConfidential: string;
  contactFormLabelName: string;
  contactFormLabelPhone: string;
  contactFormLabelEmail: string;
  contactFormLabelCaseType: string;
  contactFormLabelDesc: string;
  contactFormSubmit: string;
  contactSuccessHead: string;
  contactSuccessDesc: string;
  contactGoBack: string;

  // Footer / Misc
  footerDesc: string;
  footerQuickLinks: string;
  footerPractices: string;
  footerContactUs: string;
  footerDisclaimer: string;
  footerPrivacy: string;
  footerCopyright: string;
}

export const translations: Record<"en" | "es", TranslationSet> = {
  en: {
    topBarSubtitle: "Northeast Oklahoma Trial Litigator",
    topBarSeHabla: "Se Habla Español",
    scheduleConsultation: "SCHEDULE A CONSULTATION",
    firmTitle: "TULSA CRIMINAL",
    firmSubtitle: "JUSTICE LAW FIRM",
    
    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navPracticeAreas: "Practice Areas",
    navStories: "Stories",
    navResources: "Resources",
    navContact: "Contact",
    navLuxury: "New Edition",

    // Hero
    heroTagline: "EXPERIENCED. DEDICATED. RELENTLESS.",
    heroHeadingLine1: "Helping Immigrant Families",
    heroHeadingLine2: "Navigate the Criminal Justice System.",
    heroDescription: "Trusted legal representation and dedicated guidance when you need it most.",
    attorneyDirectMobile: "ATTORNEY DIRECT MOBILE",
    
    // About
    aboutTagline: "MEET MARY MCMILLEN",
    aboutTitle1: "Guiding Oklahoma's",
    aboutTitle2: "Immigrant Communities.",
    aboutBio: "We believe every person deserves dignity, fairness, and a voice within the legal justice system. Our mission is to help immigrants and their families understand their rights, make informed decisions, and confidently navigate every stage of their case.",
    aboutBioP1: "Mary McMillen is an attorney with over 10 years of experience advocating for the Tulsa community. She was licensed to practice law in 2012. As an attorney, she diligently represents clients in criminal court.",
    aboutBioP2: "Before joining the legal profession, Mary was an instructor at Northeastern State University in Tahlequah teaching composition, rhetoric, critical reading, and political science. Mary's office is located in Tulsa, Oklahoma and she primarily serves clients in Northeast OK and throughout the state.",
    aboutBioP3: "Mary is a proud ally of the LGBTQ+ community, a passionate advocate for immigrants and minorities, and has a strong commitment to progressive legal equality and practice.",
    aboutFounder: "Mary McMillen, Esq.",
    aboutButton: "LEARN MORE ABOUT MARY",
    
    // About checklist
    aboutBullet1Title: "SERVING TULSA",
    aboutBullet1Desc: "Active representation across Northeastern Oklahoma courts.",
    aboutBullet2Title: "STATE BAR LICENSED",
    aboutBullet2Desc: "Licensed to practice inside Oklahoma State & Federal courts.",
    aboutBullet3Title: "LGBTQ+ ALLY",
    aboutBullet3Desc: "Staunch advocate for inclusive rights, defense & equality.",
    aboutBullet4Title: "ACADEMIC ANALYST",
    aboutBullet4Desc: "Former lecturer at NSU, applying critical rhetorical logic.",
    
    // Stories
    storiesTagline: "REAL STORIES OF JUSTICE",
    story1Title: "Client Success Story",
    story1Desc: "Real results. Real people.",
    story2Title: "Why Clients Choose McMillen",
    story2Desc: "Personal attention. Proven results.",
    story3Title: "Meet Mary McMillen",
    story3Desc: "Her approach. Her commitment.",
    storyPortalBadge: "MCMILLEN LEGAL PORTAL",
    storyPortalModalText: "Secure confidential client briefing channel. For live attorney advice custom to your Tulsa court calendar, call our hotline.",
    storyPortalClose: "Close Portal Player",
    
    // Stats
    statsTagline: "RESULTS THAT MATTER",
    stats1Val: "250+",
    stats1Label: "Clients Represented",
    stats2Val: "15+",
    stats2Label: "Years of Experience",
    stats3Val: "98%",
    stats3Label: "Client Satisfaction",
    stats4Val: "500+",
    stats4Label: "Cases Handled",
    
    // Practice Areas
    practiceTagline: "HOW WE HELP",
    practiceTitle: "Focused Criminal Justice",
    practiceButton: "VIEW ALL PRACTICE AREAS",
    searchPlaceholder: "Search justice practices...",
    searchGo: "Go",
    
    // Individual Practice Areas labels and descriptions
    practiceCriminalLabel: "Criminal Justice",
    practiceCriminalDesc: "Providing defense and representation for misdemeanor and felony cases in Oklahoma county courts.",
    practiceDuiLabel: "DUI & Traffic Justice",
    practiceDuiDesc: "Fighting DUI charges to protect driver's licenses and avoid mandatory jail periods.",
    practiceDrugsLabel: "Drug-Related Criminal Matters",
    practiceDrugsDesc: "Counseling clients accused of drug transport, distribution, possession, or manufacturing.",
    practiceTrafficLabel: "Traffic Tickets",
    practiceTrafficDesc: "Preventing luxury insurance spikes or driving suspension from moving violations.",
    practiceExpungementLabel: "Expungements",
    practiceExpungementDesc: "Enabling complete judicial restoration to turn over a fresh page under Title 22.",
    practiceProtectiveLabel: "Protective Orders",
    practiceProtectiveDesc: "Diligently navigating complex litigation surrounding protective order actions.",

    // How It Works
    howItWorksTagline: "HOW IT WORKS",
    howItWorksTitle1: "A SIMPLE PROCESS.",
    howItWorksTitle2: "BUILT AROUND YOU.",
    howStep1Num: "01",
    howStep1Title1: "Schedule",
    howStep1Title2: "Consultation",
    howStep1Desc: "We listen to your story and understand your goals.",
    howStep2Num: "02",
    howStep2Title1: "Strategy",
    howStep2Title2: "& Planning",
    howStep2Desc: "We investigate, evaluate, and build your case.",
    howStep3Num: "03",
    howStep3Title1: "We Take",
    howStep3Title2: "Action",
    howStep3Desc: "We handle the legal process while you focus on healing.",
    howStep4Num: "04",
    howStep4Title1: "Resolution",
    howStep4Title2: "& Recovery",
    howStep4Desc: "We fight for the best possible outcome for your future.",
    howItWorksCta: "SCHEDULE A CONSULTATION",

    // Why Us
    trustTagline: "WHY PEOPLE TRUST MCMILLEN LEGAL",
    trustTitle1: "Personal Guidance.",
    trustTitle2: "Meaningful Justice.",
    trustDesc: "Every case deserves compassion, preparation, and experienced guidance. We work alongside individuals and families to help them understand the legal justice process, protect their rights, and move forward with confidence.",
    trustCheck1: "Direct communication with your attorney",
    trustCheck2: "Strategic, prepared, and relentless representation",
    trustCheck3: "Local court experience that makes a difference",
    trustCheck4: "Clear guidance every step of the way",
    trustBadgeTag: "NORTHEAST OKLAHOMA",
    trustBadgeVal: "Tulsa Native Representation",

    // Testimonials
    reviewsTagline: "WHAT OUR CLIENTS SAY",
    reviewsTitle: "Client Testimonials",
    review1Text: "Mary McMillen truly cares about her clients and fights hard for the best possible outcome. She was there for me every step of the way.",
    review1Client: "Client in Tulsa, OK",
    review2Text: "Professional, responsive, and genuinely invested in my case. Highly recommend McMillen Legal!",
    review2Client: "Civil Liberties Client, Oklahoma City",
    review3Text: "She fought hard for me and achieved a result better than I could have hoped for. Absolute life saver.",
    review3Client: "Client in Broken Arrow",
    review4Text: "Unbelievable service and legal representation. She went above and beyond to clear my felony record.",
    review4Client: "Expungement Client, Tulsa, OK",

    // FAQs
    faqTagline: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: "Questions & Answers",
    faqButton: "VIEW ALL FAQS →",
    faq1Q: "What types of criminal cases do you handle?",
    faq1A: "We handle a wide range of state and municipal criminal defense matters in Tulsa and Northeast Oklahoma, including misdemeanor accusations, severe felony charges, CDL/traffic citation defense, and protective order hearings.",
    faq2Q: "How do you charge for your services?",
    faq2A: "We offer clear, upfront flat rates and transparent fee structures tailored specifically to the scope of your legal defense. We believe in providing predictability with no surprise invoice hours during a challenging trial process.",
    faq3Q: "How long will my legal matter or case take?",
    faq3A: "Every case has a distinct timeline. A simple citation or protective order can resolve in a few weeks, while complex felony litigation can take several months. We prepare rigorous timelines and keep you fully informed at every stage.",
    faq4Q: "What can I expect during the defense process?",
    faq4A: "We guide you through every protocol—from initial investigation and bond hearing to structured negotiation or trial. You will have a dedicated local advocate, transparent updates, and seasoned courtroom expertise committed to your liberty.",
    faq5Q: "Do you offer confidential consultations?",
    faq5A: "Yes, we offer completely confidential evaluations to review your situation, assess your exposure, and lay out your strategic defense options in Tulsa Municipal and District Courts. Reach out today to establish client-attorney privilege.",

    // Contact / Intake
    contactTagline: "FACING CRIMINAL CHARGES?",
    contactTitle1: "Get the Representation ",
    contactTitle2: "You Deserve.",
    contactDesc: "Call Today for a Confidential Consultation. We provide around-the-clock defense access so you never stand alone against state authorities.",
    contactSubtitle: "DIRECT MOBILE HOTLINE",
    contactConfidential: "Confidential Evaluation",
    contactFormLabelName: "Full Name",
    contactFormLabelPhone: "Phone Number",
    contactFormLabelEmail: "Email Address",
    contactFormLabelCaseType: "Case Type",
    contactFormLabelDesc: "Tell us about your case...",
    contactFormSubmit: "SUBMIT REQUEST",
    contactSuccessHead: "Inquiry Successfully Logged",
    contactSuccessDesc: "Thank you. Mary McMillen will review your case details and contact you directly in minutes.",
    contactGoBack: "Go Back",

    // Footer / Misc
    footerDesc: "A Tulsa based law firm providing aggressive criminal justice and personalized litigation representation across Northeast Oklahoma.",
    footerQuickLinks: "QUICK LINKS",
    footerPractices: "PRACTICES",
    footerContactUs: "CONTACT US",
    footerDisclaimer: "Disclaimer",
    footerPrivacy: "Privacy Policy",
    footerCopyright: "© 2026 McMillen Legal LLP. All rights reserved."
  },
  es: {
    topBarSubtitle: "Litigante de Juicios del Noreste de Oklahoma",
    topBarSeHabla: "English",
    scheduleConsultation: "PROGRAMAR UNA CONSULTA",
    firmTitle: "JUSTICIA PENAL",
    firmSubtitle: "CON SEDE EN TULSA",
    
    // Navigation
    navHome: "Inicio",
    navAbout: "Sobre mí",
    navPracticeAreas: "Áreas de práctica",
    navStories: "Historias reales",
    navResources: "Recursos",
    navContact: "Contacto",
    navLuxury: "Nueva Edición",

    // Hero
    heroTagline: "CON EXPERIENCIA. DEDICADA. IMPLACABLE.",
    heroHeadingLine1: "Ayudando a Familias Inmigrantes",
    heroHeadingLine2: "a Navegar el Sistema de Justicia Penal.",
    heroDescription: "Representación legal de confianza y orientación dedicada cuando más lo necesita.",
    attorneyDirectMobile: "CELULAR DIRECTO DE LA ABOGADA",
    
    // About
    aboutTagline: "CONOCÉ A MARY MCMILLEN",
    aboutTitle1: "Guiando a las Comunidades Inmigrantes",
    aboutTitle2: "de Oklahoma.",
    aboutBio: "Creemos que cada persona merece dignidad, imparcialidad y una voz dentro del sistema de justicia penal. Nuestra misión es ayudar a los inmigrantes y a sus familias a comprender sus derechos, tomar decisiones informadas y navegar con confianza cada etapa de su caso.",
    aboutBioP1: "Mary McMillen es una abogada con más de 10 años de experiencia abogando por la comunidad de Tulsa. Obtuvo su licencia para ejercer la abogacía en 2012. Como abogada, representa diligentemente a sus clientes en los tribunales penales.",
    aboutBioP2: "Antes de incorporarse a la profesión legal, Mary fue instructora en la Universidad Estatal de Northeastern en Tahlequah, enseñando composición, retórica, lectura crítica y ciencia política. La oficina de Mary está ubicada en Tulsa, Oklahoma y presta servicios principalmente a clientes en el noreste de Oklahoma y en todo el estado.",
    aboutBioP3: "Mary es una orgullosa aliada de la comunidad LGBTQ+, una apasionada defensora de los inmigrantes y las minorías, y tiene un firme compromiso con la igualdad legal progresista y el ejercicio de la justicia.",
    aboutFounder: "Abog. Mary McMillen",
    aboutButton: "MÁS SOBRE MARY MCMILLEN",
    
    // About checklist
    aboutBullet1Title: "EN TULSA",
    aboutBullet1Desc: "Representación activa en las cortes del noreste de Oklahoma.",
    aboutBullet2Title: "LICENSIADA EN EL ESTADO",
    aboutBullet2Desc: "Licencia activa para ejercer en cortes estatales y federales.",
    aboutBullet3Title: "ALIADA LGBTQ+",
    aboutBullet3Desc: "Firme defensora de los derechos inclusivos, igualdad y respeto.",
    aboutBullet4Title: "ANALISTA ACADÉMICA",
    aboutBullet4Desc: "Ex conferencista en NSU, aplicando lógica retórica en juicios.",
    
    // Stories
    storiesTagline: "HISTORIAS REALES DE JUSTICIA",
    story1Title: "Caso de Éxito",
    story1Desc: "Resultados reales. Personas reales.",
    story2Title: "Por Qué Elegir McMillen",
    story2Desc: "Atención personalizada. Resultados probados.",
    story3Title: "Presentando a Mary McMillen",
    story3Desc: "Su enfoque ético. Su compromiso de vida.",
    storyPortalBadge: "PORTAL LEGAL MCMILLEN",
    storyPortalModalText: "Canal seguro de información confidencial. Para obtener asesoramiento telefónico urgente adaptado a su caso, llame a nuestra línea directa.",
    storyPortalClose: "Cerrar Portal Informativo",
    
    // Stats
    statsTagline: "RESULTADOS QUE IMPORTAN",
    stats1Val: "250+",
    stats1Label: "Clientes Representados",
    stats2Val: "15+",
    stats2Label: "Años de Experiencia",
    stats3Val: "98%",
    stats3Label: "Satisfacción del Cliente",
    stats4Val: "500+",
    stats4Label: "Casos Manejados",
    
    // Practice Areas
    practiceTagline: "CÓMO AYUDAMOS",
    practiceTitle: "Justicia Penal Especializada",
    practiceButton: "ÁREAS DE PRÁCTICA",
    searchPlaceholder: "Buscar prácticas de justicia penal...",
    searchGo: "Ir",
    
    // Individual Practice Areas labels and descriptions
    practiceCriminalLabel: "Justicia Penal",
    practiceCriminalDesc: "Defensa y representación jurídica para delitos menores y graves en cortes del condado de Oklahoma.",
    practiceDuiLabel: "Justicia en DUI y Tráfico",
    practiceDuiDesc: "Combatiendo cargos de DUI para proteger licencias y evitar ir a prisión.",
    practiceDrugsLabel: "Asuntos Penales Relacionados con Drogas",
    practiceDrugsDesc: "Defensa legal para acusaciones de transporte, distribución o posesión de sustancias.",
    practiceTrafficLabel: "Multas de Tráfico",
    practiceTrafficDesc: "Evitando el incremento desmedido de seguros y la suspensión de tu licencia de manejo.",
    practiceExpungementLabel: "Limpieza de Récord",
    practiceExpungementDesc: "Limpieza completa de antecedentes penales bajo el Título 22 de las leyes de Oklahoma.",
    practiceProtectiveLabel: "Órdenes de Protección",
    practiceProtectiveDesc: "Navegando con cuidado litigios complejos sobre órdenes de protección familiar.",

    // How It Works
    howItWorksTagline: "CÓMO FUNCIONA",
    howItWorksTitle1: "UN PROCESO SENCILLO.",
    howItWorksTitle2: "DISEÑADO PARA USTED.",
    howStep1Num: "01",
    howStep1Title1: "Agendar",
    howStep1Title2: "Consulta",
    howStep1Desc: "Escuchamos su historia y comprendemos sus objetivos.",
    howStep2Num: "02",
    howStep2Title1: "Estrategia y",
    howStep2Title2: "Planificación",
    howStep2Desc: "Investigamos, evaluamos y construimos su caso.",
    howStep3Num: "03",
    howStep3Title1: "Tomamos",
    howStep3Title2: "Medidas",
    howStep3Desc: "Nos encargamos del proceso legal mientras usted se enfoca en su tranquilidad.",
    howStep4Num: "04",
    howStep4Title1: "Resolución y",
    howStep4Title2: "Recuperación",
    howStep4Desc: "Luchamos por el mejor resultado posible para su futuro.",
    howItWorksCta: "PROGRAMAR UNA CONSULTA",

    // Why Us
    trustTagline: "¿POR QUÉ CONFIAR EN MCMILLEN?",
    trustTitle1: "Orientación Personal.",
    trustTitle2: "Justicia Significativa.",
    trustDesc: "Cada caso merece compasión, preparación y orientación experimentada. Trabajamos junto a personas y familias para ayudarlas a comprender el proceso de justicia legal, proteger sus derechos y avanzar con confianza.",
    trustCheck1: "Comunicación directa uno-a-uno con tu abogada",
    trustCheck2: "Representación estratégica, preparada, lista para juicio",
    trustCheck3: "Experiencia en cortes locales de Oklahoma",
    trustCheck4: "Asesoramiento claro en español en cada fase",
    trustBadgeTag: "REPRESENTACIÓN NATIVA",
    trustBadgeVal: "Abogada Originaria de Tulsa",

    // Testimonials
    reviewsTagline: "LO QUE DICEN NUESTROS CLIENTES",
    reviewsTitle: "Testimonios de Clientes",
    review1Text: "Mary McMillen realmente se preocupa por sus clientes de manera humana y pelea sin descansar por el mejor resultado. Estuvo conmigo en cada paso del camino.",
    review1Client: "Cliente en Tulsa, OK",
    review2Text: "Totalmente profesional, responde con rapidez y con un compromiso excelente en mi caso penal. ¡Súper recomendada!",
    review2Client: "Cliente de representación, Oklahoma City",
    review3Text: "Luchó duro por mí en mi peor momento y logró un resultado infinitamente mejor de lo esperado. Me salvó la vida.",
    review3Client: "Cliente de DUI, Broken Arrow, OK",
    review4Text: "Servicio increíble y de alta gama. Hizo una labor impecable para limpiar mi récord criminal estatal.",
    review4Client: "Cliente de Limpieza de Récord, Tulsa, OK",

    // FAQs
    faqTagline: "PREGUNTAS FRECUENTES",
    faqTitle: "Preguntas y Respuestas",
    faqButton: "Preguntas Frecuentes Completo →",
    faq1Q: "¿Qué tipo de casos penales manejan?",
    faq1A: "Manejamos una amplia variedad de asuntos de defensa penal estatal y municipal en Tulsa y el noreste de Oklahoma, incluyendo acusaciones de delitos menores, cargos graves por delitos mayores, defensa de citas de tráfico/CDL y audiencias de órdenes de protección.",
    faq2Q: "¿Cómo cobran por sus servicios?",
    faq2A: "Ofrecemos tarifas fijas claras y por adelantado, con estructuras de honorarios transparentes adaptadas específicamente al alcance de su defensa legal. Creemos en brindar previsibilidad sin horas sorpresa en facturas durante un proceso de juicio desafiante.",
    faq3Q: "¿Cuánto tiempo tomará mi asunto o caso legal?",
    faq3A: "Cada caso tiene una cronología distinta. Una citación simple u orden de protección se puede resolver en unas pocas semanas, mientras que un litigo complejo por delito mayor puede llevar varios meses. Preparamos cronogramas rigurosos y lo mantenemos totalmente informado en cada etapa.",
    faq4Q: "¿Qué puedo esperar durante el proceso de defensa?",
    faq4A: "Lo guiamos a través de cada protocolo, desde la investigación inicial y la audiencia de fianza hasta la negociación estructurada o el juicio. Contará con un defensor local dedicado, actualizaciones transparentes y una sólida experiencia en los tribunales comprometida con su libertad.",
    faq5Q: "¿Ofrecen consultas confidenciales?",
    faq5A: "Sí, ofrecemos evaluaciones completamente confidenciales para revisar su situación, evaluar su exposición y trazar sus opciones de defensa estratégica en los tribunales municipales y de distrito de Tulsa. Contáctenos hoy para establecer el privilegio abogado-cliente.",

    // Contact / Intake
    contactTagline: "¿ENFRENTA CARGOS PENALES?",
    contactTitle1: "Obtenga la Representación ",
    contactTitle2: "Que Usted Merece.",
    contactDesc: "Llame hoy mismo para programar una consulta totalmente confidencial. Brindamos soporte de emergencia las 24 horas del día.",
    contactSubtitle: "LÍNEA DIRECTA DE EMERGENCIA",
    contactConfidential: "Evaluación Confidencial de Caso",
    contactFormLabelName: "Nombre Completo",
    contactFormLabelPhone: "Número de Teléfono",
    contactFormLabelEmail: "Correo Electrónico",
    contactFormLabelCaseType: "Tipo de Caso",
    contactFormLabelDesc: "Cuéntenos sobre su caso judicial...",
    contactFormSubmit: "ENVIAR SOLICITUD DE AYUDA",
    contactSuccessHead: "Consulta Enviada con Éxito",
    contactSuccessDesc: "Muchas gracias. La abogada Mary McMillen revisará su caso y se comunicará con usted de inmediato.",
    contactGoBack: "Regresar",

    // Footer / Misc
    footerDesc: "Un bufete de abogados de Tulsa de primer nivel que ofrece servicios de justicia penal agresivos y representación en juicios en todo el noreste de Oklahoma.",
    footerQuickLinks: "ENLACES RÁPIDOS",
    footerPractices: "ÁREAS DE PRÁCTICA",
    footerContactUs: "CONTACTO DIRECTO",
    footerDisclaimer: "Descargo de Responsabilidad",
    footerPrivacy: "Política de Privacidad",
    footerCopyright: "© 2026 McMillen Legal LLP. Todos los derechos reservados."
  }
};
