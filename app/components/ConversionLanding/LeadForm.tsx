import { SharedContactForm } from "~/components/Shared/Form/SharedContactForm";
import { CONVERSION_LANDING_LEAD_FORM } from "~/utils/constants";
import { CheckCircle2 } from "lucide-react";

export function LeadForm() {
  return (
    <section id="lead-form" className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-primary)] font-semibold">
              {CONVERSION_LANDING_LEAD_FORM.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {CONVERSION_LANDING_LEAD_FORM.title}
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              {CONVERSION_LANDING_LEAD_FORM.description}
            </p>
            <div className="space-y-3">
              {CONVERSION_LANDING_LEAD_FORM.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="bg-[var(--brand-primary)]/20 p-2 rounded-full">
                    <CheckCircle2 className="text-[var(--brand-primary)]" size={20} />
                  </div>
                  <span className="text-[var(--text-secondary)]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-on-scroll in-view">
             <SharedContactForm 
                source="Conversion Landing"
                buttonText="Envoyer ma demande"
                title="Demande d'informations"
                subtitle="Réponse sous 24h ouvrées."
             />
          </div>
        </div>
      </div>
    </section>
  );
}
