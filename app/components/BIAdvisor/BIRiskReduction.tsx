import { Shield } from "lucide-react";
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

export default function BIRiskReduction() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-[#0B0D17] text-white text-center">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <Shield size={64} className="text-[var(--brand-primary)] mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase">
            CONÇU POUR ÉLIMINER <span className="text-[var(--brand-primary)]">CHAQUE OBJECTION.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
            <div className="bg-[#1A1C25] p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-black mb-4 uppercase text-[var(--brand-primary)]">1. Zéro Compétence</h3>
              <p className="text-gray-400 font-medium leading-relaxed">L&apos;interface comprend votre langue métier. Du DAF au commercial, tout le monde peut piloter sans SQL ni Excel.</p>
            </div>
            <div className="bg-[#1A1C25] p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-black mb-4 uppercase text-[var(--brand-primary)]">2. Rapide</h3>
              <p className="text-gray-400 font-medium leading-relaxed">Connexion à votre ERP et configuration en 2 semaines. Pas de projet IT interminable de 6 mois.</p>
            </div>
            <div className="bg-[#1A1C25] p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-black mb-4 uppercase text-[var(--brand-primary)]">3. Sécurisé</h3>
              <p className="text-gray-400 font-medium leading-relaxed">Lecture seule. Vos données ne sont jamais modifiées. Chiffrement E2E complet.</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
