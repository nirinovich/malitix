import { MessageSquare, TrendingUp, BellRing, Target } from "lucide-react";
import { useInView } from "~/hooks/useInView";

export default function BIValueProp() {
  const { ref, isInView } = useInView({ once: true });

  return (
    <section className="py-24 px-6 sm:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-on-scroll ${isInView ? "in-view" : ""}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-[var(--border-primary)] pb-12">
            <div className="max-w-3xl">
              <span className="text-[var(--brand-primary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                La Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">
                Posez une question.{" "}
                <span className="text-gradient italic">Obtenez la réponse en secondes.</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-lg">
                Plus besoin de SQL, d&apos;Excel ou d&apos;attendre l&apos;équipe IT. BI Advisor
                comprend vos questions et vous livre des réponses actionnables.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: MessageSquare,
              title: "Parlez à vos données comme à un collègue",
              desc: "Posez vos questions en français, à l'écrit ou à la voix. L'IA traduit votre intention en requête technique et génère des graphiques à la volée.",
              result: "Résultat : Autonomie totale de vos équipes métier",
              featured: false,
            },
            {
              icon: TrendingUp,
              title: "Anticipez les crises avant qu'elles n'arrivent",
              desc: "Prévisions de trésorerie, tendances de ventes, projections de BFR — basées sur vos historiques réels et vos échéances.",
              result: "Résultat : Pilotage proactif, plus jamais dans le rétroviseur",
              featured: false,
            },
            {
              icon: BellRing,
              title: "Ne ratez plus jamais un signal critique",
              desc: "Recevez une alerte (WhatsApp/Push) dès qu'une anomalie, une chute de marge ou un seuil critique est détecté par l'algorithme.",
              result: "Résultat : Dormez tranquille, votre IA surveille 24/7",
              featured: true,
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`animate-on-scroll ${isInView ? "in-view" : ""}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div
                  className={`p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group h-full flex flex-col relative overflow-hidden ${
                    feature.featured
                      ? "bg-[var(--brand-primary)]/5 border border-[var(--brand-primary)]/20 hover:border-[var(--brand-primary)]/40"
                      : "bg-[var(--surface-elevated)] border border-[var(--border-primary)] hover:border-[var(--brand-primary)]/30"
                  }`}
                >
                  {feature.featured && (
                    <div className="absolute top-0 right-0 p-3 bg-[var(--brand-primary)] text-white text-[10px] font-bold rounded-bl-xl uppercase tracking-widest">
                      Live
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 ${
                      feature.featured
                        ? "bg-[var(--brand-primary)]/10 group-hover:bg-amber-500"
                        : "bg-[var(--brand-primary)]/10 group-hover:bg-[var(--brand-primary)]"
                    }`}
                  >
                    <Icon
                      className="text-[var(--brand-primary)] group-hover:text-white transition-colors"
                      size={32}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                    {feature.desc}
                  </p>
                  <div
                    className={`mt-auto pt-4 border-t ${feature.featured ? "border-[var(--brand-primary)]/20" : "border-[var(--border-primary)]"}`}
                  >
                    <p className="text-sm text-[var(--brand-primary)] font-semibold flex items-center gap-2">
                      <Target size={14} />
                      {feature.result}
                    </p>
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
