import { Helmet } from 'react-helmet-async';
import CTASection from '../components/Home/CTASection';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Malitix</title>
        <meta name="description" content="Découvrez nos analyses, conseils et retours d'expérience sur la technologie, l'IA et la transformation digitale." />
      </Helmet>

      <section className="pt-32 pb-16 min-h-[60vh] bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2ca3bd]/30 bg-[#2ca3bd]/10 px-4 py-2 text-xs font-semibold text-[#2ca3bd]">
              Journal Malitix
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-primary">
              Insights & retours terrain
            </h1>
            <p className="text-lg text-secondary">
              Analyses, guides et témoignages pour accélérer vos projets digitaux.
            </p>
            <div className="pt-12 text-secondary italic">
              Nos articles arrivent très bientôt ! L'équipe est en train de préparer du contenu de haute qualité.
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
