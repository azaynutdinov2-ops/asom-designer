import React from 'react';
import { Sparkles, Send, Instagram, Youtube, Globe, ArrowUpRight, Heart } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                AI DESIGN <span className="text-purple-400 text-xs font-mono">PRO</span>
              </span>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Grafik dizaynni sun'iy intellekt (Midjourney, Adobe Firefly, Canva AI) vositalari yordamida eng yuqori darajada o'rgatuvchi zamonaviy onlayn ta'lim platformasi.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/asom_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-purple-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/asom.designer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@Asom.teacher"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors border border-slate-700"
                aria-label="YouTube (@Asom.teacher)"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Behance"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Bo'limlar
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">Kurs Haqida</a></li>
              <li><a href="#modules" className="hover:text-purple-400 transition-colors">Dastur & Modullar</a></li>
              <li><a href="#why-us" className="hover:text-purple-400 transition-colors">Afzalliklar</a></li>
              <li><a href="#mentor" className="hover:text-purple-400 transition-colors">Mentor</a></li>
              <li><a href="#gallery" className="hover:text-purple-400 transition-colors">Talabalar Ishlari</a></li>
            </ul>
          </div>

          {/* Tariflar & Registration */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Ro'yxatdan O'tish
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Start Tarifi</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pro (Premium) Tarifi</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">VIP Mentorship</a></li>
              <li>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 font-semibold hover:underline flex items-center gap-1 mt-1"
                >
                  <span>Google Form Havolasi</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Aloqa
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>📍 Toshkent shahri, IT-Park</p>
              <p>📞 +998 (99) 807-62-75</p>
              <p>✉️ @asom_uz (Telegram)</p>
              <p>🕒 Ish vaqti: 09:00 - 20:00 (Hamma kun)</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} AI DESIGN PRO. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1">
            <span>Mehr bilan tayyorlandi</span> <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>

      </div>
    </footer>
  );
};
