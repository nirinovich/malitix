import type { LandingVariant } from '../../../types';
import LeadMagnetVariantA from './LeadMagnetVariantA';
import LeadMagnetVariantB from './LeadMagnetVariantB';
import LeadMagnetVariantC from './LeadMagnetVariantC';

interface LeadMagnetProps {
  variant: LandingVariant;
}

export default function LeadMagnet({ variant }: LeadMagnetProps) {
  switch (variant) {
    case 'B':
      return <LeadMagnetVariantB />;
    case 'C':
      return <LeadMagnetVariantC />;
    case 'A':
    default:
      return <LeadMagnetVariantA />;
  }
}
