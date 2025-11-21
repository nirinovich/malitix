import { useEffect } from 'react';
import { TrendingUp, Users, Key, Code2, Lightbulb, Shield, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTest } from '../../context/ABTestContext';

const solutions = [
  {
    icon: TrendingUp,
    title: 'Architecture Évolutive (Scalabilité)',
    description: "Nous concevons des systèmes (Web & Mobile) capables de passer de 100 à 1 million d'utilisateurs sans s'écrouler.",
    features: [
      'Infrastructure cloud élastique',
      'Optimisation des performances',
      'Monitoring temps réel',
    ],
  },
  {
    icon: Users,
    title: 'Expérience Utilisateur (UX) Intuitive',
    description: "Vos équipes vont aimer utiliser l'outil. Fini la formation de 3 semaines pour comprendre l'interface.",
    features: [
      'Design centré utilisateur',
      'Interfaces épurées',
      'Tests utilisateurs',
    ],
  },
  {
    icon: Key,
    title: 'Propriété Totale (IP)',
    description: "Arrêtez de louer votre outil de travail. Le code vous appartient. C'est un actif valorisable de votre entreprise.",
    features: [
      '100% propriétaire du code',
      'Aucune dépendance',
      'Valeur patrimoniale',
    ],
  },
];

// Variant A: Grid Layout with Features
export function SolutionVariantA() {
  const { theme } = useTheme();
  const { trackImpression } = useABTest();

  useEffect(() => {
    trackImpression('solution', 'A');
  }, [trackImpression]);

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              La Solution
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Plus qu'du Code : <br className="sm:hidden" />
            Nous Construisons Votre{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
              Actif Numérique
            </span>
          </h2>
          
          <p className={`text-lg sm:text-xl ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Nous ne sommes pas juste des "codeurs". Nous sommes des architectes de solutions business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`group backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'
                    : 'bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:border-blue-400'
                }`}
              >
                <div className={`mb-6 ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'} group-hover:scale-110 transition-transform duration-300 inline-block`}>
                  <Icon size={40} />
                </div>
                
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {solution.title}
                </h3>
                
                <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {solution.description}
                </p>

                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${
                      theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                    }`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2ca3bd]"></div>
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

// Variant B: Visual Showcase
export function SolutionVariantB() {
  const { theme } = useTheme();
  const { trackImpression } = useABTest();

  useEffect(() => {
    trackImpression('solution', 'B');
  }, [trackImpression]);

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Votre{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
              Arme Secrète
            </span>
            {' '}pour Dominer
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className={`flex gap-4 p-6 rounded-2xl ${
                  theme === 'dark' ? 'bg-white/5' : 'bg-white'
                }`}>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'
                  }`}>
                    <Icon className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'} size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {solution.title}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      {solution.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`relative h-[500px] rounded-3xl p-8 flex items-center justify-center ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#2ca3bd]/5 border border-[#2ca3bd]/30'
              : 'bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200'
          }`}>
            <div className="text-center space-y-6">
              <Code2 className={`mx-auto ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}`} size={80} />
              <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Architecture <br />Sur Mesure
              </h3>
              <p className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                100% Adaptée à Vos Besoins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Variant C: Minimal & Bold
export function SolutionVariantC() {
  const { theme } = useTheme();
  const { trackImpression } = useABTest();

  useEffect(() => {
    trackImpression('solution', 'C');
  }, [trackImpression]);

  const highlights = [
    { icon: Lightbulb, text: 'Architecture Évolutive' },
    { icon: Zap, text: 'UX Intuitive' },
    { icon: Shield, text: 'Propriété Totale' },
  ];

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          <h2 className={`text-5xl sm:text-6xl md:text-7xl font-black ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Nous Construisons Votre{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
              Actif Numérique
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`flex items-center gap-3 px-6 py-4 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-[#2ca3bd]/10 border border-[#2ca3bd]/30'
                    : 'bg-blue-50 border border-blue-200'
                }`}>
                  <Icon className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'} size={24} />
                  <span className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          <p className={`text-2xl sm:text-3xl font-semibold max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-800'
          }`}>
            Des systèmes qui évoluent de 100 à 1M utilisateurs. <br />
            Des interfaces que vos équipes adorent. <br />
            Un code qui vous appartient.
          </p>
        </div>
      </div>
    </section>
  );
}
