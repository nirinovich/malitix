# Release Notes - v1.0.0 (Migration to React Router v7)

## Overview
This release marks the completion of the migration from the legacy React site to a modern React Router v7 architecture. The goal was to achieve feature parity while significantly improving performance, accessibility, and developer experience.

## Key Features

### 🚀 Architecture & Performance
- **React Router v7**: Full migration to the latest router with manual route configuration (`app/routes.ts`).
- **Vite Build System**: Replaced Create React App/Webpack with Vite for lightning-fast HMR and optimized builds.
- **Code Splitting**: Route-level code splitting reduced initial bundle size.
- **Lazy Loading**: Components and images below the fold are lazy-loaded.
- **Web Vitals**: LCP, CLS, and INP monitoring integrated.

### 🎨 UI & UX
- **Theme System**: Robust Light/Dark mode with no FOUC (Flash of Unstyled Content).
- **Smooth Animations**: 60fps scroll-triggered animations using Framer Motion (respects `prefers-reduced-motion`).
- **Responsive Design**: Pixel-perfect layouts verified across Mobile, Tablet, and Desktop.
- **Carousel Components**: Auto-rotating logo and testimonial carousels with pause-on-hover.

### ♿ Accessibility (WCAG 2.1 AA)
- **High Contrast**: Brand colors adapted for contrast compliance (`--brand-text`).
- **Keyboard Navigation**: Full focus management and visible focus indicators.
- **Screen Readers**: ARIA labels, roles, and alt text implemented sitewide.
- **Reduced Motion**: Animations disabled when system preference is set.

### 🛡️ Forms & Validation
- **React Hook Form**: Performant form handling with Zod schema validation.
- **Feedback**: Accessible error messages and success states.

## Breaking Changes
- **Routing**: The routing logic has moved from `react-router-dom` v5/v6 to `react-router` v7 manual configuration.
- **Styling**: Global styles now rely heavily on CSS variables defined in `app/app.css`.

## Deployment
- Build command: `pnpm build`
- Output directory: `build/client` (static assets) and `build/server` (SSR ready)
- Start command: `pnpm start` (using `@react-router/serve`)

## Known Issues
- None at launch.

## Future Improvements
- Unit testing coverage (Vitest).
- End-to-end testing (Playwright).
- Storybook integration.
