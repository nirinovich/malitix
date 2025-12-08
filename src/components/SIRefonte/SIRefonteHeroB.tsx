import { TrendingUp, Zap, Target, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant B: Stats-Driven with Animated Pattern Background
export default function SIRefonteHeroB() {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sirefonte');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '-30%', label: 'Coûts cloud', icon: TrendingUp },
    { value: '72h', label: 'Diagnostic', icon: Zap },
    { value: '90j', label: 'Roadmap', icon: Target },
  ];

  return (
    <section className={`relative h-screen flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#060705]'
        : 'bg-gray-50'
    }`}>
      {/* Animated Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid lines */}
        <div 
          className={`absolute inset-0 ${theme === 'dark' ? 'opacity-5' : 'opacity-8'}`}
          style={{
            backgroundImage: `
              linear-gradient(${theme === 'dark' ? 'rgba(44,163,189,0.3)' : 'rgba(44,163,189,0.4)'} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === 'dark' ? 'rgba(44,163,189,0.3)' : 'rgba(44,163,189,0.4)'} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        
        {/* Diagonal accent lines */}
        <div 
          className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.04]'}`}
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              ${theme === 'dark' ? '#2ca3bd' : '#2ca3bd'},
              ${theme === 'dark' ? '#2ca3bd' : '#2ca3bd'} 2px,
              transparent 2px,
              transparent 40px
            )`
          }}
        />
        
        {/* Glowing orbs */}
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[#2ca3bd]/20'
        }`} style={{ animation: 'float 8s ease-in-out infinite' }}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#248fa5]/10' : 'bg-[#248fa5]/20'
        }`} style={{ animation: 'float 10s ease-in-out infinite reverse' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Modernisez votre SI{' '}
                <span className="text-[#2ca3bd]">sans le casser</span>
              </h1>
              
              <p className={`text-xl sm:text-2xl ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                72h pour un diagnostic complet + roadmap actionnable
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Dette tech', 'Cloud +40%', 'Risques cyber'].map((problem, idx) => (
                <div 
                  key={idx}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    theme === 'dark'
                      ? 'bg-red-500/10 text-red-400'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  ❌ {problem}
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]"
            >
              Je demande mon Audit Express
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>

            <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
              ✓ Sans engagement • ✓ Réponse 24h
            </p>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl backdrop-blur-sm border-2 transition-all hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-[#2ca3bd]/5 border-[#2ca3bd]/30'
                      : 'bg-white border-[#2ca3bd]/30 shadow-lg'
                  }`}
                  style={{
                    animationDelay: `${idx * 0.2}s`
                  }}
                >
                  <div className="flex items-center gap-6">
                    <Icon className="text-[#2ca3bd] flex-shrink-0" size={48} />
                    <div>
                      <div className={`text-4xl font-black mb-1 ${
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
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }
      `}</style>
    </section>
  );
}
