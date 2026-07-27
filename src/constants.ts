import { ContactInfo, CourseModule, FAQItem, PricingPlan, StudentWork, VideoShowcaseItem } from './types';

// Asset Images
import aiHeroImg from './assets/images/ai_hero_graphic_1785152661929.jpg';
import mentorImg from './assets/images/mentor_portrait_1785152681208.jpg';
import studentBrandingImg from './assets/images/student_art_branding_1785152696440.jpg';
import studentCharacterImg from './assets/images/student_art_character_1785152713822.jpg';

export const CONTACT_DATA: ContactInfo = {
  phone: '+998 99 807 62 75',
  phoneRaw: '+998998076275',
  telegram: '@asom_uz',
  telegramUrl: 'https://t.me/asom_uz',
  instagram: '@asom.designer',
  instagramUrl: 'https://www.instagram.com/asom.designer/',
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe3FTfqFWL5bi-4cBwRzhmHp7djpNnP44d1bYxoyQNWAcpoJw/viewform?usp=header',
};

export const AI_TOOLS = [
  {
    name: 'Midjourney v6',
    role: 'Fotorealistik vizualizatsiya va artlar',
    description: 'Dunyodagi eng kuchli AI vizual generatori. Istalgan uslubda 8K sifatdagi illiustratsiya va posterlar yaratish.',
    iconName: 'Sparkles',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Adobe Firefly',
    role: 'Tijorat va brending dizaynlari',
    description: 'Adobe oilasining xavfsiz AI instrumenti. Generative Fill, vector recolor va professional matn effektlari.',
    iconName: 'Palette',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Canva AI (Magic Studio)',
    role: 'Tezkor SMM va kontent dizayni',
    description: 'Magic Edit, Magic Expand va avtomatlashtirilgan SMM bannerlar yaratish uchun eng qulay vosita.',
    iconName: 'Wand2',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'ChatGPT 4o & Claude 3.5',
    role: 'Prompt engineering & Kreativ g‘oyalar',
    description: 'Professional dizaynerlar uchun prompt muhandisligi, brend strategiyasi va kopirayting yaratish.',
    iconName: 'Cpu',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Photoshop Generative AI',
    role: 'Piksel darajasidagi AI ishlov',
    description: 'Eski rasmlarni kengaytirish, obyektlarni soniyalar ichida almashtirish va yakuniy retush qilish.',
    iconName: 'ImagePlus',
    color: 'from-purple-500 to-violet-600',
  },
  {
    name: 'Runway Gen-2 & Luma AI',
    role: 'AI Motion va Video Generatsiya',
    description: 'Statik grafik dizaynlarni jonlantirish va qisqa reklama roliklari uchun AI video yaratish.',
    iconName: 'Video',
    color: 'from-pink-500 to-rose-600',
  },
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: '1-Modul: AI Asoslari va Prompt Muhandisligi',
    duration: '1-hafta (4 dars)',
    description: 'Sun’iy intellekt grafik dizaynda qanday ishlaydi? Prompt qurish mantiqlari, stillar va parametrlar bilan tanishuv.',
    topics: [
      'Grafik dizaynda AI inqilobi: An’anaviy dizayn vs AI dizayn',
      'Prompt Engineering sirlari: Sifatli prompt tuzish formulalari',
      'ChatGPT va Claude bilan brend g‘oyalari va dizayn konseptlarini tayyorlash',
      'Mualliflik huquqlari va AI platformalarining ishlash mexanizmi'
    ],
    tools: ['ChatGPT 4o', 'Midjourney Basics', 'Claude 3.5'],
    projectOutput: 'Shaxsiy 50+ ta mukammal promptlar kutubxonasi va Moodboard'
  },
  {
    id: 2,
    title: '2-Modul: Midjourney v6 va Adobe Firefly Chuqur O‘rganish',
    duration: '2-hafta (5 dars)',
    description: 'Yuqori aniqlikdagi fotorealistik illyustratsiyalar, 3D vizuallar va brend artlarini yaratish.',
    topics: [
      'Midjourney v6 parametrlari: --ar, --v, --stylize, --chaos, --cref, --sref',
      'Yuz va uslub izchilligini saqlash (Character & Style Consistency)',
      'Adobe Firefly Generative Fill va Vector Generatsiya',
      'Dizaynlar uchun tekstura va 3D elementlar tayyorlash'
    ],
    tools: ['Midjourney v6', 'Adobe Firefly', 'Magnific AI'],
    projectOutput: '3 ta murakkab va fotorealistik AI art loyihasi'
  },
  {
    id: 3,
    title: '3-Modul: Logotip Yaratish, Brending va Firmali Stil',
    duration: '3-hafta (5 dars)',
    description: 'AI yordamida 10 baravar tezroq logotip konseptlari, brend-buk va firrenli uslub yaratish.',
    topics: [
      'Kompaniyalar uchun logotip konseptlarini AI da generatsiya qilish',
      'AI vektorizatsiya va Adobe Illustrator da yakuniy ishlov berish',
      'Mockup lar yaratish va mahsulot qadoqlarida (Packaging) sinab ko‘rish',
      'Brending loyihasini taqdimot shakliga keltirish'
    ],
    tools: ['Midjourney', 'Adobe Illustrator', 'Vectorizer AI', 'Photoshop'],
    projectOutput: 'To‘liq tayyor Brending Keys (Logo, Mockup, Brandbook)'
  },
  {
    id: 4,
    title: '4-Modul: SMM Postlar va Tijorat Reklama Bannerlari',
    duration: '4-hafta (4 dars)',
    description: 'Ijtimoiy tarmoqlar uchun e’tiborni tortuvchi dinamik bannerlar va Canva AI Magic Studio bilan tezkor ishlash.',
    topics: [
      'Canva AI (Magic Edit, Magic Switch, Text to Graphic)',
      'Instagram, Telegram va Facebook uchun tijorat postlari',
      'Tipografiya va kompozitsiya qoidalari bilan AI elementlarini birlashtirish',
      'A/B test reklama bannerlari va e-commerce vizuallar'
    ],
    tools: ['Canva AI', 'Photoshop AI', 'CapCut AI'],
    projectOutput: '10 ta har xil soha uchun tijorat SMM post to‘plami'
  },
  {
    id: 5,
    title: '5-Modul: AI Motion Graphics va Video Generatsiya',
    duration: '5-hafta (4 dars)',
    description: 'Statik rasmlardan jonli video kontent va reklama roliklari yaratish.',
    topics: [
      'Runway Gen-2, Luma Dream Machine va Kling AI platformalari',
      'Image-to-Video va Text-to-Video usullari',
      'AI ovoz generatsiyasi va dublyaj (ElevenLabs)',
      'Video va grafikani uyg‘unlashtirib SMM va Reels tayyorlash'
    ],
    tools: ['Runway Gen-2', 'Luma AI', 'ElevenLabs', 'CapCut'],
    projectOutput: '1 ta professional AI video reklama roligi'
  },
  {
    id: 6,
    title: '6-Modul: Portfolio, Frilans (Upwork) va Mijozlar Topish',
    duration: '6-hafta (4 dars)',
    description: 'O‘rgangan bilimlarni daromadga aylantirish, Behance/Dribbble portfolio va mijozlar bilan muloqot.',
    topics: [
      'Behance va Instagram uchun jozibali portfolio keyslar tayyorlash',
      'Upwork, Fiverr va mahalliy bozorda frilans hisob ochish va rivojlantirish',
      'Mijozlar bilan narx belgilash va muzokaralar olib borish',
      'AI dizayner sifatida shaxsiy brendingizni qurish'
    ],
    tools: ['Behance', 'Upwork', 'LinkedIn', 'ChatGPT'],
    projectOutput: 'Tayyor professional Portfolio va tayyor Upwork profili'
  }
];

