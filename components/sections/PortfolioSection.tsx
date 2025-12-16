'use client';

import { motion } from 'framer-motion';

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

// Utility function to convert YouTube URL to embed URL
function getYoutubeEmbedUrl(url: string): string {
  const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : '';
  return `https://www.youtube.com/embed/${videoId}`;
}

export function PortfolioSection() {
  const projects = [
    {
      title: 'Campaign Ultra Moderne',
      category: 'Publicité',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    },
    {
      title: 'Festival Summer 2024',
      category: 'Événementiel',
      youtubeUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0', // Placeholder
    },
    {
      title: 'Brand Story Premium',
      category: 'Corporate',
      youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw', // Placeholder
    },
    {
      title: 'Aerial Masterpiece',
      category: 'Drone',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    },
    {
      title: 'Tech Launch Event',
      category: 'Corporate',
      youtubeUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0', // Placeholder
    },
    {
      title: 'Fashion Week Aftermovie',
      category: 'Événementiel',
      youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw', // Placeholder
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-white/20 transition-all duration-300"
            >
              {/* YouTube Embed */}
              <div className="aspect-video w-full">
                <iframe
                  src={getYoutubeEmbedUrl(project.youtubeUrl)}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-zinc-400 font-medium mb-1 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}