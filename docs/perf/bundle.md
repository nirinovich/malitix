# Bundle Size Tracking

Track bundle sizes over time to ensure performance budgets are met.

## Performance Budgets

- **Total JavaScript**: <200KB gzipped
- **CSS**: <15KB gzipped
- **Main chunk**: <100KB gzipped
- **Route chunks**: <10KB gzipped each

## Current Metrics

Last build: `pnpm build`

### JavaScript Bundles

| File | Size (raw) | Gzipped | Brotli |
|------|-----------|---------|--------|
| main | - | - | - |
| CSS | - | - | - |

### Route Chunks

| Route | Size (raw) | Gzipped |
|-------|-----------|---------|
| home | - | - |
| custom-dev | - | - |
| mobile-app | - | - |
| si-refonte | - | - |
| sprint | - | - |

## Generate Report

```bash
ANALYZE=true pnpm build
```

Opens interactive visualizer in browser showing:
- Treemap of bundle composition
- Gzip/Brotli sizes
- Module dependencies

## Historical Data

### Baseline (Initial Phase 1)
- Total bundle: TBD
- CSS: TBD
- Main chunk: TBD

### After Component Migration
- Total bundle: TBD
- CSS: TBD
- Main chunk: TBD

## Optimization Opportunities

- [ ] Code splitting for heavy routes
- [ ] Dynamic imports for below-fold components
- [ ] Tree-shaking unused Tailwind utilities
- [ ] Image optimization with modern formats (WebP/AVIF)
- [ ] Font subsetting for French language
