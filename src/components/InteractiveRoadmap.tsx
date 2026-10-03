import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRESENTATION_CONTENT } from '../data/presentationData';
import { CheckCircle2, ShieldCheck, Flame, Trophy } from 'lucide-react';

export const InteractiveRoadmap: React.FC = () => {
  const { language, t } = useLanguage();
  const { roadmap } = PRESENTATION_CONTENT;
  const [activeMonthIdx, setActiveMonthIdx] = useState<number>(0);

  const activeMonth = roadmap.months[activeMonthIdx];

  const monthIcons = [
    <ShieldCheck key="1" size={20} className="text-dongfeng-red" />,
    <Flame key="2" size={20} className="text-dongfeng-red" />,
    <Trophy key="3" size={20} className="text-dongfeng-red" />
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-[#0E1013] border border-[#222730] p-6 md:p-10 shadow-2xl">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-tag mb-3">
          {t('EXECUTION TIMELINE', 'الجدول الزمني للتنفيذ')}
        </span>
        <h3 className="text-2xl md:text-4xl font-black text-white uppercase">
          {t(roadmap.title, roadmap.titleAr)}
        </h3>
        <p className="text-xs md:text-sm text-dongfeng-gray mt-2">
          {t('Three Strategic Phases • 90 Days to Market Leadership', 'ثلاث مراحل استراتيجية • 90 يوماً نحو ترسيخ المكانة')}
        </p>
      </div>

      {/* Month Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {roadmap.months.map((month, idx) => {
          const isSelected = activeMonthIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveMonthIdx(idx)}
              className={`p-5 rounded-2xl text-start transition-all duration-300 relative overflow-hidden ${
                isSelected
                  ? 'bg-[#14171C] border-2 border-dongfeng-red shadow-xl shadow-dongfeng-red/20 scale-[1.02]'
                  : 'bg-[#14171C]/60 border border-[#222730] hover:border-white/20'
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 right-0 left-0 h-1 bg-dongfeng-red" />
              )}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-black/40 text-dongfeng-red">
                  {t('MONTH ', 'الشهر ')} {month.monthNum}
                </span>
                {monthIcons[idx]}
              </div>
              <h4 className="text-lg font-black text-white">
                {language === 'ar' ? month.nameAr : month.nameEn}
              </h4>
              <p className="text-xs text-dongfeng-gray mt-1 line-clamp-1">
                {language === 'ar' ? month.focusAr : month.focusEn}
              </p>
            </button>
          );
        })}
      </div>

      {/* Deep Dive for Selected Month */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#14171C] border border-[#222730] space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-mono font-bold text-dongfeng-red">
              {t('PHASE 0', 'المرحلة 0')}
              {activeMonth.monthNum} • {t('STRATEGIC FOCUS', 'التركيز الاستراتيجي')}
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white mt-1">
              {language === 'ar' ? activeMonth.nameAr : activeMonth.nameEn}
            </h4>
          </div>

          <div className="badge-dark text-xs">
            {t('30-DAY SPRINT', 'دورة تنفيذ 30 يوماً')}
          </div>
        </div>

        {/* Deliverables / Focus Highlights */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-dongfeng-silver uppercase tracking-wider">
            {t('CORE OPERATIONAL TRACKS', 'المسارات التشغيلية الرئيسية')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {(language === 'ar' ? activeMonth.focusAr : activeMonth.focusEn)
              .split('•')
              .map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5 text-xs font-semibold text-white"
                >
                  <CheckCircle2 size={15} className="text-dongfeng-red shrink-0" />
                  <span>{item.trim()}</span>
                </div>
              ))}
          </div>

          <p className="text-sm text-dongfeng-silver pt-2 leading-relaxed">
            {language === 'ar' ? activeMonth.descAr : activeMonth.descEn}
          </p>
        </div>
      </div>
    </div>
  );
};
