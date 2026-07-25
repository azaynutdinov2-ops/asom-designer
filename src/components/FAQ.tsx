import React, { useState } from 'react';
import { FAQ_ITEMS, GOOGLE_FORM_URL } from '../constants';
import { HelpCircle, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
            <span>Ko'p Beriladigan Savollar</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">
            Savollaringizga <span className="text-gradient-primary">Javoblar</span>
          </h2>
          <p className="text-slate-600 text-base">
            O'quvchilarimiz tomonidan eng ko'p beriladigan savollarga javob bering:
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-purple-300 bg-white shadow-md'
                    : 'border-indigo-100/80 bg-slate-50/80 hover:bg-white hover:border-purple-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    {item.question}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Note */}
        <div className="text-center p-8 rounded-3xl bg-slate-50 border border-indigo-100 space-y-3">
          <p className="text-slate-900 font-heading font-bold text-lg">
            Boshqa savollaringiz bormi?
          </p>
          <p className="text-slate-600 text-sm">
            Google Form so'rovnomasini to'ldiring va menejerlarimiz siz bilan bog'lanib barcha savollarga javob berishadi.
          </p>
          <div className="pt-2">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-md shadow-purple-600/20"
            >
              <span>So'rov Yuborish (Google Form)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
