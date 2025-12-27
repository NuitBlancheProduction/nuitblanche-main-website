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
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-zinc-950 pt-28 pb-20 landscape:pt-28 landscape:pb-24 landscape:justify-start md:landscape:justify-center md:pt-0 md:pb-0">
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

      {/* Container Layout - On élargit le max-width pour le Desktop */}
      <div className="relative z-10 text-center px-4 max-w-[95rem] 2xl:max-w-[110rem] mx-auto w-full flex flex-col h-full md:justify-center">
        
        {/* 1. LA PUNCHLINE (Taille validée -12%) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          // ESPACEMENT (Le Mix) :
          // lg (Laptop) : mb-8
          // xl (1280px+) : mb-10 (Plus d'espace)
          // 2xl (1536px+) : mb-14 (Grand espace)
          className="text-[1.75rem] max-[374px]:text-2xl landscape:text-2xl md:text-[2.75rem] md:landscape:text-[2.75rem] lg:text-[4rem] lg:landscape:text-[4rem] xl:text-[5.5rem] xl:landscape:text-[5.5rem] 2xl:text-[7rem] font-bold tracking-tight text-white leading-[1.1] mb-4 landscape:mb-2 md:mb-5 md:landscape:mb-5 lg:mb-8 xl:mb-10 2xl:mb-14"
        >
          La créativité ne dort jamais
        </motion.h1>

        {/* 2. LE TITRE SEO */}
        <motion.h2
          // ESPACEMENT (Le Mix) : Augmentation progressive mt-6 -> mt-8 -> mt-12
          className="text-lg max-[374px]:text-base landscape:text-sm md:text-2xl md:landscape:text-2xl lg:text-3xl lg:landscape:text-3xl xl:text-4xl 2xl:text-5xl text-zinc-300 font-medium mt-3 landscape:mt-1 md:mt-5 md:landscape:mt-5 lg:mt-6 xl:mt-8 2xl:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Production Vidéo, Drone & Stratégie.
        </motion.h2>

        {/* 3. LE SOUS-TITRE */}
        <motion.p
          className="text-sm max-[374px]:text-xs landscape:text-xs md:text-lg md:landscape:text-lg lg:text-xl lg:landscape:text-xl xl:text-2xl 2xl:text-3xl text-zinc-400 max-w-4xl 2xl:max-w-7xl mx-auto mt-3 landscape:mt-2 md:mt-5 md:landscape:mt-5 lg:mt-6 xl:mt-8 2xl:mt-12 leading-relaxed"
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
          // LE MIX DES ESPACES : 
          // lg: mt-10 (Standard)
          // xl (1280px+): mt-16 (Aéré, mais pas explosé)
          // 2xl: mt-24 (Massif)
          className="flex flex-col sm:flex-row gap-3 landscape:gap-2 md:gap-5 md:landscape:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 justify-center items-center mt-6 landscape:mt-3 md:mt-8 md:landscape:mt-8 lg:mt-10 xl:mt-16 2xl:mt-24"
        >
          <BookingButton 
            variant="default" 
            className="w-full sm:w-auto text-sm landscape:text-xs md:text-base md:landscape:text-base lg:text-lg lg:landscape:text-lg 2xl:text-2xl py-3 px-6 landscape:py-2 landscape:px-4 md:py-4 md:px-8 md:landscape:py-4 md:landscape:px-8 2xl:py-8 2xl:px-14" 
          />
          
          <a
            href="#portfolio"
            className="w-full sm:w-auto text-center text-sm landscape:text-xs md:text-base md:landscape:text-base lg:text-lg lg:landscape:text-lg 2xl:text-2xl py-3 px-6 landscape:py-2 landscape:px-4 md:py-4 md:px-8 md:landscape:py-4 md:landscape:px-8 2xl:py-8 2xl:px-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-medium"
          >
            Voir nos réalisations
          </a>
        </motion.div>

        {/* Logo Texte - LE FIX DU BUG EST ICI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          // CORRECTION ESPACEMENT :
          // lg: mt-20 (Standard)
          // xl (1280px+): mt-32 (Le "Mix" : bien plus bas que LG, mais safe)
          // 2xl: mt-48 (Massif)
          className="mt-12 landscape:mt-8 md:mt-16 md:landscape:mt-16 lg:mt-20 xl:mt-32 2xl:mt-48"
        >
          <Image
            src="/logos/nuit-blanche-production-texte.webp"
            alt="Nuit Blanche Production - Agence Vidéo Vosges"
            width={500}
            height={166}
            // CORRECTION TAILLE :
            // lg: w-64
            // xl (1280px+): w-96 (Le "Mix" : ~384px, grand mais pas 32rem/512px)
            // 2xl: w-[30rem] (Massif)
            className="w-32 landscape:w-20 md:w-48 md:landscape:w-48 lg:w-64 xl:w-96 2xl:w-[30rem] h-auto mx-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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