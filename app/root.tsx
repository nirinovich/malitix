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

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=2" },
  { rel: "shortcut icon", href: "/favicon.ico?v=2" },
  { rel: "icon", type: "image/png", href: "/favicon.png?v=2", sizes: "any" },
];

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
        {!isAdminRoute && (
          <>
            <script data-cookieconsent="ignore" dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }
              gtag('consent', 'default', {
                'ad_personalization': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500,
              });
              gtag("set", "ads_data_redaction", true);
              gtag("set", "url_passthrough", false);
              gtag('js', new Date());
              gtag('config', 'AW-11480258743');
              gtag('config', 'G-XGEFD1FDRZ');

              window.gtag_report_conversion = function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof url !== 'undefined') {
                    window.location = url;
                  }
                };

                gtag('event', 'conversion', {
                  'send_to': 'AW-11480258743/VW8uCPmcocsaELexm-Iq',
                  'value': 1.0,
                  'currency': 'USD',
                  'event_callback': callback
                });

                return false;
              };
            `}} />
            <script dangerouslySetInnerHTML={{ __html: `
              function loadScript(src, id) {
                if (id && document.getElementById(id)) {
                  return;
                }

                var script = document.createElement('script');
                script.async = true;
                if (id) {
                  script.id = id;
                }
                script.src = src;
                document.head.appendChild(script);
              }

              function loadMarketingScripts() {
                loadScript('https://cdn-cookieyes.com/client_data/8c7b194ddfb209c75d3cbd84ee02b13f/script.js', 'cookieyes');
                loadScript('https://www.googletagmanager.com/gtm.js?id=GTM-KTH9CRZ4', 'gtm-js');
                loadScript('https://www.googletagmanager.com/gtag/js?id=G-XGEFD1FDRZ', 'gtag-js');
              }

              if (document.readyState === 'complete') {
                loadMarketingScripts();
              } else {
                window.addEventListener('load', loadMarketingScripts, { once: true });
              }
            `}} />
          </>
        )}
      </head>
      <body className={isAdminRoute ? "sanity-embedded" : undefined}>
        {!isAdminRoute && (
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTH9CRZ4" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        )}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-[var(--brand-primary)] focus:text-white focus:font-bold focus:rounded-md outline-none focus:ring-4 focus:ring-white/20 transition-all"
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
      error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main id="main-content" className="pt-16 p-4 container mx-auto">
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
