'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Extract YouTube ID from URL - Ultra-robust regex covering all cases
function getYoutubeId(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match ? match[1] : '';
}

// Generate YouTube thumbnail URL with fallback
function getYoutubeThumbnail(url: string): string {
  const videoId = getYoutubeId(url);
  if (!videoId) {
    // Fallback image for invalid URLs
    return '/placeholder-video.jpg';
  }
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

// Generate YouTube embed URL with autoplay
function getYoutubeEmbedUrl(url: string): string {
  const videoId = getYoutubeId(url);
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

export function PortfolioSection() {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const projects = [
    {
      title: 'Norske Skog Golbey',
      category: 'Industrie - Timelapse',
      youtubeUrl: 'https://youtu.be/I0pU7wLKetw',
    },
    {
      title: 'Les hopitaux voient la vie en vosges',
      category: 'Public',
      youtubeUrl: 'https://youtu.be/LcbQlzOKlnM',
    },
    {
      title: 'Confiserie des Hautes Vosges',
      category: 'Corporate',
      youtubeUrl: 'https://youtu.be/C1gptn3m_Ms',
    },
    {
      title: 'Les Jeux de la Diversité 2024',
      category: 'Évènementiel',
      youtubeUrl: 'https://youtu.be/VEjvIBjroRQ',
    },
    {
      title: 'Sicovad',
      category: 'Public - Timelapse',
      youtubeUrl: 'https://youtu.be/TSf_HKgMpWM',
    },
    {
      title: 'ANLCI',
      category: 'Reportage',
      youtubeUrl: 'https://youtu.be/xUhE4ijq1j4',
    },
  ];

  return (
    <section id="portfolio" className="py-32 px-4 bg-zinc-900/30">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Portfolio</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Une sélection de nos créations les plus marquantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog
              key={index}
              open={openDialog === index}
              onOpenChange={(open) => setOpenDialog(open ? index : null)}
            >
              <DialogTrigger asChild>
                <motion.div
                  variants={fadeInUp}
                  className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-white/20 hover:scale-110 hover:z-50 transition-all duration-300 ease-out cursor-pointer"
                >
                  {/* Thumbnail with B&W to Color effect */}
                  <div className="aspect-video w-full relative overflow-hidden">
                    <Image
                      src={getYoutubeThumbnail(project.youtubeUrl)}
                      alt={project.title}
                      fill
                      className="grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <Play className="w-5 h-5 text-black ml-0.5" fill="black" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent">
                    <p className="text-xs text-zinc-400 font-medium mb-1 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-7xl w-full p-0 bg-black border-none overflow-hidden">
                {/* Custom Close Button */}
                <button
                  onClick={() => setOpenDialog(null)}
                  className="absolute right-4 top-4 z-50 rounded-full bg-white/10 backdrop-blur-sm p-3 hover:bg-white/20 transition-all duration-200"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                {/* Video Container - 16/9 aspect ratio */}
                <div className="aspect-video relative w-full">
                  {openDialog === index && (
                    <iframe
                      src={getYoutubeEmbedUrl(project.youtubeUrl)}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full absolute inset-0"
                    />
                  )}
                </div>

                {/* Video Info - BELOW the video, not overlaying */}
                <div className="p-6 bg-zinc-950">
                  <p className="text-xs text-zinc-400 font-medium mb-1 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </motion.div>
    </section>
  );
}