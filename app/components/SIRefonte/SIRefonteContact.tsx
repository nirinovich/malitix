import { SharedContactForm } from "~/components/Shared/Form/SharedContactForm";
import { CheckCircle } from "lucide-react";

export default function SIRefonteContact() {
  return (
    <section
      id="contact-sirefonte"
      className="relative py-24 overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl bg-[var(--brand-primary)]/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--brand-primary)] text-white text-sm font-bold mb-4">
            L'Audit Express — Diagnostic 8h (offert)
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-[var(--text-primary)]">
            Votre SI peut créer plus de valeur.
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            La clé du diagnostic en 8h offert par Malitix.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <div className="relative animate-on-scroll in-view stagger-1">
            <SharedContactForm 
              source="LP - SI Refonte"
              buttonText="Je demande mon Audit Express offert"
              title="Demandez votre Audit Express"
              subtitle="Diagnostic 8h offert par nos experts SI."
            />
          </div>

          {/* Right: Benefits/Promise */}
          <div className="space-y-6 lg:self-center animate-on-scroll in-view stagger-2">
            <div className="p-6 sm:p-8 rounded-3xl backdrop-blur-sm border-2 bg-[var(--brand-primary)]/10 border-[var(--brand-primary)]/30 shadow-lg">
              <h3 className="text-2xl font-black mb-6 text-[var(--text-primary)]">
                L'Audit Express — Diagnostic 8h (offert)
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[var(--brand-primary)] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-bold mb-1 text-[var(--text-primary)]">
                      1) Une vision claire de votre SI actuel
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Cartographie infra / application / data / sécurité
                      <br />
                      Détermination du niveau de maturité décisionnelle
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[var(--brand-primary)] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-bold mb-1 text-[var(--text-primary)]">
                      2) Vos risques majeurs & leurs impacts
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Cybersécurité, disponibilité, conformité
                      <br />
                      Cartographie des risques à prioriser
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[var(--brand-primary)] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-bold mb-1 text-[var(--text-primary)]">
                      3) Votre potentiel d'optimisation cloud
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Analyse coûts + gigantesques économies (-20% -40%)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[var(--brand-primary)] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-bold mb-1 text-[var(--text-primary)]">
                      4) Vos quick wins à ROI immédiat
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Actions réalisables en 90 jours
                      <br />
                      Gains de coûts, sécu, performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[var(--brand-primary)] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-bold mb-1 text-[var(--text-primary)]">
                      5) Votre roadmap 90 jours
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      3 objectifs prioritaires
                      <br />
                      Impacts, composante, budget indicatif
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
