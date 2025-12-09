'use client';

export function ProofSection() {
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