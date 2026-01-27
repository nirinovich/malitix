import { PlugZap, Users } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const paragraph = "Vous avez une roadmap chargée et pas assez de mains pour coder ? Le recrutement traditionnel est lent et risqué. Les freelances sont imprévisibles. Chez Malitix, nous ne sommes pas une 'agence offshore'. Nous sommes votre extension technique. Nous vous pluggons une équipe commando déjà rodée qui s'intègre à vos outils (Slack, Jira) dès le Jour 1.";

export default function HumaniserVariantC() {
  const { theme } = useTheme();

  return (
    <section id="humaniser" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2ca3bd]">
              <Users size={16} />
              Humaniser
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Une équipe déjà soudée, plug-and-play.
            </h2>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              {paragraph}
            </p>
            <div className={`rounded-2xl border p-4 ${theme === 'dark' ? 'border-white/10 bg-white/5 text-white/70' : 'border-gray-200 bg-gray-50 text-gray-700'}`}>
              <div className="flex items-center gap-3">
                <PlugZap className="text-[#2ca3bd]" size={20} aria-hidden="true" />
                <div>
                  <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Illustration "bite-sized"
                  </div>
                  <div className="text-sm">Connexion → Coordination → Livraison</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              '/images/testimonials/selim-saadi.png',
              '/images/testimonials/riad.png',
              '/images/testimonials/david.png',
              '/images/testimonials/selim-saadi.png',
            ].map((src, index) => (
              <div key={`${src}-${index}`} className="rounded-2xl overflow-hidden shadow-lg">
                <img src={src} alt="Membre de l'équipe Malitix" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
