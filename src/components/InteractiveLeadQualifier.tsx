import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRESENTATION_CONTENT } from '../data/presentationData';
import { CheckCircle2, Sparkles, RefreshCw, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export const InteractiveLeadQualifier: React.FC = () => {
  const { isRTL, t } = useLanguage();
  const { leadForm } = PRESENTATION_CONTENT;

  const [formState, setFormState] = useState({
    businessType: 'Distribution & Logistics',
    governorate: 'Cairo & Giza',
    cargo: 'FMCG & Packaged Goods',
    load: '2.5 - 3.5 Tons',
    route: 'Inter-City & Regional',
    currentFleet: 'Owns 3 Light Trucks',
    vehicleCount: '2 - 4 Vehicles',
    financing: 'Corporate Fleet Financing'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[#0E1013] border border-[#222730] p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-dongfeng-red/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-dongfeng-red tracking-widest uppercase mb-1">
            <Sparkles size={14} />
            <span>{t('INTERACTIVE SIMULATOR', 'محاكي تأهيل العملاء التفاعلي')}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white">
            {t(leadForm.headlineEn, leadForm.headlineAr)}
          </h3>
        </div>
        <div className="badge-tag self-start md:self-auto text-[11px]">
          {t('8 QUALIFICATION CRITERIA', '8 معايير لتأهيل العميل')}
        </div>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* 01: Business Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-dongfeng-silver uppercase tracking-wider">
                01 • {t('WHAT IS YOUR BUSINESS?', 'نوع شغلك إيه؟')}
              </label>
              <select
                value={formState.businessType}
                onChange={(e) => setFormState({ ...formState, businessType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#14171C] border border-[#222730] text-sm text-white focus:border-dongfeng-red focus:outline-none transition-colors"
              >
                <option value="Distribution & Logistics">{t('Distribution & Logistics', 'توزيع ولوجستيات')}</option>
                <option value="Wholesale Merchant">{t('Wholesale Merchant', 'تاجر جملة')}</option>
                <option value="Retail Store & Chain">{t('Retail Store & Chain', 'سلسلة محلات وتجزئة')}</option>
                <option value="Factory & Industrial">{t('Factory & Industrial', 'مصنع ومنشأة صناعية')}</option>
                <option value="Restaurant & Food Supply">{t('Restaurant & Food Supply', 'مطعم وتوريدات غذائية')}</option>
                <option value="E-Commerce & Delivery">{t('E-Commerce & Delivery', 'تجارة إلكترونية ودليفري')}</option>
                <option value="Contracting & Workshop">{t('Contracting & Workshop', 'مقاولات وورش تشغيل')}</option>
              </select>
            </div>

            {/* 02: Governorate */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-dongfeng-silver uppercase tracking-wider">
                02 • {t('WHICH GOVERNORATE?', 'المحافظة؟')}
              </label>
              <select
                value={formState.governorate}
                onChange={(e) => setFormState({ ...formState, governorate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#14171C] border border-[#222730] text-sm text-white focus:border-dongfeng-red focus:outline-none transition-colors"
              >
                <option value="Cairo & Giza">{t('Greater Cairo & Giza', 'القاهرة الكبرى والجيزة')}</option>
                <option value="Alexandria & North Coast">{t('Alexandria & North Coast', 'الإسكندرية والساحل الشمالي')}</option>
                <option value="Delta Region">{t('Delta Region (Tanta, Mansoura, Zagazig)', 'محافظات الدلتا (طنطا، المنصورة، الزقازيق)')}</option>
                <option value="Canal & Suez">{t('Canal Cities (Port Said, Ismailia, Suez)', 'مدن القناة (بورسعيد، الإسماعيلية، السويس)')}</option>
                <option value="Upper Egypt">{t('Upper Egypt (Beni Suef to Aswan)', 'صعيد مصر (من بني سويف إلى أسوان)')}</option>
              </select>
            </div>

            {/* 03: Transport Cargo */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-dongfeng-silver uppercase tracking-wider">
                03 • {t('WHAT DO YOU TRANSPORT?', 'بتنقل إيه؟')}
              </label>
              <input
                type="text"
                value={formState.cargo}
                onChange={(e) => setFormState({ ...formState, cargo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#14171C] border border-[#222730] text-sm text-white focus:border-dongfeng-red focus:outline-none transition-colors"
              />
            </div>

            {/* 04: Average Load */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-dongfeng-silver uppercase tracking-wider">
                04 • {t('AVERAGE LOAD?', 'متوسط الحمولة؟')}
              </label>
              <select
                value={formState.load}
                onChange={(e) => setFormState({ ...formState, load: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#14171C] border border-[#222730] text-sm text-white focus:border-dongfeng-red focus:outline-none transition-colors"
              >
                <option value="Under 1.5 Tons">{t('Under 1.5 Tons (Van / Light Cargo)', 'أقل من 1.5 طن (فان / حمولة خفيفة)')}</option>
                <option value="1.5 - 2.5 Tons">{t('1.5 - 2.5 Tons (Pickup / Medium Van)', '1.5 - 2.5 طن (بيك أب / فان متوسط)')}</option>
                <option value="2.5 - 3.5 Tons">{t('2.5 - 3.5 Tons (Commercial Truck)', '2.5 - 3.5 طن (شاحنة تجارية)')}</option>
                <option value="4+ Tons Heavy">{t('4+ Tons (Heavy Commercial)', '4+ طن (شاحنة ثقيلة)')}</option>
              </select>
            </div>

            {/* 05: Route Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-dongfeng-silver uppercase tracking-wider">
                05 • {t('CITY OR LONG DISTANCE?', 'داخل المدينة ولا سفر؟')}
              </label>
              <select
                value={formState.route}
                onChange={(e) => setFormState({ ...formState, route: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#14171C] border border-[#222730] text-sm text-white focus:border-dongfeng-red focus:outline-none transition-colors"
              >
                <option value="Intra-City Dense Routes">{t('Intra-City (Stop & Go / High Density)', 'داخل المدينة (توقف وتشغيل متكرر)')}</option>
                <option value="Inter-City & Regional">{t('Inter-City (Highway / Regional Trips)', 'بين المحافظات (طرق سريعة وسفر)')}</option>
                <option value="Mixed Daily Routes">{t('Mixed (Urban Delivery + Highway Depot)', 'مختلط (توزيع حضري + نقل مستودعات)')}</option>
              </select>
            </div>

            {/* 06: Current Fleet Ownership */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-dongfeng-silver uppercase tracking-wider">
                06 • {t('CURRENT VEHICLE OWNERSHIP?', 'عندك عربية حاليًا؟')}
              </label>
              <select
                value={formState.currentFleet}
                onChange={(e) => setFormState({ ...formState, currentFleet: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#14171C] border border-[#222730] text-sm text-white focus:border-dongfeng-red focus:outline-none transition-colors"
              >
                <option value="First Commercial Purchase">{t('First Commercial Purchase (New Business)', 'أول شراء تجاري (مشروع جديد)')}</option>
                <option value="Owns 1 Existing Vehicle">{t('Owns 1 Vehicle (Upgrading / Replacing)', 'أملك عربية واحدة (تحديث أو استبدال)')}</option>
                <option value="Owns 3+ Light Trucks">{t('Owns 3+ Fleet Vehicles (Expanding)', 'أملك 3+ عربيات في الأسطول (توسعة)')}</option>
              </select>
            </div>

            {/* 07: Vehicles Needed */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-dongfeng-silver uppercase tracking-wider">
                07 • {t('HOW MANY VEHICLES NEEDED?', 'محتاج كام عربية؟')}
              </label>
              <select
                value={formState.vehicleCount}
                onChange={(e) => setFormState({ ...formState, vehicleCount: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#14171C] border border-[#222730] text-sm text-white focus:border-dongfeng-red focus:outline-none transition-colors"
              >
                <option value="1 Vehicle">{t('1 Single Vehicle', 'عربية واحدة')}</option>
                <option value="2 - 4 Vehicles">{t('2 - 4 Vehicles (SME Fleet)', '2 - 4 عربيات (أسطول مصغر)')}</option>
                <option value="5 - 10 Vehicles">{t('5 - 10 Vehicles (Commercial Fleet)', '5 - 10 عربيات (أسطول تجاري)')}</option>
                <option value="10+ Enterprise Fleet">{t('10+ Vehicles (Enterprise Fleet)', '10+ عربيات (أسطول مؤسسي)')}</option>
              </select>
            </div>

            {/* 08: Cash vs Financing */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-dongfeng-silver uppercase tracking-wider">
                08 • {t('CASH OR FINANCING?', 'شراء Cash ولا Financing؟')}
              </label>
              <select
                value={formState.financing}
                onChange={(e) => setFormState({ ...formState, financing: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#14171C] border border-[#222730] text-sm text-white focus:border-dongfeng-red focus:outline-none transition-colors"
              >
                <option value="Direct Cash Purchase">{t('Direct Cash Purchase', 'شراء نقدي مباشر (كاش)')}</option>
                <option value="Commercial Installment Plan">{t('Commercial Installment Plan', 'تقسيط تجاري ميسر')}</option>
                <option value="Corporate Fleet Financing">{t('Corporate Fleet Financing & Leasing', 'تمويل وتأجير تمويلي لأساطيل الشركات')}</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <div className="text-xs text-dongfeng-gray hidden sm:flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-dongfeng-red" />
              <span>{t('Instant Commercial Diagnostic Engine', 'محرك التشخيص التجاري المباشر')}</span>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-dongfeng-red hover:bg-dongfeng-red-dark text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-dongfeng-red/30 flex items-center justify-center gap-2"
            >
              <span>{t('SIMULATE QUALIFIED LEAD DISPATCH', 'محاكاة إرسال العميل المؤهل')}</span>
              {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </button>
          </div>
        </form>
      ) : (
        <div className="p-6 md:p-8 rounded-2xl bg-[#14171C] border border-dongfeng-red/40 animate-fade-in space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dongfeng-red/20 text-dongfeng-red flex items-center justify-center font-bold">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-white">
                  {t('LEAD SUCCESSFULLY QUALIFIED — HIGH INTENT', 'تم تأهيل العميل بنجاح — جاهزية شراء عالية')}
                </h4>
                <p className="text-xs text-dongfeng-gray">
                  {t('Lead Quality Score: 96/100 • Ready for Direct Sales Dispatch', 'درجة جودة العميل: 96/100 • مؤهل للتوجيه المباشر لمستشار المبيعات')}
                </p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-dongfeng-silver flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw size={14} />
              <span>{t('Reset Test', 'إعادة الاختبار')}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-black/40 border border-white/5">
              <div className="text-dongfeng-gray text-[10px] uppercase font-bold">{t('Business', 'النشاط')}</div>
              <div className="font-semibold text-white mt-1">{formState.businessType}</div>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5">
              <div className="text-dongfeng-gray text-[10px] uppercase font-bold">{t('Payload Range', 'الحمولة')}</div>
              <div className="font-semibold text-white mt-1">{formState.load}</div>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5">
              <div className="text-dongfeng-gray text-[10px] uppercase font-bold">{t('Units Needed', 'عدد المركبات')}</div>
              <div className="font-semibold text-white mt-1">{formState.vehicleCount}</div>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5">
              <div className="text-dongfeng-gray text-[10px] uppercase font-bold">{t('Financing Match', 'خيار التمويل')}</div>
              <div className="font-semibold text-white mt-1">{formState.financing}</div>
            </div>
          </div>

          {/* Diagnostic Routing Match */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-dongfeng-red/15 to-transparent border border-dongfeng-red/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold text-dongfeng-red uppercase tracking-wider">
                {t('RECOMMENDED VEHICLE SOLUTION', 'الحل التجاري الموصى به')}
              </div>
              <div className="text-lg font-black text-white mt-0.5">
                CAPTAIN C & CAPTAIN E COMMERCIAL FLEET
              </div>
              <div className="text-xs text-dongfeng-silver mt-1">
                {t(
                  'Assigned to: Senior Fleet Solutions Key Account Manager for immediate on-site test drive.',
                  'تم التوجيه إلى: مدير حسابات كبار عملاء الأساطيل لتنسيق تجربة قيادة ميدانية فورية.'
                )}
              </div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-dongfeng-red text-white text-xs font-bold text-center whitespace-nowrap">
              {t('LEAD AUTO-ROUTED', 'تم تحويل العميل تلقائياً')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
