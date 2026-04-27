import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, TrendingUp, AlertTriangle, Lock, Shield, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router';

export default function BlogPostCashFlow() {
  return (
    <>
      <Helmet>
        <title>Logiciel Prévision Trésorerie PME | Blog Malitix</title>
        <meta name="description" content="Obtenez un Cash Flow prédictif en moins de 2 semaines. Ne subissez plus et anticipez l'avenir de votre entreprise." />
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
              <span>Trésorerie</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ca3bd]" />
              <span>Forecasting PME</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary leading-[1.15] tracking-tight">
              Ne subissez plus et anticipez l'avenir de votre entreprise
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              Logiciel Prévision Trésorerie PME : Obtenez un Cash Flow prédictif en moins de 2 semaines.
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
              alt="Prévision de Trésorerie PME" 
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
            Le pilotage réactif est votre coût le plus élevé. Attendre que vos experts data extraient manuellement des rapports Excel pour voir une baisse de rentabilité, c'est <span className="text-[#2ca3bd]">laisser votre croissance au hasard</span>.
          </div>

          {/* Intro Section / Résultat */}
          <div className="bg-surface border border-[#2ca3bd]/30 rounded-2xl p-6 md:p-8 mb-12 shadow-sm bg-gradient-to-r from-[#2ca3bd]/5 to-transparent">
            <h3 className="flex items-center gap-2 text-xl font-bold text-primary mt-0 mb-4">
              <TrendingUp className="text-[#2ca3bd]" size={24} /> 
              Le Résultat de Rêve
            </h3>
            <p className="text-secondary m-0">
              Imaginez un système qui modélise votre trésorerie future en temps réel, basé sur vos historiques et échéances réelles, <strong>sans que vous n'ayez à lever le petit doigt</strong>.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Supprimer la latence critique entre donnée brute et décision</h2>
          
          <div className="space-y-6 mb-16">
            <div className="flex items-start gap-4">
               <div className="mt-1 flex-shrink-0 bg-red-500/10 p-2 rounded-full">
                 <AlertTriangle size={20} className="text-red-500" />
               </div>
               <div>
                 <strong className="text-primary text-xl block mb-2">Le Constat</strong>
                 <p className="text-secondary m-0">Dans la plupart des PME industrielles et B2B, le temps perdu entre la donnée dans l'ERP et la décision stratégique se compte en jours.</p>
               </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="mt-1 flex-shrink-0 bg-[#2ca3bd]/10 p-2 rounded-full">
                 <CheckCircle2 size={20} className="text-[#2ca3bd]" />
               </div>
               <div>
                 <strong className="text-primary text-xl block mb-2">Notre Approche</strong>
                 <p className="text-secondary m-0">Nous avons créé BI Advisor pour transformer votre ERP standard en un Assistant Décisionnel Intelligent capable de répondre en quelques secondes.</p>
               </div>
            </div>

            <div className="relative p-8 mt-8 bg-gradient-to-r from-[#2ca3bd]/10 to-transparent border-l-4 border-[#2ca3bd] rounded-r-2xl">
              <p className="text-lg text-primary italic m-0 font-medium z-10 relative">
                <strong>La Barrière Technique Abattue :</strong> Plus besoin de maîtriser SQL ou Excel. Le Chatbot BI traduit vos questions métier ("Quelle est la rentabilité par client ?") en graphiques instantanés.
              </p>
            </div>
          </div>

          {/* Re-using AI image */}
          <div className="rounded-[2rem] overflow-hidden my-12 border border-primary shadow-lg bg-surface placeholder">
            <img 
              src="/images/erp_chatbot.webp" 
              alt="Moteur de prédiction par IA Malitix" 
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-8">Forecasting et Alerting : Votre surveillance active 24h/24</h2>
          
          <div className="grid sm:grid-cols-3 gap-6 my-8">
            <div className="bg-surface border border-primary p-6 rounded-2xl flex flex-col items-center hover:border-[#2ca3bd]/30 transition-colors">
              <TrendingUp className="text-[#2ca3bd] mb-4" size={32} />
              <h4 className="text-base font-bold text-primary mt-0 mb-3 text-center">Trésorerie Prédictive</h4>
              <p className="text-secondary text-sm m-0 text-center">Utilisez l'IA pour anticiper les tendances de ventes et de Cash Flow afin de sécuriser vos investissements.</p>
            </div>
            
            <div className="bg-surface border border-primary p-6 rounded-2xl flex flex-col items-center hover:border-[#2ca3bd]/30 transition-colors">
              <AlertTriangle className="text-amber-500 mb-4" size={32} />
              <h4 className="text-base font-bold text-primary mt-0 mb-3 text-center">Alertes de Marge</h4>
              <p className="text-secondary text-sm m-0 text-center">Recevez une notification WhatsApp dès qu'un seuil critique est atteint sur une gamme de produits.</p>
            </div>

            <div className="bg-surface border border-primary p-6 rounded-2xl flex flex-col items-center hover:border-[#2ca3bd]/30 transition-colors">
              <Zap className="text-[#2ca3bd] mb-4" size={32} />
              <h4 className="text-base font-bold text-primary mt-0 mb-3 text-center">Smart Reconciliation</h4>
              <p className="text-secondary text-sm m-0 text-center">Audit automatique et lettrage bancaire assisté par IA pour identifier les erreurs comptables ou les doublons.</p>
            </div>
          </div>


          <h2 className="text-3xl font-bold text-primary mt-16 mb-8 flex items-center gap-3">
            <Lock className="text-[#2ca3bd]" size={36} />
            Intégration universelle et Sécurité maximale
          </h2>
          
          <div className="border border-primary bg-surface/50 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="font-bold text-primary m-0 flex items-center gap-2"><Shield size={18} className="text-[#2ca3bd]" /> Lecture Seule</h4>
              <p className="text-secondary mt-2 mb-0">Vos données sont analysées par l'IA mais ne sont <strong>jamais modifiées</strong>.</p>
            </div>
            <div className="h-px bg-primary w-full" />
            <div>
              <h4 className="font-bold text-primary m-0 flex items-center gap-2"><Lock size={18} className="text-[#2ca3bd]" /> Confidentialité Garantie</h4>
              <p className="text-secondary mt-2 mb-0">Chiffrement de bout en bout et isolation totale de vos données ; aucun entraînement de modèles publics n'est effectué.</p>
            </div>
            <div className="h-px bg-primary w-full" />
            <div>
              <h4 className="font-bold text-primary m-0 flex items-center gap-2"><Zap size={18} className="text-[#2ca3bd]" /> Multi-sources</h4>
              <p className="text-secondary mt-2 mb-0">Un connecteur universel pour votre ERP standard (Sage, SAP, Microsoft Dynamics), votre CRM, vos RHIS et même vos fichiers Excel.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-8">Verdict : Pourquoi tester BI Advisor aujourd'hui ?</h2>
          
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-left bg-surface rounded-2xl overflow-hidden shadow-sm border border-primary">
              <thead>
                <tr className="bg-[#2ca3bd]/10 border-b border-primary">
                  <th className="p-4 font-bold text-primary uppercase text-sm tracking-wider">Bénéfice</th>
                  <th className="p-4 font-bold text-[#2ca3bd] uppercase text-sm tracking-wider">BI Advisor (Malitix)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/50">
                <tr className="hover:bg-primary/30 transition-colors">
                  <td className="p-4 font-medium text-primary">Vitesse d'Analyse</td>
                  <td className="p-4 text-[#2ca3bd] font-bold">Quelques secondes (temps réel)</td>
                </tr>
                <tr className="hover:bg-primary/30 transition-colors">
                  <td className="p-4 font-medium text-primary">Accessibilité</td>
                  <td className="p-4 text-[#2ca3bd] font-bold">Accessible à tous, sans expertise technique</td>
                </tr>
                <tr className="hover:bg-primary/30 transition-colors">
                  <td className="p-4 font-medium text-primary">Mise en place</td>
                  <td className="p-4 text-[#2ca3bd] font-bold">Moins de 2 semaines</td>
                </tr>
                <tr className="hover:bg-primary/30 transition-colors border-b border-[#2ca3bd]/30">
                  <td className="p-4 font-medium text-primary">Impact sur le Risque</td>
                  <td className="p-4 text-[#2ca3bd] font-bold">Élimine les erreurs de saisie et les ruptures de stock</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-primary border-t border-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 bg-[#2ca3bd]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Votre POC de 3 jours : Prêt à dialoguer avec votre entreprise ?
          </h2>
          <div className="text-xl text-secondary mb-10 max-w-2xl mx-auto space-y-4">
            <p>
              Ne croyez pas ce que nous disons, testez la puissance de l'IA sur vos propres données historiques.
            </p>
            <p className="text-sm border border-primary p-4 rounded-xl bg-surface inline-block text-left">
              <strong className="block text-primary mb-2">L'offre est simple :</strong>
              <span className="flex items-center gap-2 mb-1"><CheckCircle2 size={16} className="text-[#2ca3bd]" /> Mise en place en moins de 14 jours.</span>
              <span className="flex items-center gap-2 mb-1"><CheckCircle2 size={16} className="text-[#2ca3bd]" /> Test de 3 jours sur vos données réelles.</span>
              <span className="flex items-center gap-2 text-amber-500 font-medium">Si vous ne gagnez pas des heures de reporting dès le premier jour, on s'arrête là.</span>
            </p>
          </div>
          
          <Link 
            to="/bi-advisor#bi-advisor-contact" 
            className="inline-flex items-center gap-3 bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-[#2ca3bd]/30 transition-all hover:scale-105 hover:shadow-[#2ca3bd]/50 cursor-pointer"
          >
            Demander ma démo et mon test gratuit de 3 jours <ArrowRight size={20} />
          </Link>
          <div className="mt-4 text-xs text-muted">
            * Nous ouvrons seulement 5 places par mois pour nos POC afin de garantir un accompagnement premium à chaque DAF.
          </div>
        </div>
      </section>
    </>
  );
}
