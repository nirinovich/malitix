git reset --hard HEAD && git clean -fd# Feature Specification: React Router V7 Landing Page Migration

**Feature Branch**: `001-rr7-landing-page-migration`  
**Created**: 2026-01-12  
**Status**: Active  
**Input**: Migrate legacy React landing page to React Router V7 framework while maintaining identical UI/UX and improving internal code quality and performance.

---

## User Scenarios & Testing

### User Story 1 - Browse Landing Page and Navigate Services (Priority: P1)

A visitor arrives at the landing page, sees the hero section and featured services, and wants to explore different service offerings. They navigate to the Custom Development service page to learn about offerings.

**Why this priority**: This is the core user journey. Visitors must be able to navigate the entire site without any visual differences from the existing experience. Navigation is the foundation for all other features.

**Independent Test**: Can be fully tested by: Visitor loads home page → sees hero section → clicks navigation menu → navigates to service page → page loads with correct content. Delivers: Confirmed navigation works identically to legacy version.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the home page, **When** the page loads, **Then** the hero section displays with correct images, text, and animations
2. **Given** a visitor is on the home page, **When** they click "Services" in the navigation menu, **Then** a dropdown appears with service options (Custom Dev, Mobile App, SI Refonte, Sprint)
3. **Given** a visitor clicks on "Custom Development", **When** the page transitions, **Then** the URL changes to `/custom-dev` and the Custom Development page loads with identical layout and styling
4. **Given** a visitor is on any service page, **When** they click the site logo, **Then** they return to the home page
5. **Given** a visitor uses the browser back button, **When** they navigate away from a page, **Then** they return to the previous page correctly

---

### User Story 2 - Switch between Light and Dark Themes (Priority: P1)

A visitor prefers dark mode for reduced eye strain. They click the theme toggle button, the entire page transitions to dark mode smoothly, and their preference is remembered the next time they visit.

**Why this priority**: Theme switching is a critical feature that appears on every page. It must work identically to the legacy version with no visual flash or layout changes.

**Independent Test**: Can be fully tested by: Visitor loads page → clicks theme toggle → page transitions to dark mode → refreshes page → dark mode is still applied. Delivers: Theme persistence works perfectly.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the home page in light mode, **When** they click the theme toggle button, **Then** the entire page transitions to dark mode without any flash or layout shift
2. **Given** a visitor is in dark mode, **When** they refresh the page, **Then** dark mode is still applied (persisted from localStorage)
3. **Given** a visitor navigates between pages, **When** they switch pages, **Then** the theme setting follows them across all pages
4. **Given** a visitor switches to dark mode, **When** images or elements have theme-specific variants, **Then** they render appropriately for dark mode
5. **Given** a visitor toggles between light and dark, **When** they toggle multiple times, **Then** transitions are smooth with no flickering

---

### User Story 3 - Submit a Contact Form with Validation (Priority: P1)

A visitor is interested in the Custom Development service. They scroll down to find the contact form, fill in their information (name, email, message), and submit. The form validates their inputs and shows errors if required fields are missing or invalid.

**Why this priority**: Forms are critical conversion tools. They must work identically to the legacy version, validating inputs and providing clear error messages.

**Independent Test**: Can be fully tested by: Visitor scrolls to form → fills in valid data → submits → form validates and sends. Delivers: Forms work exactly like the legacy version.

**Acceptance Scenarios**:

1. **Given** a visitor reaches the contact form, **When** they leave required fields empty, **Then** validation errors appear below each empty field
2. **Given** a visitor enters an invalid email, **When** they attempt to submit, **Then** an error message appears: "Please enter a valid email address"
3. **Given** a visitor fills in all required fields correctly, **When** they click the submit button, **Then** the form submits successfully and shows a success message
4. **Given** a form is submitted, **When** the submission completes, **Then** the form either clears or shows a thank you message (depending on legacy behavior)
5. **Given** a visitor opens the form, **When** they interact with fields, **Then** real-time validation runs as they type

---

### User Story 4 - View Smooth Scroll Animations and Parallax Effects (Priority: P2)

A visitor scrolls through a service page and experiences smooth animations on the hero section, parallax effects on background images, and cards that animate into view as they scroll past them.

**Why this priority**: Animations provide visual polish and user engagement. They must work at 60fps on mobile without janky performance.

