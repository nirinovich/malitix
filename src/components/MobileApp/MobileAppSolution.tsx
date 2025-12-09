import { useState } from 'react';
import { CheckCircle2, Zap, Lock } from 'lucide-react';
import { useABTestVariant } from '../../hooks/useABTest';

export default function MobileAppSolution() {
  const variant = useABTestVariant('solution');

  if (variant === 'A') {
    return <SolutionVariantA />;
  } else if (variant === 'B') {
    return <SolutionVariantB />;
  } else {
    return <SolutionVariantC />;
  }
}

function SolutionVariantA() {
  const solutions = [
    {
      title: 'Zéro Bug, Vitesse Max',
      description: 'Vos utilisateurs n\'attendent pas. Votre app doit répondre instantanément. Nous utilisons les technologies les plus robustes pour que ça file droit.',
      icon: Zap
    },
    {
      title: 'La Loi est votre Amie',
      description: 'De nouvelles lois arrivent (DORA/RGAA 2025). Si votre app n\'est pas sécurisée, vous prenez une amende. Nous blindons votre app.',
      icon: Lock
    },
    {
      title: 'Spécialistes, pas Généralistes',
      description: 'Nous connaissons votre métier. Santé, Finance, Commerce - nous avons déjà résolu vos problèmes.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">Ce que vous obtenez (L\'Offre)</h2>
        <p className="text-xl text-[var(--text-secondary)] mb-16 max-w-2xl">Nous ne sommes pas là pour "coder". Nous sommes là pour construire votre actif.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div key={idx} className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-8 hover:border-[#2ca3bd] transition-all">
                <Icon className="text-[#2ca3bd] mb-4" size={32} />
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{solution.title}</h3>
                <p className="text-[var(--text-secondary)]">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SolutionVariantB() {
  const [activeTab, setActiveTab] = useState('speed');

  const tabs = {
    speed: {
      label: 'Zéro Bug, Vitesse Max',
      description: 'Vos utilisateurs n\'attendent pas. Votre app doit répondre instantanément. Nous utilisons les technologies les plus robustes (Native, 5G) pour que ça file droit.'
    },
    security: {
      label: 'La Loi est votre Amie',
      description: 'De nouvelles lois arrivent en 2025 (DORA/RGAA). Si votre app n\'est pas sécurisée ou accessible, vous prenez une amende. Nous blindons votre app pour que vous dormiez tranquille.'
    },
    specialist: {
      label: 'Spécialistes, pas Généralistes',
      description: 'Nous connaissons votre métier. Que vous soyez dans la Santé, la Finance ou le Commerce, nous avons déjà résolu vos problèmes.'
    }
  };

  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-16 text-center">Ce que vous obtenez (L\'Offre)</h2>

        <div className="flex gap-4 mb-12 border-b border-[var(--border-primary)] flex-wrap">
          {Object.entries(tabs).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-4 font-semibold transition-colors border-b-2 ${
                activeTab === key
                  ? 'text-[#2ca3bd] border-[#2ca3bd]'
                  : 'text-[var(--text-secondary)] border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl">
          <p className="text-lg text-[var(--text-primary)] leading-relaxed">
            {tabs[activeTab as keyof typeof tabs].description}
          </p>
        </div>
      </div>
    </section>
  );
}

function SolutionVariantC() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 text-center">Ce que vous obtenez (L\'Offre)</h2>
        <p className="text-xl text-[var(--text-secondary)] mb-16 text-center max-w-2xl mx-auto">Nous ne sommes pas là pour "coder". Nous sommes là pour construire votre actif.</p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[var(--border-primary)]">
                <th className="text-left py-4 px-6 font-bold text-[var(--text-primary)]">Aspect</th>
                <th className="text-center py-4 px-6 font-bold text-red-500">La Fragile</th>
                <th className="text-center py-4 px-6 font-bold text-[#2ca3bd]">Notre Méthode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--border-primary)]">
                <td className="py-4 px-6 text-[var(--text-primary)]">Vitesse</td>
                <td className="py-4 px-6 text-center"><span className="text-red-500">⚠ Ralentit rapidement</span></td>
                <td className="py-4 px-6 text-center"><span className="text-[#2ca3bd]">✓ Des millions d\'users</span></td>
              </tr>
              <tr className="border-b border-[var(--border-primary)]">
                <td className="py-4 px-6 text-[var(--text-primary)]">Sécurité</td>
                <td className="py-4 px-6 text-center"><span className="text-red-500">✗ Risque élevé</span></td>
                <td className="py-4 px-6 text-center"><span className="text-[#2ca3bd]">✓ Bank-grade</span></td>
              </tr>
              <tr className="border-b border-[var(--border-primary)]">
                <td className="py-4 px-6 text-[var(--text-primary)]">Propriété</td>
                <td className="py-4 px-6 text-center"><span className="text-red-500">✗ Vous ne possédez rien</span></td>
                <td className="py-4 px-6 text-center"><span className="text-[#2ca3bd]">✓ 100% votre code</span></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-[var(--text-primary)]">Conformité</td>
                <td className="py-4 px-6 text-center"><span className="text-red-500">✗ Risque d\'amende</span></td>
                <td className="py-4 px-6 text-center"><span className="text-[#2ca3bd]">✓ DORA/RGAA ok</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
