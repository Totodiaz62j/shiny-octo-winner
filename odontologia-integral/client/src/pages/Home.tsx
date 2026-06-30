/**
 * Landing Page — Odontología Integral
 * Estilo: "Confianza Cercana" — Organic Modernism
 * Paleta: Azul institucional #1E3A8A + celeste #0EA5E9 + verde conversión #10B981 + crema #FEFCF3
 * Tipografía: Outfit (display) + DM Sans (body)
 * Objetivo: Captar pacientes → WhatsApp
 *
 * Principios de diseño aplicados:
 * - Asimetría guiada: layouts 60/40, offsets, staggered
 * - Motivo orgánico recurrente: curvas celestes, blob shapes, bordes orgánicos
 * - Fotos reales de la clínica como protagonistas
 * - Identidad de marca fuerte con isotipo y azul profundo
 */

import React, { useEffect, useState } from "react";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Heart,
  Sparkles,
  Users,
  Star,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeInUp, fadeInLeft } from "@/lib/motion";
import { SITE_CONFIG } from "@/const";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { LocationSection } from "@/components/location";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { TestimonialsSection } from "@/components/testimonials";
import { FAQSection } from "@/components/faq";

const WHATSAPP_URL = SITE_CONFIG.hero.ctaHref;

// Enhanced motion configuration based on Emil Kowalski's principles
const motionConfig = {
  // Timing scales for different types of interactions
  timing: {
    instant: 0.08,
    quick: 0.12,
    gentle: 0.16,
    normal: 0.2,
    deliberate: 0.25,
    leisurely: 0.35,
  },

  // Custom easing curves (more natural than default CSS easings)
  easing: {
    // More responsive feel for entrances
    gentle: [0.33, 1, 0.68, 1],
    // Standard ease-out for most UI
    easeOut: [0.0, 0, 0.2, 1],
    // Slightly more pronounced for important elements
    pronounced: [0.25, 0.1, 0.25, 1.0],
    // Bouncy for playful elements
    bouncy: [0.68, -0.55, 0.265, 1.55],
    // Ultra-responsive for micro-interactions
    snappy: [0.15, 0, 0.85, 0.65],
  },

  // Spring configurations for different use cases
  spring: {
    gentle: { stiffness: 180, damping: 18 },
    default: { stiffness: 240, damping: 20 },
    bold: { stiffness: 320, damping: 24 },
    ultra: { stiffness: 400, damping: 26 },
  },
};

// Helper function to respect prefers-reduced-motion
const getReducedMotionConfig = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return false;
};

