'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BookingButton } from '@/components/ui/BookingButton';

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Logo Fixe en Haut à Gauche - Au-dessus de tout */}
      <Link 
        href="/" 
        className="fixed top-0 left-0 z-[60] px-4 sm:px-6 lg:px-8 group"
        style={{
          paddingTop: isScrolled ? '1rem' : '2rem',
          transition: 'padding-top 500ms ease-in-out'
        }}
      >
        <div className="relative">
          {/* ÉNORME LOGO (haut de page) */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              !isScrolled
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-50 pointer-events-none'
            }`}
          >
            <Image
              src="/logos/logo-nuit-blanche-production.webp"
              alt="Nuit Blanche Production"
              width={1920}
              height={640}
              className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto object-contain group-hover:opacity-90 transition-opacity"
              priority
            />
          </div>

          {/* ICÔNE (après scroll) */}
          <div
            className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${
              isScrolled
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-150'
            }`}
          >
            <Image
              src="/logos/logo-nuit-blanche-production-icone.webp"
              alt="Nuit Blanche Production"
              width={64}
              height={64}
              className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
              priority
            />
          </div>
        </div>
      </Link>

      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Overlay sombre pour la lisibilité */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Dégradé en bas pour transition douce */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />

      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          La créativité ne dort jamais.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          De la conception à la post-prod, nous donnons vie à vos visions les plus ambitieuses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center"
        >
          <BookingButton variant="default" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}