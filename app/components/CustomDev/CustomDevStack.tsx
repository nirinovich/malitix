import { Target, Rocket, Lock, Award } from 'lucide-react';

export default function CustomDevStack() {
  const simplifiedStack = [
    { icon: Target, title: 'Audit Stratégique', desc: 'ROI garanti dès le départ' },
    { icon: Rocket, title: 'Développement Agile', desc: 'Livraison en 90 jours' },
    { icon: Lock, title: 'Sécurité RGPD', desc: 'Données blindées' },
    { icon: Award, title: 'Code de Qualité', desc: 'Zéro dette technique' },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)]">
            4 Piliers Pour Votre{' '}
            <span className="text-[var(--brand-text)]">
              Succès
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {simplifiedStack.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center bg-[#2ca3bd]/10 border-2 border-[#2ca3bd]/30">
                  <Icon className="text-[#2ca3bd]" size={36} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-3xl text-center bg-gradient-to-r from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20">
          <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
            Technologies Modernes
          </h3>
          <p className="text-lg text-[var(--text-secondary)]">
            React • Python • Mobile Natif • Cloud Infrastructure • API RESTful
          </p>
        </div>
      </div>
    </section>
  );
}
