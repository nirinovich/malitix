export type PackKey = 'Launch' | 'Growth' | 'Vision';

export const PACKS: Record<PackKey, { name: string; basePrice: number; description: string }> = {
  Launch: {
    name: 'Pack Lancement',
    basePrice: 645,
    description: 'Orienté MVP/POC, 1 PO + 2 développeurs',
  },
  Growth: {
    name: 'Pack Croissance',
    basePrice: 1075,
    description: 'Équipe feature complète, PO + Scrum/Tech + 3-4 dévs',
  },
  Vision: {
    name: 'Pack Vision',
    basePrice: 1615,
    description: 'Livraison long terme, PO + Scrum + 6-8 profils',
  },
};

const DISCOUNTS: Record<string, Record<PackKey, number>> = {
  '30-59': { Launch: 5.15, Growth: 4.87, Vision: 5.0 },
  '60-119': { Launch: 9.56, Growth: 9.73, Vision: 10.0 },
  '120-249': { Launch: 15.44, Growth: 15.04, Vision: 15.0 },
  '250-499': { Launch: 19.85, Growth: 20.35, Vision: 20.0 },
  '500+': { Launch: 25.0, Growth: 24.78, Vision: 25.0 },
};

export function getPricingInfo(selectedPack: PackKey, durationWeeks: number) {
  const durationInDays = durationWeeks * 5;
  const basePrice = PACKS[selectedPack].basePrice;
  let discountPercentage = 0;

  if (durationInDays >= 25) {
    let tierKey = '30-59';
    if (durationInDays >= 500) tierKey = '500+';
    else if (durationInDays >= 250) tierKey = '250-499';
    else if (durationInDays >= 120) tierKey = '120-249';
    else if (durationInDays >= 60) tierKey = '60-119';

    discountPercentage = DISCOUNTS[tierKey][selectedPack];
  }

  const discountedTjm = basePrice * (1 - discountPercentage / 100);
  const total = discountedTjm * durationInDays;

  return {
    tjm: discountedTjm,
    total,
    durationInDays,
    discountPercentage,
    basePrice,
  };
}
