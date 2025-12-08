import { Clock, Rocket, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant C: Timeline-Based with Before/After Visual
export default function SIRefonteHeroC() {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sirefonte');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] via-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      {/* Radial gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full ${
            theme === 'dark' 
              ? 'bg-[radial-gradient(ellipse_at_top,rgba(44,163,189,0.15),transparent_50%)]'
              : 'bg-[radial-gradient(ellipse_at_top,rgba(44,163,189,0.2),transparent_50%)]'
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Content (3 columns) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#2ca3bd]/20 via-[#2ca3bd]/20 to-[#2ca3bd]/20 border-2 border-[#2ca3bd]/40 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-[#2ca3bd] animate-pulse"></div>
              <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Offre Limitée — Audit Express 8h (Valeur 3 500€)
              </span>
            </div>

            {/* Headline with split design */}
            <div className="space-y-6">
              <h1 className={`text-5xl sm:text-7xl font-black leading-[1.05] ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Votre SI fonctionne.
              </h1>
              <div className={`text-4xl sm:text-6xl font-black flex items-center gap-4 ${
                theme === 'dark' ? 'text-white/40' : 'text-gray-400'
              }`}>
                Mais empêche l'entreprise{' '}
                <span className="text-red-500">d'avancer.</span>
              </div>
              
              {/* Solution line */}
              <div className="pt-4 flex items-center gap-4">
                <div className="h-1 flex-1 bg-gradient-to-r from-[#2ca3bd] to-[#2ca3bd] rounded-full"></div>
                <ArrowRight className="text-[#2ca3bd]" size={32} />
              </div>
              
              <h2 className={`text-3xl sm:text-5xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                On modernise votre SI{' '}
                <span className="text-[#2ca3bd]">sans casser l'existant.</span>
              </h2>
            </div>

            {/* Rapid Results Promise */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2ca3bd]/20 flex items-center justify-center border border-[#2ca3bd]/40">
                  <Clock className="text-[#2ca3bd]" size={24} />
                </div>
                <div>
                  <div className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    72 heures
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Pour un diagnostic complet de votre SI
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2ca3bd]/20 flex items-center justify-center border border-[#2ca3bd]/40">
                  <Rocket className="text-[#2ca3bd]" size={24} />
                </div>
                <div>
                  <div className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    3 quick wins
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Actions prioritaires avec ROI visible en 30-90 jours
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2ca3bd]/20 flex items-center justify-center border border-[#2ca3bd]/40">
                  <Shield className="text-[#2ca3bd]" size={24} />
                </div>
                <div>
                  <div className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Roadmap 90 jours
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Plan d'action clair et priorisé pour la modernisation
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={scrollToContact}
                className="group relative px-10 py-5 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-[#2ca3bd] via-[#248fa5] to-[#2ca3bd] text-white shadow-[0_0_40px_rgba(44,163,189,0.4)] bg-[length:200%_auto] hover:bg-right"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>Je demande mon Audit Express offert</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </span>
              </button>
              <p className={`mt-4 text-sm flex items-center gap-2 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                <CheckCircle size={16} className="text-[#2ca3bd]" />
                Réponse sous 24h • Sans engagement • Lumière garantie en 72h
              </p>
            </div>
          </div>

          {/* Right: Before/After Visual (2 columns) */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative h-[600px]">
              {/* Before State - Top */}
              <div 
                className={`absolute top-0 left-0 right-0 p-6 rounded-2xl border-2 backdrop-blur-sm transition-all hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-red-500/10 border-red-500/40'
                    : 'bg-red-50 border-red-300'
                }`}
                style={{ height: '45%' }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-3xl">😰</div>
                  <div>
                    <div className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-red-400' : 'text-red-700'}`}>
                      AVANT
                    </div>
                    <div className={`text-sm space-y-2 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                      <div>❌ 20 ans de dette tech</div>
                      <div>❌ Cloud +40% trop cher</div>
                      <div>❌ Risques cyber non maîtrisés</div>
                      <div>❌ Données en silos</div>
                      <div>❌ Process manuels</div>
                    </div>
                  </div>
                </div>
                <div className={`text-xs font-mono mt-4 p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-black/30' : 'bg-white/50'
                }`}>
                  <div className="text-red-500">$ uptime: 95.2%</div>
                  <div className="text-red-500">$ incidents: 847/an</div>
                  <div className="text-red-500">$ tech_debt: critique</div>
                </div>
              </div>

              {/* Transformation Arrow */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-[#2ca3bd] to-[#2ca3bd] text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl whitespace-nowrap">
                  Refonte SI ⚡
                </div>
              </div>

              {/* After State - Bottom */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-6 rounded-2xl border-2 backdrop-blur-sm transition-all hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/40'
                    : 'bg-green-50 border-green-300'
                }`}
                style={{ height: '45%' }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <div className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-green-700'}`}>
                      APRÈS
                    </div>
                    <div className={`text-sm space-y-2 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                      <div>✅ Architecture moderne</div>
                      <div>✅ Cloud optimisé -30%</div>
                      <div>✅ Sécurité renforcée</div>
                      <div>✅ Data gouvernée</div>
                      <div>✅ Automatisation DevOps</div>
                    </div>
                  </div>
                </div>
                <div className={`text-xs font-mono mt-4 p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-black/30' : 'bg-white/50'
                }`}>
                  <div className="text-[#2ca3bd]">$ uptime: 99.9%</div>
                  <div className="text-[#2ca3bd]">$ incidents: -75%</div>
                  <div className="text-[#2ca3bd]">$ IA_ready: true</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
