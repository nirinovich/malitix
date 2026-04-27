import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, MessageSquare, TrendingUp, AlertTriangle, Lock, Search, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router';

export default function BlogPostERP() {
  return (
    <>
      <Helmet>
        <title>IA et ERP : Le Chatbot BI dans votre entreprise | Blog Malitix</title>
        <meta name="description" content="Pourquoi votre reporting actuel appartient au passé. Le BI traditionnel est mort. Découvrez comment l'IA traduit votre intention en requête instantanée." />
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
              <span>IA & ERP</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ca3bd]" />
              <span>Business Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary leading-[1.15] tracking-tight">
              Pourquoi votre reporting actuel appartient au passé
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              IA et ERP : Pourquoi le Chatbot est le futur de la Business Intelligence en 2026.
            </p>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary relative">
            <img 
              src="/images/erp_hero.png" 
              alt="IA et ERP Connectés - Chatbot BI Malitix" 
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
            Le BI traditionnel est mort. En 2026, la donnée ne se consulte plus sur un tableau de bord figé que personne ne regarde ; <span className="text-[#2ca3bd]">elle s'interroge en langage naturel</span>.
          </div>

          {/* Intro Section / Constat */}
          <div className="bg-surface border border-primary rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-primary mt-0 mb-4">
              <Search className="text-amber-500" size={24} /> 
              Le Constat
            </h3>
            <p className="text-secondary m-0">
              Votre ERP est une <strong>"mine d'or inexploitée"</strong>. Pourtant, chaque nouvelle question stratégique nécessite encore l'intervention manuelle d'un expert data. Le temps perdu entre la donnée brute et la décision stratégique se compte en jours. <br/><br/>
              C'est ce qu'on appelle la <strong>latence critique</strong>.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Du tableau de bord statique au partenaire intelligent</h2>
          
          <div className="relative p-8 mt-8 mb-10 bg-gradient-to-r from-[#2ca3bd]/10 to-transparent border-l-4 border-[#2ca3bd] rounded-r-2xl">
            <p className="text-lg text-primary italic m-0 font-medium z-10 relative">
              Nous avons conçu BI Advisor non pas comme un énième dashboard, mais comme un <strong className="text-[#2ca3bd]">véritable partenaire décisionnel</strong>.
            </p>
          </div>

          <div className="space-y-6 mb-16">
            <div className="flex items-start gap-4">
               <div className="mt-1 flex-shrink-0 bg-[#2ca3bd]/10 p-2 rounded-full">
                 <Zap size={20} className="text-[#2ca3bd]" />
               </div>
               <div>
                 <strong className="text-primary text-xl block mb-2">La Technologie (NLP to SQL)</strong>
                 <p className="text-secondary m-0">Grâce à l'intelligence artificielle, l'outil traduit votre intention (texte ou voix) en requête technique instantanée.</p>
               </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="mt-1 flex-shrink-0 bg-[#2ca3bd]/10 p-2 rounded-full">
                 <MessageSquare size={20} className="text-[#2ca3bd]" />
               </div>
               <div>
                 <strong className="text-primary text-xl block mb-2">Simplicité Absolue</strong>
                 <p className="text-secondary m-0">Posez vos questions à vos données comme à un collègue. Plus besoin de maîtriser SQL ou Excel pour comprendre votre business.</p>
               </div>
            </div>
          </div>

          {/* Image Contrast / Chatbot UI */}
          <div className="rounded-[2rem] overflow-hidden my-12 border border-primary shadow-lg bg-surface placeholder">
            <img 
              src="/images/erp_chatbot.png" 
              alt="Interface NLP to SQL avec matrice de données" 
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-8">Trois piliers pour piloter l'avenir</h2>
          
          <div className="grid sm:grid-cols-3 gap-6 my-8">
            <div className="bg-surface border border-primary p-6 rounded-2xl flex flex-col items-center text-center hover:border-[#2ca3bd]/30 transition-colors">
              <MessageSquare className="text-[#2ca3bd] mb-4" size={32} />
              <h4 className="text-lg font-bold text-primary mt-0 mb-3">Interroger (Chatbot BI)</h4>
              <p className="text-secondary text-sm m-0">Dialogue avec les données en langage naturel pour des réponses immédiates.</p>
            </div>
            
            <div className="bg-surface border border-primary p-6 rounded-2xl flex flex-col items-center text-center hover:border-[#2ca3bd]/30 transition-colors">
              <TrendingUp className="text-[#2ca3bd] mb-4" size={32} />
              <h4 className="text-lg font-bold text-primary mt-0 mb-3">Prédire (Forecasting)</h4>
              <p className="text-secondary text-sm m-0">Modélisez vos ventes et votre trésorerie selon vos historiques réels.</p>
            </div>

            <div className="bg-surface border border-primary p-6 rounded-2xl flex flex-col items-center text-center hover:border-[#2ca3bd]/30 transition-colors">
              <AlertTriangle className="text-[#2ca3bd] mb-4" size={32} />
              <h4 className="text-lg font-bold text-primary mt-0 mb-3">Surveiller (Alerting)</h4>
              <p className="text-secondary text-sm m-0">Recevez une alerte WhatsApp dès qu'une anomalie critique est détectée.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Des bénéfices immédiats pour chaque métier</h3>
          
          <ul className="space-y-4 text-secondary mb-12">
            <li className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-2 flex-shrink-0" />
              <span><strong>Finance (DAF) :</strong> Prévisions de trésorerie fiables et audit automatique d'erreurs comptables.</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-2 flex-shrink-0" />
              <span><strong>Commerce :</strong> Lead scoring sémantique et analyse de la rentabilité par client instantanée.</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[#2ca3bd] mt-2 flex-shrink-0" />
              <span><strong>Logistique :</strong> Anticipation des ruptures de stock et optimisation des approvisionnements.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-8 flex items-center gap-3">
            <Lock className="text-[#2ca3bd]" size={36} />
            Sécurité et intégration : Sans compromis
          </h2>
          
          <div className="border border-primary bg-surface/50 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="font-bold text-primary m-0 flex items-center gap-2"><Shield size={18} className="text-[#2ca3bd]" /> Lecture Seule</h4>
              <p className="text-secondary mt-2 mb-0">L'IA analyse vos données mais ne les modifie jamais.</p>
            </div>
            <div className="h-px bg-primary w-full" />
            <div>
              <h4 className="font-bold text-primary m-0 flex items-center gap-2"><Lock size={18} className="text-[#2ca3bd]" /> Sécurité Maximale</h4>
              <p className="text-secondary mt-2 mb-0">Chiffrement de bout en bout et isolation totale des données (pas d'entraînement de modèles publics).</p>
            </div>
            <div className="h-px bg-primary w-full" />
            <div>
              <h4 className="font-bold text-primary m-0 flex items-center gap-2"><Zap size={18} className="text-[#2ca3bd]" /> Connecteur Universel</h4>
              <p className="text-secondary mt-2 mb-0">Centralisation en temps réel de vos données ERP (Sage, SAP, Microsoft Dynamics), CRM, fichiers Excel et HRIS.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary mt-16 mb-8">Retour sur investissement immédiat</h2>
          
          <p className="text-lg text-secondary">
            <strong>Accélération :</strong> Passez de plusieurs jours d'attente d'experts à quelques secondes d'analyse en temps réel.
          </p>
          <p className="text-lg text-secondary">
            <strong>Démocratisation :</strong> L'analyse de données devient accessible à toute l'entreprise, éliminant les goulots d'étranglement techniques.
          </p>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-primary border-t border-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 bg-[#2ca3bd]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Voulez-vous un aperçu de la donnée en 2026 ?
          </h2>
          <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
            Ne restez pas bloqué dans l'ère des exports manuels. Nous lançons un POC (Proof of Concept) sur vos propres données historiques avec une mise en place rapide en moins de <strong className="text-primary">2 semaines</strong>.
          </p>
          
          <Link 
            to="/bi-advisor#bi-advisor-contact" 
            className="inline-flex items-center gap-3 bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-[#2ca3bd]/30 transition-all hover:scale-105 hover:shadow-[#2ca3bd]/50 cursor-pointer"
          >
            Demander mon test gratuit de 3 jours <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
