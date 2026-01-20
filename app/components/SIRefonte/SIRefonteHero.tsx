import { Shield, Cloud, Database, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

// Variant A: Split Screen with Animated SI Diagram
export default function SIRefonteHero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sirefonte');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[size:60px_60px] opacity-30 bg-[image:var(--hero-grid-pattern)]"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse bg-[var(--accent-secondary)]" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse bg-[var(--accent-secondary)]" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] text-[var(--text-primary)]">
                Votre SI doit{' '}
                <span className="relative inline-block">
                  <span className="text-[#2ca3bd]">accélérer</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path 
                      d="M0 6 Q50 2, 100 6 T200 6" 
                      stroke="#2ca3bd" 
                      strokeWidth="5" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                {' '}votre business.
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text-secondary)]">
                Pas le freiner.
              </h2>
            </div>

            {/* Key Benefits Pills */}
            <div className="flex flex-wrap gap-3">
              {['Cloud', 'Data', 'Sécurité', 'IA'].map((item, idx) => (
                <div 
                  key={idx}
                  className="px-5 py-2.5 rounded-xl font-semibold text-sm backdrop-blur-sm bg-[#2ca3bd]/20 text-[#2ca3bd] border border-[#2ca3bd]/30"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Value Prop */}
            <div className="p-6 rounded-2xl backdrop-blur-sm border bg-[var(--surface-primary)] border-[var(--border-primary)]">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#2ca3bd] mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-base text-[var(--text-secondary)]">
                    <strong>Une vision claire</strong> de votre SI actuel
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#2ca3bd] mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-base text-[var(--text-secondary)]">
                    <strong>3 quick wins</strong> à ROI immédiat
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#2ca3bd] mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-base text-[var(--text-secondary)]">
                    <strong>Une roadmap 90 jours</strong> — en 72h
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group cursor-pointer relative px-8 py-5 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] text-white shadow-[0_0_40px_rgba(44,163,189,0.3)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Je demande mon Audit Express offert
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>

            <p className="text-sm text-[var(--text-tertiary)]">
              ⚡ Réponse sous 24h • Lumière sous 72h • Sans engagement
            </p>
          </div>

          {/* Right Column - SI Architecture Illustration */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Background glow effects */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-96 h-96 bg-[#2ca3bd] rounded-full blur-3xl"></div>
            </div>

            {/* Central Warning Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 30 }}>
              <div className="w-36 h-36 rounded-2xl flex flex-col items-center justify-center backdrop-blur-xl border-2 shadow-2xl animate-pulse bg-red-500/10 border-red-500/50" style={{ animationDuration: '2s' }}>
                <div className="text-xs font-bold mb-2 text-red-500">
                  SI Actuel
                </div>
                <div className="text-3xl mb-2">⚠️</div>
                <div className="text-xs font-semibold text-red-500/80">
                  Dette tech
                </div>
              </div>
            </div>

            {/* Top - IA */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2" style={{ zIndex: 20, animation: 'float 6s ease-in-out infinite', animationDelay: '0s' }}>
              <div className="w-28 h-28 rounded-xl backdrop-blur-xl flex flex-col items-center justify-center gap-2 shadow-xl border-2 bg-[var(--surface-primary)] border-[#2ca3bd]/30">
                <Sparkles size={32} className="text-[#2ca3bd]" />
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  IA
                </span>
              </div>
            </div>

            {/* Right - Cloud */}
            <div className="absolute top-1/2 right-8 -translate-y-1/2" style={{ zIndex: 20, animation: 'float 6s ease-in-out infinite', animationDelay: '1.5s' }}>
              <div className="w-28 h-28 rounded-xl backdrop-blur-xl flex flex-col items-center justify-center gap-2 shadow-xl border-2 bg-[var(--surface-primary)] border-[#2ca3bd]/30">
                <Cloud size={32} className="text-[#2ca3bd]" />
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  Cloud
                </span>
              </div>
            </div>

            {/* Bottom - Data */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ zIndex: 20, animation: 'float 6s ease-in-out infinite', animationDelay: '3s' }}>
              <div className="w-28 h-28 rounded-xl backdrop-blur-xl flex flex-col items-center justify-center gap-2 shadow-xl border-2 bg-[var(--surface-primary)] border-[#2ca3bd]/30">
                <Database size={32} className="text-[#2ca3bd]" />
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  Data
                </span>
              </div>
            </div>

            {/* Left - Sécurité */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2" style={{ zIndex: 20, animation: 'float 6s ease-in-out infinite', animationDelay: '4.5s' }}>
              <div className="w-28 h-28 rounded-xl backdrop-blur-xl flex flex-col items-center justify-center gap-2 shadow-xl border-2 bg-[var(--surface-primary)] border-[#2ca3bd]/30">
                <Shield size={32} className="text-[#2ca3bd]" />
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  Sécurité
                </span>
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
              {/* Top line to IA */}
              <line
                x1="50%" y1="50%"
                x2="50%" y2="15%"
                stroke="#2ca3bd"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.5"
              />
              {/* Right line to Cloud */}
              <line
                x1="50%" y1="50%"
                x2="85%" y2="50%"
                stroke="#2ca3bd"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.5"
              />
              {/* Bottom line to Data */}
              <line
                x1="50%" y1="50%"
                x2="50%" y2="85%"
                stroke="#2ca3bd"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.5"
              />
              {/* Left line to Sécurité */}
              <line
                x1="50%" y1="50%"
                x2="15%" y2="50%"
                stroke="#2ca3bd"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
