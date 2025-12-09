import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';
import { Check, Zap, Shield, TrendingUp, Users, Lock } from 'lucide-react';

export default function Features() {
  const { theme } = useTheme();
  const variant = useABTestVariant('features');

  if (variant === 'A') {
    return <FeaturesVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <FeaturesVariantB theme={theme} />;
  } else {
    return <FeaturesVariantC theme={theme} />;
  }
}

const FEATURES = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance. Sub-2s load times, smooth 60+ FPS interactions.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, compliance-ready, regular penetration testing.',
  },
  {
    icon: TrendingUp,
    title: 'Built to Scale',
    description: 'Architecture that grows with you. From 100 to 1M users seamlessly.',
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Research-driven UX. Extensive user testing at every stage.',
  },
  {
    icon: Lock,
    title: 'Data Privacy First',
    description: 'GDPR-compliant. Full control over user data and offline capabilities.',
  },
  {
    icon: Check,
    title: 'Production Ready',
    description: 'App Store optimization, analytics integration, monitoring included.',
  },
];

// =============================================
// VARIANT A: 2x2 Grid Cards
// =============================================
function FeaturesVariantA({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            What Sets Us Apart
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Six core advantages in every app we build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/50'
                  : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/50'
              }`}
            >
              <div className="bg-[#2ca3bd] p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={`text-base ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Bento-Style Layout
// =============================================
function FeaturesVariantB({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Why Teams Choose Us
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Every feature designed with your success in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className={`relative group p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl ${
                idx === 0 || idx === FEATURES.length - 1
                  ? 'lg:col-span-2'
                  : ''
              } ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-slate-50 border border-[#2ca3bd]/20'
              }`}
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-[#2ca3bd] rounded-full p-2">
                  <Check className="text-white" size={20} />
                </div>
              </div>
              
              <div className="bg-[#2ca3bd]/20 p-3 rounded-xl w-fit mb-4">
                <feature.icon className="text-[#2ca3bd]" size={28} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Numbered Feature List
// =============================================
function FeaturesVariantC({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Six Pillars of Excellence
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            The foundation of every successful mobile app we deliver.
          </p>
        </div>

        <div className="space-y-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className={`group flex gap-6 p-8 rounded-2xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-[#060705] to-[#0a0e0d] border border-[#2ca3bd]/15 hover:border-[#2ca3bd]/40'
                  : 'bg-gradient-to-r from-white to-slate-50 border border-[#2ca3bd]/15 hover:border-[#2ca3bd]/40'
              }`}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2ca3bd]/20 border-2 border-[#2ca3bd]">
                  <span className="text-2xl font-black text-[#2ca3bd]">{idx + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-base ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>

              {/* Icon */}
              <div className="hidden sm:block flex-shrink-0">
                <feature.icon className="text-[#2ca3bd]/30 group-hover:text-[#2ca3bd] transition-colors" size={40} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
