import { Helmet } from 'react-helmet-async';
import { useTheme } from '../context/ThemeContext';

export default function LegalNotice() {
  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <title>Mentions Légales | Malitix</title>
        <meta name="description" content="Mentions légales de Malitix - ETECH CONSULTING SARLU. Informations sur l'éditeur du site, l'hébergement et les conditions d'utilisation." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.malitix.com/mentions-legales" />
      </Helmet>

      <div className={`min-h-screen py-24 ${
      theme === 'dark' ? 'bg-[#060705]' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-5xl font-bold mb-8 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Mentions Légales
        </h1>

        <div className={`space-y-8 ${
          theme === 'dark' ? 'text-white/80' : 'text-gray-700'
        }`}>
          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Édition du site internet
            </h2>
            <p className="mb-4">
              Le site <strong>https://www.malitix.com</strong> est édité par la société{' '}
              <strong>ETECH CONSULTING SARLU</strong> ayant son siège social au{' '}
              <strong>2ème étage de l'Immeuble TRADE TOWER ALAROBIA</strong>, immatriculée au 
              Registre du Commerce et des Sociétés d'Antananarivo sous le numéro{' '}
              <strong>2001 B 00268</strong>.
            </p>
            <p>
              Le site est exclusivement dédié au projet <strong>MALITIX</strong>, initiative 
              portée par la société ETECH CONSULTING SARLU.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Directeur de publication
            </h2>
            <p>
              Le Directeur de publication du site est <strong>ETECH CONSULTING SARLU</strong>.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Hébergeur
            </h2>
            <p>
              Le site est hébergé par <strong>ETECH CONSULTING SARLU</strong>.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Propriété industrielle
            </h2>
            <p>
              Le contenu de ce site y compris textes, images, graphiques, logos, est protégé par 
              l'Ordonnance 89-019 instituant un régime pour la protection de la propriété industrielle 
              en République Démocratique de Madagascar et est la propriété exclusive de{' '}
              <strong>ETECH CONSULTING SARLU</strong> sauf indication contraire.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Données personnelles
            </h2>
            <p className="mb-4">
              Le traitement des données personnelles est régi par la Loi N°2014-038 en date du 
              09 janvier 2015 sur la protection des données à caractère personnel à Madagascar.
            </p>
            <p>
              Pour plus d'informations, veuillez consulter notre{' '}
              <a 
                href="/politique-de-confidentialite" 
                className="text-[#2ca3bd] hover:underline"
              >
                Politique de confidentialité
              </a>.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Contacts
            </h2>
            <p>
              <strong>Téléphone :</strong> <a href="tel:+33184806248" className="text-[#2ca3bd] hover:underline">+33 1 84 80 62 48</a><br />
              <strong>E-mail :</strong> <a href="mailto:lola.rakotoarison@etechconsulting-mg.com" className="text-[#2ca3bd] hover:underline">lola.rakotoarison@etechconsulting-mg.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
          <p className={`text-sm ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-500'
          }`}>
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
