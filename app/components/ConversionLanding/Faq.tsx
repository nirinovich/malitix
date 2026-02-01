import { useTheme } from "~/hooks/useTheme";
import { CONVERSION_LANDING_FAQ } from "~/utils/constants";

export function Faq() {
  const { theme } = useTheme();

  return (
    <section id="faq" className={`py-20 ${theme === "dark" ? "bg-[#060705]" : "bg-[#f5f7f9]"}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
            {CONVERSION_LANDING_FAQ.eyebrow}
          </div>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {CONVERSION_LANDING_FAQ.title}
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {CONVERSION_LANDING_FAQ.items.map((item) => (
            <details
              key={item.question}
              className={`rounded-2xl border p-5 ${theme === "dark" ? "border-white/10 bg-white/5" : "border-gray-200 bg-white"}`}
            >
              <summary className={`cursor-pointer font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {item.question}
              </summary>
              <p className={`mt-3 text-sm leading-relaxed ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
