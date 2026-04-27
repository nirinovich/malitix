import { Zap, Brain, Calendar, ChevronRight } from "lucide-react";
import { useInView } from "~/hooks/useInView";

const hiddenCosts = [
  {
    icon: Zap,
    amount: "42K€",
    label: "Le Coût Invisible",
    description:
      "C'est le montant net payé à des ingénieurs seniors (TJM 550 €+) pour effectuer des tâches de triage basiques qui ne demandent aucune expertise.",
    punchline: "Vous payez un architecte pour vider les poubelles.",
    gradient: "from-[var(--brand-primary)]/20 to-[var(--brand-primary)]/5",
  },
  {
    icon: Brain,
    amount: "8.4K€",
    label: "Le Facteur de Distraction",
    description:
      'Chaque alerte génère un "Context Switching". Il faut en moyenne 20 minutes à un cerveau humain pour retrouver un état de concentration profonde.',
    punchline: "Vous payez 20% de surcoût en temps de cerveau inefficace.",
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Calendar,
    amount: "∞",
    label: "Le Retard de Roadmap",
    description:
      "Si vos ingénieurs récupèrent 20% de leur temps, votre roadmap produit avance plus vite. Le coût d'opportunité est incalculable.",
    punchline: "Ça n'a pas de prix.",
    gradient: "from-red-500/20 to-red-500/5",
  },
];

export default function SOCHiddenCosts() {
  const { ref, isInView } = useInView({ once: true });

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--brand-primary)]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref as any}
          className={`text-center mb-16 sm:mb-20 animate-on-scroll ${isInView ? "in-view" : ""}`}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--brand-primary)]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-primary)]">
              Le problème
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--brand-primary)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-[var(--text-primary)]">
            Les coûts <span className="text-[var(--brand-primary)]">cachés</span> de la gestion
            d'alerte
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Ce que personne ne vous dit sur le vrai coût des alertes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {hiddenCosts.map((cost, index) => {
            const Icon = cost.icon;
            return (
              <div
                key={index}
                className={`animate-on-scroll ${isInView ? "in-view" : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group relative bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-2xl p-8 hover:border-[var(--brand-primary)]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/10 h-full">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cost.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon + Amount */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-[var(--brand-primary)]/10 rounded-xl group-hover:bg-[var(--brand-primary)]/20 transition-colors">
                        <Icon size={24} className="text-[var(--brand-primary)]" />
                      </div>
                      <span className="text-4xl font-black text-[var(--brand-primary)]">
                        {cost.amount}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                      {cost.label}
                    </h3>

                    <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm">
                      {cost.description}
                    </p>

                    <div className="pt-4 border-t border-[var(--border-primary)]">
                      <p className="text-[var(--brand-primary)] font-bold text-sm flex items-center gap-2">
                        <ChevronRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                        {cost.punchline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
