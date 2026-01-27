// TypeScript interfaces for Malitix landing page

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export type HeroVariant = 'animated' | 'clean';
export type ServicesVariant = 'bento' | 'reference';
export type NavbarVariant = 'default' | 'centered' | 'minimal';
export type ThemeMode = 'dark' | 'light';

export type LandingVariant = 'A' | 'B' | 'C';
export type LandingSectionKey =
  | 'aboveTheFold'
  | 'humaniser'
  | 'valueStack'
  | 'socialProof'
  | 'grandSlamOffer'
  | 'leadMagnet'
  | 'faq'
  | 'leadForm';
export type LandingVariantConfig = Record<LandingSectionKey, LandingVariant>;
