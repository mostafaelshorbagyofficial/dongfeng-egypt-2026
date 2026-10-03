export interface ChapterNavInfo {
  id: string;
  num: string;
  titleEn: string;
  titleAr: string;
}

export const CHAPTERS_NAV: ChapterNavInfo[] = [
  { id: 'hero', num: '00', titleEn: 'PROMEDIA PRESENTS', titleAr: 'بروميديا تقدم' },
  { id: 'chapter-01', num: '01', titleEn: 'THE OPPORTUNITY', titleAr: 'الفرصة' },
  { id: 'chapter-02', num: '02', titleEn: 'THE REAL PROBLEM', titleAr: 'المشكلة الحقيقية' },
  { id: 'chapter-03', num: '03', titleEn: 'OUR POSITIONING', titleAr: 'التموضع الاستراتيجي' },
  { id: 'chapter-04', num: '04', titleEn: 'THE BIG IDEA', titleAr: 'الفكرة الكبيرة' },
  { id: 'chapter-05', num: '05', titleEn: 'BRAND COMMUNICATION', titleAr: 'لغة الخطاب والتواصل' },
  { id: 'chapter-06', num: '06', titleEn: 'TARGET AUDIENCE', titleAr: 'الجمهور المستهدف' },
  { id: 'chapter-07', num: '07', titleEn: 'PRODUCT TO BUSINESS MAPPING', titleAr: 'مطابقة المنتجات مع الأعمال' },
  { id: 'chapter-08', num: '08', titleEn: 'CONTENT SYSTEM', titleAr: 'منظومة المحتوى' },
  { id: 'chapter-09', num: '09', titleEn: 'SIGNATURE SERIES', titleAr: 'السلاسل الرئيسية' },
  { id: 'chapter-10', num: '10', titleEn: 'SOCIAL MEDIA MIX', titleAr: 'مزيج السوشيال ميديا' },
  { id: 'chapter-11', num: '11', titleEn: 'THE HERO FILM', titleAr: 'الفيلم الرئيسي' },
  { id: 'chapter-12', num: '12', titleEn: 'LEAD GENERATION', titleAr: 'توليد العملاء المحتملين' },
  { id: 'chapter-13', num: '13', titleEn: 'SMART LEAD FORM', titleAr: 'نموذج التأهيل الذكي' },
  { id: 'chapter-14', num: '14', titleEn: 'WEBSITE EXPERIENCE', titleAr: 'موقع الويب التفاعلي' },
  { id: 'chapter-15', num: '15', titleEn: 'OFFLINE STRATEGY', titleAr: 'الاستراتيجية الميدانية' },
  { id: 'chapter-16', num: '16', titleEn: 'MOBILE SHOWROOM', titleAr: 'المعرض المتنقل' },
  { id: 'chapter-17', num: '17', titleEn: 'CAPTAIN DAY', titleAr: 'كابتن داي' },
  { id: 'chapter-18', num: '18', titleEn: 'FLEET SOLUTIONS', titleAr: 'حلول الأساطيل' },
  { id: 'chapter-19', num: '19', titleEn: 'COMPETITIVE LANDSCAPE', titleAr: 'المشهد التنافسي' },
  { id: 'chapter-20', num: '20', titleEn: 'INFLUENCER STRATEGY', titleAr: 'استراتيجية المؤثرين' },
  { id: 'chapter-21', num: '21', titleEn: 'PAID MEDIA', titleAr: 'الإعلانات المدفوعة' },
  { id: 'chapter-22', num: '22', titleEn: '90 DAYS ROADMAP', titleAr: 'خطة الـ 90 يوم' },
  { id: 'chapter-23', num: '23', titleEn: 'KPI DASHBOARD', titleAr: 'لوحة مؤشرات الأداء' },
  { id: 'chapter-24', num: '24', titleEn: 'THE BIG DIFFERENCE', titleAr: 'الفرق الحقيقي' },
  { id: 'final-thought', num: '25', titleEn: 'FINAL BRAND THOUGHT', titleAr: 'الرؤية الختامية' }
];

