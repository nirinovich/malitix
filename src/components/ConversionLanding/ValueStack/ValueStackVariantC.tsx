import { useTheme } from '../../../context/ThemeContext';

const items = [
  {
    title: "Vitesse d'Exécution",
    description: 'Pourquoi attendre 3 mois de préavis ? Nos devs push du code dès leur première semaine.',
  },
  {
    title: 'Expertise Tech Validée',
    description: 'Nous ne vous envoyons pas des juniors. Nos ingénieurs ont livré plus de 600 projets complexes.',
  },
  {
    title: 'Flexibilité Totale',
    description: 'Besoin de scaler pour un rush ? On ajoute 2 devs. Le rush est fini ? On réduit la voilure. Vous payez ce que vous consommez.',
  },
  {
    title: 'Zéro Risque RH',
    description: "Pas de charges patronales, pas de gestion de carrière, pas de drama. On gère l'humain, vous gérez la vision.",
  },
];

export default function ValueStackVariantC() {
  const { theme } = useTheme();

  return (
    <section id="value-stack" className={`py-20 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">Value Stack</div>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Ce n'est pas juste de l'externalisation. C'est votre accélérateur de croissance.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-3xl border p-6 flex flex-col sm:flex-row sm:items-center gap-4 ${
                theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="h-12 w-12 rounded-2xl bg-[#2ca3bd]/15 flex items-center justify-center text-[#2ca3bd] font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <div className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </div>
                <div className={`mt-2 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
