import { useState } from 'react';
import { ArrowRight, Mail, Building, User, Phone } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant B: Centered Form with Value Props Above
export default function SIRefonteContactB() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#060705]'
        : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 rounded-full bg-[#2ca3bd] text-white text-sm font-bold mb-6">
            🎁 Valeur 3 500€ — OFFERT
          </div>
          <h2 className={`text-5xl sm:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Demandez votre{' '}
            <span className="text-[#2ca3bd]">Audit Express</span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Diagnostic 8h + Roadmap 90 jours + 3 quick wins — Livré sous 72h
          </p>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className={`p-6 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
              : 'bg-[#2ca3bd]/5 border-[#2ca3bd]/30'
          }`}>
            <div className="text-3xl font-black text-[#2ca3bd] mb-2">72h</div>
            <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Rapport complet
            </div>
          </div>
          <div className={`p-6 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
              : 'bg-[#2ca3bd]/5 border-[#2ca3bd]/30'
          }`}>
            <div className="text-3xl font-black text-[#2ca3bd] mb-2">3</div>
            <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Quick wins ROI
            </div>
          </div>
          <div className={`p-6 rounded-2xl text-center backdrop-blur-sm border-2 ${
            theme === 'dark'
              ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
              : 'bg-[#2ca3bd]/5 border-[#2ca3bd]/30'
          }`}>
            <div className="text-3xl font-black text-[#2ca3bd] mb-2">0€</div>
            <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Sans engagement
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={`p-10 rounded-3xl backdrop-blur-sm border-2 shadow-2xl ${
          theme === 'dark'
            ? 'bg-white/5 border-white/10'
            : 'bg-white border-gray-200'
        }`}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Votre nom"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                E-mail professionnel *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={20} />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="email@entreprise.fr"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Company */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Entreprise *
              </label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={20} />
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Nom de l'entreprise"
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
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className={`block text-sm font-semibold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Contexte (optionnel)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className={`w-full px-4 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] resize-none ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                  : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
              }`}
              placeholder="Dites-nous en quelques mots votre situation SI actuelle..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full py-5 px-10 rounded-xl font-bold text-xl bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] text-white transition-all hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
          >
            <span>Je demande mon Audit Express gratuit</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </button>

          <p className={`text-xs text-center mt-6 ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
            ✓ Réponse sous 24h • ✓ Sans engagement • ✓ Données sécurisées RGPD
          </p>
        </form>

        {/* Bottom Statement */}
        <div className={`mt-12 p-6 rounded-2xl text-center backdrop-blur-sm border ${
          theme === 'dark'
            ? 'bg-white/5 border-white/10'
            : 'bg-gray-50 border-gray-200'
        }`}>
          <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            "Moderniser votre SI, c'est sécuriser votre avenir."
          </p>
        </div>
      </div>
    </section>
  );
}
