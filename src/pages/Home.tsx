import Hero from '../components/Home/Hero';
import ServicesBento from '../components/Home/ServicesBento';
import TrustStats from '../components/Home/TrustStats';
import CTASection from '../components/Home/CTASection';

export default function Home() {
  return (
    <>
      <title>Malitix | Excellence technologique, innovation continue</title>
      <meta name="description" content="Malitix transforme vos défis technologiques en opportunités de croissance. Solutions innovantes en développement web, cloud et transformation digitale pour propulser votre entreprise vers l'excellence." />
      <meta property="og:title" content="Malitix | Excellence technologique, innovation continue" />
      <meta property="og:description" content="Malitix transforme vos défis technologiques en opportunités de croissance. Solutions innovantes en développement web, cloud et transformation digitale." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.malitix.com/" />
      <meta property="og:image" content="https://www.malitix.com/images/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Malitix | Excellence technologique, innovation continue" />
      <meta name="twitter:description" content="Solutions innovantes en développement web, cloud et transformation digitale pour propulser votre entreprise." />
      <link rel="canonical" href="https://www.malitix.com/" />
      
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
