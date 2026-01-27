import { BadgeCheck, Rocket, Shield, Shuffle } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const items = [
  {
    icon: Rocket,
    title: "Vitesse d'Exécution",
    description: 'Pourquoi attendre 3 mois de préavis ? Nos devs push du code dès leur première semaine.',
  },
  {
    icon: BadgeCheck,
    title: 'Expertise Tech Validée',
    description: 'Nous ne vous envoyons pas des juniors. Nos ingénieurs ont livré plus de 600 projets complexes.',
  },
  {
    icon: Shuffle,
    title: 'Flexibilité Totale',
    description: 'Besoin de scaler pour un rush ? On ajoute 2 devs. Le rush est fini ? On réduit la voilure. Vous payez ce que vous consommez.',
  },
  {
    icon: Shield,
    title: 'Zéro Risque RH',
    description: "Pas de charges patronales, pas de gestion de carrière, pas de drama. On gère l'humain, vous gérez la vision.",
  },
];

export default function ValueStackVariantA() {
  const { theme } = useTheme();

  return (
    <section id="value-stack" className={`py-20 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">Value Stack</div>
          <h2 className={`text-3xl sm:text-4xl font-bold mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Ce n'est pas juste de l'externalisation. C'est votre accélérateur de croissance.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl border p-6 transition-all ${
                theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#2ca3bd]/15 flex items-center justify-center">
                  <item.icon className="text-[#2ca3bd]" size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
