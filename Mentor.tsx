import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Flame, Globe } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';
import { useLanguage, Language } from '../context/LanguageContext';

interface HeaderProps {
  onRegisterClick?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navCourse'), href: "#about" },
    { name: t('navProgram'), href: "#modules" },
    { name: t('navWhyUs'), href: "#why-us" },
    { name: t('navMentor'), href: "#mentor" },
    { name: t('navGallery'), href: "#gallery" },
    { name: t('navPricing'), href: "#pricing" },
    { name: t('navFAQ'), href: "#faq" },
    { name: t('navContact'), href: "#contact" }
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇬🇧' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white text-xs font-medium py-2 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
            <span className="bg-amber-400/20 text-amber-200 border border-amber-300/30 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
              <Flame className="w-3 h-3 fill-amber-300 text-amber-300" /> {t('newBatch')}
            </span>
            <span>{t('seatsLeft')}</span>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-purple-100 hover:text-white underline underline-offset-4 transition-colors font-semibold"
          >
            {t('reserveSeat')} <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg py-3 text-white'
            : 'bg-[#090d16]/80 backdrop-blur-sm py-4 border-b border-slate-800/60 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 p-0.5 shadow-md shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                  AI DESIGN <span className="bg-gradient-to-r from-purple-400 to-indigo-300 text-transparent bg-clip-text text-xs uppercase px-1.5 py-0.5 rounded bg-purple-500/20 border border-purple-400/30 font-extrabold">Pro</span>
                </span>
                <span className="text-[10px] text-slate-300 font-medium">{t('brandSub')}</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm text-slate-200 hover:text-white font-semibold transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-purple-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Language Selector Tabs & CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Switcher Tab Control */}
              <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-inner">
                {languages.map((lang) => {
                  const isActive = language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm border border-purple-400/30 scale-[1.02]'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                      }`}
                      title={lang.label}
                    >
                      <span className="text-xs">{lang.flag}</span>
                      <span className="uppercase">{lang.code}</span>
                    </button>
                  );
                })}
              </div>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/20 hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300 group shrink-0 border border-purple-400/30"
              >
                <span>{t('register')}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu & Language Selector Button */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Mobile Language Switcher Pill */}
              <div className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-800">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all ${
                      language === lang.code
                        ? 'bg-purple-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/50"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d1322] border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top duration-200">
            {/* Language Selector Inside Mobile Drawer */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-purple-400" /> Til / Язык / Language:
              </span>
              <div className="flex items-center gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      language === lang.code
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'text-slate-400 bg-slate-800/60'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="uppercase">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-200 hover:text-purple-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <span>{t('register')} (Google Form)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

