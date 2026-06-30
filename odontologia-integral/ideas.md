# Brainstorm de Diseño — Odontología Integral

## Tres enfoques estilísticos

### 1. "Clínica Serena"
**Intro:** Estética minimalista médica con abundante espacio en blanco, bordes suaves y fotografía real de la clínica como protagonista. Transmite calma y profesionalismo sin frialdad.
**Probabilidad:** 0.06

### 2. "Confianza Cercana"
**Intro:** Diseño cálido y accesible que combina la seriedad institucional del azul con toques orgánicos y asimétricos. Prioriza la conexión humana y la facilidad de contacto, con un layout dinámico que guía la mirada hacia el CTA de WhatsApp.
**Probabilidad:** 0.08

### 3. "Tecnología Dental"
**Intro:** Enfoque futurista con gradientes sutiles, glassmorphism y microanimaciones que posicionan a la clínica como de vanguardia tecnológica.
**Probabilidad:** 0.04

---

## Enfoque elegido: "Confianza Cercana"

### Design Movement
**Organic Modernism** — Combina la limpieza del diseño moderno con formas orgánicas y curvas suaves que evocan naturalidad y cercanía humana. Se inspira en el diseño escandinavo de salud: funcional, cálido y sin pretensiones.

### Core Principles
1. **Asimetría guiada:** Los layouts no son simétricos ni centrados; usan composiciones de dos tercios que dirigen la mirada hacia los puntos de conversión.
2. **Calidez institucional:** El azul oscuro institucional se equilibra con fondos cálidos (crema suave) y fotografía real de la clínica para humanizar la marca.
3. **Conversión sin fricción:** Cada sección termina con un camino claro hacia WhatsApp; el botón verde es el ancla visual de toda la página.
4. **Autenticidad local:** Las fotos reales de la clínica (fachada, sala de espera, consultorio) son protagonistas, no stock genérico.

### Color Philosophy
- **Azul institucional (#1E3A8A):** Confianza y autoridad médica. Usado en navbar, títulos principales y secciones de peso.
- **Celeste clínico (#0EA5E9):** Frescura, higiene. Acentos, iconos, detalles decorativos.
- **Verde conversión (#10B981):** Acción inmediata. Exclusivo para botones de WhatsApp y CTA.
- **Crema cálido (#FEFCF3):** Fondo alternativo que rompe la frialdad del blanco puro y aporta calidez humana.
- **Blanco limpio (#FFFFFF):** Secciones de contenido principal.
- **Gris pizarra (#334155):** Texto legible y profesional.

### Layout Paradigm
- **Hero:** Composición asimétrica con texto a la izquierda (60%) e imagen real de la clínica a la derecha (40%), con una forma orgánica de recorte.
- **Servicios:** Grid de 3 columnas en desktop con tarjetas que tienen un borde superior de color como acento.
- **Instalaciones:** Galería horizontal con scroll suave y fotos reales.
- **CTA final:** Sección de ancho completo con fondo azul oscuro, texto blanco y botón verde prominente.
- **Espaciado vertical generoso** entre secciones (py-20 a py-28) para respirar.

### Signature Elements
1. **Formas orgánicas de recorte (blob shapes):** Usadas como marcos para imágenes y como divisores entre secciones, evocando la forma del isotipo de la marca (diente/hojas).
2. **Línea de acento celeste:** Una línea decorativa curva que aparece sutilmente en encabezados de sección, conectando visualmente toda la página.
3. **Botón flotante de WhatsApp:** Siempre visible en la esquina inferior derecha con pulso sutil de animación.

### Interaction Philosophy
- Las interacciones son **rápidas y sutiles**, nunca llamativas ni distractoras.
- Los botones tienen un scale(0.97) al presionar para feedback táctil inmediato.
- Las tarjetas de servicios se elevan suavemente al hover (translateY -4px + sombra).
- El scroll revela secciones con un fade-in + translateY sutil (200ms, ease-out).

### Animation
- **Entrada de secciones:** Fade-in con translateY(20px) → translateY(0), 300ms, ease-out. Stagger de 80ms entre elementos hermanos.
- **Botón WhatsApp flotante:** Pulso suave cada 3 segundos (scale 1 → 1.05 → 1) para captar atención sin molestar.
- **Hover en tarjetas:** Transform translateY(-4px) + shadow-lg, 200ms ease-out.
- **Navbar:** Transición de transparente a sólida al hacer scroll (backdrop-blur + bg-white/90), 200ms.
- **Respeta prefers-reduced-motion:** Todas las animaciones se desactivan si el usuario lo prefiere.

### Typography System
- **Display/Títulos:** `Outfit` (Google Fonts) — Geométrica, moderna pero amigable. Pesos 600 y 700.
- **Cuerpo:** `DM Sans` (Google Fonts) — Legible, profesional, ligeramente redondeada. Pesos 400 y 500.
- **Jerarquía:**
  - H1: Outfit 700, 3.5rem/4rem, tracking-tight
  - H2: Outfit 600, 2.5rem/3rem, tracking-tight
  - H3: Outfit 600, 1.5rem
  - Body: DM Sans 400, 1rem, leading-relaxed
  - Small: DM Sans 400, 0.875rem

### Brand Essence
**Posicionamiento:** Clínica dental de barrio con estándares profesionales altos, para familias que buscan atención cercana y de confianza sin complicaciones.
**Personalidad:** Cercana, profesional, accesible.

### Brand Voice
- Los titulares son directos, cálidos y orientados al beneficio del paciente.
- Los CTAs son conversacionales, como hablarle a un vecino.
- Ejemplo headline: "Tu sonrisa merece atención de verdad"
- Ejemplo CTA: "Escribinos por WhatsApp y agendá tu turno"
- Prohibido: "Bienvenidos a nuestra web", "Contáctenos hoy", "Líderes en odontología".

### Wordmark & Logo
- Se usa el isotipo existente de la marca (forma orgánica de diente/hojas) que ya es distintivo.
- En la navbar se muestra el isotipo + "Odontología Integral" en Outfit 600.

### Signature Brand Color
**Azul institucional profundo (#1E3A8A)** — Es el color que identifica inequívocamente a la marca. Aparece en el navbar, en los títulos principales y en la sección de cierre.

---

## Secciones de la Landing Page

1. **Navbar** — Logo + enlaces ancla + botón WhatsApp
2. **Hero** — Titular potente + subtítulo + CTA WhatsApp + imagen fachada
3. **Servicios** — 6 servicios destacados en grid con iconos
4. **Instalaciones** — Galería de fotos reales de la clínica
5. **Por qué elegirnos** — 3-4 diferenciadores con iconos
6. **CTA Final** — Sección de cierre con fondo azul y botón WhatsApp grande
7. **Footer** — Datos de contacto, horarios, mapa conceptual
8. **Botón flotante WhatsApp** — Siempre visible

---

## Style Decisions

- **Composición:** Cada sección principal después del hero incluye un layout 60/40, alineación escalonada o un ancla visual orgánica; se evitan secciones repetidas de título centrado + grid de tarjetas.
- **Motivo firma:** La línea curva celeste y los blob shapes orgánicos son dispositivos de marca obligatorios en cada sección principal, siempre sutiles y en apoyo de la jerarquía.
- **Fotografía:** La fotografía principal debe ser de la clínica real con luz natural cálida y contexto humano/local; la fotografía stock médica nunca debe ser la señal visual dominante.