**Independent Test**: Can be fully tested by: Visitor loads page → scrolls slowly → sees animations trigger at correct points → no jank on mobile device. Delivers: Animations perform smoothly.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls down a page, **When** they reach sections with scroll-triggered animations, **Then** elements animate into view smoothly (e.g., fade in, slide up)
2. **Given** a visitor scrolls on the hero section with parallax, **When** they scroll, **Then** the background image moves slower than the foreground at a noticeable but smooth ratio
3. **Given** a visitor opens the page on a mobile device, **When** they scroll through animated sections, **Then** animations run at 60fps with no visible stuttering
4. **Given** a visitor scrolls back up, **When** they re-enter an animated section, **Then** the animation plays again smoothly

---

### User Story 5 - View Logo Carousel and Testimonials (Priority: P2)

A visitor views the logo carousel showing client logos rotating automatically. They also see a testimonial section with client quotes that rotate or can be navigated manually.

**Why this priority**: Trust-building elements are important for conversion. They must work identically to the legacy version.

**Independent Test**: Can be fully tested by: Visitor views carousel → logos rotate automatically → testimonials display correctly. Delivers: Carousels function like legacy version.

**Acceptance Scenarios**:

1. **Given** a visitor views the logo carousel, **When** the page loads, **Then** logos appear in a carousel that automatically rotates every 3-5 seconds
2. **Given** a visitor views the testimonial section, **When** the page loads, **Then** client testimonials display with rotating or navigation controls
3. **Given** a visitor watches the carousel, **When** it rotates, **Then** the transition between items is smooth and professional
4. **Given** a carousel is displayed, **When** a visitor clicks navigation arrows, **Then** they can manually advance to the next/previous item

---

### User Story 6 - Access Legal Pages and SEO Content (Priority: P2)

A visitor wants to read the Privacy Policy or Legal Notice. They navigate to these pages using the footer links, and the content loads correctly with proper meta tags for search engines.

**Why this priority**: Legal compliance and SEO are important. Pages must load correctly with proper metadata.

**Independent Test**: Can be fully tested by: Visitor clicks footer link → legal page loads → correct meta tags are in HTML. Delivers: Legal pages and SEO are properly configured.

**Acceptance Scenarios**:

1. **Given** a visitor clicks "Privacy Policy" in the footer, **When** the page loads, **Then** the URL changes to `/privacy-policy` and correct content displays
2. **Given** a search engine crawls the site, **When** it indexes pages, **Then** each page has correct meta title, description, and Open Graph tags
3. **Given** a user visits a page, **When** the page loads, **Then** the browser title and meta description match the expected content

---

### User Story 7 - Experience Responsive Design on Mobile, Tablet, and Desktop (Priority: P2)

A visitor accesses the landing page from an iPhone, iPad, and desktop computer. The layout, typography, buttons, and spacing adapt perfectly to each screen size with no horizontal scroll and no layout shifts.

**Why this priority**: Responsive design ensures all visitors have a good experience regardless of device. It directly impacts conversion rates.

**Independent Test**: Can be fully tested by: Load page on mobile (320px) → layout correct → load on tablet (768px) → load on desktop (1920px). Delivers: Responsive design works on all devices.

**Acceptance Scenarios**:

1. **Given** a visitor opens the page on a mobile device (320px width), **When** the page loads, **Then** text is readable, buttons are tap-friendly (min 44x44px), and no horizontal scroll appears
2. **Given** a visitor opens the page on a tablet (768px), **When** the page loads, **Then** layout optimizes for tablet with appropriate spacing and readability
3. **Given** a visitor opens the page on desktop (1920px+), **When** the page loads, **Then** layout uses full width efficiently with appropriate max-widths for readability
4. **Given** content is displayed, **When** the page loads, **Then** no layout shift occurs that changes the position of content
5. **Given** a visitor resizes their browser window, **When** they resize from desktop to mobile width, **Then** the layout responds smoothly without breaking

---

### User Story 8 - Access the Site with Keyboard Navigation and Screen Reader (Priority: P3)

A visitor with accessibility needs navigates the site using only the keyboard. They can tab through interactive elements in a logical order, and screen reader users hear descriptive text for all buttons and links.

**Why this priority**: Accessibility is legally required and ethically important. WCAG 2.1 AA compliance ensures inclusive experience.

**Independent Test**: Can be fully tested by: User navigates site with Tab key → all interactive elements reachable → screen reader announces content correctly. Delivers: Site meets WCAG AA accessibility standards.

**Acceptance Scenarios**:

1. **Given** a visitor uses the Tab key to navigate, **When** they tab through the page, **Then** focus order is logical and visible focus indicators appear on all interactive elements
2. **Given** a visitor uses a screen reader, **When** they navigate the page, **Then** all buttons have descriptive labels (not just "Click here")
3. **Given** a visitor with colorblindness views the page, **When** they see color-coded information, **Then** information is also conveyed by text or icons (not color alone)
4. **Given** a form is displayed, **When** a visitor with a screen reader encounters it, **Then** form labels are properly associated with inputs

