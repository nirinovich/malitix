---
description: "Tasks for Theme Toggle System Refactor"
---

# Tasks: Theme Toggle System Refactor

**Input**: Audit findings and refactor plan from `specs/theme-refactor/`  
**Prerequisites**: plan.md (required), audit.md (required)

**Organization**: Tasks are grouped by phase for sequential execution

## Format: `[ID] [P?] Description`

- [P]: Can run in parallel (different files, no dependencies)
- All tasks include exact file paths

---

## Phase 1: Analysis & Planning (Checkpoint)

**Purpose**: Understand current state, document issues, plan refactor

- [x] T101 Audit current theme implementation (documented in audit.md)
- [x] T102 Create refactor plan (documented in plan.md)

**Checkpoint**: Audit complete, issues identified, plan approved

---

## Phase 2: Foundation (CSS Variables & New Context)

**Purpose**: Build new infrastructure before breaking changes

- [x] T201 Add CSS custom properties to app/app.css for both light and dark themes
  - Add :root rules for light mode variables (--bg-primary, --text-primary, etc.)
  - Add .dark rule set for dark mode variable overrides
  - Map current inline colors to variables
  - **File**: app/app.css

- [x] T202 Refactor ThemeContext for SSR-safe hydration
  - Replace useState with useLayoutEffect to prevent flash
  - Implement getInitialTheme() to check: localStorage → system preference → 'light'
  - Remove "mounted" state workaround
  - Add system preference change listener
  - **File**: app/context/ThemeContext.tsx
  - **Test**: No flash on load, system preference detected, theme persists

- [ ] T203 [P] Create useSystemPreference hook (optional optimization)
  - Extract prefers-color-scheme logic into standalone hook
  - Return dark/light preference and listener
  - **File**: app/hooks/useSystemPreference.ts (new)
  - **Test**: Hook detects system preference changes

- [x] T204 Update app/root.tsx to verify theme provider setup
  - Ensure ThemeProvider wraps app correctly
  - Remove any duplicate theme initialization
  - **File**: app/root.tsx
  - **Test**: No console errors, theme loads correctly

**Checkpoint**: CSS variables defined, new context ready, no breaking changes yet

---

## Phase 3: Consolidation (Remove Duplication)

**Purpose**: Eliminate duplicate exports and imports

- [x] T301 Delete app/hooks/useTheme.ts (consolidate into context)
  - File should be deleted as useTheme is already exported from ThemeContext
  - **File to DELETE**: app/hooks/useTheme.ts

- [x] T302 Update all imports to use context export
  - Find all imports from `~/hooks/useTheme`
  - Change to import from `~/context/ThemeContext`
  - **Files to Update**:
    - app/components/CustomDev/CustomDevHero.tsx
    - app/components/Utility/ProgressIllustration.tsx
    - app/components/Utility/LogoCarousel.tsx
    - app/components/Shared/Navbar.tsx
    - Any other files importing from hooks/useTheme
  - **Test**: Build succeeds, no import errors

- [x] T303 Verify no other files have dangling useTheme imports
  - Run `grep -r "from.*useTheme" app/`
  - Confirm all imports point to context
  - **Test**: No TypeScript errors

**Checkpoint**: Single source of truth for useTheme, build clean

---

## Phase 4: Component Refactoring

**Purpose**: Update components to use CSS variables and clean patterns

- [x] T401 Refactor Navbar component
  - Remove `theme: propTheme` prop completely
  - Remove inline backgroundColor/boxShadow style overrides
  - Replace with CSS classes + variables
  - Keep toggleTheme() button functionality
  - **File**: app/components/Shared/Navbar.tsx
  - **Test**: 
    - Toggle button still works
    - Dark/light styles apply correctly
    - No visual regressions
    - No prop drilling

- [x] T402 Refactor ProgressIllustration component
  - Keep theme context for dynamic color logic (SVG strokes)
  - Replace redundant inline conditionals where possible
  - Use CSS variables for static colors
  - **File**: app/components/Utility/ProgressIllustration.tsx
  - **Test**: Visual regression (colors match), all strokes render correctly

- [ ] T403 [P] Refactor CustomDevHero component
  - Replace inline theme === 'dark' ? 'color-dark' : 'color-light' patterns
  - Use CSS classes + Tailwind dark: prefix where applicable
  - Extract hardcoded colors to variables
  - **File**: app/components/CustomDev/CustomDevHero.tsx
  - **Test**: Visual regression, all text/backgrounds render correctly

