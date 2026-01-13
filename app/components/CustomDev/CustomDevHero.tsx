import { ArrowRight, Code2, TrendingUp, Zap, Shield } from 'lucide-react';
import { useTheme } from '~/context/ThemeContext';

export default function CustomDevHero() {
  const { theme } = useTheme();

  const scrollToROI = () => {
    const roiSection = document.getElementById('contact-customdev');
    roiSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-br from-\[var(--bg-primary)\] via-\[var(--bg-primary)\] to-\[var(--bg-primary)\]'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-[var(--bg-secondary)]'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[var(--bg-secondary)]'
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
              <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'}>
                90 Jours
              </span>
            </h1>

            <p className={`text-xl sm:text-2xl leading-relaxed ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              Application web performante, adaptée à vos processus métier, livrée clé en main.
            </p>

            <div className="flex flex-col gap-4 items-start pt-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
                <button
                  onClick={scrollToROI}
                  className={`group relative px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                      : 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Mon audit gratuit
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                
                <button
                  onClick={scrollToROI}
                  className={`group relative px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 border-2 cursor-pointer ${
                    theme === 'dark'
                      ? 'border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10'
                      : 'border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Démarrer mon projet
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>
              </div>
              
              <div className={`flex items-center gap-2 text-sm font-medium ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-[#2ca3bd]'}`}></span>
                Audit gratuit et sans engagement
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Glow effect behind mockup */}
              <div className={`absolute inset-0 blur-3xl -z-10 ${
                theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-slate-200/50'
              } scale-90`}></div>
              
              {/* Central mockup illustration */}
              <div className={`relative w-full max-w-md h-96 rounded-2xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 z-10 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#060705] border border-[#2ca3bd]/30'
                  : 'bg-gradient-to-br from-[#2ca3bd]/10 to-white border border-[#2ca3bd]/30'
              }`}>
                {/* Header of mockup */}
                <div className={`h-8 border-b flex items-center px-4 gap-2 ${
                  theme === 'dark'
                    ? 'bg-[#0f1412] border-[#2ca3bd]/20'
                    : 'bg-white border-slate-200'
                }`}>
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                
                {/* Content of mockup */}
                <div className={`p-6 space-y-4 ${
                   theme === 'dark' ? 'bg-[#060705]/80' : 'bg-white/80'
                }`}>
                  <div className={`h-8 w-3/4 rounded-lg ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'
                  }`}></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`h-32 rounded-lg ${
                      theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-slate-100'
                    }`}></div>
                    <div className={`h-32 rounded-lg ${
                      theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-slate-100'
                    }`}></div>
                  </div>
                  <div className={`h-4 w-full rounded ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'
                  }`}></div>
                  <div className={`h-4 w-5/6 rounded ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'
                  }`}></div>
                </div>

                {/* Floating Elements on Mockup */}
                <div className={`absolute -right-8 top-20 p-4 rounded-xl shadow-xl backdrop-blur-md animate-float border ${
                  theme === 'dark'
                    ? 'bg-[#060705]/90 border-[#2ca3bd]/30 text-white'
                    : 'bg-white/90 border-slate-200 text-slate-800'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#2ca3bd]/20 rounded-lg text-[#2ca3bd]">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-xs opacity-70">Performance</div>
                      <div className="font-bold">+300%</div>
                    </div>
                  </div>
                </div>

                <div className={`absolute -left-8 bottom-32 p-4 rounded-xl shadow-xl backdrop-blur-md animate-float border ${
                  theme === 'dark'
                    ? 'bg-[#060705]/90 border-[#2ca3bd]/30 text-white'
                    : 'bg-white/90 border-slate-200 text-slate-800'
                }`} style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#2ca3bd]/20 rounded-lg text-[#2ca3bd]">
                      <Shield size={20} />
                    </div>
                    <div>
                      <div className="text-xs opacity-70">Sécurité</div>
                      <div className="font-bold">100%</div>
                    </div>
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
