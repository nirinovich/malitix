// Constants for Malitix landing page
import type { NavLink, Stat, SocialLink } from '../types';

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
];



// Statistics
export const STATS: Stat[] = [
  { value: '600', label: 'Projets réalisés', suffix: '+' },
  { value: '350', label: 'Ingénieurs', suffix: '+' },
  { value: '15', label: "Ans d'avant garde", suffix: '' },
  { value: '24/7', label: 'Support technique', suffix: '' },
];

// Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/malitix-offshore', icon: 'Linkedin' },
];

// Company Info
export const COMPANY_INFO = {
  name: 'Malitix',
  tagline: 'Excellence technologique, innovation continue',
  email: 'infos@malitix.com',
  phone: '+33 1 84 80 62 48',
  address: '26 rue de Londres, 75009 Paris, France',
  description: 'Malitix est votre partenaire de confiance pour la transformation digitale et l\'innovation technologique.',
};

// CTA Text
export const CTA_TEXT = {
  primary: 'Demander un devis',
  secondary: 'Découvrir nos services',
  footer: 'Démarrer votre projet',
};

// Hero Content
export const HERO_CONTENT = {
  animated: {
    headline: 'Transformez votre vision digitale en réalité',
    subheadline: 'Solutions technologiques de pointe pour propulser votre entreprise vers le futur. De la refonte de SI au déploiement d\'IA, nous maîtrisons l\'ensemble de la chaîne de valeur tech.',
  },
  clean: {
    headline: 'L\'excellence technologique au service de votre croissance',
    subheadline: 'Expertise complète en développement, infrastructure et intelligence artificielle. Accélérez votre transformation digitale avec Malitix.',
  },
};
