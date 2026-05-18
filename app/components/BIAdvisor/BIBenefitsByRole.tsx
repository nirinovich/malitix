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

export default function BIBenefitsByRole() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-white dark:bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase">
              CHAQUE MÉTIER Y GAGNE. <span className="text-[var(--brand-primary)]">CONCRÈTEMENT.</span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevealSection delay={100}>
            <div className="border-4 border-gray-900 dark:border-white p-8 rounded-3xl h-full">
              <h3 className="text-3xl font-black mb-6 text-gray-900 dark:text-white uppercase border-b-4 border-[var(--brand-primary)] inline-block pb-2">DAF / FINANCE</h3>
              <ul className="space-y-4 mb-8 text-gray-600 dark:text-gray-300 font-medium text-lg">
                <li>• Suivi de trésorerie prédictif</li>
                <li>• Optimisation du BFR</li>
                <li>• Analyse d&apos;écarts budgétaires</li>
              </ul>
              <div className="bg-gray-900 dark:bg-white text-white dark:text-[#111] p-4 rounded-xl font-black text-center uppercase tracking-wider">
                VISIBILITÉ CASH J+90
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="border-4 border-gray-900 dark:border-white p-8 rounded-3xl h-full">
              <h3 className="text-3xl font-black mb-6 text-gray-900 dark:text-white uppercase border-b-4 border-[var(--brand-primary)] inline-block pb-2">COMMERCE</h3>
              <ul className="space-y-4 mb-8 text-gray-600 dark:text-gray-300 font-medium text-lg">
                <li>• Rentabilité par client</li>
                <li>• Prévision des ventes sur pipeline</li>
                <li>• Détection d&apos;opportunités</li>
              </ul>
              <div className="bg-gray-900 dark:bg-white text-white dark:text-[#111] p-4 rounded-xl font-black text-center uppercase tracking-wider">
                +25% CONVERSION
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={300}>
            <div className="border-4 border-gray-900 dark:border-white p-8 rounded-3xl h-full">
              <h3 className="text-3xl font-black mb-6 text-gray-900 dark:text-white uppercase border-b-4 border-[var(--brand-primary)] inline-block pb-2">LOGISTIQUE</h3>
              <ul className="space-y-4 mb-8 text-gray-600 dark:text-gray-300 font-medium text-lg">
                <li>• Prévention des ruptures</li>
                <li>• Optimisation des stocks</li>
                <li>• Analyse de la chaîne en continu</li>
              </ul>
              <div className="bg-gray-900 dark:bg-white text-white dark:text-[#111] p-4 rounded-xl font-black text-center uppercase tracking-wider">
                -40% DE RUPTURES
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
