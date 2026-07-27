import React, { useState } from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2, Zap, Shield, Wand2, RefreshCw, Star, Layers } from 'lucide-react';
import { CONSTANTS } from '../types';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  const samplePrompts = [
    {
      title: "3D Cyberpunk Mascot",
      prompt: "Isometric 3D mascot robot designer wearing neon headphones, octane render, soft studio lighting --v 6.0",
      beforeTime: "12 soat (Hand 3D)",
      afterTime: "25 soniya (AI)",
      imgBefore: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
      imgAfter: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      tool: "Midjourney V6"
    },
    {
      title: "Eco Product Packaging",
      prompt: "Minimalist organic coffee box mock-up, luxury embossing, botanical beige palette, photorealistic studio shot",
      beforeTime: "16 soat (C4D/3D)",
      afterTime: "30 soniya (AI)",
      imgBefore: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
      imgAfter: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600&auto=format&fit=crop",
      tool: "Adobe Firefly 3"
    },
    {
      title: "Generative Motion Video",
      prompt: "Futuristic neon electric car zooming through rainy Tokyo streets at midnight, cinematic motion blur 4k",
      beforeTime: "3 kun (After Effects)",
      afterTime: "1 daqiqa (AI Video)",
      imgBefore: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=600&auto=format&fit=crop",
      imgAfter: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      tool: "Runway Gen-2"
    }
  ];

  const currentSample = samplePrompts[activePromptIndex];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/40 to-slate-50">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-300/30 via-purple-300/20 to-pink-300/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/80 border border-indigo-200/80 text-indigo-900 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-xs animate-in fade-in slide-in-from-bottom duration-300">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping" />
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Midjourney, Adobe Firefly & Canva AI Bo'yicha №1 Onlayn Kurs</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Sun'iy Intellekt Bilan <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Grafik Dizaynda
              </span>{" "}
              Yangi Bosqichga Chiqing
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Dizayn yaratish tezligingizni <strong className="text-slate-900 font-semibold">10x barobarga oshiring</strong>. 
              Midjourney V6, Adobe Firefly va Canva AI yordamida noyob logotiplar, brending hamda 
              AI videolarni professional darajada yaratishni 6 yillik tajribali mentordan o'rganing.
            </p>

            {/* Key bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100+ Shogirdlar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>90% Amaliy mashg'ulot</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Rasmiy Sertifikat</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-indigo-200 group-hover:rotate-12 transition-transform" />
                <span>Ro'yxatdan o'tish</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={CONSTANTS.GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-6 py-4 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-indigo-300"
              >
                <span>Google Form havolasi</span>
                <ArrowRight className="w-4 h-4 text-indigo-600" />
              </a>
            </div>

            {/* Contact quick links */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                📞 Tel: <a href={CONSTANTS.PHONE_TEL} className="text-slate-800 font-bold hover:text-indigo-600">{CONSTANTS.PHONE}</a>
              </span>
              <span className="flex items-center gap-1.5">
                ✈️ Telegram: <a href={CONSTANTS.TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sky-600 font-bold hover:underline">{CONSTANTS.TELEGRAM_HANDLE}</a>
              </span>
              <span className="flex items-center gap-1.5">
                📸 Instagram: <a href={CONSTANTS.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold hover:underline">{CONSTANTS.INSTAGRAM_HANDLE}</a>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive AI Comparison / Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer Glass Container */}
              <div className="glass-card rounded-3xl p-5 border border-white/80 shadow-2xl relative">
                
                {/* Header inside Card */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-400 ml-2">ai-studio-design.prompt</span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {currentSample.tool}
                  </span>
                </div>

                {/* Prompt tabs switcher */}
                <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1 no-scrollbar">
                  {samplePrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePromptIndex(idx)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
                        activePromptIndex === idx
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>

                {/* Interactive Before & After Image Slider */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden select-none border border-slate-200 shadow-inner group">
                  
                  {/* Image AFTER (AI Result) */}
                  <img
                    src={currentSample.imgAfter}
                    alt="AI Generated Design"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Badge After */}
                  <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                    <Wand2 className="w-3 h-3" />
                    <span>AI Natija ({currentSample.afterTime})</span>
                  </div>

                  {/* Image BEFORE (Traditional manual work) */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden"
                    style={{ width: `${sliderPos}%` }}
                  >
                    <img
                      src={currentSample.imgBefore}
                      alt="Traditional Manual Design"
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-10">
                      An'anaviy Usul ({currentSample.beforeTime})
                    </div>
                  </div>

                  {/* Slider Control Line */}
                  <div
                    className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-2xl z-20"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-indigo-600 border border-slate-200">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Range Input overlay */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />
                </div>

                {/* Prompt Details Box */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1.5 shadow-md">
                  <div className="text-slate-400 text-[10px] uppercase font-bold flex items-center justify-between">
                    <span>Prompt kodi:</span>
                    <span className="text-indigo-400">Tezlik 20x oshdi!</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed italic line-clamp-2">
                    "{currentSample.prompt}"
                  </p>
                </div>

                {/* Bottom stats inside glass card */}
                <div className="mt-4 grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-center">
                  <div className="p-2 rounded-xl bg-indigo-50/80 border border-indigo-100">
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Vaqt tejamkorligi</p>
                    <p className="text-sm font-extrabold text-indigo-700">95% gacha tejash</p>
                  </div>
                  <div className="p-2 rounded-xl bg-purple-50/80 border border-purple-100">
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Sifat Darajasi</p>
                    <p className="text-sm font-extrabold text-purple-700">4K Photorealism</p>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl p-3.5 rounded-2xl border border-slate-200 shadow-xl hidden sm:flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                  100+
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Muvaffaqiyatli Bitiruvchilar</p>
                  <p className="text-[10px] text-slate-500">Tajribali shogirdlar va dizaynerlar</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl p-3 rounded-2xl border border-slate-200 shadow-xl hidden sm:flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-slate-800">4.95 Rating</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
