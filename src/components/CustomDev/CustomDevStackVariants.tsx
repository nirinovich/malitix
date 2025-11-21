import { useEffect } from 'react';
import { Search, Zap, Shield, CheckCircle2, Target, Rocket, Lock, Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTest } from '../../context/ABTestContext';

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

// Variant A: Detailed Cards
export function StackVariantA() {
  const { theme } = useTheme();
  const { trackImpression } = useABTest();

  useEffect(() => {
    trackImpression('stack', 'A');
  }, [trackImpression]);

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              Notre Méthode
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Notre Stack{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
              Complète
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {stackItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'
                    : 'bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:border-blue-400'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} />
                  </div>
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      theme === 'dark' ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {item.badge}
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>

                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${
                      theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                    }`}>
                      <CheckCircle2 className="flex-shrink-0 text-[#2ca3bd] mt-0.5" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Variant B: Icon Grid
export function StackVariantB() {
  const { theme } = useTheme();
  const { trackImpression } = useABTest();

  useEffect(() => {
    trackImpression('stack', 'B');
  }, [trackImpression]);

  const simplifiedStack = [
    { icon: Target, title: 'Audit Stratégique', desc: 'ROI garanti dès le départ' },
    { icon: Rocket, title: 'Développement Agile', desc: 'Livraison en 90 jours' },
    { icon: Lock, title: 'Sécurité RGPD', desc: 'Données blindées' },
    { icon: Award, title: 'Code de Qualité', desc: 'Zéro dette technique' },
  ];

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            4 Piliers Pour Votre{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
              Succès
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {simplifiedStack.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-[#2ca3bd]/10 border-2 border-[#2ca3bd]/30'
                    : 'bg-blue-50 border-2 border-blue-200'
                }`}>
                  <Icon className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'} size={36} />
                </div>
                <h3 className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 p-8 rounded-3xl text-center ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
            : 'bg-gradient-to-r from-blue-50 to-white border border-blue-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Technologies Modernes
          </h3>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            React • Python • Mobile Natif • Cloud Infrastructure • API RESTful
          </p>
        </div>
      </div>
    </section>
  );
}

// Variant C: Timeline Process
export function StackVariantC() {
  const { theme } = useTheme();
  const { trackImpression } = useABTest();

  useEffect(() => {
    trackImpression('stack', 'C');
  }, [trackImpression]);

  const timeline = [
    { week: 'Semaine 1-2', title: 'Audit Stratégique', desc: 'Analyse complète de vos besoins' },
    { week: 'Semaine 3-10', title: 'Développement Sprint', desc: 'Code, test, demo hebdomadaire' },
    { week: 'Semaine 11-12', title: 'Sécurité & Tests', desc: 'RGPD, penetration tests, QA' },
    { week: 'Semaine 13', title: 'Livraison & Formation', desc: 'Code propre, docs complètes' },
  ];

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            De l'Idée à la Production en{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
              90 Jours
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 ${
            theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-200'
          }`}></div>

          {timeline.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="flex items-center justify-center">
                <div className={`flex-1 text-right pr-8 ${index % 2 === 0 ? 'block' : 'hidden md:block'}`}>
                  {index % 2 === 0 && (
                    <div className={`inline-block p-6 rounded-2xl text-left ${
                      theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
                    }`}>
                      <div className="text-[#2ca3bd] font-bold text-sm mb-2">{step.week}</div>
                      <h3 className={`text-xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                        {step.desc}
                      </p>
                    </div>
                  )}
                </div>

                <div className={`w-8 h-8 rounded-full z-10 flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-[#2ca3bd] border-4 border-[#060705]'
                    : 'bg-blue-600 border-4 border-gray-50'
                }`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className={`flex-1 pl-8 ${index % 2 === 1 ? 'block' : 'hidden md:block'}`}>
                  {index % 2 === 1 && (
                    <div className={`inline-block p-6 rounded-2xl text-left ${
                      theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
                    }`}>
                      <div className="text-[#2ca3bd] font-bold text-sm mb-2">{step.week}</div>
                      <h3 className={`text-xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                        {step.desc}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:hidden mt-4 px-8">
                {index % 2 === 1 && (
                  <div className={`p-6 rounded-2xl ${
                    theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
                  }`}>
                    <div className="text-[#2ca3bd] font-bold text-sm mb-2">{step.week}</div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      {step.desc}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
