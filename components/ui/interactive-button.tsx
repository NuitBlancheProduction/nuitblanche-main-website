'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'compact';
}

export function InteractiveButton({ 
  children, 
  className, 
  variant = 'default',
  onClick,
  ...props 
}: InteractiveButtonProps) {
  const baseStyles = cn(
    // État par défaut - Monochrome strict, aspect brut/industriel
    'relative inline-flex items-center justify-center',
    'bg-zinc-900 border-2 border-zinc-700 text-white',
    'font-semibold tracking-wide',
    'transition-all duration-300 ease-out',
    'overflow-hidden group',
    
    // Hover - EXPLOSION DE COULEUR
    'hover:bg-violet-600 hover:border-violet-400',
    'hover:text-white hover:scale-[1.02]',
    'hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]',
    
    // Animation du contenu
    'before:absolute before:inset-0',
    'before:bg-gradient-to-r before:from-violet-600 before:to-fuchsia-600',
    'before:opacity-0 before:transition-opacity before:duration-300',
    'hover:before:opacity-100',
    
    // Tailles selon variant
    variant === 'default' ? 'px-8 py-4 text-lg rounded-full' : 'px-6 py-2.5 text-base rounded-full'
  );

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}