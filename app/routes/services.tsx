import type { Route } from "./+types/services";
import { Layout } from "~/components/Shared/Layout";
import { ServicesSection } from "~/components/Home/ServicesSection";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nos Services | Malitix" },
    {
      name: "description",
      content:
        "Découvrez l'ensemble des services d'ingénierie logicielle Malitix : Sprint Commando, Externalisation, Développement sur-mesure et Refonte SI.",
    },
  ];
}

export default function ServicesPage() {
  return (
    <Layout>
      <div className="pt-24 pb-24 min-h-screen bg-[var(--bg-primary)]">
         {/* Minimal Header */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[var(--text-primary)] mb-6">
              Notre expertise est <span className="text-[var(--brand-primary)]">votre accélérateur</span>
            </h1>
         </div>

         {/* The native Grid */}
         <div className="-mt-12 sm:-mt-8">
             <ServicesSection />
         </div>

         {/* Call to action at the bottom */}
         <div className="text-center mt-12 px-4">
             <Link
               to="/contact"
               className="inline-flex items-center gap-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1"
             >
                Parler à un expert
             </Link>
         </div>
      </div>
    </Layout>
  );
}
