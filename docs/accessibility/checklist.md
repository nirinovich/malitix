# Accessibility Checklist (WCAG 2.1 AA)

## 1. Perceivable

- [x] **Text Alternatives**: All non-text content (`img`, `svg`) has alternative text (`alt`, `aria-label`, or `aria-hidden`).
- [x] **Color Contrast**: Text has at least 4.5:1 contrast against background (3:1 for large text).
  - Implemented via `--brand-text` variable switching in `app.css`.
- [x] **Adaptable**: Content is presented in a meaningful order (HTML structure).

## 2. Operable

- [x] **Keyboard Accessible**: All functionality is available from a keyboard.
  - Focus indicators enabled (`outline` in `app.css`).
  - Skip to content link added in `root.tsx`.
- [x] **Enough Time**: Users can pause/stop moving content (Carousels have pause-on-hover/focus).
- [x] **Seizures and Physical Reactions**: No content flashes > 3 times/sec.
- [x] **Navigable**:
  - Skip link provided.
  - Headings and labels describe topic or purpose.
  - Focus order is logical.

## 3. Understandable

- [x] **Readable**: Language of page is set (`<html lang="en">`).
- [x] **Predictable**: Components appear and operate in predictable ways.
- [x] **Input Assistance**: Labels provided for inputs (`Form` components).

## 4. Robust

- [x] **Parsing**: HTML is valid (React JSX ensures structure).
- [x] **Name, Role, Value**: Standard HTML controls or ARIA roles used.
