import { useTheme } from '../context/ThemeContext';

export default function LegalNotice() {
  const { theme } = useTheme();

  return (
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
              1. Informations légales
            </h2>
            <p className="mb-4">
              <strong>Raison sociale :</strong> Malitix<br />
              <strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)<br />
              <strong>Siège social :</strong> Antananarivo, Madagascar<br />
              <strong>NIF :</strong> 5001234567<br />
              <strong>STAT :</strong> 82345678901234<br />
              <strong>Registre du Commerce :</strong> 2023 B 00456<br />
              <strong>Téléphone :</strong> +261 34 49 796 50<br />
              <strong>Email :</strong> <a href="mailto:contact@malitix.com" className="text-[#2ca3bd] hover:underline">contact@malitix.com</a>
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              2. Directeur de publication
            </h2>
            <p>
              Le directeur de publication du site est <strong>ANDRIANARITSALAMA Michael Nirinovich</strong>.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              3. Hébergement
            </h2>
            <p className="mb-4">
              <strong>Hébergeur :</strong> Firebase Hosting (Google LLC)<br />
              <strong>Adresse :</strong> 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA<br />
              <strong>Site web :</strong> <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-[#2ca3bd] hover:underline">firebase.google.com</a>
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              4. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble du contenu présent sur ce site (textes, images, logos, vidéos, etc.) 
              est la propriété exclusive de Malitix ou de ses partenaires. Toute reproduction, 
              distribution, modification, adaptation, retransmission ou publication de ces 
              différents éléments est strictement interdite sans l'accord exprès par écrit de Malitix.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              5. Limitation de responsabilité
            </h2>
            <p>
              Malitix s'efforce d'assurer l'exactitude et la mise à jour des informations 
              diffusées sur ce site. Toutefois, Malitix ne peut garantir l'exactitude, 
              la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              6. Données personnelles
            </h2>
            <p>
              Pour plus d'informations sur la collecte et le traitement de vos données personnelles, 
              veuillez consulter notre{' '}
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
              7. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit malgache. 
              En cas de litige, les tribunaux de Madagascar seront seuls compétents.
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
  );
}
