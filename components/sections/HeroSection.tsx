'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BookingButton } from '@/components/ui/BookingButton';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détecte si on est sur mobile
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || isMobile) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (error) {
        console.log('Autoplay error:', error);
      }
    };

    // Attendre que la vidéo soit prête
    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', playVideo, { once: true });
    }
  }, [isMobile]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo uniquement sur desktop */}
      {!isMobile && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Image fixe sur mobile (fallback) */}
      {isMobile && (
        <div className="absolute inset-0">
          <Image
            src="/hero-mobile-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
      )}

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

        {/* Logo Texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12"
        >
          <Image
            src="/logos/nuit-blanche-production-texte.webp"
            alt="Nuit Blanche Production"
            width={192}
            height={66}
            className="w-32 md:w-48 h-auto mx-auto opacity-80"
          />
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