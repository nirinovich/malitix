import { useState } from 'react';
import { ArrowRight, Mail, Globe, User, Phone, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant A: Split Layout - Form + Benefits
export default function SIRefonteContactA() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Call Google Ads conversion tracking
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
          source: 'LP - SI Refonte'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', website: '', phone: '', message: '' });
      }, 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-[var(--bg-primary)]'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/5' : 'bg-[#2ca3bd]/10'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-[#2ca3bd] text-white text-sm font-bold mb-4">
            L'Audit Express — Diagnostic 8h (offert)
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Votre SI peut créer plus de valeur.
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            La clé du diagnostic en 8h offert par Malitix.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={`p-6 sm:p-8 rounded-3xl backdrop-blur-sm border-2 ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-[var(--surface-primary)] border-gray-200 shadow-lg'
            }`}>
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Nom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={20} />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-[var(--bg-secondary)] border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="Jean Dupont"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={20} />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-[var(--bg-secondary)] border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="jean.dupont@entreprise.fr"
                    />
                  </div>
                </div>

                {/* Website */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Votre site web *
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={20} />
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-[var(--bg-secondary)] border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="https://votre-site.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={20} />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-[var(--bg-secondary)] border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] resize-none ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                        : 'bg-[var(--bg-secondary)] border-gray-200 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="Décrivez brièvement votre contexte SI..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className={`group cursor-pointer w-full py-4 px-8 rounded-xl font-bold bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] text-white transition-all hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 ${
                    isLoading || isSubmitted ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Envoi en cours...' : isSubmitted ? 'Demande envoyée !' : 'Je demande mon Audit Express offert'}
                  {!isLoading && !isSubmitted && <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />}
                </button>

                <p className={`text-xs text-center ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                  En soumettant ce formulaire, vous acceptez d'être recontacté par Malitix.
                </p>
              </div>
            </form>
          </div>

          {/* Right: Benefits/Promise */}
          <div className="space-y-6 lg:self-center">
            <div className={`p-6 sm:p-8 rounded-3xl backdrop-blur-sm border-2 ${
              theme === 'dark'
                ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
                : 'bg-[#2ca3bd]/5 border-[#2ca3bd]/30 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                L'Audit Express — Diagnostic 8h (offert)
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      1) Une vision claire de votre SI actuel
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Cartographie infra / application / data / sécurité<br />
                      Détermination du niveau de maturité décisionnelle
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      2) Vos risques majeurs & leurs impacts
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Cybersécurité, disponibilité, conformité<br />
                      Cartographie des risques à prioriser
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      3) Votre potentiel d'optimisation cloud
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Analyse coûts + gigantesques économies (-20% -40%)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      4) Vos quick wins à ROI immédiat
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Actions réalisables en 90 jours<br />
                      Gains de coûts, sécu, performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      5) Votre roadmap 90 jours
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      3 objectifs prioritaires<br />
                      Impacts, composante, budget indicatif
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      6) Un rapport livrable 5-7 pages sous 72h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl text-center backdrop-blur-sm border ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-[var(--bg-secondary)] border-gray-200'
            }`}>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                "Moderniser votre SI, c'est sécuriser votre avenir."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
