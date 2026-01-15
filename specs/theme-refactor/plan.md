---
description: "Refactor and fix the theme toggle system with proper hydration, system preference detection, and CSS integration"
---

# Plan: Theme Toggle System Refactor

## Overview

This plan addresses critical and structural issues in the current theme system:
- **Flash on load** (hydration mismatch)
- **Duplicate hook exports** (maintenance issue)
- **Inline styles instead of CSS variables** (maintainability)
- **Missing system preference detection** (UX)
- **Inconsistent component patterns** (refactor Navbar)

## Tech Stack

- **Context API**: React 19+
- **Storage**: localStorage (persistent)
- **System API**: window.matchMedia() for prefers-color-scheme
- **DOM**: document.documentElement for class management
- **CSS**: Design tokens with CSS custom properties (--theme-*, --color-*)
- **Framework**: React Router V7 (no SSR complications for now)

## Architecture

### Updated Flow

```
1. Initial Load (Browser)
   ├─ SSR/Pre-hydration: Check localStorage OR system preference
   ├─ Render: Apply theme before useLayoutEffect (no flash)
   └─ Hydrate: Client hydrates with correct theme

2. Theme Toggle
   ├─ Update context state
   ├─ Save to localStorage
   ├─ Notify system listeners
   └─ No DOM manipulation needed (CSS handles it via class)

3. CSS Integration
   ├─ .light class: Light theme CSS variables
   ├─ .dark class: Dark theme CSS variables  
   └─ Components: Use CSS variables instead of inline conditionals
```

## File Structure

```
app/
├─ context/
│  └─ ThemeContext.tsx          (REFACTOR: Fix hydration, remove duplicate hook)
│
├─ hooks/
│  └─ useTheme.ts               (DELETE: Consolidate into context)
│
├─ components/
│  ├─ Shared/
│  │  └─ Navbar.tsx             (REFACTOR: Use CSS vars, remove prop fallback)
│  └─ Utility/
│     ├─ ProgressIllustration.tsx (REFACTOR: Use theme context only)
│     └─ LogoCarousel.tsx        (REFACTOR: Use CSS vars where possible)
│
├─ app.css                       (ENHANCE: Add dark mode variables & utilities)
└─ root.tsx                      (VERIFY: Provider setup correct)
```

## Implementation Phases

### Phase 1: Foundation (No Breaking Changes)
- Create new SSR-safe ThemeContext with hydration handling
- Add system preference detection (prefers-color-scheme)
- Add CSS variables to app.css
- Run tests to verify behavior

### Phase 2: Consolidation
- Remove duplicate useTheme from hooks/
- Update all imports to use context export
- Verify no build errors

### Phase 3: Component Refactoring
- Update Navbar: remove propTheme fallback, use CSS vars for inline styles
- Update ProgressIllustration: use context for state, CSS vars for styling
- Update LogoCarousel: ensure proper context usage
- Update other components: replace theme conditionals with CSS classes

### Phase 4: Polish
- Add smooth transitions between themes
- Test theme persistence across sessions
- Test system preference detection
- Visual regression testing

---

## Detailed Task Breakdown

### T101: Analyze Current Theme State
- [x] Read ThemeContext.tsx
- [x] Read useTheme.ts  
- [x] Check Navbar usage patterns
- [x] Document issues in audit.md

### T102: Design New ThemeContext
- **Goal**: SSR-safe, no flash, system preference aware
- **Changes**:
  - Use `useLayoutEffect` instead of `useEffect` for faster DOM updates
  - Implement `getInitialTheme()` to check: localStorage → system preference → 'light'
  - Add `useSystemPreference()` hook for prefers-color-scheme detection
  - Maintain backward-compatible API
- **Files**: app/context/ThemeContext.tsx
- **Test**: Verify no flash on page load, theme persists, system preference detected

### T103: Create CSS Variable System
- **Goal**: Move styling from JSX to CSS
- **Changes**:
  - Add CSS custom properties to :root for both light and dark modes
  - Define variables for: bg-primary, bg-secondary, text-primary, text-secondary, etc.
  - Create .light and .dark CSS rule sets
- **Files**: app/app.css
- **Test**: Verify variables apply correctly to document root

