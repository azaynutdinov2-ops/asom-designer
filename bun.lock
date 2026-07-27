export interface LeadData {
  id: string;
  name: string;
  phone: string;
  date: string;
  source?: string;
  status?: 'new' | 'contacted' | 'closed';
}

export interface SettingsConfig {
  telegramBotToken: string;
  telegramChatId: string;
  googleSheetsWebhook: string;
}

const SETTINGS_KEY = 'ai_designer_config';
const LEADS_KEY = 'ai_designer_leads';

export const getSettings = (): SettingsConfig => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        telegramBotToken: parsed.telegramBotToken || '',
        telegramChatId: parsed.telegramChatId || '',
        googleSheetsWebhook: parsed.googleSheetsWebhook || '',
      };
    }
  } catch (err) {
    console.error('Failed to parse settings:', err);
  }
  return {
    telegramBotToken: '',
    telegramChatId: '',
    googleSheetsWebhook: '',
  };
};

export const saveSettings = (config: SettingsConfig) => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(config));
};

export const getStoredLeads = (): LeadData[] => {
  try {
    const raw = localStorage.getItem(LEADS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse leads:', err);
  }
  return [];
};

export const saveLead = (name: string, phone: string, source: string = 'Website Form'): LeadData => {
  const newLead: LeadData = {
    id: 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    name,
    phone,
    date: new Date().toLocaleString('uz-UZ'),
    source,
    status: 'new',
  };

  const current = getStoredLeads();
  current.unshift(newLead);
  localStorage.setItem(LEADS_KEY, JSON.stringify(current));
  return newLead;
};

export const clearAllLeads = () => {
  localStorage.removeItem(LEADS_KEY);
};

export const deleteLead = (id: string) => {
  const current = getStoredLeads();
  const updated = current.filter(l => l.id !== id);
  localStorage.setItem(LEADS_KEY, JSON.stringify(updated));
  return updated;
};

export const updateLeadStatus = (id: string, status: 'new' | 'contacted' | 'closed') => {
  const current = getStoredLeads();
  const updated = current.map(l => l.id === id ? { ...l, status } : l);
  localStorage.setItem(LEADS_KEY, JSON.stringify(updated));
  return updated;
};

export const sendLeadToTelegramAndSheets = async (name: string, phone: string, source: string = 'Website Form') => {
  // 1. Always save lead locally first so nothing is ever lost
  const lead = saveLead(name, phone, source);

  const config = getSettings();
  let tgSuccess = false;
  let sheetSuccess = false;

  const formattedMsg = `🔥 *Yangi Ariza Tushdi!* (AI Design Pro)\n\n👤 *Ismi:* ${name}\n📞 *Telefon:* \`${phone}\` \n📅 *Vaqti:* ${lead.date}\n📍 *Manba:* ${source}`;

  // 2. Send to Telegram Bot directly if configured
  if (config.telegramBotToken && config.telegramChatId) {
    try {
      const tgRes = await fetch(`https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: config.telegramChatId,
          text: formattedMsg,
          parse_mode: 'Markdown',
        }),
      });
      if (tgRes.ok) tgSuccess = true;
    } catch (err) {
      console.error('Telegram Bot send error:', err);
    }
  }

  // 3. Send to Google Sheets Webhook directly if configured
  if (config.googleSheetsWebhook) {
    try {
      await fetch(config.googleSheetsWebhook, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: lead.id,
          name,
          phone,
          date: lead.date,
          source,
        }),
      });
      sheetSuccess = true;
    } catch (err) {
      console.error('Google Sheets send error:', err);
    }
  }

  return { lead, tgSuccess, sheetSuccess };
};

export const testTelegramNotification = async (token: string, chatId: string): Promise<boolean> => {
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: "✅ *AI Design Pro* saytingizdan test xabari muvaffaqiyatli ulindi!\n\nEndi mijozlar qoldirgan telefon va ism ushbu botga to'g'ridan-to'g'ri keladi.",
        parse_mode: 'Markdown',
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
};
