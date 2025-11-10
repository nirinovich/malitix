import { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { CTA_TEXT, COMPANY_INFO } from '../../utils/constants';
import { useTheme } from '../../context/ThemeContext';

export default function CTASection() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
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
      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Main Page'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', website: '', message: '' });
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
    <section id="contact" className={`py-24 bg-gradient-to-b relative overflow-hidden ${
      theme === 'dark' 
        ? 'from-[#0a0e0d] to-[#060705]'
        : 'from-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-full bg-[size:50px_50px] ${
          theme === 'dark'
            ? 'bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                  Contactez-nous
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
              </div>
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Prêt à propulser votre entreprise ?
              </h2>
              <p className={`text-xl leading-relaxed ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                Discutons de votre projet et découvrons comment Malitix peut vous aider à atteindre vos objectifs technologiques.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Consultation gratuite de 30 minutes',
                'Réponse sous 24 heures',
                'Devis personnalisé et détaillé',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd]/20 p-2 rounded-full">
                    <CheckCircle2 className="text-[#2ca3bd]" size={20} />
                  </div>
                  <span className={theme === 'dark' ? 'text-white/90' : 'text-gray-800'}>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className={`pt-8 border-t space-y-4 ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div className={`flex items-center gap-3 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                <Mail className="text-[#2ca3bd]" size={20} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#2ca3bd] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className={`flex items-center gap-3 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                <Phone className="text-[#2ca3bd]" size={20} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#2ca3bd] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className={`flex items-center gap-3 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                <MapPin className="text-[#2ca3bd]" size={20} />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className={`backdrop-blur-xl rounded-3xl p-8 shadow-2xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10'
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
            }`}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-500">
                      {error}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={`block font-medium mb-2 ${
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
                      className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40'
                          : 'bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400'
                      }`}
                      placeholder="Jean Dupont"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={`block font-medium mb-2 ${
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
                      className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40'
                          : 'bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400'
                      }`}
                      placeholder="jean@entreprise.fr"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label htmlFor="website" className={`block font-medium mb-2 ${
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
                      className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40'
                          : 'bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400'
                      }`}
                      placeholder="https://votre-site.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={`block font-medium mb-2 ${
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
                      rows={4}
                      className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all resize-none ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40'
                          : 'bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400'
                      }`}
                      placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                  >
                    {isLoading ? 'Envoi en cours...' : CTA_TEXT.primary}
                    <Send size={20} className={isLoading ? 'animate-pulse' : ''} />
                  </button>

                  <p className={`text-sm text-center ${
                    theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                  }`}>
                    En envoyant ce formulaire, vous acceptez notre politique de confidentialité
                  </p>
                </form>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2ca3bd]/20 rounded-full">
                    <CheckCircle2 className="text-[#2ca3bd]" size={40} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
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
        </div>
      </div>
    </section>
  );
}
