import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Users, Rocket, Target } from "lucide-react";
import TrustStats from '../components/Home/TrustStats';

export default function QuiSommesNous() {
  return (
    <>
      <Helmet>
        <title>Qui sommes-nous ? | Malitix</title>
        <meta name="description" content="Découvrez l'histoire, la vision et l'équipe derrière Malitix, la première agence d'élite en ingénierie logicielle." />
      </Helmet>

      <div className="pt-32 pb-24 min-h-screen bg-primary overflow-hidden relative">
        {/* Abstract Background Decorators */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 bg-[#2ca3bd]/20 pointer-events-none" />
        <div className="absolute top-2/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-30 bg-[#2ca3bd]/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Main Hero Header */}
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                Notre Histoire
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-primary">
              Nous construisons les <span className="text-[#2ca3bd]">fondations techniques</span> des entreprises d'élite.
            </h1>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl text-secondary leading-relaxed">
                Malitix est le partenaire stratégique des leaders qui refusent la médiocrité technologique. Nous transformons la complexité en avantage compétitif grâce à une ingénierie de précision.
              </p>
            </div>

            {/* Team Image */}
            <div className="relative mt-12 mb-16 group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
              <div className="rounded-[2.5rem] overflow-hidden border border-primary shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                <img
                  src="/images/team.png"
                  alt="L'équipe Malitix en action"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2ca3bd]/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2ca3bd]/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="mt-8 py-12 border-y border-primary grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projets livrés", value: "600+" },
              { label: "Mise en place", value: "72h" },
              { label: "Développeurs Seniors", value: "100%" },
              { label: "Taux de rétention", value: "98%" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-[#2ca3bd] mb-1">{stat.value}</div>
                <div className="text-sm text-secondary uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Elevator Pitch Card */}
          <div className="mt-16 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-primary leading-relaxed bg-surface-elevated p-8 sm:p-10 rounded-[2.5rem] border border-[#2ca3bd]/20 shadow-2xl relative overflow-hidden text-center italic">
              "Nous aidons les entreprises en forte croissance à scaler sans frictions techniques en mettant à leur disposition une équipe d'élite d'ingénieurs seniors opérationnels en moins de 72h, garantissant un code d'une qualité inégalée et une vitesse d'exécution qui divise vos temps de développement par deux."
              <span className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#2ca3bd]/5 rounded-full blur-3xl" />
            </p>
          </div>

          {/* Value Proposition Grid / Manifest */}
          <div className="mt-24 grid md:grid-cols-3 gap-8 text-left">
            <div className="backdrop-blur-xl border border-primary rounded-[2rem] p-8 shadow-2xl bg-surface hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#2ca3bd]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-[#2ca3bd]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">La Mission</h3>
              <p className="text-secondary leading-relaxed">
                Transformer les idées complexes en produits digitaux performants. Nous refusons le code jetable. Chaque ligne livrée est pensée pour la scalabilité, la sécurité et la performance pure.
              </p>
            </div>

            <div className="backdrop-blur-xl border border-primary rounded-[2rem] p-8 shadow-2xl bg-surface hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#2ca3bd]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Rocket className="text-[#2ca3bd]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">La Vitesse</h3>
              <p className="text-secondary leading-relaxed">
                Le time-to-market est la métrique ultime de notre siècle. De l'Externalisation en 72h au Sprint Commando de 14 jours, notre méthodologie est obnubilée par la vitesse d'exécution.
              </p>
            </div>

            <div className="backdrop-blur-xl border border-primary rounded-[2rem] p-8 shadow-2xl bg-surface hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#2ca3bd]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-[#2ca3bd]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">L'Équipe</h3>
              <p className="text-secondary leading-relaxed">
                Un écosystème fermé d'ingénieurs seniors. Pas de freelances juniors, pas de sous-traitance opaque. Uniquement l'élite testée, approuvée et surperformante sur Stack moderne.
              </p>
            </div>
          </div>

          {/* Our Core Values List */}
          <div className="mt-32 max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-primary mb-4">Nos 4 piliers d'excellence</h2>
              <p className="text-secondary text-lg">Le manifeste Malitix, non-négociable lors de chaque mission.</p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Transparence absolue", desc: "Pas de boite noire algorithmique ou de code spaghetti masqué. Vous possédez 100% de la propriété intellectuelle et du code source dès le jour 1." },
                { title: "Livraison continue", desc: "Finis les effets tunnel de 6 mois. Nous fonctionnons en méthodologie Agile stricte avec des livraisons tangibles chaque semaine ou quinzaine." },
                { title: "Architecture pérenne", desc: "Nous refusons d'utiliser le dernier framework expérimental à la mode. Nous misons sur les standards établis (React, Node, PostgreSQL, etc) pour vous garantir la sécurité et faciliter le recrutement post-projet." },
                { title: "Obsession client", desc: "Vos ROI et KPI de performance sont les nôtres. Nous ne célébrons pas la fin d'un développement, mais la réussite commerciale de votre application." }
              ].map((val, idx) => (
                <div key={idx} className="flex gap-4 p-6 sm:p-8 rounded-2xl bg-surface border border-primary shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-[#2ca3bd]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{val.title}</h4>
                    <p className="text-secondary leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <TrustStats />

          {/* Final CTA */}
          <div className="mt-32 text-center py-20 px-8 rounded-[3rem] bg-gradient-to-tr from-[#2ca3bd]/10 via-transparent to-transparent border border-[#2ca3bd]/20 relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Prêt à transformer votre vision en réalité technique ?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-[#2ca3bd]/20"
                >
                  Lancer mon projet
                </a>
              </div>
            </div>
            {/* Decorator */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#2ca3bd]/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </>
  );
}
