import { CourseModule, PricingPlan, FAQItem, StudentWork, AITool, TargetAudience, Mentor, Testimonial, PromptPreset } from './types';

// Images
import heroImg from './assets/images/hero_ai_design_1784902820382.jpg';
import mentorImg from './assets/images/mentor_portrait_1784902836982.jpg';
import art1 from './assets/images/ai_artwork_1_1784902858358.jpg';
import art2 from './assets/images/ai_artwork_2_1784902876456.jpg';
import art3 from './assets/images/ai_artwork_3_1784902892159.jpg';
import art4 from './assets/images/ai_artwork_4_1784902907974.jpg';
import musicHologramImg from './assets/images/music_hologram_man_1785000238713.jpg';

export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe3FTfqFWL5bi-4cBwRzhmHp7djpNnP44d1bYxoyQNWAcpoJw/viewform?usp=header";

export const CONTACT_INFO = {
  phone: "+998 99 807 62 75",
  phoneRaw: "+998998076275",
  telegram: "@asom_uz",
  telegramUrl: "https://t.me/asom_uz",
  instagram: "@asom.designer",
  instagramUrl: "https://www.instagram.com/asom.designer/",
  youtube: "@Asom.teacher",
  youtubeUrl: "https://www.youtube.com/@Asom.teacher"
};

export const IMAGES = {
  hero: heroImg,
  mentor: mentorImg,
  billboard: musicHologramImg,
  artworks: [musicHologramImg, art1, art2, art3, art4]
};

export const COURSE_STATS = [
  { value: "100+", label: "O'quvchi va Shogirdlar Soni", badge: "Muvaffaqiyatli Bitiruvchilar" },
  { value: "100+", label: "Shogird O'z Ishini va Frilansni Boshladi", badge: "Amaliy Natija" },
  { value: "1,200+", label: "Yaratilgan AI Loyihalar", badge: "Portfolio Tayyor" },
  { value: "10x", label: "Dizayn Tayyorlash Tezligi", badge: "Samaradorlik" },
];

export const AI_TOOLS: AITool[] = [
  {
    name: "Midjourney v6",
    description: "Dunyodagi eng mukammal AI vizuallash neyrotarmog'i. Fotorealizm, brending va konsept artlar yaratish.",
    category: "AI Generation",
    logo: "🎨",
    accentColor: "from-purple-500 to-indigo-600",
    popularUses: ["Fotorealizm", "Konsept Art", "Logotip g'oyalari", "3D Mascot"]
  },
  {
    name: "Adobe Firefly & Photoshop AI",
    description: "Professional dizaynerlar uchun neyrotarmoqlar. Generative Fill, kengaytirish va vektor tahrir.",
    category: "Editing & Vector",
    logo: "🔥",
    accentColor: "from-amber-500 to-red-600",
    popularUses: ["Generative Fill", "Obyekt qo'shish/o'chirish", "Vektorlashtirish"]
  },
  {
    name: "Canva AI & Magic Studio",
    description: "SMM dizayn, taqdimot va ijtimoiy tarmoqlar uchun daqiqalar ichida tayyor kontent yaratish.",
    category: "SMM & Layout",
    logo: "✨",
    accentColor: "from-cyan-400 to-blue-600",
    popularUses: ["SMM Karusel", "Bannerlar", "Afishalar", "Reels Muqovalari"]
  },
  {
    name: "ChatGPT-4o Prompt Pro",
    description: "Dizayn g'oyalari, mijoz brifi, matnlar va Midjourney uchun mukammal promtlar tuzuvchi yordamchi.",
    category: "Prompt & Logic",
    logo: "⚡",
    accentColor: "from-emerald-400 to-teal-600",
    popularUses: ["Prompt muandisligi", "Brending konsepsiyasi", "Reklama matnlari"]
  },
  {
    name: "Leonardo AI",
    description: "O'yinlar, 3D elementlar va brendlar uchun nazorat qilinuvchi AI modellari va izometriya.",
    category: "3D & Game Assets",
    logo: "🦁",
    accentColor: "from-pink-500 to-rose-600",
    popularUses: ["3D Belgilar", "O'yin grafikasi", "Teksturalar"]
  },
  {
    name: "Vectorize AI & Magnific AI",
    description: "Tasvirlarni ultra HD sifatga oshirish (upscale) va avtomatik SVG vektor formatiga o'tkazish.",
    category: "Upscaling & Vector",
    logo: "🚀",
    accentColor: "from-violet-500 to-purple-600",
    popularUses: ["HD Upscale", "SVG Vektorlashtirish", "Tipografiya"]
  }
];

