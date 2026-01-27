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
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">Ils nous font confiance</div>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
          <p className={`mt-3 text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Des équipes produit qui livrent plus vite, avec moins de risques.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-80">
          {['/images/Cisco.webp', '/images/Salesforce.webp', '/images/GCP.webp', '/images/Hubspot.webp'].map((src) => (
            <img key={src} src={src} alt="Logo client" className="h-8 w-auto" />
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-8">
          <div className="space-y-5">
            {quotes.map((quote) => (
              <div
                key={quote}
                className={`rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1 ${
                  theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
                }`}
              >
                <Quote className="text-[#2ca3bd]" size={22} aria-hidden="true" />
                <p className={`mt-4 text-sm leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                  {quote}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            {[
              { label: '350+', value: 'Ingénieurs prêts à coder' },
              { label: '98%', value: 'Taux de rétention client' },
              { label: '2 mois', value: 'd’avance sur le time-to-market' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-3xl border p-6 flex items-center justify-between ${
                  theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
                }`}
              >
                <div>
                  <div className="text-2xl font-bold text-[#2ca3bd]">{stat.label}</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                    {stat.value}
                  </div>
                </div>
                <Star className="text-[#2ca3bd]" size={20} />
              </div>
            ))}
            <div className={`rounded-3xl border p-6 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
              <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                {metrics}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
