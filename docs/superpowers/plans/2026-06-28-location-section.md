# Interactive Location Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a high-end, interactive location section for the clinic landing page using the `mapcn` library, featuring a glassmorphic info panel and a dynamic map.

**Architecture:** The section is composed of a main container (`LocationSection`) that manages the animation trigger via intersection observer. It contains a map component (`ClinicMap`) based on `mapcn` and a floating UI panel (`LocationPanel`) that adapts its position and style based on screen size.

**Tech Stack:** React, Vite, TypeScript, Tailwind CSS, `mapcn` (MapLibre GL), `framer-motion`, `lucide-react`.

## Global Constraints

- Framework: React + Vite + TypeScript.
- Estilos: TailwindCSS.
- Use functional components.
- Modular code in `/components`.
- Address: Rodríguez del Busto 2674, X5000 Córdoba.
- Phone: +54 351 611-4515.

---

## File Structure

- Create: `src/components/location/LocationSection.tsx` - Main container and animation orchestrator.
- Create: `src/components/location/ClinicMap.tsx` - Map implementation using `mapcn`.
- Create: `src/components/location/LocationPanel.tsx` - Glassmorphic info panel.
- Create: `src/components/location/index.ts` - Public API for the location components.

---

### Task 1: Dependencies & Configuration

**Files:**
- Modify: `package.json` (via npm install)

**Interfaces:**
- Produces: Installed dependencies for mapping and animation.

- [ ] **Step 1: Install core dependencies**
  Run: `npm install mapcn maplibre-gl framer-motion lucide-react react-intersection-observer`
  Expected: All packages added to `package.json` and `node_modules`.

- [ ] **Step 2: Commit**
  Run: `git add package.json package-lock.json`
  Run: `git commit -m "chore: install dependencies for interactive location section"`

---

### Task 2: ClinicMap Component

**Files:**
- Create: `src/components/location/ClinicMap.tsx`

**Interfaces:**
- Produces: `ClinicMap` component that renders a map centered on the clinic.

- [ ] **Step 1: Implement basic Map wrapper**
  Create `src/components/location/ClinicMap.tsx` with `mapcn` basic setup.
  Center: `[-64.183, -31.416]` (Approx coordinates for Rodríguez del Busto 2674, Córdoba).
  Zoom: `15`.

```tsx
import React from 'react';
import { Map } from 'mapcn';

const ClinicMap: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden rounded-3xl">
      <Map 
        defaultCenter={[-64.183, -31.416]} 
        defaultZoom={15}
        // Style configuration for "Dental Tech" look (light/clean)
        styleUrl="https://basemaps.cartocdn.com/gl/voyager-dark-gl-style/style.json"
      />
    </div>
  );
};

export default ClinicMap;
```

- [ ] **Step 2: Add custom clinic marker**
  Add a custom marker at the center coordinates using a Lucide icon or SVG.

- [ ] **Step 3: Run and verify map renders**
  Add `ClinicMap` to a temporary page or the main app and verify the map loads and is centered correctly.

- [ ] **Step 4: Commit**
  Run: `git add src/components/location/ClinicMap.tsx`
  Run: `git commit -m "feat: implement ClinicMap with mapcn"`

---

### Task 3: LocationPanel Component

**Files:**
- Create: `src/components/location/LocationPanel.tsx`

**Interfaces:**
- Produces: `LocationPanel` component with glassmorphic styling and contact actions.

- [ ] **Step 1: Implement Glassmorphic UI**
  Create `src/components/location/LocationPanel.tsx` using Tailwind `backdrop-blur` and `bg-white/40`.

```tsx
import React from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const LocationPanel: React.FC<{ className?: string }> = ({ className }) => {
  const clinicData = {
    address: "Rodríguez del Busto 2674, X5000 Córdoba",
    phone: "+54 351 611-4515",
    whatsapp: "543516114515",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Rodríguez+del+Busto+2674+Córdoba"
  };

  return (
    <div className={`
      backdrop-blur-md bg-white/40 border border-white/20 p-6 rounded-2xl shadow-xl 
      text-slate-900 flex flex-col gap-4 ${className}
    `}>
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
        <div >
          <h3 className="font-semibold text-lg">Nuestra Ubicación</h3>
          <p className="text-sm text-slate-600">{clinicData.address}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <a 
          href={`tel:${clinicData.phone}`} 
          className="flex items-center gap-2 p-3 rounded-xl bg-white/60 hover:bg-white/80 transition-colors text-sm font-medium"
        >
          <Phone className="w-4 h-4" /> Llamar Ahora
        </a>
        <a 
          href={`https://wa.me/${clinicData.whatsapp}`} 
          className="flex items-center gap-2 p-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-colors text-sm font-medium"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
        <a 
          href={clinicData.googleMaps} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4" /> Ver en Google Maps
        </a>
      </div>
    </div>
  );
};

export default LocationPanel;
```

- [ ] **Step 2: Handle Responsive Layout**
  Update classes to be a floating side panel on `lg` and a bottom-sheet on `sm/md`.

- [ ] **Step 3: Commit**
  Run: `git add src/components/location/LocationPanel.tsx`
  Run: `git commit -m "feat: implement glassmorphic LocationPanel"`

---

### Task 4: LocationSection Orchestration

**Files:**
- Create: `src/components/location/LocationSection.tsx`
- Create: `src/components/location/index.ts`

**Interfaces:**
- Consumes: `ClinicMap`, `LocationPanel`.
- Produces: The final `LocationSection` ready for use in the landing page.

- [ ] **Step 1: Assemble Layout**
  Create `LocationSection.tsx` and position the map as the background and the panel as an overlay.

- [ ] **Step 2: Implement Entrance Animation**
  Use `framer-motion` and `react-intersection-observer` to slide the panel in when the section enters the viewport.

```tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ClinicMap from './ClinicMap';
import LocationPanel from './LocationPanel';

const LocationSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative h-[600px] w-full overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <ClinicMap />
      </div>
      
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center lg:justify-end lg:pr-12 p-6">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="pointer-events-auto w-full max-w-sm"
        >
          <LocationPanel className="lg:rounded-2xl rounded-t-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
```

- [ ] **Step 3: Export Components**
  Create `src/components/location/index.ts` exporting `LocationSection`.

- [ ] **Step 4: Commit**
  Run: `git add src/components/location/LocationSection.tsx src/components/location/index.ts`
  Run: `git commit -m "feat: orchestrate LocationSection with animations"`

---

### Task 5: Final Verification & Polish

**Files:**
- Modify: `src/App.tsx` (or equivalent landing page file)

- [ ] **Step 1: Integrate into Landing Page**
  Place `LocationSection` in the appropriate spot in the page layout.

- [ ] **Step 2: Verify Action Links**
  Click Phone, WhatsApp, and Google Maps links to ensure they open correctly.

- [ ] **Step 3: Test Responsiveness**
  Verify the transition from side panel (Desktop) to bottom card (Mobile).

- [ ] **Step 4: Final Commit**
  Run: `git add .`
  Run: `git commit -m "feat: finalize interactive location section"`
