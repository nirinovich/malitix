import { TrendingDown, Server, Lock, Database, Wrench } from 'lucide-react';

// Variant A: Card Grid with Icons
export default function SIRefonteProblem() {
  const problems = [
    {
      icon: Server,
      title: 'Dix à vingt ans de dette technique',
      description: 'Ralentissements constants, dépendances critiques, coûts de maintenance explosifs.',
      impact: '→ Votre SI est devenu un frein à l\'innovation',
      color: '#ef4444'
    },
    {
      icon: TrendingDown,
      title: 'Cloud hybride non maîtrisé',
      description: 'Infrastructure instable, surcoûts récurrents de 20 à 40%.',
      impact: '→ Budget IT hors contrôle',
      color: '#f97316'
    },
    {
      icon: Lock,
      title: 'Explosion des risques cyber',
      description: 'Surface d\'attaque élevée, manque de visibilité, conformité incertaine.',
      impact: '→ Chaque incident peut être critique',
      color: '#dc2626'
    },
    {
      icon: Database,
      title: 'Données dispersées et peu fiables',
      description: 'Silos métier, qualité douteuse, impossible d\'exploiter IA & analytics.',
      impact: '→ Pas de data-driven possible',
      color: '#ea580c'
    },
    {
      icon: Wrench,
      title: 'Process IT trop manuels',
      description: 'Incidents récurrents, lenteur opérationnelle, charge écrasante.',
      impact: '→ Vos équipes IT sont débordées',
      color: '#f59e0b'
    },
  ];

  return (
    <section id="problem-sirefonte" className="relative py-24 overflow-hidden bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-[var(--text-primary)]">
            Pourquoi moderniser{' '}
            <span className="text-[#2ca3bd]">votre SI maintenant ?</span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)]">
            En 2026, les entreprises doivent composer avec un SI devenu{' '}
            <span className="font-bold text-red-500">trop complexe</span> pour suivre la stratégie.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-red-500/5 border-red-500/20 hover:border-red-500/40"
                style={{
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${problem.color}20`,
                    border: `2px solid ${problem.color}40`
                  }}
                >
                  <Icon size={32} style={{ color: problem.color }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-sm mb-4 leading-relaxed text-[var(--text-secondary)]">
                  {problem.description}
                </p>

                {/* Impact */}
                <div className="text-sm font-bold pt-4 border-t border-[var(--border-primary)] text-red-600">
                  {problem.impact}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl backdrop-blur-sm border-2 text-center bg-red-500/10 border-red-500/30">
          <div className="text-5xl mb-4">👇</div>
          <p className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Résultat : votre SI fonctionne,{' '}
            <span className="text-red-500">mais empêche l'entreprise d'avancer.</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
