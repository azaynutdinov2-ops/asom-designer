import React, { useState } from 'react';
import { GOOGLE_FORM_URL } from '../constants';
import { StudentWork } from '../types';
import { X, Copy, Check, ArrowUpRight, Sparkles, Clock, User, Cpu } from 'lucide-react';

interface LightboxModalProps {
  work: StudentWork | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ work, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!work) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(work.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-purple-200 bg-white shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors border border-slate-200 z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Image Display */}
          <div className="md:col-span-7 relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 max-h-[500px]">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-contain max-h-[480px] mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details Column */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                {work.category}
              </span>
              <h3 className="font-heading font-bold text-2xl text-slate-900 mt-2">
                {work.title}
              </h3>
            </div>

            <div className="space-y-2 text-xs text-slate-700 border-t border-b border-slate-100 py-3">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-purple-600" />
                <span>Muallif: <b className="text-slate-900">{work.studentName}</b></span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600" />
                <span>Dastur/Neyrotarmoq: <b className="text-slate-900">{work.tool}</b></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Vaqt sarfi: <b className="text-slate-900">{work.duration}</b></span>
              </div>
            </div>

            {/* Prompt Details Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-purple-700 font-bold">
                <span>Promt muhandisligi:</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700 transition-colors font-sans"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Nusxalandi</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopiya qilish</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-indigo-100 text-xs font-mono text-slate-800 leading-relaxed max-h-36 overflow-y-auto">
                "{work.prompt}"
              </div>
            </div>

            {/* CTA in Modal */}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/20 flex items-center justify-center gap-2"
            >
              <span>Shunday Vizuallarni Yaratishni O'rganish</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};
