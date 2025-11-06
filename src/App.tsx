import { ThemeProvider } from './context/ThemeContext';
import { ABTestProvider } from './context/ABTestContext';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SprintCommando from './pages/SprintCommando';

function App() {
  return (
    <ThemeProvider>
      <ABTestProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sprint-commando" element={<SprintCommando />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </ABTestProvider>
    </ThemeProvider>
  );
}

export default App;
