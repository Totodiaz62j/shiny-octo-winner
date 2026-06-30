import React from 'react';
import React, { useInView } from 'react-intersection-observer';
import React, { motion } from 'framer-motion';
import ClinicMap from './ClinicMap';
import LocationPanel from './LocationPanel';

const LocationSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section
      ref={ref}
      className="relative h-[600px] w-full overflow-hidden py-20 bg-slate-50"
    >
      {/* Map Background */}
      <div className="absolute inset-0 z-0 p-4 md:p-8">
        <ClinicMap />
      </div>

      {/* Animated Panel Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center lg:justify-end lg:pr-12 p-6">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 100,
            delay: 0.2
          }}
          className="pointer-events-auto w-full max-w-md"
        >
          <LocationPanel className="lg:rounded-2xl rounded-t-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
