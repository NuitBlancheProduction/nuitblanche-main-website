'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Prêt à passer au
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
              niveau supérieur ?
            </span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Discutons de votre projet et créons ensemble quelque chose
            d'exceptionnel
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg rounded-full group"
          >
            <Mail className="mr-2" />
            contact@nuitblanche.production
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-700 hover:border-violet-600 text-white px-8 py-6 text-lg rounded-full bg-transparent"
          >
            <Phone className="mr-2" />
            +33 X XX XX XX XX
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}