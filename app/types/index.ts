/* Theme Types */
export type Theme = "light" | "dark";

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

/* Service Types */
export interface Service {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}

/* Navigation Types */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/* SEO Types */
export interface SEOConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}
