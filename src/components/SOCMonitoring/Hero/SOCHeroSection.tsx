import { ArrowRight, ArrowDown, Star } from 'lucide-react';
import SOCHeroVariantB_TrustImage from './SOCHeroVariantB_TrustImage.tsx';

/* ─── Props ─── */
interface Props {
  scrollToCalculator: () => void;
  scrollToContact: () => void;
}

/* ─── Component ─── */
export default function SOCHeroSection({ scrollToCalculator, scrollToContact }: Props) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--brand-primary)]/15 blur-[120px] animate-pulse-subtle" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--brand-primary)]/10 blur-[100px] animate-float-subtle" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--brand-primary)]/5 blur-[150px]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* ── Left Content ── */}
        <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-black leading-[1.12] tracking-[-0.01em] text-[var(--text-primary)]">
            <span className="block">Vos ingénieurs coûtent</span>
            <span className="block">trop cher pour</span>
            <span className="relative inline-block block">
              <span className="text-[var(--brand-primary)]">faire les pompiers</span>
              <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                <path d="M0 5 Q50 0, 100 5 T200 5" stroke="var(--brand-primary)" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl">
            Ne laissez plus vos talents seniors se noyer sous les alertes.
            Externalisez le monitoring à nos experts SOC pour{' '}
            <span className="font-semibold text-[var(--brand-primary)]">diviser vos coûts par 2</span>{' '}
            et redonner <span className="font-semibold text-[var(--brand-primary)]">20% de productivité</span> à votre roadmap.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={scrollToCalculator}
              className="group bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[var(--brand-primary)]/20 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/30 hover:scale-[1.02]"
            >
              Simuler mon ROI en 30s
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="border border-[var(--border-primary)] hover:border-[var(--brand-primary)] text-[var(--text-primary)] hover:text-[var(--brand-primary)] px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-[var(--brand-primary)]/5"
            >
              Prendre rendez-vous
            </button>
          </div>

          {/* Social proof mini */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {['/images/testimonials/riad.webp', '/images/testimonials/selim-saadi.webp', '/images/testimonials/david.webp'].map((src, i) => (
                <img key={i} src={src} alt="" className="w-10 h-10 rounded-full border-2 border-[var(--bg-primary)] object-cover" />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[var(--brand-primary)] fill-[var(--brand-primary)]" />
                ))}
              </div>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5">+50 000 alertes traitées</p>
            </div>
          </div>
        </div>

        {/* ── Right Column — Illustration B (Trust Image) ── */}
        <div className="hidden lg:block animate-fade-in-up" style={{ animationDuration: '300ms' }}>
          <SOCHeroVariantB_TrustImage />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={20} className="text-[var(--text-muted)]" />
      </div>
    </section>
  );
}
