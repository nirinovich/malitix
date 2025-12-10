import MobileAppHero from '../components/MobileApp/MobileAppHero';
import MobileAppProblem from '../components/MobileApp/MobileAppProblem.tsx';
import MobileAppSolution from '../components/MobileApp/MobileAppSolution';
import SpeedAdvantage from '../components/MobileApp/SpeedAdvantage';
import SocialProof from '../components/MobileApp/SocialProof';
import FinalCTA from '../components/MobileApp/FinalCTA';

function MobileAppDevelopment() {
  return (
    <>
      <title>Développement Mobile | iOS & Android | Malitix</title>
      <meta
        name="description"
        content="Expert en développement mobile pour iOS, Android et cross-platform. Solutions natives et React Native. 50+ applications lancées avec une note de 4.8★."
      />
      <meta property="og:title" content="Développement Mobile | iOS & Android | Malitix" />
      <meta
        property="og:description"
        content="Expert en développement mobile. Spécialistes iOS & Android natifs, React Native et Flutter. Du concept à l'App Store."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.malitix.com/developpement-mobile" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Développement Mobile | iOS & Android | Malitix" />
      <meta
        name="twitter:description"
        content="Expert en développement mobile. Spécialistes iOS & Android natifs, React Native et Flutter."
      />
      <link rel="canonical" href="https://www.malitix.com/developpement-mobile" />

      {/* Page Sections */}
      <MobileAppHero />
      <MobileAppProblem />
      <MobileAppSolution />
      <SpeedAdvantage />
      <SocialProof />
      <FinalCTA />
    </>
  );
}

export default MobileAppDevelopment;
