// Constants for Malitix landing page
import type { Service, NavLink, Stat, SocialLink } from '../types';

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Malitix Services
export const SERVICES: Service[] = [
  {
    id: 'refonte-si',
    title: 'Refonte de SI',
    description: 'Modernisez votre infrastructure informatique pour une performance optimale et une agilité accrue.',
    icon: 'RefreshCcw',
    fullDescription: 'Transformation complète de votre système d\'information avec les dernières technologies et les meilleures pratiques.'
  },
  {
    id: 'dev-produit',
    title: 'Développement produit (web & mobile)',
    description: 'Conception et développement d\'applications web et mobile sur mesure, adaptées à vos besoins métier.',
    icon: 'Smartphone',
    fullDescription: 'Solutions complètes de développement full-stack avec les frameworks les plus modernes.'
  },
  {
    id: 'services-manages',
    title: 'Services managés 24/7/365 & HNO',
    description: 'Support technique continu et maintenance proactive pour garantir la disponibilité de vos systèmes.',
    icon: 'Shield',
    fullDescription: 'Surveillance, maintenance et support technique 24h/24, 7j/7, 365 jours par an avec engagement HNO.'
  },
  {
    id: 'data-platform',
    title: 'Data Platform',
    description: 'Construction de plateformes data robustes pour exploiter pleinement le potentiel de vos données.',
    icon: 'Database',
    fullDescription: 'Architecture data moderne avec pipelines ETL, data warehousing et analytics avancés.'
  },
  {
    id: 'ia-metier',
    title: 'Déploiement IA métier',
    description: 'Intégration d\'intelligence artificielle pour automatiser et optimiser vos processus métier.',
    icon: 'Brain',
    fullDescription: 'Solutions IA sur mesure : Machine Learning, NLP, Computer Vision et automatisation intelligente.'
  },
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
  email: 'contact@malitix.com',
  phone: '+33 1 84 80 62 48',
  address: 'Antananarivo, Madagascar',
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
