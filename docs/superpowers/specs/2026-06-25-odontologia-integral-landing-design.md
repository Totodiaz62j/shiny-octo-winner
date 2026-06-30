# Design Spec: Odontología Integral Córdoba Landing Page
**Date:** 2026-06-25
**Status:** Final Design Approved
**Goal:** High-Conversion Engine for Dental Patients in Córdoba.

## 1. Strategic Overview
The website is designed as a high-performance conversion funnel rather than a simple landing page. It combines **Medical Authority**, **Psychological Trust**, and **Local SEO** to transform visitors into patients.

### The "Winning Bundle" (Unique Value Propositions)
- **Stress-Free Dentistry:** Tackling the fear of the dentist with a focus on comfort and minimal invasion.
- **Digital Precision:** Using cutting-edge technology (3D scanning, digital planning) to guarantee results.
- **Comprehensive Care:** All specialties in one place for maximum convenience.
- **Financial Accessibility:** Clear planning and accessible payment options to remove cost barriers.

---

## 2. Technical Stack
- **Markup:** Semantic HTML5.
- **Styling:** Tailwind CSS v3 (via CDN).
- **Interactivity:** Vanilla JavaScript (minimal).
- **Performance Target:** LCP < 1.2s, Mobile-First priority.

---

## 3. Visual Identity (Brand Guide)
- **Primary Palette:** 
  - Blue-800 (`#1E3A8A`): Authority & Trust.
  - Sky-500 (`#0EA5E9`): Hygiene & Freshness.
  - Emerald-600 (`#10B981`): High-Contrast Conversion (WhatsApp).
  - Gray-50 (`#F8FAFC`): Clean backgrounds.
- **Typography:** Inter (Sans-serif) for modern, legible, and professional feel.
- **UI Style:** Premium Minimalism. Generous whitespace, rounded-xl corners, subtle shadows.

---

## 4. Page Architecture & Conversion Flow

### Section 1: First Impression (Hero)
- **Header:** White bg, subtle shadow. Logo (left), Nav links (center), "Agendar Consulta" CTA (Right, Blue-800).
- **Hero Content:**
  - **H1:** "Excelencia en Salud Dental: Tecnología de Vanguardia y Cuidado Humano en el Corazón de Córdoba".
  - **Sub-headline:** Focus on the "Winning Bundle" summary.
  - **Primary CTA:** "Consultar Disponibilidad por WhatsApp" (Emerald-600, Pulse effect).
  - **Trust Badge:** "⭐ 4.9/5 en Google Reviews | +1000 Pacientes Felices".
- **Visual:** High-res professional image of the clinic or team.

### Section 2: Trust Stack (Authority & Empathy)
- **Block A (Empathy):** "Redefinimos tu visita al dentista: Sin miedo, sin estrés." $\rightarrow$ Focus on comfort, calmness, and human touch.
- **Block B (Authority):** "Tecnología que garantiza resultados exactos." $\rightarrow$ Focus on 3D scanning, digital planning, and precision.

### Section 3: Service Catalog (The Solutions)
- **Layout:** Grid of 6 elegant cards.
- **Services:** Implantes, Odontología General, OdontoPediatría, Endodoncia, Ortodoncia, Prótesis Dental.
- **Card Components:** Minimalist icon, Bold title, persuasive short description, "Saber más $\rightarrow$" link.

### Section 4: Social Proof (Validation)
- **Before/After Gallery:** Visual proof of technical success (especially for Implants/Ortho).
- **Google Reviews Mirror:** Real testimonials and 5-star rating display.

### Section 5: Final Conversion (Closing)
- **Visual:** High-contrast background (Blue-800).
- **Copy:** "Tu nueva sonrisa comienza con una consulta profesional."
- **Final CTA:** Largest WhatsApp button ("Agendar mi Turno Ahora") in Emerald-600.

### Section 6: Institutional Footer
- **Elements:** Logo, Mission statement, Quick links, Full NAP (Name, Address, Phone) for Local SEO, Embedded Google Map, Copyright.

---

## 5. Mobile Experience
- **Strategy:** Mobile-First.
- **Optimizations:** Touch-friendly buttons (min 44px), simplified navigation, optimized asset loading.
