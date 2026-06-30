# Odontología Integral Córdoba Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-conversion, medical-authority landing page for Odontología Integral Córdoba.

**Architecture:** A modular React application using a section-based assembly approach. Each section of the conversion funnel is isolated into its own component for independent styling and animation.

**Tech Stack:** React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui.

## Global Constraints
- **Framework:** React + Vite + TypeScript.
- **Styling:** TailwindCSS.
- **Palette:** Primary `#0A2540`, Secondary `#F0F9FF`, Accent `#25D366`, Base `#FFFFFF`, Muted `#64748B`.
- **Typography:** Montserrat (Display), Inter (Body).
- **Performance:** Target LCP < 1.2s.
- **Mobile:** Touch targets min 44x44px, mobile-first design.
- **Components:** Prioritize shadcn/ui and Magic MCP.

---

### Task 1: Theme & Constants Setup

**Files:**
- Modify: `client/src/const.ts`

**Interfaces:**
- Produces: `SITE_CONTENT` object containing all copy, services, and theme tokens.

- [ ] **Step 1: Define the brand tokens and content structure in `const.ts`**
```typescript
export const SITE_CONFIG = {
  colors: {
    primary: '#0A2540',
    secondary: '#F0F9FF',
    accent: '#25D366',
    muted: '#64748B',
  },
  navLinks: [
    { label: 'Servicios', href: '#services' },
    { label: 'Casos', href: '#gallery' },
    { label: 'Contacto', href: '#contact' },
  ],
  hero: {
    title: 'Recuperá la seguridad de tu sonrisa con la odontología más avanzada de Córdoba',
    subtitle: 'Cuidado dental premium donde la tecnología de vanguardia se encuentra con la calidez humana.',
    cta: 'Quiero una consulta de evaluación'
  },
  services: [
    { id: 'implantes', title: 'Implantes Dentales', desc: 'Restauración total con materiales biocompatibles.', icon: 'Zap' },
    { id: 'ortodoncia', title: 'Ortodoncia Invisible', desc: 'Alineación perfecta sin brackets visibles.', icon: 'Smile' },
    { id: 'blanqueamiento', title: 'Blanqueamiento Pro', desc: 'Resultados brillantes en una sola sesión.', icon: 'Sparkles' },
    { id: 'estetica', title: 'Diseño de Sonrisa', desc: 'Armonía facial y dental personalizada.', icon: 'Palette' },
  ]
};
```

- [ ] **Step 2: Commit**
```bash
git add client/src/const.ts
git commit -m "chore: setup site constants and brand tokens"
```

### Task 2: Layout Foundation (Navbar & Footer)

**Files:**
- Create: `client/src/components/layout/Navbar.tsx`
- Create: `client/src/components/layout/Footer.tsx`
- Modify: `client/src/App.tsx` (or `pages/Home.tsx`)

**Interfaces:**
- Consumes: `SITE_CONFIG` from `const.ts`.

- [ ] **Step 1: Implement `Navbar.tsx` with sticky blur and Montserrat font**
```tsx
// Using shadcn/ui components for the button
import { Button } from "@/components/ui/button";
// ... render nav with backdrop-blur-md bg-white/70, links from SITE_CONFIG
```

- [ ] **Step 2: Implement `Footer.tsx` with NAP and final CTA**
```tsx
// Render address, phone, and strong closing statement
```

- [ ] **Step 3: Integrate both into `Home.tsx`**

- [ ] **Step 4: Commit**
```bash
git add client/src/components/layout/ Navbar.tsx Footer.tsx client/src/pages/Home.tsx
git commit -m "feat: implement base layout (navbar and footer)"
```

### Task 3: High-Impact Hero Section

**Files:**
- Create: `client/src/components/sections/Hero.tsx`
- Modify: `client/src/pages/Home.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG.hero`.

- [ ] **Step 1: Build Hero layout with a 2-column grid (Text | Image)**
- [ ] **Step 2: Implement the WhatsApp CTA button using the `#25D366` accent color**
- [ ] **Step 3: Add a fade-in animation using `framer-motion` for the headline**
```tsx
<motion.h1 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="font-display text-5xl font-extrabold text-[#0A2540]"
>
  {SITE_CONFIG.hero.title}
</motion.h1>
```

- [ ] **Step 4: Commit**
```bash
git add client/src/components/sections/Hero.tsx client/src/pages/Home.tsx
git commit -m "feat: implement high-conversion hero section"
```

### Task 4: Trust Stack & Bento Services

**Files:**
- Create: `client/src/components/sections/TrustBar.tsx`
- Create: `client/src/components/sections/ServicesBento.tsx`
- Modify: `client/src/pages/Home.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG.services`.

- [ ] **Step 1: Create `TrustBar.tsx` with a simple flex row of stats**
- [ ] **Step 2: Implement `ServicesBento.tsx` using a CSS grid with `rounded-3xl`**
- [ ] **Step 3: Add hover scale effects using `framer-motion` for the bento cards**
- [ ] **Step 4: Commit**
```bash
git add client/src/components/sections/TrustBar.tsx client/src/components/sections/ServicesBento.tsx
git commit -m "feat: add trust stack and services bento grid"
```

### Task 5: Transformation Gallery (Before & After)

**Files:**
- Create: `client/src/components/sections/TransformationGallery.tsx`
- Modify: `client/src/pages/Home.tsx`

**Interfaces:**
- Produces: Interactive slider component.

- [ ] **Step 1: Implement the "Before/After" image slider logic (input range for overlay)**
- [ ] **Step 2: Style the slider with a "Glassmorphism" handle**
- [ ] **Step 3: Commit**
```bash
git add client/src/components/sections/TransformationGallery.tsx
git commit -m "feat: implement interactive transformation gallery"
```

### Task 6: Empathy & Social Proof Sections

**Files:**
- Create: `client/src/components/sections/Experience.tsx`
- Create: `client/src/components/sections/Testimonials.tsx`
- Modify: `client/src/pages/Home.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG` for text content.

- [ ] **Step 1: Build `Experience.tsx` emphasizing "Pain-free" care with clinic photos**
- [ ] **Step 2: Build `Testimonials.tsx` using shadcn/ui cards to simulate Google Reviews**
- [ ] **Step 3: Commit**
```bash
git add client/src/components/sections/Experience.tsx client/src/components/sections/Testimonials.tsx
git commit -m "feat: add experience and social proof sections"
```

### Task 7: FAQ & Final Conversion

**Files:**
- Create: `client/src/components/sections/Faq.tsx`
- Modify: `client/src/pages/Home.tsx`

**Interfaces:**
- Consumes: `SITE_CONFIG` (FAQ list).

- [ ] **Step 1: Implement `Faq.tsx` using `shadcn/ui` Accordion**
- [ ] **Step 2: Add final high-urgency CTA section above the footer**
- [ ] **Step 3: Commit**
```bash
git add client/src/components/sections/Faq.tsx
git commit -m "feat: implement faq and final conversion section"
```

### Task 8: Final Polish & Vercel Audit

**Files:**
- Modify: `client/src/index.css` (global fonts)
- Review: All components

- [ ] **Step 1: Ensure Montserrat and Inter fonts are correctly loaded and applied**
- [ ] **Step 2: Run accessibility check (aria-labels, contrast)**
- [ ] **Step 3: Verify LCP and mobile touch target sizes (min 44px)**
- [ ] **Step 4: Final Commit**
```bash
git add .
git commit -m "perf: final polish and accessibility audit"
```
