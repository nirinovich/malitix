import { Shield, TrendingDown, Users, Brain, Zap, Eye } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant A: Icon Cards with Stats
export default function SIRefonteBenefitsA() {
  const { theme } = useTheme();

  const benefits = [
    {
      icon: Shield,
      title: 'Un SI plus fiable et sécurisé',
      stat: '75%',
      statLabel: 'des incidents résolus/anticipés',
      description: 'Réduction MTTR x2 à x5',
      color: '#2fa8cf'
    },
    {
      icon: TrendingDown,
      title: 'Un cloud optimisé',
      stat: '-20/-40%',
      statLabel: 'de coûts cloud',
      description: 'Selon maturité initiale',
      color: '#a0c801'
    },
    {
      icon: Users,
      title: 'Des équipes libérées',
      stat: '60%',
      statLabel: 'temps libéré',
      description: 'Automatisation des tâches à faible valeur',
      color: '#2fa8cf'
    },
    {
      icon: Brain,
      title: 'Une architecture "IA-ready"',
      stat: '100%',
      statLabel: 'préparé pour l\'IA',
      description: 'Données propres, gouvernance, pipelines',
      color: '#a0c801'
    },
    {
      icon: Zap,
      title: 'Un time-to-market accéléré',
      stat: 'x3-x5',
      statLabel: 'déploiements + rapides',
      description: 'Plus fréquents, plus sûrs',
      color: '#2fa8cf'
    },
    {
      icon: Eye,
      title: 'Une vision enfin claire du SI',
      stat: '360°',
      statLabel: 'visibilité totale',
      description: 'Cartographie, end-of-life, dépendances, risques',
      color: '#a0c801'
    },
  ];

  return (
    <section id="benefits-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#a0c801]/5' : 'bg-[#a0c801]/10'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ce que vous{' '}
            <span className="text-[#a0c801]">gagnez</span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Impact mesurable sur votre business et vos équipes
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className={`group p-8 rounded-3xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-[#a0c801]/40'
                    : 'bg-white border-gray-200 hover:border-[#a0c801]/40'
                }`}
                style={{
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${benefit.color}20`,
                    border: `2px solid ${benefit.color}40`
                  }}
                >
                  <Icon size={32} style={{ color: benefit.color }} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  ✔️ {benefit.title}
                </h3>

                {/* Stat */}
                <div className="mb-4">
                  <div 
                    className="text-4xl font-black mb-1"
                    style={{ color: benefit.color }}
                  >
                    {benefit.stat}
                  </div>
                  <div className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {benefit.statLabel}
                  </div>
                </div>

                {/* Description */}
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className={`mt-16 max-w-5xl mx-auto p-10 rounded-3xl text-center backdrop-blur-sm border-2 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#2fa8cf]/10 to-[#a0c801]/10 border-[#a0c801]/30'
            : 'bg-gradient-to-r from-[#2fa8cf]/5 to-[#a0c801]/5 border-[#a0c801]/30'
        }`}>
          <h3 className={`text-3xl sm:text-4xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Un SI qui devient un{' '}
            <span className="text-[#a0c801]">accélérateur stratégique</span>
          </h3>
          <p className={`text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
            Plus fiable • Plus rapide • Plus sûr • Prêt pour l'IA
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
