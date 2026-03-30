import React from 'react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-8 h-8 md:w-10 md:h-10 text-primary drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 85C30.7 85 15 69.3 15 50S30.7 15 50 15s35 15.7 35 35-15.7 35-35 35z" />
        <path d="M70.5 45h-9.2c-1.3-4.5-4-8.4-7.6-11.2l6.5-6.5-7.1-7.1-6.5 6.5C43.8 25.4 39.9 28.1 35.4 29.4v-9.2h-10v9.2c-4.5 1.3-8.4 4-11.2 7.6l-6.5-6.5-7.1 7.1 6.5 6.5C5.8 47.9 3.1 51.8 1.8 56.3h-9.2v10h9.2c1.3 4.5 4 8.4 7.6 11.2l-6.5 6.5 7.1 7.1 6.5-6.5c2.8 3.6 6.7 6.3 11.2 7.6v9.2h10v-9.2c4.5-1.3 8.4-4 11.2-7.6l6.5 6.5 7.1-7.1-6.5-6.5c3.6-2.8 6.3-6.7 7.6-11.2h9.2v-10zM50 68c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z" className="text-accent" />
      </svg>
      <div className="flex flex-col">
        <span className="font-display font-bold text-xl md:text-2xl leading-none tracking-wider text-foreground">
          ZEB
        </span>
        <span className="font-sans text-[0.65rem] md:text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase leading-none mt-0.5">
          Trading
        </span>
      </div>
    </div>
  );
}
