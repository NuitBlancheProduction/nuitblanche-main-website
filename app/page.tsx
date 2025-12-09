'use client';

import { useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { FoundersSection } from '@/components/sections/FoundersSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ContactSection } from '@/components/sections/ContactSection';

// Déclaration TypeScript pour Cal.com
declare global {
  interface Window {
    Cal?: any;
  }
}

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