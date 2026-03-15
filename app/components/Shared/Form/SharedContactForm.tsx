import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, Globe } from "lucide-react";
import { TextInput } from "~/components/Shared/Form/TextInput";
import { Textarea } from "~/components/Shared/Form/Textarea";
import { FormFeedback } from "~/components/Shared/Form/FormFeedback";
import { VALIDATION_PATTERNS } from "~/utils/validation";
import { submitContactForm } from "~/utils/forms/submitContact";

interface ContactFormData {
  name: string;
  email: string;
  website?: string;
  message: string;
}

interface SharedContactFormProps {
  // Optionnel: Source analytics (ex: "Contact Page", "Sprint Commando")
  source?: string;
  // Optionnel: Changer le texte du bouton
  buttonText?: string;
  // Optionnel: Titre du formulaire
  title?: string;
  // Optionnel: Sous-titre
  subtitle?: string;
}

export function SharedContactForm({
  source = "Contact Page",
  buttonText = "Planifier ma consultation",
  title = "Envoyez-nous un message",
  subtitle = "Les champs marqués d'un astérisque (*) sont requis.",
}: SharedContactFormProps) {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitContactForm({ data, source });
      setSubmissionStatus("success");
      reset();

      setTimeout(() => {
        setSubmissionStatus("idle");
      }, 5000);
    } catch (err) {
      console.error(err);
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="relative bg-[image:var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] rounded-[2rem] p-8 sm:p-10 shadow-2xl">
      {submissionStatus === "success" ? (
        <div className="text-center py-16 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[var(--brand-primary)]/10 rounded-full mb-4 mx-auto animate-bounce-soft">
            <CheckCircle2 className="text-[var(--brand-primary)]" size={48} />
          </div>
          <div>
            <h3 className="text-3xl font-black mb-3 text-[var(--text-primary)]">Demande reçue !</h3>
            <p className="text-[var(--text-secondary)] text-lg max-w-sm mx-auto leading-relaxed">
              Merci pour votre message. Un expert technique reviendra vers vous sous 24 heures pour
              planifier notre appel.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{title}</h2>
            {subtitle && <p className="text-[var(--text-secondary)] text-sm">{subtitle}</p>}
          </div>

          {submissionStatus === "error" && (
            <div className="mb-6">
              <FormFeedback status="error" />
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <TextInput
                label="Nom complet *"
                placeholder="Jean Dupont"
                error={errors.name?.message}
                {...register("name", { required: "Le nom est requis" })}
              />

              <TextInput
                label="Email professionnel *"
                type="email"
                placeholder="jean@entreprise.fr"
                error={errors.email?.message}
                {...register("email", {
                  required: "L'email est requis",
                  pattern: VALIDATION_PATTERNS.EMAIL,
                })}
              />
            </div>

            <TextInput
              label="Site web / URL de l'entreprise"
              placeholder="https://votre-site.com"
              error={errors.website?.message}
              icon={<Globe size={18} className="text-[var(--text-muted)]" />}
              {...register("website")}
            />

            <Textarea
              label="Parlez-nous de votre projet *"
              placeholder="Décrivez votre contexte, vos enjeux métier, et les technologies ciblées..."
              rows={5}
              error={errors.message?.message}
              {...register("message", { required: "Le message est requis" })}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_10px_30px_-10px_var(--alpha-brand-50)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-4 cursor-pointer"
            >
              {isSubmitting ? "Envoi en cours..." : buttonText}
              <Send
                size={20}
                className={
                  isSubmitting
                    ? "animate-pulse translate-x-1"
                    : "group-hover:translate-x-1 transition-transform"
                }
              />
            </button>

            <p className="text-xs text-center text-[var(--text-muted)] mt-4">
              Vos informations sont sécurisées et ne seront jamais partagées.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
