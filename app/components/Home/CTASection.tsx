import { useRef, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { CTA_TEXT, COMPANY_INFO } from "~/utils/constants";
import { SharedContactForm } from "~/components/Shared/Form/SharedContactForm";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { rootMargin: "-50px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full cta-grid-pattern"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl bg-[var(--cta-orb-bg)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--cta-accent)]"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--cta-accent)]">
                  Contactez-nous
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--cta-accent)]"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[var(--text-primary)]">
                Prêt à propulser votre entreprise ?
              </h2>
              <p className="text-xl leading-relaxed text-[var(--text-secondary)]">
                Discutons de votre projet et découvrons comment Malitix peut vous aider à atteindre
                vos objectifs technologiques.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                "Consultation gratuite de 30 minutes",
                "Réponse sous 24 heures",
                "Devis personnalisé et détaillé",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[var(--cta-accent-soft)] p-2 rounded-full">
                    <div className="w-5 h-5 flex items-center justify-center">
                       <div className="w-2 h-2 bg-[var(--cta-accent)] rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-[var(--text-secondary)]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-[var(--border-primary)] space-y-4">
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Mail className="text-[var(--cta-accent)]" size={20} />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[var(--cta-accent)] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Phone className="text-[var(--cta-accent)]" size={20} />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-[var(--cta-accent)] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <MapPin className="text-[var(--cta-accent)]" size={20} />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Shared Form */}
          <div className="relative">
            <SharedContactForm 
               source="Main Page"
               buttonText={CTA_TEXT.primary}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
