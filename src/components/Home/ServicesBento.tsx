import { RefreshCcw, Smartphone, Zap, Cog, ArrowRight, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router';
import type { LucideIcon } from 'lucide-react';

interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  highlight?: string;
}

const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 'externalisation',
    title: 'Externalisation',
    description: 'Équipe senior opérationnelle en 72h. Renforcez vos capacités avec nos experts dédiés.',
    highlight: '72h',
    icon: Cog,
    href: '/externalisation',
  },
  {
    id: 'sprint-commando',
    title: 'Sprint Commando',
    description: 'Déblocage garanti en 14 jours. On identifie, on résout, on livre.',
    highlight: '14 jours',
    icon: Zap,
    href: '/sprint-commando',
  },
  {
    id: 'dev-sur-mesure',
    title: 'Développement Sur Mesure',
    description: 'Application web & mobile en 90 jours. Du concept au déploiement, une solution taillée pour votre métier.',
    highlight: '90 jours',
    icon: Globe,
    href: '/developpement-sur-mesure',
  },
  {
    id: 'dev-mobile',
    title: 'Développement Mobile',
    description: 'iOS & Android native & cross-platform. Performances natives, expérience utilisateur premium.',
    icon: Smartphone,
    href: '/developpement-mobile',
  },
  {
    id: 'refonte-si',
    title: 'Refonte SI',
    description: 'Modernisation complète de votre système d\'information. Migration, optimisation et pérennité.',
    icon: RefreshCcw,
    href: '/refonte-si',
  },
];

// Bento grid layout: 2 rows — wide + 1 on top, 3 standard on bottom
const BENTO_LAYOUT = [
  'md:col-span-2',  // 0 — wide  (row 1)
  'md:col-span-1',  // 1 — standard (row 1)
  'md:col-span-1',  // 2 — standard (row 2)
  'md:col-span-1',  // 3 — standard (row 2)
  'md:col-span-1',  // 4 — standard (row 2)
] as const;

function ServiceCard({ service, layout, theme, onClick }: {
  service: ServiceOffering;
  layout: string;
  theme: 'dark' | 'light';
  onClick: () => void;
}) {
  const Icon = service.icon;
  const isWide = layout.includes('col-span-2');

  return (
    <button
      onClick={onClick}
      className={`${layout} group cursor-pointer backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden text-left ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
          : 'bg-gradient-to-br from-[var(--surface-primary)] to-[var(--surface-primary)]/70 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40 hover:shadow-[#2ca3bd]/20'
      }`}
    >
      {/* Glow */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 ${
        theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[var(--bg-secondary)]'
      }`} />

      <div className={`relative z-10 h-full flex ${isWide ? 'flex-row items-center gap-8' : 'flex-col'}`}>
        <div className={isWide ? 'flex-1' : ''}>
          <div className="bg-[#2ca3bd] p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-white" size={28} />
          </div>

          <h3 className={`font-bold mb-3 ${isWide ? 'text-2xl' : 'text-xl'} ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {service.title}
          </h3>

          <p className={`text-sm leading-relaxed ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            {service.description}
          </p>
        </div>

        <div className={`flex items-center justify-between ${isWide ? 'flex-col items-end gap-4 self-end' : 'mt-6'}`}>
          {service.highlight && (
            <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
              theme === 'dark'
                ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]'
                : 'bg-[#2ca3bd]/10 text-[#2ca3bd]'
            }`}>
              {service.highlight}
            </span>
          )}
          <div className="flex items-center gap-2 text-[#2ca3bd] font-semibold group-hover:gap-4 transition-all text-sm">
            Découvrir
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </button>
  );
}

export default function ServicesBento() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" className={`py-24 bg-gradient-to-b relative ${
      theme === 'dark'
        ? 'from-[#0a0e0d] to-[#060705]'
        : 'from-[var(--bg-primary)] to-[var(--bg-primary)]'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[var(--bg-secondary)]'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              Nos Services
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]" />
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Une expertise complète pour tous vos besoins tech
          </h2>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            De la conception à la mise en production, nous accompagnons votre transformation digitale
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_OFFERINGS.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              layout={BENTO_LAYOUT[i]}
              theme={theme}
              onClick={() => handleClick(service.href)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