export const TARGET_AUDIENCE: TargetAudience[] = [
  {
    title: "Noldan Boshlovchilar",
    description: "Dizayn yoki rasomlik tajribangiz bo'lmasa ham, AI yordamida birinchi haftadanoq professional dizaynlar yarata olasiz.",
    iconName: "Sparkles",
    badge: "Oson Boshlash"
  },
  {
    title: "Grafik Dizaynerlar",
    description: "Ishingizni 10 barobar tezlashtiring, mijozlarga unikal variantlar taklif qiling va xizmat narxini oshiring.",
    iconName: "Palette",
    badge: "Professional O'sish"
  },
  {
    title: "SMM va Kopirayterlar",
    description: "Dizayner kutmasdan ijtimoiy tarmoqlar uchun trenddagi vizuallar, reklama maketlari va karusellar tayyorlang.",
    iconName: "Share2",
    badge: "SMM Mutaxassislarga"
  },
  {
    title: "Frilanser va Biznes Egalari",
    description: "O'z brendingizni mustaqil yarating yoki Upwork/Fiverr platformalarida dollarda daromad olishni boshlang.",
    iconName: "Briefcase",
    badge: "Yuqori Daromad"
  }
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: "1-Modul: Sun'iy Intellekt Asoslari va Prompt Muhandisligi",
    subtitle: "AI vositalari bilan to'g'ri muloqot va professional promtlar tuzish",
    duration: "1 Hafta",
    description: "Ushbu modulda siz AI neyrotarmoqlarining ishlash prinsiplari, algoritmlari va mukammal prompt tuzish formulalarini o'rganasiz.",
    lessonsCount: 6,
    topics: [
      "Generativ AI vositalari sharhi (Midjourney, DALL-E 3, Firefly, Leonardo)",
      "Prompt tuzish strukturasi: Subyekt, Uslub, Yoritish, Kamera, Parametrlar",
      "ChatGPT-4o yordamida Midjourney va Firefly uchun eksklyuziv promptlar avtogeneratsiyasi",
      "Negative Promptlar va kutilmagan xatoliklarni bartaraf etish",
      "Rang nazariyasi va kompozitsiyani AI ga to'g'ri tushuntirish"
    ],
    project: "10 xil uslubda unikal AI vizual konseptlarini yaratish va promtlar bazasini shakllantirish.",
    toolsUsed: ["ChatGPT 4o", "Midjourney v6", "Claude AI"],
    icon: "BrainCircuit"
  },
  {
    id: 2,
    title: "2-Modul: Midjourney v6 Chuqur O'rganish va Fotorealizm",
    subtitle: "Professional fotorealistik kadrlar, stilizatsiya va renderlash",
    duration: "1.5 Hafta",
    description: "Midjourney v6 ning barcha maxfiy buyruqlari, stil parametrlari (--ar, --stylize, --chaos, --weird, --v 6) va tasvirlarni nazorat qilish.",
    lessonsCount: 8,
    topics: [
      "Midjourney v6 buyruqlari va maxfiy parametrlari",
      "Obyektlarni bir xil personaj (Character Consistency) qilib saqlash (--cref)",
      "Uslublarni birlashtirish va Style Reference (--sref)",
      "Inpainting va Vary Region orqali rasmning muayyan qismini o'zgartirish",
      "Kiyim, interyer, arxitektura va avtomobil dizayni vizuallari"
    ],
    project: "Yuqori modellik kiyim-kechak brendi uchun to'liq fotorealistik foto-sessiya va katalog yaratish.",
    toolsUsed: ["Midjourney v6", "Discord Pro", "Upscaler"],
    icon: "Camera"
  },
  {
    id: 3,
    title: "3-Modul: AI Bilan Logotip Yaratish va Firmenniy Stil",
    subtitle: "Minimalistik, 3D, neon va vektor logotiplar hamda brendbuk",
    duration: "1 Hafta",
    description: "Kompaniya va brendlar uchun unikal logotiplar, firmenniy stil atributlari hamda ularni vektorlashtirish texnikasi.",
    lessonsCount: 7,
    topics: [
      "Logotip turlari: Monogramma, Mascot, Vektor symbol, Typography",
      "AI yordamida 100+ unikal logotip konseptlarini sekundlar ichida olish",
      "Logotiplarni Vectorize AI orqali toza SVG vektorga o'tkazish",
      "Mokap (Mockup) lar yaratish: Vizitka, t-shirt, qadoq, bilbordlar",
      "Brendbuk va vizual identifikatsiya qoidalarini shakllantirish"
    ],
    project: "Kafeteriya yoki IT-startap uchun to'liq logotip, firmenniy stil va mockup taqdimoti.",
    toolsUsed: ["Midjourney v6", "Vectorize AI", "Adobe Illustrator"],
    icon: "Compass"
  },
  {
    id: 4,
    title: "4-Modul: SMM va Reklama Bannerlari (Canva AI & Adobe Firefly)",
    subtitle: "Ijtimoiy tarmoqlar uchun e'tiborni tortuvchi kreativ dizaynlar",
    duration: "1 Hafta",
    description: "Target reklama, Instagram karusel va SMM postlari uchun konversiyasi yuqori dizaynlarni tezkor tayyorlash.",
    lessonsCount: 6,
    topics: [
      "Target reklama uchun e'tibor tortuvchi (Stop-scroll) bannerlar",
      "Canva Magic Studio: Avtomatik matn, fonni o'chirish va moslashtirish",
      "Adobe Firefly Generative Fill bilan fotosuratlarni kengaytirish",
      "SMM karusel va infografika dizaynini sodda tayyorlash",
      "E-commerce va mahsulotlar (Product Photography) reklamalari"
    ],
    project: "Restoran yoki brend uchun 1 oylik SMM vizual kontent va 5 ta reklama banneri.",
    toolsUsed: ["Canva AI", "Adobe Firefly", "Photoroom"],
    icon: "LayoutGrid"
  },
  {
    id: 5,
    title: "5-Modul: Photoshop AI Beta va Professional Retush",
    subtitle: "Tasvirlarni mukammallikka yetkazish, montaj va tahrirlash",
    duration: "1 Hafta",
    description: "Generative Expand, Content-Aware Fill, obyektlarni almashtirish va ranglarni korreksiya qilish.",
    lessonsCount: 7,
    topics: [
      "Photoshop AI Generative Fill vositasidan professional foydalanish",
      "Neyron retush: Terini tozalash, soch va ko'zlarni AI bilan yaxshilash",
      "Birlashtirish (Compositing): Bir nechta AI rasmlarni bitta posterga yig'ish",
      "Tipografiya va shriftlar kompozitsiyasi",
      "Magnific AI orqali rasmlarga ultra-detail va tekstura qo'shish"
    ],
    project: "Kino posteri yoki jurnal muqovasi darajasidagi murakkab fotomontaj loyihasi.",
    toolsUsed: ["Photoshop AI", "Magnific AI", "Lightroom"],
    icon: "Layers"
  },
  {
    id: 6,
    title: "6-Modul: Monetizatsiya, Portfolio va Frilans (Upwork/Fiverr/Instagram)",
    subtitle: "AI dizayn bilimlarini real pulga aylantirish va mijozlar topish",
    duration: "1 Hafta",
    description: "O'z shaxsiy brendingizni yaratish, portfolioni Behance/Instagramda taqdim etish va chet el mijozlarini jalb qilish.",
    lessonsCount: 6,
    topics: [
      "Behance va Instagram uchun professional portfolio shakllantirish",
      "Upwork, Fiverr va Kwork platformalarida akkount ochish va buyurtma olish",
      "Mijozlar bilan narx kelishish va shartnoma tuzish",
      "O'zizning AI dizayn agentligingizni (Micro-Agency) yo'lga qo'yish",
      "AI Promptlarni sotish (PromptBase va shaxsiy do'konlar)"
    ],
    project: "Shaxsiy Behance va Instagram portfolio platformasini ishga tushirish hamda 1-mijozni jalb qilish.",
    toolsUsed: ["Behance", "Upwork", "Instagram Pro", "Notion"],
    icon: "DollarSign"
  }
];

