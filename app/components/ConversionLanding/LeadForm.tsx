import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTheme } from "~/hooks/useTheme";
import { CONVERSION_LANDING_LEAD_FORM } from "~/utils/constants";
import { submitContactForm } from "~/utils/forms/submitContact";
import { CONVERSION_LEAD_VALIDATION } from "~/utils/validation";

interface LeadFormData {
  name: string;
  email: string;
  website?: string;
  message: string;
}

export function LeadForm() {
  const { theme } = useTheme();
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    try {
      await submitContactForm({ data, source: "Conversion Landing" });
      setSubmissionStatus("success");
      reset();
      setTimeout(() => setSubmissionStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setSubmissionStatus("error");
    }
  };

  return (
    <section id="lead-form" className={`py-24 ${theme === "dark" ? "bg-[#060705]" : "bg-[#f5f7f9]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
              {CONVERSION_LANDING_LEAD_FORM.eyebrow}
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              {CONVERSION_LANDING_LEAD_FORM.title}
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
              {CONVERSION_LANDING_LEAD_FORM.description}
            </p>
            <div className="space-y-3">
              {CONVERSION_LANDING_LEAD_FORM.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd]/20 p-2 rounded-full">
                    <CheckCircle2 className="text-[#2ca3bd]" size={20} />
                  </div>
                  <span className={theme === "dark" ? "text-white/80" : "text-gray-700"}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-3xl p-8 border shadow-2xl ${
            theme === "dark" ? "border-white/10 bg-white/5" : "border-gray-200 bg-white"
          }`}>
            {submissionStatus === "success" ? (
              <div className="text-center py-12 space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2ca3bd]/20 rounded-full">
                  <CheckCircle2 className="text-[#2ca3bd]" size={40} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Message envoyé !
                  </h3>
                  <p className={theme === "dark" ? "text-white/70" : "text-gray-600"}>
                    Nous reviendrons vers vous sous 24 heures.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {submissionStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-500">
                    Erreur lors de l'envoi du formulaire
                  </div>
                )}

                <div>
                  <label htmlFor="name" className={`block font-medium mb-2 ${theme === "dark" ? "text-white/90" : "text-gray-900"}`}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", CONVERSION_LEAD_VALIDATION.name)}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all ${
                      theme === "dark"
                        ? "bg-white/5 border border-white/10 text-white placeholder:text-white/40"
                        : "bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400"
                    }`}
                    placeholder="Jean Dupont"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={`block font-medium mb-2 ${theme === "dark" ? "text-white/90" : "text-gray-900"}`}>
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", CONVERSION_LEAD_VALIDATION.email)}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all ${
                      theme === "dark"
                        ? "bg-white/5 border border-white/10 text-white placeholder:text-white/40"
                        : "bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400"
                    }`}
                    placeholder="jean@entreprise.fr"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="website" className={`block font-medium mb-2 ${theme === "dark" ? "text-white/90" : "text-gray-900"}`}>
                    Site web
                  </label>
                  <input
                    type="text"
                    id="website"
                    {...register("website", CONVERSION_LEAD_VALIDATION.website)}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all ${
                      theme === "dark"
                        ? "bg-white/5 border border-white/10 text-white placeholder:text-white/40"
                        : "bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400"
                    }`}
                    placeholder="https://votre-site.com"
                  />
                  {errors.website && (
                    <p className="mt-2 text-sm text-red-500">{errors.website.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className={`block font-medium mb-2 ${theme === "dark" ? "text-white/90" : "text-gray-900"}`}>
                    Parlez-nous de votre projet *
                  </label>
                  <textarea
                    id="message"
                    {...register("message", CONVERSION_LEAD_VALIDATION.message)}
                    rows={4}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all resize-none ${
                      theme === "dark"
                        ? "bg-white/5 border border-white/10 text-white placeholder:text-white/40"
                        : "bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400"
                    }`}
                    placeholder="Décrivez votre besoin et vos sprints à venir..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  <Send size={20} className={isSubmitting ? "animate-pulse" : ""} />
                </button>

                <p className={`text-sm text-center ${theme === "dark" ? "text-white/50" : "text-gray-500"}`}>
                  En envoyant ce formulaire, vous acceptez notre{" "}
                  <a href="/politique-de-confidentialite" className="text-[#2ca3bd] hover:underline">
                    {CONVERSION_LANDING_LEAD_FORM.privacyLabel}
                  </a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
