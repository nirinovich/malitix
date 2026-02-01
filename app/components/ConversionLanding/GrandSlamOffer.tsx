import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useTheme } from "~/hooks/useTheme";
import { CONVERSION_LANDING_GRAND_SLAM } from "~/utils/constants";

export function GrandSlamOffer() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });
  const prefersReducedMotion = useReducedMotion();

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
      id="grand-slam-offer"
      className={`py-20 ${theme === "dark" ? "bg-[#060705]" : "bg-[#f5f7f9]"}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
          <ShieldCheck size={16} />
          {CONVERSION_LANDING_GRAND_SLAM.eyebrow}
        </div>
        <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          {CONVERSION_LANDING_GRAND_SLAM.headline}
        </h2>
        <p className={`mt-4 text-lg leading-relaxed ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
          {CONVERSION_LANDING_GRAND_SLAM.body}
        </p>
        <div className="mt-8">
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 text-base font-semibold shadow-xl shadow-[#2ca3bd]/30 transition-all duration-300"
          >
            {CONVERSION_LANDING_GRAND_SLAM.cta}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
