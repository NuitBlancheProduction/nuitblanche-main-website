'use client';

import { motion } from 'framer-motion';
import { BookingButton } from '@/components/ui/BookingButton';

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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Prêt à passer au
            <br />
            niveau supérieur ?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Discutons de votre projet et créons ensemble quelque chose
            d'exceptionnel
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center"
        >
          {/* Booking Button */}
          <BookingButton variant="default" />

          {/* Contact Information */}
          <div className="mt-8 space-y-2">
            <p className="text-zinc-400 text-lg">
              <a
                href="mailto:contact@nuitblancheproduction.com"
                className="hover:text-white transition-colors"
              >
                contact@nuitblancheproduction.com
              </a>
            </p>
            <p className="text-zinc-400 text-lg">
              <a
                href="tel:+33651301383"
                className="hover:text-white transition-colors"
              >
                +33 6 51 30 13 83
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}