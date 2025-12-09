import React, { useState } from 'react';
import { CheckCircle2, Mail, Phone, User } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

interface CTAFormData {
  email: string;
  name: string;
  phone: string;
  message: string;
}

const FinalCTA: React.FC = React.memo(() => {
  const [formData, setFormData] = useState<CTAFormData>({
    email: '',
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion(undefined);
      }

      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          source: 'LP - Mobile App'
        })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ email: '', name: '', phone: '', message: '' });
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--bg-primary)] relative" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#2ca3bd] text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
            🚀 Audit Express — 30 min (offert)
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 px-2">
            Prêt à démarrer ? 💪
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] px-2">
            Réservez votre audit gratuit de 30 minutes et obtenez un plan d'attaque clair
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#2ca3bd]/12 to-[#1e7a8f]/12 border border-[#2ca3bd]/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          {isSubmitted ? (
            <div className="text-center py-8 sm:py-10 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#2ca3bd]/15 rounded-full">
                <CheckCircle2 className="text-[#2ca3bd]" size={32} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">Message envoyé !</h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)]">Nous revenons vers vous sous 24h.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg sm:rounded-xl p-3 text-red-500 text-xs sm:text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-3 sm:space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-[var(--text-primary)]">
                    Nom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm sm:text-base placeholder-[var(--text-secondary)] focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/30 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-[var(--text-primary)]">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean.dupont@entreprise.fr"
                      required
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm sm:text-base placeholder-[var(--text-secondary)] focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/30 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-[var(--text-primary)]">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 6 12 34 56 78"
                      required
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm sm:text-base placeholder-[var(--text-secondary)] focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/30 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-[var(--text-primary)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement votre contexte SI..."
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm sm:text-base placeholder-[var(--text-secondary)] focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/30 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl transition-all shadow-lg shadow-[#2ca3bd]/25 disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {isLoading ? 'Envoi en cours...' : 'Je demande mon Audit Express offert'}
              </button>

              <p className="text-center text-xs sm:text-sm text-[var(--text-secondary)] px-2">
                En soumettant ce formulaire, vous acceptez d'être recontacté par Malitix.
              </p>
            </form>
          )}
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[var(--border-primary)]">
          <p className="text-center text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6">Ou contactez-nous directement :</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg hover:border-[#2ca3bd] transition-all">
              <Mail size={18} className="text-[#2ca3bd] flex-shrink-0" />
              <span className="text-[var(--text-primary)] text-sm sm:text-base font-semibold truncate">{COMPANY_INFO.email}</span>
            </a>
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg hover:border-[#2ca3bd] transition-all">
              <Phone size={18} className="text-[#2ca3bd] flex-shrink-0" />
              <span className="text-[var(--text-primary)] text-sm sm:text-base font-semibold">{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

FinalCTA.displayName = 'FinalCTA';

export default FinalCTA;
