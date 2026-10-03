import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ChapterSection } from './components/ChapterSection';
import { Footer } from './components/Footer';
import { CHAPTERS_NAV } from './data/presentationData';

const MainPresentation: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>('hero');

  // Live Scroll Spy with Intersection Observer
  useEffect(() => {
    const handleScrollObserver = () => {
      const sectionElements = CHAPTERS_NAV.map(c => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];

      const scrollY = window.pageYOffset + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el.offsetTop <= scrollY) {
          setActiveChapterId(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090A] text-[#F4F6F9] selection:bg-[#E60012] selection:text-white flex flex-col">
      {/* Top Fixed Sticky Navigation Bar */}
      <Navigation activeChapterId={activeChapterId} />

      {/* Main Single Continuous Scrolling Presentation Flow */}
      <main className="flex-1 w-full overflow-hidden">
        {/* 00 — Hero Opening Presentation */}
        <Hero />

        {/* 01 through 24 — All Strategic Chapters */}
        <ChapterSection id="chapter-01" />
        <ChapterSection id="chapter-02" />
        <ChapterSection id="chapter-03" />
        <ChapterSection id="chapter-04" />
        <ChapterSection id="chapter-05" />
        <ChapterSection id="chapter-06" />
        <ChapterSection id="chapter-07" />
        <ChapterSection id="chapter-08" />
        <ChapterSection id="chapter-09" />
        <ChapterSection id="chapter-10" />
        <ChapterSection id="chapter-11" />
        <ChapterSection id="chapter-12" />
        <ChapterSection id="chapter-13" />
        <ChapterSection id="chapter-14" />
        <ChapterSection id="chapter-15" />
        <ChapterSection id="chapter-16" />
        <ChapterSection id="chapter-17" />
        <ChapterSection id="chapter-18" />
        <ChapterSection id="chapter-19" />
        <ChapterSection id="chapter-20" />
        <ChapterSection id="chapter-21" />
        <ChapterSection id="chapter-22" />
        <ChapterSection id="chapter-23" />
        <ChapterSection id="chapter-24" />
      </main>

      {/* 25 — Final Strategic Brand Thought & Sign-off */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainPresentation />
    </LanguageProvider>
  );
}
