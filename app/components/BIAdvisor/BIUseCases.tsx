import { LineChart, ArrowUpRight, PackageSearch } from "lucide-react";
import { useInView } from "~/hooks/useInView";

const useCases = [
  {
    icon: <LineChart size={24} />,
    department: "Direction Financière",
    query:
      "Quel est l'impact sur notre BFR prévisionnel si nous augmentons nos stocks de composants de 15% pour anticiper Q4 ?",
    before: "3 jours d'exports",
    after: "Généré en 1.2s",
  },
  {
    icon: <ArrowUpRight size={24} />,
    department: "Direction Commerciale",
    query:
      "Affiche-moi le top 10 des clients dont la marge a le plus baissé ce trimestre, et identifie les causes.",
    before: "Attente de l'IT",
    after: "Généré en 1.5s",
  },
  {
    icon: <PackageSearch size={24} />,
    department: "Supply Chain",
    query:
      "Quelles sont les références qui risquent une rupture de stock d'ici 3 semaines en croisant avec nos prévisions ?",
    before: "Analyses croisées",
    after: "Alerte en 0.8s",
  },
];

export default function BIUseCases() {
  const { ref, isInView } = useInView({ once: true });

  return (
    <section className="py-24 px-6 sm:px-12 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${isInView ? "in-view" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6 text-balance">
            Ce que vos directions peuvent enfin demander.
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Transformez votre ERP en un outil de décision instantané grâce à des requêtes en langage
            naturel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.department}
              className={`animate-on-scroll ${isInView ? "in-view" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-8 rounded-3xl h-full flex flex-col hover:border-[var(--brand-primary)]/50 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/5 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)] group-hover:scale-110 group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all shadow-inner border border-[var(--brand-primary)]/20">
                    {useCase.icon}
                  </div>
                  <h3 className="font-bold text-lg text-[var(--text-primary)]">
                    {useCase.department}
                  </h3>
                </div>

                <div className="bg-[var(--bg-primary)] p-5 rounded-2xl rounded-tl-sm border border-[var(--border-primary)] mb-8 flex-1 relative shadow-inner">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[var(--brand-primary)] rounded-l-full" />
                  <p className="text-[var(--text-secondary)] text-sm font-medium italic leading-relaxed">
                    &quot;{useCase.query}&quot;
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--border-primary)]/50 space-y-3 mt-auto">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">Avant l&apos;IA</span>
                    <span className="text-[var(--text-muted)] line-through decoration-red-500/50">
                      {useCase.before}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span className="text-[var(--text-primary)]">Avec BI Advisor</span>
                    <span className="text-emerald-500 font-black">{useCase.after}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
