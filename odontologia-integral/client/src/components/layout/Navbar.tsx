import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/const";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src="/logo_odonto.jpg"
            alt="Odontología Integral"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span
            className="text-xl font-bold ml-3 font-display"
            style={{ color: SITE_CONFIG.colors.primary }}
          >
            Odontología Integral
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {SITE_CONFIG.navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70 font-montserrat"
              style={{ color: SITE_CONFIG.colors.primary }}
              whileHover={{ y: -1 }}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href={SITE_CONFIG.hero.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-white font-montserrat transition-all hover:bg-[#081a30] active:scale-95 shadow-md"
            style={{ backgroundColor: SITE_CONFIG.colors.accent }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-4 h-4" />
            {SITE_CONFIG.hero.ctaText}
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: SITE_CONFIG.colors.primary }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium py-2 border-b border-gray-50 font-montserrat"
                style={{ color: SITE_CONFIG.colors.primary }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.hero.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-white font-montserrat transition-all hover:bg-[#20bd5a] active:scale-95"
              style={{ backgroundColor: SITE_CONFIG.colors.accent }}
            >
              <Calendar className="w-5 h-5" />
              {SITE_CONFIG.hero.ctaText}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
