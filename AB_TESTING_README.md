# A/B Testing System Documentation

## 🎯 Overview

A comprehensive A/B testing system that allows you to test multiple variants of each landing page component and track their performance with real-time analytics.

## 📦 What's Included

### Core Files Created:

1. **`context/ABTestContext.tsx`** - Central A/B testing context and hooks
2. **`components/ABTest/VariantSelector.tsx`** - UI control panel for variant switching
3. **`components/CustomDev/CustomDevHeroVariants.tsx`** - Three hero section variants (A, B, C)

### Updated Files:

- **`App.tsx`** - Wrapped with ABTestProvider and added VariantSelector
- **`components/CustomDev/CustomDevHero.tsx`** - Now dynamically renders variants

## 🚀 Features

### ✅ Variant Management
- **3 variants per component** (A, B, C)
- Random assignment for new visitors
- Persistent selection across sessions
- Easy switching via UI control panel

### ✅ Analytics Tracking
- **Impressions** - Track how many times each variant is viewed
- **Clicks** - Track CTA button clicks per variant
- **Conversions** - Track form submissions per variant
- **CTR** (Click-Through Rate) - Automatic calculation
- **Conversion Rate** - Automatic calculation
- **Google Analytics integration** - Ready for gtag events

### ✅ Developer Tools
- **Dev Mode Toggle** - Enable/disable variant selector
- **Visual Control Panel** - Easy variant switching
- **Real-time Analytics Dashboard** - See performance metrics
- **Local Storage Persistence** - Data saved between sessions

## 🎨 Hero Variants Explained

### Variant A - "Maximum Information"
- **Strategy**: Provide all details upfront
- **Layout**: Two-column with floating feature cards
- **Copy**: Full headline + subheadline + body copy
- **CTA**: "Calculer le ROI de mon Logiciel Sur Mesure"
- **Best for**: Users who need complete information before acting

### Variant B - "Simplified Focus"
- **Strategy**: Less is more, focus on core promise
- **Layout**: Centered single column
- **Copy**: Simplified headline + promise + trust badges
- **CTA**: "Démarrer Mon Projet"
- **Best for**: Users who prefer clarity and brevity

### Variant C - "Minimal & Bold"
- **Strategy**: Ultra-minimal, maximum impact
- **Layout**: Full-width with bold typography
- **Copy**: 2-line headline + stat line
- **CTA**: "Calculer Mon ROI"
- **Best for**: Modern, design-conscious users

## 💻 Usage Guide

### For Developers:

#### Enable Dev Mode:
1. Visit `/developpement-sur-mesure`
2. Click the **gear icon** (⚙️) in bottom-right corner
3. Control panel appears with variant options

#### Switch Variants:
1. Open control panel
2. Select variant (A, B, or C) for each component
3. Page updates instantly
4. Selection is saved in localStorage

#### View Analytics:
1. Open control panel
2. Click **chart icon** (📊) to toggle analytics view
3. See impressions, clicks, CTR, and conversion rates

### For Production:

#### Automatic Variant Assignment:
```typescript
// Users are automatically assigned random variants on first visit
// Assignment is saved in localStorage and persists
```

#### Track Custom Events:
```typescript
import { useABTest } from '../../context/ABTestContext';

const { trackClick, trackConversion } = useABTest();

// Track button click
trackClick('hero', 'A', 'cta_button');

// Track conversion (form submission)
trackConversion('hero', 'A');
```

#### Get Analytics Data:
```typescript
import { useABTest } from '../../context/ABTestContext';

const { getAnalytics } = useABTest();

// Get all analytics for hero section
const heroAnalytics = getAnalytics('hero');
// Returns: [{ variant: 'A', impressions: 100, clicks: 15, conversions: 3 }, ...]
```

## 📊 Analytics Integration

### Google Analytics 4:
```typescript
// Events are automatically sent to GA4 if gtag is available
// Event names:
// - ab_test_click
// - ab_test_conversion

// Custom dimensions:
// - component: 'hero'
// - variant: 'A'
// - element: 'cta_button'
```