export const ADVANTAGES = [
  {
    icon: "Flame",
    title: "100% Amaliyot va Real Loyihalar",
    description: "Quruq nazariya yo'q! Har bir darsda muammoli keyslar va real brendlar topshirig'ini bajarasiz."
  },
  {
    icon: "Award",
    title: "Rasmiy Sertifikat",
    description: "Kursni muvaffaqiyatli tamomlagan bitiruvchilarga xalqaro tekshiriluvchi va shtrix-kodli sertifikat beriladi."
  },
  {
    icon: "FolderCheck",
    title: "Tayyor Kuchli Portfolio",
    description: "Kurs davomida 5 dan ortiq murakkab va jozibali loyiha tayyorlab, tayyor portfolio bilan bitirasiz."
  },
  {
    icon: "Users",
    title: "24/7 Mentor Yordami",
    description: "Har bir uy vazifasi mentorlar tomonidan shaxsan tekshiriladi va xatolar ustida atroflicha ishlanadi."
  },
  {
    icon: "LockOpen",
    title: "Umrbod Kirish va Yangilanishlar",
    description: "Video darsliklar va o'quv materiallariga kirish vaqti cheklanmagan, yangi AI versiyalari bepul qo'shiladi."
  },
  {
    icon: "Database",
    title: "500+ Mualliflik Promptlar Bazasi",
    description: "Sinovdan o'tgan, tayyor, darhol ishlaydigan va yuqori sifat beradigan eksklyuziv promtlar to'plami sovga qilinadi."
  }
];

