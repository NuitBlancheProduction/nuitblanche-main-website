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
      <div className="text-center text-zinc-600 py-8">
        <p className="text-sm">Aucun logo client trouvé</p>
        <p className="text-xs mt-2 text-zinc-700">
          Ajoutez des images dans <code className="bg-zinc-800 px-2 py-1 rounded">public/clients/</code>
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade sur les bords */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-900/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-900/50 to-transparent z-10 pointer-events-none" />

      {/* Conteneur du défilement */}
      <div className="flex gap-16 animate-marquee hover:pause-animation">
        {allLogos.map((file, index) => (
          <div
            key={`${file}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={`/clients/${file}`}
              alt={`Logo client ${file.split('.')[0]}`}
              width={120}
              height={48}
              className="h-12 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ maxWidth: '180px' }}
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
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}