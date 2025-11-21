import { Search, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const stackItems = [
  {
    icon: Search,
    title: 'Audit & Cadrage Stratégique',
    description: 'On ne code rien avant d\'avoir compris votre business model pour garantir le ROI.',
    badge: 'Phase 1',
    features: [
      'Analyse approfondie de vos processus',
      'Définition des KPIs de succès',
      'Estimation précise du ROI',
      'Roadmap détaillée',
    ],
  },
  {
    icon: Zap,
    title: 'Développement Agile & Transparent',
    description: 'Vous voyez l\'avancée chaque semaine. Pas d\'effet tunnel.',
    badge: 'Phase 2',
    features: [
      'Sprints hebdomadaires',
      'Démonstrations régulières',
      'Technologies modernes (React, Python, Mobile Natif)',
      'Code review systématique',
    ],
  },
  {
    icon: Shield,
    title: 'Sécurité & Conformité (RGPD)',
    description: 'Vos données sont blindées. Dormez sur vos deux oreilles.',
    badge: 'Inclus',
    features: [
      'Chiffrement end-to-end',
      'Conformité RGPD garantie',
      'Tests de sécurité',
      'Hébergement sécurisé',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'Garantie "Zéro Dette Technique"',
    description: 'On livre un code propre, documenté et maintenable par n\'importe qui.',
    badge: 'Garantie',
    features: [
      'Code commenté et documenté',
      'Tests automatisés',
      'Architecture évolutive',
      'Formation de vos équipes',
    ],
  },
];

export default function CustomDevStack() {
  const { theme } = useTheme();

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              L'Offre Complète
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Une Solution Complète, <br className="hidden sm:block" />
            De la Conception au{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
              Déploiement
            </span>
          </h2>
          
          <p className={`text-lg sm:text-xl ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Voici ce qui est inclus dans notre offre de Développement Sur Mesure
          </p>
        </div>

        {/* Stack Grid - 2x2 layout */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {stackItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className={`group relative backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400 hover:shadow-blue-200/50'
                }`}
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  theme === 'dark'
                    ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {item.badge}
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'
                  }`}>
                    <Icon className="text-[#2ca3bd]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className={`flex items-start gap-3 text-sm ${
                        theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                      }`}
                    >
                      <CheckCircle2 
                        className={`flex-shrink-0 mt-0.5 ${
                          theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'
                        }`} 
                        size={16} 
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/5 to-transparent'
                    : 'bg-gradient-to-br from-blue-100/50 to-transparent'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className={`mt-12 sm:mt-16 max-w-5xl mx-auto backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-10 border ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/30'
            : 'bg-gradient-to-br from-blue-50 to-white border-blue-200'
        }`}>
          <div className="text-center space-y-4">
            <h3 className={`text-2xl sm:text-3xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Vous pouvez compter sur un code propre, documenté et maintenable
            </h3>
            <p className={`text-base sm:text-lg ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}>
              On espère que vous resterez avec nous, mais votre code sera toujours entre de bonnes mains !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
