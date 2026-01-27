import type { LandingVariant } from '../../../types';
import ValueStackVariantA from './ValueStackVariantA';
import ValueStackVariantB from './ValueStackVariantB';
import ValueStackVariantC from './ValueStackVariantC';

interface ValueStackProps {
  variant: LandingVariant;
}

export default function ValueStack({ variant }: ValueStackProps) {
  switch (variant) {
    case 'B':
      return <ValueStackVariantB />;
    case 'C':
      return <ValueStackVariantC />;
    case 'A':
    default:
      return <ValueStackVariantA />;
  }
}
