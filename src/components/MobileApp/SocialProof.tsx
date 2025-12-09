import React from 'react';
import { Building2, TrendingUp, Award } from 'lucide-react';

interface SocialProofProps {}

const SocialProof: React.FC<SocialProofProps> = React.memo(() => {
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
});

SocialProof.displayName = 'SocialProof';

export default SocialProof;
