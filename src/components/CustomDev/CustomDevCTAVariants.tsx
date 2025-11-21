import { useEffect, useState } from 'react';
import { ArrowRight, Clock, Mail, Phone, Building2, User, Sparkles, Rocket } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTest } from '../../context/ABTestContext';

// Variant A: Form on Left
export function CTAVariantA() {
  const { theme } = useTheme();
  const { trackImpression, trackClick, trackConversion } = useABTest();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    trackImpression('cta', 'A');
  }, [trackImpression]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion('cta', 'A');
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
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-400/30'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              Réservez votre audit stratégique gratuit de 45 minutes. Nous analysons votre situation et vous proposons un plan d'action concret.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-[#2ca3bd]"></div>
                </div>
                <div>
                  <h3 className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Réponse sous 24h
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Nous prenons votre projet au sérieux
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-[#2ca3bd]"></div>
                </div>
                <div>
                  <h3 className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Sans Engagement
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Zéro pression commerciale, que de la valeur
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20'
              : 'bg-gradient-to-br from-blue-50 to-white border-blue-200'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <User className="inline mr-2" size={16} />
                  Votre Nom *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd]`}
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <Mail className="inline mr-2" size={16} />
                  Email Professionnel *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd]`}
                  placeholder="jean@entreprise.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <Phone className="inline mr-2" size={16} />
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd]`}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <Building2 className="inline mr-2" size={16} />
                  Entreprise
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd]`}
                  placeholder="MonEntreprise SAS"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Décrivez votre besoin
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd]`}
                  placeholder="Nous avons besoin d'une application pour..."
                />
              </div>

              <button
                type="submit"
                onClick={() => trackClick('cta', 'A', 'submit_button')}
                className={`group w-full py-4 px-6 text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Calculer Mon ROI Gratuitement
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Variant B: Centered Minimal
export function CTAVariantB() {
  const { theme } = useTheme();
  const { trackImpression, trackClick, trackConversion } = useABTest();
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  useEffect(() => {
    trackImpression('cta', 'B');
  }, [trackImpression]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion('cta', 'B');
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Sparkles className={`mx-auto mb-6 ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}`} size={48} />
        
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Prêt à{' '}
          <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
            Scaler
          </span>
          {' '}?
        </h2>

        <p className={`text-xl sm:text-2xl mb-8 ${
          theme === 'dark' ? 'text-white/70' : 'text-gray-600'
        }`}>
          Audit stratégique gratuit en 45 minutes. <br />
          Découvrez votre ROI potentiel.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-6 py-4 rounded-xl border text-lg ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
            } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd]`}
            placeholder="votre@email.com"
          />

          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-6 py-4 rounded-xl border text-lg ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
            } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd]`}
            placeholder="Décrivez votre projet en une phrase..."
          />

          <button
            type="submit"
            onClick={() => trackClick('cta', 'B', 'submit_button')}
            className={`w-full py-5 px-8 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]'
            }`}
          >
            Réserver Mon Audit Gratuit
          </button>

          <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
            ✓ Sans engagement ✓ Réponse sous 24h
          </p>
        </form>
      </div>
    </section>
  );
}

// Variant C: Split with Urgency
export function CTAVariantC() {
  const { theme } = useTheme();
  const { trackImpression, trackClick, trackConversion } = useABTest();
  const [email, setEmail] = useState('');

  useEffect(() => {
    trackImpression('cta', 'C');
  }, [trackImpression]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion('cta', 'C');
    console.log('Email submitted:', email);
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
            : 'bg-gradient-to-r from-blue-50 to-white border border-blue-200'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                theme === 'dark'
                  ? 'bg-red-500/20 text-red-400'
                  : 'bg-red-100 text-red-700'
              }`}>
                <Clock size={16} />
                2 places restantes ce mois
              </div>

              <h2 className={`text-4xl sm:text-5xl font-black ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Votre Application en{' '}
                <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
                  90 Jours
                </span>
              </h2>

              <ul className="space-y-3">
                {['Budget fixe garanti', 'Audit gratuit de 45 min', 'Réponse sous 24h'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Rocket className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'} size={20} />
                    <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-6 py-4 rounded-xl border text-lg ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-[#2ca3bd]`}
                  placeholder="Email professionnel"
                />

                <button
                  type="submit"
                  onClick={() => trackClick('cta', 'C', 'submit_button')}
                  className={`w-full py-5 px-8 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                  }`}
                >
                  Réserver Ma Place
                </button>

                <p className={`text-center text-sm ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                  Sans engagement • Gratuit
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
