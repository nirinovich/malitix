import React, { useState } from 'react';
import { CheckCircle2, Mail, Phone, User } from 'lucide-react';
import { COMPANY_INFO } from '~/utils/constants';

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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute top-1/2 -translate-y-1/2 left-3 text-[var(--text-secondary)]" size={18} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg py-3 pl-10 pr-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] transition-colors"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute top-1/2 -translate-y-1/2 left-3 text-[var(--text-secondary)]" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    required
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg py-3 pl-10 pr-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <Phone className="absolute top-1/2 -translate-y-1/2 left-3 text-[var(--text-secondary)]" size={18} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Téléphone (optionnel)"
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg py-3 pl-10 pr-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Parlez-nous de votre projet..."
                  rows={4}
                  required
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg py-3 px-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#2ca3bd] hover:bg-[#1e7a8f] disabled:bg-[#2ca3bd]/50 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#2ca3bd]/20 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Demander mon audit gratuit</span>
                    <CheckCircle2 size={20} />
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-[var(--text-muted)] mt-4">
                En cliquant, vous acceptez d'être recontacté pour votre projet. Vos données restent confidentielles.
              </p>
            </form>
          )}
        </div>

        {/* Contact direct */}
        <div className="mt-8 sm:mt-12 text-center space-y-2">
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">Vous préférez nous appeler ?</p>
          <a href={`tel:${COMPANY_INFO.phone}`} className="inline-block text-lg sm:text-xl font-bold text-[var(--text-primary)] hover:text-[#2ca3bd] transition-colors">
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
});

FinalCTA.displayName = 'FinalCTA';

export default FinalCTA;
