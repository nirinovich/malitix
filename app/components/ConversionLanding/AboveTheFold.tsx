import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";
import { CONVERSION_LANDING_ABOVE_THE_FOLD } from "~/utils/constants";

export function AboveTheFold() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });
  const prefersReducedMotion = useReducedMotion();
  const {
    headlinePrimary,
    headlineSecondary,
    subHeadline,
    ctaLabel,
    ctaSubtext,
    badgeLabel,
    highlights,
    stats,
  } = CONVERSION_LANDING_ABOVE_THE_FOLD;

  const containerVariants: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="above-the-fold"
      className="pt-28 pb-20 overflow-hidden bg-[var(--bg-primary)]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] bg-[var(--surface-elevated)] text-[var(--text-secondary)]">
              <Target size={14} className="text-[#2ca3bd]" />
              {badgeLabel}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--text-primary)]">
                {headlinePrimary}
                <span className="block text-[#2ca3bd]">{headlineSecondary}</span>
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)]">
                {subHeadline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-base sm:text-lg font-semibold shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                {ctaLabel}
                <ArrowRight size={20} />
              </a>
              <span className="text-sm text-[var(--text-tertiary)]">
                {ctaSubtext}
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border p-8 shadow-2xl transition-all duration-500 hover:-translate-y-1 border-[var(--border-primary)] bg-[var(--surface-elevated)]">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-[#2ca3bd]/15 flex items-center justify-center">
                    <Target className="text-[#2ca3bd]" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      Prêts en 72h
                    </div>
                    <div className="text-xs text-[var(--text-tertiary)]">
                      Intégration Slack + Jira
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl px-4 py-3 border transition-all duration-300 border-[var(--border-primary)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:bg-[var(--surface-hover)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border p-4 border-[var(--border-primary)] bg-[var(--surface-elevated)]"
                    >
                      <div className="text-xl font-bold text-[#2ca3bd]">{stat.label}</div>
                      <div className="text-xs text-[var(--text-tertiary)]">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-6 h-24 w-24 rounded-full bg-[#2ca3bd]/20 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
