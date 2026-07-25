import React from 'react';
import { ADVANTAGES, GOOGLE_FORM_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import {
  Flame,
  Award,
  FolderCheck,
  Users,
  LockOpen,
  Database,
  Sparkles
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const renderAdvIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-amber-400" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-400" />;
      case 'FolderCheck': return <FolderCheck className="w-6 h-6 text-cyan-400" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-400" />;
      case 'LockOpen': return <LockOpen className="w-6 h-6 text-indigo-400" />;
      case 'Database': return <Database className="w-6 h-6 text-pink-400" />;
      default: return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white relative overflow-hidden text-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>{t('whyUsBadge')}</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            {t('whyUsTitle')}
          </h2>
          <p className="text-slate-600 text-base">
            {t('whyUsSub')}
          </p>
        </div>

        {/* 6 Grid Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-indigo-100 bg-slate-50/80 hover:bg-white hover:border-purple-300 transition-all duration-300 space-y-4 group shadow-xs hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                {renderAdvIcon(item.icon)}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-purple-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certificate & Prompt Vault Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
          
          {/* Certificate Feature Card */}
          <div className="glass-card p-8 rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50/60 via-indigo-50/50 to-white space-y-6 relative overflow-hidden shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                Rasmiy Hujjat
              </span>
              <h3 className="font-heading font-bold text-2xl text-slate-900">
                Xalqaro Shtrix-kodli Sertifikat
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kursni muvaffaqiyatli bitirganingizda, ish beruvchilar va mijozlarga taqdim etishingiz mumkin bo'lgan rasmiy tekshiriluvchi sertifikatga ega bo'lasiz.
              </p>
            </div>

            {/* Visual Certificate Mockup */}
            <div className="p-6 rounded-2xl bg-white border border-amber-200 space-y-4 relative shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-500" />
                  <span className="font-heading font-bold text-slate-900 text-sm">CERTIFICATE OF COMPLETION</span>
                </div>
                <span className="text-[10px] text-amber-800 font-mono bg-amber-100 px-2 py-0.5 rounded font-bold">
                  VERIFIED #AI-2026-8942
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Ushbu sertifikat egasi <b>"AI Grafik Dizayn va Prompt Engineering"</b> professional kursini muvaffaqiyatli tamomlaganini tasdiqlaydi.
              </p>
              <div className="flex items-center justify-between pt-2 text-[10px] text-slate-500 font-medium">
                <span>Mentor: Asom Designer</span>
                <span>Shtrix-kod: ||||| | |||| |||</span>
              </div>
            </div>
          </div>

          {/* Prompt Vault Feature Card */}
          <div className="glass-card p-8 rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50/60 via-blue-50/50 to-white space-y-6 relative overflow-hidden shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200">
                Exclusive Bonus
              </span>
              <h3 className="font-heading font-bold text-2xl text-slate-900">
                500+ Mualliflik Promptlar Bazasi
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sinovdan o'tgan, tayyor kopiya qilish va ishlatish mumkin bo'lgan professional promptlar xazinasi.
              </p>
            </div>

            {/* Prompt Examples List */}
            <div className="space-y-2.5 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white border border-purple-200 text-purple-900 shadow-2xs">
                🔥 <b>Logotiplar:</b> "Futuristic 3D neon logo, minimalist mascot emblem --ar 1:1"
              </div>
              <div className="p-3 rounded-xl bg-white border border-cyan-200 text-cyan-900 shadow-2xs">
                📸 <b>Fotorealizm:</b> "Luxury advertisement photoshoot, cinematic lighting, 8k --v 6.0"
              </div>
              <div className="p-3 rounded-xl bg-white border border-emerald-200 text-emerald-900 shadow-2xs">
                📱 <b>SMM Bannerlar:</b> "Commercial product photography, studio light --ar 4:3"
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

