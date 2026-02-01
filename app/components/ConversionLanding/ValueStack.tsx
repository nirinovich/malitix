import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { BadgeCheck, Rocket, Shield, Shuffle } from "lucide-react";
import { useTheme } from "~/hooks/useTheme";
import { CONVERSION_LANDING_VALUE_STACK } from "~/utils/constants";
import type { ConversionLandingValueItem } from "~/types";

const items: ConversionLandingValueItem[] = [
  {
    icon: Rocket,
    title: "Vitesse d'Exécution",
    description: "Pourquoi attendre 3 mois de préavis ? Nos devs push du code dès leur première semaine.",
  },
  {
    icon: BadgeCheck,
    title: "Expertise Tech Validée",
    description: "Nous ne vous envoyons pas des juniors. Nos ingénieurs ont livré plus de 600 projets complexes.",
  },
  {
    icon: Shuffle,
    title: "Flexibilité Totale",
    description: "Besoin de scaler pour un rush ? On ajoute 2 devs. Le rush est fini ? On réduit la voilure. Vous payez ce que vous consommez.",
  },
  {
    icon: Shield,
    title: "Zéro Risque RH",
    description: "Pas de charges patronales, pas de gestion de carrière, pas de drama. On gère l'humain, vous gérez la vision.",
  },
];

export function ValueStack() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="value-stack"
      className={`py-20 ${theme === "dark" ? "bg-[#0a0e0d]" : "bg-white"}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
              {CONVERSION_LANDING_VALUE_STACK.eyebrow}
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              {CONVERSION_LANDING_VALUE_STACK.title}
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
              {CONVERSION_LANDING_VALUE_STACK.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 rounded-2xl border p-5 ${
                  theme === "dark" ? "border-white/10 bg-white/5" : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="h-10 w-10 rounded-xl bg-[#2ca3bd]/15 flex items-center justify-center">
                  <item.icon className="text-[#2ca3bd]" size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {item.title}
                  </div>
                  <div className={`text-sm mt-1 ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
