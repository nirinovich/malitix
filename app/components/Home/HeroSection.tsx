import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Code, Database, Cpu, Sparkles } from 'lucide-react';
import { HERO_CONTENT, CTA_TEXT } from '~/utils/constants';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden bg-[var(--hero-gradient-bg)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[var(--hero-orb-primary)]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[var(--hero-orb-secondary)]" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[size:50px_50px] bg-[image:var(--hero-grid-pattern)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animated Decorative Elements */}
          <div className="relative hidden lg:block">
            {/* Floating Cards */}
            <div className="relative h-[600px]">
              {/* Main floating card - Code snippet */}
              <div 
                className="absolute top-20 left-10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl animate-float bg-[image:var(--card-bg)] border border-[var(--card-border)] shadow-[var(--card-shadow)]"
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--text-primary)]">Web & Mobile</div>
                    <div className="text-xs text-[var(--text-tertiary)]">React • TypeScript</div>
                  </div>
                </div>
                <div className="rounded-lg p-3 font-mono text-xs space-y-1 bg-[var(--card-code-bg)]">
                  <div className="text-[var(--brand-text)]">{'<Component>'}</div>
                  <div className="pl-4 text-[var(--text-secondary)]">{'Innovation'}</div>
                  <div className="text-[var(--brand-text)]">{'</Component>'}</div>
                </div>
              </div>

              {/* Database card */}
              <div 
                className="absolute top-32 right-10 backdrop-blur-xl rounded-2xl p-5 shadow-2xl animate-float bg-[image:var(--card-bg)] border border-[var(--card-border)] shadow-[var(--card-shadow)]"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <Database className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--text-primary)]">Data Platform</div>
                    <div className="text-[var(--brand-text)] text-xs font-mono">99.9% uptime</div>
                  </div>
                </div>
              </div>

              {/* AI chip card */}
              <div 
                className="absolute bottom-32 left-20 backdrop-blur-xl rounded-2xl p-5 shadow-2xl animate-float bg-[image:var(--card-bg)] border border-[var(--card-border)] shadow-[var(--card-shadow)]"
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <Cpu className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--text-primary)]">IA Métier</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-[#2ca3bd] rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats card */}
              <div 
                className="absolute bottom-12 right-16 backdrop-blur-xl rounded-2xl p-6 shadow-2xl animate-float bg-[image:var(--card-bg)] border border-[var(--card-border)] shadow-[var(--card-shadow)]"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-4">
                  <Sparkles className="text-[var(--brand-text)]" size={32} />
                  <div>
                    <div className="text-3xl font-bold text-[var(--text-primary)]">600+</div>
                    <div className="text-xs text-[var(--text-tertiary)]">Projets réussis</div>
                  </div>
                </div>
              </div>

              {/* Connecting lines that float with cards */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none animate-float" style={{ zIndex: -1, animationDelay: '0s' }}>
                <line x1="35%" y1="25%" x2="65%" y2="30%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(44,163,189,0)" />
                    <stop offset="50%" stopColor="rgba(44,163,189,0.5)" />
                    <stop offset="100%" stopColor="rgba(44,163,189,0)" />
                  </linearGradient>
                </defs>
              </svg>
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none animate-float" style={{ zIndex: -1, animationDelay: '1s' }}>
                <line x1="65%" y1="35%" x2="32%" y2="68%" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(44,163,189,0)" />
                    <stop offset="50%" stopColor="rgba(44,163,189,0.5)" />
                    <stop offset="100%" stopColor="rgba(44,163,189,0)" />
                  </linearGradient>
                </defs>
              </svg>
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none animate-float" style={{ zIndex: -1, animationDelay: '2s' }}>
                <line x1="40%" y1="70%" x2="65%" y2="75%" stroke="url(#gradient3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(44,163,189,0)" />
                    <stop offset="50%" stopColor="rgba(44,163,189,0.5)" />
                    <stop offset="100%" stopColor="rgba(44,163,189,0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight text-[var(--text-primary)]">
              {HERO_CONTENT.animated.headline.split('\n').map((line, lineIndex) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: lineIndex * 0.12, duration: 0.5 }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg sm:text-xl max-w-2xl leading-relaxed text-[var(--text-secondary)]"
            >
              {HERO_CONTENT.animated.subheadline}
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (window as any).gtag_report_conversion('#contact');
                  }
                }}
                className="group bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {CTA_TEXT.primary}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="backdrop-blur-xl px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] border border-[var(--border-primary)] text-[var(--text-primary)]"
              >
                {CTA_TEXT.secondary}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 border-t border-[var(--border-primary)]">
              <div>
                <div className="text-3xl font-bold text-[var(--brand-text)]">600+</div>
                <div className="text-sm text-[var(--text-tertiary)]">Projets</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--brand-text)]">350+</div>
                <div className="text-sm text-[var(--text-tertiary)]">Ingénieurs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--brand-text)]">24/7</div>
                <div className="text-sm text-[var(--text-tertiary)]">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 border-[var(--scroll-border)]">
          <div className="w-1 h-2 bg-[#2ca3bd] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
