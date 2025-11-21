import { useEffect, useState } from 'react';
import { Clock, Rocket } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTest } from '../../context/ABTestContext';

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
