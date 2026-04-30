import { CheckCircle } from "lucide-react";
import { SharedContactForm } from "~/components/Shared/Form/SharedContactForm";
import { useInView } from "~/hooks/useInView";

const benefits = [
  {
    title: "1) Une démo live sur vos données",
    desc: "Connecté à votre ERP, en conditions réelles, pas sur des données fictives.",
  },
  {
    title: "2) Une session de questions/réponses dédiée",
    desc: "Avec un expert Malitix pour calibrer BI Advisor à vos cas d'usage métier.",
  },
  {
    title: "3) Un POC complet sous 48h",
    desc: "Prévisions, alertes et chatbot BI configurés sur vos données historiques.",
  },
  {
    title: "4) Un rapport d'impact ROI personnalisé",
    desc: "Estimations chiffrées du gain de temps et de marge pour votre activité.",
  },
  {
    title: "5) Zéro engagement",
    desc: "Aucun contrat. Décidez d'avancer uniquement si les résultats vous convainquent.",
  },
];

export default function BIContactSection() {
  const { ref, isInView } = useInView({ once: true });

  return (
    <section
      id="bi-advisor-contact"
      className="relative py-24 overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full blur-3xl bg-[var(--brand-primary)]/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 animate-on-scroll ${isInView ? "in-view" : ""}`}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--brand-primary)] text-white text-sm font-bold mb-4">
            Démo &amp; Test Gratuit — Sur vos données réelles
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-[var(--text-primary)]">
            Prêt à dialoguer avec votre entreprise ?
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Lancez un Proof of Concept sur vos données historiques. Résultats en moins de 48h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Form */}
          <div className={`animate-on-scroll stagger-1 ${isInView ? "in-view" : ""}`}>
            <SharedContactForm
              source="LP - BI Advisor"
              buttonText="Demander ma démo et mon test gratuit"
              title="Planifiez votre démonstration"
              subtitle="Remplissez le formulaire pour recevoir votre POC personnalisé sous 48h."
            />
          </div>

          {/* Right — What you get */}
          <div className={`space-y-6 lg:self-center animate-on-scroll stagger-2 ${isInView ? "in-view" : ""}`}>
            <div className="p-6 sm:p-8 rounded-3xl backdrop-blur-sm border-2 bg-[var(--brand-primary)]/5 border-[var(--brand-primary)]/30">
              <h3 className="text-2xl font-black mb-6 text-[var(--text-primary)]">
                Ce que vous obtenez
              </h3>
              <div className="space-y-4">
                {benefits.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-[var(--brand-primary)] flex-shrink-0 mt-1"
                      size={22}
                    />
                    <div>
                      <div className="font-bold mb-1 text-[var(--text-primary)]">{item.title}</div>
                      <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl text-center backdrop-blur-sm border border-[var(--border-primary)] bg-[var(--surface-elevated)]">
              <p className="text-sm text-[var(--text-secondary)]">
                &quot;Nous ne lançons que 5 POC par mois pour garantir un accompagnement
                premium.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
