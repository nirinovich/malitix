import { AlertTriangle, TrendingDown, Clock, Target, Code2, Server, Palette, Shield, Sparkles, Database, Laptop } from 'lucide-react';

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
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: Cards à gauche, Texte à droite */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left - Problem indicators */}
          <div className="space-y-4 sm:space-y-6">
            <div className="backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:scale-105 dark:bg-red-500/10 dark:border-red-500/30 light:bg-red-50 light:border-red-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <AlertTriangle className="text-red-500 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-[var(--text-primary)]">
                    Chaque jour de retard coûte cher
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                    Argent perdu, opportunités manquées, concurrence qui avance
                  </p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:scale-105 dark:bg-orange-500/10 dark:border-orange-500/30 light:bg-orange-50 light:border-orange-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <TrendingDown className="text-orange-500 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-[var(--text-primary)]">
                    Équipes débordées
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                    Maintenance, bugs critiques, manque de bande passante
                  </p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:scale-105 dark:bg-yellow-500/10 dark:border-yellow-500/30 light:bg-yellow-50 light:border-yellow-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <Clock className="text-yellow-500 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-[var(--text-primary)]">
                    L'innovation attend... encore
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                    Les budgets s'étirent, la pression monte
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content (maintenant aligné avec les cards) */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              Comment briser ce cycle sans tout faire exploser ? 🤔
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[var(--text-secondary)]">
              Vos équipes internes, aussi talentueuses soient-elles, sont peut-être débordées par la maintenance, 
              bloquées sur des bugs critiques ou manquent simplement de bande passante pour vraiment accélérer.
            </p>

            <p className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
              Vous savez qu'il faut livrer plus vite, mais comment ?
            </p>
          </div>
        </div>

        {/* Section 2: Tech Stack Bento en pleine largeur */}
        <div className="backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border max-w-5xl mx-auto mt-16 sm:mt-20 lg:mt-28 bg-gradient-to-br from-[var(--surface-primary)] to-[var(--bg-secondary)] border-[#2ca3bd]/30">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Target className="text-[#2ca3bd]" size={28} />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
                Un vivier de 350+ développeurs experts
              </h3>
            </div>
            <p className="text-base sm:text-lg text-[var(--text-secondary)]">
              Maîtrisant les technologies modernes pour renforcer vos rangs :
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 bg-[var(--surface-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[#2ca3bd] hover:shadow-lg"
                >
                  <Icon size={16} className="text-[#2ca3bd]" />
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
