'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { getCalApi } from '@calcom/embed-react';
import { cn } from '@/lib/utils';

interface BookingButtonProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function BookingButton({ variant = 'default', className }: BookingButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'rdv' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  if (variant === 'compact') {
    return (
      <button
        data-cal-namespace="rdv"
        data-cal-link="nuitblancheproduction/rdv"
        data-cal-config='{"layout":"month_view"}'
        className={cn(
          'group relative flex items-center justify-center gap-3 px-6 py-3 bg-black rounded-full transition-all duration-300',
          className
        )}
      >
        {/* Border Beam - Rotating Red Glow */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-[-2px] rounded-full bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,#ef4444_50%,#dc2626_55%,transparent_60%,transparent_100%)] animate-spin-slow opacity-80" />
          <div className="absolute inset-[2px] rounded-full bg-black" />
        </div>

        {/* Inner Red Glow */}
        <div className="absolute inset-0 rounded-full bg-red-600/20 blur-xl group-hover:bg-red-500/30 transition-all duration-300" />

        {/* Content */}
        <div className="relative flex items-center gap-3 z-10">
          {/* Avatar Container - No overflow hidden to show the green dot */}
          <div className="relative w-8 h-8">
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-red-500/50 group-hover:ring-red-400 transition-all duration-300">
              <Image
                src="/team/denis-contact-reservation-appel.webp"
                alt="Denis"
                fill
                className="object-cover transition-all duration-300 group-hover:scale-110"
              />
            </div>
            {/* Green pulse dot - Outside overflow container */}
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black z-20">
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
            </div>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      data-cal-namespace="rdv"
      data-cal-link="nuitblancheproduction/rdv"
      data-cal-config='{"layout":"month_view"}'
      className={cn(
        'group relative flex items-center justify-center gap-5 px-10 py-5 bg-black rounded-3xl transition-all duration-500 shadow-2xl hover:shadow-red-500/50',
        className
      )}
    >
      {/* Border Beam - Rotating Red Glow */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute inset-[-3px] rounded-3xl bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,#ef4444_50%,#dc2626_55%,transparent_60%,transparent_100%)] animate-spin-slow opacity-90" />
        <div className="absolute inset-[3px] rounded-3xl bg-black" />
      </div>

      {/* Inner Red Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-600/20 via-red-500/30 to-red-600/20 blur-2xl group-hover:from-red-500/30 group-hover:via-red-400/40 group-hover:to-red-500/30 transition-all duration-500" />

      {/* Content */}
      <div className="relative flex items-center gap-5 z-10">
        {/* Avatar Container - No overflow hidden to show the green dot */}
        <div className="relative w-14 h-14">
          <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-red-500/60 group-hover:ring-red-400 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-red-500/50">
            <Image
              src="/team/denis-contact-reservation-appel.webp"
              alt="Denis"
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
          </div>
          {/* Green pulse dot - Outside overflow container */}
          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-black z-20 shadow-lg shadow-green-500/50">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-start">
          <span className="text-white font-bold text-lg tracking-tight group-hover:text-red-50 transition-colors duration-500">
            Planifiez un appel avec Denis
          </span>
        </div>
      </div>
    </button>
  );
}

/* Add these custom animations to your tailwind.config.ts if not already present:

module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
}
*/