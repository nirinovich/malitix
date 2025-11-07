import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function SprintContact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'LP - Sprint'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', website: '', message: '' });
      }, 5000);
    } catch (err) {
      console.error(err);
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
      id="contact-sprint"
      className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-[size:40px_40px] sm:bg-[size:50px_50px] ${
          theme === 'dark'
            ? 'bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              Passez à l'action
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block sm:inline">Prêt à débloquer votre projet ?</span>
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl px-4 ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Parlez-nous de votre situation. Réponse sous 24h.
          </p>
        </div>

        {/* Form */}
        <div className={`backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10'
            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
        }`}>
          {isSubmitted ? (
            <div className="text-center py-8 sm:py-12">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500/20 mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Message envoyé ! 🎉
              </h3>
              <p className={`text-base sm:text-lg ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                Nous vous recontactons sous 24h pour démarrer votre Sprint Commando.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent transition-all text-sm sm:text-base ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent transition-all text-sm sm:text-base ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="jean@entreprise.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Site web
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent transition-all text-sm sm:text-base ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="https://votre-site.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Décrivez votre situation *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent transition-all resize-none text-sm sm:text-base ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Parlez-nous de votre projet bloqué, du bug critique, ou de la feature urgente à livrer..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#2ca3bd] hover:bg-[#2ca3bd]/90 shadow-lg hover:shadow-xl hover:shadow-[#2ca3bd]/30'
                } text-white`}
              >
                {isLoading ? 'Envoi en cours...' : 'Lancer mon Sprint Commando 🚀'}
              </button>

              <p className={`text-center text-xs sm:text-sm ${
                theme === 'dark' ? 'text-white/50' : 'text-gray-500'
              }`}>
                🔒 Vos données sont sécurisées • ⚡ Réponse sous 24h garantie
              </p>
            </form>
          )}
        </div>

        {/* Trust elements */}
        <div className="mt-8 sm:mt-12 grid sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          {[
            { label: 'Consultation gratuite', value: '30min' },
            { label: 'Réponse garantie', value: '24h' },
            { label: 'Satisfaction client', value: '100%' },
          ].map((item, index) => (
            <div key={index}>
              <div className="text-2xl sm:text-3xl font-bold text-[#2ca3bd] mb-1">{item.value}</div>
              <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
