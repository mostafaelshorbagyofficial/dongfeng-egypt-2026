export type Language = 'en' | 'ar';

export interface Chapter {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  badgeEn?: string;
  badgeAr?: string;
  layoutVariant: 
    | 'hero'
    | 'opportunity'
    | 'problem-contrast'
    | 'positioning'
    | 'ecosystem'
    | 'language-shift'
    | 'audience-grid'
    | 'product-mapping'
    | 'content-pillars'
    | 'signature-series'
    | 'social-mix'
    | 'hero-film'
    | 'funnel'
    | 'lead-form'
    | 'interactive-finder'
    | 'offline-tour'
    | 'mobile-showroom'
    | 'captain-day'
    | 'fleet-solutions'
    | 'competitive-landscape'
    | 'influencer-strategy'
    | 'paid-media'
    | 'roadmap-90'
    | 'kpi-dashboard'
    | 'big-difference'
    | 'final-thought';
}

export interface BusinessVehicleMatch {
  id: string;
  businessTypeEn: string;
  businessTypeAr: string;
  icon: string;
  recommendedModel: string;
  categoryEn: string;
  categoryAr: string;
  applicationEn: string;
  applicationAr: string;
  taglineEn: string;
  taglineAr: string;
  keySpecsEn: string[];
  keySpecsAr: string[];
  ctaEn: string;
  ctaAr: string;
}
