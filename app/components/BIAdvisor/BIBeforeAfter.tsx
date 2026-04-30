import { CheckCircle, XCircle } from "lucide-react";
import { useInView } from "~/hooks/useInView";

export default function BIBeforeAfter() {
  const { ref, isInView } = useInView({ once: true });

  return (
    <section className="py-24 px-6 sm:px-12 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 animate-on-scroll ${isInView ? "in-view" : ""}`}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">
            Avant vs. <span className="text-[var(--brand-primary)]">Après</span> BI Advisor
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            La différence est mesurable, pas hypothétique.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll stagger-1 ${isInView ? "in-view" : ""}`}>
          {/* BEFORE */}
          <div className="bg-[var(--surface-elevated)] border border-red-500/20 p-8 rounded-3xl relative">
            <div className="absolute -top-4 left-6 bg-red-500/10 text-red-500 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-red-500/20">
              Avant
            </div>
            <div className="space-y-5 mt-4">
              {[
                "Reporting en J+15 minimum",
                "Export Excel manuel et chronophage",
                "Dépendance totale envers l'IT",
                "Zéro anticipation, zéro prédiction",
                "Tableaux statiques incompréhensibles",
                "Décisions basées sur l'intuition",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER */}
          <div className="bg-[var(--surface-elevated)] border-2 border-[var(--brand-primary)]/30 p-8 rounded-3xl relative shadow-xl shadow-[var(--brand-primary)]/5">
            <div className="absolute -top-4 left-6 bg-[var(--brand-primary)] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
              Avec BI Advisor
            </div>
            <div className="space-y-5 mt-4">
              {[
                "Réponses en temps réel, en secondes",
                "Questions en langage naturel (voix/texte)",
                "Autonomie totale de chaque métier",
                "Prévisions et alertes proactives",
                "Graphiques générés automatiquement",
                "Décisions pilotées par la data",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-[var(--brand-primary)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[var(--text-primary)] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
