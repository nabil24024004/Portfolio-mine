# Architecture & Decisions

This document explains **how** the portfolio is structured and the main design/technical decisions behind it.

---

## 1. High-Level Architecture

- **Frontend only (for now)**
  - Single-page portfolio built with **React + Vite + TypeScript**
  - No backend or database yet; all data is currently static in components
  - Future backend features (contact form, content storage) will use **Lovable Cloud**

- **Routing & Structure**
  - `src/main.tsx` mounts the React app
  - `src/pages/Index.tsx` is the main portfolio page
  - Sections are composed from `src/components/sections/*`:
    - `HeroSection`
    - `AboutSection`
    - `SkillsSection`
    - `ServicesSection`
    - `WorkSection`
    - `ContactSection`
    - `FooterSection`
  - `PageShell` provides shared layout structure (navigation, main content wrapper, footer)
  - `NavLink` abstracts navigation styling/behavior

- **UI Layer**
  - **Tailwind CSS** for utility-first styling
  - **shadcn-ui** for accessible, themeable base components (button, card, navigation, dialogs, etc.)
  - Centralized design tokens via `index.css` and `tailwind.config.ts` using semantic variables (e.g., `--background`, `--foreground`, `--primary`)

---

## 2. Styling & Design System Decisions

1. **Dark Theme as Default**
   - Portfolio identity leans into a **dark, cinematic**, Apple-inspired aesthetic
   - Backgrounds and surfaces use the semantic `--background` and `--muted` tokens with layered **glassmorphism** (blurred, translucent panels) and subtle glows

2. **Semantic Tokens, Not Raw Colors**
   - Components use Tailwind classes that map to semantic CSS variables (e.g., `bg-background`, `text-foreground`, `bg-primary`, glass surfaces via `bg-background/60` + borders/shadows)
   - _Why_: Easier to evolve the visual style and support future theme modes without rewriting components

3. **Typography**
   - Display/heading font chosen for a **technical yet expressive** character (inspired by Space Grotesk-style grotesk fonts)
   - Clear heading hierarchy: one main H1 in hero, H2 per section
   - Line length and spacing tuned for good readability on dark backgrounds

4. **Motion & Interactions**
   - Principle: **subtle, purposeful motion**
   - Hover and focus states on buttons, cards, and navigation, with glass panels responding via light shifts rather than heavy animations
   - Scroll-based section reveals implemented via a custom `useScrollReveal` hook and smooth scroll-spy behavior for the navbar

---

## 3. Component & Layout Decisions

1. **Section Components**
   - Each logical section of the page is its own React component under `src/components/sections/`
   - _Why_: Encourages focused, readable components and easy reordering/refactoring of sections

2. **Layout Shell**
   - `PageShell` encapsulates shared structure: header/navigation + main content + footer
   - _Why_: Keeps pages consistent, makes it easier to add a blog or additional pages later without duplicating layout code

3. **Responsive Design**
   - Layout uses Tailwind’s responsive breakpoints for:
     - Hero split layout (text + profile image)
     - Stack/column changes between mobile and desktop
   - _Goal_: Mobile-first, then refine for tablet and desktop while preserving visual impact

4. **Hero Image Treatment**
   - Profile image (`profile-azwad.png`) is given prominence with adjusted size and vertical offset
   - Negative margins and height classes are used to lift the image visually and create a **floating** effect
   - Future enhancements: gradient ring, glow, or animated outline

---

## 4. Data & Content Strategy

- **Current State**
  - Static text and content directly in React components
  - Fast to iterate and change while defining tone and structure

- **Planned Evolution**
  - Extract major content (projects, services, skills) into **typed config objects** within the frontend
  - Optional: use **Lovable Cloud** for persistent storage of projects, blog posts, etc., when needed

---

## 5. SEO & Accessibility Decisions

1. **SEO**
   - Single H1 in hero describing Azwad’s role and value
   - Each main section uses descriptive H2 headings
   - Semantic HTML elements used where possible: `<header>`, `<main>`, `<section>`, `<footer>`
   - Plan to add:
     - Page `<title>` and meta description in `index.html`
     - Open Graph tags for better social sharing
     - JSON-LD structured data for `Person` and possibly `CreativeWork` (projects)

2. **Accessibility**
   - Buttons, links, and interactive components sourced from shadcn-ui/Radix primitives (keyboard & screen-reader friendly)
   - Color contrast aligned with dark theme best practices using the semantic tokens
   - Alt text on primary images (profile image, key illustrations)

---

## 6. Future Architectural Directions

- Introduce **Lovable Cloud** when backend features are needed:
  - Contact form submission and email handling
  - Database tables for projects, blog posts, or testimonials
  - Authentication if an admin-only editing interface is desired
- Modularize sections further into reusable UI patterns (cards, grids, layout primitives)
- Optionally add a theming system (light/dark) with persisted user preference.