export const MENTOR_DATA: Mentor = {
  name: "Asom Designer",
  role: "Senior AI & Grafik Dizayner",
  experience: "6+ Yillik Tajriba",
  image: mentorImg,
  bio: "6 yildan ortiq tajribaga ega dizayner, shu bilan birga AI (sun'iy intellekt) vositalarini ham juda yaxshi biladi.",
  stats: [
    { label: "O'quvchi va Shogirdlar", value: "100+" },
    { label: "Frilans Boshlagan Shogirdlar", value: "100+" },
    { label: "Grafik Dizayn Tajribasi", value: "6+ Yil" },
    { label: "Baho / Reyting", value: "5.0/5" }
  ],
  achievements: [
    "6 yildan ortiq professional dizayn tajribasi",
    "Midjourney v6, Firefly & Photoshop AI bo'yicha ekspert",
    "100+ shogirdlarni noldan soxaga olib kirgan mentor"
  ],
  portfolioHighlights: [
    "3D Billboard va Tijoriy AI Reklama Bannerlari",
    "Brending va Logotip Konsepsiyalari",
    "SMM va E-commerce Vizual Dizaynlari"
  ]
};

export const STUDENT_WORKS: StudentWork[] = [
  {
    id: 1,
    title: "AR Holographic Music Player Concept (Spotify AR)",
    studentName: "Asom Designer (Mentor)",
    category: "3D Anamorphic & AR VFX",
    image: musicHologramImg,
    prompt: "Photorealistic young man in a black shirt standing in traditional street with rickshaws, surrounded by floating semi-transparent glowing holographic glass Spotify audio player cards, track controls, album art, cinematic AR UI lighting, hyper-realistic 8k resolution --ar 3:4 --v 6.0",
    tool: "Midjourney v6 + Photoshop AI + Figma AR",
    duration: "1 kun",
    clientType: "AR / Holographic Musiqa Pleyeri Reklama Konsepsiyasi"
  },
  {
    id: 2,
    title: "Aura Perfume Luxury Branding",
    studentName: "Diyorbek Ismoilov",
    category: "Brending",
    image: art1,
    prompt: "Luxury perfume bottle, iridescent glass refractions, golden liquid splash, floating white orchids, dramatic studio lighting, 8k resolution, photorealistic advertisement poster --ar 4:3 --v 6.0",
    tool: "Midjourney v6 + Photoshop AI",
    duration: "2 kun",
    clientType: "Atir brendi reklama posteri"
  },
  {
    id: 2,
    title: "CyberLion Tech Mascot & Logo",
    studentName: "Malika Solihova",
    category: "Logotiplar",
    image: art2,
    prompt: "Futuristic 3D neon cybernetic lion head logo, cyan and purple glowing vector paths, dark background, vector art, smooth geometry, high-end tech startup branding --ar 4:3 --v 6.0",
    tool: "Midjourney + Vectorize AI",
    duration: "1 kun",
    clientType: "IT Startap Logotipi"
  },
  {
    id: 3,
    title: "Barista Gold SMM Post Series",
    studentName: "Sardor Aliyev",
    category: "SMM Bannerlar",
    image: art3,
    prompt: "Artisanal espresso coffee cup with roasting coffee beans explosion, warm sunlight, golden bokeh, commercial food photography style --ar 4:3",
    tool: "Adobe Firefly + Canva AI",
    duration: "3 soat",
    clientType: "Kafeteriya Instagram SMM"
  },
  {
    id: 4,
    title: "Appo Tech 3D Mascot Character",
    studentName: "Shahnoza Karimova",
    category: "3D & Mascot",
    image: art4,
    prompt: "Cute friendly robot mascot holding a glowing tablet, Pixar style 3D render, vibrant pastel gradient, isometric composition, high quality --ar 4:3",
    tool: "Leonardo AI + Photoshop",
    duration: "1 kun",
    clientType: "Mobil Ilova Qahramoni"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "standard",
    name: "START",
    badge: "Mustaqil Ta'lim",
    priceOriginal: "1,200,000 UZS",
    priceDiscount: "590,000 UZS",
    period: "bir marta",
    popular: false,
    features: [
      "Barcha 6 ta video modulga to'liq kirish",
      "Darslik fayllari va taqdimotlar",
      "100+ Boshlang'ich AI Promptlar bazasi",
      "Yopiq Telegram chatiga a'zolik",
      "Kursni tamomlaganlik haqida Sertifikat"
    ],
    ctaText: "Ro'yxatdan o'tish",
    formUrl: GOOGLE_FORM_URL
  },
  {
    id: "pro",
    name: "PRO (PREMIUM)",
    badge: "Eng Ko'p Tanlangan 🔥",
    priceOriginal: "2,200,000 UZS",
    priceDiscount: "990,000 UZS",
    period: "bir marta",
    popular: true,
    features: [
      "Barcha 6 ta modul + Murakkab darslar",
      "500+ Mualliflik Eksklyuziv Promptlar to'plami",
      "Mentor bilan haftalik online ZOOM feedback-sessiyalar",
      "Uy vazifalarini shaxsiy tahlil qilish va xatolarni tuzatish",
      "Behance & Instagram portfolioni tayyorlashda yordam",
      "Rasmiy Shtrix-kodli Xalqaro Sertifikat",
      "Upwork & Frilansda mijoz topish boyicha shaxsiy ko'rsatmalar"
    ],
    ctaText: "Ro'yxatdan o'tish (Arzonlashtirilgan)",
    formUrl: GOOGLE_FORM_URL
  },
  {
    id: "vip",
    name: "VIP MENTOR",
    badge: "Cheklangan 5 ta Joy",
    priceOriginal: "4,500,000 UZS",
    priceDiscount: "2,490,000 UZS",
    period: "bir marta",
    popular: false,
    features: [
      "PRO tarifining barcha imkoniyatlari",
      "Jasur Rahmatov bilan 1-on-1 Shaxsiy Mentorship (4 hafta)",
      "Birinchi mijozingizni topishgacha kafolatlangan hamrohlik",
      "Shaxsiy brendingizni va frilans agentligingizni qurish",
      "Eksklyuziv Midjourney va Photoshop AI shablonlari",
      "Real kommercheskiy buyurtmalarga jalb etish"
    ],
    ctaText: "VIP Joyni Band Qilish",
    formUrl: GOOGLE_FORM_URL
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "Kursda o'qish uchun grafik dizayn tajribam bo'lishi shartmi?",
    answer: "Yo'q, mutlaqo shart emas! Kurs dasturi noldan boshlanadi. Biz sizga kompozitsiya, ranglar nazariyasi va neyrotarmoqlar bilan muloqot qilishni eng sodda tilda va bosqichma-bosqich o'rgatamiz.",
    category: "Umumiy"
  },
  {
    id: 2,
    question: "O'qish uchun qanday kompyuter yoki texnika kerak?",
    answer: "Midjourney va boshqa neyrotarmoqlar bulutli (Cloud) serverlarda ishlaydi. Shuning uchun sizga juda kuchli kompyuter shart emas. Oddiy noutbuk va barqaror internet aloqasi kifoya.",
    category: "Texnik"
  },
  {
    id: 3,
    question: "Darslar qanday formatda o'tiladi?",
    answer: "Darslar yozib olingan yuqori sifatli video formatda maxsus platformaga joylanadi. Siz o'zingizga qulay vaqtda ko'rib, topshiriqlarni bajarasiz. PRO va VIP tariflarida jonli ZOOM uchrashuvlari ham o'tkaziladi.",
    category: "Format"
  },
  {
    id: 4,
    question: "Ro'yxatdan o'tgandan so'ng darslarga kirish qachon ochiladi?",
    answer: "To'lov qilingan va ro'yxatdan o'tilgandan so'ng darhol Telegram bot va shaxsiy kabinet orqali darslarga kirish huquqi beriladi.",
    category: "Format"
  },
  {
    id: 5,
    question: "Kursni tugatgach sertifikat beriladimi?",
    answer: "Ha, barcha uy vazifalarini va yakuniy portfolio loyihasini topshirgan o'quvchilarga xalqaro namunadagi va shtrix-kodli sertifikat taqdim etiladi.",
    category: "Sertifikat"
  },
  {
    id: 6,
    question: "AI ishlatish uchun Midjourney va boshqa pullik dasturlarga pul sarflash kerakmi?",
    answer: "Biz kursda bepul va arzon muqobillarni ham o'rgatamiz. Shuningdek, o'quvchilarimiz uchun AI xizmatlaridan foydalanish bo'yicha maxsus chegirmali va bepul metodlarni taqdim etamiz.",
    category: "To'lov va AI"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alisher Nurmatov",
    role: "Frilans AI Dizayner",
    salaryGrowth: "Oylik daromadi: $1,200",
    comment: "Ilgari 1 ta banner tayyorlashga 4 soat sarflardim. Hozir AI yordamida 15 daqiqada 5 xil unikal varianti chiqadi. Upworkda birinchi haftaning o'zidayoq $300 lik buyurtma oldim!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    name: "Madina Odilova",
    role: "SMM Lead Agentlikda",
    salaryGrowth: "Maoshi 2.5 barobarga oshdi",
    comment: "SMM sohasida ishlayman. Ilgari dizaynerlarimiz ishni kechiktirishi tufayli vaqt yo'qotardik. Kursdan keyin barcha postlar va reklamalarni o'zim Canva AI va Midjourney bilan super sifatda tayyorlayapman.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    name: "Bekzod Toirov",
    role: "Noldan Boshlagan O'quvchi",
    salaryGrowth: "3 ta doimiy mijoz topladi",
    comment: "Dizaynga umuman aloqam yo'q edi. Jasur aka juda tushunarli va qiziqarli tushuntirganlar. Promptlar to'plami esa haqiqiy xazina!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    verified: true
  }
];

