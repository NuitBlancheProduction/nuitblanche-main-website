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
      <div className="relative z-10 text-center px-4 max-w-[95rem] 2xl:max-w-[110rem] mx-auto w-full flex flex-col h-full md:justify-center">
        
        {/* 1. LA PUNCHLINE - Réduction de 10-15% calculée précisément */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          // --- CALIBRAGE FIN (-10%) ---
          // Mobile : text-[1.75rem] (un peu moins que 3xl)
          // Tablette : text-[2.75rem] (44px au lieu de 48px)
          // Laptop (lg) : text-[4rem] (64px au lieu de 72px)
          // Desktop (xl) : text-[5.5rem] (88px au lieu de 96px)
          // Géant (2xl) : text-[7rem] (112px au lieu de 128px)
          className="text-[1.75rem] max-[374px]:text-2xl landscape:text-2xl md:text-[2.75rem] md:landscape:text-[2.75rem] lg:text-[4rem] lg:landscape:text-[4rem] xl:text-[5.5rem] xl:landscape:text-[5.5rem] 2xl:text-[7rem] font-bold tracking-tight text-white leading-[1.1] mb-4 landscape:mb-2 md:mb-5 md:landscape:mb-5 lg:mb-8 2xl:mb-10"
        >
          La créativité ne dort jamais
        </motion.h1>

        {/* 2. LE TITRE SEO - Réduit d'un cran standard partout */}
        <motion.h2
          className="text-base max-[374px]:text-sm landscape:text-sm md:text-xl md:landscape:text-xl lg:text-2xl lg:landscape:text-2xl xl:text-3xl 2xl:text-4xl text-zinc-300 font-medium mt-3 landscape:mt-1 md:mt-4 md:landscape:mt-4 lg:mt-5 2xl:mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Production Vidéo, Drone & Stratégie.
        </motion.h2>

        {/* 3. LE SOUS-TITRE - Réduit d'un cran */}
        <motion.p
          className="text-xs max-[374px]:text-[10px] landscape:text-[10px] md:text-base md:landscape:text-base lg:text-lg lg:landscape:text-lg xl:text-xl 2xl:text-2xl text-zinc-400 max-w-4xl 2xl:max-w-6xl mx-auto mt-3 landscape:mt-2 md:mt-4 md:landscape:mt-4 lg:mt-5 2xl:mt-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-zinc-300">Basés dans les Vosges.</span> Nous accompagnons les entreprises et institutions audacieuses.
        </motion.p>

        {/* 4. CTA Buttons - Réduction proportionnelle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 landscape:gap-2 md:gap-4 md:landscape:gap-4 lg:gap-5 2xl:gap-8 justify-center items-center mt-5 landscape:mt-3 md:mt-6 md:landscape:mt-6 lg:mt-8 xl:mt-10 2xl:mt-16"
        >
          <BookingButton 
            variant="default" 
            className="w-full sm:w-auto text-xs landscape:text-[10px] md:text-sm md:landscape:text-sm lg:text-base lg:landscape:text-base 2xl:text-xl py-2.5 px-5 landscape:py-2 landscape:px-4 md:py-3 md:px-6 md:landscape:py-3 md:landscape:px-6 2xl:py-6 2xl:px-12" 
          />
          
          <a
            href="#portfolio"
            className="w-full sm:w-auto text-center text-xs landscape:text-[10px] md:text-sm md:landscape:text-sm lg:text-base lg:landscape:text-base 2xl:text-xl py-2.5 px-5 landscape:py-2 landscape:px-4 md:py-3 md:px-6 md:landscape:py-3 md:landscape:px-6 2xl:py-6 2xl:px-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-medium"
          >
            Voir nos réalisations
          </a>
        </motion.div>

        {/* Logo Texte - Légèrement réduit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 landscape:mt-6 md:mt-12 md:landscape:mt-12 lg:mt-16 xl:mt-20 2xl:mt-32"
        >
          <Image
            src="/logos/nuit-blanche-production-texte.webp"
            alt="Nuit Blanche Production - Agence Vidéo Vosges"
            width={450}
            height={150}
            className="w-28 landscape:w-16 md:w-40 md:landscape:w-40 lg:w-56 xl:w-72 2xl:w-[28rem] h-auto mx-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
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