import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <>
      <title>404 - Page introuvable | Malitix</title>
      <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil de Malitix." />
      <meta name="robots" content="noindex, follow" />
      
      <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bg-primary)]">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className={`text-[150px] md:text-[200px] font-bold leading-none ${
            theme === 'dark' 
              ? 'text-white/10' 
              : 'text-gray-200'
          }`}>
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] bg-clip-text text-transparent`}>
              404
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Page introuvable
        </h2>
        <p className={`text-lg mb-12 ${
          theme === 'dark' ? 'text-white/70' : 'text-gray-600'
        }`}>
          Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300"
          >
            <Home size={20} />
            Retour à l'accueil
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${
              theme === 'dark'
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-gray-300 text-gray-900 hover:bg-[var(--bg-secondary)]'
            }`}
          >
            <ArrowLeft size={20} />
            Page précédente
          </button>
        </div>

        {/* Decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-30 ${
            theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-[#2ca3bd]'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-[#248fa5]' : 'bg-[#248fa5]'
          }`}></div>
        </div>
      </div>
    </div>
    </>
  );
}
