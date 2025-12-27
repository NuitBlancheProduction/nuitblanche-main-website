'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { BookingButton } from '@/components/ui/BookingButton';

export function HeroSection() {
  const [videoError, setVideoError] = useState(false);

  const videoHTML = `
    <video
      autoplay
      loop
      muted
      playsinline
      webkit-playsinline
      preload="auto"
      poster="/hero-poster.jpg"
      class="absolute inset-0 w-full h-full object-cover"
      style="opacity: 1; transition: opacity 0.3s;"
    >
      <source src="/hero-background.mp4" type="video/mp4" />
    </video>
  `;

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-zinc-950 pt-28 pb-20 landscape:pt-28 landscape:pb-12 landscape:justify-start md:landscape:justify-center md:pt-0 md:pb-0">
      {/* Vidéo background */}
      {!videoError && (
        <div
          dangerouslySetInnerHTML={{ __html: videoHTML }}
          onError={() => setVideoError(true)}
        />
      )}

      {/* Fallback image */}
      {videoError && (
        <div className="absolute inset-0 bg-zinc-900">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/hero-poster.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      )}

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Dégradé bas */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />

      {/* Container Layout */}
      <div className="relative z-10 text-center px-4 max-w-[95rem] mx-auto w-full flex flex-col h-full md:justify-center">
        
        {/* 1. LA PUNCHLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          // TAILLES RÉDUITES DE 10% PARTOUT
          // Mobile Portrait : text-3xl
          // Mobile Paysage : text-2xl
          // Tablette : text-5xl
          // Desktop : text-7xl / 8xl (au lieu de 9xl)
          className="text-3xl max-[374px]:text-2xl landscape:text-2xl md:text-5xl md:landscape:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-4 landscape:mb-2 md:mb-5 md:landscape:mb-5 lg:mb-6"
        >
          La créativité ne dort jamais
        </motion.h1>

        {/* 2. LE TITRE SEO */}
        <motion.h2
          // Reduction taille et marges
          className="text-lg max-[374px]:text-base landscape:text-sm md:text-2xl md:landscape:text-2xl lg:text-3xl text-zinc-300 font-medium mt-3 landscape:mt-1 md:mt-5 md:landscape:mt-5 lg:mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Production Vidéo, Drone & Stratégie.
        </motion.h2>

        {/* 3. LE SOUS-TITRE */}
        <motion.p
          className="text-sm max-[374px]:text-xs landscape:text-xs md:text-lg md:landscape:text-lg lg:text-xl text-zinc-400 max-w-4xl mx-auto mt-3 landscape:mt-2 md:mt-5 md:landscape:mt-5 lg:mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-zinc-300">Basés dans les Vosges.</span> Nous accompagnons les entreprises et institutions audacieuses.
        </motion.p>

        {/* 4. CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          // Marges réduites
          className="flex flex-col sm:flex-row gap-3 landscape:gap-2 md:gap-5 md:landscape:gap-5 lg:gap-6 justify-center items-center mt-6 landscape:mt-3 md:mt-8 md:landscape:mt-8 lg:mt-10 xl:mt-12"
        >
          <BookingButton 
            variant="default" 
            className="w-full sm:w-auto text-sm landscape:text-xs md:text-base md:landscape:text-base lg:text-lg py-3 px-6 landscape:py-2 landscape:px-4 md:py-4 md:px-8 md:landscape:py-4 md:landscape:px-8" 
          />
          
          <a
            href="#portfolio"
            className="w-full sm:w-auto text-center text-sm landscape:text-xs md:text-base md:landscape:text-base lg:text-lg py-3 px-6 landscape:py-2 landscape:px-4 md:py-4 md:px-8 md:landscape:py-4 md:landscape:px-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-medium"
          >
            Voir nos réalisations
          </a>
        </motion.div>

        {/* Logo Texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          // Marges réduites
          className="mt-12 landscape:mt-6 md:mt-16 md:landscape:mt-16 lg:mt-20 xl:mt-24"
        >
          <Image
            src="/logos/nuit-blanche-production-texte.webp"
            alt="Nuit Blanche Production - Agence Vidéo Vosges"
            width={300}
            height={100}
            // Taille réduite
            className="w-32 landscape:w-20 md:w-48 md:landscape:w-48 lg:w-64 xl:w-80 h-auto mx-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator - Caché en paysage mobile si trop petit */}
      <motion.div
        className="absolute bottom-6 landscape:hidden md:landscape:flex md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-zinc-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}