'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LogoMarqueeProps {
  files: string[];
}

export function LogoMarquee({ files }: LogoMarqueeProps) {
  const [shuffledFiles, setShuffledFiles] = useState<string[]>([]);

  useEffect(() => {
    // Mélange aléatoire des fichiers au montage côté client
    const shuffled = [...files].sort(() => Math.random() - 0.5);
    setShuffledFiles(shuffled);
  }, [files]);

  // Si pas encore shufflé, on affiche les fichiers d'origine pour éviter le flash
  const displayFiles = shuffledFiles.length > 0 ? shuffledFiles : files;

  // Duplique pour un défilement infini sans coupure
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
    <div className="relative overflow-hidden">
      {/* Gradient fade sur les bords */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Conteneur du défilement avec padding vertical pour le zoom */}
      <div className="flex gap-24 animate-marquee py-8">
        {allLogos.map((file, index) => (
          <div
            key={`${file}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={`/clients/${file}`}
              alt={`Logo client ${file.split('.')[0]}`}
              width={160}
              height={80}
              className="h-20 w-auto object-contain grayscale brightness-0 opacity-70 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-out"
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
      `}</style>
    </div>
  );
}