import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import { ThemeProvider } from "./context/ThemeContext";
import "./app.css";

export const links: Route.LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html
      lang="fr"
      className={`scroll-smooth${isAdminRoute ? " sanity-embedded" : ""}`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        {/* Dev branch: block all indexing and crawling */}
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        <link rel="icon" href="/favicon.ico" />
        <Meta />
        <Links />
        {!isAdminRoute && (
          // Prevent FOUC (Flash of Unstyled Content) by applying theme before React hydrates
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    // Priority: localStorage (user preference) > system preference > default
                    let theme = localStorage.getItem('theme');
                    if (theme !== 'light' && theme !== 'dark') {
                      // Check system preference
                      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    const html = document.documentElement;
                    html.classList.remove('light', 'dark');
                    html.classList.add(theme);
                  } catch (e) {
                    // Fallback: safe to ignore errors in script
                  }
                })();
              `,
            }}
          />
        )}
      </head>
      <body className={isAdminRoute ? "sanity-embedded" : undefined}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-[#2ca3bd] focus:text-white focus:font-bold focus:rounded-md outline-none focus:ring-4 focus:ring-white/20 transition-all"
        >
          Skip to content
        </a>
          {isAdminRoute ? children : <ThemeProvider>{children}</ThemeProvider>}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
