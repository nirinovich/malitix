import { CheckCircle2, Send } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { useLeadForm } from './useLeadForm';

export default function LeadFormVariantB() {
  const { theme } = useTheme();
  const { formData, isSubmitted, isLoading, error, handleChange, handleSubmit } = useLeadForm('Conversion Landing');

  return (
    <section id="lead-form" className={`py-24 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">Audit gratuit</div>
        <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Recevez vos profils disponibles
        </h2>
        <p className={`mt-3 text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
          Partagez votre besoin et obtenez une sélection adaptée sous 24h.
        </p>

        <div className={`mt-10 rounded-3xl border p-8 text-left ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-500">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="name-b" className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name-b"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400'
                  }`}
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label htmlFor="email-b" className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>
                  Email professionnel *
                </label>
                <input
                  type="email"
                  id="email-b"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400'
                  }`}
                  placeholder="jean@entreprise.fr"
                />
              </div>

              <div>
                <label htmlFor="website-b" className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>
                  Site web
                </label>
                <input
                  type="text"
                  id="website-b"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400'
                  }`}
                  placeholder="https://votre-site.com"
                />
              </div>

              <div>
                <label htmlFor="message-b" className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>
                  Parlez-nous de votre projet *
                </label>
                <textarea
                  id="message-b"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all resize-none ${
                    theme === 'dark'
                      ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400'
                  }`}
                  placeholder="Décrivez votre besoin et vos sprints..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                <Send size={20} className={isLoading ? 'animate-pulse' : ''} />
              </button>

              <p className={`text-sm text-center ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                En envoyant ce formulaire, vous acceptez notre <a href="/politique-de-confidentialite" className="text-[#2ca3bd] hover:underline">politique de confidentialité</a>.
              </p>
            </form>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2ca3bd]/20 rounded-full">
                <CheckCircle2 className="text-[#2ca3bd]" size={40} />
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Message envoyé !
                </h3>
                <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                  Nous reviendrons vers vous sous 24 heures.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
