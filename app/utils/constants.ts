// Constants for Malitix landing page
import type { Service, NavLink, Stat, SocialLink } from "../types";

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Malitix Services
export const SERVICES: Service[] = [
  {
    id: "refonte-si",
    title: "Refonte de SI",
    description:
      "Modernisez votre infrastructure informatique pour une performance optimale et une agilité accrue.",
    icon: "RefreshCcw",
    fullDescription:
      "Transformation complète de votre système d'information avec les dernières technologies et les meilleures pratiques.",
  },
  {
    id: "dev-produit",
    title: "Développement produit (web & mobile)",
    description:
      "Conception et développement d'applications web et mobile sur mesure, adaptées à vos besoins métier.",
    icon: "Smartphone",
    fullDescription:
      "Solutions complètes de développement full-stack avec les frameworks les plus modernes.",
  },
  {
    id: "services-manages",
    title: "Services managés 24/7/365 & HNO",
    description:
      "Support technique continu et maintenance proactive pour garantir la disponibilité de vos systèmes.",
    icon: "Shield",
    fullDescription:
      "Surveillance, maintenance et support technique 24h/24, 7j/7, 365 jours par an avec engagement HNO.",
  },
  {
    id: "data-platform",
    title: "Data Platform",
    description:
      "Construction de plateformes data robustes pour exploiter pleinement le potentiel de vos données.",
    icon: "Database",
    fullDescription:
      "Architecture data moderne avec pipelines ETL, data warehousing et analytics avancés.",
  },
  {
    id: "ia-metier",
    title: "Déploiement IA métier",
    description:
      "Intégration d'intelligence artificielle pour automatiser et optimiser vos processus métier.",
    icon: "Brain",
    fullDescription:
      "Solutions IA sur mesure : Machine Learning, NLP, Computer Vision et automatisation intelligente.",
  },
];

// Statistics
export const STATS: Stat[] = [
  { value: "600", label: "Projets réalisés", suffix: "+" },
  { value: "350", label: "Ingénieurs", suffix: "+" },
  { value: "15", label: "Ans d'avant garde", suffix: "" },
  { value: "24/7", label: "Support technique", suffix: "" },
];

// Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/malitix-offshore", icon: "Linkedin" },
];

// Company Info
export const COMPANY_INFO = {
  name: "Malitix",
  tagline: "Excellence technologique, innovation continue",
  email: "infos@malitix.com",
  phone: "+33 1 84 80 62 48",
  address: "26 rue de Londres, 75009 Paris, France",
  description:
    "Malitix est votre partenaire de confiance pour la transformation digitale et l'innovation technologique.",
};

// CTA Text
export const CTA_TEXT = {
  primary: "Consultation Gratuite",
  secondary: "Découvrir nos services",
  footer: "Démarrer votre projet",
};

// Hero Content
export const HERO_CONTENT = {
  animated: {
    headline: "Transformez votre\nvision digitale\nen réalité",
    subheadline:
      "Solutions technologiques de pointe pour propulser votre entreprise vers le futur. De la refonte de SI au déploiement d'IA, nous maîtrisons l'ensemble de la chaîne de valeur tech.",
  },
  clean: {
    headline: "L'excellence technologique au service de votre croissance",
    subheadline:
      "Expertise complète en développement, infrastructure et intelligence artificielle. Accélérez votre transformation digitale avec Malitix.",
  },
};

// Conversion Landing Content
export const CONVERSION_LANDING_ABOVE_THE_FOLD = {
  headlinePrimary: "Arrêtez de Recruter. Commencez à Livrer.",
  headlineSecondary: "Votre équipe senior opérationnelle en 72h.",
  subHeadline:
    "Accédez au top 1% d'ingénieurs sur une large sélection de technologies, sans coût de recrutement, sans gestion RH, avec remplacement garanti.",
  ctaLabel: "VOIR LES PROFILS",
  ctaSubtext: "Audit gratuit • Sans carte bancaire",
  badgeLabel: "Livraison express",
  highlights: ["Top 1% multi-technos", "Remplacement garanti en 7 jours", "Pilotage par Tech Lead"],
  stats: [
    { label: "350+", value: "Ingénieurs prêts à coder" },
    { label: "98%", value: "Taux de rétention client" },
  ],
};

