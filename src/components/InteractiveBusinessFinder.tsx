import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRESENTATION_CONTENT } from '../data/presentationData';
import {
  Truck,
  Package,
  Store,
  HardHat,
  Factory,
  Users,
  Layers,
  PhoneCall,
  Calendar,
  MessageCircle,
  Check
} from 'lucide-react';

export const InteractiveBusinessFinder: React.FC = () => {
  const { language, t } = useLanguage();
  const { websiteExperience } = PRESENTATION_CONTENT;

  const [selectedCategory, setSelectedCategory] = useState<string>('delivery');

  const iconsMap: Record<string, React.ReactNode> = {
    delivery: <Package size={20} />,
    distribution: <Truck size={20} />,
    retail: <Store size={20} />,
    construction: <HardHat size={20} />,
    factory: <Factory size={20} />,
    passenger: <Users size={20} />,
    fleet: <Layers size={20} />
  };

  const currentMatch =
    websiteExperience.categories.find(c => c.id === selectedCategory) ||
    websiteExperience.categories[0];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-[#0E1013] border border-[#222730] p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-dongfeng-red/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-tag mb-3">
          {t('DIGITAL DISCOVERY ENGINE', 'محرك الاكتشاف الرقمي')}
        </span>
        <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
          {t(websiteExperience.headlineEn, websiteExperience.headlineAr)}
        </h3>
        <p className="text-xs md:text-sm text-dongfeng-gray mt-2">
          {t(websiteExperience.questionEn, websiteExperience.questionAr)}
        </p>
      </div>

      {/* Business Sector Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {websiteExperience.categories.map((cat) => {
          const isSelected = cat.id === selectedCategory;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 ${
                isSelected
                  ? 'bg-dongfeng-red text-white shadow-lg shadow-dongfeng-red/30 scale-105'
                  : 'bg-[#14171C] text-dongfeng-gray hover:text-white hover:bg-white/5 border border-[#222730]'
              }`}
            >
              <span className={isSelected ? 'text-white' : 'text-dongfeng-red'}>
                {iconsMap[cat.id]}
              </span>
              <span>{language === 'ar' ? cat.ar : cat.en}</span>
            </button>
          );
        })}
      </div>

      {/* Matching Vehicle Result Card */}
      <div className="rounded-2xl bg-[#14171C] border border-[#222730] p-6 md:p-8 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Model Name & Specifications */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dongfeng-red/10 border border-dongfeng-red/30 text-dongfeng-red text-xs font-bold uppercase tracking-wider">
              <span>{t('PERFECT BUSINESS MATCH', 'الخيار الأنسب لنشاطك')}</span>
            </div>

            <div>
              <h4 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                {currentMatch.model}
              </h4>
              <p className="text-sm text-dongfeng-silver mt-2 leading-relaxed">
                {language === 'ar' ? currentMatch.descAr : currentMatch.descEn}
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-dongfeng-gray">
                <div className="w-4 h-4 rounded-full bg-dongfeng-red/20 text-dongfeng-red flex items-center justify-center">
                  <Check size={10} />
                </div>
                <span>
                  {t(
                    'Engineered for maximum payload durability and lower total cost of ownership.',
                    'مصممة لتحمل أقصى أوزان التشغيل مع أقل تكلفة تشغيل وصيانة لكل كيلومتر.'
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-dongfeng-gray">
                <div className="w-4 h-4 rounded-full bg-dongfeng-red/20 text-dongfeng-red flex items-center justify-center">
                  <Check size={10} />
                </div>
                <span>
                  {t(
                    'Full commercial warranty and certified after-sales service backing.',
                    'ضمان تجاري معتمد مع توافر كامل لقطع الغيار ومراكز الخدمة المعتمدة.'
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Direct Conversion Actions */}
          <div className="lg:col-span-5 p-5 rounded-xl bg-[#0E1013] border border-white/5 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2 text-center lg:text-start">
              {t('TAKE IMMEDIATE ACTION', 'اتخاذ إجراء فوري')}
            </div>

            <button
              onClick={() => {
                alert(t('Simulating Test Drive Booking for: ', 'محاكاة حجز تجربة قيادة لموديل: ') + currentMatch.model);
              }}
              className="w-full py-3 px-4 rounded-xl bg-dongfeng-red hover:bg-dongfeng-red-dark text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-md shadow-dongfeng-red/20"
            >
              <Calendar size={15} />
              <span>{t('BOOK A TEST DRIVE', 'احجز تجربة قيادة')}</span>
            </button>

            <button
              onClick={() => {
                alert(t('Connecting with Commercial Fleet Sales...', 'جاري التحويل لمستشار مبيعات الأساطيل...'));
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#14171C] hover:bg-white/10 text-white border border-[#222730] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5"
            >
              <PhoneCall size={15} className="text-dongfeng-silver" />
              <span>{t('TALK TO SALES', 'تحدث مع المبيعات')}</span>
            </button>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#1FA363]/20 hover:bg-[#1FA363]/30 text-[#25D366] border border-[#25D366]/30 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5"
            >
              <MessageCircle size={15} />
              <span>{t('WHATSAPP US', 'تواصل معنا عبر WhatsApp')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
