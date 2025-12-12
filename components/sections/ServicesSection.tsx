'use client';

import { motion } from 'framer-motion';
import { Video, Calendar, TrendingUp, Plane } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: 'Corporate',
      description: 'Interviews, Brand Content, Communication Interne',
    },
    {
      icon: Calendar,
      title: 'Événementiel',
      description: 'Festivals, Aftermovies, Captation Live',
    },
    {
      icon: TrendingUp,
      title: 'Publicité',
      description: 'Spots TV, Réseaux Sociaux, Campagnes Digitales',
    },
    {
      icon: Plane,
      title: 'Drone & Technique',
      description: 'Vues Aériennes, FPV Racing, Prises Techniques',
    },
  ];

  return (
    <section id="services" className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Notre Expertise
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Des solutions audiovisuelles complètes pour propulser votre
            communication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white p-3 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-full h-full text-black" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}