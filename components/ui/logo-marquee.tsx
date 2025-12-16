'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface LogoMarqueeProps {
  files: string[];
}

export function LogoMarquee({ files }: LogoMarqueeProps) {
  const [shuffledFiles, setShuffledFiles] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shuffled = [...files].sort(() => Math.random() - 0.5);
    setShuffledFiles(shuffled);
  }, [files]);

  const displayFiles = shuffledFiles.length > 0 ? shuffledFiles : files;
  const allLogos = [...displayFiles, ...displayFiles];

  if (displayFiles.length === 0) {
    return (
      <div className="text-center text-zinc-400 py-8">
        <p className="text-sm">Aucun logo client trouvé</p>
        <p className="text-xs mt-2 text-zinc-500">
          Ajoutez des images dans <code className="bg-zinc-100 px-2 py-1 rounded">public/clients/</code>
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Gradient fade sur les bords */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

      {/* Zone centrale de couleur - spotlight effect */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[400px] pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl" />
      </div>

      {/* Conteneur du défilement */}
      <div className="flex gap-24 animate-marquee py-8 relative z-[5]">
        {allLogos.map((file, index) => (
          <div
            key={`${file}-${index}`}
            className="flex-shrink-0 flex items-center justify-center logo-item"
          >
            <Image
              src={`/clients/${file}`}
              alt={`Logo client ${file.split('.')[0]}`}
              width={160}
              height={80}
              className="h-20 w-auto object-contain transition-all duration-500 ease-out hover:scale-110"
              style={{ maxWidth: '240px' }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 50s linear infinite;
          width: max-content;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Effet de couleur progressive au centre */
        :global(.logo-item) {
          filter: grayscale(1) brightness(0) opacity(0.6);
        }

        /* Les logos au centre deviennent colorés */
        @media (min-width: 768px) {
          :global(.logo-item):nth-child(3),
          :global(.logo-item):nth-child(4),
          :global(.logo-item):nth-child(5) {
            filter: grayscale(0) brightness(1) opacity(1);
          }
        }

        /* Animation progressive basée sur la position */
        @keyframes colorReveal {
          0%, 40% {
            filter: grayscale(1) brightness(0) opacity(0.6);
          }
          50% {
            filter: grayscale(0) brightness(1) opacity(1);
          }
          60%, 100% {
            filter: grayscale(1) brightness(0) opacity(0.6);
          }
        }

        :global(.logo-item) {
          animation: colorReveal 8s ease-in-out infinite;
        }

        :global(.logo-item):nth-child(2n) {
          animation-delay: 0.5s;
        }

        :global(.logo-item):nth-child(3n) {
          animation-delay: 1s;
        }

        :global(.logo-item):nth-child(4n) {
          animation-delay: 1.5s;
        }

        :global(.logo-item):nth-child(5n) {
          animation-delay: 2s;
        }

        /* Hover désactive l'animation et met en couleur */
        :global(.logo-item):hover {
          animation: none !important;
          filter: grayscale(0) brightness(1) opacity(1) !important;
        }
      `}</style>
    </div>
  );
}