export interface CourseModule {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  lessonsCount: number;
  topics: string[];
  project: string;
  toolsUsed: string[];
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceOriginal: string;
  priceDiscount: string;
  period: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  formUrl: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface StudentWork {
  id: number;
  title: string;
  studentName: string;
  category: string; // 'Logotiplar' | 'SMM Bannerlar' | 'Fotorealizm' | 'Brending' | '3D & Mascot'
  image: string;
  prompt: string;
  tool: string;
  duration: string;
  clientType: string;
  beforeImage?: string;
}

export interface AITool {
  name: string;
  description: string;
  category: string;
  logo: string;
  accentColor: string;
  popularUses: string[];
}

export interface TargetAudience {
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface Mentor {
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
  stats: { label: string; value: string }[];
  achievements: string[];
  portfolioHighlights: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  salaryGrowth: string;
  comment: string;
  avatar: string;
  rating: number;
  verified: boolean;
}

export interface PromptPreset {
  id: string;
  title: string;
  category: string;
  promptText: string;
  style: string;
  previewImage: string;
  estimatedTime: string;
  toolName: string;
}
