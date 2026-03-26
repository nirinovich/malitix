import { useState } from 'react';
import { ArrowRight, Mail, User, Phone, Building2, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function BIAdvisorContact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Google Ads conversion tracking
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion(undefined);
      }

      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'LP - BI Advisor',
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi du formulaire');

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      }, 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const isDark = theme === 'dark';

  return (
    <section
      id="bi-advisor-contact"
      className={`relative py-24 overflow-hidden ${
        isDark ? 'bg-gradient-to-b from-[#06080a] to-[#0a0e10]' : 'bg-[var(--bg-primary)]'
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full blur-3xl ${
            isDark ? 'bg-[#2ca3bd]/5' : 'bg-[#2ca3bd]/8'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-[#2ca3bd] text-white text-sm font-bold mb-4">
            Démo &amp; Test Gratuit — Sur vos données réelles
          </div>
          <h2
            className={`text-4xl sm:text-5xl font-black mb-4 ${
              isDark ? 'text-white' : 'text-[var(--text-primary)]'
            }`}
          >
            Prêt à dialoguer avec votre entreprise ?
          </h2>
          <p className={`text-xl ${isDark ? 'text-white/70' : 'text-[var(--text-secondary)]'}`}>
            Lancez un Proof of Concept sur vos données historiques. Résultats en moins de 48h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Form */}
          <form
            onSubmit={handleSubmit}
            className={`p-6 sm:p-8 rounded-3xl backdrop-blur-sm border-2 ${
              isDark
                ? 'bg-white/5 border-white/10'
                : 'bg-[var(--surface-primary)] border-gray-200 shadow-lg'
            }`}
          >
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-[var(--text-primary)]'
                  }`}
                >
                  Nom *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={20} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jean Dupont"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                        : 'bg-[var(--bg-secondary)] border-gray-200 text-[var(--text-primary)] placeholder-gray-400'
                    }`}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-[var(--text-primary)]'
                  }`}
                >
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={20} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jean.dupont@entreprise.fr"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                        : 'bg-[var(--bg-secondary)] border-gray-200 text-[var(--text-primary)] placeholder-gray-400'
                    }`}
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-[var(--text-primary)]'
                  }`}
                >
                  Entreprise *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={20} />
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nom de votre entreprise"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                        : 'bg-[var(--bg-secondary)] border-gray-200 text-[var(--text-primary)] placeholder-gray-400'
                    }`}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-[var(--text-primary)]'
                  }`}
                >
                  Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={20} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+33 6 12 34 56 78"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                        : 'bg-[var(--bg-secondary)] border-gray-200 text-[var(--text-primary)] placeholder-gray-400'
                    }`}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-[var(--text-primary)]'
                  }`}
                >
                  Votre contexte (optionnel)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="Quel ERP utilisez-vous ? Quelles sont vos problématiques data actuelles ?"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] resize-none ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-[var(--bg-secondary)] border-gray-200 text-[var(--text-primary)] placeholder-gray-400'
                  }`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className={`group cursor-pointer w-full py-4 px-8 rounded-xl font-bold bg-gradient-to-r from-[#00687a] to-[#2ca3bd] text-white transition-all hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 ${
                  isLoading || isSubmitted ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading
                  ? 'Envoi en cours...'
                  : isSubmitted
                  ? '✓ Demande envoyée !'
                  : 'Demander ma démo et mon test gratuit'}
                {!isLoading && !isSubmitted && (
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                )}
              </button>

              <p className={`text-xs text-center ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                En soumettant ce formulaire, vous acceptez d'être recontacté par Malitix.
              </p>
            </div>
          </form>

          {/* Right — What you get */}
          <div className="space-y-6 lg:self-center">
            <div
              className={`p-6 sm:p-8 rounded-3xl backdrop-blur-sm border-2 ${
                isDark
                  ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
                  : 'bg-[#2ca3bd]/5 border-[#2ca3bd]/30 shadow-lg'
              }`}
            >
              <h3
                className={`text-2xl font-black mb-6 ${isDark ? 'text-white' : 'text-[var(--text-primary)]'}`}
              >
                Ce que vous obtenez
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: '1) Une démo live sur vos données',
                    desc: 'Connecté à votre ERP, en conditions réelles, pas sur des données fictives.',
                  },
                  {
                    title: '2) Une session de questions/réponses dédiée',
                    desc: "Avec un expert Malitix pour calibrer BI Advisor à vos cas d'usage métier.",
                  },
                  {
                    title: '3) Un POC complet sous 48h',
                    desc: 'Prévisions, alertes et chatbot BI configurés sur vos données historiques.',
                  },
                  {
                    title: '4) Un rapport d\'impact ROI personnalisé',
                    desc: 'Estimations chiffrées du gain de temps et de marge pour votre activité.',
                  },
                  {
                    title: '5) Zéro engagement',
                    desc: "Aucun contrat. Décidez d'avancer uniquement si les résultats vous convainquent.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={22} />
                    <div>
                      <div
                        className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-[var(--text-primary)]'}`}
                      >
                        {item.title}
                      </div>
                      <p className={`text-sm ${isDark ? 'text-white/70' : 'text-[var(--text-secondary)]'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl text-center backdrop-blur-sm border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-[var(--bg-secondary)] border-gray-200'
              }`}
            >
              <p className={`text-sm ${isDark ? 'text-white/70' : 'text-[var(--text-secondary)]'}`}>
                "Nous ne lançons que 5 POC par mois pour garantir un accompagnement premium."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
