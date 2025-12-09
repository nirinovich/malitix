import { ArrowRight, Code2, TrendingUp, Zap, Smartphone } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';

export default function MobileAppHero() {
  const { theme } = useTheme();
  const variant = useABTestVariant('hero');

  if (variant === 'A') {
    return <HeroVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <HeroVariantB theme={theme} />;
  } else {
    return <HeroVariantC theme={theme} />;
  }
}

// =============================================
// VARIANT A: Animated Floating Cards (Left) + Headline (Right)
// =============================================
function HeroVariantA({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section
      id="hero"
      className={`relative min-h-[90vh] flex items-center overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-slate-200/50'
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-slate-200/40'
          }`}
          style={{ animationDelay: '2s' }}
        ></div>

        {/* Grid pattern */}
        <div
          className={`absolute inset-0 bg-[size:50px_50px] ${
            theme === 'dark'
              ? 'bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)]'
              : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Floating Cards */}
          <div className="relative hidden lg:block h-[600px]">
            {/* iOS Mockup Card */}
            <div
              className={`absolute top-0 left-0 w-64 backdrop-blur-xl rounded-3xl p-6 shadow-2xl animate-float ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
              }`}
              style={{ animationDelay: '0s' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#2ca3bd] p-2 rounded-lg">
                  <Smartphone className="text-white" size={24} />
                </div>
                <div>
                  <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>iOS App</div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>SwiftUI • Native</div>
                </div>
              </div>
              <div className={`rounded-lg p-4 font-mono text-xs space-y-2 ${theme === 'dark' ? 'bg-[#060705]/50' : 'bg-gray-100'}`}>
                <div className="h-3 bg-[#2ca3bd]/50 rounded w-20"></div>
                <div className="h-3 bg-[#2ca3bd]/30 rounded w-32"></div>
                <div className="h-3 bg-[#2ca3bd]/20 rounded w-24"></div>
              </div>
            </div>

            {/* Android Mockup Card */}
            <div
              className={`absolute top-40 right-0 w-64 backdrop-blur-xl rounded-3xl p-6 shadow-2xl animate-float ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
              }`}
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#2ca3bd] p-2 rounded-lg">
                  <Code2 className="text-white" size={24} />
                </div>
                <div>
                  <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Android App</div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Kotlin • Native</div>
                </div>
              </div>
              <div className={`rounded-lg p-4 font-mono text-xs space-y-2 ${theme === 'dark' ? 'bg-[#060705]/50' : 'bg-gray-100'}`}>
                <div className="h-3 bg-[#2ca3bd]/50 rounded w-24"></div>
                <div className="h-3 bg-[#2ca3bd]/30 rounded w-28"></div>
                <div className="h-3 bg-[#2ca3bd]/20 rounded w-20"></div>
              </div>
            </div>

            {/* Performance Badge */}
            <div
              className={`absolute bottom-32 left-16 backdrop-blur-xl rounded-2xl p-5 shadow-2xl animate-float ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
              }`}
              style={{ animationDelay: '1.5s' }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#2ca3bd] p-2 rounded-lg">
                  <Zap className="text-white" size={20} />
                </div>
                <div>
                  <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Ultra Fast</div>
                  <div className="text-[#2ca3bd] text-xs font-mono">Sub-2s Load Time</div>
                </div>
              </div>
            </div>

            {/* Users Badge */}
            <div
              className={`absolute bottom-0 right-20 backdrop-blur-xl rounded-2xl p-6 shadow-2xl animate-float ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
              }`}
              style={{ animationDelay: '2s' }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#2ca3bd] p-2 rounded-lg">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>50+</div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Apps Shipped</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Headline & CTA */}
          <div className="space-y-8">
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Mobile Apps That{' '}
              <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'}>Drive Real Results</span>
            </h1>

            <p
              className={`text-xl sm:text-2xl leading-relaxed ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}
            >
              Native iOS, Android, and cross-platform apps built with cutting-edge technology. We deliver production-ready applications in 120 days.
            </p>

            <div className="flex flex-col gap-4 items-start pt-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
                <button
                  className={`group relative px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                      : 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>

                <button
                  className={`group relative px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 border-2 ${
                    theme === 'dark'
                      ? 'border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10'
                      : 'border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Case Studies
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>
              </div>

              <div className={`flex items-center gap-2 text-sm font-medium ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-[#2ca3bd]'}`}></span>
                Free 30-min discovery call, no commitment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Split Layout with Mockups (Minimalist)
// =============================================
function HeroVariantB({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section
      className={`relative min-h-[90vh] flex items-center overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-[#2ca3bd]/15' : 'bg-slate-200/40'
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:min-h-[600px]">
          {/* LEFT: Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h1
                className={`text-5xl sm:text-6xl font-black leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Next-Gen Mobile Apps
              </h1>

              <p
                className={`text-lg sm:text-xl ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}
              >
                From concept to app store in 120 days. Native performance, cross-platform reach.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {['Native iOS & Android Development', 'Cross-Platform Solutions (React Native, Flutter)', 'Progressive Web Apps'].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-[#2ca3bd] rounded-full p-1.5 mt-1 flex-shrink-0">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <span className={`text-base font-medium ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <button
                className={`px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#2ca3bd] text-white hover:bg-[#1e7a8f] shadow-lg'
                    : 'bg-[#2ca3bd] text-white hover:bg-[#1e7a8f] shadow-lg'
                }`}
              >
                Start Your App
              </button>
              <button
                className={`px-6 py-3 text-base font-semibold rounded-xl transition-all border-2 ${
                  theme === 'dark'
                    ? 'border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10'
                    : 'border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10'
                }`}
              >
                See Examples
              </button>
            </div>
          </div>

          {/* RIGHT: Mockup Illustration */}
          <div className="relative order-1 lg:order-2 h-96 lg:h-[600px] flex items-center justify-center">
            <div
              className={`absolute inset-0 rounded-2xl blur-3xl -z-10 ${
                theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-slate-200/50'
              }`}
            ></div>

            <div className="relative w-full max-w-xs h-96 rounded-3xl overflow-hidden shadow-2xl">
              {/* Simple Phone Mockup */}
              <div className={`w-full h-full ${theme === 'dark' ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#060705]' : 'bg-gradient-to-br from-[#2ca3bd]/10 to-white'} border-8 rounded-3xl ${theme === 'dark' ? 'border-[#2ca3bd]/30' : 'border-[#2ca3bd]/20'}`}>
                <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-4">
                  <Smartphone size={48} className="text-[#2ca3bd]/50" />
                  <div className="space-y-2 w-full">
                    <div className="h-2 bg-[#2ca3bd]/30 rounded-full"></div>
                    <div className="h-2 bg-[#2ca3bd]/20 rounded-full w-5/6"></div>
                    <div className="h-2 bg-[#2ca3bd]/10 rounded-full w-4/6"></div>
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

// =============================================
// VARIANT C: Full-Width Immersive with Overlay
// =============================================
function HeroVariantC({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#060705] via-[#0a0e0d] to-[#0a0e0d]'
          : 'bg-gradient-to-b from-white via-gray-50 to-gray-100'
      }`}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl animate-pulse ${
            theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-slate-200/30'
          }`}
          style={{ animationDuration: '4s' }}
        ></div>
        <div
          className={`absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl animate-pulse ${
            theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-slate-200/30'
          }`}
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center space-y-8">
        {/* Tagline */}
        <div className="space-y-2">
          <div
            className={`inline-block px-4 py-2 rounded-full border ${
              theme === 'dark'
                ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30 text-[#2ca3bd]'
                : 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30 text-[#2ca3bd]'
            } text-sm font-semibold`}
          >
            ✨ Building the Future of Mobile
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Mobile Apps{' '}
          <span className="inline-block relative">
            <span className="relative z-10 text-[#2ca3bd]">Your Users Love</span>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#2ca3bd]/20 -z-10 rounded-full"></div>
          </span>
        </h1>

        {/* Description */}
        <p
          className={`text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-white/75' : 'text-gray-700'
          }`}
        >
          Expert development for iOS, Android, and cross-platform solutions. We transform your ideas into stunning, scalable applications.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {[
            { icon: Code2, label: 'Native & Cross-Platform' },
            { icon: Zap, label: 'High Performance' },
            { icon: TrendingUp, label: 'Scalable Design' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-[#2ca3bd]/10 border border-[#2ca3bd]/30'
                  : 'bg-[#2ca3bd]/10 border border-[#2ca3bd]/30'
              }`}
            >
              <item.icon size={18} className="text-[#2ca3bd]" />
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            className={`group relative px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                : 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              Begin Your Project
              <ArrowRight size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>

          <button
            className={`px-8 py-4 text-lg font-bold rounded-2xl transition-all border-2 ${
              theme === 'dark'
                ? 'border-[#2ca3bd]/40 text-white hover:border-[#2ca3bd] hover:bg-[#2ca3bd]/10'
                : 'border-[#2ca3bd]/40 text-gray-900 hover:border-[#2ca3bd] hover:bg-[#2ca3bd]/10'
            }`}
          >
            Schedule Call
          </button>
        </div>

        {/* Social Proof */}
        <div className={`pt-12 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-300/50'}`}>
          <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'} mb-4`}>
            Trusted by innovators and enterprises
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {['50+ Apps Shipped', '4.8★ Avg Rating', '2M+ Users', '98% Retention'].map((stat, idx) => (
              <div key={idx} className={`text-center ${idx > 0 ? `border-l ${theme === 'dark' ? 'border-white/10' : 'border-gray-300/50'} pl-8` : ''}`}>
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {stat.split(' ')[0]}
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>{stat.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
