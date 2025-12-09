import { CheckCircle2, TrendingUp, Zap, Smartphone, Shield, Users } from 'lucide-react';
import { useABTestVariant } from '../../hooks/useABTest';

export default function MobileAppHero() {
  const variant = useABTestVariant('hero');

  if (variant === 'A') {
    return <HeroVariantA />;
  } else if (variant === 'B') {
    return <HeroVariantB />;
  } else {
    return <HeroVariantC />;
  }
}

// =============================================
// VARIANT A: Animated Floating Cards (Left) + Headline (Right)
// =============================================
function HeroVariantA() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Floating Cards */}
          <div className="relative h-96 lg:h-full">
            <div className="absolute top-0 left-0 w-72 h-48 bg-gradient-to-br from-[#2ca3bd] to-transparent rounded-2xl p-6 shadow-2xl animate-float" style={{ animationDelay: '0s' }}>
              <Smartphone className="text-white mb-3" size={28} />
              <p className="text-white font-semibold">Zéro Bug</p>
              <p className="text-blue-100 text-sm">Vitesse maximale</p>
            </div>
            <div className="absolute top-24 right-0 w-64 h-44 bg-gradient-to-br from-[#1e7a8f] to-transparent rounded-2xl p-6 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
              <Shield className="text-white mb-3" size={28} />
              <p className="text-white font-semibold">Sécurisé au Max</p>
              <p className="text-blue-100 text-sm">Conforme DORA/RGAA</p>
            </div>
            <div className="absolute bottom-0 left-20 w-64 h-44 bg-gradient-to-br from-[#2ca3bd] to-transparent rounded-2xl p-6 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
              <TrendingUp className="text-white mb-3" size={28} />
              <p className="text-white font-semibold">Prêt pour la Croissance</p>
              <p className="text-blue-100 text-sm">Des millions d'utilisateurs</p>
            </div>
          </div>

          {/* Right: Headline & CTA */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight">
                Catapultez votre appli mobile.
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#2ca3bd] mt-4">
                Construisez une application que vous possédez vraiment. Rapide. Sécurisée. Et prête pour la guerre.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white font-bold rounded-lg transition-all">
                Faire auditer mon projet
              </button>
              <button className="px-8 py-4 border-2 border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd] hover:text-white font-bold rounded-lg transition-all">
                Voir Tarifs
              </button>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">✓ Audit gratuit • ✓ 30 minutes • ✓ Sans engagement</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Split Layout with Benefits
// =============================================
function HeroVariantB() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] relative overflow-hidden flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Minimal Headline */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] leading-tight">
                Catapultez votre appli mobile.
              </h1>
              <h2 className="text-2xl font-semibold text-[#2ca3bd] mt-4">
                Construisez une application que vous possédez vraiment. Rapide. Sécurisée. Et prête pour la guerre.
              </h2>
            </div>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Une équipe complète de spécialistes mobiles. Pas de freelance débordé. Pas d'outils automatiques fragiles.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2ca3bd]" size={24} />
                <span className="text-[var(--text-primary)]">Propriétaire du code à 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2ca3bd]" size={24} />
                <span className="text-[var(--text-primary)]">Rapide, même avec des millions d'utilisateurs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2ca3bd]" size={24} />
                <span className="text-[var(--text-primary)]">Sécurisé (DORA/RGAA compliant)</span>
              </div>
            </div>
            <button className="mt-8 px-8 py-4 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white font-bold rounded-lg transition-all">
              Faire auditer mon projet
            </button>
          </div>

          {/* Right: Mockup Illustration */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <div className="w-48 h-96 bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Smartphone className="text-white opacity-50" size={80} />
              </div>
              <div className="absolute top-4 left-4 right-4 h-6 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Full-Width Immersive with Gradient
// =============================================
function HeroVariantC() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2ca3bd] via-[#1e7a8f] to-[var(--bg-primary)] relative overflow-hidden pt-20">
      {/* Animated Background Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2ca3bd] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1e7a8f] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8 mb-16">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Catapultez votre appli mobile.
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-blue-100 mt-6 max-w-2xl mx-auto leading-relaxed">
              Construisez une application que vous possédez vraiment. Rapide. Sécurisée. Et prête pour la guerre.
            </h2>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
          {[
            { icon: Zap, label: 'Zéro Bug', desc: 'Vitesse maximale' },
            { icon: Shield, label: 'Sécurisé Max', desc: 'DORA/RGAA' },
            { icon: Users, label: 'Prêt à Scaler', desc: 'Millions d\'utilisateurs' },
          ].map((item, i) => (
            <div key={i} className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-5 hover:bg-opacity-20 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="text-white flex-shrink-0" size={20} />
                <h3 className="font-bold text-white text-sm sm:text-base">{item.label}</h3>
              </div>
              <p className="text-blue-100 text-xs sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA & Social Proof */}
        <div className="text-center space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1e7a8f] font-bold rounded-lg hover:bg-blue-50 transition-all text-base shadow-2xl">
              Faire auditer mon projet
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#1e7a8f] transition-all text-base">
              Voir Comment On Fonctionne
            </button>
          </div>
          <div className="pt-8">
            <p className="text-blue-100 text-sm mb-4">Spécialistes dans</p>
            <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap opacity-90">
              <span className="text-white font-semibold text-sm sm:text-base">Santé</span>
              <span className="text-white font-semibold text-sm sm:text-base">Finance</span>
              <span className="text-white font-semibold text-sm sm:text-base">Retail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
