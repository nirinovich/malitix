import React from 'react';

interface ProblemVariantCProps {}

const MobileAppProblem: React.FC<ProblemVariantCProps> = React.memo(() => {
  return (
    <section className="py-24 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500 opacity-5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2ca3bd] opacity-5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">Il y a deux façons de créer une app.</h2>
        </div>

        <div className="space-y-8">
          {/* Fragile Section */}
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-500 opacity-10 rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-500 rounded-xl p-3">
                  <span className="text-white text-2xl font-bold">✗</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-500">La façon "Fragile"</h3>
                  <p className="text-xs text-red-500 font-bold uppercase tracking-wide">Le Piège</p>
                </div>
              </div>
              <p className="text-[var(--text-primary)] text-base leading-relaxed mb-4">Le Piège classique : vous payez peu mais obtenez peu. Vous n'êtes jamais propriétaire.</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-2 group">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-1 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm">Freelance isolé ou outil automatique</p>
                </div>
                <div className="flex items-start gap-2 group">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-1 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm">Rapide au début seulement</p>
                </div>
                <div className="flex items-start gap-2 group">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-1 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm">Vous ne possédez rien</p>
                </div>
                <div className="flex items-start gap-2 group">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-1 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm">Ça rame avec beaucoup d'utilisateurs</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-red-500/30">
                <div>
                  <div className="text-2xl font-bold text-red-500">70%</div>
                  <div className="text-xs text-[var(--text-secondary)]">Abandon après 3 mois</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-500">0%</div>
                  <div className="text-xs text-[var(--text-secondary)]">Propriété du code</div>
                </div>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="flex items-center justify-center">
            <div className="border-2 border-[var(--border-primary)] bg-[var(--bg-secondary)] text-[var(--text-primary)] px-8 py-3 rounded-lg font-bold text-xl">
              VS
            </div>
          </div>

          {/* Solide Section */}
          <div className="bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/20 border-2 border-[#2ca3bd] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-[#2ca3bd] opacity-10 rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] rounded-xl p-3">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2ca3bd]">La façon "Solide"</h3>
                  <p className="text-xs text-[#2ca3bd] font-bold uppercase tracking-wide">La Méthode</p>
                </div>
              </div>
              <p className="text-[var(--text-primary)] text-base leading-relaxed mb-4">Ce que font les géants du monde. Vous gardez tout le contrôle et la performance.</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-2 group">
                  <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-1 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm">Propriétaire du code à 100%</p>
                </div>
                <div className="flex items-start gap-2 group">
                  <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-1 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm">Rapide, même avec des millions d'utilisateurs</p>
                </div>
                <div className="flex items-start gap-2 group">
                  <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-1 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm">Sécurisé (aucun pirate ne passe)</p>
                </div>
                <div className="flex items-start gap-2 group">
                  <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-1 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                  <p className="text-[var(--text-primary)] text-sm font-semibold">Notre Méthode</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#2ca3bd]/30">
                <div>
                  <div className="text-2xl font-bold text-[#2ca3bd]">100%</div>
                  <div className="text-xs text-[var(--text-secondary)]">Propriété garantie</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2ca3bd]">99.9%</div>
                  <div className="text-xs text-[var(--text-secondary)]">Disponibilité</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-[var(--text-primary)]">
            Nous ne faisons que la façon <span className="text-[#2ca3bd] border-b-4 border-[#2ca3bd] pb-1">"Solide"</span>.
          </p>
        </div>
      </div>
    </section>
  );
});

MobileAppProblem.displayName = 'MobileAppProblem';

export default MobileAppProblem;
