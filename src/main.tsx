import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import ScrollToTop from './components/Shared/ScrollToTop.tsx';

// Initialize theme synchronously before React renders
const initTheme = () => {
  const savedTheme = localStorage.getItem('malitix-theme') as 'dark' | 'light' | null;
  const theme = savedTheme || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.classList.add(theme);
};

initTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
