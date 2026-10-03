import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRESENTATION_CONTENT } from '../data/presentationData';
import { VideoPlayer916 } from './VideoPlayer916';
import { InteractiveLeadQualifier } from './InteractiveLeadQualifier';
import { InteractiveBusinessFinder } from './InteractiveBusinessFinder';
import { InteractiveSocialMix } from './InteractiveMediaMix';
import { InteractiveFunnel } from './InteractiveFunnel';
import { InteractiveRoadmap } from './InteractiveRoadmap';
import { MostafaFouadSpotlight } from './MostafaFouadSpotlight';
import {
  Truck,
  Package,
  Store,
  Factory,
  ShoppingBag,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Zap,
  MapPin
} from 'lucide-react';

interface ChapterSectionProps {
  id: string;
}

export const ChapterSection: React.FC<ChapterSectionProps> = ({ id }) => {
  const { language, isRTL, t } = useLanguage();
  const c = PRESENTATION_CONTENT;

  // Chapter 01 — THE OPPORTUNITY
  if (id === 'chapter-01') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.opportunity.badge, c.opportunity.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.opportunity.title, c.opportunity.titleAr)}
            </h2>
            <p className="text-base sm:text-xl text-dongfeng-silver mt-4 font-medium leading-relaxed">
              {t(c.opportunity.intro, c.opportunity.introAr)}
            </p>
          </div>

          {/* Portfolio 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {c.opportunity.categories.map((cat, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#0E1013] border border-[#222730] hover:border-dongfeng-red/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#14171C] border border-white/10 text-dongfeng-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {i === 0 ? <Truck size={24} /> : i === 1 ? <Package size={24} /> : <Zap size={24} />}
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-2">
                  {language === 'ar' ? cat.nameAr : cat.name}
                </h3>
                <p className="text-sm text-dongfeng-gray">
                  {language === 'ar' ? cat.descAr : cat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Models Lineup Strip */}
          <div className="p-6 rounded-2xl bg-[#14171C] border border-[#222730] mb-16 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono font-bold text-dongfeng-gray uppercase tracking-wider">
              {t('OFFICIAL COMMERCIAL LINEUP', 'تشكيلة الموديلات التجارية الرسمية')}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {c.opportunity.models.map((model, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-lg bg-[#08090A] border border-white/10 text-xs md:text-sm font-black text-white"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>

          {/* Massive Strategic Shift Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A0506] via-[#14171C] to-[#0E1013] border border-dongfeng-red/40 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="badge-tag">{t(c.opportunity.coreMessageLead, c.opportunity.coreMessageLeadAr)}</span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-2xl sm:text-4xl font-black text-white">
                <span className="text-dongfeng-gray line-through decoration-dongfeng-red">
                  {t(c.opportunity.shiftFrom, c.opportunity.shiftFromAr)}
                </span>
                <span className="text-dongfeng-red">→</span>
                <span className="text-white">
                  {t(c.opportunity.shiftTo, c.opportunity.shiftToAr)}
                </span>
              </div>
              <div className="pt-2">
                <span className="text-xl sm:text-2xl font-mono font-black text-dongfeng-red tracking-widest uppercase">
                  {t(c.opportunity.punchline, c.opportunity.punchlineAr)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Chapter 02 — THE REAL PROBLEM
  if (id === 'chapter-02') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.problem.badge, c.problem.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.problem.title, c.problem.titleAr)}
            </h2>
          </div>

          {/* Split Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            {/* Left: Market Language (Redundant Tech Specs) */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0E1013] border border-white/5 space-y-6">
              <div className="text-xs font-mono font-bold text-dongfeng-gray uppercase tracking-wider">
                {t('THE COMMODITY TRAP', 'فخ الخطاب التقليدي')}
              </div>
              <h3 className="text-xl font-bold text-white">
                {t(c.problem.marketSpeaks, c.problem.marketSpeaksAr)}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {c.problem.marketTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-[#14171C] border border-white/10 text-xs font-bold text-dongfeng-gray"
                  >
                    {language === 'ar' ? tag.ar : tag.en}
                  </span>
                ))}
              </div>
              <p className="text-xs text-dongfeng-gray leading-relaxed pt-4 border-t border-white/5">
                {t(
                  'Specs without business context create price wars and zero brand loyalty.',
                  'التركيز على المواصفات المجردة يحول الشاحنة إلى سلعة تقليدية تدخل في حرب أسعار.'
                )}
              </p>
            </div>

            {/* Middle Transform Arrow */}
            <div className="lg:col-span-2 flex items-center justify-center py-4 lg:py-0">
              <div className="w-14 h-14 rounded-full bg-dongfeng-red text-white flex items-center justify-center font-black text-xl shadow-xl shadow-dongfeng-red/30">
                {isRTL ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
              </div>
            </div>

            {/* Right: Customer Reality (Real Business Questions) */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#14171C] border border-dongfeng-red/40 space-y-4">
              <div className="text-xs font-mono font-bold text-dongfeng-red uppercase tracking-wider">
                {t('CUSTOMER REALITY', 'واقع واحتياج العميل')}
              </div>
              <h3 className="text-xl font-bold text-white">
                {t(c.problem.customerThinks, c.problem.customerThinksAr)}
              </h3>
              <div className="space-y-2.5">
                {c.problem.customerQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0E1013] border border-white/5 text-xs sm:text-sm font-semibold text-white flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-dongfeng-red shrink-0" />
                    <span>"{language === 'ar' ? q.ar : q.en}"</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Conclusion Banner */}
          <div className="p-6 rounded-2xl bg-[#14171C] border border-white/10 text-center">
            <span className="text-xs font-mono text-dongfeng-gray uppercase tracking-widest">
              {t('STRATEGIC DIRECTION', 'الاتجاه الاستراتيجي')}
            </span>
            <div className="text-lg sm:text-2xl font-black text-white mt-1">
              {t(c.problem.transition.from, c.problem.transition.fromAr)}{' '}
              <span className="text-dongfeng-red">↓↓</span>{' '}
              {t(c.problem.transition.to, c.problem.transition.toAr)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Chapter 03 — OUR POSITIONING
  if (id === 'chapter-03') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dongfeng-red/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="badge-tag">{t(c.positioning.badge, c.positioning.badgeAr)}</span>
            <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              {t(c.positioning.heroText, c.positioning.heroTextAr)}
              <br />
              <span className="text-gradient-red">
                {t(c.positioning.subText, c.positioning.subTextAr)}
              </span>
            </h2>
            <div className="pt-2">
              <span className="text-xl sm:text-2xl font-mono font-bold text-dongfeng-silver tracking-widest uppercase">
                {t(c.positioning.tagline, c.positioning.taglineAr)}
              </span>
            </div>
          </div>

          {/* Four Strategic Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.positioning.fourPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0E1013] border border-[#222730] hover:border-dongfeng-red transition-all duration-300 text-start group"
              >
                <div className="text-xs font-mono font-bold text-dongfeng-red mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-black text-white uppercase group-hover:text-dongfeng-red transition-colors">
                  {language === 'ar' ? pillar.ar : pillar.en}
                </h3>
                <p className="text-xs sm:text-sm text-dongfeng-gray mt-3 leading-relaxed">
                  {language === 'ar' ? pillar.descAr : pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 04 — THE BIG IDEA
  if (id === 'chapter-04') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.bigIdea.badge, c.bigIdea.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.bigIdea.headline, c.bigIdea.headlineAr)}
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-dongfeng-red mt-3">
              {t(c.bigIdea.subHeadline, c.bigIdea.subHeadlineAr)}
            </p>
          </div>

          {/* Commercial Ecosystem Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {c.bigIdea.businesses.map((biz, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1013] border border-[#222730] hover:border-white/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#14171C] text-dongfeng-red flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {biz.icon === 'Utensils' && <Store size={20} />}
                  {biz.icon === 'Boxes' && <Package size={20} />}
                  {biz.icon === 'Truck' && <Truck size={20} />}
                  {biz.icon === 'Factory' && <Factory size={20} />}
                  {biz.icon === 'ShoppingBag' && <ShoppingBag size={20} />}
                  {biz.icon === 'Store' && <Store size={20} />}
                  {biz.icon === 'Briefcase' && <Briefcase size={20} />}
                </div>
                <div className="text-base font-black text-white uppercase">
                  {language === 'ar' ? biz.ar : biz.en}
                </div>
                <div className="text-[11px] text-dongfeng-gray mt-1">
                  {t('Commercial Mobility Partner', 'شريك الحركة والنقل')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 05 — BRAND COMMUNICATION
  if (id === 'chapter-05') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.communication.badge, c.communication.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.communication.headline, c.communication.headlineAr)}
            </h2>
          </div>

          {/* Comparison Cards */}
          <div className="space-y-6 mb-12">
            {c.communication.comparisons.map((comp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#0E1013] border border-[#222730] grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-3">
                  <span className="px-3 py-1 rounded-md bg-dongfeng-red/15 text-dongfeng-red text-xs font-mono font-bold">
                    {comp.model}
                  </span>
                  <div className="text-xs text-dongfeng-gray mt-2 line-through">
                    {language === 'ar' ? comp.oldSpecAr : comp.oldSpec}
                  </div>
                </div>

                <div className="md:col-span-9 p-5 rounded-2xl bg-[#14171C] border border-white/5">
                  <div className="text-[10px] font-mono font-bold text-dongfeng-red uppercase tracking-wider mb-1">
                    {t('STRATEGIC VOICE', 'الرسالة الاستراتيجية')}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white">
                    "{language === 'ar' ? comp.newVoiceAr : comp.newVoice}"
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final Takeaway */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#14171C] to-[#0E1013] border border-dongfeng-red/30 text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wider">
              {t(c.communication.takeaway, c.communication.takeawayAr)}
            </h3>
            <p className="text-xs sm:text-sm text-dongfeng-gray">
              {t(c.communication.takeawaySub, c.communication.takeawayAr)}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Chapter 06 — TARGET AUDIENCE
  if (id === 'chapter-06') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <span className="badge-tag mb-3">{t(c.audience.badge, c.audience.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.audience.title, c.audience.titleAr)}
            </h2>
          </div>

          {/* Core Strategic Callout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-dongfeng-red/10 border border-dongfeng-red/30 mb-12">
            <p className="text-base sm:text-xl font-bold text-white leading-relaxed">
              "{t(c.audience.coreStatement, c.audience.coreStatementAr)}"
            </p>
          </div>

          {/* 7 Segments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.audience.segments.map((seg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1013] border border-[#222730] hover:border-white/20 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-dongfeng-red mb-2">
                  {seg.num}
                </div>
                <h3 className="text-lg font-black text-white uppercase">
                  {language === 'ar' ? seg.ar : seg.en}
                </h3>
                <p className="text-xs text-dongfeng-gray mt-2 leading-relaxed">
                  {language === 'ar' ? seg.descAr : seg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 07 — PRODUCT TO BUSINESS MAPPING
  if (id === 'chapter-07') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.productMapping.badge, c.productMapping.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.productMapping.headline, c.productMapping.headlineAr)}
            </h2>
            <p className="text-sm sm:text-base font-bold text-dongfeng-red mt-2">
              {t(c.productMapping.subHeadline, c.productMapping.subHeadlineAr)}
            </p>
          </div>

          {/* 4 Quadrants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.productMapping.mappings.map((map, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0E1013] border border-[#222730] space-y-4 hover:border-dongfeng-red/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-white tracking-wide">
                    {map.model}
                  </h3>
                  <span className="badge-tag text-[10px]">
                    {language === 'ar' ? map.tagAr : map.tag}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {(language === 'ar' ? map.sectorsAr : map.sectorsEn).map((sec, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#14171C] border border-white/10 text-xs font-semibold text-white"
                    >
                      {sec}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-dongfeng-silver pt-2 leading-relaxed">
                  {language === 'ar' ? map.summaryAr : map.summaryEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 08 — CONTENT SYSTEM
  if (id === 'chapter-08') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.contentSystem.badge, c.contentSystem.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.contentSystem.title, c.contentSystem.titleAr)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.contentSystem.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0E1013] border border-[#222730] flex flex-col justify-between space-y-4 hover:border-dongfeng-red/50 transition-all"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-dongfeng-red mb-3">
                    PILLAR {pillar.num}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase">
                    {language === 'ar' ? pillar.titleAr : pillar.titleEn}
                  </h3>
                  <div className="text-xs font-bold text-dongfeng-silver mt-2 italic">
                    "{language === 'ar' ? pillar.taglineAr : pillar.taglineEn}"
                  </div>
                </div>
                <p className="text-xs text-dongfeng-gray leading-relaxed pt-3 border-t border-white/5">
                  {language === 'ar' ? pillar.descAr : pillar.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 09 — SIGNATURE SERIES
  if (id === 'chapter-09') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.signatureSeries.badge, c.signatureSeries.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.signatureSeries.title, c.signatureSeries.titleAr)}
            </h2>
            <p className="text-sm sm:text-base text-dongfeng-silver mt-3">
              {t(c.signatureSeries.introEn, c.signatureSeries.introAr)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.signatureSeries.series.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1013] border border-[#222730] space-y-3 hover:border-dongfeng-red/40 transition-all"
              >
                <div className="text-xs font-mono font-bold text-dongfeng-red">
                  SERIES {item.num}
                </div>
                <h3 className="text-base font-black text-white">
                  {language === 'ar' ? item.ar : item.en}
                </h3>
                <div className="text-[11px] text-dongfeng-gray pt-2 border-t border-white/5">
                  {language === 'ar' ? item.formatAr : item.formatEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 10 — SOCIAL MEDIA MIX
  if (id === 'chapter-10') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <InteractiveSocialMix />
        </div>
      </section>
    );
  }

  // Chapter 11 — THE HERO FILM
  if (id === 'chapter-11') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge-tag mb-3">{t(c.heroFilm.badge, c.heroFilm.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.heroFilm.title, c.heroFilm.titleAr)}
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-dongfeng-red mt-2">
              "{t(c.heroFilm.conceptTitleEn, c.heroFilm.conceptTitleAr)}"
            </p>
          </div>

          {/* Centered 9:16 Video Player */}
          <div className="my-12">
            <VideoPlayer916
              src="/assets/video/dongfeng-hero.mp4"
            />
          </div>

          {/* Storyboard Flow */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center text-xs font-mono text-dongfeng-gray uppercase tracking-widest mb-6">
              {t('HERO FILM NARRATIVE ARC', 'المسار الدرامي للفيلم')}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {c.heroFilm.storyboard.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0E1013] border border-white/5 text-xs text-dongfeng-silver"
                >
                  <span className="font-mono text-dongfeng-red font-bold mr-2 rtl:mr-0 rtl:ml-2">
                    {step.step}.
                  </span>
                  <span>{language === 'ar' ? step.ar : step.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Chapter 12 — LEAD GENERATION
  if (id === 'chapter-12') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <InteractiveFunnel />
        </div>
      </section>
    );
  }

  // Chapter 13 — SMART LEAD FORM
  if (id === 'chapter-13') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          <InteractiveLeadQualifier />
        </div>
      </section>
    );
  }

  // Chapter 14 — WEBSITE EXPERIENCE
  if (id === 'chapter-14') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <InteractiveBusinessFinder />
        </div>
      </section>
    );
  }

  // Chapter 15 — OFFLINE STRATEGY
  if (id === 'chapter-15') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.offlineStrategy.badge, c.offlineStrategy.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.offlineStrategy.headlineEn, c.offlineStrategy.headlineAr)}
            </h2>
            <p className="text-lg sm:text-xl font-bold text-dongfeng-red mt-2">
              {t(c.offlineStrategy.introEn, c.offlineStrategy.introAr)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.offlineStrategy.hubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0E1013] border border-[#222730] space-y-3 hover:border-dongfeng-red/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#14171C] text-dongfeng-red flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-black text-white uppercase">
                  {language === 'ar' ? hub.ar : hub.en}
                </h3>
                <p className="text-xs sm:text-sm text-dongfeng-gray leading-relaxed">
                  {language === 'ar' ? hub.descAr : hub.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 16 — MOBILE SHOWROOM
  if (id === 'chapter-16') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.mobileShowroom.badge, c.mobileShowroom.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.mobileShowroom.headlineEn, c.mobileShowroom.headlineAr)}
            </h2>
            <div className="text-xl font-mono font-bold text-dongfeng-silver mt-2">
              {t(c.mobileShowroom.programNameEn, c.mobileShowroom.programNameAr)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {c.mobileShowroom.formula.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0E1013] border border-[#222730] space-y-3 text-center"
              >
                <div className="text-xs font-mono font-bold text-dongfeng-red">0{idx + 1}</div>
                <h3 className="text-2xl font-black text-white uppercase">
                  {language === 'ar' ? item.ar : item.en}
                </h3>
                <p className="text-xs text-dongfeng-gray">
                  {language === 'ar' ? item.descAr : item.descEn}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#14171C] border border-white/10 flex flex-wrap items-center justify-center gap-4">
            {c.mobileShowroom.experiencePoints.map((pt, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-[#08090A] border border-white/10 text-xs font-bold text-white uppercase"
              >
                ✓ {language === 'ar' ? pt.ar : pt.en}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 17 — CAPTAIN DAY
  if (id === 'chapter-17') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.captainDay.badge, c.captainDay.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.captainDay.title, c.captainDay.titleAr)}
            </h2>
            <p className="text-sm sm:text-base text-dongfeng-silver mt-2">
              {t(c.captainDay.headlineEn, c.captainDay.headlineAr)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {c.captainDay.sectors.map((sec, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0E1013] border border-[#222730] space-y-3"
              >
                <div className="text-xs font-mono font-bold text-dongfeng-red">
                  SECTOR 0{idx + 1}
                </div>
                <h3 className="text-lg font-black text-white uppercase">
                  {language === 'ar' ? sec.ar : sec.en}
                </h3>
                <p className="text-xs text-dongfeng-gray">
                  {language === 'ar' ? sec.descAr : sec.descEn}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#14171C] border border-white/10 flex flex-wrap items-center justify-center gap-3">
            {c.captainDay.components.map((comp, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs font-bold text-dongfeng-silver"
              >
                • {language === 'ar' ? comp.ar : comp.en}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 18 — FLEET SOLUTIONS
  if (id === 'chapter-18') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.fleetSolutions.badge, c.fleetSolutions.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.fleetSolutions.headlineEn, c.fleetSolutions.headlineAr)}
            </h2>
            <p className="text-lg sm:text-xl font-bold text-dongfeng-red mt-2">
              {t(c.fleetSolutions.punchlineEn, c.fleetSolutions.punchlineAr)}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {c.fleetSolutions.tiers.map((tItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1013] border border-[#222730] text-center space-y-2"
              >
                <div className="text-2xl font-black font-mono text-white">
                  {language === 'ar' ? tItem.tierAr : tItem.tier}
                </div>
                <p className="text-xs text-dongfeng-gray">
                  {language === 'ar' ? tItem.descAr : tItem.descEn}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {c.fleetSolutions.offerings.map((off, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#14171C] border border-white/5 text-center text-xs font-bold text-white"
              >
                <CheckCircle2 size={16} className="text-dongfeng-red mx-auto mb-2" />
                <span>{language === 'ar' ? off.ar : off.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 19 — COMPETITIVE LANDSCAPE
  if (id === 'chapter-19') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.competition.badge, c.competition.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.competition.title, c.competition.titleAr)}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {c.competition.competitors.map((comp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1013] border border-[#222730] space-y-3"
              >
                <div className="text-xs font-mono font-bold text-dongfeng-gray">
                  BENCHMARK 0{idx + 1}
                </div>
                <h3 className="text-lg font-black text-white">
                  {comp.name}
                </h3>
                <p className="text-xs text-dongfeng-gray">
                  {language === 'ar' ? comp.categoryAr : comp.categoryEn}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-dongfeng-red/15 via-[#14171C] to-[#0E1013] border border-dongfeng-red/30 space-y-3">
            <div className="text-xs font-mono font-bold text-dongfeng-red uppercase">
              {t('STRATEGIC DIFFERENTIATOR', 'عنصر التميز الاستراتيجي')}
            </div>
            <p className="text-base sm:text-xl font-bold text-white leading-relaxed">
              "{t(c.competition.strategicTakeawayEn, c.competition.strategicTakeawayAr)}"
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Chapter 20 — INFLUENCER STRATEGY
  if (id === 'chapter-20') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.influencers.badge, c.influencers.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.influencers.title, c.influencers.titleAr)}
            </h2>
            <p className="text-lg sm:text-xl font-bold text-dongfeng-red mt-2">
              "{t(c.influencers.punchlineEn, c.influencers.punchlineAr)}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.influencers.categories.map((inf, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0E1013] border border-[#222730] space-y-3 hover:border-dongfeng-red/40 transition-all"
              >
                <div className="text-xs font-mono font-bold text-dongfeng-red">
                  CATEGORY 0{idx + 1}
                </div>
                <h3 className="text-xl font-black text-white uppercase">
                  {language === 'ar' ? inf.categoryAr : inf.categoryEn}
                </h3>
                <div className="text-xs font-bold text-dongfeng-silver">
                  {language === 'ar' ? inf.focusAr : inf.focusEn}
                </div>
                <p className="text-xs text-dongfeng-gray pt-2 border-t border-white/5">
                  {language === 'ar' ? inf.descAr : inf.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chapter 21 — PAID MEDIA
  if (id === 'chapter-21') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          <InteractiveFunnel />
        </div>
      </section>
    );
  }

  // Chapter 22 — 90 DAYS ROADMAP
  if (id === 'chapter-22') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <InteractiveRoadmap />
        </div>
      </section>
    );
  }

  // Chapter 23 — KPI DASHBOARD
  if (id === 'chapter-23') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.kpiDashboard.badge, c.kpiDashboard.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.kpiDashboard.title, c.kpiDashboard.titleAr)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {c.kpiDashboard.categories.map((kpiCat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0E1013] border border-[#222730] space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-xl font-black text-white uppercase">
                    {language === 'ar' ? kpiCat.categoryAr : kpiCat.categoryEn}
                  </h3>
                  <span className="badge-dark text-[10px]">
                    0{idx + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {(language === 'ar' ? kpiCat.metricsAr : kpiCat.metricsEn).map((metric, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-[#14171C] border border-white/10 text-xs font-bold text-dongfeng-silver"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Context & Leadership Spotlight */}
          <div className="pt-8">
            <MostafaFouadSpotlight />
          </div>
        </div>
      </section>
    );
  }

  // Chapter 24 — THE BIG DIFFERENCE
  if (id === 'chapter-24') {
    return (
      <section id={id} className="py-24 border-b border-white/10 relative bg-[#0A0C0E]">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="badge-tag mb-3">{t(c.bigDifference.badge, c.bigDifference.badgeAr)}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t(c.bigDifference.title, c.bigDifference.titleAr)}
            </h2>
          </div>

          <div className="space-y-6">
            {c.bigDifference.contrasts.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0E1013] border border-[#222730] grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-5 text-dongfeng-gray text-base sm:text-lg font-semibold line-through decoration-dongfeng-red">
                  {language === 'ar' ? item.marketAr : item.marketEn}
                </div>
                <div className="md:col-span-2 flex justify-center text-dongfeng-red font-bold text-2xl">
                  {isRTL ? '←' : '→'}
                </div>
                <div className="md:col-span-5 text-xl sm:text-2xl font-black text-white">
                  {language === 'ar' ? item.weSayAr : item.weSayEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
};
