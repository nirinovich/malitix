import { useState } from 'react';
import MobileAppHero from '../components/MobileApp/MobileAppHero';
import MobileAppProblem from '../components/MobileApp/MobileAppProblem';
import MobileAppSolution from '../components/MobileApp/MobileAppSolution';
import TechStack from '../components/MobileApp/TechStack';
import Features from '../components/MobileApp/Features';
import CaseStudies from '../components/MobileApp/CaseStudies';
import Testimonials from '../components/MobileApp/Testimonials';
import Process from '../components/MobileApp/Process';
import Pricing from '../components/MobileApp/Pricing';
import FAQ from '../components/MobileApp/FAQ';
import FinalCTA from '../components/MobileApp/FinalCTA';
import ABTestControls from '../components/MobileApp/ABTestControls';

function MobileAppDevelopment() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleVariantChange = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <>
      <title>Mobile App Development | iOS & Android | Malitix</title>
      <meta
        name="description"
        content="Expert mobile app development for iOS, Android, and cross-platform. Native and React Native solutions. 50+ apps launched with 4.8★ rating."
      />
      <meta property="og:title" content="Mobile App Development | iOS & Android | Malitix" />
      <meta
        property="og:description"
        content="Expert mobile app development. Native iOS & Android, React Native, and Flutter specialists. From concept to App Store."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.malitix.com/mobile-app-development" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile App Development | iOS & Android | Malitix" />
      <meta
        name="twitter:description"
        content="Expert mobile app development. Native iOS & Android, React Native, and Flutter specialists."
      />
      <link rel="canonical" href="https://www.malitix.com/mobile-app-development" />

      {/* Page Sections */}
      <div key={refreshKey}>
        <MobileAppHero />
        <MobileAppProblem />
        <MobileAppSolution />
        <TechStack />
        <Features />
        <CaseStudies />
        <Testimonials />
        <Process />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </div>
      <ABTestControls onVariantChange={handleVariantChange} />
    </>
  );
}

export default MobileAppDevelopment;
