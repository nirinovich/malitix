import { Quote, Star } from "lucide-react";
import { CONVERSION_LANDING_SOCIAL_PROOF } from "~/utils/constants";
import type { ConversionLandingTestimonial } from "~/types";

const testimonials: ConversionLandingTestimonial[] = [
  {
    name: "Selim Saadi",
    role: "CEO & Co-founder",
    company: "Karlisolutions",
    image: "/images/testimonials/selim-saadi.png",
    quote:
      "Nous avons pu développer notre solution dans sa première version (déjà très complète) avec des équipes de Malitix qui ont parfaitement compris notre besoin et notre ambition. Elles nous ont aidé à cadrer le sujet et à organiser un suivi régulier et flexible. Nous avons eu d'excellentes relations avec le chef de projet digital, les développeurs, la business analyst et les équipes commerciales.",
    rating: 5,
  },
  {
    name: "David Bovet",
    role: "CEO",
    company: "Bios Analytics",
    image: "/images/testimonials/david.png",
    quote:
      "Malitix has been a longstanding partner since the inception of our company's first website, contributing to our online presence and technological solutions over the years.",
    rating: 5,
  },
  {
    name: "Riad Roubache",
    role: "CISO/CTO",
    company: "Tersadia",
    image: "/images/testimonials/riad.png",
    quote:
      "Nous travaillons depuis 3 ans avec Malitix à qui nous avons confié notre supervision et monitoring 24/7 sur un périmètre assez large (Système d'informations, Cyber sécurité). Une équipe réactive, qui respecte les consignes, avec un suivi commercial précis et un respect des SLA qui nous permettent d'être confiants sur notre collaboration actuelle et future.",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section id="social-proof" className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
            {CONVERSION_LANDING_SOCIAL_PROOF.eyebrow}
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            {CONVERSION_LANDING_SOCIAL_PROOF.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border p-6 border-[var(--border-primary)] bg-[var(--surface-elevated)]"
            >
              <div className="flex items-center justify-between">
                <Quote className="text-[#2ca3bd]" size={22} aria-hidden="true" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} size={14} className="text-[#2ca3bd] fill-[#2ca3bd]" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)]">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
