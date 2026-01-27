import type { LandingSectionKey, LandingVariant, LandingVariantConfig } from '../types';

export const LANDING_SECTIONS: { key: LandingSectionKey; label: string }[] = [
  { key: 'aboveTheFold', label: 'Above the Fold' },
  { key: 'humaniser', label: 'Humaniser' },
  { key: 'valueStack', label: 'Value Stack' },
  { key: 'socialProof', label: 'Social Proof' },
  { key: 'grandSlamOffer', label: 'Grand Slam Offer' },
  { key: 'leadMagnet', label: 'Lead Magnet' },
  { key: 'faq', label: 'FAQ' },
  { key: 'leadForm', label: 'Lead Form' },
];

export const DEFAULT_LANDING_VARIANTS: LandingVariantConfig = {
  aboveTheFold: 'A',
  humaniser: 'A',
  valueStack: 'A',
  socialProof: 'A',
  grandSlamOffer: 'A',
  leadMagnet: 'A',
  faq: 'A',
  leadForm: 'A',
};

export const LANDING_VARIANT_OPTIONS: LandingVariant[] = ['A', 'B', 'C'];
