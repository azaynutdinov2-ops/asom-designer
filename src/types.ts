export interface CourseModule {
  id: number;
  title: string;
  duration: string;
  description: string;
  topics: string[];
  tools: string[];
  projectOutput: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  popular?: boolean;
  price: string;
  originalPrice: string;
  period: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'darslar' | 'tolov' | 'talablar' | 'natija';
}

export interface StudentWork {
  id: number;
  title: string;
  studentName: string;
  studentRole: string;
  category: 'branding' | 'photorealism' | 'ui' | 'video';
  image: string;
  promptUsed: string;
  toolsUsed: string[];
  beforeAfterUrl?: string;
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  author: string;
  description: string;
  type: 'mentor_video' | 'ai_animation';
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  tools: string[];
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  telegram: string;
  telegramUrl: string;
  instagram: string;
  instagramUrl: string;
  googleFormUrl: string;
}
