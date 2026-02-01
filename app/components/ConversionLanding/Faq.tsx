import { CONVERSION_LANDING_FAQ } from "~/utils/constants";

export function Faq() {
  return (
    <section id="faq" className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
            {CONVERSION_LANDING_FAQ.eyebrow}
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            {CONVERSION_LANDING_FAQ.title}
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {CONVERSION_LANDING_FAQ.items.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border p-5 border-[var(--border-primary)] bg-[var(--surface-elevated)]"
            >
              <summary className="cursor-pointer font-semibold text-[var(--text-primary)]">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
