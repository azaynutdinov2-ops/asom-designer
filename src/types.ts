export interface CourseModule {
  id: number;
  number: string;
  title: string;
  description: string;
  duration: string;
  lessonsCount: number;
  skills: string[];
  tools: string[];
  deliverable: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  originalPrice: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface StudentWork {
  id: number;
  title: string;
  studentName: string;
  studentRole: string;
  category: 'midjourney' | 'aivideo' | 'branding' | 'posters';
  type: 'image' | 'video';
  mediaUrl: string;
  posterUrl?: string;
  promptUsed: string;
  toolUsed: string;
  timeSpentBeforeAI: string;
  timeSpentWithAI: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface Benefit {
  id: number;
  iconName: string;
  title: string;
  description: string;
  highlight: string;
}

export interface MentorInfo {
  name: string;
  title: string;
  experienceYears: number;
  bio: string;
  quote: string;
  skills: string[];
  stats: {
    students: string;
    projects: string;
    experience: string;
    rating: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    telegram: string;
    telegramUrl: string;
    instagram: string;
    instagramUrl: string;
  };
}

export const CONSTANTS = {
  GOOGLE_FORM_URL: "https://docs.google.com/forms/d/e/1FAIpQLSe3FTfqFWL5bi-4cBwRzhmHp7djpNnP44d1bYxoyQNWAcpoJw/viewform?usp=header",
  PHONE: "+998 99 807 62 75",
  PHONE_TEL: "tel:+998998076275",
  TELEGRAM_HANDLE: "@asom_uz",
  TELEGRAM_URL: "https://t.me/asom_uz",
  INSTAGRAM_HANDLE: "@asom.designer",
  INSTAGRAM_URL: "https://www.instagram.com/asom.designer/",
};
