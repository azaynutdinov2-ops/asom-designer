import React, { useState } from 'react';
import { COURSE_MODULES } from '../data/courseData';
import { Layers, ChevronDown, ChevronUp, Clock, BookOpen, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface CurriculumProps {
  onOpenRegister: () => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenRegister }) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <section id="program" className="py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Kurs Dasturi va Modullar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bosqichma-Bosqich Professional O'quv Dasturi
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Har bir modul noldan mukammallikkacha bosqichma-bosqich tuzilgan. 
            Xalqaro standartdagi AI vositalari va real amaliy keyslar bilan ta'minlangan.
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="mt-12 space-y-4 max-w-4xl mx-auto">
          {COURSE_MODULES.map((mod) => {
            const isExpanded = expandedModule === mod.id;

            return (
              <div
                key={mod.id}
                className={`transition-all duration-300 rounded-2xl border ${
                  isExpanded
                    ? 'bg-white border-indigo-300 shadow-xl ring-2 ring-indigo-500/10'
                    : 'bg-white/80 hover:bg-white border-slate-200 shadow-xs'
                }`}
              >
                {/* Header row */}
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Module Badge Number */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-heading font-extrabold text-lg shrink-0 transition-colors ${
                      isExpanded
                        ? 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {mod.number}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700">
                          {mod.duration}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" /> {mod.lessonsCount} ta dars
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {mod.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-slate-100 text-sm text-slate-600 space-y-5 animate-in fade-in duration-200">
                    
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {mod.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {/* Skills learned */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> O'rganiladigan ko'nikmalar:
                        </p>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {mod.skills.map((skill, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools Used */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-purple-600" /> Ishlatiladigan AI Instrumentlar:
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {mod.tools.map((tool, i) => (
                            <span key={i} className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-purple-800 shadow-2xs">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Deliverable result */}
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                        <span className="p-1 rounded-md bg-emerald-200 text-emerald-800 font-bold">Natija:</span>
                        <span>{mod.deliverable}</span>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner below curriculum */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all"
          >
            <span>Dastur bo'yicha joy band qilish</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
