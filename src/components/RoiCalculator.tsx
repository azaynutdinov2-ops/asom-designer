import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenRegister: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenRegister }) => {
  const [ordersPerMonth, setOrdersPerMonth] = useState(5);
  const [avgOrderPrice, setAvgOrderPrice] = useState(50); // $50

  const currentMonthlyIncome = ordersPerMonth * avgOrderPrice;
  // With AI speed 4x, user can take 3x more orders easily or spend 70% less time
  const aiPotentialOrders = ordersPerMonth * 3;
  const aiPotentialIncome = aiPotentialOrders * avgOrderPrice;
  const hoursSavedPerMonth = ordersPerMonth * 12; // average 12 hours saved per project with AI

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>AI ROI Kalkulyator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            AI Yordamida Qancha Vaqt va Pul Tejashingizni Hisoblang
          </h2>
          <p className="text-sm text-slate-600">
            Buyurtmalar soni va o'rtacha narxni belgilang — sun'iy intellekt daromadingizni qanday oshirishini ko'ring:
          </p>
        </div>

        {/* Calculator Card */}
        <div className="mt-10 max-w-4xl mx-auto glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input */}
          <div className="md:col-span-6 space-y-6">
            
            {/* Slider 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Oylik Buyurtmalar Soni:</span>
                <span className="text-indigo-600 font-extrabold text-sm">{ordersPerMonth} ta loyiha</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={ordersPerMonth}
                onChange={(e) => setOrdersPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>1 ta</span>
                <span>10 ta</span>
                <span>20 ta</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>1 ta Loyiha O'rtacha Narxi ($):</span>
                <span className="text-emerald-600 font-extrabold text-sm">${avgOrderPrice} USD</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={avgOrderPrice}
                onChange={(e) => setAvgOrderPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>$10</span>
                <span>$250</span>
                <span>$500</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <p className="font-bold text-slate-800">Hozirgi oylik daromadingiz:</p>
              <p className="text-lg font-extrabold text-slate-900">${currentMonthlyIncome} USD</p>
            </div>

          </div>

          {/* Results Output */}
          <div className="md:col-span-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-5">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              AI Kursidan Keyingi Potensial:
            </span>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Yangi Oylik Daromad Potensiali</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">${aiPotentialIncome} USD</p>
                  <span className="text-xs text-emerald-300 font-bold">(+300% o'sish)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Oylik Tejalgan Ish Vaqti</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-xl sm:text-2xl font-extrabold text-indigo-300 font-heading">{hoursSavedPerMonth} Soat</p>
                  <span className="text-xs text-indigo-200">soatlik vaqtingiz tejoladi</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenRegister}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-extrabold text-xs px-5 py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <span>Daromadni AI Bilan Oshirish</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
