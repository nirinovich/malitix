import { BarChart4, Database, Clock } from "lucide-react";
import { useInView } from "~/hooks/useInView";

export default function BIPainPoints() {
  const { ref, isInView } = useInView({ once: true });

  return (
    <section className="py-24 px-6 sm:px-12 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 animate-on-scroll ${isInView ? "in-view" : ""}`}
        >
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
            Ça vous parle ?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6 max-w-4xl mx-auto">
            Vous passez plus de temps à{" "}
            <span className="text-red-500 line-through decoration-red-500/40">
              chercher des données
            </span>{" "}
            qu&apos;à <span className="text-[var(--brand-primary)]">prendre des décisions</span>.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Les dirigeants perdent en moyenne 15 jours par mois à attendre des reportings. Pendant
            ce temps, les opportunités passent et les concurrents avancent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual showing the problem */}
          <div
            className={`order-2 lg:order-1 animate-on-scroll stagger-2 ${isInView ? "in-view" : ""}`}
          >
            <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-4 sm:p-8 rounded-3xl shadow-xl w-full overflow-hidden">
              <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-0">
                <h4 className="font-bold text-base sm:text-lg text-[var(--text-primary)]">
                  La Latence Décisionnelle
                </h4>
                <span className="text-[10px] sm:text-xs font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full uppercase tracking-widest">
                  Risque Stratégique
                </span>
              </div>

              <div className="relative h-48 sm:h-64 w-full flex items-end justify-between gap-2 sm:gap-4">
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-t-lg h-12 relative overflow-hidden flex items-end">
                    <div className="w-full bg-[var(--brand-primary)]/20 h-full" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase text-[var(--text-tertiary)] text-center">
                    Données
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-t-lg h-32 relative overflow-hidden group">
                    <div className="absolute bottom-0 w-full bg-[var(--brand-primary)]/40 h-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white bg-slate-800 px-2 py-1 rounded shadow-sm">
                        +15 jours
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase text-[var(--text-tertiary)] text-center">
                    Extraction
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="w-full bg-red-500/10 rounded-t-lg h-60 relative overflow-hidden border-x border-t border-red-500/30 animate-pulse">
                    <div className="absolute bottom-0 w-full bg-red-500/40 h-full" />
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-red-500 font-black text-xl lg:text-3xl tracking-tighter uppercase px-2 text-center">
                      Gap
                      <span className="text-[10px] lg:text-xs tracking-normal">Décisionnel</span>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase text-red-500 text-center">
                    Opportunité Perdue
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points */}
          <div className="space-y-8 order-1 lg:order-2">
            {[
              {
                icon: BarChart4,
                title: "Des reportings obsolètes avant d'être lus",
                desc: "Vous prenez des décisions stratégiques sur des données d'il y a 3 semaines. Le monde a changé depuis, mais votre tableau de bord l'ignore.",
              },
              {
                icon: Database,
                title: "Otages de votre équipe technique",
                desc: "Chaque question = un ticket IT. Chaque ticket = 3 à 7 jours d'attente. C'est comme conduire une F1 avec un GPS en retard de 15 minutes.",
              },
              {
                icon: Clock,
                title: "Excel : le cimetière de votre productivité",
                desc: "Vos équipes passent 60% de leur temps à fusionner des fichiers au lieu de piloter la croissance. C'est du gaspillage pur.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-6 group animate-on-scroll ${isInView ? "in-view" : ""}`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/15 transition-colors">
                    <Icon className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
