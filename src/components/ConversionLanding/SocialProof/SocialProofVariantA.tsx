import { Quote } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const title = 'Ils ont livré leurs MVPs et Scalé leurs produits avec nous.';
const quotes = [
  '“Malitix nous a permis de sortir notre app 2 mois avant la concurrence.” – CEO, TechStart.',
  '“J’étais sceptique sur l’externalisation. Aujourd’hui, ils constituent 80% de ma force tech.” – CTO, ScaleUp.',
];
const metrics = '350+ Ingénieurs prêts à coder. 98% de taux de rétention client.';

export default function SocialProofVariantA() {
  const { theme } = useTheme();

  return (
    <section id="social-proof" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">Social Proof</div>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-80">
          {['/images/Cisco.webp', '/images/Salesforce.webp', '/images/GCP.webp', '/images/Hubspot.webp'].map((src) => (
            <img key={src} src={src} alt="Logo client" className="h-8 w-auto" />
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {quotes.map((quote) => (
            <div
              key={quote}
              className={`rounded-3xl border p-6 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}
            >
              <Quote className="text-[#2ca3bd]" size={24} aria-hidden="true" />
              <p className={`mt-4 text-base leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                {quote}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-10 text-center text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
          {metrics}
        </div>
      </div>
    </section>
  );
}
