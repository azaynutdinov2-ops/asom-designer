import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS, CONTACT_DATA } from '../constants';
import { Check, Sparkles, ExternalLink, Zap, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-purple-600" />
            <span>Tariflar va Investitsiya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            O‘zingizga Mos Tarifni Tanlang
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            AI orqali kelajak dizayneri bo‘lish va daromadingizni oshirish uchun qulay tarif va to‘lov variantlari.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl scale-[1.03] border-2 border-purple-400'
                    : 'bg-white border border-purple-100 shadow-xl hover:shadow-2xl text-slate-900'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-md ${
                    isPopular
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                      : 'bg-purple-100 text-purple-800 border border-purple-200'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Desc */}
                  <div>
                    <h3 className={`text-xl font-extrabold tracking-tight ${isPopular ? 'text-purple-300' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="pt-2 border-t border-slate-200/20">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl sm:text-4xl font-black ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-xs ${isPopular ? 'text-purple-300' : 'text-slate-500'}`}>
                        / {plan.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs line-through text-slate-400 font-semibold">
                        {plan.originalPrice}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Chegirma
                      </span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 pt-4 border-t border-slate-200/20">
                    <p className={`text-xs font-bold uppercase tracking-wider ${isPopular ? 'text-purple-300' : 'text-slate-500'}`}>
                      Tarifga kiradi:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-purple-400' : 'text-purple-600'}`} />
                          <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Registration CTA Button */}
                <div className="pt-8">
                  <a
                    href={CONTACT_DATA.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl font-bold text-sm shadow-xl transition-all transform hover:-translate-y-0.5 text-center ${
                      isPopular
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white shadow-purple-500/30'
                        : 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20'
                    }`}
                  >
                    <span>Ro‘yxatdan o‘tish (Google Form)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security / Guarantee Banner */}
        <div className="mt-16 bg-purple-50/80 rounded-3xl p-6 sm:p-8 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Savolingiz bormi yoki mos tarifni tanlashga ikkalanayapsizmi?</h4>
              <p className="text-sm text-slate-600">Bizning guruh sizga konsultatsiya beradi va tarif bo‘yicha to‘liq tushuntiradi.</p>
            </div>
          </div>

          <a
            href={CONTACT_DATA.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shrink-0 transition-colors"
          >
            <span>Telegramda konsultatsiya</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
