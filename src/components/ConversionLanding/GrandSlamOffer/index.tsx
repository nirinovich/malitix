import type { LandingVariant } from '../../../types';
import GrandSlamOfferVariantA from './GrandSlamOfferVariantA';
import GrandSlamOfferVariantB from './GrandSlamOfferVariantB';
import GrandSlamOfferVariantC from './GrandSlamOfferVariantC';

interface GrandSlamOfferProps {
  variant: LandingVariant;
}

export default function GrandSlamOffer({ variant }: GrandSlamOfferProps) {
  switch (variant) {
    case 'B':
      return <GrandSlamOfferVariantB />;
    case 'C':
      return <GrandSlamOfferVariantC />;
    case 'A':
    default:
      return <GrandSlamOfferVariantA />;
  }
}
