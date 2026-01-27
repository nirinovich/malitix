import { UsersRound } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const paragraph = "Vous avez une roadmap chargée et pas assez de mains pour coder ? Le recrutement traditionnel est lent et risqué. Les freelances sont imprévisibles. Chez Malitix, nous ne sommes pas une 'agence offshore'. Nous sommes votre extension technique. Nous vous pluggons une équipe commando déjà rodée qui s'intègre à vos outils (Slack, Jira) dès le Jour 1.";

export default function HumaniserVariantB() {
  const { theme } = useTheme();

  return (
    <section id="humaniser" className={`py-20 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl overflow-hidden border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative">
              <img src="/images/testimonials/selim-saadi.png" alt="Équipe Malitix" className="w-full h-full object-cover min-h-[320px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-xs uppercase tracking-[0.2em]">Équipe commando</div>
                <div className="text-lg font-semibold">Des humains intégrés à vos outils</div>
              </div>
            </div>
            <div className={`p-10 ${theme === 'dark' ? 'bg-[#0b0f0e]' : 'bg-white'}`}>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2ca3bd]">
                <UsersRound size={16} />
                Humaniser
              </div>
              <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Votre extension technique, pas une agence.
              </h2>
              <p className={`mt-4 text-lg leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {paragraph}
              </p>
              <div className={`mt-6 rounded-2xl p-4 border ${theme === 'dark' ? 'border-white/10 bg-white/5 text-white/70' : 'border-gray-200 bg-gray-50 text-gray-700'}`}>
                Une équipe déjà rodée, opérationnelle dès le Jour 1.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
