import React from 'react';
import { motion } from 'motion/react';
import { MENTOR_INFO, CONTACT_DATA } from '../constants';
import { Award, CheckCircle2, Send, Instagram, Phone, ExternalLink, Sparkles, UserCheck } from 'lucide-react';

export const Mentor: React.FC = () => {
  return (
    <section id="mentor" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Ambient Lighting background overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-lg opacity-40 animate-pulse" />
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/20 shadow-2xl">
                  <img
                    src={MENTOR_INFO.image}
                    alt={MENTOR_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20">
                    <p className="text-xs uppercase tracking-wider text-purple-300 font-bold">Bosh Mentor & AI Coach</p>
                    <p className="text-lg font-bold text-white">{MENTOR_INFO.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Mentor Haqida</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {MENTOR_INFO.name}
              </h2>

              {/* Exact Requested Text Highlight */}
              <div className="bg-purple-900/40 border-l-4 border-purple-400 p-4 rounded-r-2xl backdrop-blur-sm">
                <p className="text-base sm:text-lg font-semibold text-purple-100 italic leading-relaxed">
                  "6 yildan ortiq tajribaga ega dizayner, shu bilan birga AI (sun'iy intellekt) vositalarini ham juda yaxshi biladi"
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {MENTOR_INFO.bio}
              </p>

              {/* Mentor Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3">
                {MENTOR_INFO.stats.map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-3.5 text-center">
                    <p className="text-2xl font-black text-purple-300">{stat.value}</p>
                    <p className="text-xs text-slate-400 font-medium mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2.5">
                  Asosiy Ko‘nikmalar:
                </p>
                <div className="flex flex-wrap gap-2">
                  {MENTOR_INFO.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold text-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Social Contacts */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                <a
                  href={CONTACT_DATA.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-purple-600/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram ({CONTACT_DATA.telegram})</span>
                </a>

                <a
                  href={CONTACT_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold text-sm transition-colors shadow-lg"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram ({CONTACT_DATA.instagram})</span>
                </a>

                <a
                  href={`tel:${CONTACT_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-purple-300" />
                  <span>{CONTACT_DATA.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
