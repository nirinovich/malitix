import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Shield, CheckCircle, Loader2 } from "lucide-react";
import { useInView } from "~/hooks/useInView";

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1, once: true });

  return (
    <div
      ref={ref as any}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function SOCContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyUrl: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion(undefined);
      }

      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'SOC - Contact' }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', companyUrl: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="soc-contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2ca3bd]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2ca3bd]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <RevealSection>
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                  Contact
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-primary)]">
                Prêt à <span className="text-[#2ca3bd]">reprendre le contrôle</span> ?
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Discutons de comment nos services SOC peuvent sécuriser vos opérations et 
                libérer votre équipe de 20% du temps consommé par la gestion d'alertes.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, text: 'infos@malitix.com', href: 'mailto:infos@malitix.com' },
                { icon: Phone, text: '+33 1 84 80 62 48', href: 'tel:+33184806248' },
                { icon: MapPin, text: '26 rue de Londres, 75009 Paris', href: undefined },
              ].map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 bg-[#2ca3bd]/10 rounded-xl group-hover:bg-[#2ca3bd]/20 transition-colors shrink-0">
                    <item.icon size={22} className="text-[#2ca3bd]" />
                  </div>
                  <span className="text-[var(--text-secondary)] text-lg group-hover:text-[#2ca3bd] transition-colors">{item.text}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {['24/7 Monitoring', 'SLA Garanti', 'ISO 27001'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-full px-4 py-2">
                  <Shield size={14} className="text-[#2ca3bd]" />
                  <span className="text-xs font-semibold text-[var(--text-secondary)]">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={150}>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#2ca3bd]/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-[var(--text-primary)]">Planifier une consultation</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Nom</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Site web</label>
                  <input
                    type="url"
                    name="companyUrl"
                    placeholder="https://company.com"
                    value={formData.companyUrl}
                    onChange={handleFormChange}
                    className="w-full bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Parlez-nous de vos besoins sécurité..."
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all resize-none"
                    required
                  />
                </div>

                {isSubmitted ? (
                  <div className="flex flex-col items-center gap-2 py-4 animate-fade-in-up">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
                      <CheckCircle size={22} />
                      Message envoyé !
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] text-center">
                      Notre équipe vous répondra sous 24h.
                    </p>
                  </div>
                ) : (
                  <>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#2ca3bd] hover:bg-[#248fa5] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#2ca3bd]/20 hover:shadow-xl hover:shadow-[#2ca3bd]/30 hover:scale-[1.01]"
                    >
                      {isLoading ? (
                        <Loader2 size={20} className="animate-spin" />
                      ) : (
                        <ArrowRight size={20} />
                      )}
                      {isLoading ? 'Envoi en cours...' : 'Planifier une consultation'}
                    </button>

                    <p className="text-center text-xs text-[var(--text-muted)]">
                      Réponse sous 24h — Consultation gratuite — Sans engagement
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