export const ADVANTAGES = [
  {
    title: 'Amaliy Mashg‘ulotlar & Real Brieflar',
    description: 'Nazarisiz, faqat amaliyot. Real kompaniyalarning topshiriqlari asosida ish laysiz.',
    iconName: 'Briefcase',
  },
  {
    title: 'Rasmiy Sertifikat',
    description: 'Kursni muvaffaqiyatli yakunlagach, ish beruvchilar va mijozlar uchun tasdiqlangan sertifikat beriladi.',
    iconName: 'Award',
  },
  {
    title: 'Kamida 5 ta Sifatli Portfolio Keysi',
    description: 'Kurs davomida tayyor portfolio yig‘asiz va darhol mijoz olishga tayyor bo‘lasiz.',
    iconName: 'FolderCheck',
  },
  {
    title: 'Mentor Yordami va Yopiq Jamiyat',
    description: 'Mentor Asomiddin tomonidan 24/7 savollarga javob, topshiriqlar tahlili va jonli Zoom uchrashuvlar.',
    iconName: 'Users',
  },
  {
    title: 'Eksklyuziv Prompt & Shablonlar Bazasi',
    description: 'Midjourney uchun 500+ tayyor professional promptlar va pullik resurslarga bepul kirish.',
    iconName: 'Zap',
  },
  {
    title: 'Vaqtingizni 10x Tezlashtirasiz',
    description: 'Oldin 2 kun ketgan brending loyihasini endi 2 soatda mukammal sifatda bajarasiz.',
    iconName: 'Clock',
  }
];

