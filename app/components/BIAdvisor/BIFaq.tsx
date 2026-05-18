import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "~/hooks/useInView";

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isInView } = useInView({ once: true, threshold: 0.08 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`transition-all duration-700 ease-out ${className}`}
      style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(40px)" }}>
      {children}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 dark:border-white/10 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-6 flex items-center justify-between gap-4 cursor-pointer hover:text-[var(--brand-primary)] transition-colors">
        <span className="text-xl font-bold text-gray-900 dark:text-white">{question}</span>
        <ChevronDown className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={24} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{answer}</p>
      </div>
    </div>
  );
}

export default function BIFaq() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-[#0a0e0d] border-t border-gray-200 dark:border-white/10">
      <div className="max-w-3xl mx-auto">
        <RevealSection>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-12 text-center uppercase">
            FOIRE AUX QUESTIONS
          </h2>
          <div className="bg-white dark:bg-[#111] border-2 border-gray-200 dark:border-white/10 rounded-3xl p-6 shadow-xl">
            <FAQItem question="Combien ça coûte ?" answer="BI Advisor fonctionne sur un modèle d'abonnement adapté à votre volume de données et au nombre d'utilisateurs. Le POC est 100% gratuit et sans engagement — vous ne payez rien avant d'être convaincu par les résultats." />
            <FAQItem question="Combien de temps pour l'implémentation ?" answer="2 semaines en moyenne. Nous nous connectons à votre ERP en lecture seule, importons vos historiques, et formons vos équipes. Pas de projet IT de 6 mois. Vous êtes opérationnel le jour de la livraison." />
            <FAQItem question="Est-ce que mes données sont en sécurité ?" answer="Absolument. BI Advisor fonctionne en lecture seule — vos données sont analysées mais jamais modifiées. Chiffrement de bout en bout (E2E), hébergement souverain, et conformité RGPD complète. Nous pouvons signer un NDA dès le premier appel." />
            <FAQItem question="Et si mon ERP n'est pas dans la liste ?" answer="Nos connecteurs sont universels. Si votre ERP expose une API ou une base de données, nous pouvons nous y connecter. Nous avons déjà intégré SAP, Sage, Oracle, Dynamics, Odoo, et de nombreux ERP métier." />
            <FAQItem question="Ça remplace notre BI existante ?" answer="Non, BI Advisor complète et amplifie vos outils existants (Power BI, Tableau, etc.). Il ajoute une couche conversationnelle et prédictive par-dessus vos données." />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
