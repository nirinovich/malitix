export interface SubmitContactParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
  source: string;
}

export async function submitContactForm({ data, source }: SubmitContactParams): Promise<void> {
  // Call Google Ads conversion tracking
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag_report_conversion(undefined);
  }

  const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      source
    }),
  });

  if (!response.ok) {
    throw new Error('Erreur lors de l\'envoi du formulaire');
  }
}
