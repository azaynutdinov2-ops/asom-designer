import { CourseModule, PricingPlan, StudentWork, FaqItem, Benefit, MentorInfo } from '../types';

export const MENTOR_DATA: MentorInfo = {
  name: "Asom Designer",
  title: "A/I & Grafik Dizayn Bo'yicha Ekspert, Art-Direktor",
  experienceYears: 6,
  bio: "6 yildan ortiq tajribaga ega dizayner, shu bilan birga AI (sun'iy intellekt) vositalarini ham juda yaxshi biladi. So'nggi yillarda 100 dan ortiq shogirdlarga grafik dizayn va sun'iy intellekt texnologiyalarini o'rgatib, ularni xalqaro hamda mahalliy bozor uchun tayyor kadr qilib yetishtirdi.",
  quote: "Sun'iy intellekt dizaynerning o'rnini egallamaydi, lekin AI'dan foydalanadigan dizayner foydalanmaydiganini osongina ortda qoldiradi.",
  skills: [
    "Midjourney V6 & Prompt Engineering",
    "Adobe Firefly 3 & Photoshop Generative Fill",
    "Canva AI & Brand Automation",
    "Runway Gen-2 & AI Motion Graphics",
    "Logotip va Kompleks Brending",
    "Commercial UI/Visual Design"
  ],
  stats: {
    students: "100+",
    projects: "500+",
    experience: "6+ Yil",
    rating: "4.95 / 5"
  },
  contact: {
    phone: "tel:+998998076275",
    phoneDisplay: "+998 99 807 62 75",
    telegram: "@asom_uz",
    telegramUrl: "https://t.me/asom_uz",
    instagram: "@asom.designer",
    instagramUrl: "https://www.instagram.com/asom.designer/"
  }
};

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    number: "01",
    title: "AI va Sun'iy Intellekt Asoslari",
    description: "Grafik dizaynda AI inqilobi, asosiy neyrotarmoqlar logikasi va mukammal prompt yaratishning oltin qoidalari.",
    duration: "1 hafta (4 dars)",
    lessonsCount: 4,
    skills: ["Prompt Structuring", "Style Keywords", "AI Ethics", "Workflow Integration"],
    tools: ["ChatGPT-4o", "Midjourney Alpha", "Claude 3.5"],
    deliverable: "10+ xil uslubdagi mukammal AI promptlar to'plami va texnik topshiriq bifi"
  },
  {
    id: 2,
    number: "02",
    title: "Midjourney V6 Chuqurlashtirilgan Kurs",
    description: "Giper-realistik illustratsiyalar, 3D vizuallar, uslublarni aralashtirish (sref, cref), kameralar va yorug'lik effektlarini boshqarish.",
    duration: "2 hafta (6 dars)",
    lessonsCount: 6,
    skills: ["Character Consistency", "Style Reference (--sref)", "Pan & Zoom", "Aspect Ratios"],
    tools: ["Midjourney V6.1", "Discord AI Studio"],
    deliverable: "Shaxsiy 3D xarakter va 5 ta turli rakursdagi foto-realistik vizual to'plam"
  },
  {
    id: 3,
    number: "03",
    title: "Adobe Firefly & Canva AI Avtomatlashtirish",
    description: "Photoshop Generative Fill orqali suratlarni kengaytirish, keraksiz ob'ektlarni o'chirish va Canva AI orqali SMM kontent tayyorlash.",
    duration: "1 hafta (4 dars)",
    lessonsCount: 4,
    skills: ["Generative Expand", "Vector Recolor", "Magic Studio", "Bulk Design Automation"],
    tools: ["Adobe Firefly 3", "Photoshop Beta", "Canva Pro AI"],
    deliverable: "SMM uchun 10 xil formatdagi tayyor avtomatlashtirilgan poster va bannerlar"
  },
  {
    id: 4,
    number: "04",
    title: "AI Yordamida Logotip va Brending",
    description: "Noyob logotip g'oyalarini AI'da generatsiya qilish, vektorga o'tkazish, ranglar palitrasini tanlash va brendbuk yaratish.",
    duration: "2 hafta (6 dars)",
    lessonsCount: 6,
    skills: ["Vectorization", "Logo Concept Generation", "Brand Book Creation", "Mockup Render"],
    tools: ["Midjourney", "Adobe Illustrator", "Recraft AI"],
    deliverable: "To'liq brendbuk: Logotip, brend ranglar, shriftlar va 3D mokaplar"
  },
  {
    id: 5,
    number: "05",
    title: "Generativ AI Video va Animatsiya",
    description: "Statik AI rasmlarni harakatlantirish, reklama roliklari, Luma Dream Machine va Runway Gen-2 yordamida AI kino va videolarni yaratish.",
    duration: "1 hafta (4 dars)",
    lessonsCount: 4,
    skills: ["Text-to-Video", "Image-to-Video", "Camera Motion Controls", "AI Sound Synthesis"],
    tools: ["Runway Gen-2", "Luma AI", "Pika Labs", "CapCut AI"],
    deliverable: "2 ta professional AI reklama roligi va animatsion promo video"
  },
  {
    id: 6,
    number: "06",
    title: "Portfolio, Monetizatsiya va Mijozlar",
    description: "Behance va Instagram uchun taqdimot tayyorlash, Frilans birjalarda AI dizayner sifatida yuqori narxda buyurtma olish.",
    duration: "1 hafta (3 dars)",
    lessonsCount: 3,
    skills: ["Case Study Design", "Client Negotiation", "Freelance Strategy", "Pricing Science"],
    tools: ["Behance", "Instagram", "Figma", "Upwork"],
    deliverable: "Chiroyli Behance portfoliodagi 3 ta real case-study va birinchi mijoz strategiyasi"
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    iconName: "Zap",
    title: "90% Amaliy Mashg'ulotlar",
    description: "Nazaariydan ko'ra ko'proq real darslar. Har bir darsdan so'ng darhol AI vositalarida amaliy topshiriq bajarasiz.",
    highlight: "Tezkor amaliyot"
  },
  {
    id: 2,
    iconName: "Award",
    title: "Rasmiy Sertifikat",
    description: "Kursni muvaffaqiyatli yakunlagan o meyn o'quvchilarga xalqaro standartdagi sertifikat taqdim etiladi.",
    highlight: "Ishga kirishda ustunlik"
  },
  {
    id: 3,
    iconName: "FolderCheck",
    title: "Kuchli Portfolio",
    description: "Kurs davomida 5 dan ortiq professional loyiha yaratasiz va portfolioingizni noldan to'ldirasiz.",
    highlight: "5+ Tayyor loyiha"
  },
  {
    id: 4,
    iconName: "UserCheck",
    title: "1:1 Mentor Yordami",
    description: "Asom Designer va uning jamoasi har bir topshirig'ingizni shaxsan ko'rib chiqib, kamchiliklarni to'g'rilashga yordam beradi.",
    highlight: "Shaxsiy qo'llab-quvvatlash"
  },
  {
    id: 5,
    iconName: "Users",
    title: "Yopiq Telegram Hamjamiyat",
    description: "Doimiy tajriba almashish, yangi AI yangiliklari, buyurtmalar va do'stona muhitda rivojlanish guruhiga kirish.",
    highlight: "Yopiq Community"
  },
  {
    id: 6,
    iconName: "Sparkles",
    title: "1000+ AI Promptlar To'plami",
    description: "Mentor tomonidan sinovdan o'tgan, tayyor tijorat promptlari, uslubiy qo'llanmalar va shablonlar sovg'a qilinadi.",
    highlight: "VIP Promptlar Bonusi"
  }
];

