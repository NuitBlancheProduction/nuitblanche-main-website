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
    <section className="py-24 bg-white overflow-hidden border-y border-zinc-200">
      <div className="mb-12 text-center">
        <h2 className="text-zinc-900 uppercase tracking-widest text-2xl md:text-3xl font-medium">
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