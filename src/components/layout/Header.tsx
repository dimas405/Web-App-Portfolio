
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle"; 
import { useTheme } from "@/components/theme/ThemeProvider"; 
import { Button } from "@/components/ui/button";
import { Home, User, Layers, MessageSquare, Code2, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Layers },
  { name: "Contact", href: "/contact", icon: MessageSquare },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 items-center",
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-[0_4px_10px_0_hsl(var(--primary)/0.2)] dark:shadow-[0_4px_15px_0_hsl(var(--primary)/0.25)]" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <Code2 className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-2xl font-bold font-headline">Dimas A.</span>
              <span className="text-2xl font-bold font-headline group-hover:text-primary transition-colors">
                Pradana
              </span>
            </Link>

            <nav className="flex items-center space-x-1">
              {navLinks.map((item) => (
                <Button key={item.name} variant="ghost" asChild>
                  <Link
                    href={item.href}
                    className={cn(
                        "hover:text-primary transition-colors px-3 py-2 rounded-md font-medium",
                        pathname === item.href ? "text-primary" : "text-foreground/80"
                    )}
                  >
                    {item.name}
                  </Link>
                </Button>
              ))}
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <div className={cn(
        "md:hidden fixed bottom-0 left-0 right-0 z-40 rounded-t-2xl",
        "dark:bg-card/80 bg-background/95 backdrop-blur-md",
        "border-t border-border",
        "dark:shadow-lg shadow-[0_-2px_8px_rgba(0,0,0,0.06)]"
      )}>
        <nav className="flex justify-around items-center h-16">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded-md transition-colors duration-150 ease-in-out py-1"
                )}
                aria-label={item.name}
                aria-current={isActive ? "page" : undefined}
                title={item.name}
              >
                {isActive && (
                  <span className="absolute top-1 h-1 w-7 bg-primary rounded-full" />
                )}
                <item.icon className={cn(
                  "h-6 w-6", 
                  isActive ? "text-primary" : "text-foreground/70 group-hover:text-primary dark:text-muted-foreground dark:group-hover:text-primary"
                )} />
                <span className={cn(
                  "text-xs leading-tight mt-1 tracking-tight",
                  isActive ? "text-primary font-medium" : "text-foreground/70 group-hover:text-primary dark:text-muted-foreground dark:group-hover:text-primary"
                )}>
                  {item.name}
                </span>
              </Link>
            );
          })}
          {mounted ? (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex flex-col items-center justify-center w-full h-full relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded-md transition-colors duration-150 ease-in-out py-1"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === "light" ? (
                <Moon className="h-6 w-6 text-foreground/70 group-hover:text-primary dark:text-muted-foreground dark:group-hover:text-primary" />
              ) : (
                <Sun className="h-6 w-6 text-foreground/70 group-hover:text-primary dark:text-muted-foreground dark:group-hover:text-primary" />
              )}
              <span className="text-xs leading-tight mt-1 tracking-tight text-foreground/70 group-hover:text-primary dark:text-muted-foreground dark:group-hover:text-primary">
                {theme === "light" ? "Dark" : "Light"}
              </span>
            </button>
          ) : (
            <div 
              className="flex flex-col items-center justify-center w-full h-full relative group focus:outline-none rounded-md transition-colors duration-150 ease-in-out py-1 opacity-50"
              aria-label="Loading theme settings"
            >
              <div className="h-6 w-6" /> {/* Placeholder for icon */}
              <span className="text-xs leading-tight mt-1 tracking-tight text-transparent">
                Theme
              </span>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
