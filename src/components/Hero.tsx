import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Play, Zap, ShieldCheck, Flame, Copy, Check } from 'lucide-react';
import { GOOGLE_FORM_URL, IMAGES, COURSE_STATS } from '../constants';

export const Hero: React.FC = () => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const samplePrompt = "Luxury perfume bottle, iridescent glass refractions, golden liquid splash, floating orchids, photorealistic advertisement --ar 4:3 --v 6.0";

  const handleCopy = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-[#090d16] text-white">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span>Sun'iy Intellekt Bilan Zamonaviy Grafik Dizayn Kursi</span>
            </div>

            {/* Main Headline (Pure White) */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Grafik dizaynni <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">Sun'iy Intellekt (AI)</span> yordamida o'rganing
            </h1>

            {/* Subtitle (Clear High-Contrast White/Slate) */}
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <b className="text-white">Midjourney v6, Adobe Firefly, Canva AI</b> va <b className="text-white">ChatGPT 4o</b> yordamida dizayn yaratish tezligingizni <b className="text-amber-300">10 barobar oshiring</b> va xalqaro frilans bozorida daromad toping.
            </p>

            {/* Key Benefits List (Pure White Text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-white text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><b className="text-white">100% Amaliyot</b> va 5+ real portfolio loyihasi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><b className="text-white">500+ Tayyor AI Promptlar</b> bazasi sovg'a</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><b className="text-white">Xalqaro Sertifikat</b> va shtrix-kod</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><b className="text-white">24/7 Mentor</b> yordami va shaxsiy feedback</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/40 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group border border-purple-400/30"
              >
                <span>Ro'yxatdan O'tish</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#modules"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <Play className="w-4 h-4 text-purple-400 fill-purple-400" />
                <span>Dasturni Ko'rish</span>
              </a>
            </div>

            {/* Trust Signal Note */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Google Forms orqali tezkor va xavfsiz ro'yxatdan o'ting</span>
            </div>

          </div>

          {/* Right Column: Hero Graphic Showcase with Live AI Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow frame behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur-md opacity-40 pointer-events-none" />

            <div className="relative glass-card rounded-3xl overflow-hidden border border-purple-500/30 bg-slate-900/90 shadow-2xl">
              
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden group bg-slate-950">
                <img
                  src={IMAGES.hero}
                  alt="AI Graphic Design Workspace"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                {/* Live Pill Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-purple-500/40 text-xs font-bold text-purple-300 flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Midjourney v6 Realtime Render</span>
                </div>
              </div>

              {/* Prompt Interactive Showcase Box */}
              <div className="p-5 bg-slate-950 space-y-3 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-purple-300 font-bold">
                    <Zap className="w-3.5 h-3.5" /> /imagine prompt:
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded border border-slate-700 text-slate-200 font-sans"
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Nusxalandi!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Promptni nusxalash</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-purple-200 leading-relaxed">
                  "{samplePrompt}"
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1 font-medium">
                  <span>Generatsiya vaqti: <b className="text-slate-200">12 soniya</b></span>
                  <span className="text-purple-400 font-bold">4K Photorealistic</span>
                </div>
              </div>

            </div>

            {/* Floating Stat Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-card p-3.5 rounded-2xl border border-purple-500/30 bg-slate-900/95 shadow-2xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30 text-amber-300">
                <Flame className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-slate-300 font-medium">Bitta dizayn tayyorlash</p>
                <p className="text-sm font-bold text-white">4 soat emas, 15 minut!</p>
              </div>
            </div>

          </div>

        </div>

        {/* Counter Stats Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {COURSE_STATS.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left space-y-1 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-sm">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
                {stat.value}
              </div>
              <p className="text-sm font-bold text-white">{stat.label}</p>
              <p className="text-xs text-purple-300 font-medium">{stat.badge}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
