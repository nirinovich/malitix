import React from 'react';

const MobileAppProblem: React.FC = React.memo(() => {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500 opacity-5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2ca3bd] opacity-5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 px-2">Il y a deux façons de créer une app.</h2>
            <div className="mt-3 sm:mt-3 text-center px-4">
            <p className="text-xl sm:text-2xl font-bold text-[var(--text-secondary)]">
                Nous ne faisons que la façon <span className="text-[#2ca3bd] border-b-2 sm:border-b-4 border-[#2ca3bd] pb-1">"Solide"</span>.
            </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 items-center">
          {/* Fragile Section - Left Column */}
          <div className="lg:col-span-2 bg-gradient-to-br from-red-500/15 to-red-600/15 border-2 border-red-400/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute -right-12 -top-12 w-32 h-32 sm:w-40 sm:h-40 bg-red-500 opacity-5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-3 flex-shrink-0">
                  <span className="text-white text-2xl font-bold">✗</span>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-red-600">La façon "Fragile"</h3>
                  <p className="text-xs text-red-500 font-bold uppercase tracking-widest mt-1">Le Piège</p>
                </div>
              </div>
              <p className="text-[var(--text-primary)] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-medium">Le Piège classique : vous payez peu mais obtenez peu. Vous n'êtes jamais propriétaire.</p>
              <div className="grid grid-cols-1 gap-4 sm:gap-5 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 group">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 to-red-600 mt-1.5 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm leading-relaxed">Freelance isolé ou outil automatique</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 to-red-600 mt-1.5 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm leading-relaxed">Rapide au début seulement</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 to-red-600 mt-1.5 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm leading-relaxed">Vous ne possédez rien</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 to-red-600 mt-1.5 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm leading-relaxed">Ça rame avec beaucoup d'utilisateurs</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6 sm:pt-8 border-t border-red-400/20">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-red-600">70%</div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] font-semibold mt-2">Abandon après 3 mois</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-red-600">0%</div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] font-semibold mt-2">Propriété du code</div>
                </div>
              </div>
            </div>
          </div>

          {/* VS Divider - Middle Column */}
          <div className="flex items-center justify-center lg:col-span-1">
            <div className="hidden lg:block border-2 border-[var(--border-primary)]/30 bg-[var(--bg-secondary)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-black text-2xl shadow-lg">
              VS
            </div>
            <div className="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-[var(--border-primary)]/50 to-transparent"></div>
          </div>

          {/* Solide Section - Right Column */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#2ca3bd]/15 to-[#1e7a8f]/15 border-2 border-[#2ca3bd]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute -left-12 -top-12 w-32 h-32 sm:w-40 sm:h-40 bg-[#2ca3bd] opacity-5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] rounded-lg p-3 flex-shrink-0">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2ca3bd]">La façon "Solide"</h3>
                  <p className="text-xs text-[#2ca3bd] font-bold uppercase tracking-widest mt-1">La Méthode</p>
                </div>
              </div>
              <p className="text-[var(--text-primary)] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-medium">Ce que font les géants du monde. Vous gardez tout le contrôle et la performance.</p>
            <div className="grid grid-cols-1 gap-4 sm:gap-5 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 group">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] mt-1.5 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm leading-relaxed">Propriétaire du code à 100%</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] mt-1.5 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm leading-relaxed">Rapide, même avec des millions d'utilisateurs</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] mt-1.5 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm leading-relaxed">Sécurisé (aucun pirate ne passe)</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] mt-1.5 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm leading-relaxed font-semibold">Notre Méthode</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6 sm:pt-8 border-t border-[#2ca3bd]/20">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-[#2ca3bd]">100%</div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] font-semibold mt-2">Propriété garantie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-[#2ca3bd]">99.9%</div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] font-semibold mt-2">Disponibilité</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

MobileAppProblem.displayName = 'MobileAppProblem';

export default MobileAppProblem;
