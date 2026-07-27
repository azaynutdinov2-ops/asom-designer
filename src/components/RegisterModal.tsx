import React from 'react';
import { CONSTANTS } from '../types';
import { X, Sparkles, Send, Phone, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl border border-slate-200 text-slate-900 my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
            Kursga Ro'yxatdan O'tish
          </h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto">
            O'zingizga qulay usulni tanlang va qabul formasini to'ldiring:
          </p>
        </div>

        {/* Actions list */}
        <div className="space-y-3">
          
          {/* Primary Action 1: Google Form */}
          <a
            href={CONSTANTS.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full p-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white flex items-center justify-between gap-3 shadow-lg shadow-indigo-500/25 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">Google Forms Orqali Ariza</p>
                <p className="text-[11px] text-indigo-200">Rasmiy anketa yangi oynada ochiladi</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Action 2: Telegram direct */}
          <a
            href={CONSTANTS.TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full p-4 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-slate-900 flex items-center justify-between gap-3 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold shadow-md shadow-sky-500/20">
                <Send className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-sky-950">Telegramda Yozish</p>
                <p className="text-[11px] text-sky-700">{CONSTANTS.TELEGRAM_HANDLE}</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-sky-600 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Action 3: Phone */}
          <a
            href={CONSTANTS.PHONE_TEL}
            onClick={onClose}
            className="w-full p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-slate-900 flex items-center justify-between gap-3 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-600/20">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-emerald-950">Qo'ng'iroq Qilish</p>
                <p className="text-[11px] text-emerald-700">{CONSTANTS.PHONE}</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
          </a>

        </div>

        {/* Guarantee footnote */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs text-slate-600">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Hozirgi qabul uchun 100% amaliy darslar va xalqaro sertifikat kafolatlanadi.</span>
        </div>

      </div>
    </div>
  );
};
