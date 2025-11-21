import { useState } from 'react';
import { ArrowRight, Clock, Mail, Phone, Building2, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function CustomDevCTA() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
          ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-400/30'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Urgency Badge */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
            theme === 'dark'
              ? 'bg-red-500/20 text-red-400 border border-red-500/40'
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            <Clock size={16} />
            <span>Places limitées : Seulement 2 nouveaux projets d'envergure par mois</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-start gap-2 mb-4">
              <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                Dernier Pas
              </span>
              <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Votre Prochain Levier de Croissance est à{' '}
              <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
                Portée de Main
              </span>
            </h2>

            <p className={`text-lg sm:text-xl ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}>
              Ne laissez pas vos concurrents vous dépasser avec de meilleurs outils. 
              La capacité de développement est limitée.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 pt-4">
              {[
                'Audit de faisabilité gratuit (30 min)',
                'Sans engagement',
                'Analyse de votre besoin',
                'Validation si le sur-mesure est la bonne solution',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'
                  }`}>
                    <ArrowRight className="text-[#2ca3bd]" size={14} />
                  </div>
                  <span className={`text-base ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                  }`}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className={`flex flex-wrap items-center gap-4 pt-6 border-t ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                ✓ Budget fixe garanti
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                ✓ Livraison 90 jours
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                ✓ Garantie sans bug
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10'
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
          }`}>
            <h3 className={`text-2xl sm:text-3xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Réserver mon Audit de Faisabilité Gratuit
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                  }`}
                >
                  Nom complet *
                </label>
                <div className="relative">
                  <User 
                    className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                      theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                    }`} 
                    size={18} 
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#2ca3bd] focus:ring-[#2ca3bd]/50'
                        : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/50'
                    }`}
                    placeholder="Jean Dupont"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                  }`}
                >
                  Email professionnel *
                </label>
                <div className="relative">
                  <Mail 
                    className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                      theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                    }`} 
                    size={18} 
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#2ca3bd] focus:ring-[#2ca3bd]/50'
                        : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/50'
                    }`}
                    placeholder="jean.dupont@entreprise.fr"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label 
                  htmlFor="phone" 
                  className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                  }`}
                >
                  Téléphone
                </label>
                <div className="relative">
                  <Phone 
                    className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                      theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                    }`} 
                    size={18} 
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#2ca3bd] focus:ring-[#2ca3bd]/50'
                        : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/50'
                    }`}
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label 
                  htmlFor="company" 
                  className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                  }`}
                >
                  Entreprise *
                </label>
                <div className="relative">
                  <Building2 
                    className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                      theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                    }`} 
                    size={18} 
                  />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#2ca3bd] focus:ring-[#2ca3bd]/50'
                        : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/50'
                    }`}
                    placeholder="Mon Entreprise SAS"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                  }`}
                >
                  Décrivez brièvement votre projet
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#2ca3bd] focus:ring-[#2ca3bd]/50'
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/50'
                  }`}
                  placeholder="Nous avons besoin d'une application pour..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`group w-full px-6 py-4 text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Réserver mon Audit Gratuit (30 min)
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>

              <p className={`text-xs text-center ${
                theme === 'dark' ? 'text-white/50' : 'text-gray-500'
              }`}>
                Sans engagement • Réponse sous 24h • Confidentialité garantie
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
