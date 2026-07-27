import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Wand2, Cpu, ImagePlus, Video, UserCheck, Target, Zap, Rocket } from 'lucide-react';
import { AI_TOOLS } from '../constants';

export const AboutCourse: React.FC = () => {
  const targetAudience = [
    {
      title: 'Boshlovchilar va Havaskorlar',
      description: 'Dizayn sohasi bo‘yicha tajribangiz bo‘lmasa ham, AI yordamida 0 dan tez va professional natijaga chiqmoqchi bo‘lsangiz.',
      icon: Target,
      bg: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Tajribali va SMM Dizaynerlar',
      description: 'Ish tezligingizni va g‘oyalar berish qobiliyatingizni 10x ga oshirib, ko‘proq buyurtmalar va yuqori daromad olmoqchi bo‘lsangiz.',
      icon: Zap,
      bg: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Frilanserlar va Kopirayterlar',
      description: 'Mijozlarga nafaqat matn yoki oddiy post, balki tayyor AI vizuallari va video kontentlar sotib daromadni ko‘paytirmoqchi bo‘lsangiz.',
      icon: Rocket,
      bg: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Tadbirkorlar va SMM Mutaxassislar',
      description: 'O‘z loyihangiz yoki mijozlaringiz uchun tashqi dizaynerlarga pul sarflamay, AI orqali arzon va sifatli kontent tayyorlash uchun.',
      icon: UserCheck,
      bg: 'bg-teal-50 text-teal-600'
    }
  ];

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Wand2': return <Wand2 className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'ImagePlus': return <ImagePlus className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kurs Haqida & AI Instrumentlar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nima O‘rgatiladi va Qaysi AI Vositalari Bilan Ishlaysiz?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Biz sizga shunchaki tugmalarni bosishni emas, balki sun’iy intellekt vositalaridan tijorat va real dizayn loyihalarida unumli foydalanishni chuqur o‘rgatamiz.
          </p>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {AI_TOOLS.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-purple-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${tool.color} text-white flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform`}>
                  {getToolIcon(tool.iconName)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-purple-600/90 mb-3">
                  {tool.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>To‘liq darslik va amaliyot</span>
                <span className="text-purple-600 font-bold">100% Amaliy</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Who is it for? */}
        <div className="mt-16 bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ushbu Kurs Kimlar Uchun Mo‘ljallangan?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Kurs dasturi noldan boshlab har qanday darajadagi ishtirokchilar uchun moslashtirilgan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((target, idx) => {
              const IconComp = target.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50/80 hover:bg-purple-50/50 border border-slate-200/60 hover:border-purple-200 transition-all duration-300 flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl ${target.bg} shrink-0`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {target.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {target.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
