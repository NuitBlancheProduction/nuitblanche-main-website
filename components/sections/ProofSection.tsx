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
    <section className="py-24 bg-zinc-50 overflow-hidden border-y border-zinc-200">
      <div className="mb-16 text-center">
        <h2 className="text-zinc-900 uppercase tracking-[0.3em] text-3xl md:text-4xl font-bold bg-gradient-to-r from-zinc-700 via-zinc-900 to-zinc-700 bg-clip-text text-transparent">
          Ils nous font confiance
        </h2>
      </div>

      {loading ? (
        <div className="text-center text-zinc-400 py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-400" />
        </div>
      ) : (
        <LogoMarquee files={logos} />
      )}
    </section>
  );
}