import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRESENTATION_CONTENT } from '../data/presentationData';

export const InteractiveSocialMix: React.FC = () => {
  const { language, t } = useLanguage();
  const { socialMix } = PRESENTATION_CONTENT;
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  const activeItem = socialMix.items[activeItemIndex];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-[#0E1013] border border-[#222730] p-6 md:p-10 shadow-2xl">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-tag mb-3">
          {t('CONTENT ARCHITECTURE', 'هندسة توزيع المحتوى')}
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-white uppercase">
          {t(socialMix.title, socialMix.titleAr)}
        </h3>
        <p className="text-sm font-bold text-dongfeng-red mt-2 tracking-wider">
          {t(socialMix.punchlineEn, socialMix.punchlineAr)}
        </p>
      </div>

      {/* Visual Percentage Distribution Bar */}
      <div className="w-full h-8 rounded-full overflow-hidden flex bg-[#14171C] p-1 border border-[#222730] mb-8 shadow-inner">
        {socialMix.items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveItemIndex(idx)}
            className={`h-full transition-all duration-300 relative group first:rounded-s-full last:rounded-e-full ${
              activeItemIndex === idx ? 'ring-2 ring-white z-10' : 'opacity-85 hover:opacity-100'
            }`}
            style={{
              width: `${item.percentage}%`,
              backgroundColor: item.color
            }}
            title={`${item.percentage}% - ${item.labelEn}`}
          />
        ))}
      </div>

      {/* Grid of Interactive Percentage Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {socialMix.items.map((item, idx) => {
          const isSelected = activeItemIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveItemIndex(idx)}
              className={`p-3.5 rounded-2xl text-start transition-all duration-300 ${
                isSelected
                  ? 'bg-[#1A1E24] border-2 border-dongfeng-red shadow-lg shadow-dongfeng-red/20 scale-105'
                  : 'bg-[#14171C] border border-[#222730] hover:border-white/20'
              }`}
            >
              <div className="text-2xl sm:text-3xl font-black font-mono text-white flex items-baseline gap-0.5">
                <span>{item.percentage}</span>
                <span className="text-xs text-dongfeng-red">%</span>
              </div>
              <div className="text-[11px] font-bold text-dongfeng-silver mt-1 line-clamp-2">
                {language === 'ar' ? item.labelAr : item.labelEn}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Segment Deep Dive Card */}
      <div className="p-6 rounded-2xl bg-[#14171C] border border-[#222730] flex flex-col sm:flex-row items-center justify-between gap-6 animate-fade-in">
        <div className="space-y-2 text-start">
          <div className="flex items-center gap-3">
            <span
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: activeItem.color }}
            />
            <h4 className="text-lg font-black text-white">
              {language === 'ar' ? activeItem.labelAr : activeItem.labelEn}
            </h4>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-white">
              {activeItem.percentage}% {t('OF TOTAL MIX', 'من إجمالي المحتوى')}
            </span>
          </div>
          <p className="text-sm text-dongfeng-silver leading-relaxed max-w-2xl">
            {language === 'ar' ? activeItem.descAr : activeItem.descEn}
          </p>
        </div>

        <div className="shrink-0">
          <div className="px-4 py-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
            <div className="text-[10px] text-dongfeng-gray uppercase font-bold tracking-wider">
              {t('STRATEGIC GOAL', 'الهدف الاستراتيجي')}
            </div>
            <div className="text-xs font-bold text-dongfeng-red mt-0.5">
              {activeItem.percentage >= 25 ? t('HIGH ENGAGEMENT & REACH', 'انتشار وبناء ثقة') : t('HIGH INTENT CONVERSION', 'تحويل مباشر للمبيعات')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
