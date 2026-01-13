import { useState } from 'react';
import { Clock, Rocket, CheckCircle2 } from 'lucide-react';
import { useTheme } from '~/context/ThemeContext';

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
          : 'bg-[var(--bg-primary)]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`rounded-3xl p-8 sm:p-12 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/30'
            : 'bg-gradient-to-r from-[var(--surface-primary)] to-[var(--surface-primary)] border border-[#2ca3bd]/20'
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
                    <CheckCircle2 className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'} size={20} />
                    <span className={`text-lg ${
                      theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                    }`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`rounded-2xl p-6 sm:p-8 backdrop-blur-xl border ${
              theme === 'dark' 
                ? 'bg-[#060705]/80 border-white/10'
                : 'bg-white/80 border-slate-200'
            }`}>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Message envoyé !</h3>
                  <p className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}>
                    Nous revenons vers vous sous 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-1.5 ${
                        theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                      }`}>Nom</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10 focus:border-[#2ca3bd] text-white'
                            : 'bg-white border-slate-200 focus:border-[#2ca3bd] text-slate-900'
                        }`}
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-1.5 ${
                        theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                      }`}>Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10 focus:border-[#2ca3bd] text-white'
                            : 'bg-white border-slate-200 focus:border-[#2ca3bd] text-slate-900'
                        }`}
                        placeholder="jean@entreprise.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                    }`}>Site web actuel (optionnel)</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 focus:border-[#2ca3bd] text-white'
                          : 'bg-white border-slate-200 focus:border-[#2ca3bd] text-slate-900'
                      }`}
                      placeholder="https://"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                    }`}>Projet</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-lg border outline-none transition-all resize-none ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 focus:border-[#2ca3bd] text-white'
                          : 'bg-white border-slate-200 focus:border-[#2ca3bd] text-slate-900'
                      }`}
                      placeholder="Décrivez votre besoin..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${
                      theme === 'dark'
                        ? 'bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white shadow-lg shadow-[#2ca3bd]/25'
                        : 'bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white shadow-lg shadow-[#2ca3bd]/25'
                    }`}
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Réserver mon audit gratuit</span>
                        <Rocket size={20} />
                      </>
                    )}
                  </button>
                  <div className={`text-center text-xs ${
                    theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                  }`}>
                    Aucun engagement. Réponse sous 24h ouvrées.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
