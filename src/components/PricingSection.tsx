import React, { useState, useEffect } from 'react';
import { PRICING_PLANS } from '../data/courseData';
import { CONSTANTS } from '../types';
import { Check, Sparkles, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PricingSectionProps {
  onOpenRegister: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenRegister }) => {
  // Timer state for early-bird discount
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 45,
    seconds: 20
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kurs Narxlari va Tariflar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            O'zingizga Mos Tarifni Tanlang va Hoziroq Boshlang
          </h2>
          <p className="text-base text-slate-600">
            Hozirgi qabul uchun chegirmali narxlar amal qilmoqda. Joylar soni cheklangan!
          </p>

          {/* Countdown Timer Badge */}
          <div className="pt-2">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <Clock className="w-4 h-4 animate-pulse" />
                <span>Maxsus Chegirma Tugashiga:</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-sm font-extrabold text-white">
                <span className="bg-slate-800 px-2 py-1 rounded-md">{String(timeLeft.days).padStart(2, '0')}d</span>:
                <span className="bg-slate-800 px-2 py-1 rounded-md">{String(timeLeft.hours).padStart(2, '0')}h</span>:
                <span className="bg-slate-800 px-2 py-1 rounded-md">{String(timeLeft.minutes).padStart(2, '0')}m</span>:
                <span className="bg-slate-800 px-2 py-1 rounded-md text-amber-400">{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between relative ${
                  plan.isPopular
                    ? 'bg-slate-900 text-white shadow-2xl ring-4 ring-indigo-500/30 scale-100 lg:-translate-y-2 border border-indigo-500/50'
                    : 'bg-white text-slate-900 shadow-xl border border-slate-200/90 hover:border-indigo-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold shadow-md ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950'
                        : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="text-center pb-4 border-b border-slate-200/20">
                    <h3 className={`text-xl font-extrabold font-heading ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-1 ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div className="my-6 text-center">
                    <span className="text-xs font-bold line-through text-slate-400 block">
                      {plan.originalPrice}
                    </span>
                    <span className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight ${
                      plan.isPopular ? 'text-amber-400' : 'text-indigo-600'
                    }`}>
                      {plan.price}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 my-6 text-xs sm:text-sm">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${
                          plan.isPopular ? 'bg-emerald-500 text-slate-950' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className={plan.isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 mt-auto">
                  <button
                    onClick={onOpenRegister}
                    className={`w-full inline-flex items-center justify-center gap-2 font-extrabold text-xs sm:text-sm py-4 rounded-2xl transition-all shadow-md cursor-pointer ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white shadow-indigo-500/25'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <a
                    href={CONSTANTS.GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[11px] font-semibold text-slate-400 hover:text-indigo-600 mt-2"
                  >
                    Yoki Google Forms orqali ro'yxatdan o'tish ↗
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">100% Sifat va Natija Kafolati</p>
              <p className="text-xs text-slate-500">Agar kurs talablariga mos kela olmasangiz, birinchi 3 dars davomida to'lov qaytarib beriladi.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
