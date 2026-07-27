import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ExternalLink, CheckCircle2, Star, Play, Users, Award, ShieldCheck } from 'lucide-react';
import { CONTACT_DATA } from '../constants';
import aiHeroImg from '../assets/images/ai_hero_graphic_1785152661929.jpg';

interface HeroProps {
  onOpenVideo: (url: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-purple-50/50 via-indigo-50/30 to-white">
      {/* Background ambient lighting effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-300/30 via-indigo-200/40 to-blue-300/30 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/15 blur-2xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Kelajak kasbi: AI (Sun'iy Intellekt) & Grafik Dizayn</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Sun’iy Intellekt Bilan <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                Grafik Dizaynda
              </span>{' '}
              Inqilob Qiling!
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Midjourney, Adobe Firefly, Canva AI va boshqa zamonaviy AI qurollari yordamida dizayn yaratish tezligingizni <strong className="text-slate-800">10 baravarga oshiring</strong> va yuqori daromadli professional dizaynerga aylaning.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                "Midjourney v6, Firefly & Canva AI o'rgatiladi",
                '100+ muvaffaqiyatli bitiruvchilar va shogirdlar',
                '5+ ta tayyor portfolio keyslari',
                '6+ yil tajribali mentor Asomiddin ko‘magi'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href={CONTACT_DATA.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl shadow-purple-500/30 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
              >
                <span>Ro‘yxatdan o‘tish</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <a
                href="#syllabus"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-purple-200 shadow-sm transition-all text-center"
              >
                <span>Kurs dasturi</span>
                <ArrowRight className="w-4 h-4 text-purple-600" />
              </a>
            </div>

            {/* Social Trust Bar */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/user_${i}/80/80`}
                      alt={`O'quvchi ${i}`}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="font-bold text-slate-800 ml-1 text-xs">4.9/5</span>
                  </div>
                  <p className="text-slate-500 text-xs">100+ mamnun shogirdlar</p>
                </div>
              </div>

              <div className="flex items-center gap-4 font-semibold text-slate-700">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Sertifikatli kurs
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-3xl blur-xl opacity-30 animate-pulse pointer-events-none" />

              {/* Main Artwork Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-purple-100 shadow-2xl p-3 sm:p-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img
                    src={aiHeroImg}
                    alt="AI Graphic Design Showcase"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Floating Video Preview Button */}
                  <button
                    onClick={() => onOpenVideo(
                      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                      'Mentor AI Showreel'
                    )}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 hover:bg-white text-purple-600 flex items-center justify-center shadow-lg transition-transform hover:scale-110 group/btn"
                    aria-label="Play showreel video"
                  >
                    <Play className="w-7 h-7 fill-purple-600 ml-1 text-purple-600" />
                  </button>

                  {/* Card Bottom Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs uppercase tracking-widest text-purple-300 font-semibold">AI Generated Artwork</p>
                    <p className="text-sm font-bold truncate">Prompt: 3D Isometric Neon AI Interface Render</p>
                  </div>
                </div>

                {/* Floating Badge 1: Students Counter */}
                <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-purple-100 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">O‘quvchilar soni</p>
                    <p className="text-base font-extrabold text-slate-900">100+ Shogirdlar</p>
                  </div>
                </div>

                {/* Floating Badge 2: AI Power Badge */}
                <div className="absolute -top-4 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-purple-100 shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                    AI
                  </div>
                  <span className="text-xs font-bold text-slate-800">Midjourney v6 & Firefly</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
