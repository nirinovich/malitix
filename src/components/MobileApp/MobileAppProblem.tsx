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
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">Il y a deux façons de créer une app.</h2>
        <p className="text-xl text-[var(--text-secondary)] mb-16 max-w-2xl">Nous ne faisons que la façon "Solide".</p>

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

        <div className="space-y-8 max-w-3xl">
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
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-16">Il y a deux façons de créer une app.</h2>

        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-red-500 mb-6">La façon "Fragile"</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex gap-3"><span className="text-red-500">✗</span> <span>Freelance isolé ou outil automatique</span></li>
                <li className="flex gap-3"><span className="text-red-500">✗</span> <span>Rapide au début seulement</span></li>
                <li className="flex gap-3"><span className="text-red-500">✗</span> <span>Vous ne possédez rien</span></li>
                <li className="flex gap-3"><span className="text-red-500">✗</span> <span>Ça rame avec beaucoup d\'utilisateurs</span></li>
              </ul>
            </div>
            <div className="bg-red-500/20 border-l-4 border-red-500 p-8 rounded-r-lg">
              <p className="text-[var(--text-primary)]">Le Piège classique : vous payez peu mais obtenez peu. Vous n\'êtes jamais propriétaire.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#2ca3bd]/20 border-l-4 border-[#2ca3bd] p-8 rounded-r-lg order-2 lg:order-1">
              <p className="text-[var(--text-primary)]">Ce que font les géants du monde. Vous gardez tout le contrôle et la performance.</p>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-[#2ca3bd] mb-6">La façon "Solide"</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex gap-3"><span className="text-[#2ca3bd]">✓</span> <span>Propriétaire du code à 100%</span></li>
                <li className="flex gap-3"><span className="text-[#2ca3bd]">✓</span> <span>Rapide, même avec des millions d\'utilisateurs</span></li>
                <li className="flex gap-3"><span className="text-[#2ca3bd]">✓</span> <span>Sécurisé (aucun pirate ne passe)</span></li>
                <li className="flex gap-3"><span className="text-[#2ca3bd]">✓</span> <span>Notre Méthode</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
