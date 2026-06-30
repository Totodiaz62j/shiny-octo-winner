import React from "react";
import React, { Phone, MapPin, Star, Calendar } from "lucide-react";
import React, { motion } from "framer-motion";
import React, { SITE_CONFIG } from "@/const";
import React, { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="text-white"
      style={{ backgroundColor: SITE_CONFIG.colors.primary }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo_odonto.jpg"
                alt="Odontología Integral"
                className="w-12 h-12 rounded-xl object-cover border border-white/20"
              />
              <div className="leading-none">
                <span className="font-display font-bold text-lg block">
                  Odontología
                </span>
                <span className="font-display font-medium text-sm opacity-70 block">
                  Integral
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Comprometidos con la salud bucal de Córdoba. Combinamos tecnología
              de vanguardia con un trato humano y cercano para transformar tu sonrisa.
            </p>
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <span className="text-white/70 text-xs ml-2 font-medium">
                4.7/5 en Google Maps (39 opiniones)
              </span>
            </div>
          </div>

          {/* NAP - Local SEO */}
          <div className="space-y-6">
            <h4 className="font-display font-semibold text-lg">Contacto & Ubicación</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={18} className="text-[#0EA5E9] shrink-0" />
                <span>
                  Rodríguez del Busto 2674, X5000 Córdoba, Argentina<br />
                  (Córdoba Capital)
                </span>
              </div>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <Phone size={18} className="text-[#0EA5E9] shrink-0" />
                <span>+54 9 351 611-4515</span>
              </div>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <div className="w-[18px] h-[18px] rounded-full bg-[#0EA5E9] shrink-0" />
                <span>Lunes a Viernes: 8:00 - 20:00<br />Sábados: 9:00 - 13:00<br />Domingos: Cerrado</span>
              </div>
            </div>
          </div>

          {/* Urgency CTA */}
          <div className="space-y-6">
            <h4 className="font-display font-semibold text-lg">¿Necesitás un turno?</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              No postergues tu salud dental. Tenemos turnos disponibles para esta semana.
            </p>
            <motion.a
              href={SITE_CONFIG.hero.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl font-bold text-white transition-all bg-[#0A2540] hover:bg-[#081a30] active:scale-95 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" />
              {SITE_CONFIG.hero.ctaText.toUpperCase()}
            </motion.a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Odontología Integral Córdoba. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
            Respuesta inmediata vía WhatsApp
          </div>
        </div>
      </div>
    </footer>
  );
}