export const STUDENT_WORKS: StudentWork[] = [
  {
    id: 1,
    title: "Cyberpunk Future Sneaker — Brending va 3D Vizuallashtirish",
    studentName: "Javohir Elmurodov",
    studentRole: "100+ shogirdlarimizdan biri / Frilanser",
    category: "midjourney",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    promptUsed: "Futuristic neon running shoe, isometric view, cyberpunk mood, octane render 8k, volumetric light --v 6.0",
    toolUsed: "Midjourney V6 + Photoshop",
    timeSpentBeforeAI: "18 soat",
    timeSpentWithAI: "35 daqiqa"
  },
  {
    id: 2,
    title: "Neom Coffee — AI yordamida Yaratilgan Qahvaxona Brendingi",
    studentName: "Malika Soliyeva",
    studentRole: "Kurs bitiruvchisi / SMM Dizayner",
    category: "branding",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop",
    promptUsed: "Minimalist coffee package mockup, organic beige paper texture, luxury typography, soft studio lighting --ar 4:5",
    toolUsed: "Midjourney + Illustrator + Firefly",
    timeSpentBeforeAI: "24 soat",
    timeSpentWithAI: "1.5 soat"
  },
  {
    id: 3,
    title: "Futuristic Tech Vehicle — Motion & Generativ AI Video",
    studentName: "Asom Designer (Mentor)",
    studentRole: "Mentorning so'nggi ishlaridan biri (Video Showcase)",
    category: "aivideo",
    type: "video",
    // Working demo video for creative showmanship
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    posterUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    promptUsed: "Cinematic camera zoom into electric hypercar with glowing fiber optics, rainy neon street at night, 4k ultra-realistic motion",
    toolUsed: "Midjourney V6 + Runway Gen-2 + Luma AI",
    timeSpentBeforeAI: "3 kun (3D Animation)",
    timeSpentWithAI: "45 daqiqa"
  },
  {
    id: 4,
    title: "Cosmic Botanical Perfume — AI Video Promo & Visual Effects",
    studentName: "Sardor Raimov",
    studentRole: "AI Motion Designer / O'quvchi",
    category: "aivideo",
    type: "video",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    posterUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    promptUsed: "Luxury crystal perfume bottle floating in slow motion, liquid gold splash animation, macro lighting depth of field",
    toolUsed: "Runway Gen-2 + Adobe After Effects",
    timeSpentBeforeAI: "2 kun",
    timeSpentWithAI: "30 daqiqa"
  },
  {
    id: 5,
    title: "Eko-Toshkent — Ayni Zamonda AI'da Yaratilgan Posterlar",
    studentName: "Diyorbek Rahimov",
    studentRole: "Grafik Dizayner",
    category: "posters",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    promptUsed: "Eco future green architecture poster, surreal paper-craft aesthetic, vibrant gradient overlay, Swiss design layout",
    toolUsed: "Midjourney + Canva AI",
    timeSpentBeforeAI: "12 soat",
    timeSpentWithAI: "20 daqiqa"
  },
  {
    id: 6,
    title: "Luxura Perfume — Qadoqlash va Logotip Vizuallashtiruvi",
    studentName: "Shahnoza Karimova",
    studentRole: "Brending Dizayner",
    category: "branding",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    promptUsed: "Luxury gold embossed perfume packaging mockup, dark emerald marble background, soft caustic lighting --v 6",
    toolUsed: "Midjourney V6 + Photoshop Beta",
    timeSpentBeforeAI: "15 soat",
    timeSpentWithAI: "40 daqiqa"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "standard",
    name: "STANDART",
    badge: "Boshlang'ich",
    isPopular: false,
    price: "890,000 so'm",
    originalPrice: "1,500,000 so'm",
    description: "AI va Grafik dizayn asoslarini tez va samarali o'rganishni xohlovchilar uchun.",
    features: [
      "Barcha 6 ta modul bo'yicha video darslar",
      "Umrbod foydalanish imkoniyati",
      "Umumiy Telegram muloqot guruhi",
      "AI Promptlar va shablonlar to'plami (Baza)",
      "Rasmiy raqamli sertifikat"
    ],
    ctaText: "Standart Tarifda Ro'yxatdan o'tish"
  },
  {
    id: "premium",
    name: "PREMIUM (POPULAR)",
    badge: "Eng ko'p tanlangan 🔥",
    isPopular: true,
    price: "1,390,000 so'm",
    originalPrice: "2,200,000 so'm",
    description: "Asom Designer va jamoasining shaxsiy nazorati hamda 1:1 tahlillari bilan o'rganish.",
    features: [
      "Barcha 6 ta chuqurlashtirilgan modul darslari",
      "1:1 Mentor tahlili va vazifalarni tekshirish",
      "Yopiq VIP Telegram Hamjamiyat",
      "1000+ Premium AI Promptlar bazasi (Eksklyuziv)",
      "Portfolio yaratish va Behance case-study yordami",
      "Haftalik Live Zoom Q&A muloqotlar",
      "Bitiruv sertifikati va mijoz topish bo'yicha master-klass"
    ],
    ctaText: "Premium Tarifda Ro'yxatdan o'tish"
  },
  {
    id: "vip",
    name: "VIP INDIVIDUAL",
    badge: "Cheklangan 5 ta o'rin",
    isPopular: false,
    price: "2,990,000 so'm",
    originalPrice: "4,500,000 so'm",
    description: "Asom Designer bilan shaxsan 1-ga-1 darslar va real mijoz loyihalarida amaliyot.",
    features: [
      "Barcha Premium tarif imkoniyatlari",
      "Asom Designer bilan shaxsiy 1-ga-1 Zoom uchrashuvlar",
      "Shaxsiy brend va portfolioingizni noldan qurish",
      "Real tijorat loyihasida birgalikda ishlash",
      "Xalqaro frilans platformalarga tayyorlash (Upwork/Fiverr)",
      "1 yillik shaxsiy mentorlik va maslahat"
    ],
    ctaText: "VIP Tarifda Ro'yxatdan o'tish"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Kursda qatnashish uchun kuchli kompyuter kerakmi?",
    answer: "Yo'q, mutlaqo shart emas! Midjourney, ChatGPT, Canva AI va Runway kabi asosiy AI vositalari brauzer va bulutli serverlarda ishlaydi. Oddiy kompyuter yoki hatto planshet orqali ham barcha topshiriqlarni bajara olasiz."
  },
  {
    id: 2,
    question: "Dizayn sohasida umuman tajribam yo'q, o'rganib keta olamanmi?",
    answer: "Ha, albatta! Kurs dasturi noldan boshlanadigan qilib tuzilgan. AI vositalari dizayn yaratish jarayonini bir necha barobar osongina va tushunarli qiladi. Asosiysi — mantiqiy fikrlash va promptlarni to'g'ri berishni o'rganishdir."
  },
  {
    id: 3,
    question: "Midjourney va boshqa AI neyrotarmoqlari pullikmi?",
    answer: "Midjourney oyiga kichik obuna talab qiladi, ammo kursimizda biz bepul muqobil vositalarni (Adobe Firefly, Recraft, Leonardo AI, Canva AI) va Midjourney'dan eng tejamkor foydalanish usullarini ham o'rgatamiz."
  },
  {
    id: 4,
    question: "Darslar qanday formatda bo'lib o'tadi?",
    answer: "Darslar professional yozib olingan videodarslar shaklida maxsus platformada taqdim etiladi. Siz o'zingizga qulay vaqtda ko'rib chiqishingiz mumkin. Premium va VIP tariflarida esa har haftalik jonli Zoom tahlillar ham o'tkaziladi."
  },
  {
    id: 5,
    question: "Kurs oxirida sertifikat beriladimi?",
    answer: "Ha! Barcha amaliy topshiriqlarni topshirgan va yakuniy portfolio loyihasini muvaffaqiyatli himoya qilgan o'quvchilar xalqaro darajadagi rasmiy sertifikat bilan taqdirlanadi."
  },
  {
    id: 6,
    question: "Kursni tugatib qancha vaqtda daromadga chiqish mumkin?",
    answer: "Bizning 100+ o'quvchilarimiz tajribasiga ko'ra, kurs davomidagi 4-moduldan so'ng birinchi SMM, logotip yoki banner buyurtmalarini olishni boshlashadi. Portfolio va Behance bo'limida tayyor case-study bilan mijoz topish osonlashadi."
  }
];
