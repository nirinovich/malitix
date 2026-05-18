import { CheckCircle, XCircle } from "lucide-react";
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

export default function BIBeforeAfter() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-[#0B0D17] text-white">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <div className="inline-block bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6 border border-[var(--brand-primary)]/50">LA SOLUTION</div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">Avant vs. <span className="text-[var(--brand-primary)]">Avec BI Advisor</span></h2>
          </div>
        </RevealSection>
        <RevealSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-[#1A1C25] rounded-3xl overflow-hidden bg-[#0a0e0d]">
            <div className="p-10 sm:p-12 border-b md:border-b-0 md:border-r border-[#1A1C25]">
              <h3 className="text-3xl font-black text-gray-500 mb-10 uppercase tracking-widest text-center">Avant</h3>
              <div className="space-y-6">
                {["Reporting en J+15 minimum","Export Excel manuel et chronophage","Dépendance totale envers l'IT","Zéro anticipation, zéro prédiction","Tableaux statiques incompréhensibles"].map((item) => (
                  <div key={item} className="flex items-start gap-4"><XCircle size={24} className="text-red-500 flex-shrink-0" /><span className="text-gray-400 font-bold text-lg">{item}</span></div>
                ))}
              </div>
            </div>
            <div className="p-10 sm:p-12 bg-[var(--brand-primary)]/5 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[var(--brand-primary)]" />
              <h3 className="text-3xl font-black text-[var(--brand-primary)] mb-10 uppercase tracking-widest text-center">BI Advisor</h3>
              <div className="space-y-6">
                {["Réponses en temps réel, en secondes","Questions en langage naturel","Autonomie totale de chaque métier","Prévisions et alertes proactives","Graphiques générés automatiquement"].map((item) => (
                  <div key={item} className="flex items-start gap-4"><CheckCircle size={24} className="text-[var(--brand-primary)] flex-shrink-0" /><span className="text-white font-bold text-lg">{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
