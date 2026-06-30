# Instrucciones de Entorno Local (Servercasa)

## 1. Stack Tecnológico Obligatorio
- Framework: React + Vite + TypeScript.
- Estilos: TailwindCSS.
- NO armar archivos HTML planos con CDNs. 

## 2. Gestión de Dependencias
- Tenés permiso explícito para ejecutar `npm install` o `npm i` para agregar dependencias (ej. framer-motion, clsx, tailwind-merge, lucide-react).
- Asegurate de instalar las dependencias antes de importar componentes complejos.

## 3. Uso de Librerías Locales (MCP)
- Tenés acceso a mis librerías de componentes locales a través del servidor MCP configurado.
- REGLA CRÍTICA: Antes de programar componentes UI desde cero (botones, navbars, cards), usá tus herramientas para buscar en el MCP e importar los componentes existentes.

## 4. Calidad de Código
- Usá componentes funcionales de React.
- Mantené el código modular (creá una carpeta /components si es necesario).