import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router';

export default function BlogPostFinance() {
  return (
    <>
      <Helmet>
        <title>Optimisation Reporting Financier | Blog Malitix</title>
        <meta name="description" content="Découvrez pourquoi la plupart des DAF pilotent leur entreprise dans le rétroviseur et comment supprimer 20h de retraitement manuel par mois." />
      </Helmet>

      {/* Hero Header */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-primary border-b border-primary">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-[#2ca3bd]/20 pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 font-medium">
            <ArrowLeft size={16} /> Retour au blog
          </Link>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 text-sm text-[#2ca3bd] font-bold uppercase tracking-widest">
              <span>Business Intelligence</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ca3bd]" />
              <span>Temps Réel</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary leading-[1.15] tracking-tight">
              Pourquoi la plupart des DAF pilotent leur entreprise dans le rétroviseur
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              Optimisation Reporting Financier : Comment supprimer 20h de retraitement manuel par mois.
            </p>

          </div>
        </div>
        
        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary relative">
            <img 
              src="/images/finance_hero.webp" 
              alt="Dashboard financier futuriste Malitix" 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg dark:prose-invert prose-headings:text-primary prose-a:text-[#2ca3bd] hover:prose-a:text-[#248fa5]">
          
          {/* Hook */}
          <div className="text-xl md:text-2xl leading-relaxed text-primary font-medium mb-12">
            Votre ERP est une mine d'or inexploitée. Pourtant, entre la donnée brute et votre décision stratégique, il s'écoule souvent plusieurs jours. C'est ce qu'on appelle la <span className="text-[#2ca3bd]">latence critique</span>.
          </div>

          {/* Intro Section */}
          <div className="bg-surface border border-primary rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-primary mt-0 mb-4">
              <AlertTriangle className="text-amber-500" size={24} /> 
              La Réalité (The Pain)
            </h3>
            <p className="text-secondary m-0">
              Le reporting traditionnel est statique et réactif. Vous passez votre temps à analyser le passé au lieu d'anticiper l'avenir. <strong>Chaque minute passée sur un export Excel est une minute de moins passée sur la stratégie.</strong>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Le coût caché de la "Taxe sur le Temps"</h2>
          
          <div className="space-y-8 mb-16">
            <div className="flex items-start gap-4">
               <div className="mt-1 flex-shrink-0 bg-red-500/10 p-2 rounded-full">
                 <AlertTriangle size={20} className="text-red-500" />
               </div>
               <div>
                 <strong className="text-primary text-xl block mb-2">L'Obstacle Technique</strong>
                 <p className="text-secondary m-0">Aujourd'hui, chaque nouvelle question business nécessite l'intervention d'un expert data. Cette dépendance technique crée un goulot d'étranglement qui ralentit votre croissance.</p>
               </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="mt-1 flex-shrink-0 bg-amber-500/10 p-2 rounded-full">
                 <AlertTriangle size={20} className="text-amber-500" />
               </div>
               <div>
                 <strong className="text-primary text-xl block mb-2">Le Risque Réel</strong>
                 <p className="text-secondary m-0">Attendre la clôture mensuelle pour détecter une chute de marge de 5% sur une gamme spécifique, c'est laisser une fuite de cash ouverte pendant 30 jours.</p>
               </div>
            </div>

            <div className="relative p-8 mt-12 bg-gradient-to-r from-[#2ca3bd]/10 to-transparent border-l-4 border-[#2ca3bd] rounded-r-2xl">
              <p className="text-lg text-primary italic m-0 font-medium z-10 relative">
                Chez Malitix, nous avons constaté que les entreprises du secteur industriel ou de services B2B <strong className="text-[#2ca3bd]">perdent en moyenne 20h par mois</strong> sur ces tâches sans valeur ajoutée.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-6">La fin de l'ère Excel : Entrez dans le pilotage en temps réel</h2>
          
          <div className="rounded-[2rem] overflow-hidden my-10 border border-primary shadow-lg bg-surface placeholder">
            <img 
              src="/images/finance_contrast.webp" 
              alt="Contraste Excel vs BI Advisor" 
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-lg text-secondary">
            La solution ? <strong>Centraliser vos données en temps réel directement depuis votre ERP standard.</strong> Fini les exports hasardeux et les fusions de tableurs interminables.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-10 mb-4 flex items-center gap-2">
            <Zap className="text-[#2ca3bd]" size={24} /> L'Innovation 2026
          </h3>
          <p className="text-secondary">
            Imaginez pouvoir dialoguer avec vos données en langage naturel via un <strong>Chatbot BI</strong>. Vous posez une question par texte ou par voix comme à un collègue, et l'IA génère les graphiques instantanément.
          </p>
          <p className="text-secondary">
            <strong>Accessibilité Totale :</strong> La puissance de l'IA réside dans le fait qu'elle ne demande zéro compétence technique. L'analyse de données devient accessible à toute l'entreprise, pas seulement aux experts ou data scientists.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Anticiper grâce au Forecasting et à l'Alerting Proactif</h3>
          
          <div className="grid sm:grid-cols-2 gap-6 my-8">
            <div className="bg-surface border border-primary p-6 rounded-2xl">
              <TrendingUp className="text-[#2ca3bd] mb-4" size={28} />
              <h4 className="text-lg font-bold text-primary mt-0 mb-2">Trésorerie Prédictive</h4>
              <p className="text-secondary text-sm m-0">Ne subissez plus l'avenir, anticipez-le. Utilisez vos historiques et échéances réelles pour modéliser votre Cash Flow futur avec précision.</p>
            </div>
            <div className="bg-surface border border-primary p-6 rounded-2xl">
              <AlertTriangle className="text-[#2ca3bd] mb-4" size={28} />
              <h4 className="text-lg font-bold text-primary mt-0 mb-2">Surveillance Active 24h/24</h4>
              <p className="text-secondary text-sm m-0">Recevez des notifications (WhatsApp, Email) dès qu'un seuil critique est atteint ou qu'une anomalie comptable est détectée spontanément par l'IA.</p>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden my-10 border border-primary shadow-lg max-w-md mx-auto">
            <img 
              src="/images/finance_mobile.webp" 
              alt="Notification financière sur mobile Malitix" 
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-8">Verdict : Comparatif 3 Jours vs 3 Secondes</h2>
          
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-left bg-surface rounded-2xl overflow-hidden shadow-sm border border-primary">
              <thead>
                <tr className="bg-[#2ca3bd]/10 border-b border-primary">
                  <th className="p-4 font-bold text-primary uppercase text-sm tracking-wider">Caractéristique</th>
                  <th className="p-4 font-bold text-primary uppercase text-sm tracking-wider">BI Traditionnel</th>
                  <th className="p-4 font-bold text-[#2ca3bd] uppercase text-sm tracking-wider">BI Advisor (Malitix)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/50">
                <tr className="hover:bg-primary/30 transition-colors">
                  <td className="p-4 font-medium text-primary">Délai d'analyse</td>
                  <td className="p-4 text-secondary">Plusieurs jours (attente d'experts, export Excel)</td>
                  <td className="p-4 text-primary font-bold">Quelques secondes (Temps réel)</td>
                </tr>
                <tr className="hover:bg-primary/30 transition-colors">
                  <td className="p-4 font-medium text-primary">Compétences</td>
                  <td className="p-4 text-secondary">Maîtrise avancée de SQL ou Excel requise</td>
                  <td className="p-4 text-primary font-bold">Langage naturel (Texte ou Voix)</td>
                </tr>
                <tr className="hover:bg-primary/30 transition-colors">
                  <td className="p-4 font-medium text-primary">Sécurité</td>
                  <td className="p-4 text-secondary">Risques d'erreurs de saisie manuelle</td>
                  <td className="p-4 text-primary font-bold">Lecture seule, audit complet</td>
                </tr>
                <tr className="hover:bg-primary/30 transition-colors border-b border-[#2ca3bd]/30">
                  <td className="p-4 font-medium text-primary">Approche</td>
                  <td className="p-4 text-secondary">Réactive (analyse du passé)</td>
                  <td className="p-4 text-[#2ca3bd] font-bold">Proactive et prédictive</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Comment lancer votre "Marketing Machine" de données en moins de 2 semaines</h2>
          
          <ul className="space-y-4 text-secondary my-8">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-[#2ca3bd] flex-shrink-0 mt-1" size={20} />
              <span><strong>Intégration Universelle :</strong> Connectez vos ERP, CRM et fichiers Excel via un connecteur sécurisé avec chiffrement de bout en bout (AES-256).</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-[#2ca3bd] flex-shrink-0 mt-1" size={20} />
              <span><strong>Rapidité d'exécution :</strong> Une mise en place rapide qui permet d'obtenir un retour sur investissement quasi-immédiat, avec des premiers insights disponibles dès la première semaine.</span>
            </li>
          </ul>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-primary border-t border-[var(--border-primary)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 bg-[#2ca3bd]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Prêt à supprimer votre latence de décision ?
          </h2>
          <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
            Nous limitons l'accompagnement à <strong className="text-primary">5 nouveaux décisionnaires par mois</strong> pour garantir un déploiement premium. Testez la puissance de l'IA sur vos propres données historiques avec notre POC de 3 jours.
          </p>
          
          <Link 
            to="/bi-advisor#bi-advisor-contact" 
            className="inline-flex items-center gap-3 bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-[#2ca3bd]/30 transition-all hover:scale-105 hover:shadow-[#2ca3bd]/50 cursor-pointer"
          >
            Ma démo de 10 min <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
