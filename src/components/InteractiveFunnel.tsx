import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRESENTATION_CONTENT } from '../data/presentationData';
import {
  Eye,
  Target,
  MessageSquare,
  CheckCircle,
  Users,
  Key,
  FileText,
  Award,
  ArrowRight,
  ArrowLeft,
  RotateCw
} from 'lucide-react';

export const InteractiveFunnel: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const { leadGen, paidMedia } = PRESENTATION_CONTENT;
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Eye: <Eye size={18} />,
    Target: <Target size={18} />,
    MessageSquare: <MessageSquare size={18} />,
    CheckCircle: <CheckCircle size={18} />,
    Users: <Users size={18} />,
    Key: <Key size={18} />,
    FileText: <FileText size={18} />,
    Award: <Award size={18} />
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12">
      {/* 8-Stage Conversion Journey */}
      <div className="rounded-3xl bg-[#0E1013] border border-[#222730] p-6 md:p-10 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-tag mb-3">
            {t('COMMERCIAL FUNNEL ENGINE', 'مسار تحويل المبيعات')}
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase">
            {t(leadGen.title, leadGen.titleAr)}
          </h3>
          <p className="text-sm font-bold text-dongfeng-red mt-2 tracking-wider">
            {t(leadGen.punchlineEn, leadGen.punchlineAr)}
          </p>
        </div>

        {/* Funnel Pipeline Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 relative">
          {leadGen.funnelSteps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-2xl flex flex-col items-center text-center transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-dongfeng-red text-white shadow-xl shadow-dongfeng-red/30 scale-105 z-10'
                    : 'bg-[#14171C] text-dongfeng-silver hover:bg-white/5 border border-[#222730]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${
                    isSelected ? 'bg-black/30 text-white' : 'bg-[#0E1013] text-dongfeng-red'
                  }`}
                >
                  {iconMap[step.icon]}
                </div>
                <div className="font-mono text-[10px] opacity-75 font-bold mb-1">
                  {step.step}
                </div>
                <div className="text-xs font-bold leading-tight line-clamp-2">
                  {language === 'ar' ? step.ar : step.en}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Funnel Step Detail Card */}
        <div className="mt-8 p-6 rounded-2xl bg-[#14171C] border border-[#222730] flex flex-col sm:flex-row items-center justify-between gap-6 animate-fade-in">
          <div className="space-y-1 text-start">
            <div className="text-xs font-mono font-bold text-dongfeng-red">
              {t('STAGE ', 'المرحلة ')}
              {leadGen.funnelSteps[activeStepIndex].step}
            </div>
            <h4 className="text-lg font-black text-white">
              {language === 'ar'
                ? leadGen.funnelSteps[activeStepIndex].ar
                : leadGen.funnelSteps[activeStepIndex].en}
            </h4>
            <p className="text-xs sm:text-sm text-dongfeng-silver">
              {language === 'ar'
                ? leadGen.funnelSteps[activeStepIndex].descAr
                : leadGen.funnelSteps[activeStepIndex].descEn}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <button
              onClick={() =>
                setActiveStepIndex(prev =>
                  prev < leadGen.funnelSteps.length - 1 ? prev + 1 : 0
                )
              }
              className="px-4 py-2 rounded-xl bg-dongfeng-red/20 text-dongfeng-red hover:bg-dongfeng-red hover:text-white text-xs font-bold uppercase transition-colors flex items-center gap-1.5"
            >
              <span>{t('Next Stage', 'المرحلة التالية')}</span>
              {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Retargeting Loops & Paid Media Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Paid Media Allocation (40 / 30 / 30) */}
        <div className="lg:col-span-6 rounded-3xl bg-[#0E1013] border border-[#222730] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-black text-white uppercase">
              {t(paidMedia.title, paidMedia.titleAr)}
            </h4>
            <span className="badge-tag text-[10px]">
              {t('BUDGET ALLOCATION', 'توزيع الميزانية')}
            </span>
          </div>

          <div className="space-y-4">
            {paidMedia.budgetSplit.map((split, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#14171C] border border-[#222730] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-black font-mono text-dongfeng-red">
                      {split.percentage}%
                    </span>
                    <span className="text-sm font-bold text-white uppercase">
                      {language === 'ar' ? split.stageAr : split.stageEn}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-dongfeng-gray">
                    {language === 'ar' ? split.metricsAr : split.metricsEn}
                  </span>
                </div>
                <div className="w-full bg-[#0E1013] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-dongfeng-red h-full rounded-full transition-all duration-500"
                    style={{ width: `${split.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-dongfeng-silver pt-1">
                  {language === 'ar' ? split.descAr : split.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Retargeting Loops Architecture */}
        <div className="lg:col-span-6 rounded-3xl bg-[#0E1013] border border-[#222730] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-black text-white uppercase">
              {t('RETARGETING LOOPS', 'حلقات إعادة الاستهداف')}
            </h4>
            <span className="badge-tag text-[10px]">
              {t('NO LEAD LEFT BEHIND', 'متابعة مستمرة لكل عميل')}
            </span>
          </div>

          <div className="space-y-3.5">
            {paidMedia.retargetingLoops.map((loop, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#14171C] border border-[#222730] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-dongfeng-red/15 text-dongfeng-red flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-dongfeng-gray">
                      {t('Trigger Event', 'الحدث المشغل')}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {language === 'ar' ? loop.triggerAr : loop.triggerEn}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isRTL ? (
                    <ArrowLeft size={16} className="text-dongfeng-red shrink-0" />
                  ) : (
                    <ArrowRight size={16} className="text-dongfeng-red shrink-0" />
                  )}
                  <div className="text-end rtl:text-start">
                    <div className="text-[10px] uppercase font-bold text-dongfeng-red">
                      {t('Automated Action', 'الإجراء التلقائي')}
                    </div>
                    <div className="text-xs sm:text-sm font-black text-dongfeng-silver whitespace-nowrap">
                      {language === 'ar' ? loop.actionAr : loop.actionEn}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-dongfeng-gray flex items-center gap-2.5">
            <RotateCw size={16} className="text-dongfeng-red shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
            <span>
              {t(
                'Continuous programmatic audience syncing across Meta, TikTok, and WhatsApp CRM.',
                'مزامنة برمجية مستمرة بين إعلانات ميتا، تيك توك، ونظام إدارة علاقات العملاء بالواتساب.'
              )}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
