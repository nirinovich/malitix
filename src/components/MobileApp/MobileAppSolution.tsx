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

// =============================================
// VARIANT A: Enhanced Feature Cards with Metrics
// =============================================
function SolutionVariantA() {
  const solutions = [
    {
      title: 'Zéro Bug, Vitesse Max',
      description: 'Vos utilisateurs n\'attendent pas. Votre app doit répondre instantanément. Nous utilisons les technologies les plus robustes pour que ça file droit.',
      icon: Zap,
      features: ['Réponse < 100ms', 'Native ou 5G', 'Optimisé pour millions d\'users']
    },
    {
      title: 'La Loi est votre Amie',
      description: 'De nouvelles lois arrivent (DORA/RGAA 2025). Si votre app n\'est pas sécurisée, vous prenez une amende. Nous blindons votre app.',
      icon: Lock,
      features: ['Conformité DORA', 'Accessibilité RGAA', 'Audit de sécurité inclus']
    },
    {
      title: 'Spécialistes, pas Généralistes',
      description: 'Nous connaissons votre métier. Santé, Finance, Commerce - nous avons déjà résolu vos problèmes.',
      icon: CheckCircle2,
      features: ['Expertise métier', 'Cas d\'usage validés', 'Best practices intégrées']
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2ca3bd] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">Ce que vous obtenez (L'Offre)</h2>
          <p className="text-2xl text-[#2ca3bd] font-semibold mb-4">Nous ne sommes pas là pour "coder".</p>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">Nous sommes là pour construire votre actif.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div key={idx} className="group bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] rounded-2xl p-8 hover:border-[#2ca3bd] hover:shadow-2xl hover:shadow-[#2ca3bd]/20 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{solution.title}</h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2 pt-4 border-t border-[var(--border-primary)]">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2ca3bd]"></div>
                      <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-16 bg-gradient-to-r from-[#2ca3bd]/10 to-[#1e7a8f]/10 border-l-4 border-[#2ca3bd] rounded-r-2xl p-8 text-center">
          <p className="text-lg text-[var(--text-primary)] font-semibold">
            Technologies robustes. Conformité garantie. Expertise métier validée.
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Tabbed Interface with Metrics
// =============================================
function SolutionVariantB() {
  const [activeTab, setActiveTab] = useState('speed');

  const tabs = {
    speed: {
      label: 'Zéro Bug, Vitesse Max',
      icon: Zap,
      description: 'Vos utilisateurs n\'attendent pas. Votre app doit répondre instantanément. Nous utilisons les technologies les plus robustes (Native, 5G) pour que ça file droit.',
      metrics: [
        { value: '< 100ms', label: 'Temps de réponse' },
        { value: '99.9%', label: 'Uptime garanti' },
        { value: '10M+', label: 'Users supportés' }
      ]
    },
    security: {
      label: 'La Loi est votre Amie',
      icon: Lock,
      description: 'De nouvelles lois arrivent en 2025 (DORA/RGAA). Si votre app n\'est pas sécurisée ou accessible, vous prenez une amende. Nous blindons votre app pour que vous dormiez tranquille.',
      metrics: [
        { value: 'DORA', label: 'Conformité 2025' },
        { value: 'RGAA', label: 'Accessibilité' },
        { value: '0', label: 'Faille de sécurité' }
      ]
    },
    specialist: {
      label: 'Spécialistes, pas Généralistes',
      icon: CheckCircle2,
      description: 'Nous connaissons votre métier. Que vous soyez dans la Santé, la Finance ou le Commerce, nous avons déjà résolu vos problèmes.',
      metrics: [
        { value: 'Santé', label: 'Apps médicales' },
        { value: 'Finance', label: 'FinTech sécurisée' },
        { value: 'Retail', label: 'E-commerce' }
      ]
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">Ce que vous obtenez (L'Offre)</h2>
          <p className="text-xl text-[#2ca3bd] font-semibold">Nous ne sommes pas là pour "coder". Nous sommes là pour construire votre actif.</p>
        </div>

        <div className="flex gap-4 mb-8 border-b-2 border-[var(--border-primary)] overflow-x-auto justify-center">
          {Object.entries(tabs).map(([key, tab]) => {
            const Icon = tab.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-6 py-4 font-semibold transition-all whitespace-nowrap border-b-4 ${
                  activeTab === key
                    ? 'text-[#2ca3bd] border-[#2ca3bd]'
                    : 'text-[var(--text-secondary)] border-transparent hover:text-[var(--text-primary)]'
                }`}
              >
                <Icon size={20} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-primary)] rounded-2xl p-8 md:p-12">
          <p className="text-lg text-[var(--text-primary)] leading-relaxed mb-8">
            {tabs[activeTab as keyof typeof tabs].description}
          </p>

          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[var(--border-primary)]">
            {tabs[activeTab as keyof typeof tabs].metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-[#2ca3bd] mb-2">{metric.value}</div>
                <div className="text-sm text-[var(--text-secondary)]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Side-by-Side Comparison with Impact
// =============================================
function SolutionVariantC() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">Ce que vous obtenez (L'Offre)</h2>
          <p className="text-2xl text-[#2ca3bd] font-semibold mb-4">Nous ne sommes pas là pour "coder".</p>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">Nous sommes là pour construire votre actif.</p>
        </div>

        {/* Visual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - What You Get */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/20 border-2 border-[#2ca3bd] rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#2ca3bd] rounded-lg p-3">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Zéro Bug, Vitesse Max</h3>
                  <p className="text-[var(--text-secondary)] mb-4">Vos utilisateurs n'attendent pas. Votre app doit répondre instantanément.</p>
                  <div className="flex gap-4 text-sm">
                    <div className="bg-[var(--bg-primary)] px-3 py-1 rounded-full border border-[#2ca3bd]">
                      <span className="text-[#2ca3bd] font-semibold">Native/5G</span>
                    </div>
                    <div className="bg-[var(--bg-primary)] px-3 py-1 rounded-full border border-[#2ca3bd]">
                      <span className="text-[#2ca3bd] font-semibold">Millions d'users</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/20 border-2 border-[#2ca3bd] rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#2ca3bd] rounded-lg p-3">
                  <Lock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">La Loi est votre Amie</h3>
                  <p className="text-[var(--text-secondary)] mb-4">Nouvelles lois 2025 (DORA/RGAA). Nous blindons votre app pour que vous dormiez tranquille.</p>
                  <div className="flex gap-4 text-sm">
                    <div className="bg-[var(--bg-primary)] px-3 py-1 rounded-full border border-[#2ca3bd]">
                      <span className="text-[#2ca3bd] font-semibold">DORA</span>
                    </div>
                    <div className="bg-[var(--bg-primary)] px-3 py-1 rounded-full border border-[#2ca3bd]">
                      <span className="text-[#2ca3bd] font-semibold">RGAA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/20 border-2 border-[#2ca3bd] rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#2ca3bd] rounded-lg p-3">
                  <CheckCircle2 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Spécialistes, pas Généralistes</h3>
                  <p className="text-[var(--text-secondary)] mb-4">Nous connaissons votre métier. Nous avons déjà résolu vos problèmes.</p>
                  <div className="flex gap-4 text-sm">
                    <div className="bg-[var(--bg-primary)] px-3 py-1 rounded-full border border-[#2ca3bd]">
                      <span className="text-[#2ca3bd] font-semibold">Santé</span>
                    </div>
                    <div className="bg-[var(--bg-primary)] px-3 py-1 rounded-full border border-[#2ca3bd]">
                      <span className="text-[#2ca3bd] font-semibold">Finance</span>
                    </div>
                    <div className="bg-[var(--bg-primary)] px-3 py-1 rounded-full border border-[#2ca3bd]">
                      <span className="text-[#2ca3bd] font-semibold">Retail</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Why It Matters */}
          <div className="bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Pourquoi c'est important ?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <p className="text-[var(--text-secondary)]"><span className="font-semibold text-[var(--text-primary)]">Les apps lentes perdent 70% de leurs users</span> dans les 3 premiers mois.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <p className="text-[var(--text-secondary)]"><span className="font-semibold text-[var(--text-primary)]">Les amendes DORA peuvent atteindre 10M€</span> ou 5% du CA annuel.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <p className="text-[var(--text-secondary)]"><span className="font-semibold text-[var(--text-primary)]">Les généralistes font 3x plus d'erreurs</span> que les spécialistes métier.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] rounded-2xl p-8 text-center">
          <p className="text-white text-2xl font-bold">
            Technologie robuste + Conformité légale + Expertise métier = Votre actif protégé
          </p>
        </div>
      </div>
    </section>
  );
}
