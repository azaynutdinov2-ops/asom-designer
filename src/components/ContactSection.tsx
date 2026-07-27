import React, { useState } from 'react';
import { CONTACT_DATA } from '../constants';
import { Phone, Send, Instagram, ExternalLink, Sparkles, CheckCircle2, MessageSquare, User, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', courseTariff: 'PRO / VIP' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    // Automatically redirect to Google Form in a new window after capturing request
    window.open(CONTACT_DATA.googleFormUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-purple-50/50 to-indigo-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-purple-100 shadow-2xl overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Contacts & Google Form Link */}
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-purple-600" />
                <span>Bog‘lanish & Konsultatsiya</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Kursga Ro‘yxatdan O‘ting yoki Konsultatsiya Oling
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Joylar soni cheklangan. Google Form orqali anketani to‘ldiring yoki biz bilan quyidagi aloqa kanallari orqali bog‘laning.
              </p>

              {/* Main Primary Google Form Button */}
              <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-6 rounded-2xl text-white space-y-3 shadow-xl shadow-purple-500/20">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-300" />
                  <span>Rasmiy Google Forms Anketa:</span>
                </h3>
                <p className="text-xs text-purple-100 leading-relaxed">
                  Ro‘yxatdan o‘tish tugmasini bosish orqali maxsus Google Anketani to‘ldiring va chegrimali o‘rinni band qiling.
                </p>
                <a
                  href={CONTACT_DATA.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-purple-900 bg-white hover:bg-slate-100 transition-all shadow-md"
                >
                  <span>Ro‘yxatdan O‘tish (Google Forms)</span>
                  <ExternalLink className="w-4 h-4 text-purple-700" />
                </a>
              </div>

              {/* Direct Contacts Info Box */}
              <div className="space-y-4 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Bizning Doimiy Aloqa Ma’lumotlarimiz:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={`tel:${CONTACT_DATA.phoneRaw}`}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-200 transition-all flex flex-col items-center text-center group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">Telefon</span>
                    <span className="text-xs font-bold text-slate-900 mt-0.5">{CONTACT_DATA.phone}</span>
                  </a>

                  <a
                    href={CONTACT_DATA.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-200 transition-all flex flex-col items-center text-center group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Send className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">Telegram</span>
                    <span className="text-xs font-bold text-slate-900 mt-0.5">{CONTACT_DATA.telegram}</span>
                  </a>

                  <a
                    href={CONTACT_DATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-200 transition-all flex flex-col items-center text-center group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">Instagram</span>
                    <span className="text-xs font-bold text-slate-900 mt-0.5">{CONTACT_DATA.instagram}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Quick Callback / Application Form */}
            <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                Tezkor Konsultatsiya So‘rovi
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Ism va telefon raqamingizni qoldiring, menejerimiz 15 daqiqa ichida bog‘lanadi.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold">Arizangiz Qabul Qilindi!</h4>
                  <p className="text-xs leading-relaxed text-emerald-800">
                    Siz avtomot ravishda rasmiy Google Form sahifasiga yo‘naltirildingiz. Tez orada operatorimiz aloqaga chiqadi.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-purple-700 underline"
                  >
                    Qayta ariza yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1 block">
                      Ismingiz va Familiyangiz:
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor Alimov"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 text-sm font-medium outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1 block">
                      Telefon Raqamingiz:
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 text-sm font-medium outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1 block">
                      Sizni Qiziqtirgan Tarif:
                    </label>
                    <select
                      value={formData.courseTariff}
                      onChange={(e) => setFormData({ ...formData, courseTariff: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 text-sm font-medium outline-none bg-white"
                    >
                      <option value="PRO / VIP">PRO / VIP (Tavsiya etiladi)</option>
                      <option value="STANDART">STANDART</option>
                      <option value="INDIVIDUAL">INDIVIDUAL / 1-ON-1</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Yuborish & Google Formga O‘tish</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Ma’lumotlaringiz maxfiy saqlanadi va uchinchi shaxslarga berilmaydi.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
