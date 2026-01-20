import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import type { BaseComponentProps } from "~/types";

export function Layout({ children }: BaseComponentProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)]">
      <Navbar />
      <main id="main-content" className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
