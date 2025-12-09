import { useABTestVariant } from '../../hooks/useABTest';

export default function MobileAppProblem() {
  const variant = useABTestVariant('problem');

  if (variant === 'A') {
    return <ProblemVariantA />;
  } else if (variant === 'B') {
    return <ProblemVariantB />;
  } else {
    return <ProblemVariantC />;
  }
}

function ProblemVariantA() {
  const problems = [
    {
      title: 'La façon "Fragile" (Le Piège)',
      items: [
        'Vous engagez un freelance isolé ou un outil automatique',
        'C\'est rapide au début',
        'Mais vous ne possédez rien',
        'Dès qu\'il y a beaucoup d\'utilisateurs, ça rame'
      ]
    },
    {
      title: 'La façon "Solide" (Notre Méthode)',
      items: [
        'C\'est ce que font les géants (Banques, Santé, Retail)',
        'Vous êtes propriétaire du code à 100%',
        'C\'est rapide, même avec des millions d\'utilisateurs',
        'C\'est sécurisé (aucun pirate ne passe)'
      ]
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">Il y a deux façons de créer une app.</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">Nous ne faisons que la façon "Solide".</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((section, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border ${idx === 0 ? 'border-red-500 bg-red-500/10' : 'border-[#2ca3bd] bg-[#2ca3bd]/10'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${idx === 0 ? 'text-red-500' : 'text-[#2ca3bd]'}`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className={`text-xl font-bold flex-shrink-0 ${idx === 0 ? 'text-red-500' : 'text-[#2ca3bd]'}`}>
                      {idx === 0 ? '✗' : '✓'}
                    </span>
                    <span className="text-[var(--text-primary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemVariantB() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-16 text-center">Il y a deux façons de créer une app.</h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <h3 className="text-2xl font-bold text-red-500">La façon "Fragile" (Le Piège)</h3>
            </div>
            <p className="text-[var(--text-primary)] ml-16">Vous engagez un freelance isolé ou utilisez un outil automatique. C\'est rapide au début mais vous ne possédez rien. Dès qu\'il y a beaucoup d\'utilisateurs, ça rame.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2ca3bd] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <h3 className="text-2xl font-bold text-[#2ca3bd]">La façon "Solide" (Notre Méthode)</h3>
            </div>
            <p className="text-[var(--text-primary)] ml-16">C\'est ce que font les géants (Banques, Santé, Retail). Vous êtes propriétaire du code à 100%. C\'est rapide, même avec des millions d\'utilisateurs. C\'est sécurisé (aucun pirate ne passe).</p>
          </div>
        </div>

        <p className="text-center text-lg font-bold text-[#2ca3bd] mt-16">Nous ne faisons que la façon "Solide".</p>
      </div>
    </section>
  );
}

function ProblemVariantC() {
  return (
    <section className="py-24 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500 opacity-5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2ca3bd] opacity-5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">Il y a deux façons de créer une app.</h2>
          <p className="text-xl text-[var(--text-secondary)]">Nous ne faisons que la façon "Solide".</p>
        </div>

        <div className="space-y-12">
          {/* Fragile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[var(--bg-secondary)] border-2 border-red-500/30 rounded-2xl p-8 hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500 rounded-xl p-3">
                  <span className="text-white text-2xl font-bold">✗</span>
                </div>
                <h3 className="text-3xl font-bold text-red-500">La façon "Fragile"</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 group-hover:scale-150 transition-transform"></div>
                  <p className="text-[var(--text-primary)] text-lg">Freelance isolé ou outil automatique</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 group-hover:scale-150 transition-transform"></div>
                  <p className="text-[var(--text-primary)] text-lg">Rapide au début seulement</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 group-hover:scale-150 transition-transform"></div>
                  <p className="text-[var(--text-primary)] text-lg">Vous ne possédez rien</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 group-hover:scale-150 transition-transform"></div>
                  <p className="text-[var(--text-primary)] text-lg">Ça rame avec beaucoup d'utilisateurs</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-500 opacity-10 rounded-full"></div>
              <div className="relative z-10">
                <div className="bg-red-500/30 rounded-lg px-4 py-2 inline-block mb-4">
                  <span className="text-red-500 font-bold text-sm uppercase tracking-wide">Le Piège</span>
                </div>
                <p className="text-[var(--text-primary)] text-xl leading-relaxed mb-6">Le Piège classique : vous payez peu mais obtenez peu. Vous n'êtes jamais propriétaire.</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-red-500/30">
                  <div>
                    <div className="text-3xl font-bold text-red-500">70%</div>
                    <div className="text-sm text-[var(--text-secondary)]">Abandon après 3 mois</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500">0%</div>
                    <div className="text-sm text-[var(--text-secondary)]">Propriété du code</div>
                  </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/20 border-2 border-[#2ca3bd] rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden order-2 lg:order-1">
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-[#2ca3bd] opacity-10 rounded-full"></div>
              <div className="relative z-10">
                <div className="bg-[#2ca3bd]/30 rounded-lg px-4 py-2 inline-block mb-4">
                  <span className="text-[#2ca3bd] font-bold text-sm uppercase tracking-wide">La Méthode</span>
                </div>
                <p className="text-[var(--text-primary)] text-xl leading-relaxed mb-6">Ce que font les géants du monde. Vous gardez tout le contrôle et la performance.</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2ca3bd]/30">
                  <div>
                    <div className="text-3xl font-bold text-[#2ca3bd]">100%</div>
                    <div className="text-sm text-[var(--text-secondary)]">Propriété garantie</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2ca3bd]">99.9%</div>
                    <div className="text-sm text-[var(--text-secondary)]">Disponibilité</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-secondary)] border-2 border-[#2ca3bd]/30 rounded-2xl p-8 hover:border-[#2ca3bd] transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ca3bd]/10 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] rounded-xl p-3">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-3xl font-bold text-[#2ca3bd]">La façon "Solide"</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-2 group-hover:scale-150 transition-transform"></div>
                  <p className="text-[var(--text-primary)] text-lg">Propriétaire du code à 100%</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-2 group-hover:scale-150 transition-transform"></div>
                  <p className="text-[var(--text-primary)] text-lg">Rapide, même avec des millions d'utilisateurs</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-2 group-hover:scale-150 transition-transform"></div>
                  <p className="text-[var(--text-primary)] text-lg">Sécurisé (aucun pirate ne passe)</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-2 group-hover:scale-150 transition-transform"></div>
                  <p className="text-[var(--text-primary)] text-lg font-semibold">Notre Méthode</p>
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
}
