
"use client";

import type { FC, ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: "dark", // This is a fallback for context type, provider sets actual
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "dark",
  storageKey = "codefolio-theme",
}) => {
  // Initialize theme state with defaultTheme.
  // This ensures server and initial client render use the same theme value.
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // This effect runs only on the client, after the component has mounted.
    // Determine the actual client-side theme preference.
    const storedTheme = window.localStorage.getItem(storageKey) as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    
    // Prioritize stored theme, then system preference.
    const effectiveClientTheme = storedTheme || systemTheme;

    // If the determined client-side theme is different from the initial (defaultTheme), update the state.
    // This will trigger a re-render on the client with the correct theme.
    if (effectiveClientTheme !== theme) {
      setThemeState(effectiveClientTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs once on mount.

  useEffect(() => {
    // This effect applies the theme to the DOM and updates localStorage whenever the theme changes.
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  // Wrapper for setThemeState to be passed in context
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
