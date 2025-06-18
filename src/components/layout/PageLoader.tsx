
"use client";

import { cn } from "@/lib/utils";

interface PageLoaderProps {
  isLoading: boolean;
}

export function PageLoader({ isLoading }: PageLoaderProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-300 ease-in-out",
        isLoading ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none delay-150"
      )}
      aria-live="polite"
      aria-busy={isLoading}
      role="status"
    >
      <svg className="animate-spin h-12 w-12" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spinner-gradient-loader" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <circle
          cx="16" cy="16" r="14"
          fill="none"
          stroke="url(#spinner-gradient-loader)"
          strokeWidth="3" 
          strokeDasharray="66 22" // Creates a 3/4 arc
          strokeLinecap="round"
        />
      </svg>
      
      {/* Text removed as per user request */}
      {isLoading && (
         <span className="sr-only">Loading page...</span>
      )}
       {!isLoading && ( 
        <span className="sr-only">Loading complete</span>
      )}
    </div>
  );
}
