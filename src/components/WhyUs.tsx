import React from 'react';
import { motion } from 'motion/react';
import { ADVANTAGES } from '../constants';
import { Award, Briefcase, FolderCheck, Users, Zap, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'FolderCheck': return <FolderCheck className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-white via-purple-50/40 to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Afzalliklarimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nega Aynan AI Design Academy ni Tanlashadi?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Biz shunchaki nazariya emas, balki real natijaga yo‘naltirilgan va bozor talabiga to‘liq javob beradigan sifatli ta’lim tizimini taklif etamiz.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-100 to-indigo-100 text-purple-600 flex items-center justify-center mb-6 shadow-inner group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                {getIcon(adv.iconName)}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                {adv.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
