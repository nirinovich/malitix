import { TrendingUp, Zap, Target, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant B: Stats-Driven with Impact Numbers
export default function SIRefonteHeroB() {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sirefonte');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '-20/40%', label: 'Coûts cloud', icon: TrendingUp },
    { value: '75%', label: 'Incidents résolus', icon: Zap },
    { value: '90j', label: 'Roadmap claire', icon: Target },
  ];

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#060705]'
        : 'bg-white'
    }`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal stripes */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              ${theme === 'dark' ? '#2ca3bd' : '#2ca3bd'},
              ${theme === 'dark' ? '#2ca3bd' : '#2ca3bd'} 2px,
              transparent 2px,
              transparent 20px
            )`
          }}
        ></div>
        {/* Glow orbs */}
        <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[#2ca3bd]/20'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[#2ca3bd]/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-12">
          {/* Stats Bar - Above Headline */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl backdrop-blur-xl border shadow-xl transition-all hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/10 border-white/10'
                      : 'bg-gradient-to-br from-[#2ca3bd]/5 to-[#2ca3bd]/5 border-gray-200'
                  }`}
                  style={{
                    animation: 'fade-in-up 0.6s ease-out forwards',
                    animationDelay: `${idx * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <Icon className="text-[#2ca3bd] mx-auto mb-3" size={32} />
                  <div className={`text-4xl font-black mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Modernisez votre SI{' '}
              <span className="block mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2ca3bd] via-[#2ca3bd] to-[#2ca3bd] animate-gradient bg-[length:200%_auto]">
                  sans big bang
                </span>
              </span>
            </h1>
            
            <p className={`text-xl sm:text-2xl lg:text-3xl font-semibold max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              En 2026, votre dette technique ne peut plus attendre. 
              <span className="block mt-2 text-[#2ca3bd]">
                Refonte progressive, résultats immédiats.
              </span>
            </p>
          </div>

          {/* Key Problems - Horizontal Scroll */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              '10-20 ans de dette technique',
              'Cloud hybride non maîtrisé',
              'Explosion risques cyber',
              'Données dispersées',
              'Process IT manuels'
            ].map((problem, idx) => (
              <div 
                key={idx}
                className={`px-5 py-3 rounded-xl font-medium text-sm border-2 ${
                  theme === 'dark'
                    ? 'bg-red-500/10 border-red-500/40 text-red-400'
                    : 'bg-red-50 border-red-300 text-red-700'
                }`}
              >
                ❌ {problem}
              </div>
            ))}
          </div>

          {/* Solution Statement */}
          <div className={`p-8 rounded-3xl backdrop-blur-xl border-2 shadow-2xl max-w-3xl mx-auto ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#2ca3bd]/20 border-[#2ca3bd]/40'
              : 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/10 border-[#2ca3bd]/30'
          }`}>
            <div className="text-2xl sm:text-3xl font-bold mb-4 text-[#2ca3bd]">
              L'Audit Express Refonte SI
            </div>
            <div className={`text-lg ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
              Diagnostic 8h → Vision claire + 3 quick wins + Roadmap 90 jours → Livré en 72h
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className={`text-3xl font-black ${theme === 'dark' ? 'text-white line-through' : 'text-gray-400 line-through'}`}>
                3 500€
              </div>
              <div className="text-4xl font-black text-[#2ca3bd]">
                OFFERT
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-6 text-xl font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] text-white shadow-[0_0_50px_rgba(44,163,189,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Je réserve mon Audit Express
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
            ✓ Sans engagement • ✓ Lumière sous 72h • ✓ 5-7 pages actionnables
          </div>
        </div>
      </div>

      {/* Add keyframes for animations */}
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
