import React from 'react';
import { CheckCircle2, Zap, Lock, type LucideIcon } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const SOLUTIONS: Solution[] = [
  {
    id: 'performance',
    title: 'Zéro Bug, Vitesse Max',
    description: 'Vos utilisateurs n\'attendent pas. Votre app doit répondre instantanément. Nous utilisons les technologies les plus robustes pour que ça file droit.',
    icon: Zap,
    features: ['Réponse < 100ms', 'Native ou 5G', 'Optimisé pour millions d\'users']
  },
  {
    id: 'compliance',
    title: 'La Loi est votre Amie',
    description: 'De nouvelles lois arrivent (DORA/RGAA 2025). Si votre app n\'est pas sécurisée, vous prenez une amende. Nous blindons votre app.',
    icon: Lock,
    features: ['Conformité DORA', 'Accessibilité RGAA', 'Audit de sécurité inclus']
  },
  {
    id: 'expertise',
    title: 'Spécialistes, pas Généralistes',
    description: 'Nous connaissons votre métier. Santé, Finance, Commerce - nous avons déjà résolu vos problèmes.',
    icon: CheckCircle2,
    features: ['Expertise métier', 'Cas d\'usage validés', 'Best practices intégrées']
  }
];

interface MobileAppSolutionProps {}

const MobileAppSolution: React.FC<MobileAppSolutionProps> = React.memo(() => {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg-primary)] relative overflow-hidden border-t border-[var(--border-primary)]/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2ca3bd] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 px-2">Ce que vous obtenez</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#2ca3bd] font-semibold mb-3 sm:mb-4 px-2">Nous ne sommes pas là pour "coder". Nous sommes là pour construire votre actif.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            return (
              <div key={solution.id} className="group bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#2ca3bd] hover:shadow-2xl hover:shadow-[#2ca3bd]/20 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] rounded-lg sm:rounded-xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">{solution.title}</h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2 pt-4 border-t border-[var(--border-primary)]">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2ca3bd]"></div>
                      <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#2ca3bd]/10 to-[#1e7a8f]/10 border-l-4 border-[#2ca3bd] rounded-r-xl sm:rounded-r-2xl p-6 sm:p-8 text-center">
          <p className="text-base sm:text-lg text-[var(--text-primary)] font-semibold">
            Technologies robustes. Conformité garantie. Expertise métier validée.
          </p>
        </div>
      </div>
    </section>
  );
});

MobileAppSolution.displayName = 'MobileAppSolution';

export default MobileAppSolution;

