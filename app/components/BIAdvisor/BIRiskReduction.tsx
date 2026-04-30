import { Brain, Zap, Shield } from "lucide-react";
import { useInView } from "~/hooks/useInView";

export default function BIRiskReduction() {
  const { ref, isInView } = useInView({ once: true });

  return (
    <section className="py-24 px-6 sm:px-12 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 animate-on-scroll ${isInView ? "in-view" : ""}`}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6">
            Conçu pour éliminer{" "}
            <span className="text-[var(--brand-primary)]">chaque objection</span>.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Chaque friction que vous imaginez, nous l&apos;avons anticipée et résolue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Large card */}
          <div
            className={`lg:col-span-2 animate-on-scroll stagger-1 ${isInView ? "in-view" : ""}`}
          >
            <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-10 rounded-3xl h-full flex flex-col justify-between group">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
                  Zéro compétence technique requise
                </h3>
                <p className="text-[var(--text-secondary)] max-w-sm">
                  Plus besoin de maîtriser SQL ou Excel. L&apos;interface comprend votre langue
                  métier. Du DAF au commercial, tout le monde peut piloter.
                </p>
              </div>
              <div className="mt-8">
                <Brain
                  size={48}
                  className="text-[var(--brand-primary)]/40 group-hover:text-[var(--brand-primary)] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Gradient card */}
          <div className={`animate-on-scroll stagger-2 ${isInView ? "in-view" : ""}`}>
            <div className="bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-primary)] text-white p-8 rounded-3xl h-full flex flex-col justify-between shadow-lg shadow-[var(--brand-primary)]/20 group hover:scale-105 transition-transform">
              <div>
                <h3 className="text-xl font-bold mb-3">Opérationnel en 2 semaines</h3>
                <p className="text-white/80 text-sm">
                  Connexion à votre ERP, configuration et formation de vos équipes. Pas 6 mois. 2
                  semaines.
                </p>
              </div>
              <Zap
                size={40}
                className="text-white/40 group-hover:text-amber-400 group-hover:fill-amber-400 mt-4 transition-all"
              />
            </div>
          </div>

          {/* Security card */}
          <div className={`animate-on-scroll stagger-3 ${isInView ? "in-view" : ""}`}>
            <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-8 rounded-3xl h-full flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                  Sécurité Maximale
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Lecture seule. Vos données sont analysées mais jamais modifiées. Chiffrement E2E.
                </p>
              </div>
              <Shield
                size={40}
                className="text-[var(--brand-primary)]/30 group-hover:text-[var(--brand-primary)] mt-4 transition-colors"
              />
            </div>
          </div>

          {/* Integration strip */}
          <div className={`lg:col-span-4 animate-on-scroll stagger-4 ${isInView ? "in-view" : ""}`}>
            <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6 group text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                  Intégration Universelle
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Connecteurs natifs prêts à l&apos;emploi. Branchez, configurez, pilotez.
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4">
                {["SAP", "Sage", "Oracle", "Dynamics", "Excel", "CRM"].map((erp) => (
                  <span
                    key={erp}
                    className="px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl font-mono text-xs sm:text-sm font-bold text-[var(--text-primary)] shadow-sm hover:border-[var(--brand-primary)]/30 transition-colors"
                  >
                    {erp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
