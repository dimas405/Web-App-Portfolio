
"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react"; // Changed Twitter to Instagram
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/dimas405", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dimas-a-pradana-340642303/?", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/_.dimaz/", label: "Instagram" }, // Changed from Twitter
  { icon: Mail, href: "dimasandik.404@gmail.com", label: "Email" },
];

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card/50 text-muted-foreground py-12 border-t border-border mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-headline font-semibold text-primary mb-3">Portfolio</h3>
            <p className="text-sm">
              Crafting digital experiences, one line of code at a time.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)]">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border/50 text-center text-sm">
          <p>&copy; {currentYear} Created by - Dimas A. Pradana</p>
          <p className="mt-1">Update version: {process.env.NEXT_PUBLIC_APP_VERSION} 1.03</p>
        </div>
      </div>
    </footer>
  );
}
