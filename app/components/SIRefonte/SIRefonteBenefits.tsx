import { Check } from "lucide-react";

// Variant C: Checklist Style with Categories
export default function SIRefonteBenefits() {
  const categories = [
    {
      title: "Performance & Fiabilité",
      color: "var(--brand-primary)",
      benefits: [
        "Disponibilité 99.9% garantie",
        "75% des incidents résolus ou anticipés",
        "MTTR réduit de x2 à x5",
        "Monitoring temps réel et alertes prédictives",
      ],
    },
    {
      title: "Coûts & ROI",
      color: "var(--brand-primary)",
      benefits: [
        "-20 à -40% sur les coûts cloud",
        "ROI moyen 18-24 mois",
        "Quick wins visibles dès 30-90 jours",
        "Optimisation continue des ressources",
      ],
    },
    {
      title: "Agilité & Innovation",
      color: "var(--brand-primary)",
      benefits: [
        "Time-to-market x3 à x5 plus rapide",
        "Déploiements fréquents et sûrs",
        "Architecture IA-ready",
        "Roadmap claire et priorisée",
      ],
    },
    {
      title: "Sécurité & Conformité",
      color: "var(--brand-primary)",
      benefits: [
        "Conformité 95%+ (RGPD, NIS2)",
        "Zero-trust & segmentation réseau",
        "IAM robuste et gestion des accès",
        "Visibilité 360° des risques",
      ],
    },
    {
      title: "Équipes & Productivité",
      color: "var(--brand-primary)",
      benefits: [
        "60% du temps libéré (automatisation)",
        "Moins d'incidents et d'urgences",
        "DevOps & CI/CD opérationnels",
        "Formation et montée en compétence",
      ],
    },
    {
      title: "Data & IA",
      color: "var(--brand-primary)",
      benefits: [
        "Données gouvernées et fiables",
        "Pipelines data modernes",
        "Architecture préparée pour l'IA",
        "Analytics et décisionnel activés",
      ],
    },
  ];

  return (
    <section
      id="benefits-sirefonte"
      className="relative py-24 overflow-hidden bg-[var(--bg-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 text-[var(--text-primary)]">
            Tous les bénéfices de la <span className="text-[var(--brand-primary)]">Refonte SI</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Impact sur l'ensemble de votre organisation
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl backdrop-blur-sm border-2 transition-all hover:scale-105 bg-[var(--surface-primary)] border-[var(--border-primary)]"
              style={{
                animation: "fade-in-up 0.6s ease-out forwards",
                animationDelay: `${idx * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Category Title */}
              <div className="mb-6">
                <div
                  className="inline-block px-4 py-2 rounded-xl font-bold text-white mb-3"
                  style={{ backgroundColor: category.color }}
                >
                  {category.title}
                </div>
              </div>

              {/* Benefits List */}
              <ul className="space-y-3">
                {category.benefits.map((benefit, bidx) => (
                  <li key={bidx} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: category.color }}
                    />
                    <span className="text-sm text-[var(--text-secondary)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA Statement */}
        <div className="mt-16 max-w-5xl mx-auto p-10 rounded-3xl text-center backdrop-blur-sm border-2 bg-gradient-to-r from-[var(--brand-primary)]/10 via-[var(--brand-primary)]/10 to-[var(--brand-primary)]/10 border-[var(--brand-primary)]/30">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-3xl font-black mb-4 text-[var(--text-primary)]">
            Votre SI devient enfin un{" "}
            <span className="text-[var(--brand-primary)]">accélérateur stratégique</span>
          </h3>
          <p className="text-lg text-[var(--text-secondary)]">
            Au lieu de freiner l'innovation, il la propulse
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
