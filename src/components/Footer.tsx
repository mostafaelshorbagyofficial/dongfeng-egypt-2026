import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRESENTATION_CONTENT } from '../data/presentationData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { finalThought } = PRESENTATION_CONTENT;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="final-thought" className="relative bg-[#050607] border-t border-white/10 pt-20 pb-16 overflow-hidden">
      {/* Subtle top spotlight glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-dongfeng-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          {/* Official Dongfeng Commercial Brand Mark */}
          <div className="flex justify-center">
            <div className="p-4 bg-white rounded-2xl shadow-2xl border border-white/20">
              <img
                src="/assets/dongfeng/dongfeng-commercial-logo.png"
                alt="Dongfeng Commercial"
                className="h-16 sm:h-20 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/dongfeng/dongfeng-commercial-logo.jpg';
                }}
              />
            </div>
          </div>

          {/* Final Cinematic Punchlines */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              {t(finalThought.tagline1En, finalThought.tagline1Ar)}
              <br />
              <span className="text-gradient-red">
                {t(finalThought.tagline2En, finalThought.tagline2Ar)}
              </span>
            </h2>

            <div className="pt-4">
              <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-dongfeng-silver uppercase font-mono">
                {finalThought.punchline}
              </span>
            </div>
          </div>

          {/* Presenter Sign-off Note */}
          <div className="pt-8 border-t border-white/10 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-dongfeng-gray">
              <div className="flex items-center gap-2">
                <span>{t('Presented by', 'تقديم')}</span>
                <img
                  src="/assets/promedia/promedia-logo.png"
                  alt="ProMedia"
                  className="h-4 w-auto object-contain brightness-125"
                />
              </div>
              <span className="hidden sm:inline">•</span>
              <div>
                {t('For Dongfeng Commercial Egypt Leadership', 'للإدارة العليا لشركة دونج فينج التجارية مصر')}
              </div>
            </div>
          </div>

          {/* Back to Top Floating Button */}
          <div className="pt-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14171C] border border-[#222730] hover:border-dongfeng-red text-xs font-bold text-dongfeng-silver hover:text-white transition-all shadow-md"
              aria-label="Back to Top"
            >
              <ArrowUp size={14} className="text-dongfeng-red" />
              <span>{t('BACK TO TOP', 'العودة للأعلى')}</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
