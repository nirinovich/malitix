import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HERO_CONTENT, CTA_TEXT } from '../utils/constants';

export default function HeroClean() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-[#060705] to-[#0a0e0d] dark:from-[#060705] dark:to-[#0a0e0d] light:from-white light:to-gray-50">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2ca3bd]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-5 py-2 text-sm text-[#2ca3bd] font-medium">
            <div className="w-2 h-2 bg-[#2ca3bd] rounded-full animate-pulse"></div>
            <span>Votre partenaire technologique de confiance</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white dark:text-white light:text-gray-900 leading-tight max-w-4xl mx-auto">
            {HERO_CONTENT.clean.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/70 dark:text-white/70 light:text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {HERO_CONTENT.clean.subheadline}
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
            {['Expertise complète', 'Support 24/7', 'Innovation continue'].map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2"
              >
                <CheckCircle2 size={16} className="text-[#2ca3bd]" />
                <span className="text-white/90 text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#contact"
              className="group bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              {CTA_TEXT.primary}
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="bg-white text-[#060705] hover:bg-white/90 px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300"
            >
              {CTA_TEXT.secondary}
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-16 border-t border-white/10 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#2ca3bd]">100+</div>
                <div className="text-white/60 text-sm">Projets réalisés</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#2ca3bd]">50+</div>
                <div className="text-white/60 text-sm">Clients satisfaits</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#2ca3bd]">99.9%</div>
                <div className="text-white/60 text-sm">Disponibilité</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#2ca3bd]">24/7</div>
                <div className="text-white/60 text-sm">Support technique</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#2ca3bd] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
