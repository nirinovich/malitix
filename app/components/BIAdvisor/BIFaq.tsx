import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "~/hooks/useInView";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-[var(--border-primary)] rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "bg-[var(--surface-elevated)] shadow-lg shadow-[var(--brand-primary)]/5"
          : "bg-transparent hover:bg-[var(--surface-elevated)]/50"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
      >
        <span className="text-lg font-bold text-[var(--text-primary)]">{question}</span>
        <ChevronDown
          className={`text-[var(--brand-primary)] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={22}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-5 text-[var(--text-secondary)] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

const faqItems = [
  {
    question: "Combien ça coûte ?",
    answer:
      "BI Advisor fonctionne sur un modèle d'abonnement adapté à votre volume de données et au nombre d'utilisateurs. Le POC est 100% gratuit et sans engagement — vous ne payez rien avant d'être convaincu par les résultats.",
  },
  {
    question: "Combien de temps pour l'implémentation ?",
    answer:
      "2 semaines en moyenne. Nous nous connectons à votre ERP en lecture seule, importons vos historiques, et formons vos équipes. Pas de projet IT de 6 mois. Vous êtes opérationnel le jour de la livraison.",
  },
  {
    question: "Est-ce que mes données sont en sécurité ?",
    answer:
      "Absolument. BI Advisor fonctionne en lecture seule — vos données sont analysées mais jamais modifiées. Chiffrement de bout en bout (E2E), hébergement souverain, et conformité RGPD complète. Nous pouvons signer un NDA dès le premier appel.",
  },
  {
    question: "Et si mon ERP n'est pas dans la liste ?",
    answer:
      "Nos connecteurs sont universels. Si votre ERP expose une API ou une base de données, nous pouvons nous y connecter. Nous avons déjà intégré SAP, Sage, Oracle, Dynamics, Odoo, et de nombreux ERP métier. Contactez-nous, la réponse est souvent 'oui'.",
  },
  {
    question: "Ça remplace notre BI existante ?",
    answer:
      "Non, BI Advisor complète et amplifie vos outils existants (Power BI, Tableau, etc.). Il ajoute une couche conversationnelle et prédictive par-dessus vos données, rendant les insights accessibles à tous — pas seulement aux data analysts.",
  },
  {
    question: "Mon équipe n'est pas technique, c'est un problème ?",
    answer:
      "C'est exactement le point. BI Advisor a été conçu pour les non-techniciens. Vos équipes posent des questions en français, à l'écrit ou à la voix, et obtiennent des réponses visuelles instantanées. Zéro SQL, zéro Excel, zéro formation complexe.",
  },
];

export default function BIFaq() {
  const { ref, isInView } = useInView({ once: true });

  return (
    <section className="py-24 px-6 sm:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 animate-on-scroll ${isInView ? "in-view" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
            Les questions que vous vous posez{" "}
            <span className="text-[var(--brand-primary)]">(et les réponses franches)</span>
          </h2>
        </div>

        <div className={`space-y-4 animate-on-scroll stagger-1 ${isInView ? "in-view" : ""}`}>
          {faqItems.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
