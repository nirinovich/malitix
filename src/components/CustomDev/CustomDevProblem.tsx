import { FileSpreadsheet, Lock, Link2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

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

export default function CustomDevProblem() {
  const { theme } = useTheme();
  
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