### Export Data:
```typescript
// Data is stored in localStorage:
localStorage.getItem('malitix_ab_analytics');

// Parse and export to CSV, Excel, or your analytics platform
```

## 🔧 Adding More Variants

### To add variants for other components:

1. **Create variant file** (e.g., `CustomDevProblemVariants.tsx`):
```typescript
export function ProblemVariantA() { /* ... */ }
export function ProblemVariantB() { /* ... */ }
export function ProblemVariantC() { /* ... */ }
```

2. **Update main component**:
```typescript
import { useABTest } from '../../context/ABTestContext';
import { ProblemVariantA, ProblemVariantB, ProblemVariantC } from './CustomDevProblemVariants';

export default function CustomDevProblem() {
  const { variants } = useABTest();

  switch (variants.problem) {
    case 'B': return <ProblemVariantB />;
    case 'C': return <ProblemVariantC />;
    default: return <ProblemVariantA />;
  }
}
```

3. **Add tracking**:
```typescript
useEffect(() => {
  trackImpression('problem', 'A');
}, [trackImpression]);
```

## 🎯 Best Practices

### Testing Strategy:
1. **Run tests for 2-4 weeks** minimum for statistical significance
2. **Equal traffic split** - system automatically assigns 33.3% to each variant
3. **Track primary metric** - Conversions (form submissions)
4. **Track secondary metrics** - CTR, time on page, scroll depth
5. **Minimum sample size** - Wait for 100+ conversions per variant

### Variant Design:
1. **Test one hypothesis** per experiment
2. **Significant differences** between variants
3. **Mobile-first** - All variants must work on mobile
4. **Brand consistency** - Keep core brand elements
5. **Performance** - All variants should load equally fast

### Analytics Review:
1. **Check CTR** - Which variant gets more clicks?
2. **Check conversion rate** - Which variant converts better?
3. **Statistical significance** - Use Chi-square test
4. **Winner selection** - Choose variant with highest conversion rate + significance

## 🔒 Data Privacy

- All data stored **locally** in user's browser
- **No personal information** collected
- **GDPR compliant** - User can clear localStorage anytime
- **Optional GA4 tracking** - Only if user consented

## 🐛 Troubleshooting

### Variants not switching:
- Check if dev mode is enabled (gear icon should be visible)
- Clear localStorage: `localStorage.clear()`
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Analytics not updating:
- Check localStorage: `localStorage.getItem('malitix_ab_analytics')`
- Ensure trackImpression is called in useEffect
- Verify button onClick handlers call trackClick

### Dev mode button not visible:
- Check if VariantSelector is rendered in App.tsx
- Look in bottom-right corner of page
- Toggle with: `localStorage.setItem('malitix_ab_devmode', 'true')`

## 📈 Next Steps

### Recommended Enhancements:
1. **Add more component variants** (Problem, Solution, CTA sections)
2. **Server-side tracking** - Send analytics to your backend
3. **Admin dashboard** - Build dedicated analytics UI
4. **Automated winner selection** - Algorithm to pick best variant
5. **Multivariate testing** - Test multiple components simultaneously

### Advanced Features:
- **Segment testing** - Different variants for different user segments
- **Time-based rules** - Automatically switch variants at certain times
- **Geo-targeting** - Show different variants by location
- **Device targeting** - Different variants for mobile/desktop
- **Integration with CRM** - Sync data with your sales tools

---

## 🎉 Quick Start

1. **Enable Dev Mode**: Click gear icon in bottom-right
2. **Choose Variants**: Select A, B, or C for each component
3. **View Analytics**: Click chart icon to see performance
4. **Run Tests**: Let real users see different variants
5. **Analyze Results**: Check which variant performs best
6. **Implement Winner**: Use winning variant as default

**Current Status**: Hero section has 3 fully functional variants (A, B, C) ready for testing!
