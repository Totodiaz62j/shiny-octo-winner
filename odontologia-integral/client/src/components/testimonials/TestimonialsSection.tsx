import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jose Cobian",
    role: "Paciente",
    text: "Entrar a un consultorio puede no significar nada pero puede cambiarlo todo. Si de entrada sos bien atendido y una vez dentro de tu problema sos cálidamente tratado (buena música funcional mediante) quiere decir que estás en buenas manos. Quien ama su profesión y la pone en un paciente eso es bueno. Muy bueno.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=jose",
  },
  {
    name: "Jorge Andres Rueda",
    role: "Paciente",
    text: "Excelente Odontología y excelente atención, muy buen servicio en todas sus especialidades. Odontología de primer nivel, muy recomendable. El Dr. Diaz Villasuso un capo.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=jorge",
  },
  {
    name: "Enrique Baravalle",
    role: "Paciente",
    text: "Un trato integral y humano, el doctor Díaz Villasuso te hace olvidar con su charla que estás sentado en la silla de odontología, casi un psicoterapeuta odontológico y un profesional excelente.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=enrique",
  },
  {
    name: "Isra Cinman",
    role: "Paciente",
    text: "Atención de excelencia 100% cumplimiento de los horarios. Trato del Dr Osvaldo y de las secretarias inmejorable. Que sigan así.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=isra",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60" />

      <div className="container relative z-10">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#0EA5E9] rounded-full" />
            <span className="text-[#0EA5E9] font-medium text-sm uppercase tracking-wider">
              Lo que dicen nuestros pacientes
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl text-[#1E3A8A] tracking-tight mb-4"
          >
            Historias de sonrisas recuperadas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 leading-relaxed"
          >
            La mejor recompensa es la confianza de quienes nos eligen para cuidar su salud bucal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-[#FEFCF3] p-8 rounded-3xl border border-gray-100 hover:border-[#0EA5E9]/30 hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-[#0EA5E9]/20 group-hover:text-[#0EA5E9]/40 transition-colors">
                <Quote size={40} />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIdx) => (
                    <Star key={starIdx} size={14} fill="#FACC15" className="text-[#FACC15]" />
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex flex-col">
                  <h4 className="font-semibold text-[#1E3A8A] text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