### T104: Refactor Navbar Component
- **Goal**: Remove propTheme, use CSS variables
- **Changes**:
  - Remove `theme: propTheme` prop
  - Remove inline backgroundColor/boxShadow style overrides
  - Use CSS classes and variables instead
  - Keep toggleTheme() functionality
- **Files**: app/components/Shared/Navbar.tsx
- **Test**: Button still toggles, styles still match dark/light modes

### T105: Update Imports (Delete Duplicate Hook)
- **Goal**: Consolidate useTheme export
- **Changes**:
  - Export useTheme from ThemeContext.tsx (already does)
  - Delete app/hooks/useTheme.ts
  - Update all imports pointing to hooks/useTheme to use context instead
- **Files**: 
  - app/hooks/useTheme.ts (DELETE)
  - app/components/CustomDev/*.tsx (UPDATE imports)
  - app/components/Utility/*.tsx (UPDATE imports)
- **Test**: Build succeeds, no import errors

### T106: Refactor ProgressIllustration Component
- **Goal**: Use CSS variables for colors where possible
- **Changes**:
  - Keep theme context for dynamic color logic
  - Extract hardcoded colors to CSS variables or utilities
  - Reduce inline theme conditionals
- **Files**: app/components/Utility/ProgressIllustration.tsx
- **Test**: Visual regression (colors match before/after)

### T107: Update Other Components Using Theme
- **Goal**: Consistency across codebase
- **Changes**:
  - Review CustomDevHero.tsx and others
  - Replace redundant theme === 'dark' ? 'color-dark' : 'color-light' patterns
  - Use CSS utilities and dark: prefix where applicable
- **Files**: app/components/CustomDev/*.tsx, others
- **Test**: Visual regression

### T108: Hydration & Persistence Testing
- **Goal**: Verify no flash, persistence, system preference
- **Test Cases**:
  - [ ] Load with localStorage theme = 'dark' → no flash
  - [ ] Load with localStorage theme = 'light' → no flash
  - [ ] Clear localStorage, system pref = dark → loads dark
  - [ ] Clear localStorage, system pref = light → loads light
  - [ ] Toggle theme → localStorage updates
  - [ ] Refresh page → theme persists
  - [ ] Multiple tabs → theme syncs across tabs (if needed)
- **Files**: Manual browser testing + consider e2e test

### T109: Documentation & Cleanup
- **Goal**: Update README and inline comments
- **Changes**:
  - Document new ThemeContext behavior
  - Add system preference detection details
  - Remove outdated comments
  - Add example of CSS variable usage
- **Files**: README.md, code comments

---

## Success Criteria

- ✓ No flash of wrong theme on page load
- ✓ System preference detected on first visit
- ✓ Theme persists across sessions
- ✓ Navbar uses CSS variables, not inline styles
- ✓ All components use context (no duplicate hooks)
- ✓ All tests pass
- ✓ Visual regression: no color changes from current state
- ✓ Build succeeds, no TypeScript errors

---

## Risks & Mitigation

| Risk | Mitigation |
|------|-----------|
| Visual regression due to CSS variable changes | Create visual regression test baseline before changes |
| Flash still occurs | Use `useLayoutEffect` + remove mounted state workaround |
| Component breaks due to import changes | Run full build test after T105 |
| localStorage/system pref detection fails | Add fallback to 'light' and error logging |
| System preference not detected in older browsers | Graceful degradation: default to localStorage or 'light' |

---

## Timeline Estimate

- Phase 1 (Foundation): ~4 hours
- Phase 2 (Consolidation): ~1 hour  
- Phase 3 (Components): ~3 hours
- Phase 4 (Polish + Testing): ~2 hours
- **Total**: ~10 hours (can be done incrementally)

---

## Dependencies

- None (no new packages needed)
- React 18+ (already have)
- React Router V7 (already have)

---

## Post-Refactor Enhancements (Not in Scope)

- [ ] Theme toggle animation/transition
- [ ] Theme change toast notification
- [ ] Keyboard shortcut for theme toggle (e.g., Ctrl+Shift+L)
- [ ] Theme preference analytics
- [ ] Query param override for testing (?theme=dark)
- [ ] Storybook dark mode integration
