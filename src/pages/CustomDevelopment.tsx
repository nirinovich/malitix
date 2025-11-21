import { useEffect } from 'react';
import CustomDevHero from '../components/CustomDev/CustomDevHero';
import CustomDevProblem from '../components/CustomDev/CustomDevProblem';
import CustomDevSolution from '../components/CustomDev/CustomDevSolution';
import CustomDevStack from '../components/CustomDev/CustomDevStack';
import CustomDevTestimonials from '../components/CustomDev/CustomDevTestimonials';
import CustomDevGuarantee from '../components/CustomDev/CustomDevGuarantee';
import CustomDevCTA from '../components/CustomDev/CustomDevCTA';

export default function CustomDevelopment() {
  useEffect(() => {
    // Set page title
    document.title = 'Développement Sur Mesure | Application Web & Mobile en 90 Jours - Malitix';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Arrêtez de tordre votre business pour rentrer dans un logiciel standard. Obtenez votre application web ou mobile sur mesure en 90 jours, garantie sans bug. Budget fixe, propriété totale du code.');
    }
  }, []);

  return (
    <>

      {/* Hero Section */}
      <CustomDevHero />

      {/* Section 1 - The Problem (Agitation) */}
      <CustomDevProblem />

      {/* Section 2 - The Solution (Unique Offer) */}
      <CustomDevSolution />

      {/* Section 3 - The Stack (What They Get) */}
      <CustomDevStack />

      {/* Section 4 - Social Proof & Case Studies */}
      <CustomDevTestimonials />

      {/* Section 5 - The Guarantee (Risk Reversal) */}
      <CustomDevGuarantee />

      {/* Section 6 - Call to Action (Urgency) */}
      <CustomDevCTA />
    </>
  );
}
