import { Helmet } from 'react-helmet-async';
import Hero from '../components/Home/Hero';
import ServicesBento from '../components/Home/ServicesBento';
import TrustStats from '../components/Home/TrustStats';
import CTASection from '../components/Home/CTASection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Malitix | Excellence technologique, innovation continue</title>
        <meta name="description" content="Malitix accompagne les entreprises dans leur transformation digitale avec expertise technique, innovation et excellence opérationnelle. Solutions sur-mesure pour vos projets IT." />
        <meta name="keywords" content="transformation digitale, expertise technique, développement web, consulting IT, Malitix" />
        <link rel="canonical" href="https://www.malitix.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.malitix.com/" />
        <meta property="og:title" content="Malitix | Excellence technologique, innovation continue" />
        <meta property="og:description" content="Malitix accompagne les entreprises dans leur transformation digitale avec expertise technique, innovation et excellence opérationnelle." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.malitix.com/" />
        <meta property="twitter:title" content="Malitix | Excellence technologique, innovation continue" />
        <meta property="twitter:description" content="Malitix accompagne les entreprises dans leur transformation digitale avec expertise technique, innovation et excellence opérationnelle." />
      </Helmet>

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
