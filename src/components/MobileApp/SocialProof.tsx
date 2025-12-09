import { Building2, TrendingUp, Award } from 'lucide-react';
import { useABTestVariant } from '../../hooks/useABTest';

export default function SocialProof() {
  const variant = useABTestVariant('proof');

  if (variant === 'A') {
    return <ProofVariantA />;
  } else if (variant === 'B') {
    return <ProofVariantB />;
  } else {
    return <ProofVariantC />;
  }
}

// =============================================
// VARIANT A: Logo Grid with Statement
// =============================================
function ProofVariantA() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-8">
          La Preuve
        </h2>
        <p className="text-2xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto">
          Nous travaillons avec les plus grands.
        </p>

        {/* Placeholder for Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          {[
            { type: 'Grands Comptes', icon: Building2 },
            { type: 'ETI', icon: TrendingUp },
            { type: 'Startups Financées', icon: Award },
            { type: 'Scale-ups', icon: TrendingUp },
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl p-8 flex flex-col items-center justify-center hover:border-[#2ca3bd] transition-all">
              <item.icon className="text-[#2ca3bd] mb-3" size={40} />
              <p className="text-[var(--text-primary)] font-semibold">{item.type}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#2ca3bd]/20 to-[#1e7a8f]/20 border-l-4 border-[#2ca3bd] p-8 rounded-r-2xl max-w-3xl mx-auto">
          <p className="text-xl text-[var(--text-primary)] font-semibold">
            Nous ne prenons pas de projets "bricolés". Nous cherchons des partenaires sérieux qui veulent construire pour durer.
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Stats-Focused with Client Types
// =============================================
function ProofVariantB() {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-16 text-center">
          Ils Nous Font Confiance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Building2 className="mx-auto text-[#2ca3bd] mb-4" size={48} />
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Grands Comptes</h3>
            <p className="text-[var(--text-secondary)]">Banques, Santé, Retail</p>
          </div>
          <div className="text-center">
            <TrendingUp className="mx-auto text-[#2ca3bd] mb-4" size={48} />
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2">ETI</h3>
            <p className="text-[var(--text-secondary)]">Entreprises en croissance</p>
          </div>
          <div className="text-center">
            <Award className="mx-auto text-[#2ca3bd] mb-4" size={48} />
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Startups</h3>
            <p className="text-[var(--text-secondary)]">Financées et en scale-up</p>
          </div>
        </div>

        <div className="bg-[var(--bg-secondary)] border-2 border-[#2ca3bd] rounded-2xl p-12 text-center">
          <p className="text-2xl font-bold text-[var(--text-primary)] mb-4">
            Notre engagement
          </p>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Nous ne prenons pas de projets "bricolés". Nous cherchons des partenaires sérieux qui veulent construire pour durer.
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Minimal Statement
// =============================================
function ProofVariantC() {
  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-12">
          Nous travaillons avec les plus grands.
        </h2>

        <div className="grid grid-cols-3 gap-6 mb-16">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl p-6 hover:border-[#2ca3bd] transition-all">
            <p className="text-xl font-semibold text-[var(--text-primary)]">Grands Comptes</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl p-6 hover:border-[#2ca3bd] transition-all">
            <p className="text-xl font-semibold text-[var(--text-primary)]">ETI</p>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl p-6 hover:border-[#2ca3bd] transition-all">
            <p className="text-xl font-semibold text-[var(--text-primary)]">Startups Financées</p>
          </div>
        </div>

        <div className="border-t-4 border-[#2ca3bd] pt-12">
          <p className="text-2xl text-[var(--text-primary)] font-bold">
            Nous ne prenons pas de projets "bricolés".
          </p>
          <p className="text-xl text-[var(--text-secondary)] mt-4">
            Nous cherchons des partenaires sérieux qui veulent construire pour durer.
          </p>
        </div>
      </div>
    </section>
  );
}