export const PROMPT_PRESETS: PromptPreset[] = [
  {
    id: "logo",
    title: "Cyberpunk 3D Mascot Logo",
    category: "Logotiplar",
    promptText: "Futuristic glowing neon 3D cybernetic fox mascot logo, purple and turquoise vector highlights, dark metallic base, high contrast, minimalist tech emblem, 8k resolution --ar 1:1 --v 6.0",
    style: "3D Neon Vektor",
    previewImage: art2,
    estimatedTime: "12 sek",
    toolName: "Midjourney v6"
  },
  {
    id: "poster",
    title: "Luxury Cosmetic Commercial",
    category: "Fotorealizm",
    promptText: "Commercial advert photoshoot for organic rose perfume bottle, floating rose petals, crystal water splash, soft studio lighting, ultra photorealistic, cinematic render --ar 4:3 --v 6.0",
    style: "Photorealistic Cinema",
    previewImage: art1,
    estimatedTime: "15 sek",
    toolName: "Midjourney v6"
  },
  {
    id: "smm",
    title: "Gourmet Coffee Instagram Ads",
    category: "SMM",
    promptText: "High-end espresso cup on dark walnut wood, roasting coffee beans flying around in motion blur, warm rim light, gourmet advertising poster --ar 4:3",
    style: "SMM Reklama",
    previewImage: art3,
    estimatedTime: "8 sek",
    toolName: "Adobe Firefly"
  },
  {
    id: "mascot",
    title: "Cute Tech Robot Companion",
    category: "3D Character",
    promptText: "Isometric 3D cute friendly robot avatar for mobile app, smooth matte finish, pastel gradient lighting, Pixar aesthetic, clean background --ar 4:3",
    style: "Pixar 3D Render",
    previewImage: art4,
    estimatedTime: "10 sek",
    toolName: "Leonardo AI"
  }
];
