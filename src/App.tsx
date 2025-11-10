import { ThemeProvider } from './context/ThemeContext';
import { Routes, Route } from 'react-router';
import Layout from './components/Shared/Layout';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SprintCommando from './pages/SprintCommando';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sprint-commando" element={<SprintCommando />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
