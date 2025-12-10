import { Zap, Shield, Target, GitBranch, Eye } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant A: Feature Cards with Icons
export default function SIRefonteSolutionA() {
  const { theme } = useTheme();

  const features = [
    {
      icon: Eye,
      title: 'Diagnostic complet',
      description: 'Architecture, sécurité, cloud, data, dette technique analysés en profondeur.',
      color: '#2ca3bd'
    },
    {
      icon: Target,
      title: 'Vision cible réaliste & moderne',
      description: 'APIs, microservices, data gouvernée, cloud optimisé, SI "IA-ready".',
      color: '#2ca3bd'
    },
    {
      icon: Zap,
      title: 'Quick wins à impact direct',
      description: '3 actions prioritaires générant un ROI visible en 30 à 90 jours.',
      color: '#2ca3bd'
    },
    {
      icon: GitBranch,
      title: 'Modernisation progressive',
      description: 'Zéro big bang : migration par modules, sprints de 6-8 semaines.',
      color: '#2ca3bd'
    },
    {
      icon: Shield,
      title: 'Sécurité et automatisation intégrées',
      description: 'IAM, segmentation, monitoring, CI/CD, observabilité dès le départ.',
      color: '#2ca3bd'
    },
  ];

  return (
    <section id="solution-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-primary)]'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/5' : 'bg-[var(--bg-secondary)]'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/5' : 'bg-[var(--bg-secondary)]'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Refonte SI : une approche{' '}
            <span className="text-[#2ca3bd]">globale, rapide</span> et{' '}
            <span className="text-[#2ca3bd]">modulaire</span>
          </h2>
          
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Notre approche combine <strong>vision stratégique</strong>,{' '}
            <strong>exécution rapide</strong> et <strong>valorisation immédiate</strong>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`group p-8 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-[#2ca3bd]/40'
                    : 'bg-[var(--surface-primary)] border-gray-200 hover:border-[#2ca3bd]/40'
                }`}
                style={{
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ 
                    backgroundColor: `${feature.color}20`,
                    border: `2px solid ${feature.color}40`
                  }}
                >
                  <Icon size={32} style={{ color: feature.color }} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Value Statement */}
        <div className={`max-w-5xl mx-auto grid md:grid-cols-3 gap-6 ${
          theme === 'dark' ? '' : ''
        }`}>
          <div className={`p-6 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
              : 'bg-slate-50 border-[#2ca3bd]/30'
          }`}>
            <div className="text-4xl font-black text-[#2ca3bd] mb-2">0</div>
            <div className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Big Bang
            </div>
            <div className={`text-xs mt-2 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              Migration progressive
            </div>
          </div>
          <div className={`p-6 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
              : 'bg-slate-50 border-[#2ca3bd]/30'
          }`}>
            <div className="text-4xl font-black text-[#2ca3bd] mb-2">6-8</div>
            <div className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Semaines par sprint
            </div>
            <div className={`text-xs mt-2 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              Résultats rapides et mesurables
            </div>
          </div>
          <div className={`p-6 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
              : 'bg-slate-50 border-[#2ca3bd]/30'
          }`}>
            <div className="text-4xl font-black text-[#2ca3bd] mb-2">30-90j</div>
            <div className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              ROI Quick Wins
            </div>
            <div className={`text-xs mt-2 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              Impact business immédiat
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
