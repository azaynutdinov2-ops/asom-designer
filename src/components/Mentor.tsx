import React from 'react';
import { MENTOR_DATA, GOOGLE_FORM_URL, CONTACT_INFO } from '../constants';
import { Award, CheckCircle2, Sparkles, Star, Briefcase, ArrowUpRight, ShieldCheck, Youtube } from 'lucide-react';

export const Mentor: React.FC = () => {
  return (
    <section id="mentor" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-purple-600" />
            <span>Kurs Rahbari va Mentor</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            Mentor <span className="text-gradient-primary">Haqida</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Dizayn va AI sohasida amaliy bilim beruvchi tajribali mentor bilan o'rganing.
          </p>
        </div>

        {/* Mentor Profile Main Light Glass Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-indigo-100/90 bg-white/90 shadow-xl shadow-indigo-100/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Mentor Photo Column */}
            <div className="lg:col-span-5 relative mx-auto lg:mx-0 w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 rounded-3xl blur-md opacity-30 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-indigo-200 aspect-[4/5] shadow-lg bg-slate-100">
                <img
                  src={MENTOR_DATA.image}
                  alt={MENTOR_DATA.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-indigo-100 text-center shadow-lg">
                  <p className="font-heading font-bold text-base text-slate-900">{MENTOR_DATA.name}</p>
                  <p className="text-xs text-purple-600 font-semibold">{MENTOR_DATA.role}</p>
                </div>
              </div>
            </div>

            {/* Mentor Details Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-200 text-xs font-semibold mb-2">
                  {MENTOR_DATA.experience}
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                  {MENTOR_DATA.name}
                </h3>
                {/* Mandatory text: 6 yildan ortiq tajribaga ega dizayner, shu bilan birga AI (sun'iy intellekt) vositalarini ham juda yaxshi biladi. */}
                <p className="text-slate-700 text-base leading-relaxed mt-3 font-medium p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100/80">
                  "{MENTOR_DATA.bio}"
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {MENTOR_DATA.stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-indigo-100 text-center shadow-xs">
                    <p className="font-heading font-extrabold text-2xl text-purple-600">{stat.value}</p>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase text-purple-700 tracking-wider">
                  Afzalliklari:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  {MENTOR_DATA.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-indigo-100 shadow-2xs">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md transition-all group"
                >
                  <span>Mentordan O'rganish Uchun Ro'yxatdan O'tish</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={CONTACT_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 transition-all"
                >
                  <Youtube className="w-4 h-4 text-red-600 fill-red-600" />
                  <span>YouTube Kanal: @Asom.teacher</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
