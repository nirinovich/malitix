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

export default function ValueStackVariantB() {
  const { theme } = useTheme();

  return (
    <section id="value-stack" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">Ce que vous gagnez</div>
            <h2 className={`text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Ce n'est pas juste de l'externalisation.
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              C'est votre accélérateur de croissance.
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 rounded-2xl border p-5 ${
                  theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="h-10 w-10 rounded-xl bg-[#2ca3bd]/15 flex items-center justify-center">
                  <item.icon className="text-[#2ca3bd]" size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </div>
                  <div className={`text-sm mt-1 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
