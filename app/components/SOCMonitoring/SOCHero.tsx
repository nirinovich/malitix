import { ArrowRight, ArrowDown, Star, Shield, Clock, CheckCircle } from "lucide-react";

export default function SOCHero() {
  const scrollToCalculator = () => {
    document.getElementById("roi-calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("soc-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--brand-primary)]/15 blur-[120px]" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--brand-primary)]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--brand-primary)]/5 blur-[150px]" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[size:50px_50px] bg-[image:var(--hero-grid-pattern)] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8 animate-slide-right in-view">
          <div className="space-y-4 animate-on-scroll in-view stagger-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[var(--text-primary)]">
              <span className="block">Vos ingénieurs coûtent</span>
              <span className="block">trop cher pour</span>
              <span className="relative inline-block">
                <span className="text-[var(--brand-primary)]">faire les pompiers</span>
                <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                  <path d="M0 5 Q50 0, 100 5 T200 5" stroke="var(--brand-primary)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl animate-on-scroll in-view stagger-2">
            Ne laissez plus vos talents seniors se noyer sous les alertes.
            Externalisez le monitoring à nos experts SOC pour{" "}
            <span className="font-semibold text-[var(--brand-primary)]">diviser vos coûts par 2</span>{" "}
            et redonner <span className="font-semibold text-[var(--brand-primary)]">20% de productivité</span> à votre roadmap.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-on-scroll in-view stagger-3">
            <button
              onClick={scrollToCalculator}
              className="group bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[var(--brand-primary)]/20 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/30 hover:scale-[1.02] cursor-pointer"
            >
              Simuler mon ROI en 30s
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="border border-[var(--border-primary)] hover:border-[var(--brand-primary)] text-[var(--text-primary)] hover:text-[var(--brand-primary)] px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-[var(--brand-primary)]/5 cursor-pointer"
            >
              Prendre rendez-vous
            </button>
          </div>

          {/* Social proof mini */}
          <div className="flex items-center gap-4 pt-4 animate-on-scroll in-view stagger-4">
            <div className="flex -space-x-3">
              {["/images/testimonials/riad.webp", "/images/testimonials/selim-saadi.webp", "/images/testimonials/david.webp"].map((src, i) => (
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

        {/* Right Column — Trust Image */}
        <div className="hidden lg:flex flex-col justify-center relative animate-on-scroll in-view stagger-4">
          <div className="relative w-full max-w-md mx-auto" aria-hidden="true" role="presentation">
            {/* Glow behind card */}
            <div className="absolute -inset-6 bg-[var(--brand-primary)]/10 rounded-3xl blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-primary)] shadow-2xl">
              <img
                src="/images/SOC.webp"
                alt="Security Operations Center"
                className="h-[420px] w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }}
              />
              {/* Fallback */}
              <div className="hidden h-[420px] w-full bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-tertiary)] to-[var(--bg-primary)] flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-4 opacity-60">
                  <Shield size={64} className="text-[var(--brand-primary)]" />
                  <span className="text-sm font-semibold text-[var(--text-muted)]">Security Operations Center</span>
                </div>
              </div>

              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

              {/* Floating trust badges */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-3">
                {[
                  { icon: Clock, label: '24/7', sublabel: 'Monitoring' },
                  { icon: CheckCircle, label: '99.7%', sublabel: 'SLA' },
                  { icon: Shield, label: 'ISO', sublabel: '27001' },
                ].map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.label}
                      className="flex-1 flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md px-3.5 py-2.5"
                    >
                      <Icon size={18} className="text-[var(--brand-primary)] flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">{badge.label}</div>
                        <div className="text-[10px] text-white/70 leading-tight">{badge.sublabel}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Top-right live indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-3 py-1.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-white">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={20} className="text-[var(--text-muted)]" />
      </div>
    </section>
  );
}
