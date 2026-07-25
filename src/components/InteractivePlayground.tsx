import React, { useState } from 'react';
import { PROMPT_PRESETS, GOOGLE_FORM_URL } from '../constants';
import { PromptPreset } from '../types';
import { Sparkles, Copy, Check, Calculator, DollarSign, ArrowUpRight, Zap } from 'lucide-react';

export const InteractivePlayground: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<PromptPreset>(PROMPT_PRESETS[0]);
  const [copied, setCopied] = useState(false);

  // ROI Calculator state
  const [projectsPerMonth, setProjectsPerMonth] = useState<number>(8);
  const [pricePerProject, setPricePerProject] = useState<number>(120);

  const estimatedMonthlyEarnings = projectsPerMonth * pricePerProject;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(selectedPreset.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Playground Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-purple-600" />
            <span>Interaktiv AI Prompter & Daromad Kalkulyatori</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900">
            Sinab Ko'ring: <span className="text-gradient-primary">AI Prompt Simulyatori</span>
          </h2>
          <p className="text-slate-600 text-base">
            Quyida kursda ishlatiladigan mualliflik promtlar namunasini sinab ko'ring va ularning qanday natija berishini ko'ring:
          </p>
        </div>

        {/* 2-Column Playground & ROI Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: AI Prompt Simulator (7 Cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-purple-200 bg-white space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" /> AI Prompt Generator
              </span>
              <span className="text-xs text-purple-700 font-mono bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200 font-bold">
                {selectedPreset.toolName}
              </span>
            </div>

            {/* Presets Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PROMPT_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPreset(preset)}
                  className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                    selectedPreset.id === preset.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {preset.category}
                </button>
              ))}
            </div>

            {/* Selected Image & Prompt Box */}
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={selectedPreset.previewImage}
                  alt={selectedPreset.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-purple-700 border border-purple-200 shadow-xs">
                  {selectedPreset.style}
                </div>
              </div>

              {/* Prompt Text Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-indigo-100 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="font-semibold">Prompt matni:</span>
                  <button
                    onClick={handleCopyPrompt}
                    className="flex items-center gap-1 hover:text-purple-700 transition-colors bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700 font-sans shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Nusxalandi!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kopiya qilish</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs font-mono text-slate-800 leading-relaxed font-medium">
                  "{selectedPreset.promptText}"
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Freelance Monthly Income Calculator (5 Cols) */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-cyan-200 bg-white space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">Daromad Kalkulyatori</h3>
                <p className="text-xs text-slate-500">AI bilan oyiga qancha topishingiz mumkin?</p>
              </div>
            </div>

            {/* Slider 1: Projects Per Month */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-semibold">
                <span className="text-slate-700">Oylik buyurtmalar soni:</span>
                <span className="text-purple-700 font-extrabold">{projectsPerMonth} ta loyiha</span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={projectsPerMonth}
                onChange={(e) => setProjectsPerMonth(Number(e.target.value))}
                className="w-full accent-purple-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 2: Average Price Per Project */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-semibold">
                <span className="text-slate-700">1 ta loyiha o'rtacha narxi ($):</span>
                <span className="text-cyan-700 font-extrabold">${pricePerProject} USD</span>
              </div>
              <input
                type="range"
                min="30"
                max="500"
                step="10"
                value={pricePerProject}
                onChange={(e) => setPricePerProject(Number(e.target.value))}
                className="w-full accent-cyan-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            {/* Estimated Earnings Outcome Card */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
              <span className="text-xs text-slate-600 uppercase tracking-wider font-bold">
                Taxminiy Oylik Sof Daromadingiz:
              </span>
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-700">
                ${estimatedMonthlyEarnings.toLocaleString()} USD
              </div>
              <p className="text-[11px] text-emerald-800 font-medium">
                (~{(estimatedMonthlyEarnings * 12800).toLocaleString()} UZS)
              </p>
            </div>

            {/* Direct Register CTA Button */}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/20 flex items-center justify-center gap-2"
            >
              <span>Ushbu Daromadga Erishish Uzoq Emas!</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
