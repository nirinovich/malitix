import { TrendingUp } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant B: Before/After Metrics Comparison
export default function SIRefonteBenefitsB() {
  const { theme } = useTheme();

  const metrics = [
    {
      metric: 'Disponibilité SI',
      before: '95-97%',
      after: '99.9%',
      improvement: '+3-5%'
    },
    {
      metric: 'Incidents IT/an',
      before: '847',
      after: '~210',
      improvement: '-75%'
    },
    {
      metric: 'Coûts cloud',
      before: 'Base 100',
      after: '60-80',
      improvement: '-20/-40%'
    },
    {
      metric: 'Time-to-market',
      before: '6-12 mois',
      after: '2-4 semaines',
      improvement: 'x10'
    },
    {
      metric: 'MTTR (résolution)',
      before: '4-8h',
      after: '30min-1h',
      improvement: 'x5-x8'
    },
    {
      metric: 'Conformité sécurité',
      before: '45-60%',
      after: '95%+',
      improvement: '+50%'
    },
  ];

  return (
    <section id="benefits-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Impact{' '}
            <span className="text-[#2ca3bd]">mesurable</span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Métriques avant et après la Refonte SI
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="space-y-6 mb-12">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl backdrop-blur-sm border-2 transition-all hover:scale-[1.02] ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-gray-50 border-gray-200'
              }`}
              style={{
                animation: 'fade-in-up 0.5s ease-out forwards',
                animationDelay: `${idx * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Metric Name */}
              <div className={`flex items-center font-bold text-lg ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {item.metric}
              </div>

              {/* Before */}
              <div className={`flex flex-col justify-center p-4 rounded-xl ${
                theme === 'dark'
                  ? 'bg-red-500/10'
                  : 'bg-red-50'
              }`}>
                <div className={`text-xs font-bold mb-1 uppercase ${
                  theme === 'dark' ? 'text-red-400' : 'text-red-600'
                }`}>
                  Avant
                </div>
                <div className={`text-2xl font-black ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.before}
                </div>
              </div>

              {/* After */}
              <div className={`flex flex-col justify-center p-4 rounded-xl ${
                theme === 'dark'
                  ? 'bg-[#2ca3bd]/10'
                  : 'bg-green-50'
              }`}>
                <div className={`text-xs font-bold mb-1 uppercase ${
                  theme === 'dark' ? 'text-[#2ca3bd]' : 'text-green-700'
                }`}>
                  Après
                </div>
                <div className={`text-2xl font-black ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.after}
                </div>
              </div>

              {/* Improvement */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2ca3bd] text-white font-black text-xl">
                  <TrendingUp size={20} />
                  {item.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Statement */}
        <div className={`p-10 rounded-3xl text-center backdrop-blur-sm border-2 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#2ca3bd]/10 border-[#2ca3bd]/30'
            : 'bg-gradient-to-r from-[#2ca3bd]/5 to-[#2ca3bd]/5 border-[#2ca3bd]/30'
        }`}>
          <h3 className={`text-3xl sm:text-4xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            ROI moyen : <span className="text-[#2ca3bd]">18-24 mois</span>
          </h3>
          <p className={`text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
            Avec des quick wins dès les 30-90 premiers jours
          </p>
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
