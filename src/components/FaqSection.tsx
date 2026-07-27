import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/courseData';
import { CONSTANTS } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, Send, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Savollaringiz Bormi?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ko'p Beriladigan Savollarga Javoblar
          </h2>
          <p className="text-base text-slate-600">
            Kurs haqida eng ko'p beriladigan savollar va ularning batafsil javoblari:
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaq === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 border-indigo-200 shadow-md ring-1 ring-indigo-500/10'
                    : 'bg-white hover:bg-slate-50/80 border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900">
                    {item.question}
                  </span>
                  <div className="p-2 rounded-full bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Question Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-indigo-50 border border-indigo-100 text-center space-y-3">
          <p className="text-sm font-bold text-indigo-950">
            Boshqa savolingiz bormi yoki maslahat kerakmi?
          </p>
          <p className="text-xs text-slate-600">
            Asom Designer bilan Telegram orqali bevosita bog'lanishingiz mumkin.
          </p>
          <a
            href={CONSTANTS.TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            <Send className="w-4 h-4 text-sky-300" />
            <span>Telegramda Savol Berish ({CONSTANTS.TELEGRAM_HANDLE})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