- [ ] T404 [P] Refactor LogoCarousel component
  - Ensure consistent theme context usage
  - Use CSS variables for styling
  - **File**: app/components/Utility/LogoCarousel.tsx
  - **Test**: Visual regression, logos display correctly in both themes

- [ ] T405 [P] Refactor remaining components using theme
  - CustomDevProblem.tsx, CustomDevSolution.tsx, etc.
  - Apply same pattern: context for state, CSS vars for styling
  - **Files**: app/components/**/*.tsx (all using theme)
  - **Test**: Full visual regression pass

**Checkpoint**: All components refactored, consistent patterns throughout

---

## Phase 5: Testing & Validation

**Purpose**: Verify refactor works correctly across scenarios

- [ ] T501 Hydration & Flash Testing
  - Load page with localStorage theme='dark' → verify no flash
  - Load page with localStorage theme='light' → verify no flash
  - Clear localStorage, check system preference → loads correctly
  - **Test**: Manual browser testing, DevTools Application tab
  - **Expected**: Instant theme display, no color flicker

- [ ] T502 Persistence Testing
  - Toggle theme in UI
  - Refresh page
  - Verify theme persisted
  - Open in different tab
  - **Expected**: Theme consistent across sessions and tabs

- [ ] T503 System Preference Detection Testing
  - Clear localStorage (DevTools)
  - Set OS to dark mode (Windows Settings or test via DevTools)
  - Reload page
  - Verify dark theme loads
  - Repeat for light mode
  - **Expected**: System preference respected on first visit

- [ ] T504 CSS Variable Testing
  - Open DevTools
  - Inspect element with CSS variables
  - Toggle theme
  - Verify variables update in :root
  - **Expected**: All colors update via CSS variables

- [ ] T505 Build & Type Check
  - Run `pnpm build`
  - Run `pnpm type-check` (if available)
  - Verify no errors or warnings
  - **Expected**: Clean build, no TypeScript errors

- [ ] T506 Visual Regression Testing
  - Compare current theme colors against refactored version
  - Check all pages in both light and dark modes
  - Look for color shifts, sizing issues, text readability
  - **Expected**: Identical visual output before/after

**Checkpoint**: All tests pass, no regressions, refactor complete

---

## Phase 6: Documentation & Cleanup

**Purpose**: Update docs and finalize

- [ ] T601 Update README.md
  - Document new theme system behavior
  - Explain system preference detection
  - Show CSS variable usage example
  - **File**: README.md

- [ ] T602 Add inline code comments
  - Explain useLayoutEffect in ThemeContext
  - Document CSS variable naming convention
  - **Files**: app/context/ThemeContext.tsx, app/app.css

- [ ] T603 Create migration guide (if needed for team)
  - Document old vs new import paths
  - Show before/after component patterns
  - **File**: docs/THEME_MIGRATION.md (optional)

- [ ] T604 Final cleanup
  - Remove any console.log or debug code
  - Review and finalize all comments
  - Verify no unused variables or imports
  - **Files**: All modified files

**Checkpoint**: Documentation complete, code clean, ready for production

---

## Success Criteria (All Must Pass)

- ✓ No flash of wrong theme on page load (T501)
- ✓ System preference detected on first visit (T503)
- ✓ Theme persists across sessions (T502)
- ✓ Navbar no longer passes theme prop (T401)
- ✓ All components use context (no duplicate hooks) (T302)
- ✓ CSS variables defined and applied (T201)
- ✓ Build succeeds with no errors (T505)
- ✓ Visual regression: colors match before/after (T506)
- ✓ Documentation updated (T601)

---

## Parallel Task Groups

The following can run in parallel (no file conflicts):
- T201 (CSS) + T202 (Context) + T203 (Hook)
- T403 + T404 + T405 (Different components)
- T501 + T502 + T503 + T504 + T505 + T506 (All testing)

---

## Risk Mitigation Checklist

- [ ] Backup current theme implementation before starting
- [ ] Create git branch for refactor work
- [ ] Run visual regression baseline before T201
- [ ] Test localStorage + system pref edge cases
- [ ] Verify no console errors in DevTools
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)
