import React, { useState, useRef } from 'react';
import { STUDENT_WORKS } from '../data/courseData';
import { StudentWork } from '../types';
import { Sparkles, Play, Pause, Volume2, VolumeX, Eye, Wand2, Users, Star, Award, TrendingUp, X, Copy, Check, Filter } from 'lucide-react';

export const StudentWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'midjourney' | 'aivideo' | 'branding' | 'posters'>('all');
  const [activeModalWork, setActiveModalWork] = useState<StudentWork | null>(null);
  
  // Custom video players state
  const [isPlayingMentorVideo, setIsPlayingMentorVideo] = useState(false);
  const [isMutedMentorVideo, setIsMutedMentorVideo] = useState(true);
  const mentorVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlayingAiMotionVideo, setIsPlayingAiMotionVideo] = useState(false);
  const [isMutedAiMotionVideo, setIsMutedAiMotionVideo] = useState(true);
  const aiMotionVideoRef = useRef<HTMLVideoElement | null>(null);

  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const toggleMentorVideo = () => {
    if (mentorVideoRef.current) {
      if (isPlayingMentorVideo) {
        mentorVideoRef.current.pause();
        setIsPlayingMentorVideo(false);
      } else {
        mentorVideoRef.current.play();
        setIsPlayingMentorVideo(true);
      }
    }
  };

  const toggleAiMotionVideo = () => {
    if (aiMotionVideoRef.current) {
      if (isPlayingAiMotionVideo) {
        aiMotionVideoRef.current.pause();
        setIsPlayingAiMotionVideo(false);
      } else {
        aiMotionVideoRef.current.play();
        setIsPlayingAiMotionVideo(true);
      }
    }
  };

  const filteredWorks = selectedCategory === 'all'
    ? STUDENT_WORKS
    : STUDENT_WORKS.filter(w => w.category === selectedCategory);

  // Find mentor video & second creative AI video
  const mentorVideo = STUDENT_WORKS.find(w => w.id === 3)!;
  const secondAiVideo = STUDENT_WORKS.find(w => w.id === 4)!;

  return (
    <section id="results" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Natijalar & Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Talabalar Ishlari va AI Vizuallar Natijalari
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            100+ shogirdlarimiz va mentorimiz tomonidan yaratilgan haqiqiy tijoriy AI loyihalar. 
            Jonli video va foto vizuallarni ko'rib chiqing.
          </p>
        </div>

        {/* 1. CREATIVE STATISTICAL BLOCKS (100+ Shogirdlar va natijalar) */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-slate-800/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/80 hover:border-indigo-500/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              100<span className="text-indigo-400">+</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">O'quvchi va Shogirdlar</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Muvaffaqiyatli bitirgan kadrlar</p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/80 hover:border-purple-500/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 text-purple-400 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              95<span className="text-purple-400">%</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Daromadga Chiqish</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Frilans va ish o'rinlarida</p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/80 hover:border-pink-500/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-pink-600/30 text-pink-400 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              500<span className="text-pink-400">+</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">AI Loyihalar Yaratildi</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Logotip, brending va vizuallar</p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/80 hover:border-amber-500/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-amber-600/30 text-amber-400 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              4.95<span className="text-amber-400">/5</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">O'quvchilar Bahosi</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Yopiq guruh so'rovnomalari</p>
          </div>

        </div>

        {/* 2. CREATIVE VIDEO SHOWCASE SECTION (2 Featured Videos) */}
        <div className="mt-16 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">Interactive Video Showcase</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Mentor va AI Generativ Video Ishlari
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs text-slate-400 italic">
              Play tugmasini bosib videolarni tomosha qiling
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* VIDEO CARD 1: Mentorning So'nggi AI Video Ishi */}
            <div className="bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-700/90 shadow-2xl relative group">
              <div className="relative aspect-video bg-black overflow-hidden">
                <video
                  ref={mentorVideoRef}
                  src={mentorVideo.mediaUrl}
                  poster={mentorVideo.posterUrl}
                  loop
                  muted={isMutedMentorVideo}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Video Play Overlay Button */}
                <div 
                  onClick={toggleMentorVideo}
                  className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors flex items-center justify-center cursor-pointer group/btn"
                >
                  <button
                    className="w-16 h-16 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center shadow-xl shadow-indigo-600/40 transform group-hover/btn:scale-110 transition-transform"
                    aria-label="Play video"
                  >
                    {isPlayingMentorVideo ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </button>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-md">
                    Mentorning So'nggi Ishi (AI Video)
                  </span>
                </div>

                {/* Sound control */}
                <button
                  onClick={() => setIsMutedMentorVideo(!isMutedMentorVideo)}
                  className="absolute bottom-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md"
                  aria-label="Toggle mute"
                >
                  {isMutedMentorVideo ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Video Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Instrument: {mentorVideo.toolUsed}</span>
                  <span className="text-emerald-400 font-bold">3 kun -&gt; 45 daqiqa</span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  {mentorVideo.title}
                </h4>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs font-mono text-slate-300">
                  <span className="text-indigo-400 font-bold">Prompt: </span>
                  "{mentorVideo.promptUsed}"
                </div>
              </div>
            </div>

            {/* VIDEO CARD 2: Yana Bitta AI Orqali Yaratilgan Kreativ Video/Animatsiya */}
            <div className="bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-700/90 shadow-2xl relative group">
              <div className="relative aspect-video bg-black overflow-hidden">
                <video
                  ref={aiMotionVideoRef}
                  src={secondAiVideo.mediaUrl}
                  poster={secondAiVideo.posterUrl}
                  loop
                  muted={isMutedAiMotionVideo}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Video Play Overlay Button */}
                <div 
                  onClick={toggleAiMotionVideo}
                  className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors flex items-center justify-center cursor-pointer group/btn"
                >
                  <button
                    className="w-16 h-16 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white flex items-center justify-center shadow-xl shadow-purple-600/40 transform group-hover/btn:scale-110 transition-transform"
                    aria-label="Play video"
                  >
                    {isPlayingAiMotionVideo ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </button>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold shadow-md">
                    Kreativ AI Video Animatsiya
                  </span>
                </div>

                {/* Sound control */}
                <button
                  onClick={() => setIsMutedAiMotionVideo(!isMutedAiMotionVideo)}
                  className="absolute bottom-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md"
                  aria-label="Toggle mute"
                >
                  {isMutedAiMotionVideo ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Video Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Muallif: {secondAiVideo.studentName}</span>
                  <span className="text-purple-400 font-bold">Runway Gen-2 AI</span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  {secondAiVideo.title}
                </h4>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs font-mono text-slate-300">
                  <span className="text-purple-400 font-bold">Prompt: </span>
                  "{secondAiVideo.promptUsed}"
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. FILTERABLE GALLERY OF ALL STUDENT WORKS */}
        <div className="mt-16 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Barcha Talabalar Ishlari Galereyasi
              </h3>
              <p className="text-xs text-slate-400 mt-1">Suratni ustiga bosib to'liq ko'rishingiz mumkin</p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-800 p-1.5 rounded-2xl border border-slate-700">
              {[
                { id: 'all', label: 'Barchasi' },
                { id: 'midjourney', label: 'Midjourney V6' },
                { id: 'aivideo', label: 'AI Video' },
                { id: 'branding', label: 'Brending & Logo' },
                { id: 'posters', label: 'Posterlar' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Student Work Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                onClick={() => setActiveModalWork(work)}
                className="bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-indigo-500/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group cursor-pointer"
              >
                {/* Media Image Container */}
                <div className="relative h-60 overflow-hidden bg-slate-950">
                  <img
                    src={work.type === 'video' ? work.posterUrl || work.mediaUrl : work.mediaUrl}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-indigo-300 border border-slate-700">
                    {work.toolUsed}
                  </div>

                  {/* Eye View Overlay */}
                  <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>Batafsil Ko'rish</span>
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 space-y-2">
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                    {work.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-700/60">
                    <span>{work.studentName}</span>
                    <span className="text-emerald-400 font-mono font-semibold">{work.timeSpentWithAI}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FULLSCREEN WORK MODAL */}
      {activeModalWork && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 relative text-white my-8">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalWork(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media Content */}
            <div className="rounded-2xl overflow-hidden bg-black max-h-[400px] flex items-center justify-center">
              {activeModalWork.type === 'video' ? (
                <video
                  src={activeModalWork.mediaUrl}
                  controls
                  autoPlay
                  className="w-full max-h-[400px] object-contain"
                />
              ) : (
                <img
                  src={activeModalWork.mediaUrl}
                  alt={activeModalWork.title}
                  className="w-full max-h-[400px] object-contain"
                />
              )}
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-white">
                  {activeModalWork.title}
                </h3>
                <span className="px-3 py-1 rounded-full bg-indigo-600 text-xs font-bold">
                  {activeModalWork.toolUsed}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-800 p-3.5 rounded-xl border border-slate-700">
                <div>
                  <p className="text-slate-400">Muallif / Student:</p>
                  <p className="font-bold text-white mt-0.5">{activeModalWork.studentName}</p>
                </div>
                <div>
                  <p className="text-slate-400">Vaqt tejamkorligi:</p>
                  <p className="font-bold text-emerald-400 mt-0.5">{activeModalWork.timeSpentBeforeAI} -&gt; {activeModalWork.timeSpentWithAI}</p>
                </div>
              </div>

              {/* Prompt box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 relative">
                <div className="flex items-center justify-between text-xs text-indigo-400 font-mono font-bold">
                  <span>Midjourney / AI Prompt kodi:</span>
                  <button
                    onClick={() => handleCopyPrompt(activeModalWork.promptUsed)}
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPrompt ? 'Nusxalandi!' : 'Nusxalash'}</span>
                  </button>
                </div>
                <p className="text-xs font-mono text-slate-300 italic">
                  "{activeModalWork.promptUsed}"
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
