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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Vidéo background - FIX iOS */}
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

      {/* CONTENU PRINCIPAL CENTRÉ */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* 1. HOOK PRINCIPAL - Grande Impact */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          La créativité
          <br />
          ne dort jamais.
        </motion.h1>

        {/* 2. SOUS-TITRE SEO */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-300 font-medium mt-4"
        >
          Production Vidéo & Drone - Vosges & Grand-Est.
        </motion.h2>

        {/* 3. DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          <span className="text-zinc-300">Basés à Épinal.</span> Nous accompagnons les entreprises et institutions audacieuses.
        </motion.p>

        {/* 4. CTA BUTTONS - RETOUR AU STYLE QUI FONCTIONNAIT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
        >
          {/* BOUTON 1 : BookingButton Component */}
          <BookingButton variant="default" />
          
          {/* BOUTON 2 : Style Glass Manual */}
          <a
            href="#portfolio"
            className="px-8 py-4 text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold backdrop-blur-sm"
          >
            Voir nos réalisations
          </a>
        </motion.div>

        {/* Logo Texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <Image
            src="/logos/nuit-blanche-production-texte.webp"
            alt="Nuit Blanche Production - Agence Vidéo Vosges"
            width={192}
            height={66}
            className="w-32 md:w-48 h-auto mx-auto opacity-60 hover:opacity-90 transition-opacity duration-300"
          />
        </motion.div>
      </div>

      {/* DÉTAILS TECHNIQUES DISCRETS (Swiss Tech Style) */}
      
      {/* Coordonnées GPS - Bas Gauche */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-6 md:left-12 z-20"
      >
        <p className="text-[10px] font-mono tracking-wider text-zinc-600">
          48.19° N, 6.43° E
        </p>
      </motion.div>

      {/* Scroll Indicator - Bas Droite */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 right-6 md:right-12 z-20"
      >
        <div className="flex flex-col items-end gap-2">
          <p className="text-[10px] font-mono tracking-[0.2em] text-zinc-600 uppercase">
            Scroll
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              className="text-zinc-600"
            >
              <path 
                d="M6 2L6 10M6 10L2 6M6 10L10 6" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="square"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Bordure technique inférieure */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}