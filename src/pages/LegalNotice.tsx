import { useTheme } from '../context/ThemeContext';

export default function LegalNotice() {
  useTheme(); // Keeps theme context initialized

  return (
    <>
      <title>Mentions Légales - Malitix</title>
      <meta name="description" content="Mentions légales du site Malitix. Informations sur l'éditeur, l'hébergeur et les dispositions légales applicables selon la législation malgache." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://www.malitix.com/mentions-legales" />
      
      <div className="min-h-screen py-24 bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-[var(--text-primary)]">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-[var(--text-secondary)]">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              Édition du site internet
            </h2>
            <p className="mb-4">
              Le site <strong>https://www.malitix.com</strong> est édité par la société{' '}
              <strong>TOGETH'UP, SARL</strong> ayant son siège social au{' '}
              <strong>26 rue de Londres, 75009 PARIS, France</strong>, immatriculée au 
              Registre du Commerce et des Sociétés de Paris, France, sous le numéro{' '}
              <strong>B 432 872 323</strong>.
            </p>
            <p>
              Le site est exclusivement dédié au projet <strong>MALITIX</strong>, initiative 
              portée par la société TOGETH'UP, SARL.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              Directeur de publication
            </h2>
            <p>
              Le Directeur de publication du site est <strong>TOGETH'UP, SARL</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              Hébergeur
            </h2>
            <p>
              Le site est hébergé par <strong>TOGETH'UP, SARL</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              Propriété industrielle
            </h2>
            <p>
              L'ensemble du contenu du site (textes, images, graphismes, logos, vidéos, éléments sonores, etc.) 
              est protégé par les lois en vigueur relatives à la propriété intellectuelle.
            </p>
            <p className="mt-4">
              Toute reproduction, représentation, diffusion, modification ou exploitation, totale ou partielle, 
              sans autorisation écrite préalable de l'éditeur est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              Données personnelles
            </h2>
            <p className="mb-4">
              Le traitement des données personnelles est régi par le règlement (UE) 2016/679 du Parlement 
              européen et du Conseil du 27 avril 2016, relatif à la protection des personnes physiques à l'égard 
              du traitement des données à caractère personnel et à la libre circulation de ces données.
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
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              Contacts
            </h2>
            <p>
              <strong>Téléphone :</strong> <a href="tel:+33184806248" className="text-[#2ca3bd] hover:underline">+33 1 84 80 62 48</a><br />
              <strong>E-mail :</strong> <a href="mailto:infos@malitix.com" className="text-[#2ca3bd] hover:underline">infos@malitix.com</a>
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
    </>
  );
}
