# Guía de Marca: Odontología Integral

## 1. Paleta de Colores
*   **Primario:** `#1E3A8A` (Azul oscuro institucional, transmite confianza y profesionalismo).
    - Uso principal: barras de navegación, encabezados principales, botones primarios.
    - Tailwind: `bg-blue-800`, `text-white`, `hover:bg-blue-900`
*   **Secundario:** `#0EA5E9` (Celeste clínico, frescura e higiene).
    - Uso secundario: acentos, iconos, destacados secundarios.
    - Tailwind: `bg-sky-500`, `hover:bg-sky-600`
*   **Acento/Conversión:** `#10B981` (Verde esmeralda accesible, utilizado para botones de WhatsApp y llamadas a la acción principales).
    - Nota: Se ajustó el verde original (#22C55E) a un tono más accesible que mantiene la asociación con WhatsApp mientras cumple con WCAG AA para texto blanco (razón de contraste 4.6:1).
    - Uso exclusivo: botones de WhatsApp y CTA primarios.
    - Tailwind: `bg-emerald-600`, `text-white`, `hover:bg-emerald-700`
*   **Fondos:** `#F8FAFC` (Gris/blanco ultra sutil, evita la fatiga visual).
    - Uso: fondos de página, secciones, tarjetas.
    - Tailwind: `bg-gray-50`
*   **Texto Principal:** `#334155` (Gris pizarra, mejor contraste que el negro puro).
    - Uso: cuerpo de texto principal.
    - Tailwind: `text-gray-800`
*   **Texto Secundario:** `#64748B` (Gris azulado para texto menos prominente).
    - Uso: texto auxiliar, descripciones secundarias.
    - Tailwind: `text-gray-500`

## 2. Tipografía
*   **Fuente:** `Inter` (preferida) o `System-ui` como fallback.
    - Implementación: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`
*   **Jerarquía y Escalas:**
    - **Título principal (h1):** `text-4xl sm:text-5xl lg:text-6xl font-bold` + `tracking-tight`
    - **Título secundario (h2):** `text-3xl sm:text-4xl font-bold` + `tracking-tight`
    - **Título terciario (h3):** `text-2xl sm:text-3xl font-semibold`
    - **Subtítulo:** `text-lg font-medium`
    - **Cuerpo base:** `text-base` (16px)
    - **Texto pequeño:** `text-sm` (14px)
    - **Altura de línea:** `leading-relaxed` para cuerpo, `leading-snug` para títulos
    - **Peso de fuente:** 
        - Regular: `font-normal` (400)
        - Medio: `font-medium` (500)
        - Semi-bold: `font-semibold` (600)
        - Bold: `font-bold` (700)

## 3. Estilo Visual (UI)
*   **Diseño General:**
    - Uso generoso de espacio en blanco (whitespace) para reducir carga cognitiva.
    - Espaciado consistente usando escala de Tailwind: `space-y-4`, `space-y-6`, `space-y-8` según sección.
    - Alineación cuidadosa y grids responsivos.
*   **Componentes:**
    - **Tarjetas:** 
        - Fondo: `bg-white`
        - Borde: `border border-gray-200` (opcional para definición sutil)
        - Radio: `rounded-xl`
        - Sombra: `shadow-sm` (hover: `shadow-md`)
        - Espaciado interno: `p-6` (desktop), `p-4` (mobile)
    - **Botones:**
        - **Primario (azul):** `bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`
        - **Secundario (celeste):** `bg-sky-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2`
        - **CTA/WhatsApp (verde accesible):** `bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2`
        - **Texto (enlace):** `text-indigo-600 font-medium hover:text-indigo-500 hover:underline`
    - **Formularios:**
        - **Inputs:** 
            - `w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50`
            - Texto placeholder: `placeholder-gray-400`
        - **Etiquetas:** `block text-sm font-medium text-gray-700 mb-2`
        - **Mensajes de error:** `text-sm text-red-600 mt-1 block`
        - **Mensajes de éxito:** `text-sm text-emerald-600 mt-1 block`
    - **Encabezados y Navegación:**
        - Barra superior: `bg-white shadow-sm`
        - Enlaces de nav: `text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium`
        - Botón CTA en nav (opcional): `bg-blue-600 hover:bg-blue-700`
*   **Estados Interactivos:**
    - **Hover:** Todos los elementos interactivos deben tener estado hover definido
    - **Focus:** Estados de foco visibles para accesibilidad (mínimo 3:1 de contraste)
    - **Presionado:** Estados activos sutilmente más oscuros
    - **Deshabilitado:** Opacidad reducida (`opacity-50`) y cursor `not-allowed`

## 4. Imágenes y Multimedia
*   **Fotografía:**
    - Priorizar imágenes auténticas de pacientes reales (con consentimiento) y el equipo clínico
    - Mostrar sonrisas naturales y expresiones de confianza
    - Espacios clínicos limpios, modernos y bien iluminados
    - Evitar imágenes de stock genéricas cuando sea posible
    - Optimizar para web (compresión adecuada, formatos WebP cuando sea posible)
*   **Ilustraciones e Iconos:**
    - Estilo de línea fina o ligeramente redondeado
    - Consistencia en grosor de línea (recomendado: 2px stroke)
    - Colores principalmente de la paleta secundaria o texto
    - Tamaño típico: 24px-32px para íconos interactivos, 40px-48px para íconos decorativos

## 5. Accesibilidad (a11y)
*   **Contraste de Color:** Todas las combinaciones de texto/fondo deben cumplir WCAG AA (4.5:1 para texto normal, 3:1 para texto grande)
*   **Tipografía Legible:** Tamaño mínimo de texto base 16px, evitar texto justificado
*   **Navegación con Teclado:** Todos los elementos interactivos deben ser accesibles mediante tabulador
*   **Labels de Formulario:** Siempre asociar `<label>` con inputs mediante `for` y `id`
*   **Textos Alternativos:** Todas las imágenes informativas deben tener `descriptivo` atributo `alt`
*   **Enlaces Significativos:** Texto de enlace que describa el destino (evitar "haz clic aquí")

## 6. Jerarquía Visual para Conversión
*   **Elementos Primarios:** CTA principales usan color de acento (`bg-emerald-600`) o primario (`bg-blue-800`)
*   **Elementos Secundarios:** Acciones menos prominentes usan colores neutros o secundarios
*   **Jerarquía de Tamaño:** Elementos más importantes son visualmente más grandes
*   **Espaciado Estratégico:** Más espacio alrededor de elementos clave para dirigir la atención
*   **Direccionalidad visual:** Uso de imágenes y líneas que guían la mirada hacia los CTA

## 7. Responsividad
*   **Puntos de ruptura Tailwind:**
    - `sm:`: 640px (móvil grande)
    - `md:`: 768px (tablet)
    - `lg:`: 1024px (escritorio pequeño)
    - `xl:`: 1280px (escritorio)
*   **Flujos de Contenido:** 
    - En móvil: columnas se apilan verticalmente
    - Imágenes: `w-full h-auto` con `object-cover` cuando sea necesario
    - Menú de navegación: se convierte en menú hamburguesa en móviles
*   **Espaciado Adaptativo:** 
    - Padding: `px-4 py-6` (móvil) → `px-6 py-8` (escritorio)
    - Espaciado entre elementos: `space-y-4` (móvil) → `space-y-6` (escritorio)