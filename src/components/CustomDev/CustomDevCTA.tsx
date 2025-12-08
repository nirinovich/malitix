import { useState } from 'react';
import { Clock, Rocket, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function CustomDevCTA() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Appeler le suivi de conversion Google Ads
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion(undefined);
      }

      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Développement sur mesure'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', website: '', phone: '', message: '' });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      id="contact-customdev"
      className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-[#0a0e0d] to-[#060705]'
          : 'bg-gradient-to-br from-gray-50 to-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`rounded-3xl p-8 sm:p-12 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/30'
            : 'bg-gradient-to-r from-white to-slate-50/50 border border-[#2ca3bd]/20'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                theme === 'dark'
                  ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]'
                  : 'bg-[#2ca3bd]/15 text-[#2ca3bd]'
              }`}>
                <Clock size={16} />
                2 places restantes ce mois
              </div>

              <h2 className={`text-4xl sm:text-5xl font-black ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Votre Application en{' '}
                <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'}>
                  90 Jours
                </span>
              </h2>

              <ul className="space-y-3">
                {['Budget fixe garanti', 'Audit gratuit de 45 min', 'Réponse sous 24h'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Rocket className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'} size={20} />
                    <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-500 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={`block font-medium mb-2 text-sm ${
                      theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                    }`}>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className={`w-full px-6 py-3 rounded-xl border ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd] disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="Jean Dupont"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={`block font-medium mb-2 text-sm ${
                      theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                    }`}>
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className={`w-full px-6 py-3 rounded-xl border ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd] disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="jean@entreprise.fr"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={`block font-medium mb-2 text-sm ${
                      theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                    }`}>
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isLoading}
                      className={`w-full px-6 py-3 rounded-xl border ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd] disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label htmlFor="website" className={`block font-medium mb-2 text-sm ${
                      theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                    }`}>
                      Site web
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      disabled={isLoading}
                      className={`w-full px-6 py-3 rounded-xl border ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd] disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="https://votre-site.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={`block font-medium mb-2 text-sm ${
                      theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                    }`}>
                      Parlez-nous de votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      rows={4}
                      className={`w-full px-6 py-3 rounded-xl border resize-none ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd] disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-5 px-8 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white'
                        : 'bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] text-white'
                    }`}
                  >
                    {isLoading ? 'Envoi en cours...' : 'Réserver Ma Place'}
                  </button>

                  <p className={`text-center text-sm ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                    Sans engagement • Gratuit
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2ca3bd]/20 rounded-full">
                    <CheckCircle2 className="text-[#2ca3bd]" size={32} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Demande envoyée !
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Nous vous répondrons sous 24h.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

