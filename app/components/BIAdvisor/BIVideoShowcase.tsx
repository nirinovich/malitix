import { useInView } from "~/hooks/useInView";

export default function BIVideoShowcase() {
  const { ref, isInView } = useInView({ once: true });

  return (
    <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] relative border-b border-[var(--border-primary)]">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-10 animate-on-scroll ${isInView ? "in-view" : ""}`} ref={ref as React.RefObject<HTMLDivElement>}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
            Découvrez <span className="text-[var(--brand-primary)]">BI Advisor</span> en action
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Voyez comment nous transformons vos données brutes en insights exploitables
            instantanément.
          </p>
        </div>

        <div className={`animate-on-scroll stagger-2 ${isInView ? "in-view" : ""}`}>
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[var(--brand-primary)]/20 border-2 sm:border-4 border-[var(--border-primary)] hover:border-[var(--brand-primary)]/30 transition-all duration-500 group bg-[var(--surface-elevated)] p-2">
            <div className="relative rounded-3xl overflow-hidden aspect-video border border-[var(--border-primary)]">
              <video
                src="https://res.cloudinary.com/dqprx7rdw/video/upload/v1777277729/BI_ADVISOR-lOGO_MALITIX_1_kkkswp.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/images/erp_hero.webp"
              >
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
