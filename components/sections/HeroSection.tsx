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
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-28 pb-20 md:pt-0 md:pb-0">
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

      {/* Container élargi à max-w-7xl pour laisser respirer les gros textes */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        
        {/* 1. LA PUNCHLINE (Massive sur Desktop) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          // MODIF: Mobile reste petit | Desktop passe en 7xl/8xl (énorme) avec des marges doublées (mb-8)
          className="text-3xl max-[374px]:text-2xl landscape:text-2xl md:text-7xl md:landscape:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight mb-3 landscape:mb-2 md:mb-8"
        >
          La créativité ne dort jamais
        </motion.h1>

        {/* 2. LE TITRE SEO */}
        <motion.h2
          // MODIF: Desktop passe en 3xl/4xl avec grosse marge haute (mt-8)
          className="text-lg max-[374px]:text-base landscape:text-base md:text-3xl md:landscape:text-3xl lg:text-4xl text-zinc-300 font-medium mt-3 landscape:mt-2 md:mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Production Vidéo, Drone & Stratégie.
        </motion.h2>

        {/* 3. LE SOUS-TITRE */}
        <motion.p
          // MODIF: Desktop passe en text-xl pour plus de lisibilité + marge haute aérée
          className="text-sm max-[374px]:text-[11px] landscape:text-xs md:text-xl md:landscape:text-xl text-zinc-400 max-w-3xl mx-auto mt-3 landscape:mt-2 md:mt-8 leading-relaxed"
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
          // MODIF: Grosse marge (mt-12) et gros gap (gap-6) sur Desktop
          className="flex flex-col sm:flex-row gap-3 landscape:gap-2 md:gap-6 justify-center items-center mt-6 landscape:mt-4 md:mt-14"
        >
          {/* Boutons grossis sur Desktop (px-10 py-5 text-lg) */}
          <BookingButton 
            variant="default" 
            className="text-sm landscape:text-xs md:text-lg md:landscape:text-lg py-2.5 px-5 landscape:py-2 landscape:px-4 md:py-5 md:px-10" 
          />
          
          <a
            href="#portfolio"
            className="text-sm landscape:text-xs md:text-lg md:landscape:text-lg py-2.5 px-5 landscape:py-2 landscape:px-4 md:py-5 md:px-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-medium"
          >
            Voir nos réalisations
          </a>
        </motion.div>

        {/* Logo Texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          // MODIF: Très grosse marge (mt-24) pour bien le détacher
          className="mt-12 landscape:mt-6 md:mt-24"
        >
          <Image
            src="/logos/nuit-blanche-production-texte.webp"
            alt="Nuit Blanche Production - Agence Vidéo Vosges"
            width={192}
            height={66}
            // MODIF: Logo plus grand sur Desktop (w-56)
            className="w-32 landscape:w-24 md:w-56 md:landscape:w-56 h-auto mx-auto opacity-60 hover:opacity-90 transition-opacity duration-300"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 landscape:bottom-4 md:bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-5 h-8 landscape:w-4 landscape:h-7 md:w-6 md:h-10 border-2 border-zinc-500 rounded-full flex justify-center">
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