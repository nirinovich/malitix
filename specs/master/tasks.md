---

description: "Tasks for React Router V7 Landing Page Migration"
---

# Tasks: React Router V7 Landing Page Migration

**Input**: Design documents from specs/master/  
**Prerequisites**: plan.md (required), spec.md (required), research.md (optional), data-model.md (optional), contracts/ (optional)

**Tests**: Not requested in spec or user input. No test tasks included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- [P]: Can run in parallel (different files, no dependencies)
- [Story]: Which user story this task belongs to (e.g., US1, US2, US3)
- All tasks include exact file paths

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare ConversionLanding migration scaffolding

- [x] T001 Create ConversionLanding barrel exports in app/components/ConversionLanding/index.ts
- [x] T002 Create ConversionLanding route skeleton in app/routes/conversion-landing.tsx

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared content and data structures needed by all sections

- [x] T003 Add ConversionLanding section types in app/types/index.ts
- [x] T004 [P] Add ConversionLanding copy constants in app/utils/constants.ts
- [x] T005 [P] Add ConversionLanding image assets in public/images/conversion-landing/

**Checkpoint**: Foundation ready; user story work can begin

---

## Phase 3: User Story 1 - Browse Landing Page and Navigate Services (Priority: P1) 🎯 MVP

**Goal**: Visitors can load the new ConversionLanding use-case page with identical legacy UI/UX

**Independent Test**: Load /conversion-landing → hero renders → scroll through all sections → navigation works

### Implementation for US1

- [x] T006 [P] [US1] Implement AboveTheFold section in app/components/ConversionLanding/AboveTheFold.tsx
- [x] T007 [P] [US1] Implement Humaniser section in app/components/ConversionLanding/Humaniser.tsx
- [x] T008 [P] [US1] Implement ValueStack section in app/components/ConversionLanding/ValueStack.tsx
- [x] T009 [P] [US1] Implement GrandSlamOffer section in app/components/ConversionLanding/GrandSlamOffer.tsx
- [x] T010 [P] [US1] Implement LeadMagnet section in app/components/ConversionLanding/LeadMagnet.tsx
- [x] T011 [P] [US1] Implement SocialProof section in app/components/ConversionLanding/SocialProof.tsx
- [x] T012 [P] [US1] Implement Faq section in app/components/ConversionLanding/Faq.tsx
- [x] T013 [US1] Compose all sections in app/routes/conversion-landing.tsx
- [x] T014 [US1] Register /conversion-landing route in app/routes.ts
- [x] T015 [US1] Add ConversionLanding navigation entry in app/components/Shared/Navbar.tsx

**Checkpoint**: ConversionLanding page renders end-to-end and is navigable

---

## Phase 4: User Story 2 - Switch between Light and Dark Themes (Priority: P1)

**Goal**: ConversionLanding respects the shared light/dark theme system without visual drift

**Independent Test**: Toggle theme on /conversion-landing → all sections update without layout shift

### Implementation for US2

- [x] T016 [US2] Align theme-aware classes in app/components/ConversionLanding/AboveTheFold.tsx, app/components/ConversionLanding/Humaniser.tsx, app/components/ConversionLanding/ValueStack.tsx, app/components/ConversionLanding/GrandSlamOffer.tsx, app/components/ConversionLanding/LeadMagnet.tsx, app/components/ConversionLanding/SocialProof.tsx, app/components/ConversionLanding/Faq.tsx

**Checkpoint**: Theme parity achieved on ConversionLanding

---

## Phase 5: User Story 3 - Submit a Contact Form with Validation (Priority: P1)

**Goal**: ConversionLanding lead form validates and submits identically to legacy

**Independent Test**: Submit invalid → errors show; submit valid → success feedback shown

### Implementation for US3

- [x] T017 [US3] Implement LeadForm using shared inputs in app/components/ConversionLanding/LeadForm.tsx
- [x] T018 [US3] Port legacy validation rules to app/utils/validation.ts
- [x] T019 [US3] Wire submit handler in app/utils/forms/submitContact.ts for LeadForm usage

**Checkpoint**: LeadForm behaves like legacy and is conversion-ready

---

## Phase 6: User Story 4 - View Smooth Scroll Animations and Parallax Effects (Priority: P2)

**Goal**: ConversionLanding animations are smooth and match legacy timing

**Independent Test**: Scroll through sections → animations trigger smoothly, no jank

### Implementation for US4

- [x] T020 [P] [US4] Add in-view animations to app/components/ConversionLanding/AboveTheFold.tsx
- [x] T021 [P] [US4] Add scroll-triggered effects to app/components/ConversionLanding/ValueStack.tsx
- [x] T022 [P] [US4] Add scroll-triggered effects to app/components/ConversionLanding/GrandSlamOffer.tsx
- [x] T023 [US4] Respect prefers-reduced-motion in app/components/ConversionLanding/AboveTheFold.tsx and app/components/ConversionLanding/ValueStack.tsx

**Checkpoint**: Animation parity achieved and accessible

