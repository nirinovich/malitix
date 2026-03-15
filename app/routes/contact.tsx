import { Layout } from "~/components/Shared/Layout";
import { SharedContactForm } from "~/components/Shared/Form/SharedContactForm";
import type { Route } from "./+types/contact";
import { Mail, Phone, Building2, Clock } from "lucide-react";
import { COMPANY_INFO } from "~/utils/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Consultation Gratuite | Malitix" },
    {
      name: "description",
      content:
        "Prenez contact avec Malitix pour discuter de votre projet de développement web, mobile, ou de refonte SI.",
    },
  ];
}

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]">
        {/* Abstract Background Decorators */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[var(--bg-secondary)]"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[var(--bg-secondary)]"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute inset-0 bg-[size:50px_50px] bg-[image:var(--hero-grid-pattern)]"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
            {/* Left Side - Presentation */}
            <div className="space-y-10 animate-slide-right in-view stagger-1">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--brand-primary)]"></div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-primary)]">
                    Consultation Gratuite
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[var(--text-primary)]">
                  Discutons de vos <br className="hidden sm:block" />
                  <span className="text-[var(--brand-primary)]">
                    futurs succès
                  </span>
                </h1>
                <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
                  Qu'il s'agisse d'un nouveau projet, d'une refonte complète ou du renfort de votre
                  équipe technique, nos experts vous accompagnent à chaque étape.
                </p>
              </div>

              {/* Info grid */}
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-[var(--border-primary)]">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--brand-primary)]/10 p-3 rounded-2xl flex-shrink-0">
                      <Mail className="text-[var(--brand-primary)]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-[var(--text-primary)] font-medium hover:text-[var(--brand-primary)] transition-colors break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--brand-primary)]/10 p-3 rounded-2xl flex-shrink-0">
                      <Phone className="text-[var(--brand-primary)]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                        Téléphone
                      </h3>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-[var(--text-primary)] font-medium hover:text-[var(--brand-primary)] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--brand-primary)]/10 p-3 rounded-2xl flex-shrink-0">
                      <Building2 className="text-[var(--brand-primary)]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                        Bureau
                      </h3>
                      <p className="text-[var(--text-primary)] font-medium">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--brand-primary)]/10 p-3 rounded-2xl flex-shrink-0">
                      <Clock className="text-[var(--brand-primary)]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                        Disponibilité
                      </h3>
                      <p className="text-[var(--text-primary)] font-medium">
                        Lundi - Vendredi, 9h-18h
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-on-scroll in-view stagger-2">
               <SharedContactForm 
                  source="Contact Page" 
                  buttonText="Planifier ma consultation"
                  title="Envoyez-nous un message"
               />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
