import HeroVariantC from '../components/Sprint/HeroVariantC';
import SprintProblem from '../components/Sprint/SprintProblem';
import SprintSolution from '../components/Sprint/SprintSolution';
import SprintContact from '../components/Sprint/SprintContact';
import TestimonialSection from '../components/Sprint/TestimonialSection';
import BenefitsShowcase from '../components/Sprint/BenefitsShowcase';
import ABTestPanel from '../components/Sprint/ABTestPanel';

export default function SprintCommando() {
  return (
    <>
      {/* Hero Section with A/B Testing for CPU variants */}
      <HeroVariantC />

      {/* Stats intégrés dans Hero Section maintenant */}

      {/* Section 1 - The Problem */}
      <SprintProblem />

      {/* Section 2 - The Solution */}
      <SprintSolution />

      {/* Section 3 - Testimonials */}
      <TestimonialSection />

      {/* Section 4 - Benefits Showcase */}
      <BenefitsShowcase />

      {/* Section 5 - Contact Form */}
      <SprintContact />

      {/* A/B Test Control Panel */}
      <ABTestPanel />
    </>
  );
}
