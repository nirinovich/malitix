import type { Route } from "./+types/qui-sommes-nous";
import { Layout } from "~/components/Shared/Layout";
import { CheckCircle2, Users, Rocket, Target } from "lucide-react";
import { SocialProof } from "~/components/Shared/SocialProof";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Qui sommes-nous | Malitix" },
    {
      name: "description",
      content:
        "Découvrez l'histoire, la vision et l'équipe derrière Malitix, la première agence d'élite en ingénierie logicielle.",
    },
  ];
}

export default function AboutPage() {
  return (
    <Layout>
      <div className="pt-32 pb-24 min-h-screen bg-[var(--bg-primary)] overflow-hidden relative">
        {/* Abstract Background Decorators */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 bg-[var(--brand-primary)]/20 pointer-events-none" />
        <div className="absolute top-2/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-30 bg-[var(--brand-primary)]/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-on-scroll">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--brand-primary)]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--brand-primary)]">
                Notre Histoire
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--brand-primary)]"></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[var(--text-primary)]">
              Nous construisons les <span className="text-[var(--brand-primary)]">fondations techniques</span> des leaders de demain.
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed mt-6">
              Malitix est né d'une frustration simple : l'IT est souvent lent, opaque et complexe. Nous avons repensé le modèle de l'agence pour introduire vitesse, transparence et résultats chiffrés.
            </p>
          </div>

          {/* Value Proposition Grid / Manifest */}
          <div className="mt-24 grid md:grid-cols-3 gap-8 text-left">
            <div className="backdrop-blur-xl border border-[var(--border-primary)] rounded-[2rem] p-8 shadow-2xl bg-[image:var(--card-bg)] hover:-translate-y-2 transition-transform duration-300">
               <div className="bg-[var(--brand-primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                   <Target className="text-[var(--brand-primary)]" size={32} />
               </div>
               <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">La Mission</h3>
               <p className="text-[var(--text-secondary)] leading-relaxed">
                 Transformer les idées complexes en produits digitaux performants. Nous refusons le code jetable. Chaque ligne livrée est pensée pour la scalabilité, la sécurité et la performance pure.
               </p>
            </div>
            
            <div className="backdrop-blur-xl border border-[var(--border-primary)] rounded-[2rem] p-8 shadow-2xl bg-[image:var(--card-bg)] hover:-translate-y-2 transition-transform duration-300">
               <div className="bg-[var(--brand-primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                   <Rocket className="text-[var(--brand-primary)]" size={32} />
               </div>
               <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">La Vitesse</h3>
               <p className="text-[var(--text-secondary)] leading-relaxed">
                 Le time-to-market est la métrique ultime de notre siècle. De l'Externalisation en 72h au Sprint Commando de 14 jours, notre méthodologie est obnubilée par la vitesse d'exécution.
               </p>
            </div>

            <div className="backdrop-blur-xl border border-[var(--border-primary)] rounded-[2rem] p-8 shadow-2xl bg-[image:var(--card-bg)] hover:-translate-y-2 transition-transform duration-300">
               <div className="bg-[var(--brand-primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                   <Users className="text-[var(--brand-primary)]" size={32} />
               </div>
               <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">L'Équipe</h3>
               <p className="text-[var(--text-secondary)] leading-relaxed">
                 Un écosystème fermé d'ingénieurs seniors. Pas de freelances juniors, pas de sous-traitance opaque. Uniquement l'élite testée, approuvée et surperformante sur Stack moderne.
               </p>
            </div>
          </div>

          {/* Our Core Values List */}
          <div className="mt-32 max-w-4xl mx-auto space-y-12">
             <div className="text-center">
                 <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">Nos 4 piliers d'excellence</h2>
                 <p className="text-[var(--text-secondary)] text-lg">Le manifeste Malitix, non-négociable lors de chaque mission.</p>
             </div>

             <div className="space-y-6">
                 {[
                   { title: "Transparence absolue", desc: "Pas de boite noire algorithmique ou de code spaghetti masqué. Vous possédez 100% de la propriété intellectuelle et du code source dès le jour 1." },
                   { title: "Livraison continue", desc: "Finis les effets tunnel de 6 mois. Nous fonctionnons en méthodologie Agile stricte avec des livraisons tangibles chaque semaine ou quinzaine." },
                   { title: "Architecture pérenne", desc: "Nous refusons d'utiliser le dernier framework expérimental à la mode. Nous misons sur les standards établis (React, Node, PostgreSQL, etc) pour vous garantir la sécurité et faciliter le recrutement post-projet." },
                   { title: "Obsession client", desc: "Vos ROI et KPI de performance sont les nôtres. Nous ne célébrons pas la fin d'un développement, mais la réussite commerciale de votre application." }
                 ].map((val, idx) => (
                    <div key={idx} className="flex gap-4 p-6 sm:p-8 rounded-2xl bg-[var(--surface-primary)] border border-[var(--border-primary)] shadow-md hover:shadow-lg transition-shadow">
                       <div className="flex-shrink-0 mt-1">
                          <CheckCircle2 className="text-[var(--brand-primary)]" size={28} />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">{val.title}</h4>
                          <p className="text-[var(--text-secondary)] leading-relaxed">{val.desc}</p>
                       </div>
                    </div>
                 ))}
             </div>
          </div>

          <SocialProof className="mt-24 px-0" />
        </div>
      </div>
    </Layout>
  );
}
