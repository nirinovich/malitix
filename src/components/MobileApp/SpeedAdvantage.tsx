import { Users, Clock, Target, TrendingUp } from 'lucide-react';
import { useABTestVariant } from '../../hooks/useABTest';

export default function SpeedAdvantage() {
  const variant = useABTestVariant('speed');

  if (variant === 'A') {
    return <SpeedVariantA />;
  } else if (variant === 'B') {
    return <SpeedVariantB />;
  } else {
    return <SpeedVariantC />;
  }
}

// =============================================
// VARIANT A: Icon Cards Grid
// =============================================
function SpeedVariantA() {
  const advantages = [
    {
      icon: Users,
      title: 'Une Armée, pas un Soldat',
      description: 'Au lieu de galérer à gérer un freelance débordé, vous accédez instantanément à une équipe complète (Tech Lead, Développeurs, QA).'
    },
    {
      icon: Clock,
      title: 'Zéro Temps de Latence',
      description: 'Nous ne sommes pas en train d\'apprendre. Nous sommes déjà opérationnels. Vous validez le projet le lundi, nous commençons à coder le mardi.'
    },
    {
      icon: Target,
      title: 'Focus Total',
      description: 'Vos équipes internes sont interrompues toutes les 10 minutes. Nos équipes sont des machines à produire, dédiées à 100% à votre succès.'
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
          Votre Arme Secrète (Vitesse & Échelle)
        </h2>
        <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-3xl">
          Le problème n'est pas le budget. Le problème, c'est la vitesse.
        </p>
        <p className="text-lg text-[var(--text-secondary)] mb-16 max-w-3xl">
          En France, recruter un bon développeur prend 6 mois. Monter une équipe en prend 12. Pendant ce temps, vos concurrents vous doublent. <span className="font-bold text-[#2ca3bd]">Nous supprimons ce délai.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-8 hover:border-[#2ca3bd] transition-all">
                <Icon className="text-[#2ca3bd] mb-4" size={32} />
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white px-8 py-4 rounded-lg font-bold text-xl">
            Résultat : Vous sortez votre produit en 3 mois, pas en 12.
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Timeline/Visual Flow
// =============================================
function SpeedVariantB() {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 text-center">
          Votre Arme Secrète
        </h2>
        <p className="text-xl text-center text-[var(--text-secondary)] mb-4">
          Le problème n'est pas le budget. Le problème, c'est <span className="font-bold text-[#2ca3bd]">la vitesse</span>.
        </p>

        <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r-lg mb-12 mt-8">
          <p className="text-[var(--text-primary)] text-lg">
            En France, recruter un bon développeur prend <span className="font-bold">6 mois</span>. Monter une équipe en prend <span className="font-bold">12 mois</span>. Pendant ce temps, vos concurrents vous doublent.
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#2ca3bd]">Nous supprimons ce délai.</h3>
        </div>

        <div className="space-y-8 mb-16">
          <div className="flex items-start gap-6">
            <div className="bg-[#2ca3bd] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
            <div>
              <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Une Armée, pas un Soldat</h4>
              <p className="text-[var(--text-secondary)]">Au lieu de galérer à gérer un freelance débordé, vous accédez instantanément à une équipe complète (Tech Lead, Développeurs, QA).</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="bg-[#2ca3bd] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
            <div>
              <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Zéro Temps de Latence</h4>
              <p className="text-[var(--text-secondary)]">Nous ne sommes pas en train d'apprendre. Nous sommes déjà opérationnels. Vous validez le projet le lundi, nous commençons à coder le mardi.</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="bg-[#2ca3bd] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
            <div>
              <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Focus Total</h4>
              <p className="text-[var(--text-secondary)]">Vos équipes internes sont interrompues toutes les 10 minutes. Nos équipes sont des machines à produire, dédiées à 100% à votre succès.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white p-8 rounded-2xl text-center">
          <TrendingUp className="mx-auto mb-4" size={48} />
          <p className="text-2xl font-bold">Résultat : Vous sortez votre produit en 3 mois, pas en 12.</p>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Comparison Table
// =============================================
function SpeedVariantC() {
  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
          Votre Arme Secrète (Vitesse & Échelle)
        </h2>
        <p className="text-xl text-[var(--text-secondary)] mb-16 max-w-3xl">
          Le problème n'est pas le budget. Le problème, c'est la vitesse.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Le Problème */}
          <div className="bg-red-500/10 border-2 border-red-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-500 mb-6">❌ Recruter en France</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">•</span>
                <span className="text-[var(--text-primary)]">6 mois pour recruter un bon développeur</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">•</span>
                <span className="text-[var(--text-primary)]">12 mois pour monter une équipe</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">•</span>
                <span className="text-[var(--text-primary)]">Vos concurrents vous doublent</span>
              </li>
            </ul>
          </div>

          {/* Right: Notre Solution */}
          <div className="bg-[#2ca3bd]/10 border-2 border-[#2ca3bd] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#2ca3bd] mb-6">✓ Nous supprimons ce délai</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#2ca3bd] font-bold mt-1">•</span>
                <span className="text-[var(--text-primary)]"><strong>Une Armée</strong> : Équipe complète instantanée</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2ca3bd] font-bold mt-1">•</span>
                <span className="text-[var(--text-primary)]"><strong>Zéro Latence</strong> : On code dès le mardi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2ca3bd] font-bold mt-1">•</span>
                <span className="text-[var(--text-primary)]"><strong>Focus Total</strong> : 100% dédiés à vous</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white px-12 py-6 rounded-2xl">
            <p className="text-3xl font-bold">3 mois</p>
            <p className="text-lg mt-2">pas 12</p>
          </div>
        </div>
      </div>
    </section>
  );
}
