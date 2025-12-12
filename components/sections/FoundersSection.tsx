'use client';

import { motion } from 'framer-motion';

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

export function FoundersSection() {
  const founders = [
    {
      name: 'Denis',
      role: 'Stratégie & Développement',
      description:
        'Expert en stratégie de contenu et développement commercial, Denis transforme chaque projet en opportunité de croissance.',
    },
    {
      name: 'Maxime',
      role: 'Direction Artistique & Technique',
      description:
        'Visionnaire créatif et passionné de technique, Maxime donne vie aux concepts les plus audacieux avec une précision cinématographique.',
    },
  ];

  return (
    <section id="fondateurs" className="py-32 px-4 bg-zinc-950">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">L'Alliance</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Un binôme complémentaire au service de votre vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={fadeInUp}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-zinc-800 group-hover:text-white transition-colors">
                    {founder.name[0]}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2 text-white">{founder.name}</h3>
                <p className="text-zinc-400 font-medium mb-4">
                  {founder.role}
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}