---

### User Story 9 - Experience Fast Page Load and Smooth Scrolling (Priority: P2)

A visitor on a 4G mobile connection loads the landing page. The page appears within 3 seconds, hero section displays quickly, and below-the-fold images load lazily. Scrolling is smooth without jank.

**Why this priority**: Fast performance directly impacts conversion rates and user satisfaction. Core Web Vitals must be met.

**Independent Test**: Can be fully tested by: Load page on 4G throttling → measure load time → scroll page → measure performance. Delivers: Page meets performance targets.

**Acceptance Scenarios**:

1. **Given** a visitor loads the page on a 4G connection, **When** the page starts loading, **Then** the hero section and main content appear within 3 seconds
2. **Given** a visitor on mobile with images below the fold, **When** they load the page, **Then** off-screen images load lazily as needed (not on initial load)
3. **Given** a visitor scrolls through the page, **When** they scroll, **Then** scrolling is smooth at 60fps without stuttering on mobile devices
4. **Given** the page loads, **When** content appears, **Then** cumulative layout shift (CLS) is minimal - content doesn't jump around

---

## Edge Cases

- What happens when a theme-related feature is used and localStorage is disabled? → Theme preference loads from user's OS/browser defaults and applies without error
- How does the system handle users with network connection interruptions? → Page loads what it can; images gracefully degrade; forms show appropriate error messages
- What happens when a carousel or animation library fails to load? → Carousels display in static mode; animations degrade gracefully to instant transitions
- How are forms handled when network fails during submission? → Error message displays; form data is retained; user can retry
- What happens on devices with motion sensitivity enabled? → Animations respect `prefers-reduced-motion` setting; animations are disabled or simplified

---

## Requirements

### Functional Requirements

- **FR-001**: System MUST maintain pixel-perfect visual parity with the legacy version. No visual differences in layout, spacing, typography, colors, or imagery are acceptable.
- **FR-002**: System MUST support theme toggling between light and dark modes. Theme preference must persist in localStorage and load before initial render to prevent flash of wrong theme.
- **FR-003**: System MUST implement file-based routing with routes for Home (/), Services (/custom-dev, /mobile-app, /si-refonte, /sprint), and Legal (/privacy-policy, /legal-notice) pages.
- **FR-004**: System MUST display all pages with responsive design that works flawlessly on mobile (320px–480px), tablet (768px–1024px), and desktop (1920px+) viewports without horizontal scroll.
- **FR-005**: System MUST preserve all existing animations (hero parallax, scroll-triggered animations, transitions) and run them at 60fps on mobile devices without jank.
- **FR-006**: System MUST include contact forms with real-time validation. Validation rules must match legacy behavior. Error messages must display clearly below invalid fields.
- **FR-007**: System MUST display logo carousels and testimonial sections with automatic rotation. Rotation should be smooth and professional.
- **FR-008**: System MUST provide all metadata for SEO including meta title, description, Open Graph tags, and structured data for each page.
- **FR-009**: System MUST load initial content within 3 seconds on 4G connection. Below-the-fold images must load lazily.
- **FR-010**: System MUST support keyboard navigation throughout the entire site. All interactive elements must be reachable via Tab key in logical order.
- **FR-011**: System MUST be compatible with screen readers. All buttons, links, and form fields must have descriptive labels.
- **FR-012**: System MUST respect WCAG 2.1 AA accessibility standards including color contrast ratios and form accessibility.
- **FR-013**: System MUST respect `prefers-reduced-motion` setting in user's browser. Animations must be disabled or significantly simplified for users with motion sensitivity.
- **FR-014**: System MUST prevent Cumulative Layout Shift (CLS) during page load. Content must not shift or jump as images and resources load.
- **FR-015**: System MUST handle form submission errors gracefully. If network fails, error message displays and form data is retained for retry.

### Key Entities

- **Pages**: Home, CustomDevelopment, MobileAppDevelopment, SIRefonte, SprintCommando, PrivacyPolicy, LegalNotice, NotFound
- **Components**: Navbar, Footer, Hero, CTA Button, Form, Logo Carousel, Testimonial Carousel, ThemeToggle, Layout
- **Theme**: Light/Dark mode configuration stored in localStorage
- **Forms**: Contact form with fields for name, email, message; includes validation rules and submission handler

---

## Success Criteria

### Measurable Outcomes

