import React from "react";
import { SharedContactForm } from "~/components/Shared/Form/SharedContactForm";
import { COMPANY_INFO } from "~/utils/constants";

const FinalCTA: React.FC = React.memo(() => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--bg-primary)] relative"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--brand-primary)] text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
            🚀 Audit Express — 30 min (offert)
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 px-2">
            Prêt à démarrer ? 💪
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] px-2">
            Réservez votre audit gratuit de 30 minutes et obtenez un plan d'attaque clair
          </p>
        </div>

        <SharedContactForm 
          source="LP - Mobile App"
          buttonText="Demander mon audit gratuit"
          title="Parlez-nous de votre app"
          subtitle="Vos données restent confidentielles."
        />

        {/* Contact direct */}
        <div className="mt-8 sm:mt-12 text-center space-y-2">
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Vous préférez nous appeler ?
          </p>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-block text-lg sm:text-xl font-bold text-[var(--text-primary)] hover:text-[var(--brand-primary)] transition-colors"
          >
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
});

FinalCTA.displayName = "FinalCTA";

export default FinalCTA;
