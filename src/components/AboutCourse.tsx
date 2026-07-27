import React, { useState } from 'react';
import { Sparkles, Target, Zap, Cpu, Users, Palette, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutCourseProps {
  onOpenRegister: () => void;
}

export const AboutCourse: React.FC<AboutCourseProps> = ({ onOpenRegister }) => {
  const [activeTab, setActiveTab] = useState<'beginners' | 'designers' | 'smm' | 'freelancers'>('beginners');

  const targetAudiences = [
    {
      id: 'beginners',
      title: "Boshlang'ichlar uchun",
      icon: Users,
      badge: "Noldan Boshlash",
      description: "Grafik dizaynda mutlaqo tajribasi bo'lmagan, lekin zamonaviy va daromadli kasbni tez egallashni xohlovchilar uchun.",
      outcomes: [
        "AI neyrotarmoqlari yordamida tezkor dizayn tayyorlash",
        "Murakkab dasturlarga haftalab vaqt sarflamaslik",
        "1-oydayoq birinchi tijorat loyihalarini yaratish"
      ]
    },
    {
      id: 'designers',
      title: "Grafik Dizaynerlar uchun",
      icon: Palette,
      badge: "Tezlikni 10x Oshirish",
      description: "Rutina va bir xil ishlardan charchagan, loyihalarni topshirish vaqtini 10 barobar qisqartirishni istagan mutaxassislar.",
      outcomes: [
        "Photorealistic mockup va vizuallarni soniyalarda yaratish",
        "Klientlarga birdaniga 5 xil variant taqdim eta olish",
        "AI Video va Motion Graphics orqali narxini 2-3 barobarga oshirish"
      ]
    },
    {
      id: 'smm',
      title: "SMM va Kontentchilar",
      icon: Zap,
      badge: "Cheksiz Kontent",
      description: "Ijtimoiy tarmoqlar uchun doimiy va noyob vizual kontent, sotuvchi poster va bannerlar yaratishi kerak bo'lganlar.",
      outcomes: [
        "Stok fotolarga pul sarflamasdan o'z AI vizuallarini yaratish",
        "Canva AI orqali 1 soatda 20 ta tayyor post tayyorlash",
        "Trenddagi AI animatsiyalar bilan visual yoritish"
      ]
    },
    {
      id: 'freelancers',
      title: "Frilanserlar va Tadbirkorlar",
      icon: Target,
      badge: "Yuqori Daromad",
      description: "Xalqaro hamda mahalliy bozorda xizmat ko'rsatib, kamroq vaqtda ko'proq buyurtma bajarmoqchi bo'lganlar.",
      outcomes: [
        "Upwork, Fiverr hamda Telegram orqali qimmat mijozlarni topish",
        "Dizayn studiya ochmasdan turib kompleks brending xizmatini taklif etish",
        "Portfolioingizni xalqaro darajaga olib chiqish"
      ]
    }
  ];

  const currentAudience = targetAudiences.find(a => a.id === activeTab)!;

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Kurs Haqida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ushbu Kurs Sizga Nimani Beradi va Kimlar Uchun Mo'ljallangan?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Sun'iy intellekt (AI) — bu shunchaki trend emas, balki grafik dizaynerlar uchun yangi davr quroli. 
            Kurs davomida siz nazariyadan to'liq qochib, 100% amaliy va tijoriy vositalar bilan ishlaysiz.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 hover:border-indigo-300 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold mb-5 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Eng So'nggi AI Vositalari</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Midjourney V6, Adobe Firefly 3, Canva AI, Runway Gen-2 va ChatGPT-4o bilan professional darajada ishlash sirlari.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 hover:border-indigo-300 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold mb-5 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Prompt Injiniringi (Prompt Engineering)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To'g'ri kalit so'zlar, kamera rakurslari va uslubiy parametrlarni berish orqali aynan miyangizdagi g'oyani tasvirga ko'chirish.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 hover:border-indigo-300 transition-all hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-pink-600 text-white flex items-center justify-center font-bold mb-5 shadow-md shadow-pink-500/20 group-hover:scale-110 transition-transform">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Brending & AI Video Animatsiya</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Faqat statik rasmlar emas, balki logotiplarni vektorga o'tkazish, brendbuklar hamda harakatli AI reklama roliklarini tayyorlash.
            </p>
          </div>
        </div>

        {/* Interactive "Kimlar uchun?" Persona Explorer */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center md:text-left mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Siz Qaysi Toifaga Kirasiz?
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              O'zingizga mos yo'nalishni tanlang va ushbu kurs sizga qanday natija berishini ko'ring:
            </p>
          </div>

          {/* Tabs header */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-slate-800">
            {targetAudiences.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                      : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30">
                {currentAudience.badge}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                {currentAudience.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentAudience.description}
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Erishiladigan natijalar:</p>
                {currentAudience.outcomes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenRegister}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  <span>Kursda joy band qilish</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Callout */}
            <div className="lg:col-span-5 bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <span className="text-xs font-mono text-slate-400">Xulosa va taqqoslov</span>
                <span className="text-xs font-bold text-emerald-400">10x Tezroq</span>
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="text-slate-500 font-mono">Eski an'anaviy usul:</p>
                  <p className="text-slate-300 mt-1 font-semibold">1 ta logotip g'oyasi uchun 2 kun vaqt + chizish</p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-indigo-200">
                  <p className="text-indigo-400 font-mono">AI va Asom Kursidan so'ng:</p>
                  <p className="text-white mt-1 font-semibold">10 ta tayyor noyob konsept + 3D mockup 15 daqiqada!</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