export const MENTOR_INFO = {
  name: 'Asomiddin (Asom)',
  role: 'Kreativ Grafik Dizayner & AI Mutaxassisi',
  experienceYears: '6+ Yil',
  studentsCount: '100+',
  bio: '6 yildan ortiq vaqt mobaynida grafik dizayn va brending sohasida ishlab kelmoqdaman. So‘nggi 2 yilda sun’iy intellekt (AI) instrumentlarini amaliyotga 100% tatbiq etib, xalqaro va mahalliy brendlar bilan hamkorlik qilib kelmoqdaman. Maqsadim — dizaynerlarni zamonaviy AI qurollari bilan qurollantirib, ularning samaradorligi va daromadini 3-5 baravargacha oshirish.',
  image: mentorImg,
  skills: ['Midjourney v6 Master', 'Adobe Firefly Pro', 'Branding & Identity', 'Photoshop AI', 'Motion & AI Video', 'Prompt Engineering'],
  stats: [
    { label: 'Tajriba', value: '6+ Yil' },
    { label: 'Shogirdlar', value: '100+' },
    { label: 'Yaratilgan AI vizuallar', value: '1500+' },
    { label: 'Mamnuniyat indeksi', value: '99.4%' },
  ]
};

export const STUDENT_WORKS: StudentWork[] = [
  {
    id: 1,
    title: 'Luks Kosmetika Brending & Packaging',
    studentName: 'Madina Alimova',
    studentRole: 'AI Dizayn Kursi Bitiruvchisi',
    category: 'branding',
    image: studentBrandingImg,
    promptUsed: 'Sleek luxury cosmetic glass jar design with golden lettering, soft pastel background, realistic studio lighting, photorealistic 8k render --ar 4:3 --v 6.0',
    toolsUsed: ['Midjourney v6', 'Adobe Illustrator', 'Photoshop']
  },
  {
    id: 2,
    title: 'Futuristik Kiberpank Personaj & Art',
    studentName: 'Sardorbek Rahimov',
    studentRole: 'Frilanser Dizayner',
    category: 'photorealism',
    image: studentCharacterImg,
    promptUsed: 'Hyperrealistic portrait of a cyberpunk character wearing futuristic neon visor, cinematic lighting, violet and cyan atmospheric color palette, highly detailed --ar 4:3',
    toolsUsed: ['Midjourney v6', 'Photoshop AI']
  },
  {
    id: 3,
    title: 'Neobren E-commerce AI Reklama Baneri',
    studentName: 'Jasur Temirov',
    studentRole: 'SMM Dizayner',
    category: 'ui',
    image: aiHeroImg,
    promptUsed: 'Isometric 3D floating glass gadgets with glowing neon purple background, high resolution advertising background --ar 16:9',
    toolsUsed: ['Adobe Firefly', 'Canva AI', 'Photoshop']
  }
];

