import type { LandingVariant } from '../../../types';
import SocialProofVariantA from './SocialProofVariantA';
import SocialProofVariantB from './SocialProofVariantB';
import SocialProofVariantC from './SocialProofVariantC';

interface SocialProofProps {
  variant: LandingVariant;
}

export default function SocialProof({ variant }: SocialProofProps) {
  switch (variant) {
    case 'B':
      return <SocialProofVariantB />;
    case 'C':
      return <SocialProofVariantC />;
    case 'A':
    default:
      return <SocialProofVariantA />;
  }
}