- **SC-001**: Migration completes with zero visual regressions. No pixel-level differences between legacy and new versions (verified by visual regression tests).
- **SC-002**: All existing features work identically to or better than legacy version. No feature regressions detected during QA.
- **SC-003**: Lighthouse performance score is ≥90 on desktop and ≥85 on mobile (averaged across all pages).
- **SC-004**: Core Web Vitals metrics are in "Good" range:
  - Largest Contentful Paint (LCP) < 2.5 seconds
  - First Input Delay (FID) < 100 milliseconds  
  - Cumulative Layout Shift (CLS) < 0.1
- **SC-005**: Page load time on 4G connection is ≤3 seconds for initial render of hero section.
- **SC-006**: All animations run at 60fps on mobile devices without visible stuttering.
- **SC-007**: Bundle size (gzipped) is <200kb, matching or exceeding legacy performance.
- **SC-008**: Accessibility audit (WCAG 2.1 AA) passes with 100% compliance. All pages are keyboard navigable; screen readers work correctly.
- **SC-009**: Form validation works correctly with clear error messages. Users cannot submit invalid data.
- **SC-010**: Theme switching is seamless with zero flash. Theme preference persists across browser sessions.
- **SC-011**: All pages render correctly on mobile (320px), tablet (768px), and desktop (1920px+) viewports. No horizontal scroll on any viewport.
- **SC-012**: Codebase is cleaner, more maintainable, and better documented than legacy version. Code review demonstrates improved organization and type safety.

---

## Assumptions

The following assumptions were made based on industry standards and common practices:

- **Browser Support**: Site must support modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+). Legacy browser support is not required.
- **Form Submission**: Forms submit to an existing backend endpoint. Response handling follows legacy patterns.
- **Image Formats**: Current image files (JPEG, PNG) remain in use. No migration to webp or other formats unless explicitly needed.
- **Analytics**: Existing analytics tracking code remains functional and compatible with new framework.
- **Hosting**: Site continues to be deployed to Firebase Hosting with existing CI/CD pipeline.
- **LocalStorage**: Browser's localStorage is available for theme preference persistence. Graceful fallback exists if disabled.
- **Network**: Core Web Vitals targets assume typical 4G mobile networks (not 3G or slow 2G).
- **Design System**: Current typography, spacing scale, and color palette remain unchanged. CSS architecture approach (global CSS, CSS modules, or similar) is preserved.
- **Animation Library**: If animations use existing library (e.g., Framer Motion), library is compatible with React Router V7.
- **Performance Budget**: Bundle size, load time, and animation performance must match or exceed legacy baseline.

---

## Glossary

| Term | Definition |
|------|-----------|
| **Cumulative Layout Shift (CLS)** | Measure of visual stability. Score < 0.1 means minimal unexpected layout changes during page load. |
| **Largest Contentful Paint (LCP)** | Time until the largest visible element (image or text block) renders. Target < 2.5s. |
| **First Input Delay (FID)** | Time between user interaction and browser response. Target < 100ms. |
| **WCAG 2.1 AA** | Web Content Accessibility Guidelines standard ensuring content is accessible to people with disabilities. |
| **File-Based Routing** | Automatic route generation based on file/folder structure in routes directory. |
| **Visual Regression** | Unintended visual changes to UI elements. Detected by comparing screenshots of legacy vs. new versions. |
| **Pixel-Perfect** | Design is identical at the pixel level. All spacing, sizing, and positioning matches exactly. |
| **60fps** | Frames per second. 60fps provides smooth animations; anything below appears janky to users. |
| **Lazy Loading** | Deferring load of resources (images, components) until they're needed (e.g., when scrolling into view). |
| **Theme Toggle** | Feature allowing users to switch between light and dark color schemes. |
| **Core Web Vitals** | Google's metrics for measuring user experience: LCP, FID, CLS. |

---

## Notes for Planning & Implementation

- **Specification Ratified**: This spec reflects the constitution's principles of UI Preservation, Type Safety, Performance, Accessibility, and Feature Consistency.
- **No Implementation Details**: This specification focuses on WHAT the feature must do and WHY, not HOW it will be built (technology stack, code structure, etc.). Those decisions belong in `/speckit.plan`.
- **Testability**: Each user story has been written to be independently testable and deliverable as an MVP increment.
- **Success Definition**: Success is achieved when a visitor cannot visually distinguish the new version from the legacy version, all existing features work flawlessly, and code quality has improved.

---

**Status**: Active Specification | **Last Updated**: 2026-01-12 | **Next Phase**: `/speckit.plan` for technical architecture

