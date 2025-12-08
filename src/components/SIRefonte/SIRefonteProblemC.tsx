import { Minus } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant C: Split Comparison - What's Blocking vs Impact
export default function SIRefonteProblemC() {
  const { theme } = useTheme();

  const comparisons = [
    {
      blocking: 'Dette technique (10-20 ans)',
      impact: 'Time-to-market x3 plus lent',
      severity: 'critical'
    },
    {
      blocking: 'Cloud hybride mal optimisé',
      impact: '+20 à +40% de surcoûts annuels',
      severity: 'high'
    },
    {
      blocking: 'Risques cyber non maîtrisés',
      impact: 'Incident = crise entreprise',
      severity: 'critical'
    },
    {
      blocking: 'Données en silos métier',
      impact: 'Impossible de déployer IA',
      severity: 'high'
    },
    {
      blocking: 'Process IT manuels',
      impact: '847 incidents/an en moyenne',
      severity: 'high'
    },
  ];

  return (
    <section id="problem-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ce qui <span className="text-red-500">bloque</span> votre SI
          </h2>
          <p className={`text-2xl font-semibold ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Et l'impact réel sur votre business
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-6 mb-16">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border-2 transition-all hover:scale-[1.02] ${
                theme === 'dark'
                  ? 'border-white/10'
                  : 'border-gray-200'
              }`}
              style={{
                animation: 'fade-in-up 0.5s ease-out forwards',
                animationDelay: `${idx * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Left: The Blocker */}
              <div className={`p-6 flex items-center gap-4 ${
                theme === 'dark'
                  ? 'bg-red-500/10'
                  : 'bg-red-50'
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  item.severity === 'critical'
                    ? 'bg-red-600'
                    : 'bg-orange-500'
                }`}>
                  <Minus className="text-white" size={24} />
                </div>
                <div>
                  <div className={`text-xs font-bold mb-1 uppercase ${
                    theme === 'dark' ? 'text-red-400' : 'text-red-600'
                  }`}>
                    Bloquant
                  </div>
                  <div className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.blocking}
                  </div>
                </div>
              </div>

              {/* Right: The Impact */}
              <div className={`p-6 flex items-center gap-4 border-l-2 ${
                theme === 'dark'
                  ? 'bg-red-500/5 border-white/10'
                  : 'bg-white border-gray-200'
              }`}>
                <div className={`text-lg font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className={`p-8 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-red-500/10 border-red-500/30'
              : 'bg-red-50 border-red-300'
          }`}>
            <div className="text-5xl font-black text-red-500 mb-2">20-40%</div>
            <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
              Surcoûts cloud évitables
            </div>
          </div>
          <div className={`p-8 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-red-500/10 border-red-500/30'
              : 'bg-red-50 border-red-300'
          }`}>
            <div className="text-5xl font-black text-red-500 mb-2">847</div>
            <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
              Incidents IT par an (moyenne)
            </div>
          </div>
          <div className={`p-8 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-red-500/10 border-red-500/30'
              : 'bg-red-50 border-red-300'
          }`}>
            <div className="text-5xl font-black text-red-500 mb-2">x3</div>
            <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
              Time-to-market plus lent
            </div>
          </div>
        </div>

        {/* Bottom CTA-like statement */}
        <div className={`relative overflow-hidden p-10 rounded-3xl text-center ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20'
            : 'bg-gradient-to-r from-red-100 via-orange-100 to-red-100'
        }`}>
          <div className="relative z-10">
            <p className={`text-3xl sm:text-4xl font-black mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              👉 Votre SI fonctionne.
            </p>
            <p className={`text-2xl sm:text-3xl font-bold ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              Mais il <span className="text-red-500">empêche l'entreprise d'avancer.</span>
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
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
