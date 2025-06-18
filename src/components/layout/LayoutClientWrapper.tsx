
"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/layout/PageLoader";
import { Toaster } from "@/components/ui/toaster";

export function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentPath = useRef(pathname + searchParams.toString());
  const [isNavigating, setIsNavigating] = useState(false);


  useEffect(() => {
    const newPath = pathname + searchParams.toString();
    if (currentPath.current !== newPath) {
        setIsNavigating(true); 
        currentPath.current = newPath; 
        
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }

        const timer = setTimeout(() => {
          setIsNavigating(false);
        }, 3000); // Changed duration to 3000ms (3 seconds)

        return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]); 

  return (
    <>
      <PageLoader isLoading={isNavigating} />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-6 md:pt-20 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
