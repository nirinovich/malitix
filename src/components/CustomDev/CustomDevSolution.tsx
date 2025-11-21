import { TrendingUp, Users, Key, Code2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

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

export default function CustomDevSolution() {
  const { theme } = useTheme();

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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

        {/* Solutions Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            
            return (
              <div
                key={index}
                className={`group relative backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400 hover:shadow-blue-200/50'
                }`}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 ${
                  theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'
                }`}>
                  <Icon className="text-[#2ca3bd]" size={28} />
                </div>

                {/* Title */}
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {solution.title}
                </h3>

                {/* Description */}
                <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className={`flex items-center gap-2 text-sm ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-600'
                      }`}></div>
                      {feature}
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

        {/* Bottom Statement */}
        <div className={`mt-12 sm:mt-16 max-w-4xl mx-auto text-center backdrop-blur-xl rounded-2xl p-6 sm:p-8 border ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10'
            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="text-[#2ca3bd]" size={32} />
          </div>
          <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Code Moderne, Technologies Éprouvées
          </h3>
          <p className={`text-base sm:text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            React, Python, Node.js, Mobile Natif – Nous utilisons les meilleures technologies pour garantir robustesse et performance.
          </p>
        </div>
      </div>
    </section>
  );
}
