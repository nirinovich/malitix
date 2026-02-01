// Common validation patterns
export const VALIDATION_PATTERNS = {
  EMAIL: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Adresse email invalide",
  },
  PHONE: {
    value: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
    message: "Numéro de téléphone invalide (format français attendu)",
  },
  URL: {
    value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
    message: "URL invalide",
  },
};

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  message?: string;
}

// Conversion Landing lead form validation
export const CONVERSION_LEAD_VALIDATION = {
  name: { required: 'Le nom est requis' },
  email: {
    required: "L'email est requis",
    pattern: VALIDATION_PATTERNS.EMAIL,
  },
  website: {
    pattern: VALIDATION_PATTERNS.URL,
  },
  message: { required: 'Le message est requis' },
};
