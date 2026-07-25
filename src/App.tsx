import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutCourse } from './components/AboutCourse';
import { Modules } from './components/Modules';
import { WhyUs } from './components/WhyUs';
import { Mentor } from './components/Mentor';
import { Gallery } from './components/Gallery';
import { InteractivePlayground } from './components/InteractivePlayground';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { RegistrationCTA } from './components/RegistrationCTA';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { AdminLeadsModal } from './components/AdminLeadsModal';
import { GOOGLE_FORM_URL } from './constants';
import { StudentWork } from './types';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export function App() {
  const [selectedWork, setSelectedWork] = useState<StudentWork | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      {/* Navbar Header */}
      <Header />

      {/* Main Landing Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Kurs haqida */}
        <AboutCourse />

        {/* 3. Dastur / Modullar */}
        <Modules />

        {/* 4. Nega aynan biz */}
        <WhyUs />

        {/* 5. O'qituvchi / Mentor */}
        <Mentor />

        {/* 6. Talabalar ishlari / Natijalar */}
        <Gallery onOpenLightbox={(work) => setSelectedWork(work)} />

        {/* Interaktiv Playground & ROI Calculator */}
        <InteractivePlayground />

        {/* 7. Narxlar / Tariflar */}
        <Pricing />

        {/* 8. FAQ - Ko'p beriladigan savollar */}
        <FAQ />

        {/* 9. Bog'lanish / Ro'yxatdan o'tish */}
        <RegistrationCTA />
      </main>

      {/* 10. Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Lightbox Modal for Artworks */}
      <LightboxModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />

      {/* Admin Panel & Leads Database Modal */}
      <AdminLeadsModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Floating Bottom Quick Registration Pill for High Conversion */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-purple-600/50 hover:scale-105 transition-all duration-300 border border-purple-400/40 group"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Ro'yxatdan o'tish</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default App;
