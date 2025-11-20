import { ThemeProvider } from './context/ThemeContext';
import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Shared/Layout';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

// Lazy load SprintCommando car elle est lourde
const SprintCommando = lazy(() => import('./pages/SprintCommando'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Layout>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2ca3bd]"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sprint-commando" element={<SprintCommando />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
