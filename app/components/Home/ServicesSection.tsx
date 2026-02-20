import { RefreshCcw, Smartphone, Zap, Cog, ArrowRight, Globe, Shield, Database, Brain } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useRef, useEffect } from 'react';
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

interface ServiceCardProps {
  service: ServiceOffering;
  layout: string;
  onClick: () => void;
}

function ServiceCard({ service, layout, onClick }: ServiceCardProps) {
  const Icon = service.icon;
  const isWide = layout.includes('col-span-2');

  return (
    <button
      onClick={onClick}
      className={`${layout} group cursor-pointer backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden text-left border border-[#2ca3bd]/20 bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20 animate-on-scroll`}
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 bg-[#2ca3bd]/10" />

      <div className={`relative z-10 h-full flex ${isWide ? 'flex-row items-center gap-8' : 'flex-col'}`}>
        <div className={isWide ? 'flex-1' : ''}>
          <div className="bg-[#2ca3bd] p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-white" size={28} />
          </div>

          <h3 className={`font-bold mb-3 text-[var(--text-primary)] ${isWide ? 'text-2xl' : 'text-xl'}`}>
            {service.title}
          </h3>

          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {service.description}
          </p>
        </div>

        <div className={`flex items-center justify-between ${isWide ? 'flex-col items-end gap-4 self-end' : 'mt-6'}`}>
          {service.highlight && (
            <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#2ca3bd]/20 text-[#2ca3bd]">
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

export function ServicesSection() {
  const navigate = useNavigate();
  const gridRef = useRef<HTMLDivElement>(null);

  const handleClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.animate-on-scroll').forEach((child) => child.classList.add('in-view'));
          observer.unobserve(el);
        }
      },
      { rootMargin: '-50px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-primary)] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl bg-[#2ca3bd]/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              Nos Services
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
            Une expertise complète pour tous vos besoins tech
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            De la conception à la mise en production, nous accompagnons votre transformation digitale
          </p>
        </div>

        {/* Bento Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SERVICE_OFFERINGS.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              layout={`${BENTO_LAYOUT[i]} stagger-${i + 1}`}
              onClick={() => handleClick(service.href)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
