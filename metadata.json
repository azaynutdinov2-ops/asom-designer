import React, { useState, useEffect } from 'react';
import { 
  X, ShieldCheck, Phone, User, Calendar, Download, Trash2, 
  Send, FileSpreadsheet, Check, AlertCircle, Copy, RefreshCw, Settings, HelpCircle
} from 'lucide-react';
import { 
  getStoredLeads, getSettings, saveSettings, deleteLead, 
  clearAllLeads, testTelegramNotification, LeadData, SettingsConfig, updateLeadStatus 
} from '../utils/leadSender';

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'settings' | 'guide'>('leads');
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [config, setConfig] = useState<SettingsConfig>({
    telegramBotToken: '',
    telegramChatId: '',
    googleSheetsWebhook: ''
  });

  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [testingTg, setTestingTg] = useState(false);
  const [tgTestResult, setTgTestResult] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setLeads(getStoredLeads());
      setConfig(getSettings());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    saveSettings(config);
    setTimeout(() => {
      setSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    }, 400);
  };

  const handleTestTg = async () => {
    if (!config.telegramBotToken || !config.telegramChatId) {
      alert("Iltimos, avval Bot Token va Chat ID kiriting!");
      return;
    }
    setTestingTg(true);
    setTgTestResult('idle');
    const ok = await testTelegramNotification(config.telegramBotToken, config.telegramChatId);
    setTestingTg(false);
    setTgTestResult(ok ? 'success' : 'error');
  };

  const handleDeleteLead = (id: string) => {
    if (confirm("Ushbu arizani o'chirmoqchimisiz?")) {
      const updated = deleteLead(id);
      setLeads(updated);
    }
  };

  const handleClearAll = () => {
    if (confirm("BARCHA arizalarni o'chirishni tasdiqlaysizmi?")) {
      clearAllLeads();
      setLeads([]);
    }
  };

  const handleStatusChange = (id: string, newStatus: 'new' | 'contacted' | 'closed') => {
    const updated = updateLeadStatus(id, newStatus);
    setLeads(updated);
  };

  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert("Arizalar ro'yxati bo'sh!");
      return;
    }
    const headers = "ID,Ism,Telefon,Sana,Manba,Holat\n";
    const rows = leads.map(l => 
      `"${l.id}","${l.name.replace(/"/g, '""')}","${l.phone}","${l.date}","${l.source || ''}","${l.status || 'new'}"`
    ).join("\n");

    const blob = new Blob(["\uFEFF" + headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `ai_design_arizalar_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const googleAppsScriptCode = `function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.name, data.phone, data.source || 'Website']);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch(err) {
    return ContentService.createTextOutput("Error: " + err.message).setMimeType(ContentService.MimeType.TEXT);
  }
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
        
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-400/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-lg leading-snug">
                Boshqaruv Paneli & Arizalar Bazasi
              </h2>
              <p className="text-xs text-slate-400">
                Mijozlar telefon raqamlari va Telegram / Google Sheets sozlamalari
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50/80 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-5 py-2.5 rounded-t-xl font-bold text-xs flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'leads'
                ? 'bg-white text-purple-700 border-purple-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 border-transparent'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Kelib Tushgan Arizalar ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-5 py-2.5 rounded-t-xl font-bold text-xs flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'settings'
                ? 'bg-white text-purple-700 border-purple-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 border-transparent'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Telegram & Google Sheets Sozlamalari</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`px-5 py-2.5 rounded-t-xl font-bold text-xs flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'guide'
                ? 'bg-white text-purple-700 border-purple-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 border-transparent'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Qo'llanma (Sozlash)</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: LEADS TABLE */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-purple-50 p-4 rounded-2xl border border-purple-100">
                <div>
                  <p className="font-bold text-sm text-purple-950">
                    Jami arizalar soni: <span className="text-purple-700">{leads.length} ta</span>
                  </p>
                  <p className="text-xs text-purple-700">
                    Mijoz qoldirgan ism va telefon raqamlari xavfsiz saqlanadi.
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleExportCSV}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Excel / CSV yuklash</span>
                  </button>

                  {leads.length > 0 && (
                    <button
                      onClick={handleClearAll}
                      className="px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs flex items-center gap-1 transition-all"
                      title="Tozalash"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {leads.length === 0 ? (
                <div className="text-center py-16 space-y-3 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                  <User className="w-12 h-12 text-slate-300 mx-auto" />
                  <p className="font-bold text-slate-600 text-sm">Hozircha arizalar kelib tushgani yo'q</p>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Saytdagi forma orqali mijozlar ism va telefonlarini kiritishi bilan bu yerda real-vaqtda paydo bo'ladi.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200 uppercase tracking-wider">
                      <tr>
                        <th className="p-3">#</th>
                        <th className="p-3">Ism Familiya</th>
                        <th className="p-3">Telefon Raqami</th>
                        <th className="p-3">Sana & Vaqt</th>
                        <th className="p-3">Holat</th>
                        <th className="p-3 text-right">Amallar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white font-medium">
                      {leads.map((lead, idx) => (
                        <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-3 text-slate-400 font-mono text-[11px]">{idx + 1}</td>
                          <td className="p-3 font-bold text-slate-900">
                            {lead.name}
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-1.5">
                              <a
                                href={`tel:${lead.phone.replace(/\s+/g, '')}`}
                                className="font-mono text-purple-700 font-bold hover:underline"
                              >
                                {lead.phone}
                              </a>
                              <button
                                onClick={() => copyToClipboard(lead.phone)}
                                className="p-1 rounded hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
                                title="Nusxalash"
                              >
                                {copiedPhone === lead.phone ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          </td>
                          <td className="p-3 text-slate-500 text-[11px]">
                            {lead.date}
                          </td>
                          <td className="p-3">
                            <select
                              value={lead.status || 'new'}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                              className={`text-[11px] font-bold px-2.5 py-1 rounded-full border outline-none cursor-pointer ${
                                lead.status === 'contacted'
                                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                                  : lead.status === 'closed'
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                  : 'bg-purple-50 text-purple-800 border-purple-300'
                              }`}
                            >
                              <option value="new">🔴 Yangi</option>
                              <option value="contacted">🟡 Bog'lanildi</option>
                              <option value="closed">🟢 A'zo Bo'ldi</option>
                            </select>
                          </td>
                          <td className="p-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <a
                                href={`https://t.me/Asom_Designer?text=${encodeURIComponent(`Salom! Siz saytdan ariza qoldirgan edingiz: ${lead.name} (${lead.phone})`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px] flex items-center gap-1 border border-indigo-200"
                              >
                                <Send className="w-3 h-3" />
                                <span>Telegram</span>
                              </a>

                              <button
                                onClick={() => handleDeleteLead(lead.id)}
                                className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors"
                                title="O'chirish"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TELEGRAM & GOOGLE SHEETS CONFIG */}
          {activeTab === 'settings' && (
            <form onSubmit={handleSaveSettings} className="space-y-6">
              
              {/* Telegram Bot Setup */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                  <Send className="w-5 h-5 text-indigo-600" />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-slate-900">
                      1. Telegram Bot Integratsiyasi (To'g'ridan-To'g'ri Telegramingizga keladi)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Mijoz ariza to'ldirishi bilan bildirishnoma sizning Telegramingizga lahzada yetib boradi.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Telegram Bot Token:
                    </label>
                    <input
                      type="text"
                      placeholder="Masalan: 7123456789:AAH...xyz"
                      value={config.telegramBotToken}
                      onChange={(e) => setConfig({ ...config, telegramBotToken: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Sizning Telegram Chat ID:
                    </label>
                    <input
                      type="text"
                      placeholder="Masalan: 123456789"
                      value={config.telegramChatId}
                      onChange={(e) => setConfig({ ...config, telegramChatId: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handleTestTg}
                    disabled={testingTg}
                    className="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center gap-2 border border-indigo-200 transition-all"
                  >
                    {testingTg ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                    <span>Test Xabarini Yuborish</span>
                  </button>

                  {tgTestResult === 'success' && (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <Check className="w-4 h-4" /> Telegramga test xabari yetib bordi!
                    </span>
                  )}
                  {tgTestResult === 'error' && (
                    <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> Token yoki Chat ID xato!
                    </span>
                  )}
                </div>
              </div>

              {/* Google Sheets Setup */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-slate-900">
                      2. Google Sheets Webhook (Jadvalga Avto-yozilish)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Barcha tushgan arizalar Google Jadvallarizda avtomatsiz ustunga tushishi uchun Webhook URL.
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Google Apps Script Webhook URL:
                  </label>
                  <input
                    type="url"
                    placeholder="https://script.google.com/macros/s/AKfycb.../exec"
                    value={config.googleSheetsWebhook}
                    onChange={(e) => setConfig({ ...config, googleSheetsWebhook: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none bg-white"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                {saveSuccess && (
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <Check className="w-4 h-4" /> Sozlamalar saqlandi!
                  </span>
                )}
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                  <span>Sozlamalarni Saqlash</span>
                </button>
              </div>

            </form>
          )}

          {/* TAB 3: STEP BY STEP GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-6 text-xs text-slate-700 leading-relaxed">
              
              <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-3">
                <h3 className="font-bold text-sm text-indigo-950 flex items-center gap-2">
                  <Send className="w-4 h-4 text-indigo-600" />
                  <span>1. Telegram Boti Bilan Bepul Ulash (3 Daqiqalik Qo'llanma)</span>
                </h3>
                <ol className="list-decimal list-inside space-y-2 font-medium">
                  <li>Telegram dasturingizda <code className="bg-white px-1.5 py-0.5 rounded border text-indigo-800 font-bold">@BotFather</code> botini qidiring va kiring.</li>
                  <li>Unga <code className="bg-white px-1.5 py-0.5 rounded border font-mono">/newbot</code> deb yozing, botingizga nom va username bering.</li>
                  <li>BotFather sizga bergan <b>API Token</b> ini nusxalang (masalan: <code>7123456789:AAH...</code>) va yuqoridagi Sozlamalarga qo'ying.</li>
                  <li>So'ngra Telegramda <code className="bg-white px-1.5 py-0.5 rounded border text-indigo-800 font-bold">@userinfobot</code> ga kirib <code className="bg-white px-1.5 py-0.5 rounded border font-mono">/start</code> ni bosing — u sizning shaxsiy <b>Chat ID</b> raqamingizni beradi.</li>
                  <li>Yangi yaratgan botingizga ham kirib bir marta <code className="bg-white px-1.5 py-0.5 rounded border font-mono">/start</code> ni bosib qo'ying.</li>
                  <li>Sozlamalarga Chat ID ni qo'ying va "Test Xabarini Yuborish" tugmasini bosing!</li>
                </ol>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-emerald-950 flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                    <span>2. Google Sheets Bilan Ulash Qo'llanmasi</span>
                  </h3>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(googleAppsScriptCode);
                      setCopiedScript(true);
                      setTimeout(() => setCopiedScript(false), 2000);
                    }}
                    className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center gap-1 transition-all"
                  >
                    {copiedScript ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedScript ? 'Nusxalandi!' : 'Kodni nusxalash'}</span>
                  </button>
                </div>

                <ol className="list-decimal list-inside space-y-1.5 font-medium">
                  <li>Yangi Google Sheets (Jadval) oching.</li>
                  <li>Menyudan <b>Extensions &gt; Apps Script</b> bo'limiga kiring.</li>
                  <li>U yerdagi kodni o'chirib, pastdagi tayyor kodni joylang va saqlang:</li>
                </ol>

                <pre className="p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-[11px] overflow-x-auto border border-slate-800">
                  {googleAppsScriptCode}
                </pre>

                <p className="text-[11px] text-slate-600">
                  4. O'ng yuqoridagi <b>Deploy &gt; New deployment</b> tugmasini bosing.<br />
                  5. Select type: <b>Web app</b> qiling. Execute as: <b>Me</b>, Who has access: <b>Anyone</b> qilib Deploy ni bosing.<br />
                  6. Chiqqan URL manzilini nusxalab, Sozlamalardagi Google Sheets maydoniga qo'ying!
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <p>
            Boshqaruv Paneli • <b>Asom Designer</b> AI Design Pro
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors"
          >
            Yopish
          </button>
        </div>

      </div>
    </div>
  );
};
