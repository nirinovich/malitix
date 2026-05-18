import { XCircle } from "lucide-react";
import { useInView } from "~/hooks/useInView";

/* ─── Section Reveal Wrapper ─── */
function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isInView } = useInView({ once: true, threshold: 0.08 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function BIPainPoints() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-[#0a0e0d]">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6 border border-red-200 dark:border-red-900/50">
              ÇA VOUS PARLE ?
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase leading-tight">
              Vous passez plus de temps à{" "}
              <span className="text-red-600 line-through decoration-[6px] decoration-red-600/30">
                chercher
              </span>{" "}
              qu&apos;à{" "}
              <span className="text-[var(--brand-primary)]">décider</span>.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
              Les dirigeants perdent en moyenne 15 jours par mois à attendre des
              reportings. Pendant ce temps, les opportunités passent et les
              concurrents avancent.
            </p>
          </div>
        </RevealSection>

        <div className="max-w-4xl mx-auto space-y-6">
          <RevealSection delay={100}>
            <div className="bg-white dark:bg-[#111] p-8 sm:p-10 rounded-3xl border-2 border-red-100 dark:border-red-900/20 shadow-xl flex gap-6 items-start">
              <XCircle size={40} className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-wide">
                  Des reportings obsolètes avant d&apos;être lus
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Vous prenez des décisions stratégiques sur des données d&apos;il y
                  a 3 semaines. Le monde a changé depuis, mais votre tableau de
                  bord l&apos;ignore.
                </p>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="bg-white dark:bg-[#111] p-8 sm:p-10 rounded-3xl border-2 border-red-100 dark:border-red-900/20 shadow-xl flex gap-6 items-start">
              <XCircle size={40} className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-wide">
                  Otages de votre équipe technique
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Chaque question = un ticket IT. Chaque ticket = 3 à 7 jours
                  d&apos;attente. C&apos;est comme conduire une F1 avec un GPS en retard
                  de 15 minutes.
                </p>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={300}>
            <div className="bg-white dark:bg-[#111] p-8 sm:p-10 rounded-3xl border-2 border-red-100 dark:border-red-900/20 shadow-xl flex gap-6 items-start">
              <XCircle size={40} className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-wide">
                  Excel : Le cimetière de la productivité
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Vos équipes passent 60% de leur temps à fusionner des fichiers
                  au lieu de piloter la croissance. C&apos;est du gaspillage pur et
                  dur.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
