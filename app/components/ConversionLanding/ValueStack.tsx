import { BadgeCheck, Rocket, Shield, Shuffle } from "lucide-react";
import { CONVERSION_LANDING_VALUE_STACK } from "~/utils/constants";
import { useInView } from "~/hooks/useInView";
import type { ConversionLandingValueItem } from "~/types";

const items: ConversionLandingValueItem[] = [
  {
    icon: Rocket,
    title: "Vitesse d'Exécution",
    description: "Pourquoi attendre 3 mois de préavis ? Nos devs push du code dès leur première semaine.",
  },
  {
    icon: BadgeCheck,
    title: "Expertise Tech Validée",
    description: "Nous ne vous envoyons pas des juniors. Nos ingénieurs ont livré plus de 600 projets complexes.",
  },
  {
    icon: Shuffle,
    title: "Flexibilité Totale",
    description: "Besoin de scaler pour un rush ? On ajoute 2 devs. Le rush est fini ? On réduit la voilure. Vous payez ce que vous consommez.",
  },
  {
    icon: Shield,
    title: "Zéro Risque RH",
    description: "Pas de charges patronales, pas de gestion de carrière, pas de drama. On gère l'humain, vous gérez la vision.",
  },
];

export function ValueStack() {
  const { ref: sectionRef, isInView } = useInView({ once: true, margin: "-120px" });

  return (
    <section
      ref={sectionRef}
      id="value-stack"
      className={`py-20 bg-[var(--bg-secondary)] animate-on-scroll ${isInView ? 'in-view' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
              {CONVERSION_LANDING_VALUE_STACK.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {CONVERSION_LANDING_VALUE_STACK.title}
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              {CONVERSION_LANDING_VALUE_STACK.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border p-5 border-[var(--border-primary)] bg-[var(--surface-elevated)]"
              >
                <div className="h-10 w-10 rounded-xl bg-[#2ca3bd]/15 flex items-center justify-center">
                  <item.icon className="text-[#2ca3bd]" size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </div>
                  <div className="text-sm mt-1 text-[var(--text-secondary)]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
