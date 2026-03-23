// TypeScript interfaces for Malitix landing page

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
  }
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

