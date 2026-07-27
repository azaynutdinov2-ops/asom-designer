import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSE_MODULES, CONTACT_DATA } from '../constants';
import { Layers, ChevronDown, ChevronUp, Clock, Wrench, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

export const Syllabus: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<number>(1);

  return (
    <section id="syllabus" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Bosqichma-bosqich Dastur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            6 Haftalik Intensiv Kurs Dasturi
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Har bir modul nazariya va amaliyot uyg‘unligida tuzilgan bo‘lib, sizni 0 dan tayyor va malakali AI dizayner darajasiga olib chiqadi.
          </p>
        </div>

        {/* Modules Accordion / Interactive Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Module Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {COURSE_MODULES.map((module) => {
              const isActive = activeModuleId === module.id;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModuleId(module.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white border-transparent shadow-lg shadow-purple-500/25 scale-[1.02]'
                      : 'bg-slate-50 hover:bg-purple-50/50 text-slate-800 border-slate-200/80 hover:border-purple-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                      isActive ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {module.duration}
                    </span>
                    <span className={`text-xs font-semibold ${isActive ? 'text-purple-100' : 'text-slate-500'}`}>
                      {module.tools.length} ta instrument
                    </span>
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold mt-2.5 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {module.title}
                  </h3>
                  <p className={`text-xs sm:text-sm mt-1 line-clamp-2 ${isActive ? 'text-purple-100' : 'text-slate-600'}`}>
                    {module.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed View of Active Module */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {COURSE_MODULES.map((module) => {
                if (module.id !== activeModuleId) return null;
                return (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-2xl space-y-6"
                  >
                    {/* Header */}
                    <div className="border-b border-slate-100 pb-5">
                      <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-wider mb-1">
                        <Clock className="w-4 h-4" />
                        <span>{module.duration} | Modul #{module.id}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        {module.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-2">
                        {module.description}
                      </p>
                    </div>

                    {/* Topics Covered */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        Modulda nimani o‘rganasiz:
                      </h4>
                      <ul className="space-y-3">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools Used */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        <Wrench className="w-3.5 h-3.5 text-purple-600" />
                        Ishlatiladigan Dasturlar:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Practical Result */}
                    <div className="bg-purple-50/80 p-4 rounded-2xl border border-purple-100 text-purple-900 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-purple-700">Natijada erishasiz:</p>
                        <p className="text-sm font-extrabold text-slate-900 mt-0.5">{module.projectOutput}</p>
                      </div>
                    </div>

                    {/* CTA inside Module detail */}
                    <div className="pt-2">
                      <a
                        href={CONTACT_DATA.googleFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-500/20 transition-all text-center"
                      >
                        <span>Ushbu modul bo‘yicha ro‘yxatdan o‘tish</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
