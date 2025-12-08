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
    document.title = 'Développement Sur Mesure | Application Web & Mobile en 90 Jours - Malitix';
  }, []);

  return (
    <>
      <title>Développement Sur Mesure | Application Web & Mobile en 90 Jours - Malitix</title>
      <meta name="description" content="Arrêtez de tordre votre business pour rentrer dans un logiciel standard. Obtenez votre application web ou mobile sur mesure en 90 jours, garantie sans bug. Budget fixe, propriété totale du code." />
      <meta property="og:title" content="Développement Sur Mesure | Application Web & Mobile en 90 Jours - Malitix" />
      <meta property="og:description" content="Obtenez votre application web ou mobile sur mesure en 90 jours, garantie sans bug. Budget fixe, propriété totale du code." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.malitix.com/developpement-sur-mesure" />
      <meta property="og:image" content="https://www.malitix.com/images/custom-dev-og.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Développement Sur Mesure | Application Web & Mobile en 90 Jours" />
      <meta name="twitter:description" content="Application sur mesure en 90 jours, garantie sans bug. Budget fixe, propriété totale du code." />
      <link rel="canonical" href="https://www.malitix.com/developpement-sur-mesure" />


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
