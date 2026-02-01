import { UsersRound } from "lucide-react";
import { CONVERSION_LANDING_HUMANISER } from "~/utils/constants";

export function Humaniser() {
  const {
    paragraph,
    title,
    subtitle,
    imageAlt,
    imageCaptionTitle,
    imageCaptionSubtitle,
    callout,
  } = CONVERSION_LANDING_HUMANISER;

  return (
    <section id="humaniser" className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-[var(--border-primary)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative">
              <img
                src="/images/team.png"
                alt={imageAlt}
                className="w-full h-full object-cover min-h-[320px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-xs uppercase tracking-[0.2em]">{imageCaptionTitle}</div>
                <div className="text-lg font-semibold">{imageCaptionSubtitle}</div>
              </div>
            </div>
            <div className="p-10 bg-[var(--surface-primary)]">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2ca3bd]">
                <UsersRound size={16} />
                {subtitle}
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
                {paragraph}
              </p>
              <div
                className="mt-6 rounded-2xl p-4 border border-[var(--border-primary)] bg-[var(--surface-elevated)] text-[var(--text-secondary)]"
              >
                {callout}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