---

## Phase 7: User Story 5 - View Logo Carousel and Testimonials (Priority: P2)

**Goal**: Social proof elements rotate smoothly and match legacy behavior

**Independent Test**: Carousel auto-rotates; manual navigation works with keyboard

### Implementation for US5

- [ ] T024 [US5] Implement carousel behavior in app/components/ConversionLanding/SocialProof.tsx using app/components/Utility/LogoCarousel.tsx
- [ ] T025 [US5] Add keyboard controls and ARIA roles in app/components/ConversionLanding/SocialProof.tsx

**Checkpoint**: Social proof parity achieved

---

## Phase 8: User Story 6 - Access Legal Pages and SEO Content (Priority: P2)

**Goal**: ConversionLanding route includes correct metadata for SEO

**Independent Test**: View page source on /conversion-landing → meta tags present and correct

### Implementation for US6

- [x] T026 [US6] Add ConversionLanding meta tags in app/routes/conversion-landing.tsx using app/utils/seo.ts
- [x] T027 [US6] Update public/sitemap.xml to include /conversion-landing

**Checkpoint**: SEO metadata verified

---

## Phase 9: User Story 7 - Experience Responsive Design on Mobile, Tablet, and Desktop (Priority: P2)

**Goal**: ConversionLanding is fully responsive with no horizontal scroll or CLS

**Independent Test**: Validate at 320px, 768px, 1920px; no layout shift on load

### Implementation for US7

- [ ] T028 [US7] Adjust responsive styles in app/components/ConversionLanding/AboveTheFold.tsx and app/components/ConversionLanding/LeadMagnet.tsx
- [ ] T029 [US7] Verify responsive layout for app/components/ConversionLanding/Humaniser.tsx, app/components/ConversionLanding/ValueStack.tsx, app/components/ConversionLanding/GrandSlamOffer.tsx, app/components/ConversionLanding/SocialProof.tsx, app/components/ConversionLanding/Faq.tsx

**Checkpoint**: Responsive parity achieved

---

## Phase 10: User Story 9 - Experience Fast Page Load and Smooth Scrolling (Priority: P2)

**Goal**: ConversionLanding meets performance budgets and avoids CLS

**Independent Test**: Lighthouse ≥90 desktop, ≥85 mobile; no CLS on load

### Implementation for US9

- [ ] T030 [US9] Lazy-load below-the-fold images in app/components/ConversionLanding/ValueStack.tsx and app/components/ConversionLanding/SocialProof.tsx
- [ ] T031 [US9] Ensure route-level lazy loading for ConversionLanding in app/routes.ts
- [ ] T032 [US9] Record bundle impact and optimizations in docs/perf/bundle.md

**Checkpoint**: Performance targets met for ConversionLanding

---

## Phase 11: User Story 8 - Access the Site with Keyboard Navigation and Screen Reader (Priority: P3)

**Goal**: ConversionLanding complies with WCAG 2.1 AA requirements

**Independent Test**: Tab through page → all interactive elements reachable with clear labels

### Implementation for US8

- [ ] T033 [US8] Add landmark regions and aria-labels in app/components/ConversionLanding/AboveTheFold.tsx and app/components/ConversionLanding/Faq.tsx
- [ ] T034 [US8] Ensure accessible labels and error messaging in app/components/ConversionLanding/LeadForm.tsx
- [ ] T035 [US8] Validate focus order and skip-link target in app/routes/conversion-landing.tsx

**Checkpoint**: Accessibility verified for ConversionLanding

---

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Documentation and cleanup for the new use-case landing page

- [ ] T036 [P] Update README.md with ConversionLanding route and usage notes
- [ ] T037 [P] Document migration notes in docs/ops/release-notes.md
- [ ] T038 [P] Remove obsolete references from legacy/README.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)** → **Foundational (Phase 2)** → **User Stories (Phase 3+)** → **Polish (Final Phase)**

### User Story Dependencies (Graph)

- **US1** → **US2** → **US3** → **US4/US5/US6/US7/US9** → **US8**

### Parallel Opportunities

- Phase 1: none
- Phase 2: T004 and T005 can run in parallel
- US1: section components (T006–T012) can run in parallel
- US4: animation tasks (T020–T022) can run in parallel

### Parallel Examples by User Story

- **US1**: T006, T007, T008, T009, T010, T011, T012
- **US2**: T016
- **US3**: T017, T018
- **US4**: T020, T021, T022
- **US5**: T024, T025
- **US6**: T026, T027
- **US7**: T028, T029
- **US8**: T033, T034
- **US9**: T030, T031

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: US1 (ConversionLanding render + navigation)
4. Validate UI parity against legacy ConversionLanding sections

### Incremental Delivery

1. US1 (page renders) → validate
2. US2 + US3 (theme + form) → validate
3. US4 + US5 + US6 + US7 + US9 (animations, social proof, SEO, responsive, performance) → validate
4. US8 (accessibility) → validate
5. Polish phase
