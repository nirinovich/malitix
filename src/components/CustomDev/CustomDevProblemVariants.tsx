import { useEffect } from 'react';
import { FileSpreadsheet, Lock, Link2, AlertTriangle, TrendingDown, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTest } from '../../context/ABTestContext';

const problems = [
  {
    icon: FileSpreadsheet,
    title: 'Le Chaos des Spreadsheets',
    description: 'Vos données critiques sont éparpillées sur des fichiers Excel qui plantent dès que vous dépassez 1000 lignes ?',
    color: 'red',
  },
  {
    icon: Lock,
    title: 'La Prison du SaaS',
    description: 'Vous payez des abonnements mensuels pour des logiciels qui ne font que 60% de ce dont vous avez vraiment besoin ?',
    color: 'orange',
  },
  {
    icon: Link2,
    title: "L'Enfer de l'Intégration",
    description: "Vos équipes perdent des heures à copier-coller des données d'un outil à l'autre parce qu'ils ne se parlent pas ?",
    color: 'yellow',
  },
];

const colorClasses = {
  red: {
    dark: 'bg-red-500/10 border-red-500/30 hover:border-red-500/50',
    light: 'bg-red-50 border-red-200 hover:border-red-400',
    icon: 'text-red-500',
  },
  orange: {
    dark: 'bg-orange-500/10 border-orange-500/30 hover:border-orange-500/50',
    light: 'bg-orange-50 border-orange-200 hover:border-orange-400',
    icon: 'text-orange-500',
  },
  yellow: {
    dark: 'bg-yellow-500/10 border-yellow-500/30 hover:border-yellow-500/50',
    light: 'bg-yellow-50 border-yellow-200 hover:border-yellow-400',
    icon: 'text-yellow-500',
  },
};

// Variant A: Original Card Grid
export function ProblemVariantA() {
  const { theme } = useTheme();
  const { trackImpression } = useABTest();

  useEffect(() => {
    trackImpression('problem', 'A');
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
              Le Problème
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Votre Croissance est-elle{' '}
            <span className="relative inline-block">
              <span className={theme === 'dark' ? 'text-red-500' : 'text-red-600'}>
                Bloquée
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path 
                  d="M0 4 L200 4" 
                  stroke={theme === 'dark' ? '#ef4444' : '#dc2626'} 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {' '}par vos Outils Actuels ?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const colors = colorClasses[problem.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`group backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === 'dark' ? colors.dark : colors.light
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`${colors.icon} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} />
                  </div>
                  <div className="space-y-3">
                    <h3 className={`text-lg sm:text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {problem.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Variant B: Timeline Style
export function ProblemVariantB() {
  const { theme } = useTheme();
  const { trackImpression } = useABTest();

  useEffect(() => {
    trackImpression('problem', 'B');
  }, [trackImpression]);

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            3 Problèmes Qui{' '}
            <span className={theme === 'dark' ? 'text-red-500' : 'text-red-600'}>
              Tuent
            </span>
            {' '}Votre Croissance
          </h2>
        </div>

        <div className="relative">
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            theme === 'dark' ? 'bg-red-500/20' : 'bg-red-200'
          }`}></div>

          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="relative pl-20 pb-16 last:pb-0">
                <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-red-500/10 border-2 border-red-500/30' : 'bg-red-50 border-2 border-red-200'
                }`}>
                  <Icon className="text-red-500" size={28} />
                </div>
                <div className={`rounded-2xl p-6 ${
                  theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
                }`}>
                  <h3 className={`text-2xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {problem.title}
                  </h3>
                  <p className={`text-lg ${
                    theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Variant C: Visual Impact with Stats
export function ProblemVariantC() {
  const { theme } = useTheme();
  const { trackImpression } = useABTest();

  useEffect(() => {
    trackImpression('problem', 'C');
  }, [trackImpression]);

  const stats = [
    { icon: Clock, label: '40% du temps perdu', metric: 'en tâches répétitives' },
    { icon: TrendingDown, label: '-30% de productivité', metric: 'avec outils inadaptés' },
    { icon: AlertTriangle, label: '5+ outils différents', metric: 'qui ne communiquent pas' },
  ];

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-8">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Le Coût Réel de{' '}
            <span className={theme === 'dark' ? 'text-red-500' : 'text-red-600'}>
              l'Inefficacité
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`text-center p-8 rounded-2xl ${
                  theme === 'dark' ? 'bg-red-500/5 border border-red-500/20' : 'bg-red-50 border border-red-200'
                }`}>
                  <Icon className="text-red-500 mx-auto mb-4" size={48} />
                  <div className="text-3xl font-black text-red-500 mb-2">{stat.label}</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>{stat.metric}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`max-w-4xl mx-auto text-center p-8 rounded-3xl ${
          theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
        }`}>
          <h3 className={`text-2xl sm:text-3xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Vos Équipes Méritent Mieux
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div key={index} className="space-y-3">
                  <Icon className="text-red-500" size={32} />
                  <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {problem.title}
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
