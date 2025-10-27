import Hero from '../components/Hero';
import ServicesBento from '../components/ServicesBento';
import TrustStats from '../components/TrustStats';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <ServicesBento />
      
      {/* Trust/Stats Section */}
      <TrustStats />
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
}
