import { ArrowRight, CheckCircle } from 'lucide-react';
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
            {/* Headline with split design */}
            <div className="space-y-6">
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Votre SI freine{' '}
                <span className="text-red-500">votre croissance.</span>
              </h1>
              
              {/* Solution line - connects to right side arrow */}
              <div className="pt-4 relative">
                <div className="flex items-center gap-4">
                  <div className="h-1 flex-1 bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] rounded-full shadow-[0_0_20px_rgba(44,163,189,0.4)]"></div>
                  <ArrowRight className="text-[#2ca3bd]" size={32} />
                </div>
              </div>
              
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                On le modernise{' '}
                <span className="text-[#2ca3bd]">sans casser l'existant.</span>
              </h2>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={scrollToContact}
                className="group relative px-10 py-5 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-[#2ca3bd] via-[#248fa5] to-[#2ca3bd] text-white shadow-[0_0_40px_rgba(44,163,189,0.4)] bg-[length:200%_auto] hover:bg-right"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>Je demande mon Audit Express</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </span>
              </button>
              <p className={`mt-4 text-sm flex items-center gap-2 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                <CheckCircle size={16} className="text-[#2ca3bd]" />
                Réponse sous 24h • Sans engagement
              </p>
            </div>
          </div>

          {/* Right: Before/After Visual (2 columns) */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative h-[600px] flex flex-col items-center justify-center gap-6">
              {/* Before State Card */}
              <div className="w-full max-w-sm" style={{ zIndex: 20 }}>
                <div 
                  className={`p-6 rounded-2xl border-2 backdrop-blur-sm shadow-xl transition-all hover:scale-[1.02] ${
                    theme === 'dark'
                      ? 'bg-red-900/20 border-red-500/60'
                      : 'bg-red-50 border-red-400'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">😰</div>
                    <div className={`text-xl font-black ${theme === 'dark' ? 'text-red-400' : 'text-red-700'}`}>
                      AVANT
                    </div>
                  </div>
                  <div className={`space-y-2.5 mb-4 text-sm ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span className="font-semibold">20 ans de dette tech</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span className="font-semibold">Cloud +40% trop cher</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span className="font-semibold">Risques cyber critiques</span>
                    </div>
                  </div>
                  <div className={`text-xs font-mono p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-black/40' : 'bg-white/60'
                  }`}>
                    <div className="text-red-500 font-bold">$ tech_debt: critique</div>
                  </div>
                </div>
              </div>

              {/* Transformation Arrow */}
              <div className="relative" style={{ zIndex: 30 }}>
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl animate-pulse">
                  <span>Refonte SI</span>
                  <ArrowRight className="rotate-90" size={20} />
                </div>
              </div>

              {/* After State Card */}
              <div className="w-full max-w-sm" style={{ zIndex: 20 }}>
                <div 
                  className={`p-6 rounded-2xl border-2 backdrop-blur-sm shadow-xl transition-all hover:scale-[1.02] ${
                    theme === 'dark'
                      ? 'bg-[#2ca3bd]/20 border-[#2ca3bd]/60'
                      : 'bg-green-50 border-green-400'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🚀</div>
                    <div className={`text-xl font-black ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-green-700'}`}>
                      APRÈS
                    </div>
                  </div>
                  <div className={`space-y-2.5 mb-4 text-sm ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-[#2ca3bd]">✅</span>
                      <span className="font-semibold">Architecture moderne</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#2ca3bd]">✅</span>
                      <span className="font-semibold">Cloud optimisé -30%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#2ca3bd]">✅</span>
                      <span className="font-semibold">Sécurité renforcée</span>
                    </div>
                  </div>
                  <div className={`text-xs font-mono p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-black/40' : 'bg-white/60'
                  }`}>
                    <div className="text-[#2ca3bd] font-bold">$ IA_ready: true</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
