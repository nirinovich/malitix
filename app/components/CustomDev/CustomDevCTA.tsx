import { SharedContactForm } from "~/components/Shared/Form/SharedContactForm";
import { Clock, CheckCircle2 } from "lucide-react";

export default function CustomDevCTA() {
  return (
    <section
      id="contact-customdev"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[var(--brand-primary)]/10 to-[var(--brand-primary)]/5 border border-[var(--brand-primary)]/30">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-[var(--brand-primary)]/20 text-[var(--brand-primary)]">
                <Clock size={16} />2 places restantes ce mois
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)]">
                Votre Application en <span className="text-[var(--brand-primary)]">90 Jours</span>
              </h2>

              <ul className="space-y-3">
                {["Budget fixe garanti", "Audit gratuit de 45 min", "Réponse sous 24h"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[var(--brand-primary)]" size={20} />
                      <span className="text-lg text-[var(--text-secondary)]">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <SharedContactForm 
              source="Développement sur mesure"
              buttonText="Réserver mon audit gratuit"
              title="Lancez votre projet"
              subtitle="Aucun engagement. Réponse sous 24h ouvrées."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
