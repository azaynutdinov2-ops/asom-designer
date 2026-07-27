import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Send, Menu, X, ArrowUpRight } from 'lucide-react';
import { CONSTANTS } from '../types';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Kurs haqida", href: "#about" },
    { name: "Dastur", href: "#program" },
    { name: "Nega biz?", href: "#benefits" },
    { name: "Mentor", href: "#mentor" },
    { name: "Natijalar", href: "#results" },
    { name: "Narxlar", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg text-slate-900 tracking-tight leading-tight flex items-center gap-1.5">
                ASOM <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI DESIGN</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium">Grafik Dizayn va Sun'iy Intellekt</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action & Contact Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONSTANTS.TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-sky-500" />
              <span>{CONSTANTS.TELEGRAM_HANDLE}</span>
            </a>

            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Ro'yxatdan o'tish</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="bg-indigo-600 text-white font-semibold text-xs px-3 py-2 rounded-lg"
            >
              Ro'yxat
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 mt-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={CONSTANTS.PHONE_TEL}
                className="flex items-center gap-2 text-sm text-slate-700 px-4 py-2 hover:bg-slate-50 rounded-lg"
              >
                <Phone className="w-4 h-4 text-indigo-600" />
                <span>{CONSTANTS.PHONE}</span>
              </a>
              <a
                href={CONSTANTS.TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-700 px-4 py-2 hover:bg-slate-50 rounded-lg"
              >
                <Send className="w-4 h-4 text-sky-500" />
                <span>Telegram: {CONSTANTS.TELEGRAM_HANDLE}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg mt-2"
              >
                <span>Ro'yxatdan o'tish</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
