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

      {/* Container Layout */}
      {/* AJUSTEMENT 2XL : max-w élargi à 110rem pour laisser la place aux textes énormes */}
      <div className="relative z-10 text-center px-4 max-w-[95rem] 2xl:max-w-[110rem] mx-auto w-full flex flex-col h-full md:justify-center">
        
        {/* 1. LA PUNCHLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          // CORRECTION : Remplacement de min-[1600px] par 2xl
          // TAILLES :
          // Mobile: 3xl
          // Tablette: 5xl
          // Laptop: 7xl
          // 2XL (Ton écran 1600+): 9xl (C'est MASSIF)
          className="text-3xl max-[374px]:text-2xl landscape:text-2xl md:text-5xl md:landscape:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight text-white leading-[1.1] mb-4 landscape:mb-2 md:mb-5 md:landscape:mb-5 lg:mb-6 2xl:mb-12"
        >
          La créativité ne dort jamais
        </motion.h1>

        {/* 2. LE TITRE SEO */}
        <motion.h2
          // 2XL : text-5xl (Très grand pour un sous-titre) + Marge augmentée
          className="text-lg max-[374px]:text-base landscape:text-sm md:text-2xl md:landscape:text-2xl lg:text-3xl 2xl:text-5xl text-zinc-300 font-medium mt-3 landscape:mt-1 md:mt-5 md:landscape:mt-5 lg:mt-6 2xl:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Production Vidéo, Drone & Stratégie.
        </motion.h2>

        {/* 3. LE SOUS-TITRE */}
        <motion.p
          // 2XL : text-3xl et max-width large
          className="text-sm max-[374px]:text-xs landscape:text-xs md:text-lg md:landscape:text-lg lg:text-xl 2xl:text-3xl text-zinc-400 max-w-4xl 2xl:max-w-7xl mx-auto mt-3 landscape:mt-2 md:mt-5 md:landscape:mt-5 lg:mt-6 2xl:mt-12 leading-relaxed"
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
          // 2XL : Espace gap-10 et grosse marge haute mt-24
          className="flex flex-col sm:flex-row gap-3 landscape:gap-2 md:gap-5 md:landscape:gap-5 lg:gap-6 2xl:gap-10 justify-center items-center mt-6 landscape:mt-3 md:mt-8 md:landscape:mt-8 lg:mt-10 xl:mt-12 2xl:mt-24"
        >
          <BookingButton 
            variant="default" 
            // 2XL : Boutons géants (text-2xl, py-8, px-14)
            className="w-full sm:w-auto text-sm landscape:text-xs md:text-base md:landscape:text-base lg:text-lg 2xl:text-2xl py-3 px-6 landscape:py-2 landscape:px-4 md:py-4 md:px-8 md:landscape:py-4 md:landscape:px-8 2xl:py-8 2xl:px-14" 
          />
          
          <a
            href="#portfolio"
            className="w-full sm:w-auto text-center text-sm landscape:text-xs md:text-base md:landscape:text-base lg:text-lg 2xl:text-2xl py-3 px-6 landscape:py-2 landscape:px-4 md:py-4 md:px-8 md:landscape:py-4 md:landscape:px-8 2xl:py-8 2xl:px-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-medium"
          >
            Voir nos réalisations
          </a>
        </motion.div>

        {/* Logo Texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          // 2XL : On pousse le logo très bas (mt-40)
          className="mt-12 landscape:mt-8 md:mt-16 md:landscape:mt-16 lg:mt-20 xl:mt-24 2xl:mt-40"
        >
          <Image
            src="/logos/nuit-blanche-production-texte.webp"
            alt="Nuit Blanche Production - Agence Vidéo Vosges"
            width={500}
            height={166}
            // 2XL : Logo très large (w-[32rem])
            className="w-32 landscape:w-20 md:w-48 md:landscape:w-48 lg:w-64 xl:w-80 2xl:w-[32rem] h-auto mx-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator - Caché sur mobile paysage, visible ailleurs */}
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