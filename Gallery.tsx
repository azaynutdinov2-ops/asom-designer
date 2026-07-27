import React, { useState } from 'react';
import { COURSE_MODULES, GOOGLE_FORM_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import {
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  Camera,
  Compass,
  LayoutGrid,
  Layers,
  DollarSign,
  Clock,
  BookOpen,
  CheckCircle,
  ArrowUpRight,
  FolderKanban
} from 'lucide-react';

export const Modules: React.FC = () => {
  const [openModuleId, setOpenModuleId] = useState<number | null>(1);
  const { t } = useLanguage();

  const toggleModule = (id: number) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'Camera': return <Camera className="w-5 h-5 text-indigo-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-400" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-pink-400" />;
      default: return <BookOpen className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="modules" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('modulesBadge')}</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            {t('modulesTitle')}
          </h2>
          <p className="text-slate-600 text-base">
            {t('modulesSub')}
          </p>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-4">
          {COURSE_MODULES.map((module) => {
            const isOpen = openModuleId === module.id;

            return (
              <div
                key={module.id}
                className={`glass-card rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-purple-300 bg-white shadow-lg shadow-indigo-100/60'
                    : 'border-indigo-100/80 hover:border-purple-200 bg-white/90'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0">
                      {renderIcon(module.icon)}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full border border-purple-200">
                          {module.duration}
                        </span>
                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" /> {module.lessonsCount} {t('modulesLessons')}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                        {module.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Expanded Content */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-indigo-100/80 space-y-5 animate-in fade-in duration-200">
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {module.description}
                    </p>

                    {/* Topics Covered */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-purple-800 uppercase tracking-wider">
                        Modulda O'rganiladigan Mavzular:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-indigo-100/80">
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical Project Output */}
                    <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
                      <FolderKanban className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-amber-800 uppercase">
                          {t('modulesProject')}
                        </span>
                        <p className="text-xs text-slate-800 font-semibold mt-0.5">
                          {module.project}
                        </p>
                      </div>
                    </div>

                    {/* Tools Badges */}
                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-xs text-slate-500 font-semibold">{t('modulesTools')}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {module.toolsUsed.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-purple-700 border border-purple-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Note */}
        <div className="text-center pt-6">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/30"
          >
            <span>{t('register')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

