import { SharedContactForm } from "~/components/Shared/Form/SharedContactForm";

export default function SprintContact() {
  return (
    <section
      id="contact-sprint"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[size:40px_40px] sm:bg-[size:50px_50px] bg-[image:var(--hero-grid-pattern)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full blur-3xl bg-[var(--accent-secondary)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[var(--brand-primary)]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-primary)]">
              Passez à l'action
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[var(--brand-primary)]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 text-[var(--text-primary)]">
            <span className="block sm:inline">Prêt à débloquer votre projet ?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl px-4 text-[var(--text-secondary)]">
            Parlez-nous de votre situation. Réponse sous 24h.
          </p>
        </div>

        <SharedContactForm 
          source="LP - Sprint"
          buttonText="Démarrer le Sprint"
          title="Parlez-nous de votre problématique"
          subtitle="Réponse sous 24h garantie."
        />
      </div>
    </section>
  );
}
