# Design Spec: Interactive Location Section (mapcn)

## 1. Overview
Implementation of a high-end, interactive location section for the Odontología Integral clinic landing page. The goal is to move away from static map embeds to a dynamic experience using the `mapcn` library.

## 2. User Experience (UX)
- **Visual Style:** Modern, professional, "Dental Tech".
- **Interaction Model:**
    - **Desktop:** A large-scale interactive map with a floating, glassmorphic side panel.
    - **Animation:** The info panel slides in from the side using a spring animation when the section enters the viewport.
    - **Mobile:** The panel transforms into a bottom-aligned card (bottom sheet style) to maintain map visibility.
- **Key Actions:**
    - View clinic location via custom marker.
    - Quick-action button to open the location in Google Maps.
    - One-click contact via WhatsApp/Phone.

## 3. Technical Design

### 3.1 Stack
- **Map Library:** `mapcn` (built on MapLibre GL).
- **Styling:** Tailwind CSS (Glassmorphism via `backdrop-blur` and `bg-white/30`).
- **Animations:** `framer-motion` for the slide-in effect and panel transitions.
- **Icons:** `lucide-react` for location and contact markers.

### 3.2 Component Architecture
- `LocationSection.tsx`: Main container handling the layout and intersection observer for animations.
- `ClinicMap.tsx`: Wrapper around `mapcn` components, initializing the map with clinic coordinates.
- `LocationPanel.tsx`: The floating glassmorphic card containing clinic metadata.

### 3.3 Data Points
- **Address:** Rodríguez del Busto 2674, X5000 Córdoba.
- **Phone:** +54 351 611-4515.
- **Marker:** Custom SVG icon representing a dental clinic.

## 4. Implementation Details
- **mapcn Integration:** 
    - Install `mapcn` and its dependencies (MapLibre GL).
    - Configure the map center and zoom level to focus precisely on the clinic's neighborhood.
- **Glassmorphism Implementation:**
    - Use `bg-white/40` combined with `backdrop-blur-md` and a subtle `border-white/20` to achieve the frosted glass look.
- **Responsive Logic:**
    - `lg` screen: Fixed/Absolute positioned side panel.
    - `md/sm` screen: Bottom-fixed card with rounded-t-2xl corners.

## 5. Success Criteria
- Map loads smoothly without flickering.
- Side panel animates in on scroll.
- Marker is precisely placed at Rodríguez del Busto 2674.
- All contact buttons are functional and lead to the correct destination.
- Layout is fully responsive and visually consistent with the brand guide.
