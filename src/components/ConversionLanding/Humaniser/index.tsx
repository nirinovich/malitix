import type { LandingVariant } from '../../../types';
import HumaniserVariantA from './HumaniserVariantA';
import HumaniserVariantB from './HumaniserVariantB';
import HumaniserVariantC from './HumaniserVariantC';

interface HumaniserProps {
  variant: LandingVariant;
}

export default function Humaniser({ variant }: HumaniserProps) {
  switch (variant) {
    case 'B':
      return <HumaniserVariantB />;
    case 'C':
      return <HumaniserVariantC />;
    case 'A':
    default:
      return <HumaniserVariantA />;
  }
}
