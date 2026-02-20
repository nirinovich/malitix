import { ArrowRight, ShieldCheck } from "lucide-react";
import { CONVERSION_LANDING_GRAND_SLAM } from "~/utils/constants";
import { useInView } from "~/hooks/useInView";

export function GrandSlamOffer() {
  const { ref: sectionRef, isInView } = useInView({ once: true, margin: "-120px" });

  return (
    <section
      ref={sectionRef}
      id="grand-slam-offer"
      className={`py-20 bg-[var(--bg-primary)] animate-on-scroll ${isInView ? 'in-view' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
          <ShieldCheck size={16} />
          {CONVERSION_LANDING_GRAND_SLAM.eyebrow}
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
          {CONVERSION_LANDING_GRAND_SLAM.headline}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
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
    </section>
  );
}
