export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

export const SITE_CONFIG = {
  colors: {
    primary: "#0A2540",
    secondary: "#F0F9FF",
    accent: "#0A2540",
    muted: "#64748B",
    base: "#FFFFFF",
  },
  navLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Casos", href: "#casos" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
    title: "Tu Sonrisa, Nuestra Pasión",
    subtitle: "Odontología Integral de alta calidad en Córdoba para transformar tu salud dental y tu confianza.",
    ctaText: "Agendar Cita",
    ctaHref: "https://wa.me/5493516114515",
  },
  services: [
    { title: "Implantes Dentales", description: "Recupera la funcionalidad y estética de tu sonrisa con implantes de última generación." },
    { title: "Ortodoncia Invisible", description: "Alinea tus dientes de forma discreta y cómoda con tecnología avanzada." },
    { title: "Blanqueamiento Pro", description: "Consigue una sonrisa radiante y blanca en tiempo récord con nuestros tratamientos profesionales." },
    { title: "Diseño de Sonrisa", description: "Personalizamos cada detalle para crear la sonrisa perfecta y armónica para ti." },
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
