
"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CodingAnimation } from "@/components/shared/CodingAnimation";
import { ArrowDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

type RoleDetail = {
  name: string;
  descriptions: {
    en: string;
    id: string;
  };
};

const roleDetails: RoleDetail[] = [
  {
    name: "Programmer",
    descriptions: {
      en: "A programmer writes, tests, and maintains code that allows computer applications and software programs to function properly. They work with various programming languages and tools to develop solutions.",
      id: "Seorang programmer menulis, menguji, dan memelihara kode yang memungkinkan aplikasi komputer dan program perangkat lunak berfungsi dengan baik. Mereka bekerja dengan berbagai bahasa pemrograman dan alat untuk mengembangkan solusi."
    }
  },
  {
    name: "Front-End Developer",
    descriptions: {
      en: "A front-end developer specializes in building the user interface (UI) and user experience (UX) of a website or web application. They focus on what users see and interact with directly in their browser, using technologies like HTML, CSS, and JavaScript.",
      id: "Seorang pengembang front-end berspesialisasi dalam membangun antarmuka pengguna (UI) dan pengalaman pengguna (UX) dari sebuah situs web atau aplikasi web. Mereka fokus pada apa yang dilihat dan berinteraksi langsung oleh pengguna di browser mereka, menggunakan teknologi seperti HTML, CSS, dan JavaScript."
    }
  },
  {
    name: "Full-Stack Developer",
    descriptions: {
      en: "A full-stack developer is proficient in both front-end (client-side) and back-end (server-side) development. They can handle all aspects of web application development, from UI design to database management.",
      id: "Seorang pengembang full-stack mahir dalam pengembangan front-end (sisi klien) dan back-end (sisi server). Mereka dapat menangani semua aspek pengembangan aplikasi web, mulai dari desain UI hingga manajemen basis data."
    }
  },
  {
    name: "UI/UX Designer",
    descriptions: {
      en: "A UI/UX designer focuses on creating user-friendly interfaces (UI) and enhancing overall user satisfaction by improving the usability, accessibility, and interaction (UX) of a product. They conduct user research, create wireframes, prototypes, and visual designs.",
      id: "Seorang desainer UI/UX fokus pada pembuatan antarmuka yang ramah pengguna (UI) dan meningkatkan kepuasan pengguna secara keseluruhan dengan meningkatkan kegunaan, aksesibilitas, dan interaksi (UX) suatu produk. Mereka melakukan riset pengguna, membuat wireframe, prototipe, dan desain visual."
    }
  }
];

const rolesToAnimate = roleDetails.map(r => r.name);

export function HomeSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentRoleDetail, setCurrentRoleDetail] = useState<RoleDetail | null>(null);
  const [displayLanguage, setDisplayLanguage] = useState<'en' | 'id'>('en');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % rolesToAnimate.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRoleClick = () => {
    const currentRoleName = rolesToAnimate[roleIndex];
    const detail = roleDetails.find(r => r.name === currentRoleName);
    if (detail) {
      setCurrentRoleDetail(detail);
      setIsPopupOpen(true);
    }
  };

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-10 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 dark:from-orange-400/10 dark:via-pink-500/10 dark:to-purple-600/10 opacity-50"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>

        <div
          className="relative p-[2px] bg-gradient-to-br from-primary/60 via-primary/40 to-accent/60 dark:from-orange-400 dark:via-pink-500 dark:to-purple-600 rounded-2xl shadow-[0_0_12px_2px_hsl(var(--primary)/0.35),_0_0_8px_1px_hsl(var(--accent)/0.2)] hover:shadow-[0_0_18px_3px_hsl(var(--primary)/0.45),_0_0_12px_2px_hsl(var(--accent)/0.25)] dark:shadow-[0_0_12px_2px_theme(colors.orange.400/0.75),_0_0_8px_1px_theme(colors.pink.500/0.5)] dark:hover:shadow-[0_0_18px_3px_theme(colors.orange.400/0.85),_0_0_12px_2px_theme(colors.pink.500/0.6)] w-full max-w-sm md:max-w-3xl mx-6 sm:mx-auto animate-fade-in-down mb-12 lg:mb-16 transition-shadow duration-300"
        >
          <div className="bg-card/90 backdrop-blur-md rounded-[calc(1rem-2px)] p-6 pt-16 md:p-8 flex flex-col items-center md:flex-row md:items-start gap-6 md:gap-8 relative">
            <div className="
              absolute md:relative
              top-0 left-1/2 md:left-auto
              -translate-x-1/2 md:translate-x-0
              -mt-[4rem] sm:-mt-[4.5rem] md:mt-0
              w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48
              rounded-full md:rounded-xl
              overflow-hidden
              shadow-xl
              border-4 md:border-2
              border-background md:border-primary/30 dark:md:border-orange-500/50
              flex-shrink-0
              z-10
            ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1AoIt0QoIJXeEDW5tlwsNEWPK5bY5V-_t"
              alt="Your Name"
              fill
              sizes="(max-width: 639px) 128px, (max-width: 767px) 144px, 192px"
              className="object-cover"
            />
            </div>

            <div className="flex flex-col text-center items-center md:text-left md:items-start flex-grow w-full md:pt-0">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold font-headline mb-1 sm:mb-2 mt-2 md:mt-0">
                <span className="md:hidden">Dimas A. Pradana</span>
                <span className="hidden md:inline text-primary dark:text-orange-400">Hello, I'm</span>
                <span className="hidden md:inline"> Dimas A </span>
              </h1>
              <div className="text-base sm:text-lg md:text-xl text-primary dark:text-orange-400 mb-3 sm:mb-4 font-semibold h-8 flex items-center justify-center md:justify-start overflow-hidden">
                <button
                  onClick={handleRoleClick}
                  className="cursor-pointer hover:underline focus:outline-none focus:ring-1 focus:ring-primary/70 dark:focus:ring-orange-500/70 rounded-sm px-1 transition-all duration-150"
                  aria-label={`Learn more about ${rolesToAnimate[roleIndex]}`}
                  title={`Learn more about ${rolesToAnimate[roleIndex]}`}
                >
                  <span key={roleIndex} className="animate-text-fade-in block">
                    {rolesToAnimate[roleIndex]}
                  </span>
                </button>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-foreground/70 mb-6 mx-auto md:mx-0">
                I specialize in creating modern, responsive, and user-friendly web applications.
                Let's build something amazing together.
              </p>
              <div className="mt-auto self-center md:self-start w-full sm:w-auto">
                <Button asChild className="group w-full sm:w-auto md:h-11 md:px-8 md:text-base">
                  <Link href="https://drive.google.com/file/d/1lHE189GOIMrQo3zmeCHKnNK3IL7fSTLB/view?usp=drive_link">
                    Contact Me <ArrowDown className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-y-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-6 sm:mx-auto animate-fade-in-up delay-200">
          <CodingAnimation />
        </div>
      </section>

      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogContent className="max-w-[280px] sm:max-w-xs bg-card/95 backdrop-blur-lg">
          <DialogHeader>
            <DialogTitle className="text-primary dark:text-orange-400 font-headline text-sm sm:text-base">{currentRoleDetail?.name}</DialogTitle>
          </DialogHeader>
          <div className="py-4 text-foreground/80 leading-relaxed text-xs sm:text-sm">
            {currentRoleDetail?.descriptions[displayLanguage]}
          </div>
          <DialogFooter className="flex-col space-y-2 sm:flex-row sm:justify-end sm:space-y-0 sm:space-x-2 pt-2">
            <Button
              type="button"
              variant={displayLanguage === 'en' ? 'default' : 'outline'}
              onClick={() => {
                setDisplayLanguage('en');
              }}
              size="sm"
              className="w-full sm:w-auto"
            >
              English
            </Button>
            <Button
              type="button"
              variant={displayLanguage === 'id' ? 'default' : 'outline'}
              onClick={() => {
                setDisplayLanguage('id');
              }}
              size="sm"
              className="w-full sm:w-auto"
            >
              Indonesian
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
