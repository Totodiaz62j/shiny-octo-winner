# Design Spec: Odontología Integral Córdoba Landing Page
Date: 2026-06-27
Status: Approved for Implementation

## 🎯 Strategic Objective
Create a high-conversion engine for Odontología Integral Córdoba that combines medical authority and emotional transformation to dominate the local market in Córdoba.

## 🛠 Tech Stack
- **Framework:** React + Vite + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui + Magic MCP
- **Guidelines:** Vercel Web Interface Guidelines

## 🎨 Visual Identity (Design Tokens)

### Color Palette
- **Primary (Authority):** `#0A2540` (Deep Abyss Blue) - Headlines, Trust sections.
- **Secondary (Hygiene):** `#F0F9FF` (Glacier Blue) - Light backgrounds.
- **Accent (Conversion):** `#25D366` (WhatsApp Green) - Primary CTAs.
- **Base:** `#FFFFFF` (Pure White) - Clean space.
- **Muted:** `#64748B` (Seda Gray) - Body text.

### Typography
- **Display:** `Montserrat` (Bold/ExtraBold) - Institutional strength.
- **Body:** `Inter` (Regular/Medium) - Modern legibility.

### Signature Element
- **Medical Glassmorphism:** Semi-transparent cards with backdrop-blur over clinic imagery to create a premium, modern depth effect.

## 🗺️ Information Architecture (The Funnel)

### 1. Navigation (The Anchor)
- **Elements:** Logo $\rightarrow$ Nav Links (Services, Case Studies, Location) $\rightarrow$ CTA "Agendar Turno".
- **Behavior:** Sticky with backdrop-blur.

### 2. Hero Section (Emotional Transformation)
- **Goal:** Immediate value proposition (< 3 seconds).
- **Content:**
  - Headline: Focus on result (e.g., "Recuperá la seguridad de tu sonrisa...").
  - Subheadline: Local authority (Córdoba).
  - Primary CTA: WhatsApp Button (Floating/Vibrant).
- **Visual:** High-res smile image/video + Glassmorphism accents.

### 3. Trust Stack (The Validation)
- **Elements:** Stats bar (+1000 patients, 15+ years, 3D Technology).
- **Goal:** Establish professional credibility instantly.

### 4. Core Services (Bento Grid)
- **Layout:** Non-linear grid with `rounded-3xl` cards.
- **Services:** Implants, Orthodontics, Whitening, General Care.
- **Interaction:** Framer Motion hover scales + Lucide Icons.

### 5. Transformation Gallery (The Hook)
- **Element:** Interactive "Before & After" slider.
- **Goal:** Visual proof of results.

### 6. Fear Reduction (Empathy & Authority)
- **Content:** "Pain-free experience" section explaining technology.
- **Visual:** Real photos of the team/clinic to build human connection.

### 7. Social Proof (The Confirmation)
- **Element:** Google Maps Review Wall (Stars + Verbatim quotes).
- **Goal:** Third-party validation.

### 8. Friction Removal (FAQs)
- **Element:** shadcn/ui Accordion.
- **Topics:** Insurance, First visit time, Location.

### 9. Final CTA & Footer (The Closing)
- **Final Push:** Strong emotional closing statement.
- **NAP:** Name, Address, Phone (Local SEO optimized for Córdoba).

## 📱 Mobile-First Constraints
- **Touch Targets:** Minimum 44x44px.
- **Loading:** Optimized assets to maintain LCP < 1.2s.
- **UX:** Simplified navigation, prominent floating WhatsApp button.
