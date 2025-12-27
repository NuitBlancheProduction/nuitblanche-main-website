'use client';

import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { FoundersSection } from '@/components/sections/FoundersSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { SEOSection } from '@/components/sections/SEOSection';
import { ContactSection } from '@/components/sections/ContactSection';

// Ce bloc écrase la config du layout.tsx uniquement pour l'accueil
export const metadata: Metadata = {
  // Titre optimisé sans le suffixe "| Nuit Blanche Production" (grâce à absolute)
  title: {
    absolute: 'Nuit Blanche Production : Agence Vidéo & Drone (Vosges)',
  },
  // Description spécifique pour l'accueil (souvent la même que la globale, mais c'est bien de l'avoir ici)
  description: 'Votre partenaire vidéo dans les Vosges. Films corporate, publicité et expertise drone technique (photogrammétrie, inspection).',
};

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <HeroSection />
      <ServicesSection />
      <ProofSection />
      <FoundersSection />
      <PortfolioSection />
      <SEOSection />
      <ContactSection />
    </main>
  );
}