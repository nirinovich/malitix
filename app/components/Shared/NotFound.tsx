import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <>
      <title>404 - Page introuvable | Malitix</title>
      <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil de Malitix." />
      <meta name="robots" content="noindex, follow" />
      
      <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bg-primary)] relative overflow-hidden">
        {/* Decoration Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-30 bg-[#2ca3bd]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 bg-[#248fa5]"></div>
        </div>

        <div className="max-w-2xl w-full text-center relative z-10">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold leading-none text-[var(--text-secondary)]/10">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] bg-clip-text text-transparent">
                404
              </div>
            </div>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Page introuvable
          </h2>
          <p className="text-lg mb-12 text-[var(--text-secondary)]">
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Home size={20} />
              Retour à l'accueil
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-[var(--text-secondary)]/20 text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft size={20} />
              Page précédente
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
