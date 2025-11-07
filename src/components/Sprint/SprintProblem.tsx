import { AlertTriangle, TrendingDown, Clock, Target, Code2, Server, Palette, Shield, Sparkles, Database, Laptop } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const techStack = [
  { name: 'React', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'PHP', icon: Code2 },
  { name: 'Symfony', icon: Shield },
  { name: 'Laravel', icon: Sparkles },
  { name: 'Vue.js', icon: Palette },
  { name: 'Python', icon: Database },
  { name: 'Next.js', icon: Laptop },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Docker', icon: Server },
];

export default function SprintProblem() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: Cards à gauche, Texte à droite */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Problem indicators */}
          <div className="space-y-6">
            <div className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-red-500/10 border-red-500/30'
                : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-red-500 flex-shrink-0" size={32} />
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Chaque jour de retard coûte cher
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                    Argent perdu, opportunités manquées, concurrence qui avance
                  </p>
                </div>
              </div>
            </div>

            <div className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-orange-500/10 border-orange-500/30'
                : 'bg-orange-50 border-orange-200'
            }`}>
              <div className="flex items-start gap-4">
                <TrendingDown className="text-orange-500 flex-shrink-0" size={32} />
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Équipes débordées
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                    Maintenance, bugs critiques, manque de bande passante
                  </p>
                </div>
              </div>
            </div>

            <div className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-yellow-500/10 border-yellow-500/30'
                : 'bg-yellow-50 border-yellow-200'
            }`}>
              <div className="flex items-start gap-4">
                <Clock className="text-yellow-500 flex-shrink-0" size={32} />
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    L'innovation attend... encore
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                    Les budgets s'étirent, la pression monte
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content (maintenant aligné avec les cards) */}
          <div className="space-y-6">
            <h2 className={`text-4xl sm:text-5xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Comment briser ce cycle sans tout faire exploser ? 🤔
            </h2>
            
            <p className={`text-xl leading-relaxed ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              Vos équipes internes, aussi talentueuses soient-elles, sont peut-être débordées par la maintenance, 
              bloquées sur des bugs critiques ou manquent simplement de bande passante pour vraiment accélérer.
            </p>

            <p className={`text-xl font-semibold ${
              theme === 'dark' ? 'text-white/90' : 'text-gray-800'
            }`}>
              Vous savez qu'il faut livrer plus vite, mais comment ?
            </p>
          </div>
        </div>

        {/* Section 2: Tech Stack Bento en pleine largeur */}
        <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 border max-w-5xl mx-auto mt-28 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20'
            : 'bg-gradient-to-br from-white to-blue-50 border-blue-200'
        }`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Target className="text-[#2ca3bd]" size={32} />
              <h3 className={`text-2xl sm:text-3xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Un vivier de 650+ développeurs experts
              </h3>
            </div>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}>
              Maîtrisant les technologies modernes pour renforcer vos rangs :
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-white/10 text-white/80 hover:bg-white/20'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-[#2ca3bd] hover:shadow-lg'
                  }`}
                >
                  <Icon size={18} className="text-[#2ca3bd]" />
                  {tech.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
