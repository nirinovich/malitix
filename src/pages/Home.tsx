import Hero from '../components/Home/Hero';
import ServicesBento from '../components/Home/ServicesBento';
import TrustStats from '../components/Home/TrustStats';
import CTASection from '../components/Home/CTASection';

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
