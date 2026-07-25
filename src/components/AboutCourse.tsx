import React from 'react';
import { Sparkles, CheckCircle2, Palette, Share2, Briefcase, Cpu, Zap, ArrowUpRight } from 'lucide-react';
import { AI_TOOLS, TARGET_AUDIENCE, GOOGLE_FORM_URL } from '../constants';

export const AboutCourse: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-100/70 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-purple-600" />
            <span>Kurs Haqida & AI Texnologiyalar</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            Kelajak dizaynini <span className="text-gradient-primary">bugun egallang</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Ushbu kursda siz shunchaki grafik dasturlarni emas, balki sun'iy intellekt neyrotarmoqlari bilan professional darajada ishlash, promptlar yozish va xalqaro frilansda yuqori daromad topishni o'rganasiz.
          </p>
        </div>

        {/* What Will You Learn Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-3xl space-y-4 border border-indigo-100 bg-slate-50/80 hover:border-purple-300 hover:bg-white transition-all shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 border border-purple-200">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">1. Unikal Vizuallar Yaratish</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fotorealistik rasmlar, 3D personajlar, kino posterlari, atirlar va brendlar uchun tijoriy vizuallarni bir necha soniyada generatsiya qilish.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4 border border-indigo-100 bg-slate-50/80 hover:border-purple-300 hover:bg-white transition-all shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700 border border-cyan-200">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">2. Logotip va Brending</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kompaniyalar va startaplar uchun yuzlab unikal logotip variatsiyalarini tayyorlash, ularni vektorga o'tkazish hamda mokaplarga joylash.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4 border border-indigo-100 bg-slate-50/80 hover:border-purple-300 hover:bg-white transition-all shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 border border-indigo-200">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">3. Monetizatsiya va Frilans</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Upwork, Fiverr va Instagram orqali chet el hamda mahalliy mijozlarni topish, loyiha smetasini tuzish va yuqori gonorar olish.
            </p>
          </div>
        </div>

        {/* Key AI Tools Covered Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
              Siz o'rganadigan <span className="text-gradient-primary">AI Neyrotarmoqlari</span>
            </h3>
            <p className="text-slate-600 text-sm">
              Dunyodagi eng ilg'or va eng talabgir sun'iy intellekt vositalari to'liq o'rgatiladi:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-indigo-100 bg-white hover:border-purple-300 hover:shadow-md transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{tool.logo}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                    {tool.category}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 group-hover:text-purple-700 transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {tool.popularUses.map((use, uIdx) => (
                    <span
                      key={uIdx}
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono"
                    >
                      #{use}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience: Kimlar uchun mo'ljallangan? */}
        <div className="space-y-10 pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
              Ushbu kurs <span className="text-gradient-primary">kimlar uchun mo'ljallangan?</span>
            </h3>
            <p className="text-slate-600 text-sm">
              Kurs dasturi har bir ishtirokchi uchun moslashtirilgan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGET_AUDIENCE.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-indigo-100 bg-slate-50/80 hover:bg-white hover:border-purple-300 space-y-3 relative hover:-translate-y-1 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="inline-block text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full border border-purple-200">
                  {item.badge}
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Register Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white border border-purple-300 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Dizayn sohasida AI inqilobidan ortda qolmong!
              </h4>
              <p className="text-purple-100 text-sm">
                Joylar soni cheklangan. Guruhga qo'shilish uchun Google Form so'rovnomasini to'ldiring.
              </p>
            </div>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-purple-900 bg-white hover:bg-purple-50 transition-colors shadow-lg shrink-0 flex items-center gap-2"
            >
              <span>Arizalarni To'ldirish</span>
              <ArrowUpRight className="w-4 h-4 text-purple-900" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
