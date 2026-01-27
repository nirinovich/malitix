import type { LandingVariant } from '../../../types';
import FaqVariantA from './FaqVariantA';
import FaqVariantB from './FaqVariantB';
import FaqVariantC from './FaqVariantC';

interface FaqProps {
  variant: LandingVariant;
}

export default function Faq({ variant }: FaqProps) {
  switch (variant) {
    case 'B':
      return <FaqVariantB />;
    case 'C':
      return <FaqVariantC />;
    case 'A':
    default:
      return <FaqVariantA />;
  }
}
