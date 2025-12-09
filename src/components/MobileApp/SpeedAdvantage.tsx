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
// VARIANT C: Clean Compact Flow
// =============================================
function SpeedVariantC() {
  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Votre Arme Secrète
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Le problème n'est pas le budget. <span className="font-bold text-[#2ca3bd]">C'est la vitesse.</span>
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-[var(--bg-secondary)] border-l-4 border-red-500 rounded-r-xl p-8 mb-12">
          <p className="text-lg text-[var(--text-primary)]">
            En France : <span className="font-bold text-red-500">6 mois</span> pour recruter un développeur, <span className="font-bold text-red-500">12 mois</span> pour une équipe.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl hover:border-[#2ca3bd] transition-all">
            <div className="text-3xl mb-3">💪</div>
            <h4 className="font-bold text-[var(--text-primary)] mb-2">Une Armée</h4>
            <p className="text-sm text-[var(--text-secondary)]">Équipe complète instantanée</p>
          </div>
          <div className="text-center p-6 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl hover:border-[#2ca3bd] transition-all">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-bold text-[var(--text-primary)] mb-2">Zéro Latence</h4>
            <p className="text-sm text-[var(--text-secondary)]">On code dès mardi</p>
          </div>
          <div className="text-center p-6 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl hover:border-[#2ca3bd] transition-all">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-[var(--text-primary)] mb-2">Focus Total</h4>
            <p className="text-sm text-[var(--text-secondary)]">100% dédiés à vous</p>
          </div>
        </div>

        {/* Result */}
        <div className="text-center">
          <p className="text-lg text-[var(--text-secondary)] mb-4">Résultat :</p>
          <div className="inline-flex items-baseline gap-3">
            <span className="text-5xl font-bold text-[#2ca3bd]">3 mois</span>
            <span className="text-2xl text-[var(--text-secondary)]">pas</span>
            <span className="text-5xl font-bold text-red-500 line-through opacity-50">12</span>
          </div>
        </div>
      </div>
    </section>
  );
}
