
"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "@/components/theme/ThemeProvider";
import "./ParticleBG.css";

interface ParticleBGProps {
  id: string;
}

export function ParticleBG({ id }: ParticleBGProps) {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    if (container) {
      console.log("Particles container loaded", container);
    }
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          repulse: { // Renamed from push to repulse as per standard tsparticles modes
            distance: 150, // Adjusted distance
            duration: 0.4,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? "#FFFFFF" : "#333333",
        },
        links: {
          color: theme === "dark" ? "#C0C0C0" : "#AAAAAA",
          distance: 150,
          enable: true,
          opacity: theme === "dark" ? 0.3 : 0.2,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Adjusted density area
          },
          value: 80, // Adjusted particle count
        },
        opacity: {
          value: { min: 0.3, max: 0.8 }, // Opacity range for particles
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme] // Add theme to dependency array
  );

  if (!init) {
    return null;
  }

  return (
    <div className="particle-background">
      <Particles id={id} options={options} loaded={particlesLoaded} />
    </div>
  );
}
