import { LineChart, TrendingUp, PackageSearch } from "lucide-react";
import { useInView } from "~/hooks/useInView";

export default function BIBenefitsByRole() {
  const { ref, isInView } = useInView({ once: true });

  const roles = [
    {
      icon: LineChart,
      title: "DAF / Finance",
      desc: "Suivi de trésorerie prédictif, optimisation du BFR et analyse d'écarts budgétaires — à la demande, en temps réel.",
      result: "→ Visibilité cash à J+90 au lieu de J+15",
    },
    {
      icon: TrendingUp,
      title: "Commerce / Sales",
      desc: "Analyse de rentabilité par client, prévision des ventes basées sur la pipeline, détection d'opportunités cachées.",
      result: "→ +25% de taux de conversion pipeline",
    },
    {
      icon: PackageSearch,
      title: "Logistique / Ops",
      desc: "Prévention des ruptures de stocks, optimisation des approvisionnements, analyse de la chaîne logistique en continu.",
      result: "→ -40% de ruptures de stock",
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 animate-on-scroll ${isInView ? "in-view" : ""}`}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">
            Chaque métier y gagne.{" "}
            <span className="text-[var(--brand-primary)]">Concrètement.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Des résultats mesurables, pas des promesses vagues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className={`animate-on-scroll ${isInView ? "in-view" : ""}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-3xl p-8 h-full hover:border-[var(--brand-primary)]/30 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--brand-primary)] transition-colors">
                    <Icon
                      className="text-[var(--brand-primary)] group-hover:text-white transition-colors"
                      size={28}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                    {role.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{role.desc}</p>
                  <p className="text-sm text-[var(--brand-primary)] font-semibold">{role.result}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
