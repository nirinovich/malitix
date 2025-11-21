import { useEffect } from 'react';
import { ArrowRight, Code2, Zap, TrendingUp } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTest } from '../../context/ABTestContext';

// Variant A: Original - Maximum information
export function HeroVariantA() {
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
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Arrêtez de Tordre Votre Business pour un{' '}
              <span className="relative inline-block">
                <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
                  Logiciel Standard
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path 
                    d="M0 6 Q50 0, 100 6 T200 6" 
                    stroke={theme === 'dark' ? '#2ca3bd' : '#3b82f6'} 
                    strokeWidth="4" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className={`text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed ${
              theme === 'dark' ? 'text-white/90' : 'text-gray-800'
            }`}>
              Votre Application Sur Mesure, Livrée en{' '}
              <span className={`font-black ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}`}>
                90 Jours
              </span>
              , Garantie Sans Bug
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
              <button
                onClick={scrollToROI}
                className={`group relative px-10 py-6 text-xl font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Calculer Mon ROI
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              <div className={`flex flex-col gap-1 text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                <span>✓ Budget fixe garanti</span>
                <span>✓ Sans engagement</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-[600px]">
              <div 
                className={`absolute top-20 left-10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 shadow-blue-200/50'
                }`}
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Architecture Évolutive</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>100 → 1M utilisateurs</div>
                  </div>
                </div>
              </div>

              <div 
                className={`absolute top-32 right-10 backdrop-blur-xl rounded-2xl p-5 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200'
                }`}
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <Zap className="text-white" size={20} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>UX Intuitive</div>
                    <div className="text-[#2ca3bd] text-xs font-mono">Formation: 0 jour</div>
                  </div>
                </div>
              </div>

              <div 
                className={`absolute bottom-32 left-20 backdrop-blur-xl rounded-2xl p-5 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200'
                }`}
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <Code2 className="text-white" size={20} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Propriété Totale</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Le code vous appartient</div>
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

// Variant B: Simplified - Focus on pain point and promise
export function HeroVariantB() {
  const { theme } = useTheme();
  const { trackImpression, trackClick } = useABTest();

  useEffect(() => {
    trackImpression('hero', 'B');
  }, [trackImpression]);

  const scrollToROI = () => {
    trackClick('hero', 'B', 'cta_button');
    const roiSection = document.getElementById('contact-customdev');
    roiSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
        <div className={`absolute inset-0 bg-[size:50px_50px] opacity-50 ${
          theme === 'dark' 
            ? 'bg-[linear-gradient(rgba(44,163,189,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.02)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)]'
        }`}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        <div className="space-y-10">
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Arrêtez de Tordre Votre Business pour un{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
              Logiciel Standard
            </span>
          </h1>

          <p className={`text-2xl sm:text-3xl md:text-4xl font-semibold max-w-4xl mx-auto ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-800'
          }`}>
            Votre Application Sur Mesure, Livrée en{' '}
            <span className={`${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'} font-black`}>
              90 Jours
            </span>
            , Garantie Sans Bug
          </p>

          <div className="flex flex-col items-center gap-6 pt-4">
            <button
              onClick={scrollToROI}
              className={`group px-10 py-6 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_40px_rgba(44,163,189,0.4)]'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_0_40px_rgba(59,130,246,0.4)]'
              }`}
            >
              <span className="flex items-center gap-3">
                Démarrer Mon Projet
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </span>
            </button>
            
            <div className={`flex items-center gap-6 text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              <span>✓ Budget fixe</span>
              <span>✓ Sans engagement</span>
              <span>✓ Audit gratuit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Variant C: Minimal & Bold - Ultra-focused on action
export function HeroVariantC() {
  const { theme } = useTheme();
  const { trackImpression, trackClick } = useABTest();

  useEffect(() => {
    trackImpression('hero', 'C');
  }, [trackImpression]);

  const scrollToROI = () => {
    trackClick('hero', 'C', 'cta_button');
    const roiSection = document.getElementById('contact-customdev');
    roiSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-[90vh] flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#060705]'
        : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Votre Logiciel.<br />
              <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
                Vos Règles.
              </span>
            </h1>
            
            <p className={`text-xl sm:text-2xl md:text-3xl font-medium max-w-3xl ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}>
              90 jours. Budget fixe. Propriété totale.
            </p>
          </div>

          <button
            onClick={scrollToROI}
            className={`group px-12 py-7 text-2xl font-black rounded-full transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-[#2ca3bd] text-[#060705] hover:bg-[#3bb8d4]'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            <span className="flex items-center gap-4">
              Calculer Mon ROI
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
            </span>
          </button>
        </div>
      </div>

      {/* Minimal decorative element */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-transparent via-[#2ca3bd] to-transparent'
          : 'bg-gradient-to-r from-transparent via-blue-600 to-transparent'
      }`}></div>
    </section>
  );
}
