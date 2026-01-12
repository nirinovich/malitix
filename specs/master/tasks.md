---

description: "Tasks for React Router V7 Landing Page Migration"
---

# Tasks: React Router V7 Landing Page Migration

**Input**: Design documents from `.specify/specs/001-rr7-landing-page-migration/`  
**Prerequisites**: plan.md (required), spec.md (required), research.md (optional), data-model.md (optional), contracts/ (optional)

**Tests**: The plan and spec call for comprehensive testing. Per your direction, unit tests are deferred for now; we will focus on e2e, visual regression, and accessibility tests.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- [P]: Can run in parallel (different files, no dependencies)
- [Story]: Which user story this task belongs to (e.g., US1, US2, US3)
- All tasks include exact file paths

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and baseline configuration

- [ ] T001 Create React Router V7 manual routing configuration in app/routes.ts
- [ ] T002 Enable TypeScript strict mode in tsconfig.json (strict: true)
- [ ] T003 [P] Add ESLint config with TypeScript rules in eslint.config.js
- [ ] T004 [P] Add Prettier config in .prettierrc and format scripts in package.json
- [ ] T005 Add .env.example and load via Vite in vite.config.ts
- [ ] T006 [P] Add vite-plugin-bundle-analyzer and baseline report docs/perf/bundle.md
- [ ] T007 Document setup in README.md (scripts, dev workflow)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure required before any story

- [ ] T008 Create app/root.tsx with theme provider and layout shell
- [ ] T009 Configure manual routes in app/routes.ts (define all route paths and components)
- [ ] T010 [P] Implement utils/cn.ts utility for class name merging
- [ ] T011 Create utils/seo.ts helpers (buildMeta, buildTitle for React Router V7 Meta)
- [ ] T012 Set up app/app.css with design tokens and resets
- [ ] T013 [P] Create types/index.ts for shared TS types

**Checkpoint**: Foundation ready; user stories can start in parallel

---

## Phase 3: User Story 1 - Browse Landing Page and Navigate Services (Priority: P1) 🎯 MVP

**Goal**: Visitors can navigate across all pages with identical visual output and behavior to legacy

**Independent Test**: Load home → open nav → navigate to service page → back to home

### Implementation for US1

