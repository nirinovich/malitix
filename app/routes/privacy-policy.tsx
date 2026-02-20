import type { Route } from "../+types/root";
import { Layout } from "~/components/Shared/Layout";
import { buildMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () => [
  ...buildMeta({
    title: "Politique de Confidentialité",
    description: "Politique de confidentialité et protection des données personnelles chez Malitix. Conformité RGPD et législation malgache sur la protection des données.",
    url: "https://malitix.com/politique-de-confidentialite"
  }),
  { name: "robots", content: "noindex, follow" },
];

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="min-h-screen py-24 bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-[var(--text-primary)]">
          Politique de Confidentialité
        </h1>

        <div className="space-y-8 text-[var(--text-secondary)]">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              1. Introduction
            </h2>
            <p>
              Chez Malitix, nous accordons une grande importance à la protection de vos données 
              personnelles. Cette politique de confidentialité décrit comment nous collectons, 
              utilisons et protégeons vos informations personnelles conformément au Règlement 
              Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              2. Données collectées
            </h2>
            <p className="mb-4">
              Nous collectons les données personnelles suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nom et prénom</li>
              <li>Adresse email professionnelle</li>
              <li>Site web de votre entreprise</li>
              <li>Message et informations sur votre projet</li>
              <li>Données de navigation (cookies, adresse IP, pages visitées)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              3. Finalités du traitement
            </h2>
            <p className="mb-4">
              Vos données personnelles sont collectées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Répondre à vos demandes de contact et de renseignements</li>
              <li>Vous proposer nos services et solutions adaptées à vos besoins</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Vous envoyer des communications marketing (avec votre consentement)</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              4. Base légale du traitement
            </h2>
            <p>
              Le traitement de vos données personnelles repose sur :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Votre consentement (formulaire de contact)</li>
              <li>L'exécution de mesures précontractuelles</li>
              <li>Notre intérêt légitime à développer notre activité</li>
              <li>Le respect de nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              5. Durée de conservation
            </h2>
            <p>
              Vos données personnelles sont conservées pendant la durée nécessaire aux finalités 
              pour lesquelles elles ont été collectées, conformément à la législation en vigueur :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Données de contact : 3 ans à compter du dernier contact</li>
              <li>Données de prospection : 3 ans à compter de la collecte</li>
              <li>Données contractuelles : durée du contrat + 5 ans (prescription commerciale)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              6. Destinataires des données
            </h2>
            <p>
              Vos données personnelles sont destinées aux services internes de Malitix. 
              Elles peuvent également être transmises à nos sous-traitants (hébergement, 
              outils de gestion, services marketing) qui s'engagent à respecter la confidentialité 
              et la sécurité de vos données.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              7. Vos droits
            </h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:infos@malitix.com" className="text-[var(--brand-text)] hover:underline">infos@malitix.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              8. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
              pour garantir la sécurité de vos données personnelles et les protéger contre 
              tout accès non autorisé, modification, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              9. Cookies
            </h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation. 
              Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé 
              de leur utilisation. Certaines fonctionnalités du site peuvent être limitées sans cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              10. Modifications de la politique
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications entreront en vigueur dès leur publication sur cette page. 
              Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              11. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou le traitement 
              de vos données personnelles, vous pouvez nous contacter :
            </p>
            <ul className="list-none space-y-2 ml-4 mt-4">
              <li><strong>Email :</strong> <a href="mailto:infos@malitix.com" className="text-[var(--brand-text)] hover:underline">infos@malitix.com</a></li>
            </ul>
            <p className="mt-4">
              Vous avez également le droit d'introduire une réclamation auprès de la CNIL 
              (Commission Nationale de l'Informatique et des Libertés) si vous estimez que 
              vos droits ne sont pas respectés.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-primary)]">
          <p className="text-sm text-[var(--text-secondary)] opacity-80">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </div>
      </Layout>
  );
}
