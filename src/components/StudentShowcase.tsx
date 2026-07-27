import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDENT_WORKS, VIDEO_SHOWCASE, CONTACT_DATA } from '../constants';
import { StudentWork, VideoShowcaseItem } from '../types';
import { Users, Award, Play, Sparkles, Copy, Check, Eye, ExternalLink, Zap, Star, ShieldCheck, Film, Image as ImageIcon } from 'lucide-react';

interface StudentShowcaseProps {
  onOpenVideo: (url: string, title: string) => void;
}

export const StudentShowcase: React.FC<StudentShowcaseProps> = ({ onOpenVideo }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'branding' | 'photorealism' | 'ui'>('all');
  const [inspectWork, setInspectWork] = useState<StudentWork | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const filteredWorks = selectedCategory === 'all'
    ? STUDENT_WORKS
    : STUDENT_WORKS.filter(w => w.category === selectedCategory);

  const handleCopyPrompt = (promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="results" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Natijalar & AI Galereya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Talabalar Ishlari va Jonli AI Natijalar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Bizning 100+ shogirdlarimiz kurs davomida yaratgan haqiqiy AI dizayn ishlari, brendinglar va video animatsiyalar bilan tanishing.
          </p>
        </div>

        {/* 1. Creative Stats Blocks (100+ O'quvchilar va Natijalar) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              number: '100+',
              label: 'Muvaffaqiyatli O‘quvchi va Shogirdlar',
              subtext: 'Frilans va studiyalarda faoliyat yuritmoqda',
              icon: Users,
              color: 'from-purple-600 to-indigo-600',
              badge: 'Statistika'
            },
            {
              number: '1,500+',
              label: 'Yaratilgan AI San’at & Brendinglar',
              subtext: 'Midjourney v6 va Firefly yordamida',
              icon: Sparkles,
              color: 'from-indigo-600 to-blue-600',
              badge: 'Sifat'
            },
            {
              number: '98%',
              label: 'Frilans va Mijoz Natijasi',
              subtext: 'Bitiruvchilar o‘z xarajatini 1-oyda chiqarishgan',
              icon: Award,
              color: 'from-blue-600 to-teal-600',
              badge: 'Daromad'
            },
            {
              number: '4.9 / 5',
              label: 'O‘quvchilar Bahosi va Izohlari',
              subtext: '100% amaliy va tushunarli darsliklar',
              icon: Star,
              color: 'from-amber-500 to-orange-600',
              badge: 'Baho'
            }
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-purple-100 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${stat.color} text-white shadow-md shadow-purple-500/20`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">
                    {stat.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors">
                    {stat.number}
                  </h3>
                  <p className="text-sm font-bold text-slate-800">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. Video Showcase Section: Mentor Video & AI Animation Video */}
        <div className="mb-20 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <Film className="w-6 h-6 text-purple-600" />
                <span>Jonli Video & AI Motion Natijalar</span>
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Mentor so‘nggi AI ishi hamda talabalarning AI orqali yaratilgan animatsiyalarini tomosha qiling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEO_SHOWCASE.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-xl flex flex-col justify-between group"
              >
                {/* Video Thumbnail Box */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => onOpenVideo(video.videoUrl, video.title)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-xl shadow-purple-600/40 transition-transform group-hover:scale-110"
                    aria-label={`Play ${video.title}`}
                  >
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </button>

                  {/* Video Badge Top */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-purple-200 border border-white/10 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    <span>{video.type === 'mentor_video' ? "Mentor Ishi" : "Talaba AI Animatsiyasi"}</span>
                  </div>

                  {/* Duration Badge Bottom */}
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 rounded-lg text-xs font-bold text-white tracking-wider">
                    {video.duration}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-600">
                      Muallif: {video.author}
                    </p>
                    <h4 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-purple-600 transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {video.tools.map((t, i) => (
                        <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenVideo(video.videoUrl, video.title)}
                      className="text-xs font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1 shrink-0"
                    >
                      <span>Tomosha qilish</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Student AI Artwork Showcase Gallery */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-6 h-6 text-purple-600" />
                <span>AI Ishlar Galereyasi va Prompt Tahlili</span>
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Har bir rasm ustiga bosing — ishlatilgan AI prompt va instrumentlarni ko‘rib chiqing.
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Barchasi' },
                { id: 'branding', label: 'Brending & Packaging' },
                { id: 'photorealism', label: 'Fotorealizm & Personaj' },
                { id: 'ui', label: 'Banner & UI' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                      : 'bg-white text-slate-600 hover:bg-purple-50 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-xl group hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setInspectWork(work)}>
                  <img
                    src={work.image}
                    alt={work.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-4 py-2 rounded-xl bg-white/90 text-slate-900 font-bold text-xs shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-purple-600" />
                      <span>Promptni ko‘rish</span>
                    </button>
                  </div>

                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-purple-700 shadow-sm">
                    {work.category === 'branding' ? 'Brending' : work.category === 'photorealism' ? 'Fotorealizm' : 'Banner'}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <p className="text-xs font-bold text-purple-600">{work.studentName}</p>
                    <p className="text-xs text-slate-400">{work.studentRole}</p>
                    <h4 className="text-base font-bold text-slate-900 mt-1">{work.title}</h4>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {work.toolsUsed.map((t, i) => (
                        <span key={i} className="text-[10px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setInspectWork(work)}
                      className="text-xs font-bold text-purple-600 hover:underline"
                    >
                      Batafsil
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Prompt Inspection Modal */}
        <AnimatePresence>
          {inspectWork && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-purple-100 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-600">{inspectWork.studentName} ({inspectWork.studentRole})</p>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">{inspectWork.title}</h3>
                  </div>
                  <button
                    onClick={() => setInspectWork(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  >
                    ✕
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden aspect-[16/9]">
                  <img
                    src={inspectWork.image}
                    alt={inspectWork.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Prompt Display Box */}
                <div className="bg-slate-900 text-slate-100 p-4 rounded-2xl space-y-2 relative">
                  <div className="flex items-center justify-between text-xs font-mono text-purple-400">
                    <span>AI PROMPT (Midjourney v6):</span>
                    <button
                      onClick={() => handleCopyPrompt(inspectWork.promptUsed)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans text-xs transition-colors"
                    >
                      {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPrompt ? 'Nusxalandi!' : 'Promptni nusxalash'}</span>
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm font-mono leading-relaxed text-slate-300">
                    "{inspectWork.promptUsed}"
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">Ishlatilgan AI:</span>
                    {inspectWork.toolsUsed.map((t, i) => (
                      <span key={i} className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-100 text-purple-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={CONTACT_DATA.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                  >
                    <span>Shunday natijaga erishish</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
