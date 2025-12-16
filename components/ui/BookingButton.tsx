'use client';

import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    Cal?: any;
  }
}

interface BookingButtonProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function BookingButton({ variant = 'default', className }: BookingButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.Cal?.ns?.rdv) {
      window.Cal.ns.rdv('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    }
  };

  if (variant === 'compact') {
    return (
      <button
        onClick={handleClick}
        className={cn(
          'group relative flex items-center gap-3 px-5 py-2.5 bg-zinc-900 hover:bg-white border border-zinc-700 hover:border-zinc-900 rounded-full transition-all duration-300 overflow-hidden',
          className
        )}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white blur-xl" />
        </div>

        {/* Content */}
        <div className="relative flex items-center gap-3">
          {/* Avatar with green pulse dot */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-zinc-700 group-hover:ring-zinc-900 transition-all duration-300">
            <Image
              src="/team/denis_cta.webp"
              alt="Denis"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            {/* Green pulse dot */}
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-zinc-900 group-hover:border-white transition-colors duration-300">
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping-slow group-hover:animate-ping-fast opacity-75" />
            </div>
          </div>

          {/* Icon */}
          <Calendar className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300" />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'group relative flex items-center gap-4 px-8 py-4 bg-zinc-900 hover:bg-white border-2 border-zinc-700 hover:border-zinc-900 rounded-2xl transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl',
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-white to-zinc-100 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative flex items-center gap-4">
        {/* Avatar with green pulse dot */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-zinc-700 group-hover:ring-zinc-900 transition-all duration-500">
          <Image
            src="/team/denis_cta.webp"
            alt="Denis"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          {/* Green pulse dot */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900 group-hover:border-white transition-colors duration-500">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping-slow group-hover:animate-ping-fast opacity-75" />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-start">
          <span className="text-white group-hover:text-zinc-900 font-semibold transition-colors duration-500">
            Planifiez un appel avec Denis
          </span>
          <span className="text-xs text-zinc-500 group-hover:text-zinc-600 transition-colors duration-500">
            30 minutes • Gratuit
          </span>
        </div>

        {/* Icon */}
        <Calendar className="w-5 h-5 text-zinc-500 group-hover:text-zinc-900 transition-colors duration-500 ml-2" />
      </div>
    </button>
  );
}