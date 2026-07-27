import React from 'react';
import { MENTOR_DATA } from '../data/courseData';
import { CONSTANTS } from '../types';
import { Award, CheckCircle2, Phone, Send, Instagram, Sparkles, User, Briefcase, Star } from 'lucide-react';
import asomMentorImg from '../assets/images/asom_mentor_real_1785150678638.jpg';

interface MentorSectionProps {
  onOpenRegister: () => void;
}

export const MentorSection: React.FC<MentorSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="mentor" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Sizning Mentoringiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mentor Bilan Tanishing
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mentor Visual Image Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800/80 group">
                <img
                  src={asomMentorImg}
                  alt="Asom Designer Mentor"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-600 text-white shadow-md inline-block mb-2">
                    Asom Designer
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    {MENTOR_DATA.name}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {MENTOR_DATA.title}
                  </p>
                </div>
              </div>

              {/* Stat Badge 1 */}
              <div className="absolute -bottom-5 -right-5 bg-slate-800/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-700 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                  6+
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Yillik Tajriba</p>
                  <p className="text-[10px] text-slate-400">Grafik & AI Dizayn</p>
                </div>
              </div>

              {/* Stat Badge 2 */}
              <div className="absolute -top-5 -left-5 bg-slate-800/90 backdrop-blur-xl p-3.5 rounded-2xl border border-slate-700 shadow-2xl flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-white">100+ Shogirdlar</span>
              </div>

            </div>
          </div>

          {/* Mentor Information & Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Highlight quote requested strictly by prompt */}
            <div className="p-5 rounded-2xl bg-indigo-950/60 border border-indigo-800/80 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                Ekspert Tajribasi
              </span>
              <p className="text-base sm:text-lg font-bold text-indigo-100 leading-relaxed">
                "6 yildan ortiq tajribaga ega dizayner, shu bilan birga AI (sun'iy intellekt) vositalarini ham juda yaxshi biladi."
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {MENTOR_DATA.bio}
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-purple-500 pl-4 py-1 text-sm italic text-slate-400">
              "{MENTOR_DATA.quote}"
            </blockquote>

            {/* Skills Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Mentorning Asosiy Yo'nalishlari va AI Vositalari:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MENTOR_DATA.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact cards for Mentor */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Mentor bilan bevosita bog'lanish:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={CONSTANTS.PHONE_TEL}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{CONSTANTS.PHONE}</span>
                </a>

                <a
                  href={CONSTANTS.TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 text-xs font-semibold border border-sky-500/30 transition-colors"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Telegram: {CONSTANTS.TELEGRAM_HANDLE}</span>
                </a>

                <a
                  href={CONSTANTS.INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 text-xs font-semibold border border-pink-500/30 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram: {CONSTANTS.INSTAGRAM_HANDLE}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
