import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutCourse } from './components/AboutCourse';
import { Curriculum } from './components/Curriculum';
import { WhyUs } from './components/WhyUs';
import { MentorSection } from './components/MentorSection';
import { StudentWorks } from './components/StudentWorks';
import { AiPromptSimulator } from './components/AiPromptSimulator';
import { RoiCalculator } from './components/RoiCalculator';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenRegister={handleOpenRegister} />

        {/* 2. Kurs haqida */}
        <AboutCourse onOpenRegister={handleOpenRegister} />

        {/* Interactive AI Prompt Simulator */}
        <AiPromptSimulator />

        {/* 3. Dastur / Modullar */}
        <Curriculum onOpenRegister={handleOpenRegister} />

        {/* 4. Nega aynan biz */}
        <WhyUs />

        {/* 5. Mentor haqida bo'lim */}
        <MentorSection onOpenRegister={handleOpenRegister} />

        {/* 6. Talabalar ishlari / Natijalar (100+ shogirdlar, mentor video, AI video) */}
        <StudentWorks />

        {/* Interactive ROI Calculator */}
        <RoiCalculator onOpenRegister={handleOpenRegister} />

        {/* 7. Narxlar / tariflar */}
        <PricingSection onOpenRegister={handleOpenRegister} />

        {/* 8. FAQ */}
        <FaqSection />

        {/* 9. Bog'lanish / Ro'yxatdan o'tish */}
        <ContactSection onOpenRegister={handleOpenRegister} />
      </main>

      {/* 10. Footer */}
      <Footer onOpenRegister={handleOpenRegister} />

      {/* Modal Popup */}
      <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />
    </div>
  );
}
