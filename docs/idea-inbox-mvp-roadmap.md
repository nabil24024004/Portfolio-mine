# Idea Inbox & MVP Roadmap

## 1. What We’re Building

A **modern, dark-themed, animated personal portfolio** for **Sheikh Azwad Abrar** that:

- Communicates his hybrid profile: **UI/UX & product design + web development + avionics engineering**
- Showcases work, skills, and process in a way that feels **premium, precise, and interactive**
- Is easy to iterate on: content, sections, visuals, and animations can evolve over time

The portfolio is a **single-page app with multiple sections** (Home, About, Skills, Services, Work, Contact) running on **React + Vite + TypeScript + Tailwind + shadcn-ui**.

---

## 2. Current Scope (MVP)

The MVP focuses on:

1. **Hero / Home**
   - Dark, atmospheric hero with gradient background
   - Prominent profile image with glow/halo
   - Strong headline describing Azwad’s role
   - Tagline: engineering precision + creative innovation
   - Primary CTAs: **“See My Work”** and **“Download CV”**

2. **About**
   - Education: **BSc Avionics Engineering @ Aviation and Aerospace University Bangladesh (Expected 2028)**
   - Short narrative connecting avionics, engineering mindset, and design
   - Emphasis on human-centered, systematic design thinking

3. **Skills & Expertise**
   - Icon-based cards with hover states
   - Core skills: UI/UX, Product Design, Web Design & Dev, Prototyping, Figma, Graphic Design

4. **Services**
   - Clear, scannable offering cards (e.g., Product Design, Web Experiences, Design Systems)

5. **Selected Work / Projects**
   - Highlight a small curated set of projects (not a full case-study system yet)
   - Emphasis on role, impact, and tech/skills used

6. **Contact**
   - Simple, clear call to connect (email, social links, etc.)

7. **Navigation & Layout**
   - Sticky / clear navigation
   - Smooth scroll between sections
   - Fully responsive layout (mobile-first)

8. **Styling & Motion**
   - Cohesive dark theme
   - Subtle motion (hover, scroll-in) without hurting readability
   - SEO basics: title, meta description, h1, semantic structure


---

## 3. What Already Works (Baseline)

As of now, the app includes:

- **Routing & Shell**
  - React + Vite + TypeScript application shell
  - A main landing page (`/`) rendered via `Index.tsx`
  - Section components in `src/components/sections/` (Hero, About, Skills, Services, Work, Contact, Footer)
  - A layout wrapper (`PageShell`) and `NavLink` component for navigation

- **UI & Design System**
  - Tailwind CSS configured with a design system (semantic tokens via `index.css` + `tailwind.config.ts`)
  - shadcn-ui components (Button, Card, etc.) available and customizable
  - Dark-theme oriented styling for the hero and core sections

- **Content**
  - Hero section with Azwad’s name, roles, and CTAs
  - About, Skills, Services, Work, and Contact sections already wired into the layout
  - Profile image asset (`profile-azwad.png`) used in the hero

- **Basic SEO & Structure**
  - `index.html` with base head tags
  - Semantic section components and hierarchy started (header/main/footer, section components)


---

## 4. Idea Inbox (Future Enhancements)

These are **ideas, not commitments**. They feed the roadmap.

### Visual & Interaction
- Typographic refinements (hero H1 effects, animated gradients, motion)
- Parallax or subtle particle background in hero
- Scroll-based section reveal animations (baseline implemented via `useScrollReveal`, refine timing/easing)
- A theme toggle (dark/light) that keeps the dark theme as primary
- Apple-style **glassmorphism** across navbar and key cards/sections (implemented for MVP, continue to refine subtleties)

### Content & Storytelling
- In-depth **case studies** page or modal for selected projects
- Dedicated **Process / How I Work** section
- A **Timeline** for education, projects, and milestones

### Functionality
- Contact form with validation and backend handling (via Lovable Cloud)
- Simple **blog / notes** section for UX and engineering insights
- Downloadable, versioned CV managed via a config file

### Tech & Performance
- Advanced SEO (Open Graph tags, JSON-LD for person/profile)
- Analytics integration for portfolio traffic
- Image optimization / lazy loading for all non-critical assets


---

## 5. MVP Roadmap

### Phase 1 – Solid Foundation (DONE / IN PROGRESS)

- [x] Set up React + Vite + TypeScript project
- [x] Integrate Tailwind CSS and shadcn-ui
- [x] Establish dark-themed base layout (header, main, footer)
- [x] Implement hero section with profile image and CTAs
- [x] Add About, Skills, Services, Work, and Contact sections as separate components
- [x] Basic navigation and smooth layout flow

### Phase 2 – Visual Polish & UX Refinement (CURRENT FOCUS)

- [x] Fine-tune spacing and layout (hero padding, image placement, removal of useless space)
- [x] Establish cohesive **Apple-style glassmorphism** treatment for navbar and key cards/sections
- [ ] Apply distinctive **hero H1 effect** (matching the uploaded reference video)
- [ ] Refine section typography hierarchy (H1/H2/H3, line lengths, contrast)
- [ ] Improve responsive behavior for all breakpoints (especially hero + image)
- [ ] Add micro-interactions (hover states on cards and buttons)

### Phase 3 – Content Depth & Discoverability

- [ ] Expand project/work section with better cards and potential detail views
- [ ] Flesh out About content with philosophy, avionics + design narrative
- [ ] Add process/approach section or integrate into About
- [ ] Enhance SEO: per-page meta, OG tags, richer structured data

### Phase 4 – Interactivity & Backend (Optional, via Lovable Cloud)

- [ ] Implement contact form with backend email/send logic
- [ ] Add simple CMS-like structure using a database for projects and content
- [ ] Add basic analytics/dashboard for portfolio views (if desired)


---

## 6. How to Use This Roadmap

- Treat **Phase 1–2** as the critical MVP – keep them tight and polished.
- Log completed items and changes in `development-log.md`.
- Move items from **Idea Inbox** into the roadmap when they become priorities.
