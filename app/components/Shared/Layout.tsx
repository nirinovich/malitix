import { useTheme } from "~/hooks/useTheme";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import type { BaseComponentProps } from "~/types";

export function Layout({ children }: BaseComponentProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      }`}
    >
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
