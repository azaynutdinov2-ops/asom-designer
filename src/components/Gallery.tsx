import React, { useState } from 'react';
import { STUDENT_WORKS, COURSE_STATS, GOOGLE_FORM_URL, CONTACT_INFO, IMAGES } from '../constants';
import { StudentWork } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Eye, Zap, Copy, Check, Filter, Play, Volume2, VolumeX, Film, Users, Award, TrendingUp, ArrowUpRight, Youtube } from 'lucide-react';

interface GalleryProps {
  onOpenLightbox: (work: StudentWork) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { t } = useLanguage();

  // Video Player States
  const [isPlayingVideo1, setIsPlayingVideo1] = useState(false);
  const [isPlayingVideo2, setIsPlayingVideo2] = useState(false);
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);

  const categories = ['Barchasi', 'Brending', 'Logotiplar', 'SMM Bannerlar', '3D & Mascot'];

  const filteredWorks = selectedCategory === 'Barchasi'
    ? STUDENT_WORKS
    : STUDENT_WORKS.filter(work => work.category === selectedCategory);

  const handleCopyPrompt = (id: number, promptText: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(promptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{t('galleryBadge')}</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            {t('galleryTitle')}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t('gallerySub')}
          </p>
        </div>

        {/* 1. Creative 100+ Statistics Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-3xl border border-indigo-100 bg-white/90 shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-100 rounded-full blur-xl group-hover:scale-150 transition-transform" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center border border-purple-200 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-extrabold text-3xl text-slate-900">100+</p>
                <p className="text-xs font-semibold text-purple-700 mt-0.5">O'quvchi va Shogirdlar Soni</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-3 pt-3 border-t border-slate-100">
              Kursni a'lo baholarga bitirgan faol o'quvchilar
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-indigo-100 bg-white/90 shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-100 rounded-full blur-xl group-hover:scale-150 transition-transform" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center border border-indigo-200 shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-extrabold text-3xl text-slate-900">100+</p>
                <p className="text-xs font-semibold text-indigo-700 mt-0.5">Frilansni Boshlagan Shogirdlar</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-3 pt-3 border-t border-slate-100">
              Buyurtmalar olib, daromad topishni boshlagan
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-indigo-100 bg-white/90 shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-full blur-xl group-hover:scale-150 transition-transform" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center border border-blue-200 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-extrabold text-3xl text-slate-900">1,200+</p>
                <p className="text-xs font-semibold text-blue-700 mt-0.5">Yaratilgan AI Loyihalar</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-3 pt-3 border-t border-slate-100">
              Logotip, brending, poster va 3D vizuallar
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-indigo-100 bg-white/90 shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-100 rounded-full blur-xl group-hover:scale-150 transition-transform" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-extrabold text-3xl text-slate-900">10x</p>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">Dizayn Ishlash Tezligi</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-3 pt-3 border-t border-slate-100">
              Soatlar emas, minutlar ichida tayyor loyiha
            </p>
          </div>
        </div>

        {/* 2. Interactive AI Video Showcase Section */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-indigo-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                🎥 Video Darslar & YouTube Kanal: @Asom.teacher
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mt-2">
                Mentorning So'nggi AI Ishlari va Video Darslari
              </h3>
            </div>
            <a
              href={CONTACT_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-xl border border-red-200 flex items-center gap-1.5 transition-colors"
            >
              <Youtube className="w-4 h-4 fill-red-600" />
              <span>YouTube Kanalga O'tish (@Asom.teacher)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 2 Video Player Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Video Card 1: Shylo Victoria 3D Billboard Ad */}
            <div className="glass-card rounded-3xl overflow-hidden border border-purple-200 bg-white shadow-xl flex flex-col justify-between group">
              <div className="relative aspect-[9/16] sm:aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                
                {isPlayingVideo1 ? (
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Mentor AI Video 1 - Shylo Victoria 3D Billboard"
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white overflow-hidden">
                    <img
                      src={IMAGES.billboard}
                      alt="Shylo Victoria 3D Billboard Times Square"
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-purple-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-purple-400 shadow-lg backdrop-blur-md z-10 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Mentor Asom Designer Ishi: Times Square 3D Billboard</span>
                    </div>

                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlayingVideo1(true)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-2xl shadow-purple-600/60 hover:scale-110 transition-transform duration-300 border-2 border-white/80 group-hover:bg-purple-500 z-10"
                      aria-label="Play AI Video"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
                    </button>

                    <div className="mt-6 z-10 space-y-1 max-w-md">
                      <p className="font-heading font-bold text-lg sm:text-xl text-white">
                        Shylo Victoria No 15 Suave Blue
                      </p>
                      <p className="text-xs text-purple-200 font-medium">
                        Times Square 3D Billboard AI & VFX (Midjourney v6 + Motion VFX + Blue Smoke Illusion)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5 bg-slate-50 border-t border-indigo-100 flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="font-heading font-bold text-sm text-slate-900">3D Billboard Commercial AI Project</p>
                  <p className="text-xs text-slate-500">Kamera va personaj harakatlari AI orqali animatsiya qilingan</p>
                </div>
                <button
                  onClick={() => setIsPlayingVideo1(!isPlayingVideo1)}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{isPlayingVideo1 ? "Tugatish" : "Videoni Ko'rish"}</span>
                </button>
              </div>
            </div>

            {/* Video Card 2: Ventana / AI Motion Animation Placeholder */}
            <div className="glass-card rounded-3xl overflow-hidden border border-indigo-200 bg-white shadow-xl flex flex-col justify-between group">
              <div className="relative aspect-[9/16] sm:aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                
                {isPlayingVideo2 ? (
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="AI Video 2 - Ventana Oyna Reklamasi"
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 flex flex-col items-center justify-center p-6 text-center text-white">
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80')` }} />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-indigo-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-indigo-400 shadow-md">
                      ✨ AI Motion & SMM Video Visuals
                    </div>

                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlayingVideo2(true)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-2xl shadow-indigo-600/60 hover:scale-110 transition-transform duration-300 border-2 border-white/80 group-hover:bg-indigo-500 z-10"
                      aria-label="Play AI Motion Video"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
                    </button>

                    <div className="mt-6 z-10 space-y-1">
                      <p className="font-heading font-bold text-lg sm:text-xl text-white">
                        Ventana — Sifat va Ishonch
                      </p>
                      <p className="text-xs text-indigo-200">
                        AI Yordamida Yaratilgan Tijoriy Reklama Video Kadrlar va SMM Kontent
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5 bg-slate-50 border-t border-indigo-100 flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="font-heading font-bold text-sm text-slate-900">AI Video Generation & Prompting</p>
                  <p className="text-xs text-slate-500">Mijozlar uchun yuqori daromadli reklama videolari</p>
                </div>
                <button
                  onClick={() => setIsPlayingVideo2(!isPlayingVideo2)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{isPlayingVideo2 ? "Tugatish" : "Videoni Ko'rish"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Category Filter Tabs */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="font-heading font-bold text-2xl text-slate-900">
              Talabalarning AI Portfolio Ishlari
            </h3>
            
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                      : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-indigo-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Student Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                onClick={() => onOpenLightbox(work)}
                className="glass-card rounded-3xl overflow-hidden border border-indigo-100 bg-white hover:border-purple-400 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-100 text-xs font-semibold text-purple-700 shadow-sm">
                      {work.category}
                    </span>
                    <span className="bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-xs font-mono text-cyan-300">
                      {work.tool}
                    </span>
                  </div>

                  {/* Hover Quick Zoom Overlay */}
                  <div className="absolute inset-0 bg-purple-900/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-4 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-bold flex items-center gap-2 border border-purple-200 shadow-xl">
                      <Eye className="w-4 h-4 text-purple-600" />
                      <span>Promt va Tafsilotlarni Ko'rish</span>
                    </div>
                  </div>
                </div>

                {/* Artwork Details Footer */}
                <div className="p-5 bg-white space-y-3 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-lg text-slate-900 group-hover:text-purple-600 transition-colors">
                        {work.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        Muallif: <b className="text-slate-700">{work.studentName}</b> ({work.duration}da tayyorlandi)
                      </p>
                    </div>
                    <button
                      onClick={(e) => handleCopyPrompt(work.id, work.prompt, e)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 border border-slate-200 transition-colors shrink-0"
                      title="Promptni nusxalash"
                    >
                      {copiedId === work.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-indigo-100 text-xs font-mono text-slate-700 truncate">
                    "{work.prompt}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-4">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/30 group"
          >
            <span>{t('register')}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
