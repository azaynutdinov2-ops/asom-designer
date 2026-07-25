import React, { useState } from 'react';
import { GOOGLE_FORM_URL, CONTACT_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowUpRight, Phone, MessageSquare, Send, CheckCircle2, Youtube } from 'lucide-react';

export const RegistrationCTA: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { t } = useLanguage();

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    // Redirect to Google Forms after brief confirmation
    setTimeout(() => {
      window.open(GOOGLE_FORM_URL, '_blank');
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden text-slate-900">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-purple-200/50 to-indigo-200/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-purple-200 bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Direct Action & Google Form Link */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>{t('ctaBadge')}</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                {t('ctaTitle')}
              </h2>

              <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                {t('ctaSub')}
              </p>

              {/* Primary Google Form Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/20 hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>{t('ctaRegisterBtn')}</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Contact Channels List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs text-slate-700 border-t border-slate-100">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-indigo-100">
                  <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-500 font-semibold">{t('phone')}:</p>
                    <p className="font-bold text-slate-900">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-indigo-100">
                  <MessageSquare className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-500 font-semibold">{t('telegram')}:</p>
                    <a href={CONTACT_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-purple-700 hover:underline">
                      {CONTACT_INFO.telegram}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-indigo-100">
                  <Youtube className="w-4 h-4 text-red-600 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-500 font-semibold">{t('youtube')}:</p>
                    <a href={CONTACT_INFO.youtubeUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-red-700 hover:underline">
                      {CONTACT_INFO.youtube}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Fast Callback Inquiry Card */}
            <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-indigo-100 bg-slate-50 space-y-4">
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  {t('ctaConsultTitle')}
                </h3>
                <p className="text-xs text-slate-500">
                  {t('ctaConsultSub')}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <p className="font-heading font-bold text-lg text-slate-900">{t('ctaSuccess')}</p>
                  <p className="text-xs text-emerald-800 font-medium">
                    {t('ctaSuccessSub')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{t('ctaNameLabel')}</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('ctaNamePlaceholder')}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{t('ctaPhoneLabel')}</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+998 90 123 45 67"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 shadow-2xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{t('ctaSubmitBtn')}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

