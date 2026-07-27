import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutCourse } from './components/AboutCourse';
import { Syllabus } from './components/Syllabus';
import { WhyUs } from './components/WhyUs';
import { Mentor } from './components/Mentor';
import { StudentShowcase } from './components/StudentShowcase';
import { Pricing } from './components/Pricing';
import { RoiCalculator } from './components/RoiCalculator';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { CONTACT_DATA } from './constants';
import { ExternalLink, Sparkles, Send } from 'lucide-react';

export default function App() {
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenVideo = (url: string, title: string) => {
    setVideoModal({ isOpen: true, url, title });
  };

  const handleCloseVideo = () => {
    setVideoModal({ ...videoModal, isOpen: false });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-purple-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero onOpenVideo={handleOpenVideo} />
        <AboutCourse />
        <Syllabus />
        <WhyUs />
        <Mentor />
        <StudentShowcase onOpenVideo={handleOpenVideo} />
        <RoiCalculator />
        <Pricing />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Video Modal Player */}
      <VideoModal
        isOpen={videoModal.isOpen}
        videoUrl={videoModal.url}
        title={videoModal.title}
        onClose={handleCloseVideo}
      />

      {/* Persistent Floating Bottom Registration Bar for Mobile & Desktop */}
      {showFloatingCta && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto bg-slate-900/90 backdrop-blur-xl text-white p-3.5 rounded-2xl border border-purple-500/30 shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold truncate">Grafik Dizayn AI Kursi</p>
              <p className="text-[10px] text-purple-300 truncate">Joylar soni cheklangan!</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={CONTACT_DATA.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 flex items-center gap-1.5"
            >
              <span>Ro‘yxatdan o‘tish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
