import { Mail, Phone, ArrowRight } from 'lucide-react';
import { useABTestVariant } from '../../hooks/useABTest';

export default function FinalCTA() {
  const variant = useABTestVariant('cta');

  if (variant === 'A') {
    return <CTAVariantA />;
  } else if (variant === 'B') {
    return <CTAVariantB />;
  } else {
    return <CTAVariantC />;
  }
}

function CTAVariantA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
          Ne me croyez pas sur parole.
        </h2>
        <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
          Je ne veux pas vous vendre un devis maintenant. Je veux voir si votre projet tient la route.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <button className="group px-8 py-5 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
            Faire auditer mon projet
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-5 border-2 border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd] hover:text-white font-bold rounded-lg transition-all">
            Voir nos Tarifs
          </button>
        </div>

        <div className="space-y-4 mt-12">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">✓ Audit gratuit</h3>
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">✓ 30 minutes de consultation</h3>
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">✓ Sans engagement</h3>
        </div>
      </div>
    </section>
  );
}

function CTAVariantB() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Testez-nous dès maintenant.
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Vous validez le projet le lundi, nous commençons à coder le mardi. Une équipe complète (Tech Lead, Développeurs, QA) dédiée à 100% à votre succès.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3">
                <span className="text-white font-bold">✓</span>
                <span className="text-blue-100">Audit techniquement faisable</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white font-bold">✓</span>
                <span className="text-blue-100">Délai réaliste</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white font-bold">✓</span>
                <span className="text-blue-100">Évaluation du bon partenaire</span>
              </li>
            </ul>
            <button className="px-10 py-5 bg-white text-[#1e7a8f] font-bold rounded-lg hover:bg-blue-50 transition-all text-lg">
              Réserver un Audit Gratuit
            </button>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Vous découvrirez immédiatement :</h3>
            <ul className="space-y-4">
              <li className="text-blue-100 flex items-start gap-3">
                <span className="text-white font-bold mt-1">1</span>
                <span>Si c'est faisable techniquement</span>
              </li>
              <li className="text-blue-100 flex items-start gap-3">
                <span className="text-white font-bold mt-1">2</span>
                <span>Combien de temps cela prendra réellement</span>
              </li>
              <li className="text-blue-100 flex items-start gap-3">
                <span className="text-white font-bold mt-1">3</span>
                <span>Si nous sommes le bon partenaire pour vous (ou non)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAVariantC() {
  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Prêt à démarrer ?
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Réservez votre audit gratuit de 30 minutes
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/20 border-2 border-[#2ca3bd] rounded-2xl p-8 mb-8">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
            />
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
            />
            <input
              type="text"
              placeholder="Votre numéro de téléphone"
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
            />
            <button className="w-full px-8 py-4 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white font-bold rounded-lg transition-all">
              Faire auditer mon projet
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-[var(--text-secondary)]">
          ✓ Pas de spam • ✓ Audit gratuit • ✓ Sans engagement
        </p>

        <div className="mt-12 pt-8 border-t border-[var(--border-primary)]">
          <p className="text-center text-[var(--text-secondary)] mb-6">Ou contactez-nous directement :</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@malitix.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg hover:border-[#2ca3bd] transition-all">
              <Mail size={20} className="text-[#2ca3bd]" />
              <span className="text-[var(--text-primary)] font-semibold">Email</span>
            </a>
            <a href="tel:+33123456789" className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg hover:border-[#2ca3bd] transition-all">
              <Phone size={20} className="text-[#2ca3bd]" />
              <span className="text-[var(--text-primary)] font-semibold">Téléphone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
