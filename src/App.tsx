import { ThemeProvider } from './context/ThemeContext';
import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import Layout from './components/Shared/Layout';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

// Lazy load pages for better performance
const SprintCommando = lazy(() => import('./pages/SprintCommando'));
const ConversionLanding = lazy(() => import('./pages/ConversionLanding'));
const CustomDevelopment = lazy(() => import('./pages/CustomDevelopment'));
const SIRefonte = lazy(() => import('./pages/SIRefonte'));
const MobileAppDevelopment = lazy(() => import('./pages/MobileAppDevelopment'));
const SOCMonitoring = lazy(() => import('./pages/SOCMonitoring'));
const BIAdvisor = lazy(() => import('./pages/BIAdvisor'));
const Contact = lazy(() => import('./pages/Contact'));
const QuiSommesNous = lazy(() => import('./pages/QuiSommesNous'));
const Blog = lazy(() => import('./pages/Blog'));

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2ca3bd]"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/externalisation" element={<ConversionLanding />} />
            <Route path="/soc-monitoring" element={<SOCMonitoring />} />
            <Route path="/sprint-commando" element={<SprintCommando />} />
            <Route path="/developpement-sur-mesure" element={<CustomDevelopment />} />
            <Route path="/refonte-si" element={<SIRefonte />} />
            <Route path="/developpement-mobile" element={<MobileAppDevelopment />} />
            <Route path="/bi-advisor" element={<BIAdvisor />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
