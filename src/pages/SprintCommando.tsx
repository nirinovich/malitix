import { useEffect } from 'react';
import HeroVariantC from '../components/Sprint/HeroVariantC';
import SprintProblem from '../components/Sprint/SprintProblem';
import SprintSolution from '../components/Sprint/SprintSolution';
import SprintContact from '../components/Sprint/SprintContact';
import TestimonialSection from '../components/Sprint/TestimonialSection';
import BenefitsShowcase from '../components/Sprint/BenefitsShowcase';

export default function SprintCommando() {
  useEffect(() => {
    document.title = 'Sprint Commando | Développement Web Ultra-Rapide en 2 Semaines - Malitix';
  }, []);

  return (
    <>
      <title>Sprint Commando | Développement Web Ultra-Rapide en 2 Semaines - Malitix</title>
      <meta name="description" content="Obtenez votre site web professionnel en seulement 2 semaines avec Sprint Commando. Développement agile, qualité premium et mise en ligne garantie. Idéal pour les startups et PME qui veulent avancer vite." />
      <meta property="og:title" content="Sprint Commando | Site Web en 2 Semaines - Malitix" />
      <meta property="og:description" content="Développement web ultra-rapide en 2 semaines. Méthodologie agile, qualité premium et mise en ligne garantie pour votre projet digital." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.malitix.com/sprint-commando" />
      <meta property="og:image" content="https://www.malitix.com/images/sprint-commando-og.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sprint Commando | Site Web en 2 Semaines" />
      <meta name="twitter:description" content="Développement web ultra-rapide. Obtenez votre site professionnel en 2 semaines avec Sprint Commando." />
      <link rel="canonical" href="https://www.malitix.com/sprint-commando" />
      
      {/* Hero Section */}
      <HeroVariantC />

      {/* Section 1 - The Problem */}
      <SprintProblem />

      {/* Section 2 - The Solution */}
      <SprintSolution />

      {/* Section 3 - Testimonials */}
      <TestimonialSection />

      {/* Section 4 - Benefits Showcase - Interactive Cards */}
      <BenefitsShowcase />

      {/* Section 5 - Contact Form */}
      <SprintContact />
    </>
  );
}
