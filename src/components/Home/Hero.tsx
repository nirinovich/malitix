import { ArrowRight, Code, Database, Cpu, Sparkles } from 'lucide-react';
import { HERO_CONTENT, CTA_TEXT } from '../../utils/constants';
import { useTheme } from '../../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  
  return (
    <section id="home" className={`relative min-h-[80vh] flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
        : 'bg-[var(--bg-primary)]'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-[var(--bg-secondary)]'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-slate-200/40'
        }`} style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 bg-[size:50px_50px] ${
          theme === 'dark' 
            ? 'bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animated Decorative Elements */}
          <div className="relative hidden lg:block">
            {/* Floating Cards */}
            <div className="relative h-[600px]">
              {/* Main floating card - Code snippet */}
              <div 
                className={`absolute top-20 left-10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-\[var(--surface-primary)\] to-\[var(--surface-primary)\] border border-[#2ca3bd]/20 shadow-blue-200/50'
                }`}
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Web & Mobile</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>React • TypeScript</div>
                  </div>
                </div>
                <div className={`rounded-lg p-3 font-mono text-xs space-y-1 ${
                  theme === 'dark' ? 'bg-[#060705]/50' : 'bg-[var(--bg-secondary)]'
                }`}>
                  <div className="text-[#2ca3bd]">{'<Component>'}</div>
                  <div className={`pl-4 ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>{'Innovation'}</div>
                  <div className="text-[#2ca3bd]">{'</Component>'}</div>
                </div>
              </div>

              {/* Database card */}
              <div 
                className={`absolute top-32 right-10 backdrop-blur-xl rounded-2xl p-5 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-\[var(--surface-primary)\] to-\[var(--surface-primary)\] border border-[#2ca3bd]/20 shadow-blue-200/50'
                }`}
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <Database className="text-white" size={20} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Data Platform</div>
                    <div className="text-[#2ca3bd] text-xs font-mono">99.9% uptime</div>
                  </div>
                </div>
              </div>

              {/* AI chip card */}
              <div 
                className={`absolute bottom-32 left-20 backdrop-blur-xl rounded-2xl p-5 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-\[var(--surface-primary)\] to-\[var(--surface-primary)\] border border-[#2ca3bd]/20 shadow-blue-200/50'
                }`}
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <Cpu className="text-white" size={20} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>IA Métier</div>
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
                className={`absolute bottom-12 right-16 backdrop-blur-xl rounded-2xl p-6 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-\[var(--surface-primary)\] to-\[var(--surface-primary)\] border border-[#2ca3bd]/20 shadow-blue-200/50'
                }`}
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-4">
                  <Sparkles className="text-[#2ca3bd]" size={32} />
                  <div>
                    <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>600+</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Projets réussis</div>
                  </div>
                </div>
              </div>

              {/* Connecting lines that float with cards */}
              {/* Line 1: Floats with Web & Mobile card */}
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
              
              {/* Line 2: Floats with Data Platform card */}
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
              
              {/* Line 3: Floats with IA Métier card */}
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
          <div className="text-center lg:text-left space-y-8">

            {/* Headline */}
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {HERO_CONTENT.animated.headline.split(' ').map((word, i) => (
                <span
                  key={i}
                  className="inline-block opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards] mr-3"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className={`text-lg sm:text-xl max-w-2xl leading-relaxed ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}>
              {HERO_CONTENT.animated.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
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
                className={`backdrop-blur-xl px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                    : 'bg-[var(--bg-secondary)] hover:bg-[var(--surface-primary)] border border-gray-200 text-gray-900'
                }`}
              >
                {CTA_TEXT.secondary}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap gap-8 justify-center lg:justify-start pt-8 border-t ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div>
                <div className="text-3xl font-bold text-[#2ca3bd]">600+</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Projets</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2ca3bd]">350+</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Ingénieurs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2ca3bd]">24/7</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${
          theme === 'dark' ? 'border-white/30' : 'border-gray-400'
        }`}>
          <div className="w-1 h-2 bg-[#2ca3bd] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

