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
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32 pb-24 md:pt-0 md:pb-0">
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
      <div className="relative z-10 text-center px-4 max-w-[95rem] mx-auto w-full flex flex-col justify-center h-full">
        
        {/* 1. LA PUNCHLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          // CORRECTION CRITIQUE : Ajout de md:landscape:text-7xl pour empêcher le landscape mobile (text-2xl) de s'appliquer sur PC
          className="text-4xl max-[374px]:text-3xl landscape:text-2xl md:text-7xl md:landscape:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white leading-[1.1] mb-6 landscape:mb-2 md:mb-8 md:landscape:mb-8 lg:mb-12"
        >
          La créativité ne dort jamais
        </motion.h1>

        {/* 2. LE TITRE SEO */}
        <motion.h2
          // CORRECTION : md:landscape:text-3xl pour surcharger le landscape:text-base
          className="text-xl max-[374px]:text-lg landscape:text-base md:text-3xl md:landscape:text-3xl lg:text-4xl text-zinc-300 font-medium mt-6 landscape:mt-2 md:mt-8 md:landscape:mt-8 lg:mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Production Vidéo, Drone & Stratégie.
        </motion.h2>

        {/* 3. LE SOUS-TITRE */}
        <motion.p
          // CORRECTION : md:landscape:text-xl pour surcharger le landscape:text-xs
          className="text-base max-[374px]:text-sm landscape:text-xs md:text-xl md:landscape:text-xl lg:text-2xl text-zinc-400 max-w-4xl mx-auto mt-6 landscape:mt-3 md:mt-8 md:landscape:mt-8 lg:mt-12 leading-relaxed"
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
          // CORRECTION : md:landscape:gap-6 et md:landscape:mt-12
          className="flex flex-col sm:flex-row gap-4 landscape:gap-3 md:gap-6 md:landscape:gap-6 lg:gap-8 justify-center items-center mt-10 landscape:mt-4 md:mt-12 md:landscape:mt-12 lg:mt-16 xl:mt-20"
        >
          <BookingButton 
            variant="default" 
            // CORRECTION : Surcharge des styles boutons pour Desktop Landscape
            className="w-full sm:w-auto text-base landscape:text-xs md:text-lg md:landscape:text-lg lg:text-xl py-4 px-8 landscape:py-2 landscape:px-4 md:py-5 md:px-10 md:landscape:py-5 md:landscape:px-10" 
          />
          
          <a
            href="#portfolio"
            className="w-full sm:w-auto text-center text-base landscape:text-xs md:text-lg md:landscape:text-lg lg:text-xl py-4 px-8 landscape:py-2 landscape:px-4 md:py-5 md:px-10 md:landscape:py-5 md:landscape:px-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-medium"
          >
            Voir nos réalisations
          </a>
        </motion.div>

        {/* Logo Texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          // CORRECTION : md:landscape:mt-32 (Force le logo tout en bas sur PC)
          className="mt-20 landscape:mt-8 md:mt-32 md:landscape:mt-32 lg:mt-40 xl:mt-[20vh]"
        >
          <Image
            src="/logos/nuit-blanche-production-texte.webp"
            alt="Nuit Blanche Production - Agence Vidéo Vosges"
            width={300}
            height={100}
            // CORRECTION : md:landscape:w-72
            className="w-40 landscape:w-28 md:w-60 md:landscape:w-60 lg:w-80 xl:w-96 h-auto mx-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 landscape:bottom-3 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-5 h-8 landscape:w-4 landscape:h-6 md:w-6 md:h-10 border-2 border-zinc-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-1 landscape:w-0.5 landscape:h-0.5 md:w-1.5 md:h-1.5 bg-white rounded-full mt-2 landscape:mt-1.5"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}