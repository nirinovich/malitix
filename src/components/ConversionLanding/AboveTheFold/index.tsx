import type { LandingVariant } from '../../../types';
import AboveTheFoldVariantA from './AboveTheFoldVariantA';
import AboveTheFoldVariantB from './AboveTheFoldVariantB';
import AboveTheFoldVariantC from './AboveTheFoldVariantC';

interface AboveTheFoldProps {
  variant: LandingVariant;
}

export default function AboveTheFold({ variant }: AboveTheFoldProps) {
  switch (variant) {
    case 'B':
      return <AboveTheFoldVariantB />;
    case 'C':
      return <AboveTheFoldVariantC />;
    case 'A':
    default:
      return <AboveTheFoldVariantA />;
  }
}
