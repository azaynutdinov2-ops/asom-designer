import React from 'react';
import { CONTACT_DATA } from '../constants';
import { Sparkles, Phone, Send, Instagram, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & About */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white leading-none">
                  AI DESIGN <span className="text-purple-400 font-extrabold">ACADEMY</span>
                </span>
                <span className="text-[11px] font-medium text-purple-400/90 tracking-wider">
                  GRAFIK DIZAYN & AI KURSLARI
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Sun’iy intellekt va grafik dizayn bo‘yicha O‘zbekistondagi eng zamonaviy amaliy onlayn ta’lim kursi. Midjourney, Adobe Firefly, Canva AI va Motion AI vositalarini mukammal egallang.
            </p>

            <div className="pt-2">
              <a
                href={CONTACT_DATA.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors"
              >
                <span>Google Form orqali ro‘yxatdan o‘tish</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Bo‘limlar
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">Kurs Haqida & AI Tools</a></li>
              <li><a href="#syllabus" className="hover:text-purple-400 transition-colors">6 Haftalik Dastur</a></li>
              <li><a href="#why-us" className="hover:text-purple-400 transition-colors">Afzalliklarimiz</a></li>
              <li><a href="#mentor" className="hover:text-purple-400 transition-colors">Mentor Asomiddin</a></li>
              <li><a href="#results" className="hover:text-purple-400 transition-colors">Talabalar Ishlari & Video</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Tariflar & Narxlar</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">Savollar (FAQ)</a></li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Aloqa & Ijtimoiy Tarmoqlar
            </p>

            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:${CONTACT_DATA.phoneRaw}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{CONTACT_DATA.phone}</span>
              </a>

              <a
                href={CONTACT_DATA.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Send className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Telegram: {CONTACT_DATA.telegram}</span>
              </a>

              <a
                href={CONTACT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Instagram: {CONTACT_DATA.instagram}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Grafik Dizayn AI Kurslari. Barcha huquqlar himoyalangan.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
          >
            <span>Yuqoriga qaytish</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
