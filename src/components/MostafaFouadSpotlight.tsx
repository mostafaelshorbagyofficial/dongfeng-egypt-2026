import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRESENTATION_CONTENT } from '../data/presentationData';
import { Quote, Sparkles } from 'lucide-react';

export const MostafaFouadSpotlight: React.FC = () => {
  const { t } = useLanguage();
  const { leadershipSpotlight } = PRESENTATION_CONTENT;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#14171C] via-[#0E1013] to-[#08090A] border border-[#222730] p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-dongfeng-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Mostafa Fouad Photographic Portrait */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Outer luxury border glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-dongfeng-red/30 to-white/10 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden bg-[#1A1E24] border border-white/20 shadow-2xl">
              <img
                src="/assets/mostafa/mostafa-fouad-seated.jpg"
                alt="Mostafa Fouad — Strategic Lead"
                className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/mostafa/mostafa-fouad-standing.jpg';
                }}
              />
              
              {/* Subtle gradient vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  {t(leadershipSpotlight.nameEn, leadershipSpotlight.nameAr)}
                </div>
                <div className="text-[10px] text-dongfeng-gray">
                  {t(leadershipSpotlight.titleEn, leadershipSpotlight.titleAr)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Presenter Statement */}
        <div className="md:col-span-7 space-y-6 text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dongfeng-red/10 border border-dongfeng-red/25 text-[11px] font-bold text-dongfeng-red tracking-wider uppercase">
            <Sparkles size={13} />
            <span>{t(leadershipSpotlight.tagEn, leadershipSpotlight.tagAr)}</span>
          </div>

          <div className="relative">
            <Quote size={32} className="text-dongfeng-red/30 mb-2 rotate-180" />
            <blockquote className="text-base sm:text-lg md:text-xl font-semibold text-white leading-relaxed">
              "{t(leadershipSpotlight.quoteEn, leadershipSpotlight.quoteAr)}"
            </blockquote>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/assets/promedia/promedia-logo.png"
                alt="ProMedia"
                className="h-6 w-auto object-contain brightness-125"
              />
              <div className="h-4 w-px bg-white/20" />
              <div className="text-xs font-bold text-dongfeng-silver">
                {t('Strategic Partner', 'الشريك الاستراتيجي')}
              </div>
            </div>

            <div className="text-[11px] font-mono text-dongfeng-gray">
              {t('COMMERCIAL MOBILITY 2026', 'النقل التجاري 2026')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