export const CONVERSION_LANDING_HUMANISER = {
  paragraph:
    "Vous avez une roadmap chargée et pas assez de mains pour coder ? Le recrutement traditionnel est lent et risqué. Les freelances sont imprévisibles. Chez Malitix, nous ne sommes pas une 'agence offshore'. Nous sommes votre extension technique. Nous vous pluggons une équipe commando déjà rodée qui s'intègre à vos outils (Slack, Jira) dès le Jour 1.",
  title: "Votre extension technique, pas une agence.",
  subtitle: "Notre équipe",
  imageAlt: "Équipe Malitix",
  imageCaptionTitle: "Équipe commando",
  imageCaptionSubtitle: "Des humains intégrés à vos outils",
  callout: "Une équipe déjà rodée, opérationnelle dès le Jour 1.",
};

export const CONVERSION_LANDING_VALUE_STACK = {
  eyebrow: "Ce que vous gagnez",
  title: "Ce n'est pas juste de l'externalisation.",
  subtitle: "C'est votre accélérateur de croissance.",
};

export const CONVERSION_LANDING_GRAND_SLAM = {
  eyebrow: "Essai Gratuit",
  headline: "2 SEMAINES POUR TESTER SANS RISQUE",
  body: "Nous sommes tellement sûrs de la qualité de notre code que nous prenons le risque pour vous. Engagez un développeur Malitix pendant 2 semaines. S'il ne valide pas vos tickets ou ne s'intègre pas à votre culture : Vous ne payez rien. Nous le remplaçons immédiatement.",
  cta: "DÉMARRER MA PÉRIODE D'ESSAI",
};

export const CONVERSION_LANDING_LEAD_MAGNET = {
  eyebrow: "Simulation ROI",
  title: "Calculateur de prix interactif",
  description: "Choisissez votre pack et la durée pour estimer votre budget en temps réel.",
  estimateLabel: "Votre estimation",
  tjmLabel: "TJM après remise",
  basePriceLabel: "Prix de base",
  durationLabel: "Durée du projet",
  actionLabel: "🚀 Je me lance",
};

export const CONVERSION_LANDING_SOCIAL_PROOF = {
  title: "Ils nous ont déjà fait confiance.",
  eyebrow: "Ils nous font confiance",
};

export const CONVERSION_LANDING_FAQ = {
  eyebrow: "FAQ",
  title: "Questions fréquentes",
  items: [
    {
      question: "Est-ce que je vais avoir un décalage horaire ?",
      answer:
        "Nos équipes sont calées sur vos horaires de bureau pour assurer une collaboration Slack/Teams en temps réel.",
    },
    {
      question: "Comment garantissez-vous la qualité du code ?",
      answer:
        "Chaque ligne de code passe par une Code Review stricte. Nos Tech Leads supervisent chaque commit.",
    },
    {
      question: "Et si le développeur ne convient pas ?",
      answer:
        'Grâce à notre garantie "Plug & Play", nous le remplaçons sous 48h sans frais supplémentaires.',
    },
  ],
};

export const CONVERSION_LANDING_LEAD_FORM = {
  eyebrow: "Audit gratuit",
  title: "Accédez aux profils disponibles dès maintenant",
  description:
    "Remplissez le formulaire pour recevoir une sélection d'ingénieurs adaptés à vos sprints.",
  benefits: [
    "Audit de besoin gratuit",
    "Réponse sous 24 heures",
    "Garantie de remplacement 7 jours",
  ],
  privacyLabel: "politique de confidentialité",
};
