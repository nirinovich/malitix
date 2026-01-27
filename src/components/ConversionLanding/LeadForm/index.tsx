import type { LandingVariant } from '../../../types';
import LeadFormVariantA from './LeadFormVariantA';
import LeadFormVariantB from './LeadFormVariantB';
import LeadFormVariantC from './LeadFormVariantC';

interface LeadFormProps {
  variant: LandingVariant;
}

export default function LeadForm({ variant }: LeadFormProps) {
  switch (variant) {
    case 'B':
      return <LeadFormVariantB />;
    case 'C':
      return <LeadFormVariantC />;
    case 'A':
    default:
      return <LeadFormVariantA />;
  }
}
