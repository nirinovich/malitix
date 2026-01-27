import { Quote, Star } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const title = 'Ils ont livré leurs MVPs et Scalé leurs produits avec nous.';
const quotes = [
  '“Malitix nous a permis de sortir notre app 2 mois avant la concurrence.” – CEO, TechStart.',
  '“J’étais sceptique sur l’externalisation. Aujourd’hui, ils constituent 80% de ma force tech.” – CTO, ScaleUp.',
];
const metrics = '350+ Ingénieurs prêts à coder. 98% de taux de rétention client.';

export default function SocialProofVariantB() {
  const { theme } = useTheme();

  return (
    <section id="social-proof" className={`py-20 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">Social Proof</div>
            <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h2>
            <div className="mt-6 space-y-5">
              {quotes.map((quote) => (
                <div
                  key={quote}
                  className={`rounded-2xl border p-5 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'}`}
                >
                  <Quote className="text-[#2ca3bd]" size={20} aria-hidden="true" />
                  <p className={`mt-3 text-sm leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                    {quote}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-3xl border p-8 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'}`}>
            <div className="flex items-center gap-3 text-[#2ca3bd]">
              <Star size={20} />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">Key Metrics</span>
            </div>
            <div className={`mt-4 text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              350+
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Ingénieurs prêts à coder
            </div>
            <div className={`mt-6 text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              98%
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Taux de rétention client
            </div>
            <div className={`mt-6 text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
              {metrics}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