export const VIDEO_SHOWCASE: VideoShowcaseItem[] = [
  {
    id: 'mentor-work-1',
    title: 'Mentorning AI Showreel: Grafik dizayn kelajagi',
    author: 'Asomiddin (Mentor)',
    description: 'Midjourney v6, Runway Gen-2 va Photoshop AI yordamida yaratilgan brend va motion video jamlanmasi.',
    type: 'mentor_video',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: aiHeroImg,
    duration: '01:24',
    tools: ['Midjourney v6', 'Runway Gen-2', 'After Effects', 'ElevenLabs']
  },
  {
    id: 'student-ai-anim',
    title: 'Talaba Ishti: AI orqali Yaratilgan Kreativ Animatsiya',
    author: 'Dilshod Raxmatov (O‘quvchi)',
    description: 'Statik rasmlardan AI motion video va effektlar yaratish bo‘yicha amaliy dars natijasi.',
    type: 'ai_animation',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: studentCharacterImg,
    duration: '00:48',
    tools: ['Luma Dream Machine', 'Runway', 'CapCut AI']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'standard',
    name: 'STANDART',
    price: '990,000 UZS',
    originalPrice: '1,500,000 UZS',
    period: 'bir marta',
    description: 'Mustaqil o‘rganish va AI dizayn asoslarini puxta egallamoqchi bo‘lganlar uchun.',
    features: [
      'Barcha 6 ta modul videodarslariga to‘liq kirish (6 oy)',
      'Barcha praktikum fayllari va promptlar',
      'Midjourney va AI instrumentlar bo‘yicha cheksiz qo‘llanma',
      'Darslar yozuv shaklida va topshiriqlar',
      'Savol-javoblar uchun umumiy guruh',
      'Kursni yakunlash sertifikati'
    ]
  },
  {
    id: 'pro',
    name: 'PRO / VIP (OMMABOB)',
    popular: true,
    badge: 'Eng ko‘p tanlangan',
    price: '1,490,000 UZS',
    originalPrice: '2,200,000 UZS',
    period: 'bir marta',
    description: 'Mentor ko‘rigi, shaxsiy tahlil va real portfolio yaratishni xohlovchilar uchun ideal tanlov.',
    features: [
      'Barcha STANDART imkoniyatlar',
      'Mentor Asomiddin tomonidan har bir uy vazifasi shaxsiy tahlili',
      'Haftalik 2 marotaba jonli Zoom uchrashuv va Live Q&A',
      '5 ta tayyor professional portfolio keyslar tayyorlash',
      'Yopiq VIP Telegram jamiyatga umrbod kirish',
      'Upwork va Frilansda mijoz topish bo‘yicha alohida strategik modul',
      'Eng yaxshi bitiruvchilarga real mijoz va zakazlar yo‘naltirish'
    ]
  },
  {
    id: 'individual',
    name: 'INDIVIDUAL / 1-ON-1',
    badge: 'Cheklangan o‘rin',
    price: '2,990,000 UZS',
    originalPrice: '4,500,000 UZS',
    period: 'bir marta',
    description: 'Mentor bilan shaxsan yuzma-yuz ishlash va natijaga kafolatlangan intensiv dastur.',
    features: [
      'Barcha PRO imkoniyatlari',
      'Mentor bilan shaxsiy 1-ga-1 yakka tartibdagi darslar',
      'Shaxsiy jadval bo‘yicha moslashuvchan o‘quv grafigi',
      'Birinchi 2 ta real mijoz bilan ishlashda bevosita mentor ko‘magi',
      'Shaxsiy brend va portfolioingizni 0 dan yaratish va reklama qilish',
      'Kafolatlangan sertifikat va tavsiyanoma'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'Kursda o‘qish uchun grafik dizayn bo‘yicha bilimim bo‘lishi shartmi?',
    answer: 'Yo‘q, shart emas! Kurs 0 dan boshlab o‘rgatiladi. Biz kompozitsiya, ranglar va tipografiya asoslaridan boshlab, AI instrumentlarini qanday unumli ishlatishni tushuntiramiz.',
    category: 'talablar'
  },
  {
    id: 2,
    question: 'Darslar qaysi formatda va qachon bo‘ladi?',
    answer: 'Darslar maxsus platformada tayyor yuqori sifatli video formatda taqdim etiladi. Siz o‘zingizga qulay vaqtda ko‘rib o‘rganishingiz mumkin. PRO guruhlar uchun esa haftasiga 2 marta jonli Zoom uchrashuvlar o‘tkaziladi.',
    category: 'darslar'
  },
  {
    id: 3,
    question: 'O‘qish uchun qanday kompyuter yoki noutbuk kerak?',
    answer: 'Oddiy yoki o‘rtacha kuchi bor noutbuk yetarli! AI vositalarining ko‘pchiligi (Midjourney, ChatGPT, Firefly) bulutda (cloud) ishlaydi, shuning uchun juda kuchli videokarta shart emas.',
    category: 'talablar'
  },
  {
    id: 4,
    question: 'Midjourney va boshqa AI dasturlar pullikmi? Ularga kirish ta’minlanadimi?',
    answer: 'Kurs davomida biz AI dasturlaridan tekin foydalanish usullarini hamda arzon narxlarda jamoaviy aksess olish bo‘yicha to‘liq ko‘rsatma va havolalar beramiz.',
    category: 'tolov'
  },
  {
    id: 5,
    question: 'Kursni tugatgach daromad topishni boshlay olamanmi?',
    answer: 'Albatta! 6-modulimiz aynan Upwork, Fiverr va mahalliy bozorda mijozlar topishga bag‘ishlangan. Shuningdek, qo‘lingizda kamida 5 ta sifatli portfolio keysingiz bo‘ladi.',
    category: 'natija'
  },
  {
    id: 6,
    question: 'Ro‘yxatdan o‘tgandan keyin darslar qachon boshlanadi?',
    answer: 'To‘lov va ro‘yxatdan o‘tish tugatilgach, 24 soat ichida shaxsiy kabinet va Telegram yopiq guruhiga taklifnoma yuboriladi.',
    category: 'darslar'
  }
];
