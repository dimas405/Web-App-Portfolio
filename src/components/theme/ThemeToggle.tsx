
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder that doesn't depend on the theme
    // and matches the structure as much as possible without dynamic parts.
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled // To prevent interaction before it's ready
        aria-label="Toggle theme" // Generic, non-changing label
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      >
        <div className="h-5 w-5" /> {/* Placeholder for icon space */}
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="transition-transform duration-300 ease-in-out hover:scale-110"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
