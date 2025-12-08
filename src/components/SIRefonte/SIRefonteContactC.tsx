import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant C: Minimalist Full-Width Form
export default function SIRefonteContactC() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Dramatic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-[radial-gradient(ellipse_at_center,rgba(44,163,189,0.15),transparent_70%)]'
              : 'bg-[radial-gradient(ellipse_at_center,rgba(44,163,189,0.2),transparent_70%)]'
          }`}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dramatic Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">⚡</div>
          <h2 className={`text-6xl sm:text-7xl font-black mb-8 leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Prêt à moderniser{' '}
            <span className="block mt-2 text-[#2ca3bd]">votre SI ?</span>
          </h2>
          <p className={`text-2xl font-semibold mb-6 ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            Commencez par l'Audit Express — Gratuit, sans engagement
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2ca3bd]"></div>
              <span className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                Réponse 24h
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2ca3bd]"></div>
              <span className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                Rapport 72h
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2ca3bd]"></div>
              <span className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                0€ — Offert
              </span>
            </div>
          </div>
        </div>

        {/* Inline Form */}
        <form onSubmit={handleSubmit}>
          <div className={`p-10 rounded-3xl backdrop-blur-sm border-2 shadow-2xl ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/10 border-[#2ca3bd]/40'
              : 'bg-gradient-to-br from-[#2ca3bd]/5 to-[#2ca3bd]/5 border-[#2ca3bd]/30'
          }`}>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Votre nom *"
                className={`px-6 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] font-medium ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white placeholder-white/50'
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="E-mail pro *"
                className={`px-6 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] font-medium ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white placeholder-white/50'
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                placeholder="Entreprise *"
                className={`px-6 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] font-medium ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white placeholder-white/50'
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="Téléphone"
                className={`px-6 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] font-medium ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-white placeholder-white/50'
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>

            <button
              type="submit"
              className="group w-full py-6 px-10 rounded-xl font-black text-2xl bg-gradient-to-r from-[#2ca3bd] via-[#248fa5] to-[#2ca3bd] text-white transition-all hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-4 bg-[length:200%_auto] hover:bg-right"
            >
              <span>Demander mon Audit Express gratuit</span>
              <ArrowRight className="group-hover:translate-x-3 transition-transform" size={32} />
            </button>

            <p className={`text-sm text-center mt-6 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              Sans engagement • Conformité RGPD • Réponse garantie sous 24h
            </p>
          </div>
        </form>

        {/* Social Proof */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-black text-[#2ca3bd] mb-2">50+</div>
            <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Audits SI réalisés
            </div>
          </div>
          <div>
            <div className="text-5xl font-black text-[#2ca3bd] mb-2">72h</div>
            <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Délai moyen livraison
            </div>
          </div>
          <div>
            <div className="text-5xl font-black text-[#2ca3bd] mb-2">95%</div>
            <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Clients satisfaits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
