import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { CONTACT_DATA } from '../constants';

export const RoiCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'branding' | 'smm' | 'character'>('smm');
  const [projectsCount, setProjectsCount] = useState<number>(5);

  const pricePerProject = {
    branding: 120, // $120 per brand identity
    smm: 40,        // $40 per post batch / banner set
    character: 80   // $80 per AI character illustration
  };

  const estimatedMonthlyIncomeUsd = pricePerProject[projectType] * projectsCount;
  const estimatedMonthlyIncomeUzs = estimatedMonthlyIncomeUsd * 12800; // ~12800 UZS/USD

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-purple-400" />
              <span>Interaktiv Daromad Kalkulyatori</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              AI Dizayner Sifatida Qancha Daromad Topishingiz Mumkin?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Keling, taxminiy daromadingizni hisoblab ko‘ramiz. AI vositalari orqali 1 ta loyihani bajarishga atigi 1-2 soat vaqtingiz ketadi.
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                  Loyiha Turi:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'smm', label: 'SMM Postlar' },
                    { id: 'character', label: 'AI Art / Illyustratsiya' },
                    { id: 'branding', label: 'Logotip & Brending' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setProjectType(item.id as any)}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                        projectType === item.id
                          ? 'bg-purple-600 text-white border-purple-400 shadow-lg'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  <span>Oylik Buyurtmalar Soni:</span>
                  <span className="text-purple-300 text-sm font-extrabold">{projectsCount} ta loyiha</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={projectsCount}
                  onChange={(e) => setProjectsCount(parseInt(e.target.value))}
                  className="w-full accent-purple-500 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-br from-purple-900/60 to-indigo-900/60 p-8 rounded-2xl border border-purple-400/30 text-center space-y-6">
            <p className="text-xs uppercase tracking-widest text-purple-300 font-bold">
              Taxminiy Oylik Potensial Daromad:
            </p>

            <div className="space-y-1">
              <h4 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                ${estimatedMonthlyIncomeUsd} USD
              </h4>
              <p className="text-lg font-bold text-purple-200">
                ~ {estimatedMonthlyIncomeUzs.toLocaleString('uz-UZ')} UZS
              </p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Shu tariqa siz kursga kiritgan investitsiyangizni atigi <strong>1-oyning o‘zidayoq 2-3 baravar ortig‘i bilan</strong> qaytarib olasiz!
            </p>

            <a
              href={CONTACT_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 shadow-xl shadow-purple-500/30 transition-all"
            >
              <span>Daromadga erishishni boshlash</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
