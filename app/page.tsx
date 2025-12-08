'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Déclaration TypeScript pour Cal.com
declare global {
  interface Window {
    Cal?: any;
  }
}
import {
  Video,
  Calendar,
  TrendingUp,
  Plane,
  ArrowRight,
  Mail,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export default function Home() {
  useEffect(() => {
    // Initialisation du script Cal.com (si pas déjà fait par Navbar)
    if (typeof window !== 'undefined' && !window.Cal) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        (function (C, A, L) { 
          let p = function (a, ar) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; 
              cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); }; 
              const namespace = ar[1]; 
              api.q = api.q || []; 
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar); 
              return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "rdv", {origin:"https://app.cal.com"});
        Cal.ns.rdv("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      `;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <main className="bg-zinc-950 text-white">
      <HeroSection />
      <ServicesSection />
      <ProofSection />
      <FoundersSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzI3MjcyNyIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-block px-4 py-2 bg-violet-600/10 border border-violet-600/20 rounded-full mb-8">
            <span className="text-violet-400 text-sm font-medium tracking-wider">
              NUIT BLANCHE PRODUCTION
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Capturer l'Essence.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
            Amplifier l'Image.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Agence de production audiovisuelle stratégique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button
            data-cal-link="nuitblancheproduction/rdv"
            data-cal-namespace="rdv"
            data-cal-config='{"layout":"month_view"}'
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg rounded-full group"
          >
            Démarrer un projet
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
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
            className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: 'Corporate',
      description: 'Interviews, Brand Content, Communication Interne',
      color: 'from-violet-600 to-purple-600',
    },
    {
      icon: Calendar,
      title: 'Événementiel',
      description: 'Festivals, Aftermovies, Captation Live',
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Publicité',
      description: 'Spots TV, Réseaux Sociaux, Campagnes Digitales',
      color: 'from-pink-600 to-rose-600',
    },
    {
      icon: Plane,
      title: 'Drone & Technique',
      description: 'Vues Aériennes, FPV Racing, Prises Techniques',
      color: 'from-rose-600 to-orange-600',
    },
  ];

  return (
    <section id="services" className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Notre Expertise
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Des solutions audiovisuelles complètes pour propulser votre
            communication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-violet-600/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProofSection() {
  const brands = [
    'BRAND ONE',
    'CREATIVE CO',
    'STUDIO PRO',
    'MEDIA GROUP',
    'VISION LABS',
    'DIGITAL FIRST',
  ];

  return (
    <section className="py-20 bg-zinc-900/50 overflow-hidden border-y border-zinc-800">
      <div className="mb-12 text-center">
        <p className="text-zinc-500 uppercase tracking-widest text-sm">
          Ils nous font confiance
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 text-2xl font-bold text-zinc-700 hover:text-zinc-500 transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}

function FoundersSection() {
  const founders = [
    {
      name: 'Denis',
      role: 'Stratégie & Développement',
      description:
        'Expert en stratégie de contenu et développement commercial, Denis transforme chaque projet en opportunité de croissance.',
    },
    {
      name: 'Maxime',
      role: 'Direction Artistique & Technique',
      description:
        'Visionnaire créatif et passionné de technique, Maxime donne vie aux concepts les plus audacieux avec une précision cinématographique.',
    },
  ];

  return (
    <section id="fondateurs" className="py-32 px-4 bg-zinc-950">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">L'Alliance</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Un binôme complémentaire au service de votre vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={fadeInUp}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-violet-600/50 transition-all duration-300"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-zinc-800 group-hover:text-violet-900 transition-colors">
                    {founder.name[0]}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2">{founder.name}</h3>
                <p className="text-violet-400 font-medium mb-4">
                  {founder.role}
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function PortfolioSection() {
  const projects = [
    { title: 'Campaign Ultra Moderne', category: 'Publicité' },
    { title: 'Festival Summer 2024', category: 'Événementiel' },
    { title: 'Brand Story Premium', category: 'Corporate' },
    { title: 'Aerial Masterpiece', category: 'Drone' },
    { title: 'Tech Launch Event', category: 'Corporate' },
    { title: 'Fashion Week Aftermovie', category: 'Événementiel' },
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
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Une sélection de nos créations les plus marquantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-violet-600/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  <Video className="w-16 h-16 text-zinc-700 group-hover:text-violet-600 transition-colors" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-violet-400 font-medium mb-1 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Prêt à passer au
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
              niveau supérieur ?
            </span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Discutons de votre projet et créons ensemble quelque chose
            d'exceptionnel
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg rounded-full group"
          >
            <Mail className="mr-2" />
            contact@nuitblanche.production
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-700 hover:border-violet-600 text-white px-8 py-6 text-lg rounded-full bg-transparent"
          >
            <Phone className="mr-2" />
            +33 X XX XX XX XX
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}