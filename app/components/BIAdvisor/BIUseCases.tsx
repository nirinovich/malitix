import { LineChart, ArrowUpRight, PackageSearch } from "lucide-react";
import { useInView } from "~/hooks/useInView";

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView({ once: true, threshold: 0.08 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`transition-all duration-700 ease-out ${className}`}
      style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(40px)", transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const useCases = [
  {
    icon: <LineChart size={32} />,
    department: "Direction Financière",
    query: "Quel est l'impact sur notre BFR prévisionnel si nous augmentons nos stocks de composants de 15% pour anticiper Q4 ?",
    after: "Généré en 1.2s",
  },
  {
    icon: <ArrowUpRight size={32} />,
    department: "Direction Commerciale",
    query: "Affiche-moi le top 10 des clients dont la marge a le plus baissé ce trimestre, et identifie les causes.",
    after: "Généré en 1.5s",
  },
  {
    icon: <PackageSearch size={32} />,
    department: "Supply Chain",
    query: "Quelles sont les références qui risquent une rupture de stock d'ici 3 semaines en croisant avec nos prévisions ?",
    after: "Alerte en 0.8s",
  },
];

export default function BIUseCases() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-gray-100 dark:bg-[#0a0e0d]">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-4">
              CE QUE VOS DIRECTIONS <span className="text-[var(--brand-primary)]">PEUVENT ENFIN DEMANDER.</span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <RevealSection key={useCase.department} delay={index * 100}>
              <div className="bg-white dark:bg-[#111] border-2 border-gray-200 dark:border-white/10 p-8 rounded-3xl h-full flex flex-col shadow-xl relative mt-8">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#111] dark:bg-[var(--brand-primary)] rounded-full flex items-center justify-center text-white border-4 border-gray-100 dark:border-[#0a0e0d] shadow-lg">
                  {useCase.icon}
                </div>
                <div className="pt-10 text-center flex-1">
                  <h3 className="font-black text-xl text-gray-900 dark:text-white uppercase tracking-widest mb-6">{useCase.department}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg font-medium italic leading-relaxed mb-8">
                    &quot;{useCase.query}&quot;
                  </p>
                </div>
                <div className="bg-[var(--brand-primary)]/10 py-3 rounded-xl text-center">
                  <span className="text-[var(--brand-primary)] font-black uppercase tracking-widest">{useCase.after}</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
