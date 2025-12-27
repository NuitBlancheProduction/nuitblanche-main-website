import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { FoundersSection } from '@/components/sections/FoundersSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { SEOSection } from '@/components/sections/SEOSection';
import { ContactSection } from '@/components/sections/ContactSection';

// ✅ OPTION 2 : Description personnalisée, titre hérité du layout
// Le titre devient : "Nuit Blanche Production | Agence Vidéo & Drone - Vosges"
export const metadata: Metadata = {
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