- [ ] T015 [US1] Create app/routes/home.tsx (/) using components/Home/*
- [ ] T016 [P] [US1] Create app/routes/custom-dev.tsx (/custom-dev)
- [ ] T017 [P] [US1] Create app/routes/mobile-app.tsx (/mobile-app)
- [ ] T018 [P] [US1] Create app/routes/si-refonte.tsx (/si-refonte)
- [ ] T019 [P] [US1] Create app/routes/sprint.tsx (/sprint)
- [ ] T020 [US1] Create app/routes/$.tsx (404 catch-all) rendering NotFound
- [ ] T021 [US1] Wire Navbar links in app/components/Shared/Navbar.tsx to new routes
- [ ] T022 [US1] Ensure Layout wrapper in app/components/Shared/Layout.tsx nests routes correctly
- [ ] T023 [US1] Add ScrollToTop behavior in app/components/Shared/ScrollToTop.tsx
- [ ] T024 [US1] Add route-level SEO meta with React Router V7 Meta component in each route file

**Checkpoint**: Navigation parity achieved; routes stable and testable

---

## Phase 4: User Story 2 - Switch between Light and Dark Themes (Priority: P1)

**Goal**: Seamless theme toggling with persistence and zero FOUC

**Independent Test**: Toggle theme → persists after refresh → preserved across navigation

### Implementation for US2

- [ ] T025 [US2] Migrate app/context/ThemeContext.tsx with localStorage persistence
- [ ] T026 [P] [US2] Create hooks/useTheme.ts for consuming theme context
- [ ] T027 [US2] Prevent FOUC by loading theme before first paint in app/root.tsx
- [ ] T028 [P] [US2] Wire ThemeToggle in app/components/Shared/ThemeToggle.tsx
- [ ] T029 [US2] Apply CSS variables in app/app.css for theme tokens
- [ ] T030 [US2] Add prefers-reduced-motion and color-scheme meta in index.html

**Checkpoint**: Theme parity and persistence verified

---

## Phase 5: User Story 3 - Submit a Contact Form with Validation (Priority: P1)

**Goal**: Forms validate and submit identically to legacy; UI unchanged

**Independent Test**: Fill valid data → submit → success. Invalid data → correct field errors.

### Implementation for US3

- [ ] T031 [US3] Add react-hook-form dependency and types in package.json
- [ ] T032 [P] [US3] Create reusable form components in app/components/Shared/Form/
- [ ] T033 [US3] Implement TextInput in app/components/Shared/Form/TextInput.tsx
- [ ] T034 [US3] Implement Textarea in app/components/Shared/Form/Textarea.tsx
- [ ] T035 [P] [US3] Migrate validation rules to hooks/forms/useContactValidation.ts
- [ ] T036 [US3] Implement form in app/components/CustomDev/CustomDevCTA.tsx using React Hook Form
- [ ] T037 [P] [US3] Wire submit handler and API call in app/utils/forms/submitContact.ts
- [ ] T038 [US3] Preserve legacy messages and success UI in app/components/Shared/Form/Feedback.tsx
- [ ] T039 [US3] Ensure form state persistence (optional) in hooks/forms/useFormPersistence.ts

**Checkpoint**: Forms behave identically; validation and submission reliable

---

## Phase 6: User Story 4 - View Smooth Scroll Animations and Parallax Effects (Priority: P2)

**Goal**: Smooth, performant animations (60fps) and scroll-triggered effects

**Independent Test**: Scroll through sections → animations trigger smoothly with no jank

### Implementation for US4

- [ ] T040 [US4] Implement hooks/useInView.ts (Intersection Observer) or refine existing
- [ ] T041 [P] [US4] Apply in-view animations in components/Home/Hero.tsx
- [ ] T042 [P] [US4] Apply in-view animations in components/Home/ServicesBento.tsx
- [ ] T043 [P] [US4] Apply in-view animations in components/Home/TrustStats.tsx
- [ ] T044 [US4] Optimize parallax effect in components/Sprint/SprintHero.tsx
- [ ] T045 [US4] Lazy-load framer-motion where used
- [ ] T046 [US4] Respect prefers-reduced-motion in all animated components
- [ ] T047 [US4] Validate 60fps on mobile via DevTools

**Checkpoint**: Animations smooth and accessible

---

## Phase 7: User Story 5 - View Logo Carousel and Testimonials (Priority: P2)

**Goal**: Carousels rotate automatically and smoothly; manual controls match legacy

**Independent Test**: Logos rotate every 3–5s; testimonials navigate via arrows/auto-rotate

### Implementation for US5

- [ ] T048 [US5] Migrate components/Utility/LogoCarousel.tsx with auto-rotation
- [ ] T049 [P] [US5] Migrate components/Sprint/TestimonialSection.tsx
- [ ] T050 [US5] Ensure smooth transitions with CSS transforms
- [ ] T051 [P] [US5] Add keyboard controls and ARIA roles for carousel
- [ ] T052 [US5] Ensure pause-on-hover/focus accessibility
- [ ] T053 [US5] Optimize images used in carousels (loading="lazy")
- [ ] T054 [US5] Expose props for timing to match legacy cadence
- [ ] T055 [US5] Validate performance and user interaction parity

**Checkpoint**: Carousels match legacy behavior and visuals

---

## Phase 8: User Story 6 - Access Legal Pages and SEO Content (Priority: P2)

**Goal**: Legal pages render correctly with per-route meta tags

**Independent Test**: Footer links → legal pages load with correct meta and titles

### Implementation for US6

- [ ] T056 [US6] Create app/routes/privacy-policy.tsx with content from pages/PrivacyPolicy.tsx
- [ ] T057 [P] [US6] Create app/routes/legal-notice.tsx with content from pages/LegalNotice.tsx
- [ ] T058 [US6] Add Helmet meta tags in each legal route
- [ ] T059 [US6] Ensure robots.txt and sitemap.xml remain in public/
- [ ] T060 [US6] Add Open Graph meta images where applicable
- [ ] T061 [US6] Add structured data (Schema.org) for organization/site
- [ ] T062 [US6] Verify footer links in components/Shared/Footer.tsx

**Checkpoint**: Legal + SEO correctness

---

## Phase 9: User Story 7 - Experience Responsive Design (Priority: P2)

**Goal**: Layouts adapt across mobile/tablet/desktop with no horizontal scroll or layout shift

**Independent Test**: Validate 320px, 768px, 1920px behaviors match legacy

### Implementation for US7

- [ ] T063 [US7] Ensure global breakpoints in app/app.css reflect legacy
- [ ] T064 [US7] Verify mobile layout for Home components/Home/*
- [ ] T065 [P] [US7] Verify tablet layout for components/Home/*
- [ ] T066 [P] [US7] Verify desktop layout for components/Home/*
- [ ] T067 [US7] Validate responsive styles for service pages components/*/*
- [ ] T068 [US7] Ensure buttons meet 44x44px tap target on mobile
- [ ] T069 [US7] Ensure no horizontal scroll across routes
- [ ] T070 [US7] Validate CLS stability across breakpoints

**Checkpoint**: Responsive parity achieved

---

## Phase 10: User Story 9 - Experience Fast Load and Smooth Scrolling (Priority: P2)

**Goal**: Meet performance budgets: <200kb gzipped, LCP<2.5s, CLS<0.1, 60fps

