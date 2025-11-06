import HeroVariantC from '../components/HeroVariantC';
import SprintProblem from '../components/SprintProblem';
import SprintSolution from '../components/SprintSolution';
import SprintContact from '../components/SprintContact';
import LogoCarousel from '../components/LogoCarousel';
import TestimonialSection from '../components/TestimonialSection';
import PricingGrid from '../components/PricingGrid';
import ABTestPanel from '../components/ABTestPanel';

export default function SprintCommando() {
  return (
    <>
      {/* Hero Section with A/B Testing for CPU variants */}
      <HeroVariantC />

      {/* Logo Carousel / Stats */}
      <LogoCarousel />

      {/* Section 1 - The Problem */}
      <SprintProblem />

      {/* Section 2 - The Solution */}
      <SprintSolution />

      {/* Section 3 - Testimonials */}
      <TestimonialSection />

      {/* Section 4 - Pricing Grid */}
      <PricingGrid />

      {/* Section 5 - Contact Form */}
      <SprintContact />

      {/* A/B Test Control Panel */}
      <ABTestPanel />
    </>
  );
}
