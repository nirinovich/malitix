import { Check, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant C: Before vs After Comparison Table
export default function SIRefonteSolutionC() {
  const { theme } = useTheme();

  const comparisons = [
    {
      category: 'Architecture',
      before: 'Monolithe vieillissant',
      after: 'Microservices & APIs'
    },
    {
      category: 'Cloud',
      before: 'Hybride non optimisé (+30%)',
      after: 'Multi-cloud maîtrisé (-25%)'
    },
    {
      category: 'Sécurité',
      before: 'Périmètre flou, risques élevés',
      after: 'Zero-trust, segmentation, IAM'
    },
    {
      category: 'Data',
      before: 'Silos métier, qualité douteuse',
      after: 'Gouvernance, pipelines, IA-ready'
    },
    {
      category: 'DevOps',
      before: 'Process manuels, incidents',
      after: 'CI/CD, automatisation, observabilité'
    },
    {
      category: 'Time-to-market',
      before: '6-12 mois par feature',
      after: '2-4 semaines par sprint'
    },
  ];

  return (
    <section id="solution-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="text-red-500">Avant</span> vs{' '}
            <span className="text-[#2ca3bd]">Après</span> Refonte SI
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Transformation concrète de votre infrastructure IT
          </p>
        </div>

        {/* Comparison Table */}
        <div className="space-y-4 mb-12">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className={`p-4 rounded-xl font-bold text-center ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              Dimension
            </div>
            <div className={`p-4 rounded-xl font-bold text-center ${
              theme === 'dark'
                ? 'bg-red-500/10 text-red-400'
                : 'bg-red-50 text-red-700'
            }`}>
              ❌ SI Actuel
            </div>
            <div className={`p-4 rounded-xl font-bold text-center ${
              theme === 'dark'
                ? 'bg-[#2ca3bd]/10 text-[#2ca3bd]'
                : 'bg-green-50 text-green-700'
            }`}>
              ✅ SI Modernisé
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((comp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 gap-4 animate-fade-in-up"
              style={{
                animationDelay: `${idx * 0.1}s`
              }}
            >
              {/* Category */}
              <div className={`p-6 rounded-xl font-bold flex items-center backdrop-blur-sm border-2 ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-white'
                  : 'bg-white border-gray-200 text-gray-900'
              }`}>
                {comp.category}
              </div>

              {/* Before */}
              <div className={`p-6 rounded-xl flex items-center gap-3 backdrop-blur-sm border-2 ${
                theme === 'dark'
                  ? 'bg-red-500/5 border-red-500/20 text-white/80'
                  : 'bg-red-50/50 border-red-200 text-gray-700'
              }`}>
                <X className="text-red-500 flex-shrink-0" size={20} />
                <span className="text-sm">{comp.before}</span>
              </div>

              {/* After */}
              <div className={`p-6 rounded-xl flex items-center gap-3 backdrop-blur-sm border-2 ${
                theme === 'dark'
                  ? 'bg-[#2ca3bd]/5 border-[#2ca3bd]/20 text-white/80'
                  : 'bg-green-50/50 border-green-200 text-gray-700'
              }`}>
                <Check className="text-[#2ca3bd] flex-shrink-0" size={20} />
                <span className="text-sm font-semibold">{comp.after}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className={`p-8 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
              : 'bg-green-50 border-green-300'
          }`}>
            <div className="text-5xl font-black text-[#2ca3bd] mb-3">-30%</div>
            <div className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Coûts infrastructure
            </div>
          </div>
          <div className={`p-8 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
              : 'bg-slate-100 border-[#2ca3bd]/30'
          }`}>
            <div className="text-5xl font-black text-[#2ca3bd] mb-3">99.9%</div>
            <div className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Disponibilité garantie
            </div>
          </div>
          <div className={`p-8 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
              : 'bg-green-50 border-green-300'
          }`}>
            <div className="text-5xl font-black text-[#2ca3bd] mb-3">x5</div>
            <div className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Vélocité delivery
            </div>
          </div>
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
