import { X, ArrowDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant B: Timeline/Cascade of Problems
export default function SIRefonteProblemB() {
  const { theme } = useTheme();

  const timeline = [
    {
      year: '2005-2015',
      problem: '10-20 ans de dette technique',
      details: 'Accumulation de solutions patchwork, technologies obsolètes',
      consequence: 'Ralentissements + Dépendances + Coûts croissants'
    },
    {
      year: '2015-2020',
      problem: 'Cloud hybride non maîtrisé',
      details: 'Migration partielle sans gouvernance, multi-cloud non optimisé',
      consequence: 'Instabilité + Surcoûts de 20-40%'
    },
    {
      year: '2020-2023',
      problem: 'Explosion des risques cyber',
      details: 'Surface d\'attaque étendue, conformité complexe (RGPD, NIS2)',
      consequence: 'Exposition élevée + Manque de visibilité'
    },
    {
      year: '2023-2024',
      problem: 'Données dispersées et peu fiables',
      details: 'Silos métier, formats hétérogènes, qualité incertaine',
      consequence: 'Impossible d\'exploiter IA, analytics, automatisation'
    },
    {
      year: '2024-2026',
      problem: 'Process IT trop manuels',
      details: 'DevOps incomplet, monitoring limité, interventions humaines',
      consequence: 'Incidents + Lenteur + Charge opérationnelle'
    },
  ];

  return (
    <section id="problem-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className={`absolute top-0 left-0 w-full h-full ${
          theme === 'dark'
            ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.15),transparent_50%)]'
        }`}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            L'histoire de votre{' '}
            <span className="text-red-500">dette technique</span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Deux décennies de compromis qui s'accumulent
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-8 top-0 bottom-0 w-1 ${
            theme === 'dark' ? 'bg-red-500/20' : 'bg-red-300'
          }`}></div>

          {timeline.map((item, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className={`absolute left-8 -translate-x-1/2 w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-red-500 border-[#060705]'
                  : 'bg-red-500 border-white'
              }`}>
                <X className="text-white" size={16} />
              </div>

              {/* Content card */}
              <div className="ml-20">
                <div className={`p-6 rounded-2xl border-2 backdrop-blur-sm transition-all hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'bg-red-500/5 border-red-500/30'
                    : 'bg-red-50 border-red-300'
                }`}>
                  {/* Year badge */}
                  <div className="inline-block px-3 py-1 rounded-lg bg-red-500 text-white text-sm font-bold mb-3">
                    {item.year}
                  </div>

                  {/* Problem title */}
                  <h3 className={`text-2xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    ❌ {item.problem}
                  </h3>

                  {/* Details */}
                  <p className={`text-base mb-4 ${
                    theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {item.details}
                  </p>

                  {/* Consequence */}
                  <div className={`pt-4 border-t flex items-start gap-2 ${
                    theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <ArrowDown className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span className={`font-bold text-red-500`}>
                      {item.consequence}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Statement */}
        <div className="mt-16 text-center">
          <div className={`inline-block p-8 rounded-3xl border-2 backdrop-blur-sm ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-red-500/20 to-red-500/10 border-red-500/40'
              : 'bg-gradient-to-br from-red-100 to-red-50 border-red-400'
          }`}>
            <div className="text-6xl mb-4">⚠️</div>
            <p className={`text-2xl sm:text-3xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              2026 : Le point de non-retour
            </p>
            <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
              Votre SI fonctionne encore... mais pour combien de temps ?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
