import React from 'react';
import React, { motion } from 'framer-motion';
import React, { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  {
    question: "¿Aceptan obras sociales?",
    answer: "Trabajamos con diversas obras sociales y prepagas. Para verificar la cobertura de tu plan específico, podés consultarnos directamente por WhatsApp y te informaremos en minutos.",
  },
  {
    question: "¿Cómo puedo agendar un turno?",
    answer: "La forma más rápida y sencilla es a través de nuestro botón de WhatsApp. Solo necesitamos tu nombre y el motivo de la consulta para coordinar el horario que mejor te quede.",
  },
  {
    question: "¿Atienden urgencias dentales?",
    answer: "Sí, priorizamos las urgencias. Si tenés un dolor agudo o accidente dental, escribinos inmediatamente por WhatsApp indicando que es una URGENCIA para darte una respuesta prioritaria.",
  },
  {
    question: "¿Hacen presupuestos antes de iniciar el tratamiento?",
    answer: "Absolutamente. En la primera consulta realizamos un diagnóstico completo y te entregamos un plan de tratamiento detallado con sus respectivos costos, para que tengas total claridad antes de comenzar.",
  },
  {
    question: "¿Tienen estacionamiento en la zona?",
    answer: "Nos encontramos en una zona accesible con facilidad de estacionamiento en las inmediaciones de Rodríguez del Busto 2674.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative organic shape */}
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-[#0EA5E9]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[#0EA5E9] rounded-full" />
              <span className="text-[#0EA5E9] font-medium text-sm uppercase tracking-wider">
                Preguntas Frecuentes
              </span>
              <div className="w-10 h-1 bg-[#0EA5E9] rounded-full" />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-3xl sm:text-4xl text-[#1E3A8A] tracking-tight mb-4"
            >
              Todo lo que necesitás saber
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 leading-relaxed"
            >
              Resolvemos tus dudas más comunes para que tu experiencia con nosotros sea la más cómoda y transparente.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#FEFCF3] p-2 rounded-3xl border border-gray-100 shadow-sm"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} className="border-none">
                  <AccordionTrigger
                    className="px-6 py-4 text-base font-semibold text-[#1E3A8A] hover:text-[#0EA5E9] hover:no-underline transition-colors"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
