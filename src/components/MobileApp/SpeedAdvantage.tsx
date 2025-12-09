import React from 'react';

interface SpeedAdvantageProps {}

const SpeedAdvantage: React.FC<SpeedAdvantageProps> = React.memo(() => {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg-primary)] border-t border-[var(--border-primary)]/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 px-2">
            Votre Arme Secrète
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] px-2">
            Le problème n'est pas le budget. <span className="font-bold text-[#2ca3bd]">C'est la vitesse.</span>
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-[var(--bg-secondary)] border-l-4 border-red-500 rounded-r-lg sm:rounded-r-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
          <p className="text-base sm:text-lg text-[var(--text-primary)]">
            En France : <span className="font-bold text-red-500">6 mois</span> pour recruter un développeur, <span className="font-bold text-red-500">12 mois</span> pour une équipe.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="text-center p-4 sm:p-6 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg sm:rounded-xl hover:border-[#2ca3bd] transition-all">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💪</div>
            <h4 className="font-bold text-[var(--text-primary)] mb-1 sm:mb-2 text-sm sm:text-base">Une Armée</h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">Équipe complète instantanée</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg sm:rounded-xl hover:border-[#2ca3bd] transition-all">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">⚡</div>
            <h4 className="font-bold text-[var(--text-primary)] mb-1 sm:mb-2 text-sm sm:text-base">Zéro Latence</h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">On code dès mardi</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg sm:rounded-xl hover:border-[#2ca3bd] transition-all">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎯</div>
            <h4 className="font-bold text-[var(--text-primary)] mb-1 sm:mb-2 text-sm sm:text-base">Focus Total</h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">100% dédiés à vous</p>
          </div>
        </div>

        {/* Result */}
        <div className="text-center">
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-3 sm:mb-4">Résultat :</p>
          <div className="inline-flex flex-wrap items-baseline justify-center gap-2 sm:gap-3">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2ca3bd]">3 mois</span>
            <span className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)]">pas</span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 line-through opacity-50">12</span>
          </div>
        </div>
      </div>
    </section>
  );
});

SpeedAdvantage.displayName = 'SpeedAdvantage';

export default SpeedAdvantage;
