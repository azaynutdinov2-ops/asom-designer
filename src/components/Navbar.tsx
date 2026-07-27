import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ExternalLink, Phone, Send } from 'lucide-react';
import { CONTACT_DATA } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Kurs haqida', href: '#about' },
    { name: 'Dastur', href: '#syllabus' },
    { name: 'Afzalliklar', href: '#why-us' },
    { name: 'Mentor', href: '#mentor' },
    { name: 'Natijalar', href: '#results' },
    { name: 'Tariflar', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Bog‘lanish', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 leading-none">
                AI DESIGN <span className="text-purple-600 font-extrabold">ACADEMY</span>
              </span>
              <span className="text-[11px] font-medium text-purple-600/80 tracking-wider">
                GRAFIK DIZAYN & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-purple-50/80 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Contacts */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONTACT_DATA.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`tel:${CONTACT_DATA.phoneRaw}`}
              className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors hidden md:flex items-center gap-1.5 text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-purple-600" />
              <span>{CONTACT_DATA.phone}</span>
            </a>

            <a
              href={CONTACT_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-md shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Ro‘yxatdan o‘tish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-purple-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-xl px-4 pt-3 pb-6 mt-2 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-purple-600 hover:bg-purple-50/80 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <a
              href={`tel:${CONTACT_DATA.phoneRaw}`}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-50 rounded-xl"
            >
              <Phone className="w-4 h-4 text-purple-600" />
              <span>{CONTACT_DATA.phone}</span>
            </a>
            <a
              href={CONTACT_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-md shadow-purple-500/20"
            >
              <span>Ro‘yxatdan o‘tish (Google Form)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
