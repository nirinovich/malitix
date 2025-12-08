import { Clock, Zap, Rocket, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant C: Timeline-Based Journey
export default function SIRefonteOffersC() {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sirefonte');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offers-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Votre parcours{' '}
            <span className="text-[#a0c801]">Refonte SI</span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Chaque étape vous rapproche d'un SI moderne et performant
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className={`absolute left-12 top-0 bottom-0 w-1 ${
            theme === 'dark' 
              ? 'bg-gradient-to-b from-[#a0c801] via-[#2fa8cf] to-[#2fa8cf]'
              : 'bg-gradient-to-b from-[#a0c801] via-[#2fa8cf] to-[#2fa8cf]'
          }`}></div>

          {/* Step 1: Audit Express */}
          <div className="relative mb-20">
            <div className="flex items-start gap-8">
              {/* Timeline node */}
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-2xl bg-[#a0c801] flex items-center justify-center shadow-xl">
                  <Clock className="text-white" size={40} />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#a0c801] text-white text-xs font-bold whitespace-nowrap">
                  72 heures
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className={`p-8 rounded-3xl backdrop-blur-sm border-2 ${
                  theme === 'dark'
                    ? 'bg-[#a0c801]/10 border-[#a0c801]/40'
                    : 'bg-[#a0c801]/5 border-[#a0c801]/40'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="inline-block px-4 py-1 rounded-full bg-[#a0c801] text-white text-sm font-bold mb-3">
                        ÉTAPE 1 — OFFERT
                      </div>
                      <h3 className={`text-3xl font-black mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Audit Express — Diagnostic 8h
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-[#a0c801]">Gratuit</div>
                      <div className={`text-sm line-through ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
                        3 500€
                      </div>
                    </div>
                  </div>
                  <ul className={`space-y-2 mb-6 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                    <li>✓ Cartographie SI complète + risques majeurs</li>
                    <li>✓ 3 quick wins à ROI immédiat (30-90 jours)</li>
                    <li>✓ Roadmap 90 jours priorisée</li>
                    <li>✓ Rapport 5-7 pages actionnable en 72h</li>
                  </ul>
                  <button
                    onClick={scrollToContact}
                    className="group px-8 py-4 rounded-xl font-bold bg-[#a0c801] text-white transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
                  >
                    Je demande mon Audit offert
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Pack Modernisation */}
          <div className="relative mb-20">
            <div className="flex items-start gap-8">
              {/* Timeline node */}
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-2xl bg-[#2fa8cf] flex items-center justify-center shadow-xl">
                  <Zap className="text-white" size={40} />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#2fa8cf] text-white text-xs font-bold whitespace-nowrap">
                  6-8 semaines
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className={`p-8 rounded-3xl backdrop-blur-sm border-2 ${
                  theme === 'dark'
                    ? 'bg-[#2fa8cf]/10 border-[#2fa8cf]/40'
                    : 'bg-[#2fa8cf]/5 border-[#2fa8cf]/40'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="inline-block px-4 py-1 rounded-full bg-[#2fa8cf] text-white text-sm font-bold mb-3">
                        ÉTAPE 2 — IMPACT RAPIDE
                      </div>
                      <h3 className={`text-3xl font-black mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Pack Modernisation Rapide
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-[#2fa8cf]">Sur devis</div>
                    </div>
                  </div>
                  <ul className={`space-y-2 mb-6 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                    <li>✓ Migration API/module critique</li>
                    <li>✓ Optimisation cloud (-20 à -30%)</li>
                    <li>✓ Sécurité prioritaire (IAM, segmentation)</li>
                    <li>✓ Runbook + observabilité + formation</li>
                  </ul>
                  <button
                    onClick={scrollToContact}
                    className={`group px-8 py-4 rounded-xl font-bold border-2 transition-all hover:scale-105 flex items-center gap-2 ${
                      theme === 'dark'
                        ? 'border-[#2fa8cf] text-[#2fa8cf] hover:bg-[#2fa8cf]/10'
                        : 'border-[#2fa8cf] text-[#2fa8cf] hover:bg-[#2fa8cf]/5'
                    }`}
                  >
                    Demander un devis
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Plateforme RefonteSI */}
          <div className="relative">
            <div className="flex items-start gap-8">
              {/* Timeline node */}
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-2xl bg-[#2fa8cf] flex items-center justify-center shadow-xl">
                  <Rocket className="text-white" size={40} />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#2fa8cf] text-white text-xs font-bold whitespace-nowrap">
                  12-36 mois
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className={`p-8 rounded-3xl backdrop-blur-sm border-2 ${
                  theme === 'dark'
                    ? 'bg-[#2fa8cf]/10 border-[#2fa8cf]/40'
                    : 'bg-[#2fa8cf]/5 border-[#2fa8cf]/40'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="inline-block px-4 py-1 rounded-full bg-[#2fa8cf] text-white text-sm font-bold mb-3">
                        ÉTAPE 3 — TRANSFORMATION COMPLÈTE
                      </div>
                      <h3 className={`text-3xl font-black mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Plateforme RefonteSI
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-[#2fa8cf]">Sur mesure</div>
                    </div>
                  </div>
                  <ul className={`space-y-2 mb-6 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                    <li>✓ Architecture microservices / API-first</li>
                    <li>✓ Gouvernance data & pipelines IA</li>
                    <li>✓ DevOps complet & automatisation</li>
                    <li>✓ Sécurité continue (Zero-trust)</li>
                    <li>✓ Modernisation profonde 12-36 mois</li>
                  </ul>
                  <button
                    onClick={scrollToContact}
                    className={`group px-8 py-4 rounded-xl font-bold border-2 transition-all hover:scale-105 flex items-center gap-2 ${
                      theme === 'dark'
                        ? 'border-[#2fa8cf] text-[#2fa8cf] hover:bg-[#2fa8cf]/10'
                        : 'border-[#2fa8cf] text-[#2fa8cf] hover:bg-[#2fa8cf]/5'
                    }`}
                  >
                    Parler à un expert
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
