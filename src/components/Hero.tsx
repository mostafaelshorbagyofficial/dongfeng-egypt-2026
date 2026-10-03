import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRESENTATION_CONTENT } from '../data/presentationData';
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  const { isRTL, t } = useLanguage();
  const { opening } = PRESENTATION_CONTENT;

  const scrollToFirstChapter = () => {
    const el = document.getElementById('chapter-01');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-white/10"
    >
      {/* Background Architectural Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1013] via-[#08090A] to-[#08090A] -z-10" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-dongfeng-red/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-dongfeng-red/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="section-container my-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* ProMedia Presenter Mark (Short & Elegant) */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#14171C] border border-[#222730] mb-8 shadow-inner">
            <img
              src="/assets/promedia/promedia-logo.png"
              alt="ProMedia"
              className="h-5 w-auto object-contain brightness-110"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-dongfeng-red" />
            <span className="text-xs font-bold tracking-widest text-dongfeng-gray uppercase">
              {t(opening.agencyTag, opening.agencyTagAr)}
            </span>
          </div>

          {/* Dongfeng Commercial Official Logo */}
          <div className="flex justify-center mb-8">
            <div className="p-3.5 bg-white rounded-2xl shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-500">
              <img
                src="/assets/dongfeng/dongfeng-commercial-logo.png"
                alt="Dongfeng Commercial Egypt"
                className="h-16 md:h-20 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/dongfeng/dongfeng-commercial-logo.jpg';
                }}
              />
            </div>
          </div>

          {/* Main Brand Title */}
          <div className="space-y-4 mb-8">
            <h2 className="text-sm md:text-base font-bold tracking-[0.25em] text-dongfeng-red uppercase">
              {t(opening.clientName, opening.clientNameAr)}
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] uppercase">
              {t('DIGITAL + OFFLINE', 'استراتيجية التسويق')}
              <br />
              <span className="text-gradient-red">
                {t('MARKETING STRATEGY', 'الرقمي والميداني')}
              </span>
            </h1>
          </div>

          {/* Year & Tagline */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10">
            <span className="text-xl md:text-2xl font-black text-white font-mono px-4 py-1.5 rounded-lg bg-white/5 border border-white/10">
              2026
            </span>
            <span className="w-2 h-2 rounded-full bg-dongfeng-red" />
            <span className="text-lg md:text-xl font-bold tracking-widest text-dongfeng-silver uppercase">
              {t('KEEP BUSINESS MOVING.', 'شغلك ما يقفش.')}
            </span>
          </div>

          {/* Primary CTA to Begin Strategy Scroll */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToFirstChapter}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-dongfeng-red hover:bg-dongfeng-red-dark text-white font-bold text-sm md:text-base tracking-wider uppercase transition-all duration-300 shadow-xl shadow-dongfeng-red/25 flex items-center justify-center gap-3 group"
            >
              <span>{t('EXPLORE STRATEGY', 'استعراض الاستراتيجية')}</span>
              {isRTL ? (
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="section-container flex justify-between items-center text-xs text-dongfeng-gray border-t border-white/5 pt-6">
        <div className="font-mono tracking-wider">
          {t('PREPARED FOR EXECUTIVE LEADERSHIP', 'مُعد للإدارة التنفيذية')}
        </div>
        <button
          onClick={scrollToFirstChapter}
          className="flex items-center gap-2 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="hidden sm:inline">{t('SCROLL TO DISCOVER', 'مرر للاستكشاف')}</span>
          <ChevronDown size={16} className="animate-bounce text-dongfeng-red" />
        </button>
        <div className="font-mono">
          24 {t('STRATEGIC PILLARS', 'محوراً استراتيجياً')}
        </div>
      </div>
    </section>
  );
};
