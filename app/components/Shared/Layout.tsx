import { useTheme } from "~/context/ThemeContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import type { BaseComponentProps } from "~/types";

export function Layout({ children }: BaseComponentProps) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <Navbar theme={theme} />
      <main id="main-content" className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
