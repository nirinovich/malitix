import React from 'react';
import { Building2, TrendingUp, Award } from 'lucide-react';

const SocialProof: React.FC = React.memo(() => {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg-primary)] relative">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2ca3bd]/50 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-12 sm:mb-16 text-center px-2">
          Ils Nous Font Confiance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center">
            <Building2 className="mx-auto text-[#2ca3bd] mb-3 sm:mb-4" size={40} />
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-1 sm:mb-2">Grands Comptes</h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">Banques, Santé, Retail</p>
          </div>
          <div className="text-center">
            <TrendingUp className="mx-auto text-[#2ca3bd] mb-3 sm:mb-4" size={40} />
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-1 sm:mb-2">ETI</h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">Entreprises en croissance</p>
          </div>
          <div className="text-center">
            <Award className="mx-auto text-[#2ca3bd] mb-3 sm:mb-4" size={40} />
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-1 sm:mb-2">Startups</h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">Financées et en scale-up</p>
          </div>
        </div>

        <div className="bg-[var(--bg-secondary)] border-2 border-[#2ca3bd] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
            Notre engagement
          </p>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Nous ne prenons pas de projets "bricolés". Nous cherchons des partenaires sérieux qui veulent construire pour durer.
          </p>
        </div>
      </div>
    </section>
  );
});

SocialProof.displayName = 'SocialProof';

export default SocialProof;
