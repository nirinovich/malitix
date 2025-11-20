import HeroVariantC from '../components/Sprint/HeroVariantC';
import SprintProblem from '../components/Sprint/SprintProblem';
import SprintSolution from '../components/Sprint/SprintSolution';
import SprintContact from '../components/Sprint/SprintContact';
import TestimonialSection from '../components/Sprint/TestimonialSection';
import { BenefitsShowcaseVariantB } from '../components/Sprint/BenefitsShowcaseVariants';

export default function SprintCommando() {
  return (
    <>
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
