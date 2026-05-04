import { Users, TrendingDown, Calendar, ArrowRight, X, Check } from "lucide-react";
import { useInView } from "~/hooks/useInView";

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1, once: true });

  return (
    <div
      ref={ref as any}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const transformations = [
  {
    aspect: 'Productivité',
    icon: Users,
    before: 'Épuisés et distraits',
    after: 'Focus et productifs',
  },
  {
    aspect: 'Coûts opérationnels',
    icon: TrendingDown,
    before: '42 000 € / an',
    after: 'Divisés par 2',
  },
  {
    aspect: 'Roadmap produit',
    icon: Calendar,
    before: 'Retard à chaque alerte',
    after: 'Priorité n°1',
  },
];

export default function SOCBeforeAfter() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2ca3bd]/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                Transformation
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-primary)]">
              Comment ça <span className="text-[#2ca3bd]">marche</span>
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              La transformation de votre équipe en deux états
            </p>
          </div>
        </RevealSection>

        <div className="space-y-6">
          {transformations.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealSection key={index} delay={index * 100}>
                <div className="group bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-2xl p-6 sm:p-8 hover:border-[#2ca3bd]/40 transition-all duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-6 items-center">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#2ca3bd]/10 rounded-xl group-hover:bg-[#2ca3bd]/20 transition-colors shrink-0">
                        <Icon size={24} className="text-[#2ca3bd]" />
                      </div>
                      <span className="text-lg font-bold text-[var(--text-primary)]">{item.aspect}</span>
                    </div>

                    <div className="flex items-center gap-3 justify-center">
                      <X size={18} className="text-red-500 shrink-0" />
                      <span className="bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border border-red-500/20">
                        {item.before}
                      </span>
                    </div>

                    <div className="hidden md:flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <div className="h-px w-8 bg-gradient-to-r from-red-500/40 to-[#2ca3bd]/40" />
                        <ArrowRight size={20} className="text-[#2ca3bd] group-hover:translate-x-1 transition-transform" />
                        <div className="h-px w-8 bg-[#2ca3bd]/40" />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center">
                      <Check size={18} className="text-emerald-400 shrink-0" />
                      <span className="bg-[#2ca3bd]/10 text-[#2ca3bd] px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border border-[#2ca3bd]/20">
                        {item.after}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
