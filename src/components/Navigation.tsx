import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CHAPTERS_NAV } from '../data/presentationData';
import { Menu, X, Globe, ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';

interface NavigationProps {
  activeChapterId: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeChapterId }) => {
  const { language, toggleLanguage, isRTL, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentChapter = CHAPTERS_NAV.find(c => c.id === activeChapterId) || CHAPTERS_NAV[0];

  const scrollToSection = (id: string) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090A]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#08090A]/95 via-[#08090A]/60 to-transparent py-5'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Brand Mark & Chapter Indicator */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 text-left rtl:text-right group focus:outline-none"
              aria-label="Dongfeng Commercial Home"
            >
              <img
                src="/assets/dongfeng/dongfeng-commercial-logo.png"
                alt="Dongfeng Commercial"
                className="h-8 md:h-10 w-auto object-contain bg-white rounded-md p-1 border border-white/20 group-hover:border-dongfeng-red transition-colors"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/dongfeng/dongfeng-commercial-logo.jpg';
                }}
              />
              <div className="hidden sm:block">
                <div className="text-xs md:text-sm font-black tracking-widest text-white uppercase group-hover:text-dongfeng-red transition-colors">
                  {t('DONGFENG COMMERCIAL', 'دونج فينج التجارية')}
                </div>
                <div className="text-[10px] text-dongfeng-gray font-medium tracking-wider">
                  {t('EGYPT STRATEGY 2026', 'استراتيجية مصر 2026')}
                </div>
              </div>
            </button>

            {/* Current Chapter Pill Button */}
            <button
              onClick={() => setIsDrawerOpen(prev => !prev)}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-dongfeng-red/50 text-xs text-dongfeng-light hover:text-white transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-dongfeng-red animate-pulse" />
              <span className="font-mono text-dongfeng-gray">{currentChapter.num}</span>
              <span className="font-semibold text-dongfeng-silver">
                {language === 'ar' ? currentChapter.titleAr : currentChapter.titleEn}
              </span>
              <ChevronDown size={14} className={`text-dongfeng-gray transition-transform ${isDrawerOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Right Action Controls: Language Switcher & Menu */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14171C] border border-[#222730] hover:border-dongfeng-red text-xs md:text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-md"
              aria-label="Toggle language mode"
            >
              <Globe size={14} className="text-dongfeng-red" />
              <span>{language === 'en' ? 'العربية' : 'ENGLISH'}</span>
            </button>

            {/* Chapter Navigator Button */}
            <button
              onClick={() => setIsDrawerOpen(prev => !prev)}
              className="p-2 md:px-3 md:py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 text-white flex items-center gap-2 text-xs md:text-sm font-semibold transition-colors"
              aria-label="Open presentation index"
            >
              {isDrawerOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="hidden md:inline">{t('INDEX', 'الفهرس')}</span>
            </button>
          </div>
        </div>

        {/* Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            className="h-full bg-dongfeng-red transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Chapters Index Drawer Modal */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl flex justify-end animate-fade-in">
          <div
            className="w-full max-w-md bg-[#0E1013] border-s border-white/10 h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl pt-24"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-lg font-black text-white tracking-wider">
                    {t('PRESENTATION INDEX', 'فهرس الاستراتيجية')}
                  </h3>
                  <p className="text-xs text-dongfeng-gray mt-0.5">
                    {t('24 Chapters • Digital & Offline Strategy 2026', '24 فصلاً • استراتيجية التسويق 2026')}
                  </p>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 rounded-full bg-white/5 text-dongfeng-gray hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-1.5">
                {CHAPTERS_NAV.map((chapter) => {
                  const isActive = chapter.id === activeChapterId;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => scrollToSection(chapter.id)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-start transition-all ${
                        isActive
                          ? 'bg-dongfeng-red text-white font-bold shadow-lg shadow-dongfeng-red/20'
                          : 'text-dongfeng-gray hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs px-2 py-0.5 rounded ${
                            isActive ? 'bg-black/30 text-white' : 'bg-[#14171C] text-dongfeng-gray'
                          }`}
                        >
                          {chapter.num}
                        </span>
                        <span className="text-xs md:text-sm">
                          {language === 'ar' ? chapter.titleAr : chapter.titleEn}
                        </span>
                      </div>
                      {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer inside drawer */}
            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <div className="text-[11px] text-dongfeng-gray">
                {t('Presented by PROMEDIA', 'تقديم بروميديا')}
              </div>
              <button
                onClick={toggleLanguage}
                className="text-xs text-dongfeng-red font-bold hover:underline"
              >
                {language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