export const PRESENTATION_CONTENT = {
  header: {
    brand: "DONGFENG COMMERCIAL",
    brandAr: "دونج فينج التجارية",
    subtitle: "EGYPT STRATEGY 2026",
    subtitleAr: "استراتيجية مصر 2026",
    presentedBy: "PROMEDIA",
    presentedByAr: "بروميديا"
  },
  opening: {
    agencyTag: "PROMEDIA PRESENTS",
    agencyTagAr: "بروميديا تقدم",
    clientName: "DONGFENG COMMERCIAL EGYPT",
    clientNameAr: "دونج فينج التجارية مصر",
    mainTitle: "DIGITAL + OFFLINE MARKETING STRATEGY",
    mainTitleAr: "استراتيجية التسويق الرقمي والميداني",
    year: "2026",
    yearAr: "2026",
    tagline: "KEEP BUSINESS MOVING.",
    taglineAr: "شغلك ما يقفش."
  },
  opportunity: {
    badge: "CHAPTER 01",
    badgeAr: "الفصل 01",
    title: "THE OPPORTUNITY",
    titleAr: "الفرصة",
    intro: "Dongfeng is entering the Egyptian market not simply as a commercial vehicle brand.",
    introAr: "دونج فينج تدخل السوق المصري مش بس كعلامة تجارية للعربيات التجارية.",
    portfolioLabel: "ITS PORTFOLIO COVERS:",
    portfolioLabelAr: "الـPortfolio بيغطي:",
    categories: [
      { name: "TRUCKS", nameAr: "شاحنات", desc: "Heavy & light cargo applications", descAr: "حمولات ثقيلة وخفيفة لقطاعات النقل" },
      { name: "VANS", nameAr: "فانات", desc: "Urban delivery & cargo transport", descAr: "توصيل حضري ونقل بضائع تجارية" },
      { name: "EV", nameAr: "مركبات كهربائية", desc: "Smart zero-emission urban fleets", descAr: "أساطيل ذكية خالية من الانبعاثات" }
    ],
    models: ["CAPTAIN W", "CAPTAIN T", "CAPTAIN E", "CAPTAIN C", "CAPTAIN V", "EV"],
    coreMessageLead: "BUT THE OPPORTUNITY IS BIGGER:",
    coreMessageLeadAr: "لكن الفرصة أكبر:",
    shiftFrom: "FROM A VEHICLE",
    shiftFromAr: "من عربية بيشتريها صاحب الشغل",
    shiftTo: "TO A BUSINESS PARTNER",
    shiftToAr: "إلى شريك يساعد البيزنس يفضل شغال",
    punchline: "KEEP BUSINESS MOVING.",
    punchlineAr: "شغلك ما يقفش."
  },
  problem: {
    badge: "CHAPTER 02",
    badgeAr: "الفصل 02",
    title: "THE REAL PROBLEM",
    titleAr: "المشكلة الحقيقية",
    marketSpeaks: "The market is full of brands talking about:",
    marketSpeaksAr: "السوق مليان Brands بتتكلم عن:",
    marketTags: [
      { en: "HORSEPOWER", ar: "قوة المحرك" },
      { en: "PAYLOAD", ar: "الحمولة" },
      { en: "ENGINE", ar: "الموتور" },
      { en: "PRICE", ar: "السعر" },
      { en: "WARRANTY", ar: "الضمان" },
      { en: "OFFERS", ar: "العروض" }
    ],
    customerThinks: "But customers think differently:",
    customerThinksAr: "لكن العميل بيفكر بطريقة مختلفة:",
    customerQuestions: [
      { en: "Will this vehicle actually work for my business?", ar: "العربية دي هتخدمني فعلًا في شغلي؟" },
      { en: "Will it handle my workload?", ar: "هتستحمل طبيعة شغلي؟" },
      { en: "Will it save me money?", ar: "هتوفرلي؟" },
      { en: "If it breaks down, who will support me?", ar: "لو عطلت، مين هيقف جنبي؟" },
      { en: "Which model fits my business?", ar: "أنهي موديل مناسب لطبيعة شغلي؟" }
    ],
    transition: {
      from: "PRODUCT LANGUAGE",
      fromAr: "لغة المنتج",
      to: "CUSTOMER REALITY",
      toAr: "واقع العميل"
    }
  },
  positioning: {
    badge: "CHAPTER 03",
    badgeAr: "الفصل 03",
    title: "OUR POSITIONING",
    titleAr: "التموضع الاستراتيجي",
    heroText: "DONGFENG IS NOT JUST A TRUCK.",
    heroTextAr: "دونج فينج مش مجرد عربية نقل.",
    subText: "IT'S A BUSINESS PARTNER.",
    subTextAr: "دي شريك في شغلك.",
    tagline: "KEEP BUSINESS MOVING.",
    taglineAr: "شغلك ما يقفش.",
    fourPillars: [
      { en: "CARRY MORE", ar: "شيل أكتر", desc: "Engineered for maximum commercial utility", descAr: "مصممة لأعلى كفاءة في استيعاب الحمولات" },
      { en: "DELIVER MORE", ar: "وصل أكتر", desc: "Reliability that keeps delivery cycles moving", descAr: "اعتمادية تضمن استمرار دورات التوصيل" },
      { en: "EARN MORE", ar: "اكسب أكتر", desc: "Direct efficiency that protects profit margins", descAr: "كفاءة تشغيلية تحافظ على أرباح مشروعك" },
      { en: "STOP LESS", ar: "وقف أقل", desc: "Durability and after-sales backing you up", descAr: "متانة تشغيل ودعم ما بعد البيع في كل وقت" }
    ]
  },
  bigIdea: {
    badge: "CHAPTER 04",
    badgeAr: "الفصل 04",
    title: "THE BIG IDEA",
    titleAr: "الفكرة الكبيرة",
    headline: "EVERY BUSINESS HAS A LOAD TO CARRY.",
    headlineAr: "كل شغل له حمولة يشيلها.",
    subHeadline: "DONGFENG CARRIES IT WITH THEM.",
    subHeadlineAr: "ودونج فينج تشيل معاه.",
    businesses: [
      { en: "RESTAURANT", ar: "مطعم", icon: "Utensils" },
      { en: "WHOLESALE", ar: "تاجر جملة", icon: "Boxes" },
      { en: "DISTRIBUTION", ar: "شركة توزيع", icon: "Truck" },
      { en: "FACTORY", ar: "مصنع", icon: "Factory" },
      { en: "E-COMMERCE", ar: "E-Commerce", icon: "ShoppingBag" },
      { en: "SMALL BUSINESS", ar: "مشروع صغير", icon: "Store" },
      { en: "BUSINESS OWNER", ar: "صاحب شركة", icon: "Briefcase" }
    ]
  },
  communication: {
    badge: "CHAPTER 05",
    badgeAr: "الفصل 05",
    title: "BRAND COMMUNICATION",
    titleAr: "لغة الخطاب والتواصل",
    headline: "PRODUCT LANGUAGE vs. BUSINESS LANGUAGE",
    headlineAr: "لغة المنتج مقابل لغة البيزنس",
    comparisons: [
      {
        model: "CAPTAIN C",
        oldSpec: "3900cc — 140 HP",
        oldSpecAr: "3900cc — 140 HP",
        newVoice: "IF YOUR BUSINESS NEEDS TO CARRY MORE, YOUR VEHICLE SHOULD BE UP TO THE JOB.",
        newVoiceAr: "لو شغلك محتاج يشيل أكتر... لازم عربيتك تكون قد الشغل."
      },
      {
        model: "CAPTAIN V",
        oldSpec: "Cargo Vehicle",
        oldSpecAr: "Cargo Vehicle (عربة بضائع)",
        newVoice: "MORE ORDERS. SAME DAY.",
        newVoiceAr: "طلبات أكتر. في نفس اليوم."
      },
      {
        model: "EV",
        oldSpec: "Electric Vehicle",
        oldSpecAr: "عربية كهربائية",
        newVoice: "YOUR BUSINESS IS IN THE CITY? MAKE IT SMARTER.",
        newVoiceAr: "شغلك جوه المدينة؟ خليه أذكى."
      }
    ],
    takeaway: "SPECS BECOME PROOF.",
    takeawaySub: "Specifications are proof of value — not the core message itself.",
    takeawayAr: "المواصفات دليل على القيمة... وليست الرسالة نفسها."
  },
  audience: {
    badge: "CHAPTER 06",
    badgeAr: "الفصل 06",
    title: "TARGET AUDIENCE",
    titleAr: "الجمهور المستهدف",
    coreStatement: "WE ARE NOT TALKING TO TRUCK DRIVERS ONLY. WE ARE TALKING TO THE BUSINESSES THAT DEPEND ON COMMERCIAL MOBILITY.",
    coreStatementAr: "إحنا مش بنخاطب سواقين عربيات نقل بس. إحنا بنخاطب البيزنس اللي بيعتمد على العربية عشان يفضل شغال.",
    segments: [
      { num: "01", en: "BUSINESS OWNERS", ar: "أصحاب المشاريع والأعمال", desc: "Seeking reliable assets that drive profitability", descAr: "الباحثون عن أصول اعتمادية تضمن أرباح واستمرارية العمل" },
      { num: "02", en: "SME OWNERS", ar: "أصحاب المشروعات الصغيرة والمتوسطة", desc: "Entrepreneurs scaling operational capacity", descAr: "رواد أعمال يوسعون قدرتهم التشغيلية" },
      { num: "03", en: "FLEETS", ar: "الشركات التي تمتلك أساطيل", desc: "Corporate operations requiring continuous uptime", descAr: "عمليات مؤسسية تتطلب جاهزية تشغيل مستمرة" },
      { num: "04", en: "DISTRIBUTION & LOGISTICS", ar: "التوزيع واللوجستيات", desc: "High-frequency transport across supply chains", descAr: "نقل متكرر ومكثف عبر سلاسل الإمداد" },
      { num: "05", en: "RETAIL & WHOLESALE", ar: "تجار الجملة والتجزئة", desc: "Heavy stock transfer & daily marketplace runs", descAr: "نقل البضائع اليومية بين المخازن والأسواق" },
      { num: "06", en: "SERVICE BUSINESSES", ar: "شركات الخدمات", desc: "Mobile workshops, maintenance & equipment crews", descAr: "ورش متنقلة، فرق صيانة ومعدات تشغيل" },
      { num: "07", en: "DELIVERY & E-COMMERCE", ar: "التوصيل والتجارة الإلكترونية", desc: "Last-mile speed, urban agility & order density", descAr: "سرعة التوصيل للميل الأخير وحركة مرنة داخل المدن" }
    ]
  },
  productMapping: {
    badge: "CHAPTER 07",
    badgeAr: "الفصل 07",
    title: "PRODUCT TO BUSINESS MAPPING",
    titleAr: "مطابقة المنتجات مع الأعمال",
    headline: "EVERY MODEL IS A BUSINESS SOLUTION.",
    headlineAr: "كل موديل هو حل لمشكلة في البيزنس.",
    subHeadline: "DON'T ASK: \"WHAT DOES THIS VEHICLE HAVE?\" — ASK: \"WHO NEEDS THIS VEHICLE?\"",
    subHeadlineAr: "بدل ما نسأل: \"العربية دي فيها إيه؟\" نسأل: \"مين محتاج العربية دي؟\"",
    mappings: [
      {
        model: "CAPTAIN V",
        tag: "URBAN & LAST MILE",
        tagAr: "المدن والميل الأخير",
        sectorsEn: ["DELIVERY", "RETAIL", "LAST MILE", "BUSINESSES"],
        sectorsAr: ["التوصيل", "التجزئة", "Last Mile", "المشروعات"],
        summaryEn: "Designed for agile intra-city delivery with covered cargo protection and rapid loading.",
        summaryAr: "مصممة للتوصيل السريع داخل المدن مع حماية كاملة للبضائع وسرعة في التحميل والتفريغ."
      },
      {
        model: "CAPTAIN T",
        tag: "VERSATILE PICKUP",
        tagAr: "بيك أب متعدد المهام",
        sectorsEn: ["BUSINESS TRANSPORTATION", "PICKUP APPLICATIONS"],
        sectorsAr: ["نقل الأعمال", "استخدامات الـPickup"],
        summaryEn: "Versatile open-bed transportation engineered for contractors, wholesale traders, and workshops.",
        summaryAr: "نقل مفتوح متعدد الاستخدامات للمقاولين، تجار الجملة، والورش الحرفية."
      },
      {
        model: "CAPTAIN E & C",
        tag: "HEAVY-DUTY DISTRIBUTION",
        tagAr: "التوزيع والحمولات العالية",
        sectorsEn: ["HIGHER PAYLOAD", "DISTRIBUTION", "HEAVY-DUTY APPLICATIONS"],
        sectorsAr: ["حمولات أعلى", "التوزيع", "الاستخدامات الشاقة"],
        summaryEn: "Built for substantial commercial loads, inter-city distribution networks, and intensive daily duty.",
        summaryAr: "مجهزة للحمولات التجارية الثقيلة، شبكات التوزيع بين المحافظات، وشاق العمل اليومي."
      },
      {
        model: "EV",
        tag: "SMART ELECTRIC MOBILITY",
        tagAr: "التنقل الكهربائي الذكي",
        sectorsEn: ["URBAN DELIVERY", "FLEETS", "PREDICTABLE ROUTES"],
        sectorsAr: ["التوصيل داخل المدن", "الأساطيل", "المسارات المتوقعة"],
        summaryEn: "Zero-emission smart mobility optimized for structured municipal routes and forward-thinking corporate fleets.",
        summaryAr: "تنقل ذكي بدون انبعاثات مخصص للمسارات الحضرية المحددة والأساطيل المؤسسية الحديثة."
      }
    ]
  },
  contentSystem: {
    badge: "CHAPTER 08",
    badgeAr: "الفصل 08",
    title: "THE CONTENT SYSTEM",
    titleAr: "منظومة المحتوى",
    pillars: [
      {
        num: "01",
        titleEn: "BUSINESS STORIES",
        titleAr: "حكايات البيزنس",
        taglineEn: "Behind every vehicle, there is a story.",
        taglineAr: "ورا كل عربية حكاية.",
        descEn: "Real narrative documentaries chronicling Egyptian merchants, workshop founders, and logistics leaders.",
        descAr: "وثائقيات ترصد قصص كفاح ونجاح التجار المصريين، أصحاب الورش، وشركات التوزيع."
      },
      {
        num: "02",
        titleEn: "REAL WORLD TESTS",
        titleAr: "اختبارات في الحياة الحقيقية",
        taglineEn: "DONGFENG VS REAL LIFE",
        taglineAr: "دونج فينج ضد الواقع",
        descEn: "Tough tests across Egypt's toughest conditions: LOAD • ROADS • STOP & GO • DELIVERY DAY • LONG ROUTE • CITY ROUTE.",
        descAr: "تحديات واقعية على أصعب ظروف التشغيل: حمولة • طرق • توقف وتشغيل • يوم توصيل • مسافات طويلة • طرق داخل المدينة."
      },
      {
        num: "03",
        titleEn: "WHO IS THIS VEHICLE FOR?",
        titleAr: "العربية دي معمولة لمين؟",
        taglineEn: "Tell us what your business does... and we'll show you where to start.",
        taglineAr: "قولنا شغلك إيه... وإحنا نقولك تبدأ منين.",
        descEn: "Interactive matching guides for Restaurant, Distribution, Delivery, Warehouse, and Factory operations.",
        descAr: "إرشادات مطابقة عملية لأصحاب المطاعم، شركات التوزيع، الدليفري، المخازن، والمصانع."
      },
      {
        num: "04",
        titleEn: "THE CAPTAIN CHALLENGE",
        titleAr: "THE CAPTAIN CHALLENGE",
        taglineEn: "Can the vehicle survive a complete working day?",
        taglineAr: "هل العربية تستحمل يوم شغل كامل؟",
        descEn: "High-octane operational endurance tests pushing payload limits, non-stop delivery runs, and extreme summer temperatures.",
        descAr: "اختبارات تحمل حية لأقصى طاقة تشغيل، حمولات قصوى، وساعات عمل متواصلة تحت حرارة الصيف."
      },
      {
        num: "05",
        titleEn: "AFTER SALES",
        titleAr: "ما بعد البيع",
        taglineEn: "The backbone that keeps your business moving.",
        taglineAr: "العمود الفقري اللي بيحافظ على حركة شغلك.",
        descEn: "SERVICE • SPARE PARTS • MAINTENANCE • LOCATIONS • TECHNICIANS • WARRANTY • FLEET SUPPORT.",
        descAr: "خدمة • قطع غيار • صيانة • مراكز الخدمة • الفنيين • الضمان • دعم الأساطيل."
      },
      {
        num: "06",
        titleEn: "HUMAN CONTENT",
        titleAr: "المحتوى الإنساني",
        taglineEn: "THE VEHICLE MOVES THE GOODS. THE OWNER BUILDS THE BUSINESS.",
        taglineAr: "العربية بتنقل البضاعة... لكن صاحبها هو اللي بيبني البيزنس.",
        descEn: "DRIVER • OWNER • FAMILY • BUSINESS • SUCCESS • JOURNEY.",
        descAr: "السواق • صاحب العربية • العيلة • المشروع • النجاح • الرحلة."
      }
    ]
  },
  signatureSeries: {
    badge: "CHAPTER 09",
    badgeAr: "الفصل 09",
    title: "SIGNATURE SERIES",
    titleAr: "السلاسل الرئيسية",
    introEn: "8 distinct episodic video and content franchises engineered for viral business engagement.",
    introAr: "8 سلاسل محتوى دورية مصممة لبناء أعلى تفاعل ومتابعة مستمرة بين مجتمعات الأعمال.",
    series: [
      { num: "01", en: "WHAT'S YOUR BUSINESS?", ar: "شغلك إيه؟", formatEn: "Street & Market Interview Format", formatAr: "مقابلات ميدانية في الأسواق" },
      { num: "02", en: "CHOOSE YOUR VEHICLE", ar: "اختار عربيتك", formatEn: "Matchmaking & Needs Assessment", formatAr: "مطابقة الاحتياج مع الموديل" },
      { num: "03", en: "THE CAPTAIN TEST", ar: "اختبار الكابتن", formatEn: "Extreme Capability Demo", formatAr: "اختبارات قدرة وتحمل حقيقية" },
      { num: "04", en: "A DAY AT WORK", ar: "يوم شغل", formatEn: "Day-in-the-Life Documentary", formatAr: "يوم كامل في حياة صاحب عمل" },
      { num: "05", en: "LOAD YOUR BUSINESS", ar: "حمّلها شغلك", formatEn: "Practical Capacity Showcase", formatAr: "استعراض عملي لمساحة وحمولة العربية" },
      { num: "06", en: "ASK THE CAPTAIN", ar: "اسأل الكابتن", formatEn: "Technical Q&A with Master Techs", formatAr: "إجابات تقنية مباشرة مع خبراء الصيانة" },
      { num: "07", en: "NOT EVERY TRUCK FITS EVERY BUSINESS", ar: "مش كل عربية نقل مناسبة لكل شغل", formatEn: "Educational Advisory Sessions", formatAr: "جلسات توعوية لاختيار الشاحنة الأنسب" },
      { num: "08", en: "BEHIND EVERY VEHICLE THERE'S A STORY", ar: "ورا كل عربية في حكاية", formatEn: "Emotional Human Success Stories", formatAr: "قصص إنسانية ملهمة لشركاء النجاح" }
    ]
  },
  socialMix: {
    badge: "CHAPTER 10",
    badgeAr: "الفصل 10",
    title: "SOCIAL MEDIA MIX",
    titleAr: "مزيج السوشيال ميديا",
    punchlineEn: "SELL WITHOUT LOOKING LIKE A SALES CATALOGUE.",
    punchlineAr: "نبيع... من غير ما الصفحة تبان كأنها كتالوج مبيعات.",
    items: [
      { percentage: 30, color: "#E60012", labelEn: "BUSINESS / ENTERTAINMENT", labelAr: "بيزنس / ترفيه", descEn: "Engaging commercial stories, market challenges, and business banter.", descAr: "محتوى مشوق عن عالم التجارة والمشروعات وتحديات الشغل." },
      { percentage: 25, color: "#FFFFFF", labelEn: "PRODUCT & DEMONSTRATION", labelAr: "منتج وتجارب عملية", descEn: "Vehicle walkthroughs, capability tests, and payload load-outs.", descAr: "استعراض تفصيلي للموديلات وتجارب الحمولة والتشغيل." },
      { percentage: 15, color: "#C5CAD3", labelEn: "EDUCATION", labelAr: "محتوى تعليمي", descEn: "Maintenance tips, route optimization, and operational efficiency.", descAr: "نصائح صيانة، كفاءة استهلاك، وإرشادات تشغيل الأساطيل." },
      { percentage: 15, color: "#8E95A2", labelEn: "REAL CUSTOMER STORIES", labelAr: "قصص عملاء حقيقية", descEn: "Authentic journeys of fleet managers and business owners.", descAr: "تجارب واقعية لأصحاب المشروعات ومديري النقل." },
      { percentage: 10, color: "#4A5260", labelEn: "AFTER SALES", labelAr: "ما بعد البيع", descEn: "Service centers, spare parts availability, warranty, and technician spotlights.", descAr: "مراكز الخدمة، توافر قطع الغيار، الضمان، وفريق الصيانة." },
      { percentage: 5, color: "#2A303C", labelEn: "OFFERS / TACTICAL SALES", labelAr: "عروض / مبيعات مباشرة", descEn: "Timely financing promotions, trade-in programs, and fleet deals.", descAr: "عروض تمويلية موسمية، تسهيلات سداد، وصفقات أساطيل." }
    ]
  },
  heroFilm: {
    badge: "CHAPTER 11",
    badgeAr: "الفصل 11",
    title: "THE HERO FILM",
    titleAr: "الفيلم الرئيسي",
    conceptTitleEn: "KEEP BUSINESS MOVING",
    conceptTitleAr: "شغلك ما يقفش",
    storyboard: [
      { step: "01", en: "The film begins before sunrise.", ar: "الفيلم يبدأ قبل الفجر." },
      { step: "02", en: "A bakery opens.", ar: "مخبز بيفتح." },
      { step: "03", en: "A wholesaler prepares orders.", ar: "تاجر بيجهز طلباته." },
      { step: "04", en: "A worker loads.", ar: "عامل بيحمّل." },
      { step: "05", en: "A restaurant receives delivery.", ar: "مطعم بيستلم." },
      { step: "06", en: "A distribution company starts its day.", ar: "شركة توزيع بتبدأ يومها." },
      { step: "07", en: "A business owner checks the time.", ar: "صاحب مشروع بيبص على الساعة." },
      { step: "08", en: "Everyone is moving.", ar: "كل الناس بتتحرك." },
      { step: "09", en: "THEN: DONGFENG MOVES.", ar: "ثم: دونج فينج تتحرك." }
    ],
    climaxEn: "YOUR BUSINESS DOESN'T STOP.",
    climaxAr: "شغلك ما يقفش.",
    signoffEn: "DONGFENG COMMERCIAL — KEEP BUSINESS MOVING.",
    signoffAr: "DONGFENG COMMERCIAL — KEEP BUSINESS MOVING.",
    videoLabelEn: "OFFICIAL CAMPAIGN VERTICAL 9:16 PREVIEW",
    videoLabelAr: "معاينة الفيديو الرأسي الرسمي 9:16"
  },
  leadGen: {
    badge: "CHAPTER 12",
    badgeAr: "الفصل 12",
    title: "LEAD GENERATION",
    titleAr: "توليد العملاء المحتملين",
    punchlineEn: "CONTENT SHOULD NOT STOP AT VIEWS. IT SHOULD MOVE PEOPLE TOWARD ACTION.",
    punchlineAr: "المحتوى مش هدفه Views بس. المحتوى لازم ينقل العميل من المشاهدة إلى الخطوة التالية.",
    funnelSteps: [
      { step: "01", en: "CONTENT", ar: "المحتوى", icon: "Eye", descEn: "High-value business video & reels", descAr: "فيديوهات وسلاسل محتوى ملهمة" },
      { step: "02", en: "META / TIKTOK ADS", ar: "إعلانات META / TIKTOK", icon: "Target", descEn: "Hyper-targeted B2B & SME campaigns", descAr: "حملات إعلانية دقيقة لأصحاب الأعمال" },
      { step: "03", en: "LANDING PAGE / WHATSAPP", ar: "Landing Page / WhatsApp", icon: "MessageSquare", descEn: "Frictionless interactive touchpoints", descAr: "قنوات تفاعلية فورية ومباشرة" },
      { step: "04", en: "QUALIFICATION", ar: "تأهيل العميل", icon: "CheckCircle", descEn: "Smart diagnostic filter by business load", descAr: "فلترة ذكية لتحديد الاحتياج الفعلي" },
      { step: "05", en: "SALES", ar: "المبيعات", icon: "Users", descEn: "Consultative commercial advisory", descAr: "استشارة مبيعات تجارية متخصصة" },
      { step: "06", en: "TEST DRIVE", ar: "تجربة قيادة", icon: "Key", descEn: "Real-world commercial experience", descAr: "تجربة قيادة عملية في بيئة العمل" },
      { step: "07", en: "QUOTATION", ar: "عرض سعر", icon: "FileText", descEn: "Custom financing & fleet pricing", descAr: "عرض سعر مخصص وخطة تمويل" },
      { step: "08", en: "SALE", ar: "بيع", icon: "Award", descEn: "Vehicle delivery & long-term partnership", descAr: "تسليم الشاحنة وبدء الشراكة" }
    ]
  },
  leadForm: {
    badge: "CHAPTER 13",
    badgeAr: "الفصل 13",
    title: "SMART LEAD FORM",
    titleAr: "نموذج التأهيل الذكي",
    headlineEn: "STOP COLLECTING NUMBERS. START COLLECTING QUALIFIED LEADS.",
    headlineAr: "بطل تجمع أرقام. ابدأ تجمع عملاء مؤهلين.",
    subHeadlineEn: "QUALIFIED LEAD — NOT JUST A PHONE NUMBER.",
    subHeadlineAr: "عميل مؤهل... مش مجرد رقم تليفون.",
    questions: [
      { id: "q1", en: "WHAT IS YOUR BUSINESS?", ar: "نوع شغلك إيه؟", placeholderEn: "e.g. Distribution, Restaurant, Wholesale...", placeholderAr: "مثال: توزيع، مطاعم، تجارة جملة..." },
      { id: "q2", en: "WHICH GOVERNORATE?", ar: "المحافظة؟", placeholderEn: "e.g. Cairo, Giza, Alexandria, Delta...", placeholderAr: "مثال: القاهرة، الجيزة، الإسكندرية، الدلتا..." },
      { id: "q3", en: "WHAT DO YOU TRANSPORT?", ar: "بتنقل إيه؟", placeholderEn: "e.g. Food supplies, FMCG, Building materials...", placeholderAr: "مثال: مواد غذائية، بضائع تجارية، مواد بناء..." },
      { id: "q4", en: "AVERAGE LOAD?", ar: "متوسط الحمولة؟", placeholderEn: "e.g. 1 Ton, 2.5 Tons, 4+ Tons...", placeholderAr: "مثال: 1 طن، 2.5 طن، 4+ طن..." },
      { id: "q5", en: "CITY OR LONG DISTANCE?", ar: "داخل المدينة ولا سفر؟", placeholderEn: "e.g. Intra-City, Inter-Governorate...", placeholderAr: "مثال: داخل المدينة، بين المحافظات..." },
      { id: "q6", en: "DO YOU CURRENTLY OWN A VEHICLE?", ar: "عندك عربية حاليًا؟", placeholderEn: "Yes / No / Looking to replace or expand", placeholderAr: "نعم / لا / أرغب في التوسعة أو التحديث" },
      { id: "q7", en: "HOW MANY VEHICLES DO YOU NEED?", ar: "محتاج كام عربية؟", placeholderEn: "1 Vehicle / 2-4 / 5+ Fleet", placeholderAr: "عربية واحدة / 2-4 / 5+ أسطول" },
      { id: "q8", en: "CASH OR FINANCING?", ar: "شراء Cash ولا Financing؟", placeholderEn: "Cash / Installments / Corporate Fleet Financing", placeholderAr: "كاش / تقسيط / تمويل أساطيل شركات" }
    ]
  },
  websiteExperience: {
    badge: "CHAPTER 14",
    badgeAr: "الفصل 14",
    title: "WEBSITE EXPERIENCE",
    titleAr: "موقع الويب التفاعلي",
    headlineEn: "FIND YOUR DONGFENG",
    headlineAr: "اختار دونج فينج المناسبة لشغلك",
    questionEn: "WHAT KIND OF BUSINESS DO YOU RUN?",
    questionAr: "إيه طبيعة شغلك؟",
    categories: [
      { id: "delivery", en: "DELIVERY", ar: "توصيل", model: "CAPTAIN V", descEn: "Optimal for parcel delivery, express logistics & e-commerce", descAr: "الأمثل للدليفري السريع، طرود التجارة الإلكترونية والبريد" },
      { id: "distribution", en: "DISTRIBUTION", ar: "توزيع", model: "CAPTAIN E / C", descEn: "Heavy-duty multi-drop route distribution across Cairo & Governorates", descAr: "توزيع البضائع والمشروبات والمواد الغذائية بين المحافظات" },
      { id: "retail", en: "RETAIL", ar: "تجزئة", model: "CAPTAIN V / T", descEn: "Versatile stock replenishment from wholesale markets to shops", descAr: "نقل وتغذية المحلات اليومية من أسواق الجملة" },
      { id: "construction", en: "CONSTRUCTION", ar: "مقاولات", model: "CAPTAIN T / C", descEn: "Rugged durability for equipment, tools, and heavy raw materials", descAr: "تحمل فائق لنقل المعدات، الأدوات، ومواد البناء والتشطيب" },
      { id: "factory", en: "FACTORY", ar: "مصنع", model: "CAPTAIN C", descEn: "High-capacity logistics linking manufacturing plants with distribution hubs", descAr: "ربط خطوط الإنتاج بمستودعات ومراكز التوزيع الكبرى" },
      { id: "passenger", en: "PASSENGER", ar: "نقل ركاب", model: "CAPTAIN V PASSENGER", descEn: "Comfortable, economical corporate employee & shuttle transport", descAr: "نقل العاملين وموظفي الشركات برحابة واقتصادية عالية" },
      { id: "fleet", en: "FLEET", ar: "أسطول", model: "EV & CAPTAIN SERIES", descEn: "Integrated commercial vehicle solutions with full telematics & service contracts", descAr: "حلول متكاملة للأساطيل الكبيرة مع عقود صيانة وإدارة تشغيل" }
    ],
    ctas: [
      { en: "BOOK A TEST DRIVE", ar: "احجز تجربة قيادة" },
      { en: "TALK TO SALES", ar: "تحدث مع المبيعات" },
      { en: "WHATSAPP US", ar: "تواصل معنا عبر WhatsApp" }
    ]
  },
  offlineStrategy: {
    badge: "CHAPTER 15",
    badgeAr: "الفصل 15",
    title: "OFFLINE STRATEGY",
    titleAr: "الاستراتيجية الميدانية",
    headlineEn: "DON'T WAIT FOR THE CUSTOMER. GO TO THE BUSINESS.",
    headlineAr: "ما نستناش العميل. نروحله.",
    conceptNameEn: "DONGFENG BUSINESS TOUR",
    conceptNameAr: "DONGFENG BUSINESS TOUR",
    introEn: "We don't wait for business owners to come to the showroom. We bring Dongfeng to their world.",
    introAr: "مش هنستنى صاحب الشغل ييجيلنا الـShowroom. إحنا هنجيب Dongfeng لعالم شغله.",
    hubs: [
      { en: "WHOLESALE MARKETS", ar: "أسواق الجملة", descEn: "Direct engagement at Al Obour, 6th of October & Rod El Farag hubs", descAr: "تواجد مباشر في سوق العبور، 6 أكتوبر، وأسواق الجملة الكبرى" },
      { en: "INDUSTRIAL ZONES", ar: "المناطق الصناعية", descEn: "Tenth of Ramadan, Sadat City, Borg El Arab & Ain Sokhna", descAr: "العاشر من رمضان، مدينة السادات، برج العرب، والعين السخنة" },
      { en: "FACTORIES", ar: "المصانع", descEn: "Dedicated on-site presentations for factory transport managers", descAr: "لقاءات ميدانية مخصصة لمديري الحركة والنقل بالمصانع" },
      { en: "LOGISTICS HUBS", ar: "مناطق اللوجستيات", descEn: "Dry ports, cargo transit centers & warehousing zones", descAr: "الموانئ الجافة، مراكز الشحن، ومجمعات التخزين" },
      { en: "DISTRIBUTION WAREHOUSES", ar: "مخازن التوزيع", descEn: "Central hubs for FMCG, retail & cold storage networks", descAr: "المستودعات المركزية لشركات الأغذية والتوزيع السريع" },
      { en: "TRADER COMMUNITIES", ar: "تجمعات التجار", descEn: "Commercial associations, trade syndicate gatherings & craft centers", descAr: "الغرف التجارية، روابط التجار، والمجمعات الحرفية المتخصصة" }
    ]
  },
  mobileShowroom: {
    badge: "CHAPTER 16",
    badgeAr: "الفصل 16",
    title: "MOBILE SHOWROOM",
    titleAr: "المعرض المتنقل",
    headlineEn: "THE SHOWROOM COMES TO THE BUSINESS.",
    headlineAr: "الـShowroom يروح للعميل.",
    programNameEn: "DONGFENG BUSINESS EXPERIENCE",
    programNameAr: "DONGFENG BUSINESS EXPERIENCE",
    formula: [
      { en: "TRUCK", ar: "العربية", descEn: "Full live vehicle on display", descAr: "الشاحنة بكامل تجهيزاتها" },
      { en: "BRANDING", ar: "Branding", descEn: "High-end mobile lounge & specs display", descAr: "هوية بصرية متميزة ومساحة عرض أنيقة" },
      { en: "SALES TEAM", ar: "فريق المبيعات", descEn: "Commercial advisors ready with instant solutions", descAr: "مستشارون تجاريون جاهزون بالإجابات والحلول" }
    ],
    experiencePoints: [
      { en: "VEHICLE", ar: "العربية" },
      { en: "SPECS", ar: "المواصفات" },
      { en: "PAYLOAD", ar: "الحمولة" },
      { en: "EQUIPMENT", ar: "التجهيزات" },
      { en: "TEST DRIVE", ar: "تجربة قيادة" }
    ]
  },
  captainDay: {
    badge: "CHAPTER 17",
    badgeAr: "الفصل 17",
    title: "CAPTAIN DAY",
    titleAr: "كابتن داي",
    headlineEn: "SECTOR-SPECIFIC COMMERCIAL ACTIVATION DAYS",
    headlineAr: "فعاليات تجارية متخصصة لكل قطاع",
    sectors: [
      { en: "CAPTAIN DAY DISTRIBUTION", ar: "CAPTAIN DAY للتوزيع", descEn: "Focused on high-payload logistics & multi-stop routes", descAr: "مخصص لشركات التوزيع وسلاسل الإمداد" },
      { en: "CAPTAIN DAY RETAIL", ar: "CAPTAIN DAY للتجزئة", descEn: "Tailored for store owners, wholesalers & fast supply", descAr: "مخصص لتجار الجملة والتجزئة وسرعة الإمداد" },
      { en: "CAPTAIN DAY LOGISTICS", ar: "CAPTAIN DAY للوجستيات", descEn: "Engineered for freight forwarders & 3PL operators", descAr: "مخصص لشركات الشحن والخدمات اللوجستية" },
      { en: "CAPTAIN DAY SMEs", ar: "CAPTAIN DAY للمشروعات الصغيرة والمتوسطة", descEn: "Accessible financing & vehicle right-sizing for small business", descAr: "مخصص لرواد الأعمال والمشروعات الصاعدة" },
      { en: "CAPTAIN DAY FLEETS", ar: "CAPTAIN DAY للأساطيل", descEn: "Corporate fleet procurement, bulk pricing & lifecycle SLA", descAr: "مخصص لمديري الأساطيل والصفقات المؤسسية" }
    ],
    components: [
      { en: "PRODUCT DEMO", ar: "عرض المنتج" },
      { en: "TEST DRIVE", ar: "تجربة قيادة" },
      { en: "BUSINESS TALK", ar: "Business Talk" },
      { en: "FINANCE", ar: "تمويل" },
      { en: "AFTER SALES", ar: "ما بعد البيع" },
      { en: "SALES OFFERS", ar: "عروض مبيعات" }
    ]
  },
  fleetSolutions: {
    badge: "CHAPTER 18",
    badgeAr: "الفصل 18",
    title: "FLEET SOLUTIONS",
    titleAr: "حلول الأساطيل",
    headlineEn: "DONGFENG FLEET SOLUTIONS",
    headlineAr: "DONGFENG FLEET SOLUTIONS",
    punchlineEn: "FROM ONE VEHICLE TO A COMPLETE FLEET.",
    punchlineAr: "من عربية واحدة... إلى أسطول متكامل.",
    tiers: [
      { tier: "1 VEHICLE", tierAr: "عربية واحدة", descEn: "Single vehicle business owner foundation", descAr: "أساس انطلاق المشروعات الفردية والناشئة" },
      { tier: "5 VEHICLES", tierAr: "5 عربيات", descEn: "Growing SME commercial mobility", descAr: "توسعة أسطول الشركات الصغيرة والمتوسطة" },
      { tier: "10 VEHICLES", tierAr: "10 عربيات", descEn: "Medium enterprise regional operations", descAr: "عمليات تشغيل إقليمية للشركات المتوسطة" },
      { tier: "20+ VEHICLES", tierAr: "20+ عربية", descEn: "Full enterprise corporate distribution fleet", descAr: "أساطيل مؤسسية كبرى وشبكات توزيع على مستوى الجمهورية" }
    ],
    offerings: [
      { en: "FLEET PRICING", ar: "أسعار الأساطيل", icon: "DollarSign" },
      { en: "SERVICE PLAN", ar: "خطة خدمة", icon: "Clock" },
      { en: "MAINTENANCE", ar: "صيانة", icon: "Wrench" },
      { en: "SPARE PARTS", ar: "قطع غيار", icon: "Cpu" },
      { en: "ACCOUNT MANAGER", ar: "Account Manager", icon: "UserCheck" },
      { en: "DRIVER TRAINING", ar: "تدريب السائقين", icon: "ShieldCheck" },
      { en: "PRIORITY SUPPORT", ar: "دعم بأولوية", icon: "Zap" }
    ]
  },
  competition: {
    badge: "CHAPTER 19",
    badgeAr: "الفصل 19",
    title: "COMPETITIVE LANDSCAPE",
    titleAr: "المشهد التنافسي",
    competitors: [
      { name: "MITSUBISHI FUSO", categoryEn: "Japanese Heritage Heavy/Medium Trucks", categoryAr: "شاحنات يابانية عريقة متوسطة وثقيلة" },
      { name: "FOTON / TVD", categoryEn: "Chinese Commercial Segment Player", categoryAr: "منافس تجاري صيني في السوق المحلي" },
      { name: "CHEVROLET N-SERIES", categoryEn: "Established Market Legacy Brand", categoryAr: "علامة تقليدية ذات انتشار واسع وقديم" },
      { name: "JMC / OTHER COMMERCIAL PLAYERS", categoryEn: "Budget Commercial Pickups & Trucks", categoryAr: "خيارات اقتصادية في فئات النقل الخفيف" }
    ],
    analysisPillars: [
      { en: "CATEGORY", ar: "الفئة" },
      { en: "APPLICATION", ar: "الاستخدام" },
      { en: "POSITIONING", ar: "التموضع" },
      { en: "SERVICE", ar: "الخدمة" },
      { en: "PORTFOLIO", ar: "الـPortfolio" }
    ],
    strategicTakeawayEn: "THE OPPORTUNITY IS NOT TO SAY: \"WE ARE BETTER.\" THE OPPORTUNITY IS TO MAKE DONGFENG DIFFERENT IN HOW IT UNDERSTANDS AND SERVES BUSINESS.",
    strategicTakeawayAr: "الفرصة مش إننا نقول: \"إحنا أحسن.\" الفرصة إننا نخلي Dongfeng مختلفة في طريقة فهمها وخدمتها للبيزنس."
  },
  influencers: {
    badge: "CHAPTER 20",
    badgeAr: "الفصل 20",
    title: "INFLUENCER STRATEGY",
    titleAr: "استراتيجية المؤثرين",
    punchlineEn: "WE DON'T NEED THE BIGGEST AUDIENCE. WE NEED THE RIGHT AUDIENCE.",
    punchlineAr: "مش محتاجين أكبر جمهور... محتاجين الجمهور الصح.",
    categories: [
      {
        categoryEn: "AUTOMOTIVE",
        categoryAr: "Automotive (عالم السيارات)",
        focusEn: "Specs • Reviews • Tests",
        focusAr: "مواصفات • Reviews • اختبارات",
        descEn: "Credible automotive journalists delivering thorough durability reviews and payload benchmarks.",
        descAr: "صحفيو وخبراء سيارات يقدمون تقييمات موضوعية دقيقة واختبارات حمولة حية."
      },
      {
        categoryEn: "BUSINESS",
        categoryAr: "Business (رواد الأعمال)",
        focusEn: "Entrepreneurs • SMEs",
        focusAr: "رواد الأعمال • المشروعات الصغيرة والمتوسطة",
        descEn: "Commercial mentors discussing business unit economics, asset ROI, and scaling logistics.",
        descAr: "صناع محتوى اقتصادي يتناولون جدوى الاستثمار، كفاءة الأصول، وتوسيع العمليات."
      },
      {
        categoryEn: "LOGISTICS",
        categoryAr: "Logistics (النقل واللوجستيات)",
        focusEn: "Transportation • Fleet",
        focusAr: "النقل • الأساطيل",
        descEn: "Supply chain practitioners sharing real fleet management insights and dispatch efficiency.",
        descAr: "متخصصو سلاسل الإمداد يشاركون تجارب إدارة الأساطيل وتحسين مسارات النقل."
      },
      {
        categoryEn: "LOCAL CREATORS",
        categoryAr: "Local Creators (الأسواق المحلية)",
        focusEn: "Regional markets • Local businesses",
        focusAr: "الأسواق المحلية • أصحاب الأعمال",
        descEn: "Governorate-based voices reporting directly from wholesale markets and merchant squares.",
        descAr: "أصوات محلية من قلب المحافظات وأسواق الجملة وتجمعات التجار."
      },
      {
        categoryEn: "MICRO-INFLUENCERS",
        categoryAr: "Micro-Influencers (المجتمعات المتخصصة)",
        focusEn: "Specialized commercial audiences",
        focusAr: "جمهور متخصص في العربيات التجارية",
        descEn: "Hyper-focused niche creators followed by workshop mechanics, cargo drivers, and transport contractors.",
        descAr: "مؤثرون متخصصون جداً يتابعهم سائقو النقل، مقاولو الشحن، وفنيو الصيانة."
      }
    ]
  },
  paidMedia: {
    badge: "CHAPTER 21",
    badgeAr: "الفصل 21",
    title: "PAID MEDIA",
    titleAr: "الإعلانات المدفوعة",
    budgetSplit: [
      { percentage: 40, stageEn: "AWARENESS", stageAr: "وعي بالعلامة", metricsEn: "Video Views • Reach", metricsAr: "مشاهدات فيديو • Reach", descEn: "Broad commercial reach establishing Dongfeng's commanding market arrival.", descAr: "انتشار واسع لتثبيت مكانة دونج فينج كشريك الأعمال الأول." },
      { percentage: 30, stageEn: "CONSIDERATION", stageAr: "Consideration (الاهتمام والمفاضلة)", metricsEn: "Traffic • Engagement • Model Interest", metricsAr: "Traffic • Engagement • اهتمام بالموديلات", descEn: "Sector-specific ads driving visits to model pages and business selectors.", descAr: "إعلانات موجهة حسب قطاع العمل لزيارة صفحات الموديلات وتحديد الاحتياج." },
      { percentage: 30, stageEn: "CONVERSION", stageAr: "Conversion (التحويل المباشر)", metricsEn: "Leads • WhatsApp • Test Drives", metricsAr: "Leads • WhatsApp • Test Drives", descEn: "High-intent lead generation, WhatsApp click-to-chat, and test drive bookings.", descAr: "حملات توليد عملاء مؤهلين، محادثات واتساب، وحجز تجارب القيادة." }
    ],
    retargetingLoops: [
      { triggerEn: "WATCHED VIDEO", triggerAr: "شاهد الفيديو", actionEn: "MODEL AD", actionAr: "إعلان الموديل الأنسب" },
      { triggerEn: "VISITED WEBSITE", triggerAr: "دخل الموقع", actionEn: "TEST DRIVE", actionAr: "دعوة تجربة قيادة" },
      { triggerEn: "OPENED WHATSAPP", triggerAr: "فتح WhatsApp", actionEn: "SALES FOLLOW-UP", actionAr: "متابعة فورية من المبيعات" }
    ]
  },
  roadmap: {
    badge: "CHAPTER 22",
    badgeAr: "الفصل 22",
    title: "90 DAYS ROADMAP",
    titleAr: "خطة الـ 90 يوم",
    months: [
      {
        monthNum: "01",
        nameEn: "BUILD TRUST",
        nameAr: "BUILD TRUST (بناء الثقة)",
        focusEn: "Brand Introduction • Models • Business Problems • After Sales • Hero Film • Creators",
        focusAr: "التعريف بالعلامة • الموديلات • مشاكل البيزنس • ما بعد البيع • Hero Film • Creators",
        descEn: "Launch the strategic repositioning, premiere the Hero Film, establish after-sales credibility, and activate authoritative creators.",
        descAr: "إطلاق التموضع الجديد، عرض الفيلم الرئيسي، إبراز قوة شبكة ما بعد البيع، وإشراك صناع المحتوى المؤثرين."
      },
      {
        monthNum: "02",
        nameEn: "PROVE IT",
        nameAr: "PROVE IT (إثبات الكفاءة)",
        focusEn: "Real Tests • Customer Stories • Captain Challenge • Business Tour • Test Drives",
        focusAr: "اختبارات حقيقية • قصص العملاء • Captain Challenge • Business Tour • تجارب قيادة",
        descEn: "Take the trucks to Egypt's wholesale markets, run the Captain Challenge under heavy load, and publish real merchant documentaries.",
        descAr: "النزول إلى الأسواق الميدانية، تنفيذ تحدي الكابتن تحت أقصى حمولة، ونشر وثائقيات واقعية مع التجار."
      },
      {
        monthNum: "03",
        nameEn: "SELL IT",
        nameAr: "SELL IT (إغلاق المبيعات)",
        focusEn: "Lead Generation • Fleet Campaign • Test Drive Campaign • Retargeting • Offers • Sales Conversion",
        focusAr: "Lead Generation • Fleet Campaign • Test Drive Campaign • Retargeting • Offers • Sales Conversion",
        descEn: "Accelerate full-funnel conversion campaigns, close enterprise fleet deals, offer seasonal financing packages, and maximize showroom deliveries.",
        descAr: "تكثيف حملات التحويل، إبرام صفقات الأساطيل، تقديم عروض التمويل، وتحقيق أعلى معدلات تسليم."
      }
    ]
  },
  kpiDashboard: {
    badge: "CHAPTER 23",
    badgeAr: "الفصل 23",
    title: "KPI DASHBOARD",
    titleAr: "لوحة مؤشرات الأداء",
    categories: [
      {
        categoryEn: "BRAND",
        categoryAr: "العلامة التجارية",
        metricsEn: ["Reach", "Video Views", "Watch Time", "Engagement", "Brand Searches"],
        metricsAr: ["Reach", "مشاهدات الفيديو", "Watch Time", "Engagement", "عمليات البحث عن العلامة"]
      },
      {
        categoryEn: "CONSIDERATION",
        categoryAr: "Consideration (الاهتمام)",
        metricsEn: ["Website Visits", "Model Page Visits", "WhatsApp Conversations", "Test Drive Requests"],
        metricsAr: ["زيارات الموقع", "زيارات صفحات الموديلات", "محادثات WhatsApp", "طلبات تجربة القيادة"]
      },
      {
        categoryEn: "SALES",
        categoryAr: "المبيعات",
        metricsEn: ["Qualified Leads", "Cost Per Qualified Lead", "Showroom Visits", "Test Drives", "Quotations", "Conversions"],
        metricsAr: ["عملاء مؤهلون", "تكلفة العميل المؤهل", "زيارات الـShowroom", "تجارب القيادة", "عروض الأسعار", "التحويلات"]
      },
      {
        categoryEn: "FLEET",
        categoryAr: "الأساطيل",
        metricsEn: ["Fleet Leads", "Meetings", "Quotes", "Vehicles / Deal"],
        metricsAr: ["عملاء الأساطيل", "الاجتماعات", "عروض الأسعار", "عدد السيارات / الصفقة"]
      }
    ]
  },
  bigDifference: {
    badge: "CHAPTER 24",
    badgeAr: "الفصل 24",
    title: "THE BIG DIFFERENCE",
    titleAr: "الفرق الحقيقي",
    contrasts: [
      {
        marketEn: "THE MARKET MAY SAY: \"IT'S A TRUCK.\"",
        marketAr: "السوق ممكن يقول: \"دي عربية نقل.\"",
        weSayEn: "WE SAY: \"IT'S A BUSINESS TOOL.\"",
        weSayAr: "إحنا نقول: \"دي أداة شغلك.\""
      },
      {
        marketEn: "THE MARKET TALKS ABOUT: ENGINE",
        marketAr: "السوق بيتكلم عن: الموتور.",
        weSayEn: "WE TALK ABOUT: BUSINESS.",
        weSayAr: "إحنا بنتكلم عن: البيزنس."
      },
      {
        marketEn: "THE MARKET SELLS: A VEHICLE.",
        marketAr: "السوق بيبيع: عربية.",
        weSayEn: "WE BUILD: A BUSINESS PARTNERSHIP.",
        weSayAr: "إحنا بنبني: شراكة في البيزنس."
      }
    ]
  },
  finalThought: {
    badge: "CONCLUSION",
    badgeAr: "الخاتمة",
    title: "FINAL BRAND THOUGHT",
    titleAr: "الرؤية الختامية",
    brandName: "DONGFENG COMMERCIAL",
    brandNameAr: "DONGFENG COMMERCIAL",
    tagline1En: "YOUR BUSINESS HAS A LOAD TO CARRY.",
    tagline1Ar: "شغلك له حمولة.",
    tagline2En: "AND WE'RE READY TO CARRY IT WITH YOU.",
    tagline2Ar: "وإحنا جاهزين نشيلها معاك.",
    punchline: "KEEP BUSINESS MOVING.",
    punchlineAr: "KEEP BUSINESS MOVING.",
    presenterNoteEn: "Strategic Marketing Proposal developed for Dongfeng Commercial Egypt Executive Leadership.",
    presenterNoteAr: "استراتيجية تسويقية متكاملة تم إعدادها للإدارة العليا لشركة دونج فينج التجارية مصر."
  },
  leadershipSpotlight: {
    tagEn: "STRATEGIC LEADERSHIP & EXECUTION",
    tagAr: "القيادة الاستراتيجية والتنفيذ",
    nameEn: "Mostafa Fouad",
    nameAr: "مصطفى فؤاد",
    titleEn: "Managing Director • ProMedia",
    titleAr: "المدير العام • بروميديا",
    quoteEn: "Commercial mobility in Egypt is not about horsepower on paper. It is about whether a business owner can deliver goods before sunset, protect profit margins, and trust a partner when roads get tough. Dongfeng 2026 is engineered around that exact reality.",
    quoteAr: "النقل التجاري في مصر مش مجرد أرقام محركات على الورق. الحقيقة إن صاحب الشغل محتاج يعرف هل هيقدر يوصل بضاعته قبل ما اليوم يخلص، يحافظ على مكسبه، ويلاقي شريك حقيقي يثق فيه لما الشغل يضغط. استراتيجية دونج فينج 2026 مبنية بالكامل على هذا الواقع."
  }
};
