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
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

      {/* Grille technique overlay (subtil) */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }} 
      />

      {/* COIN SUPÉRIEUR GAUCHE : EST. */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-8 left-6 md:left-12 z-20"
      >
        <p className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
          Est. 2012
        </p>
      </motion.div>

      {/* COIN SUPÉRIEUR DROIT : COORDONNÉES GPS */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-8 right-6 md:right-12 z-20 text-right"
      >
        <p className="text-[10px] font-mono tracking-wider text-zinc-500">
          48.19° N, 6.43° E
        </p>
      </motion.div>

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* 1. HOOK ÉMOTIONNEL */}
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

        {/* 2. H1 SEO - POSITIONNEMENT STRATÉGIQUE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-zinc-300 font-medium tracking-tight"
        >
          Partenaire Vidéo & Stratégie Digitale.
        </motion.h2>

        {/* 3. DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          De la captation drone à la post-production cinéma. Nous accompagnons les entreprises et institutions audacieuses.
        </motion.p>

        {/* 4. LOCALISATION (Data Style) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xs font-mono text-zinc-500 mt-4 tracking-wider"
        >
          Studio à Épinal (Vosges) • Disponible France & Suisse
        </motion.p>

        {/* 5. CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
        >
          <BookingButton variant="default" className="px-8 py-4 text-sm font-medium">
            Démarrer un Projet
          </BookingButton>
          
          <a
            href="#showreel"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-sm font-medium"
          >
            Showreel 2025
          </a>
        </motion.div>

        {/* Logo Texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16"
        >
          <Image
            src="/logos/nuit-blanche-production-texte.webp"
            alt="Nuit Blanche Production - Agence Vidéo Vosges"
            width={192}
            height={66}
            className="w-32 md:w-48 h-auto mx-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
          />
        </motion.div>
      </div>

      {/* COIN INFÉRIEUR GAUCHE : STATUS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-8 left-6 md:left-12 z-20"
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
            Disponible
          </p>
        </div>
      </motion.div>

      {/* COIN INFÉRIEUR DROIT : SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-8 right-6 md:right-12 z-20"
      >
        <div className="flex flex-col items-end gap-2">
          <p className="text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
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
              className="text-zinc-500"
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

      {/* BORDURE INFÉRIEURE TECHNIQUE */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}