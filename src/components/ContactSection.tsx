import React, { useState } from 'react';
import { CONSTANTS } from '../types';
import { Phone, Send, Instagram, ArrowUpRight, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenRegister: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenRegister }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', courseType: 'Premium' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bog'lanish va Qabul</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            O'quv Kursiga{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ro'yxatdan O'ting
            </span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Google Forms orqali rasmiy anketani to'ldiring yoki biz bilan to'g'ridan-to'g'ri bog'laning.
            Menejerimiz barcha savollaringizga mamnuniyat bilan javob beradi.
          </p>

          {/* Direct Google Forms CTA Button */}
          <div className="p-8 rounded-3xl bg-slate-800/90 border border-indigo-500/30 shadow-2xl space-y-6 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-indigo-500/30">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Google Forms Orqali Ariza Topshirish</h3>
                <p className="text-xs text-indigo-200">Rasmiy so'rovnomani yangi oynada to'ldiring</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={CONSTANTS.GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-extrabold text-sm py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/30 cursor-pointer group"
              >
                <span>Google Forms So'rovnomasini Ochish</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-white font-bold text-sm border border-slate-600 transition-colors"
              >
                Tezkor Variantlar
              </button>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="space-y-4 pt-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Bevosita Aloqa Ma'lumotlari:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              
              {/* Phone Card */}
              <a
                href={CONSTANTS.PHONE_TEL}
                className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/80 transition-all space-y-1 block group text-center"
              >
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-xs">
                  <Phone className="w-4 h-4" />
                  <span>Telefon</span>
                </div>
                <p className="text-xs font-bold text-white group-hover:text-emerald-300">
                  {CONSTANTS.PHONE}
                </p>
              </a>

              {/* Telegram Card */}
              <a
                href={CONSTANTS.TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-sky-500/80 transition-all space-y-1 block group text-center"
              >
                <div className="flex items-center justify-center gap-2 text-sky-400 font-bold text-xs">
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </div>
                <p className="text-xs font-bold text-white group-hover:text-sky-300">
                  {CONSTANTS.TELEGRAM_HANDLE}
                </p>
              </a>

              {/* Instagram Card */}
              <a
                href={CONSTANTS.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-pink-500/80 transition-all space-y-1 block group text-center"
              >
                <div className="flex items-center justify-center gap-2 text-pink-400 font-bold text-xs">
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </div>
                <p className="text-xs font-bold text-white group-hover:text-pink-300">
                  {CONSTANTS.INSTAGRAM_HANDLE}
                </p>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
