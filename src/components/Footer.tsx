import React from 'react';
import { CONSTANTS } from '../types';
import { Sparkles, Phone, Send, Instagram, ArrowUpRight, Heart } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="font-heading font-extrabold text-xl text-white tracking-tight">
                ASOM <span className="text-indigo-400">AI DESIGN</span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Grafik dizayn va Sun'iy Intellekt (Midjourney, Adobe Firefly, Canva AI) yo'nalishidagi eng so'nggi va amaliy onlayn kurs. 
              Kelajak kasbini Asom Designer bilan birga egallang.
            </p>

            {/* Contacts list */}
            <div className="space-y-2 text-xs pt-1">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={CONSTANTS.PHONE_TEL} className="text-white hover:text-indigo-400 font-semibold">{CONSTANTS.PHONE}</a>
              </p>
              <p className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <a href={CONSTANTS.TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 font-semibold">Telegram: {CONSTANTS.TELEGRAM_HANDLE}</a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <a href={CONSTANTS.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 font-semibold">Instagram: {CONSTANTS.INSTAGRAM_HANDLE}</a>
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Menyular</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">Kurs haqida</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Dastur va Modullar</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Nega aynan biz?</a></li>
              <li><a href="#mentor" className="hover:text-white transition-colors">Mentor haqida</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Talabalar ishlari</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Tariflar va Narxlar</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Ko'p beriladigan savollar</a></li>
            </ul>
          </div>

          {/* Registration CTA Column */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Qabul Ochiq</p>
            <p className="text-xs text-slate-400">
              Chegirmali guruhga ro'yxatdan o'tish uchun tugmani bosing va arizangizni qoldiring:
            </p>

            <button
              onClick={onOpenRegister}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-lg cursor-pointer"
            >
              <span>Ro'yxatdan O'tish</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={CONSTANTS.GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-[11px] text-indigo-400 hover:underline"
            >
              Google Forms havolasi ↗
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Asom Designer. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center justify-center gap-1">
            <span>Grafik Dizayn va Sun'iy Intellekt Kursi</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
