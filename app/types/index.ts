/* Theme Types */
export type Theme = "light" | "dark";
export type ThemeMode = Theme; // Alias for legacy compatibility

/* Legacy Types for Pixel Perfect Migration */
export interface Service {
  id: string;
  title: string; // Legacy used title, new used name. Keeping title as primary from legacy.
  description: string;
  icon: string | React.ReactNode; // Support both string (legacy) and Node (new)
  fullDescription?: string;
  href?: string;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
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



/* Common Component Props */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/* Form Types */
export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface TextInputProps extends FormFieldProps {
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoComplete?: string;
}

export interface TextareaProps extends FormFieldProps {
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
}

/* Contact Form Types */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormSubmitResponse {
  success: boolean;
  message: string;
  error?: string;
}

/* SEO Types */
export interface SEOConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

/* Conversion Landing Types */
export type IconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { size?: number }
>;

export interface ConversionLandingValueItem {
  icon: IconComponent;
  title: string;
  description: string;
}

export interface ConversionLandingStat {
  label: string;
  value: string;
}

export interface ConversionLandingTestimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface ConversionLandingFaqItem {
  question: string;
  answer: string;
}

export * from './blog';
