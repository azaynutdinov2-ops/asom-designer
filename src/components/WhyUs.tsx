import React from 'react';
import { BENEFITS } from '../data/courseData';
import { Zap, Award, FolderCheck, UserCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Zap: Zap,
    Award: Award,
    FolderCheck: FolderCheck,
    UserCheck: UserCheck,
    Users: Users,
    Sparkles: Sparkles
  };

  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nega Aynan Bizning Kurs?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nega Yuzlab O'quvchilar Aynan Asom Designer Kursini Tanlamoqda?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Shunchaki nazariya emas, balki real daromad va amaliy natijaga yo'naltirilgan o'quv tizimi.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Highlight Badge */}
                <div className="inline-block mb-4 px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold">
                  {item.highlight}
                </div>

                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold mb-4 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bonus Callout Box */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-black uppercase">
              Eksklyuziv Bonus
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              1000+ Tijorat AI Promptlar Baza Shabloni Tekin Sovg'a!
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Kursga yozilgan har bir ishtirokchiga Asom Designer tomonidan 3 yil davomida yig'ilgan va sinovdan o'tgan logotip, 3D, brending va foto-realistik promptlar to'plami bepul taqdim etiladi.
            </p>
          </div>

          <div className="shrink-0 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-center space-y-2 max-w-xs">
            <p className="text-xs text-amber-300 font-mono uppercase font-bold">Qiymati: 1,200,000 so'm</p>
            <p className="text-xl font-extrabold text-white">Siz uchun 0 so'm (BEPUL)</p>
            <p className="text-[11px] text-slate-300">Faqat ushbu guruh o'quvchilari uchun</p>
          </div>
        </div>

      </div>
    </section>
  );
};