// ─── Organic Curve Divider ───────────────────────────────────────────────────
function OrganicDivider({ flip = false, color = "#FEFCF3" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 lg:h-20"
      >
        <path
          d="M0,40 C360,80 720,0 1080,50 C1260,65 1380,30 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-screen min-h-[100vh] flex items-center pt-24"
    >
      {/* Background: real clinic photo with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/manus-storage/hero-smile_8b6a8eec.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Keep existing gradient overlays for extra effect if desired */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/0 lg:hidden" />
      </div>

      {/* Decorative organic shapes */}
      <div className="absolute top-32 right-[10%] w-64 h-64 bg-[#0EA5E9]/8 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-[#10B981]/8 rounded-full blur-2xl hidden lg:block" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#0EA5E9]/20 text-[#1E3A8A] px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
            Atención odontológica profesional y cercana
          </div>

          {/* Headline with staggered fade-in */}
          <motion.h1
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px" }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-[#1E3A8A] leading-[1.1] tracking-tight"
          >
            Tu sonrisa merece{" "}
            <span className="relative inline-block">
              atención de verdad
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path d="M0 10 Q 75 0, 150 10 T 300 10" stroke="#0EA5E9" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg"
          >
            En Odontología Integral cuidamos tu salud bucal con un trato cercano
            y profesional. Agendá tu turno en segundos.
          </motion.p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center justify-center gap-3 bg-[#0A2540] hover:bg-[#081a30] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 active:scale-[0.97] shadow-xl shadow-emerald-300/30"
            >
              <Calendar className="w-6 h-6" />
              Escribinos por WhatsApp
            </motion.a>
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center justify-center gap-2 text-[#1E3A8A] font-medium px-6 py-4 rounded-2xl border-2 border-[#1E3A8A]/15 hover:border-[#1E3A8A]/30 hover:bg-[#1E3A8A]/5 transition-all duration-200 backdrop-blur-sm"
            >
              Ver servicios
              <ChevronRight size={18} />
            </motion.a>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-gray-200/60"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-8 h-8 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                <Clock size={14} className="text-[#0EA5E9]" />
              </div>
              Respuesta rápida
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-8 h-8 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                <Shield size={14} className="text-[#0EA5E9]" />
              </div>
              Profesionales matriculados
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-8 h-8 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                <Heart size={14} className="text-[#0EA5E9]" />
              </div>
              Trato personalizado
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Services Section ────────────────────────────────────────────────────────
const services = [
  {
    icon: "🦷",
    title: "Odontología General",
    description: "Controles, limpiezas y tratamientos preventivos para mantener tu boca sana.",
  },
  {
    icon: "✨",
    title: "Estética Dental",
    description: "Blanqueamientos, carillas y diseño de sonrisa para que te sientas mejor.",
  },
  {
    icon: "🔩",
    title: "Implantes",
    description: "Recuperá piezas dentales con implantes de última generación.",
  },
  {
    icon: "😁",
    title: "Ortodoncia",
    description: "Brackets y alineadores para una mordida correcta y una sonrisa alineada.",
  },
  {
    icon: "🛡️",
    title: "Endodoncia",
    description: "Tratamientos de conducto con tecnología moderna y mínimo dolor.",
  },
  {
    icon: "👶",
    title: "Odontopediatría",
    description: "Atención especializada para los más chicos, con paciencia y cariño.",
  },
];

function ServicesSection() {
  return (
    <motion.section
      id="servicios"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-[#FEFCF3] relative"
    >
      <div className="container">
        {/* Asymmetric header — left-aligned */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#0EA5E9] rounded-full" />
            <span className="text-[#0EA5E9] font-medium text-sm uppercase tracking-wider">
              Nuestros servicios
            </span>
          </div>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl text-[#1E3A8A] tracking-tight mb-4"
          >
            Todo lo que necesitás para tu salud bucal
          </motion.h2>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 leading-relaxed"
          >
            Ofrecemos una atención integral con los tratamientos más completos,
            siempre con un enfoque humano y profesional.
          </motion.p>
        </div>

        {/* Services — staggered grid */}
        <motion.ul
          role="list"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
        >
          {services.map((service, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#0EA5E9]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${
                i % 3 === 1 ? "lg:translate-y-4" : ""
              }`}
            >
              {/* Organic accent top-left */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#0EA5E9]/5 rounded-full group-hover:bg-[#0EA5E9]/10 transition-colors duration-300" />
              <div className="relative">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-display font-semibold text-lg text-[#1E3A8A] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA below services */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent" />
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#0A2540] hover:bg-[#081a30] text-white font-medium px-6 py-3 rounded-xl transition-all duration-200"
          >
            <Calendar className="w-5 h-5" />
            Consultá por tu tratamiento
            <ChevronRight size={16} />
          </motion.a>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  );
}

// ─── Facilities Section ──────────────────────────────────────────────────────
function FacilitiesSection() {
  return (
    <motion.section
      id="instalaciones"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#0EA5E9]/5 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Header — right-aligned for variety */}
        <div className="max-w-xl ml-auto text-right mb-16">
          <div className="flex items-center justify-end gap-3 mb-4">
            <span className="text-[#0EA5E9] font-medium text-sm uppercase tracking-wider">
              Nuestras instalaciones
            </span>
            <div className="w-10 h-1 bg-[#0EA5E9] rounded-full" />
          </div>
          <motion.h2
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl text-[#1E3A8A] tracking-tight mb-4"
          >
            Un espacio pensado para tu comodidad
          </motion.h2>
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 leading-relaxed"
          >
            Instalaciones modernas, limpias y equipadas para brindarte la mejor
            experiencia en cada visita.
          </motion.p>
        </div>

        {/* Editorial photo layout — Fixed height, zero overflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto lg:h-[650px] w-full">
          {/* Left Column: Two stacked cards */}
          <div className="flex flex-col gap-4 h-full">
            <motion.div
              key="nuestra-clinica"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden flex-1"
            >
              <img
                src="/manus-storage/foto_fachada_2_afb576f2.webp"
                alt="Fachada exterior de Odontología Integral"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-[#0EA5E9] font-medium text-sm px-3 py-1.5 rounded-lg">
                  Nuestra clínica
                </span>
              </div>
            </motion.div>

            <motion.div
              key="consultorio"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group rounded-2xl overflow-hidden flex-1"
            >
              <img
                src="/manus-storage/sala_astencion_1_548159e7.webp"
                alt="Consultorio dental equipado con tecnología moderna"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-[#0EA5E9] font-medium text-sm px-3 py-1.5 rounded-lg">
                  Consultorio
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Single double-height card */}
          <motion.div
            key="right-col"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6 }}
            className="h-full rounded-2xl overflow-hidden flex flex-col relative group"
          >
            <div className="h-1/2 w-full relative overflow-hidden">
              <img
                src="/foto_entrada.webp"
                alt="Entrada de la clínica"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </div>
            <div className="h-1/2 w-full relative overflow-hidden">
              <img
                src="/manus-storage/sala_de_espera_a55dc650.webp"
                alt="Sala de espera amplia y luminosa"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 via-transparent to-transparent" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-[#0EA5E9] font-medium text-sm px-3 py-1.5 rounded-lg">
                  Sala de espera
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Why Us Section ──────────────────────────────────────────────────────────
const reasons = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Trato humano y cercano",
    description:
      "Te escuchamos, te explicamos y te acompañamos en cada paso de tu tratamiento.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Profesionales matriculados",
    description:
      "Nuestro equipo está en constante formación para ofrecerte lo mejor.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Tecnología actualizada",
    description:
      "Equipamiento moderno para diagnósticos precisos y tratamientos eficientes.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Turnos flexibles",
    description:
      "Nos adaptamos a tus horarios. Agendá fácil y rápido por WhatsApp.",
  },
];

function WhyUsSection() {
  return (
    <motion.section
      id="nosotros"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-[#FEFCF3] relative overflow-hidden"
    >
      {/* Decorative organic shape */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-[#1E3A8A]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: content — 7 cols */}
          <motion.div
            key="content"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-10 order-2 lg:order-1"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-1 bg-[#0EA5E9] rounded-full" />
                <span className="text-[#0EA5E9] font-medium text-sm uppercase tracking-wider">
                  Por qué elegirnos
                </span>
              </div>
              <motion.h2
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.6 }}
                className="font-display font-bold text-3xl sm:text-4xl text-[#1E3A8A] tracking-tight mb-4"
              >
                Más que una clínica, un lugar de confianza
              </motion.h2>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 leading-relaxed max-w-lg"
              >
                Desde hace más de 10 años acompañamos a familias enteras en el
                cuidado de su salud bucal, con dedicación y profesionalismo.
              </motion.p>
            </div>

            <motion.ul
              key="reasons-list"
              role="list"
              className="grid sm:grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-200px" }}
            >
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-white border border-[#0EA5E9]/20 rounded-2xl flex items-center justify-center text-[#1E3A8A] shrink-0 shadow-sm">
                    {reason.icon}
                  </div>
                  <div>
                    <motion.h3
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4 }}
                      className="font-display font-semibold text-[#1E3A8A] text-sm mb-1"
                    >
                      {reason.title}
                    </motion.h3>
                    <motion.p
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-xs text-gray-500 leading-relaxed"
                    >
                      {reason.description}
                    </motion.p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Inline CTA */}
            <motion.a
              key="cta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-[#0A2540] hover:bg-[#081a30] text-white px-7 py-3.5 rounded-xl font-medium transition-all duration-200 active:scale-[0.97] shadow-lg shadow-emerald-200/40"
            >
              <Calendar className="w-5 h-5" />
              Hablá con nosotros
            </motion.a>
          </motion.div>

          {/* Right: image — 5 cols */}
          <motion.div
            key="image"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Organic background shape */}
              <div className="absolute -inset-4 bg-[#0EA5E9]/10 rounded-[2.5rem] -rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/foto_fachada.webp"
                  alt="Fachada de la clínica"
                  className="w-full h-[350px] lg:h-[420px] object-cover"
                />
              </div>
            </div>
            {/* Floating stat card */}
            <motion.div
              key="stat-card"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex items-center gap-3 animate-float"
            >
              <div className="w-11 h-11 bg-[#1E3A8A] rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <p className="font-display font-bold text-[#1E3A8A] text-base leading-tight">+10 años</p>
                <p className="text-xs text-gray-500">cuidando sonrisas</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ─── CTA Final Section ───────────────────────────────────────────────────────
function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{ duration: 0.6 }}
      className="relative py-28 overflow-hidden"
    >
      {/* Background with real clinic image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/dental-services-bg_26850ffc.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#1E3A8A]/90" />
      </div>

      {/* Decorative organic shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#10B981]/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Decorative curve */}
          <svg className="w-16 h-4 mx-auto opacity-50" viewBox="0 0 80 16" fill="none">
            <path d="M2 14 C20 2, 40 2, 60 10 S78 14, 78 8" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            ¿Listo para cuidar tu sonrisa?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100/90 text-lg leading-relaxed max-w-lg mx-auto"
          >
            Escribinos por WhatsApp y agendá tu turno en minutos. Te respondemos
            rápido y sin vueltas.
          </motion.p>
          <div className="pt-2">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 bg-[#0A2540] hover:bg-[#081a30] text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-200 active:scale-[0.97] shadow-2xl shadow-emerald-900/40"
            >
              <Calendar className="w-7 h-7" />
              Agendar turno ahora
            </motion.a>
          </div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-blue-200/70 text-sm"
          >
            Sin compromiso · Respuesta en minutos
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Floating Contact Hub ────────────────────────────────────────────────────
function FloatingContactHub() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-700 ease-in-out ${
      visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
    }`}>
      {/* Instagram Secondary Action */}
      <motion.a
        href="https://www.instagram.com/odontologia.integral.cba/?hl=es-la"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-white overflow-hidden transition-transform"
        aria-label="Siguenos en Instagram"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <defs>
            <linearGradient id="ig-grad" x1="20%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="100%" stopColor="#285AEB" />
            </linearGradient>
          </defs>
          <rect width="24" height="24" rx="8" fill="url(#ig-grad)" />
          <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6-9.5a1 1 0 11-2 0 1 1 0 012 0z" fill="white" />
        </svg>
      </motion.a>

      {/* WhatsApp Primary Action */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-[#25D366] transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" fill="white" />
      </motion.a>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <OrganicDivider color="#FEFCF3" />
      <ServicesSection />
      <OrganicDivider flip color="#FEFCF3" />
      <FacilitiesSection />
      <OrganicDivider color="#FEFCF3" />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      <CTASection />
      <Footer />
      <FloatingContactHub />
    </div>
  );
}
