# Malitix Landing Page - React Router V7

> A modern, pixel-perfect migration of the Malitix landing page to React Router V7, featuring manual routing, theme switching, optimized animations, and complete TypeScript coverage.

## Features

- ✅ **Manual Routing** - Explicit React Router V7 configuration (not file-based)
- ✅ **Theme Switching** - Light/dark mode with localStorage persistence
- ✅ **Form Validation** - React Hook Form with real-time validation
- ✅ **Smooth Animations** - Scroll-triggered effects at 60fps
- ✅ **SEO Ready** - React Helmet for meta tags and structured data
- ✅ **Fully Typed** - TypeScript strict mode, zero `any` types
- ✅ **Performance** - Bundle analysis, code splitting, lazy loading
- ✅ **Accessibility** - WCAG 2.1 AA compliance, keyboard navigation, reduced motion support, high contrast mode

## Tech Stack

- **Framework**: React 19 with React Router V7
- **Language**: TypeScript 5.3+ (strict mode)
- **Build**: Vite 5+ with HMR
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS + CSS Modules
- **Forms**: React Hook Form
- **SEO**: React Helmet Async
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
```

### Development

```bash
# Start dev server with HMR
pnpm dev

# Open browser to http://localhost:5173
```

### Building

```bash
# Build for production
pnpm build

# Preview production build locally
pnpm start

# Analyze bundle size
pnpm analyze
```

### Code Quality

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Formatting
pnpm format

# Format and fix lint issues
pnpm format && pnpm lint --fix
```

## Project Structure

```
app/
├── root.tsx              # Root layout with theme/helmet providers
├── app.css               # Global styles and design tokens
├── routes.ts             # Manual route configuration
├── routes/               # Page components
│   ├── home.tsx         # Home page (/)
│   ├── custom-dev.tsx   # Custom Development (/custom-dev)
│   ├── mobile-app.tsx   # Mobile App Development (/mobile-app)
│   ├── si-refonte.tsx   # SI Refonte (/si-refonte)
│   ├── sprint.tsx       # Sprint Commando (/sprint)
│   ├── privacy-policy.tsx # Privacy Policy (/privacy-policy)
│   ├── legal-notice.tsx # Legal Notice (/legal-notice)
│   └── $.tsx            # 404 Not Found (catch-all)
├── components/           # React components
│   ├── Shared/          # Layout, navbar, footer, theme toggle
│   ├── Home/            # Home page components
│   ├── CustomDev/       # Custom Development components
│   ├── MobileApp/       # Mobile App components
│   ├── SIRefonte/       # SI Refonte components
│   └── Sprint/          # Sprint Commando components
├── hooks/                # Custom React hooks
│   ├── useTheme.ts      # Theme context hook
│   ├── useInView.ts     # Intersection Observer hook
│   └── forms/           # Form-related hooks
├── context/              # React Context providers
│   └── ThemeContext.tsx # Light/dark theme context
├── utils/                # Utility functions
│   ├── cn.ts            # Class name merging (clsx-like)
│   ├── seo.ts           # SEO helper functions
│   └── forms/           # Form utilities (validation, submit)
└── types/                # TypeScript type definitions
    └── index.ts         # Shared types
```

## Manual Routing

Routes are defined explicitly in `app/routes.ts`:

```typescript
import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("root.tsx", [
    index("routes/home.tsx"),           // /
    route("custom-dev", "routes/custom-dev.tsx"),
    route("mobile-app", "routes/mobile-app.tsx"),
    // ...
  ]),
] satisfies RouteConfig;
```

This approach provides **explicit control** over route structure without relying on file-based conventions.

## Styling Approach

- **Global styles**: `app/app.css` (design tokens, resets, utilities)
- **Component styles**: CSS Modules or Tailwind utility classes
- **Theme variables**: CSS custom properties (--color-*, --space-*, etc.)
- **Responsive breakpoints**: Preserved from legacy design

## Performance Goals

- ✅ Lighthouse score ≥90 (desktop), ≥85 (mobile)
- ✅ First Contentful Paint <3s on 4G
- ✅ 60fps animations on mobile
- ✅ Bundle size <200kb gzipped

## Development Workflow

```bash
# 1. Start dev server
pnpm dev

# 2. Make changes (auto-refresh with HMR)

# 3. Type check before commit
pnpm typecheck

# 4. Lint and fix
pnpm lint --fix

# 5. Format code
pnpm format
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

- ✅ WCAG 2.1 AA compliance
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Color contrast meets WCAG AA
- ✅ `prefers-reduced-motion` respected

## Deployment

### Firebase Hosting

```bash
# Build and deploy
pnpm build
firebase deploy
```

---

**Status**: 🟢 Active Development | **Last Updated**: 2026-01-12

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
