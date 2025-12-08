import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant B: Process Flow / Step-by-Step
export default function SIRefonteSolutionB() {
  const { theme } = useTheme();

  const steps = [
    {
      number: '01',
      title: 'Diagnostic complet',
      subtitle: 'État des lieux exhaustif',
      points: ['Architecture & dépendances', 'Cloud & infrastructure', 'Sécurité & conformité', 'Data & gouvernance', 'Dette technique chiffrée']
    },
    {
      number: '02',
      title: 'Vision cible',
      subtitle: 'SI moderne et aligné',
      points: ['Architecture API-first', 'Microservices modulaires', 'Cloud optimisé & sécurisé', 'Data gouvernée & IA-ready', 'DevOps & automatisation']
    },
    {
      number: '03',
      title: 'Quick Wins',
      subtitle: 'ROI immédiat',
      points: ['3 actions prioritaires', 'Impact mesurable 30-90j', 'Coûts maîtrisés', 'Risques réduits', 'Équipes libérées']
    },
    {
      number: '04',
      title: 'Roadmap 90 jours',
      subtitle: 'Plan d\'action clair',
      points: ['Migration progressive', 'Sprints 6-8 semaines', 'Jalons mesurables', 'Zéro big bang', 'Sécurité continue']
    },
  ];

  return (
    <section id="solution-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#060705]'
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className={`text-5xl sm:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Notre méthode{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2ca3bd] to-[#2ca3bd]">
              Refonte SI
            </span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            4 étapes pour moderniser votre SI sans disruption
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#2ca3bd] via-[#2ca3bd] to-[#2ca3bd]" 
            style={{ top: '60px', zIndex: 0 }}></div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative"
              style={{
                animation: 'fade-in-up 0.6s ease-out forwards',
                animationDelay: `${idx * 0.15}s`,
                opacity: 0
              }}
            >
              {/* Step Number Circle */}
              <div className="flex justify-center mb-6 relative z-10">
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center font-black text-3xl backdrop-blur-sm border-4 shadow-xl ${
                  idx % 2 === 0
                    ? theme === 'dark'
                      ? 'bg-[#2ca3bd]/20 border-[#2ca3bd] text-[#2ca3bd]'
                      : 'bg-[#2ca3bd]/10 border-[#2ca3bd] text-[#2ca3bd]'
                    : theme === 'dark'
                      ? 'bg-[#2ca3bd]/20 border-[#2ca3bd] text-[#2ca3bd]'
                      : 'bg-[#2ca3bd]/10 border-[#2ca3bd] text-[#2ca3bd]'
                }`}>
                  {step.number}
                </div>
              </div>

              {/* Content Card */}
              <div className={`p-6 rounded-2xl border-2 backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-xl font-black mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>
                <div className={`text-sm font-semibold mb-4 ${
                  idx % 2 === 0 ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
                }`}>
                  {step.subtitle}
                </div>
                <ul className="space-y-2">
                  {step.points.map((point, pidx) => (
                    <li key={pidx} className={`text-sm flex items-start gap-2 ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      <span className="text-[#2ca3bd] mt-0.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow connector */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex justify-center mt-6">
                  <ArrowRight className={idx % 2 === 0 ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'} size={32} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Statement */}
        <div className={`mt-20 max-w-4xl mx-auto p-10 rounded-3xl text-center backdrop-blur-sm border-2 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#2ca3bd]/10 border-[#2ca3bd]/30'
            : 'bg-gradient-to-r from-[#2ca3bd]/5 to-[#2ca3bd]/5 border-[#2ca3bd]/30'
        }`}>
          <h3 className={`text-3xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Transformation complète sur 12-36 mois
          </h3>
          <p className={`text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
            Migration progressive • Sprints courts • Résultats mesurables • Zéro disruption
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
