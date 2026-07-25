import React, { useState, useEffect } from 'react';
import { PRICING_PLANS, GOOGLE_FORM_URL } from '../constants';
import { Check, Flame, ArrowUpRight, Clock, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 35,
    seconds: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Chegirmali Tariflar & Kafolat</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            O'zingizga mos <span className="text-gradient-primary">Tarifni Tanlang</span>
          </h2>
          <p className="text-slate-600 text-base">
            Chegirmali narxda ro'yxatdan o'tish uchun quyidagi Google Form so'rovnomasini to'ldiring:
          </p>
        </div>

        {/* Live Countdown Banner */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-white border border-purple-200 flex flex-wrap items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Clock className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <p className="text-xs text-slate-800 font-bold">Chegirmali Narx Amal Qilish Vaqti:</p>
              <p className="text-[11px] text-slate-500">Tugashiga oz qoldi!</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mx-auto sm:mx-0 font-mono font-bold text-lg text-amber-700">
            <span className="bg-white px-2.5 py-1 rounded border border-amber-200 shadow-2xs">
              {String(timeLeft.hours).padStart(2, '0')}s
            </span>
            <span>:</span>
            <span className="bg-white px-2.5 py-1 rounded border border-amber-200 shadow-2xs">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span>:</span>
            <span className="bg-white px-2.5 py-1 rounded border border-amber-200 shadow-2xs">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                plan.popular
                  ? 'border-purple-300 bg-white shadow-xl shadow-purple-100/80 md:-translate-y-2'
                  : 'border-indigo-100 bg-slate-50/80 hover:bg-white hover:border-purple-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                {!plan.popular && plan.badge && (
                  <span className="inline-block text-[11px] font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full border border-purple-200">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                      {plan.priceDiscount}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      {plan.priceOriginal}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">/{plan.period}</span>
                </div>

                <hr className="border-slate-100" />

                {/* Features List */}
                <div className="space-y-3 text-xs text-slate-700">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Button linked to Google Form */}
              <div className="pt-8 mt-auto">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all duration-300 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-600/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Security Note */}
        <div className="text-center text-xs text-slate-500 font-medium flex items-center justify-center gap-2 pt-4">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Barcha to'lovlar va ro'yxatga olish Google Forms orqali xavfsiz amalga oshiriladi</span>
        </div>

      </div>
    </section>
  );
};
