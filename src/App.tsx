import { ThemeProvider } from './context/ThemeContext';
import { ABTestProvider } from './context/ABTestContext';
import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import Layout from './components/Shared/Layout';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import VariantSelector from './components/ABTest/VariantSelector';

// Lazy load pages for better performance
const SprintCommando = lazy(() => import('./pages/SprintCommando'));
const CustomDevelopment = lazy(() => import('./pages/CustomDevelopment'));

function App() {
  return (
    <ThemeProvider>
      <ABTestProvider>
        <Layout>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2ca3bd]"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sprint-commando" element={<SprintCommando />} />
              <Route path="/developpement-sur-mesure" element={<CustomDevelopment />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <VariantSelector />
        </Layout>
      </ABTestProvider>
    </ThemeProvider>
  );
}

export default App;
