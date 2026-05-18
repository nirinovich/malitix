import { Send, ArrowUpRight, Shield, CheckCircle, Zap } from "lucide-react";
import { useInView } from "~/hooks/useInView";
import { HeroChatDemo } from "~/components/BIAdvisor/BIHero";

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView({ once: true, threshold: 0.08 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`transition-all duration-700 ease-out ${className}`}
      style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(40px)", transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function BIValueProp() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#0B0D17] border-b border-gray-200 dark:border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection>
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] px-5 py-2 rounded-xl text-xs font-black uppercase tracking-[0.2em] mb-6 border border-[var(--brand-primary)]/20">
              L&apos;IA AU SERVICE DU PILOTAGE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
              POSEZ UNE QUESTION.<br />
              <span className="text-[var(--brand-primary)]">RÉPONSE EN SECONDES.</span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Chat Demo in Browser Chrome */}
          <RevealSection className="relative order-2 lg:order-1">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[var(--brand-primary)]/8 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative bg-white dark:bg-[#111] rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-[#f0f0f0] dark:bg-[#1e1e1e] border-b border-gray-300 dark:border-white/5">
                <div className="flex items-end gap-0 px-3 pt-2">
                  <div className="flex gap-1.5 items-center mr-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white dark:bg-[#111] border border-b-white dark:border-white/10 dark:border-b-[#111] rounded-t-lg px-3 py-1.5 -mb-px max-w-[200px] min-w-0 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[var(--brand-primary)] flex-shrink-0" />
                    <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 truncate">BI Advisor — Malitix</span>
                    <svg className="w-3 h-3 text-gray-400 ml-auto flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <button className="pb-1 px-2 text-gray-400 flex-shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-[#f0f0f0] dark:bg-[#1e1e1e]">
                  <div className="flex gap-1 text-gray-400 dark:text-gray-600">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    <svg className="w-3.5 h-3.5 opacity-40" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                  <div className="flex items-center gap-1.5 flex-1 bg-white dark:bg-[#2a2a2a] rounded-md px-2.5 py-1 border border-gray-300 dark:border-white/10">
                    <svg className="w-3 h-3 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[11px] font-mono text-gray-700 dark:text-gray-300 flex-1">
                      malitix.com<span className="text-gray-400 dark:text-gray-500">/bi-advisor</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <HeroChatDemo />
              </div>
            </div>
          </RevealSection>

          {/* Right: Feature bullets */}
          <div className="order-1 lg:order-2 space-y-10">
            <RevealSection delay={100}>
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-2xl bg-[var(--brand-primary)]/10 dark:bg-[var(--brand-primary)]/20 flex items-center justify-center text-[var(--brand-primary)] group-hover:scale-110 transition-transform">
                  <Send size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight">Parlez à vos données comme à un collègue</h3>
                  <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-3">Posez vos questions en français. L&apos;IA traduit votre intention et génère vos graphiques instantanément.</p>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider border border-emerald-100 dark:border-emerald-800/30">
                    <CheckCircle size={12} /> AUTONOMIE TOTALE
                  </span>
                </div>
              </div>
            </RevealSection>

            <div className="border-t border-gray-100 dark:border-white/5" />

            <RevealSection delay={200}>
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight">Anticipez les crises avant qu&apos;elles n&apos;arrivent</h3>
                  <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-3">Trésorerie, ventes et BFR : obtenez des prévisions fiables basées sur vos données réelles.</p>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider border border-emerald-100 dark:border-emerald-800/30">
                    <CheckCircle size={12} /> PILOTAGE PROACTIF
                  </span>
                </div>
              </div>
            </RevealSection>

            <div className="border-t border-gray-100 dark:border-white/5" />

            <RevealSection delay={300}>
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 mt-1 relative w-10 h-10 rounded-2xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-500 dark:text-red-400 group-hover:scale-110 transition-transform">
                  <Shield size={20} />
                  <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">Ne ratez plus jamais un signal critique</h3>
                    <span className="px-1.5 py-0.5 rounded bg-red-500 text-white text-[9px] font-black uppercase animate-pulse">LIVE</span>
                  </div>
                  <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-3">Alertes automatiques en cas d&apos;anomalie ou de baisse de marge critique détectée.</p>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider border border-emerald-100 dark:border-emerald-800/30">
                    <CheckCircle size={12} /> L&apos;IA SURVEILLE 24/7
                  </span>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
