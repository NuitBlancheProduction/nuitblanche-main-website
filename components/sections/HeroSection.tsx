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
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* 1. LA PUNCHLINE - L'Impact Émotionnel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span className="block text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none uppercase">
            La créativité
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none uppercase mt-2">
            ne dort jamais.
          </span>
        </motion.div>

        {/* 2. LE TITRE SEO - Le Business */}
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-zinc-100 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Production Vidéo, Drone & Stratégie Digitale dans les Vosges
        </motion.h1>

        {/* 3. LE SOUS-TITRE - La Réassurance */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="text-zinc-300 font-semibold">Basés à Golbey.</span> Nous transformons votre vision en impact visuel pour l'industrie, le BTP et les marques du Grand-Est.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <BookingButton variant="default" />
          <button className="px-8 py-4 text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold backdrop-blur-sm">
            Voir nos réalisations
          </button>
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
            className="w-32 md:w-48 h-auto mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}