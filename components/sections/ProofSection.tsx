'use client';

import { useEffect, useState } from 'react';
import { LogoMarquee } from '@/components/ui/logo-marquee';

export function ProofSection() {
  const [logos, setLogos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/clients')
      .then(res => res.json())
      .then(data => {
        setLogos(data.logos || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching logos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12 bg-zinc-200 overflow-hidden border-y border-zinc-300">
      <div className="mb-8 text-center">
        <h2 className="text-zinc-900 uppercase tracking-[0.25em] text-2xl md:text-3xl font-black relative inline-block">
          <span className="relative z-10">Ils nous font confiance</span>
          <span className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent -z-10"></span>
        </h2>
      </div>

      {loading ? (
        <div className="text-center text-zinc-400 py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-500" />
        </div>
      ) : (
        <LogoMarquee files={logos} />
      )}
    </section>
  );
}