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
    <section className="py-20 bg-zinc-900/50 overflow-hidden border-y border-zinc-800">
      <div className="mb-12 text-center">
        <p className="text-zinc-500 uppercase tracking-widest text-sm font-medium">
          Ils nous font confiance
        </p>
      </div>

      {loading ? (
        <div className="text-center text-zinc-600 py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-700 border-t-zinc-500" />
        </div>
      ) : (
        <LogoMarquee files={logos} />
      )}
    </section>
  );
}