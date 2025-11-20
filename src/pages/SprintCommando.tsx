import { Helmet } from 'react-helmet-async';
import HeroVariantC from '../components/Sprint/HeroVariantC';
import SprintProblem from '../components/Sprint/SprintProblem';
import SprintSolution from '../components/Sprint/SprintSolution';
import SprintContact from '../components/Sprint/SprintContact';
import TestimonialSection from '../components/Sprint/TestimonialSection';
import { BenefitsShowcaseVariantB } from '../components/Sprint/BenefitsShowcaseVariants';

export default function SprintCommando() {
  return (
    <>
      <Helmet>
        <title>Sprint Commando - Déblocage garanti en 14 jours | Malitix</title>
        <meta name="description" content="Notre Sprint Commando débloque vos projets tech en 14 jours maximum. Intervention rapide, expertise technique pointue, résultats garantis. Contactez-nous." />
        <meta name="keywords" content="sprint commando, déblocage projet, intervention rapide, expertise technique, Malitix" />
        <link rel="canonical" href="https://www.malitix.com/sprint-commando" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.malitix.com/sprint-commando" />
        <meta property="og:title" content="Sprint Commando - Déblocage garanti en 14 jours | Malitix" />
        <meta property="og:description" content="Notre Sprint Commando débloque vos projets tech en 14 jours maximum. Intervention rapide, expertise technique pointue, résultats garantis." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.malitix.com/sprint-commando" />
        <meta property="twitter:title" content="Sprint Commando - Déblocage garanti en 14 jours | Malitix" />
        <meta property="twitter:description" content="Notre Sprint Commando débloque vos projets tech en 14 jours maximum. Intervention rapide, expertise technique pointue, résultats garantis." />
      </Helmet>

      {/* Hero Section */}
      <HeroVariantC />

      {/* Section 1 - The Problem */}
      <SprintProblem />

      {/* Section 2 - The Solution */}
      <SprintSolution />

      {/* Section 3 - Testimonials */}
      <TestimonialSection />

      {/* Section 4 - Benefits Showcase - Interactive Cards */}
      <BenefitsShowcaseVariantB />

      {/* Section 5 - Contact Form */}
      <SprintContact />
    </>
  );
}
