import { useTheme } from '../../context/ThemeContext';

export default function SprintSolution() {
  const { theme } = useTheme();

  return (
    <section id="notre-sprint-commando" className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[1000px] h-[500px] sm:h-[1000px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-slate-200/40'
        }`}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              La Solution Radicale
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>

          {/* Title */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Notre <span className="text-[#2ca3bd]">"Sprint Commando"</span> 🚀
          </h2>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl lg:text-2xl font-semibold px-4 ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-800'
          }`}>
            Débloquez immédiatement vos projets les plus critiques
          </p>

          {/* Description */}
          <div className={`backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10'
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
          }`}>
            <p className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              C'est notre méthode unique pour débloquer immédiatement vos projets les plus critiques. 
              On ne vient pas "essayer", <span className="font-bold text-[#2ca3bd]">on vient livrer</span>.
            </p>

            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
            }`}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#2ca3bd] mb-2">14</div>
                <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  Jours chrono
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#2ca3bd] mb-2">100%</div>
                <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  Dédié à vous
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#2ca3bd] mb-2">0€</div>
                <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  Si on ne livre pas
                </div>
              </div>
            </div>

            <p className={`text-base sm:text-lg lg:text-xl leading-relaxed mt-6 ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              Nous prenons en charge une <span className="font-bold">fonctionnalité clé</span>, 
              la <span className="font-bold">résolution d'un bug bloquant</span>, 
              l'<span className="font-bold">intégration d'une API</span>... 
              et nous vous mettons le résultat entre les mains.
            </p>

            <div className={`mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg sm:rounded-xl border-l-4 border-[#2ca3bd] ${
              theme === 'dark' ? 'bg-[#2ca3bd]/5' : 'bg-slate-100'
            }`}>
              <p className={`text-base sm:text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Pas de blabla, juste du code qui fonctionne et un projet remis sur les rails.
              </p>
              <p className={`text-sm sm:text-base mt-2 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
              }`}>
                C'est direct, intense, et ça donne des résultats tangibles, vite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
