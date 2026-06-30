# Odontología Integral Córdoba Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the highest-converting dental landing page in Córdoba using a "Premium Authority" hybrid approach.

**Architecture:** Single-page high-performance funnel. Pure HTML5 + Tailwind CSS (CDN) for instant load. Architecture focused on the "Trust Stack" (Empathy $\rightarrow$ Authority $\rightarrow$ Proof $\rightarrow$ Action).

**Tech Stack:** 
- HTML5 (Semantic)
- Tailwind CSS v3 (via CDN)
- Vanilla JS (ES6+)
- Google Fonts (Inter)
- Assets: WebP for images, SVG for icons.

## Global Constraints
- **Frameworks:** 🚫 NO React, Vue, Next.js, or any build step. Pure HTML only.
- **Performance:** Target LCP < 1.2s.
- **Accessibility:** Contrast AA/AAA (WCAG), semantic tags, focus states.
- **Visuals:** Premium minimalism, Blue-800 authority, Emerald-600 conversion.
- **Local SEO:** NAP consistency and semantic keywords for "Odontología en Córdoba".

---

## Task 1: Core Foundation & Global Styles
**Files:**
- Create: `index.html`
- Create: `css/style.css` (for custom overrides)

**Interfaces:**
- Produces: A valid HTML5 shell with Tailwind CDN, Inter font, and basic layout wrappers.

- [ ] **Step 1: Create basic HTML5 shell**
  - Implement `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.
  - Add `<title>Odontología Integral Córdoba | Excelencia en Salud Dental</title>`.
  - Meta tags for responsiveness and SEO.
- [ ] **Step 2: Integrate Tailwind CSS CDN and Google Fonts**
  - Add Tailwind CDN: `<script src="https://cdn.tailwindcss.com"></script>`.
  - Add Inter Font: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`.
- [ ] **Step 3: Configure Tailwind Theme**
  - Add `<script>` block for `tailwind.config` to define:
    - Colors: `blue-800` (authority), `sky-500` (clinical), `emerald-600` (conversion).
    - Font Family: `Inter` as default sans.
- [ ] **Step 4: Establish Global CSS (Optional/Minimal)**
  - Create `css/style.css` for custom animations (e.g., button pulse) and base resets.
- [ ] **Step 5: Verification via Chrome**
  - Run `python3 -m http.server 8000`.
  - Use `chrome` to verify the page loads and the Inter font is correctly applied.
- [ ] **Step 6: Commit**
  - `git add . && git commit -m "feat: setup core foundation and global styles"`

---

## Task 2: The Hook (Header & Hero)
**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: `tailwind.config` from Task 1.
- Produces: A fully responsive, high-conversion header and hero section.

- [ ] **Step 1: Component Extraction (MCP)**
  - Use `shadcn` MCP to find a professional "Landing Hero" or "Navbar" pattern.
  - Decompile the React/TSX logic into pure HTML/Tailwind.
- [ ] **Step 2: Implement Header**
  - Logo (left), Nav links (center), "Agendar Consulta" CTA (Right, Blue-800).
  - Responsive mobile menu (hamburger) using Vanilla JS.
- [ ] **Step 3: Implement Hero Section**
  - H1 with high-impact copy from Spec.
  - Sub-headline focusing on "Winning Bundle".
  - Primary CTA (Emerald-600) with pulse effect.
  - Trust Badge (Google Reviews).
- [ ] **Step 4: Visual Audit (Chrome)**
  - Verify mobile responsiveness (375px - 425px).
  - Check contrast for Emerald-600 vs White text.
- [ ] **Step 5: Commit**
  - `git add . && git commit -m "feat: implement high-conversion hero and navigation"`

---

## Task 3: Trust Engine (Empathy & Authority Blocks)
**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Layout from Task 2.
- Produces: Two high-impact sections: "Stress-Free" and "Digital Precision".

- [ ] **Step 1: Component Search (MCP)**
  - Use `magic` MCP to find "Feature Section" or "Bento Grid" layouts for authority blocks.
- [ ] **Step 2: Implement "Stress-Free" Block (Empathy)**
  - Visuals: Calm, clean, clinical.
  - Copy: Focused on removing fear.
  - Icons: Minimalist, thin-stroke.
- [ ] **Step 3: Implement "Digital Precision" Block (Authority)**
  - Visuals: Tech-forward, precision-oriented.
  - Copy: Focused on 3D scanning and digital planning.
- [ ] **Step 4: UI Review (web-design-guidelines)**
  - Audit spacing and typography against Vercel guidelines.
- [ ] **Step 5: Commit**
  - `git add . && git commit -m "feat: implement trust stack (empathy and authority blocks)"`

---

## Task 4: Service Catalog (High-End Grid)
**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Layout from Task 3.
- Produces: A grid of 6 professional service cards.

- [ ] **Step 1: Pattern Extraction (MCP)**
  - Use `shadcn` to find "Pricing" or "Service" card layouts.
- [ ] **Step 2: Implement the Grid**
  - Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
  - 6 Cards: Implantes, General, Pediatría, Endodoncia, Ortodoncia, Prótesis.
  - Hover effects: `hover:shadow-md transition-all duration-300`.
- [ ] **Step 3: Visual Audit (Chrome)**
  - Verify card alignment on tablet and mobile.
- [ ] **Step 4: Commit**
  - `git add . && git commit -m "feat: implement professional service catalog grid"`

---

## Task 5: Validation Layer (Social Proof)
**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Layout from Task 4.
- Produces: A "Results Gallery" and "Google Reviews Mirror".

- [ ] **Step 1: Component Search (MCP)**
  - Use `magic` to find a "Testimonial Carousel" or "Image Gallery" layout.
- [ ] **Step 2: Implement Before/After Gallery**
  - High-end presentation of clinical cases.
- [ ] **Step 3: Implement Google Reviews Section**
  - Mirroring the 5-star Google Maps look for instant trust.
- [ ] **Step 4: Commit**
  - `git add . && git commit -m "feat: implement social proof and results gallery"`

---

## Task 6: The Closer (Final CTA & Footer)
**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Layout from Task 5.
- Produces: A high-contrast closing section and Local SEO optimized footer.

- [ ] **Step 1: Implement Final CTA Section**
  - Background: Blue-800.
  - Copy: High-urgency conversion text.
  - CTA: Large Emerald-600 pulse button.
- [ ] **Step 2: Implement Local SEO Footer**
  - NAP (Name, Address, Phone) consistency.
  - Embedded Google Map.
  - Semantic footer links.
- [ ] **Step 3: Final Accessibility Audit**
  - Check all links, labels, and ARIA roles.
- [ ] **Step 4: Commit**
  - `git add . && git commit -m "feat: implement final conversion closure and footer"`

---

## Task 7: Final Audit & Performance Tuning
**Files:**
- Modify: `index.html`, `css/style.css`

**Interfaces:**
- Consumes: Completed page.
- Produces: A production-ready, audited landing page.

- [ ] **Step 1: Full DOM Inspection (Chrome)**
  - Validate LCP, CLS, and FID.
  - Check contrast across all sections.
- [ ] **Step 2: Final Polish**
  - Adjust spacing based on `web-design-guidelines`.
  - Optimize image assets.
- [ ] **Step 3: Final Commit**
  - `git add . && git commit -m "chore: final performance and accessibility audit"`
