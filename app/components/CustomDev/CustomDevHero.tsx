import { ArrowRight, Zap, Shield, TrendingUp, Code2 } from 'lucide-react';

export default function CustomDevHero() {

  const scrollToROI = () => {
    const roiSection = document.getElementById('contact-customdev');
    roiSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[var(--bg-secondary)]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[var(--bg-secondary)]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)] light:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-[var(--text-primary)]">
              Votre Logiciel Sur Mesure en{' '}
              <span className="text-[#2ca3bd]">
                90 Jours
              </span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed text-[var(--text-secondary)]">
              Application web performante, adaptée à vos processus métier, livrée clé en main.
            </p>

            <div className="flex flex-col gap-4 items-start pt-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
                <button
                  onClick={scrollToROI}
                  className="group relative px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Mon audit gratuit
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                
                <button
                  onClick={scrollToROI}
                  className="group relative px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 border-2 cursor-pointer border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Démarrer mon projet
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>
              </div>
              
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2ca3bd]"></span>
                Audit gratuit et sans engagement
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Glow effect behind mockup */}
              <div className="absolute inset-0 blur-3xl -z-10 bg-slate-200/50 dark:bg-[#2ca3bd]/20 scale-90"></div>
              
              {/* Central mockup illustration */}
              <div className="relative w-full max-w-md h-96 rounded-2xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 z-10 bg-gradient-to-br from-[#2ca3bd]/10 to-white dark:from-[#2ca3bd]/20 dark:to-[#060705] border border-[#2ca3bd]/30">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
                
                {/* Browser window mockup */}
                <div className="p-4 h-full flex flex-col relative z-10">
                  {/* Window controls */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                  </div>
                  
                  {/* Content area with grid */}
                  <div className="flex-1 space-y-3">
                    {/* Header bar with pulse animation */}
                    <div className="h-8 rounded-lg animate-pulse-subtle relative overflow-hidden bg-slate-200/50 dark:bg-[#2ca3bd]/30">
                      <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-[#2ca3bd]/0 dark:via-[#2ca3bd]/40 dark:to-[#2ca3bd]/0 light:bg-gradient-to-r light:from-[#2ca3bd]/0 light:via-[#2ca3bd]/60 light:to-[#2ca3bd]/0 animate-slide"></div>
                    </div>
                    
                    {/* Card grid with stagger animation */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-20 rounded-lg animate-float-subtle relative overflow-hidden bg-slate-100 dark:bg-[#2ca3bd]/20" style={{ animationDelay: '0s' }}>
                        <div className="absolute top-2 left-2 w-8 h-1 rounded-full bg-[#2ca3bd]/40 dark:bg-[#2ca3bd]/50"></div>
                        <div className="absolute top-5 left-2 w-12 h-1 rounded-full bg-[#2ca3bd]/25 dark:bg-[#2ca3bd]/30"></div>
                      </div>
                      <div className="h-20 rounded-lg animate-float-subtle relative overflow-hidden bg-slate-100 dark:bg-[#2ca3bd]/20" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute top-2 left-2 w-8 h-1 rounded-full bg-[#2ca3bd]/40 dark:bg-[#2ca3bd]/50"></div>
                        <div className="absolute top-5 left-2 w-12 h-1 rounded-full bg-[#2ca3bd]/25 dark:bg-[#2ca3bd]/30"></div>
                      </div>
                    </div>
                    
                    {/* Large content area */}
                    <div className="h-32 rounded-lg relative overflow-hidden bg-[#2ca3bd]/25 dark:bg-[#2ca3bd]/30">
                      {/* Simulated chart bars */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-end gap-1">
                        <div className="w-full rounded-t opacity-0 bg-[#2ca3bd]/50 dark:bg-[#2ca3bd]/50 animate-grow" style={{ animationDelay: '0.5s', height: '2rem' }}></div>
                        <div className="w-full rounded-t opacity-0 bg-[#2ca3bd]/50 dark:bg-[#2ca3bd]/50 animate-grow" style={{ animationDelay: '0.7s', height: '4rem' }}></div>
                        <div className="w-full rounded-t opacity-0 bg-[#2ca3bd]/50 dark:bg-[#2ca3bd]/50 animate-grow" style={{ animationDelay: '0.9s', height: '3rem' }}></div>
                        <div className="w-full rounded-t opacity-0 bg-[#2ca3bd]/50 dark:bg-[#2ca3bd]/50 animate-grow" style={{ animationDelay: '1.1s', height: '5rem' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating feature cards */}
              <div 
                className="absolute top-8 -left-4 backdrop-blur-xl rounded-xl p-4 shadow-2xl animate-float z-20 bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20"
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#2ca3bd] p-1.5 rounded-lg">
                    <TrendingUp className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[var(--text-primary)]">Évolutif</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">100 → 1M users</div>
                  </div>
                </div>
              </div>

              <div 
                className="absolute top-20 -right-8 backdrop-blur-xl rounded-xl p-4 shadow-2xl animate-float z-20 bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#2ca3bd] p-1.5 rounded-lg">
                    <Zap className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[var(--text-primary)]">Rapide</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">&lt; 2s chargement</div>
                  </div>
                </div>
              </div>

              <div 
                className="absolute bottom-16 -left-8 backdrop-blur-xl rounded-xl p-4 shadow-2xl animate-float z-20 bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#2ca3bd] p-1.5 rounded-lg">
                    <Shield className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[var(--text-primary)]">Sécurisé</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">SOC 2 compliant</div>
                  </div>
                </div>
              </div>

              <div 
                className="absolute bottom-8 -right-4 backdrop-blur-xl rounded-xl p-4 shadow-2xl animate-float z-20 bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#2ca3bd] p-1.5 rounded-lg">
                    <Code2 className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[var(--text-primary)]">Testé</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">100% coverage</div>
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
