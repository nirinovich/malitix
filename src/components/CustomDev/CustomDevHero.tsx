import { useEffect } from 'react';
import { ArrowRight, Code2, TrendingUp, Zap, Shield } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTest } from '../../context/ABTestContext';

export default function CustomDevHero() {
  const { theme } = useTheme();
  const { trackImpression, trackClick } = useABTest();

  useEffect(() => {
    trackImpression('hero', 'A');
  }, [trackImpression]);

  const scrollToROI = () => {
    trackClick('hero', 'A', 'cta_button');
    const roiSection = document.getElementById('contact-customdev');
    roiSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-400/30'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-300/20'
        }`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute inset-0 bg-[size:50px_50px] ${
          theme === 'dark' 
            ? 'bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Votre Logiciel Sur Mesure en{' '}
              <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
                90 Jours
              </span>
            </h1>

            <p className={`text-xl sm:text-2xl leading-relaxed ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              Application web performante, adaptée à vos processus métier, livrée clé en main.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
              <button
                onClick={scrollToROI}
                className={`group relative px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Démarrer Mon Projet
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                Budget fixe • Sans engagement
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Central mockup illustration */}
              <div className={`relative w-full max-w-md h-96 rounded-2xl shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#060705] border border-[#2ca3bd]/30'
                  : 'bg-gradient-to-br from-blue-50 to-white border border-blue-200'
              }`}>
                {/* Browser window mockup */}
                <div className="p-4 h-full flex flex-col">
                  {/* Window controls */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  
                  {/* Content area with grid */}
                  <div className="flex-1 space-y-3">
                    <div className={`h-8 rounded-lg ${theme === 'dark' ? 'bg-[#2ca3bd]/30' : 'bg-blue-200'}`}></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className={`h-20 rounded-lg ${theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'}`}></div>
                      <div className={`h-20 rounded-lg ${theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'}`}></div>
                    </div>
                    <div className={`h-32 rounded-lg ${theme === 'dark' ? 'bg-[#2ca3bd]/30' : 'bg-blue-200'}`}></div>
                  </div>
                </div>
              </div>

              {/* Floating feature cards */}
              <div 
                className={`absolute top-8 -left-4 backdrop-blur-xl rounded-xl p-4 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 shadow-blue-200/50'
                }`}
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#2ca3bd] p-1.5 rounded-lg">
                    <TrendingUp className="text-white" size={16} />
                  </div>
                  <div>
                    <div className={`font-semibold text-xs ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Évolutif</div>
                    <div className={`text-[10px] ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>100 → 1M users</div>
                  </div>
                </div>
              </div>

              <div 
                className={`absolute top-20 -right-8 backdrop-blur-xl rounded-xl p-4 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200'
                }`}
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#2ca3bd] p-1.5 rounded-lg">
                    <Zap className="text-white" size={16} />
                  </div>
                  <div>
                    <div className={`font-semibold text-xs ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Rapide</div>
                    <div className={`text-[10px] ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>&lt; 2s chargement</div>
                  </div>
                </div>
              </div>

              <div 
                className={`absolute bottom-32 -left-8 backdrop-blur-xl rounded-xl p-4 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200'
                }`}
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#2ca3bd] p-1.5 rounded-lg">
                    <Shield className="text-white" size={16} />
                  </div>
                  <div>
                    <div className={`font-semibold text-xs ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Sécurisé</div>
                    <div className={`text-[10px] ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>SOC 2 compliant</div>
                  </div>
                </div>
              </div>

              <div 
                className={`absolute bottom-20 -right-4 backdrop-blur-xl rounded-xl p-4 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200'
                }`}
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#2ca3bd] p-1.5 rounded-lg">
                    <Code2 className="text-white" size={16} />
                  </div>
                  <div>
                    <div className={`font-semibold text-xs ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Testé</div>
                    <div className={`text-[10px] ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>100% coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