**Independent Test**: Lighthouse ≥90 desktop, ≥85 mobile; web-vitals in good range

### Implementation for US9

- [ ] T071 [US9] Ensure route-level code splitting (confirm in build output)
- [ ] T072 [P] [US9] Lazy-load heavy components with React.lazy() where safe
- [ ] T073 [US9] Analyze bundle with vite-plugin-bundle-analyzer
- [ ] T074 [P] [US9] Optimize above-the-fold images (vite imports) and below-the-fold (loading="lazy")
- [ ] T075 [US9] Add web-vitals reporting in app/main.tsx
- [ ] T076 [US9] Remove unused dependencies and dead code
- [ ] T077 [US9] Ensure minimal CLS with fixed image dimensions and fonts

**Checkpoint**: Performance targets met

---

## Phase 11: User Story 8 - Accessibility (WCAG 2.1 AA) (Priority: P3)

**Goal**: Full keyboard navigation, screen reader compatibility, color contrast, reduced motion support

**Independent Test**: Tab through site, screen reader announces content, forms accessible

### Implementation for US8

- [ ] T078 [US8] Ensure focus states visible in app/app.css
- [ ] T079 [P] [US8] Add aria-labels/roles for interactive elements in components/Shared/Navbar.tsx
- [ ] T080 [P] [US8] Associate form labels with inputs in components/Shared/Form/*
- [ ] T081 [US8] Provide alt text for images across components/*/*
- [ ] T082 [US8] Ensure color contrast meets AA in app/app.css
- [ ] T083 [US8] Provide skip-to-content link in app/root.tsx
- [ ] T084 [US8] Respect prefers-reduced-motion sitewide
- [ ] T085 [US8] Update docs/accessibility/checklist.md

**Checkpoint**: A11y checks passing; WCAG AA compliance

---

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Stabilize, document, and prepare for deployment/maintenance

- [ ] T086 [P] Documentation updates in README.md and docs/
- [ ] T087 Code cleanup and dead code removal across app/**
- [ ] T088 [P] Add Storybook stories for shared components (optional) .storybook/
- [ ] T089 Improve error handling and logging in utils/*
- [ ] T090 Security review of dependencies (pnpm audit) and updates
- [ ] T091 [P] Archive legacy/ code after parity confirmed
- [ ] T092 Release notes and post-launch monitoring docs in docs/ops/release-notes.md

---

## Dependencies & Execution Order

### Phase Dependencies

- Setup (Phase 1): No dependencies
- Foundational (Phase 2): Depends on Setup completion; BLOCKS all stories
- User Stories (Phase 3+): Depend on Foundational completion
  - Recommended order by priority: US1 (P1) → US2 (P1) → US3 (P1) → US4/US5/US6/US7/US9 (P2) → US8 (P3)
- Polish (Final Phase): After all targeted stories complete

### User Story Dependencies

- US1 (Navigation): none (after Foundational)
- US2 (Theme): none; integrates with shared Layout
- US3 (Forms): depends on shared components; independent of US1
- US4 (Animations): depends on home/service components migrated
- US5 (Carousels): depends on utility components
- US6 (Legal/SEO): depends on routes
- US7 (Responsive): depends on routes + components
- US9 (Performance): depends on routes + components
- US8 (Accessibility): depends on components and forms

### Parallel Opportunities

- In Setup/Foundational: tasks marked [P] can run concurrently
- After Foundational: service page migrations (US4/US5) can proceed in parallel with SEO/responsive (US6/US7)
- Tests marked [P] can be implemented in parallel to features (mocked where needed)

#### Parallel Examples

- US1: Create route files in parallel (T031–T034)
- US2: Hook + component wiring in parallel (T044, T046)
- US3: Form inputs + validation in parallel (T054–T056)
- US4: Apply in-view animations to multiple sections in parallel (T064–T066)
- US5: Carousel + a11y enhancements in parallel (T074, T076)
- US6: Create both legal routes in parallel (T083, T084)
- US7: Tablet/desktop verifications in parallel (T095, T096)
- US9: Lazy-load + image optimizations in parallel (T104, T106)
- US8: Navbar a11y + form labels in parallel (T114, T115)

---

## Implementation Strategy

- MVP scope: Complete US1 (Navigation) to enable all other work
- Incremental delivery:
  - Phase 1–2: Baseline infrastructure + quality gates
  - Phase 3: US1 (P1) unlocks routing backbone
  - Phase 4: US2 (Theme) and Phase 5: US3 (Forms) complete P1 foundation
  - Phase 6–11: Deliver P2/P3 in parallel where capacity allows
- Tests-first: Write tests where specified before implementation; ensure failing state before making them pass
- Acceptance gates per story: Visual parity, tests passing, performance budgets respected
