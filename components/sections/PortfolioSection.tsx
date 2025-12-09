'use client';

import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

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

export function PortfolioSection() {
  const projects = [
    { title: 'Campaign Ultra Moderne', category: 'Publicité' },
    { title: 'Festival Summer 2024', category: 'Événementiel' },
    { title: 'Brand Story Premium', category: 'Corporate' },
    { title: 'Aerial Masterpiece', category: 'Drone' },
    { title: 'Tech Launch Event', category: 'Corporate' },
    { title: 'Fashion Week Aftermovie', category: 'Événementiel' },
  ];

  return (
    <section id="portfolio" className="py-32 px-4 bg-zinc-900/30">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Une sélection de nos créations les plus marquantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-violet-600/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  <Video className="w-16 h-16 text-zinc-700 group-hover:text-violet-600 transition-colors" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-violet-400 font-medium mb-1 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}