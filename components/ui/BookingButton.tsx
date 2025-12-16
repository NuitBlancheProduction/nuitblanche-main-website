import { motion } from 'framer-motion';
import Image from 'next/image';

interface BookingButtonProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function BookingButton({ variant = 'default', className = '' }: BookingButtonProps) {
  const isCompact = variant === 'compact';

  return (
    <motion.button
      data-cal-link="nuitblancheproduction/rdv"
      data-cal-namespace="rdv"
      data-cal-config='{"layout":"month_view"}'
      className={`
        group relative
        inline-flex items-center gap-3
        ${isCompact ? 'px-4 py-2' : 'px-6 py-3'}
        bg-zinc-900 hover:bg-white
        border-2 border-zinc-700 hover:border-zinc-200
        rounded-full
        transition-all duration-500 ease-out
        hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
        overflow-hidden
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Avatar avec effet grayscale */}
      <div className="relative flex-shrink-0">
        <div className={`
          ${isCompact ? 'w-7 h-7' : 'w-10 h-10'}
          rounded-full overflow-hidden
          ring-2 ring-zinc-700 group-hover:ring-zinc-300
          transition-all duration-500
        `}>
          <Image
            src="/team/denis.jpg"
            alt="Denis"
            width={40}
            height={40}
            className="
              w-full h-full object-cover
              grayscale group-hover:grayscale-0
              transition-all duration-500
            "
            onError={(e) => {
              // Fallback to a placeholder if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%23555" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" fill="%23fff" font-size="18" text-anchor="middle" dy=".3em"%3ED%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
        
        {/* Point vert avec pulse */}
        <div className="absolute -bottom-0.5 -right-0.5">
          <div className="relative">
            <div className={`
              ${isCompact ? 'w-3 h-3' : 'w-3.5 h-3.5'}
              bg-green-500 rounded-full
              border-2 border-zinc-900 group-hover:border-white
              transition-colors duration-500
            `} />
            <div className={`
              absolute inset-0
              bg-green-500 rounded-full
              animate-ping-slow
              group-hover:animate-ping-fast
            `} />
          </div>
        </div>
      </div>

      {/* Texte */}
      <span className={`
        ${isCompact ? 'text-sm' : 'text-base'}
        font-semibold
        text-white group-hover:text-black
        transition-colors duration-500
        whitespace-nowrap
      `}>
        {isCompact ? "Planifier un appel" : "Planifiez un appel avec Denis"}
      </span>

      {/* Effet de brillance au survol */}
      <div className="
        absolute inset-0 -translate-x-full
        group-hover:translate-x-full
        bg-gradient-to-r from-transparent via-white/20 to-transparent
        transition-transform duration-1000 ease-out
        pointer-events-none
      " />
    </motion.button>
  );
}