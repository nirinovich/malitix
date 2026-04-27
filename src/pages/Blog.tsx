import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Malitix</title>
        <meta name="description" content="Découvrez nos analyses, conseils et retours d'expérience sur la technologie, l'IA et la transformation digitale." />
      </Helmet>

      <section className="pt-32 pb-24 min-h-[70vh] bg-primary relative overflow-hidden">
        {/* Abstract Background Decorators */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-[#2ca3bd]/20 pointer-events-none" />
        <div className="absolute top-2/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-[#2ca3bd]/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2ca3bd]/30 bg-[#2ca3bd]/10 px-4 py-2 text-xs font-semibold text-[#2ca3bd] uppercase tracking-wider">
              Blog Malitix
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary">
              Insights & retours terrain
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Analyses stratégiques, guides d'ingénierie et témoignages pour accélérer votre prise de décision technologique.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post Card */}
            <Link to="/blog/optimisation-reporting-financier" className="group rounded-[2.5rem] border border-primary bg-surface overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[#2ca3bd]/20 flex flex-col h-full">
              <div className="h-56 bg-[var(--bg-secondary)] flex items-center justify-center border-b border-primary relative overflow-hidden">
                <img 
                  src="/images/finance_thumbnail.png" 
                  alt="Optimisation Reporting Financier" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted mb-5 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-[#2ca3bd]" /> Avril 2026</span>
                  <span className="flex items-center gap-1"><Clock size={14} className="text-[#2ca3bd]" /> 5 min</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-[#2ca3bd] transition-colors leading-tight">
                  Optimisation Reporting Financier : Comment supprimer 20h de retraitement manuel
                </h3>
                <p className="text-secondary text-base mb-8 line-clamp-3 leading-relaxed flex-grow">
                  Votre ERP est une mine d'or inexploitée. Découvrez pourquoi la plupart des DAF pilotent leur entreprise dans le rétroviseur et comment l'IA change la donne.
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#2ca3bd] font-bold text-sm tracking-wide uppercase">
                  Lire l'analyse <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* AI & ERP Card */}
            <Link to="/blog/ia-erp-chatbot-futur-bi-2026" className="group rounded-[2.5rem] border border-primary bg-surface overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[#2ca3bd]/20 flex flex-col h-full">
              <div className="h-56 bg-[var(--bg-secondary)] flex items-center justify-center border-b border-primary relative overflow-hidden">
                <img 
                  src="/images/erp_hero.png" 
                  alt="IA et ERP - Chatbot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted mb-5 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-[#2ca3bd]" /> Avril 2026</span>
                  <span className="flex items-center gap-1"><Clock size={14} className="text-[#2ca3bd]" /> 4 min</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-[#2ca3bd] transition-colors leading-tight">
                  IA et ERP : Pourquoi le Chatbot est le futur de la BI en 2026
                </h3>
                <p className="text-secondary text-base mb-8 line-clamp-3 leading-relaxed flex-grow">
                  Le BI traditionnel est mort. Découvrez comment la donnée s'interroge en langage naturel, sans plus aucune latence critique.
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#2ca3bd] font-bold text-sm tracking-wide uppercase">
                  Lire l'analyse <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* Cash Flow Card */}
            <Link to="/blog/logiciel-prevision-tresorerie-pme" className="group rounded-[2.5rem] border border-primary bg-surface overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[#2ca3bd]/20 flex flex-col h-full">
              <div className="h-56 bg-[var(--bg-secondary)] flex items-center justify-center border-b border-primary relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
                  alt="Prévision de Trésorerie PME" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted mb-5 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-[#2ca3bd]" /> Avril 2026</span>
                  <span className="flex items-center gap-1"><Clock size={14} className="text-[#2ca3bd]" /> 3 min</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-[#2ca3bd] transition-colors leading-tight">
                  Logiciel Prévision Trésorerie PME : Obtenez un Cash Flow prédictif en moins de 2 semaines
                </h3>
                <p className="text-secondary text-base mb-8 line-clamp-3 leading-relaxed flex-grow">
                  Le pilotage réactif est votre coût le plus élevé. Découvrez comment l'IA modélise votre trésorerie future en temps réel.
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#2ca3bd] font-bold text-sm tracking-wide uppercase">
                  Lire l'analyse <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
