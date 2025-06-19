
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Briefcase, GraduationCap, Code, Zap, Users, BrainCircuit, Database, Server, Smartphone, CalendarDays, Layers, PenTool, Languages, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  icon: React.ElementType;
  descriptions: {
    en: string;
    id: string;
  };
};

const skills: Skill[] = [
  {
    name: "HTML",
    icon: Code,
    descriptions: {
      en: "The standard markup language for creating the structure of web pages and web applications.",
      id: "Bahasa markup standar untuk membuat struktur halaman web dan aplikasi web.",
    },
  },
  {
    name: "CSS",
    icon: Code,
    descriptions: {
      en: "A stylesheet language used to describe the presentation and visual styling of a document written in HTML.",
      id: "Bahasa stylesheet yang digunakan untuk mendeskripsikan presentasi dan gaya visual dokumen yang ditulis dalam HTML.",
    },
  },
  {
    name: "JavaScript",
    icon: Code,
    descriptions: {
      en: "A versatile programming language that enables interactive web pages, and is also used in many non-browser environments.",
      id: "Bahasa pemrograman serbaguna yang memungkinkan halaman web interaktif, dan juga digunakan di banyak lingkungan non-browser.",
    },
  },
  {
    name: "TipeScript",
    icon: Code,
    descriptions: {
      en: "A versatile programming language that enables interactive web pages, and is also used in many non-browser environments.",
      id: "Bahasa pemrograman serbaguna yang memungkinkan halaman web interaktif, dan juga digunakan di banyak lingkungan non-browser.",
    },
  },
  {
    name: "PHP",
    icon: Code,
    descriptions: {
      en: "A popular general-purpose scripting language especially suited to web development.",
      id: "Bahasa skrip serbaguna yang populer dan sangat cocok untuk pengembangan web.",
    },
  },
  {
    name: "Bootstrap",
    icon: Layers,
    descriptions: {
      en: "A front-end framework for designing websites and web applications. It contains HTML- and CSS-based design templates.",
      id: "Kerangka kerja front-end untuk merancang situs web dan aplikasi web. Ini berisi templat desain berbasis HTML dan CSS.",
    },
  },
  {
    name: "SCSS",
    icon: Code,
    descriptions: {
      en: "Sassy CSS (SCSS) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).",
      id: "Sassy CSS (SCSS) adalah bahasa skrip preprocessor yang ditafsirkan atau dikompilasi menjadi Cascading Style Sheets (CSS).",
    },
  },
  {
    name: "SASS",
    icon: Code,
    descriptions: {
      en: "Syntactically Awesome Style Sheets (Sass) is a preprocessor scripting language that is interpreted or compiled into CSS.",
      id: "Syntactically Awesome Style Sheets (Sass) adalah bahasa skrip preprocessor yang ditafsirkan atau dikompilasi menjadi CSS.",
    },
  },
  {
    name: "React JS",
    icon: Zap,
    descriptions: {
      en: "A JavaScript library for building user interfaces, particularly for single-page applications.",
      id: "Pustaka JavaScript untuk membangun antarmuka pengguna, khususnya untuk aplikasi halaman tunggal.",
    },
  },
  {
    name: "Redux",
    icon: BrainCircuit,
    descriptions: {
      en: "A predictable state container for JavaScript apps, often used with React or Angular for managing application state.",
      id: "Wadah keadaan yang dapat diprediksi untuk aplikasi JavaScript, sering digunakan dengan React atau Angular untuk mengelola keadaan aplikasi.",
    },
  },
  {
    name: "MySQL",
    icon: Database,
    descriptions: {
      en: "An open-source relational database management system (RDBMS) widely used for web applications.",
      id: "Sistem manajemen basis data relasional (RDBMS) sumber terbuka yang banyak digunakan untuk aplikasi web.",
    },
  },
  {
    name: "Figma",
    icon: PenTool,
    descriptions: {
      en: "A collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
      id: "Aplikasi web kolaboratif untuk desain antarmuka, dengan fitur offline tambahan yang diaktifkan oleh aplikasi desktop untuk macOS dan Windows.",
    },
  },
  {
    name: "Problem Solving",
    icon: BrainCircuit,
    descriptions: {
      en: "The process of finding solutions to difficult or complex issues, a crucial skill in software development.",
      id: "Proses menemukan solusi untuk masalah yang sulit atau kompleks, keterampilan penting dalam pengembangan perangkat lunak.",
    },
  },
];


const careerJourney = [
  {
    icon: GraduationCap,
    title: "S1 Teknik Informatika",
    institution: "Universitas Muhammadyah Ponorogo",
    date: "2019 - 2023",
    description: "Focused on software engineering, algorithms, and web development.",
    isTransfer: true,
  },
  {
    icon: GraduationCap,
    title: "S1 Teknik Informatika",
    institution: "Universitas PGRI Madiun",
    date: "2023 - Sekarang",
    description: "Focused on software engineering, algorithms, and web apps development.",
  },
  {
    icon: Briefcase,
    title: "Customer Data Management",
    institution: "Telkom Witel Madiun · Onsite",
    date: "4 Mei 2024 - 31 Mei 2024 · 1 bln",
    description: "• Input data pre-order Indihome via crm.telkom.com\n• Modifikasi dan penambahan order pelanggan\n• Edit perpanjangan kontrak pelanggan",
    isInternship: true,
  },
  {
    icon: Briefcase,
    title: "Full-Stack Engineer",
    institution: "Universitas PGRI Madiun · Hybrid ",
    date: "Sep 2023 - Dec 2024 · 4 bln",
    description: "• Merancang aplikasi berbasis web Sistem Informasi Rekapitulasi Tridharma Dosen\n• Frontend: Mendesain dan mengimplementasikan UI Web App Sisfo PMPS\n• Backend: Mendesain struktur database untuk data pengajaran, penelitian, abdimas (Pengabdian Masyarakat), dan penunjang",
    isInternship: true,
  },
];

const certificatesData = [
  {
    id: 'cert1',
    name: 'Seminar Micro Tech',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1T1HpnQGaG5oRB5twGUb84YIp_yT75BiZ',
    imageHint: 'Seminar Micro Tech',
  },
  {
    id: 'cert2',
    name: 'Sertifikat Magang',
    imageUrl: 'https://drive.google.com/uc?export=view&id=10Xur8CxsSkqsFg3ON2VuWmdG9ZwZrhvp',
    imageHint: 'Sertifikat Magang',
  },
  {
    id: 'cert3',
    name: 'Udemy Certification',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1uAqIl44sDwuWzybFcpfpjhJhBcvQ-9mD',
    imageHint: 'Udemy certificate',
  },
  {
    id: 'cert4',
    name: 'Python HackerRank Certification',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1H0zZbJgfCUkIHIgRuJvhY0Y045DGG913',
    imageHint: 'Python HackerRank Certification',
  },
  {
    id: 'cert5',
    name: 'JavaScript HackerRank Certification',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1PkY2kaa-15u0kyhNPBGSYv9k-T2IxiQ7',
    imageHint: 'JavaScript HackerRank Certification',
  },
  {
    id: 'cert6',
    name: 'Frontend HackerRank Certification',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1r8gOqZCEB2BOYDZvZ42qryuklFrWVXto',
    imageHint: 'Frontend HackerRank Certification',
  },
  {
    id: 'cert7',
    name: 'Dicoding Certificate',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1sIzjapV5ImjDw3aq6cbX219mJISfp_o7',
    imageHint: 'Dicoding certificate',
  },
  {
    id: 'cert8',
    name: 'Dicoding Certificate',
    imageUrl: 'https://drive.google.com/uc?export=view&id=15JceXnLi_U-ynvo2eFzpCy_RZ7II_V-l',
    imageHint: 'Dicoding certificate',
  },
  {
    id: 'cert9',
    name: 'React, NextJS, Redux Certificate',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1frpi2BjoGx5pTy3iX02Nj4XEkA951M__',
    imageHint: 'React, NextJS, Redux certificate',
  },
];

type ActiveTab = 'about' | 'certificate';
type DisplayLanguage = 'en' | 'id';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('about');
  const [activeSkillName, setActiveSkillName] = useState<string | null>(null);
  const [displayLanguage, setDisplayLanguage] = useState<DisplayLanguage>('en');
  
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative p-[2px] bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 dark:from-orange-400/30 dark:via-pink-500/20 dark:to-purple-600/30 rounded-2xl shadow-[0_0_12px_2px_hsl(var(--primary)/0.2),_0_0_8px_1px_hsl(var(--accent)/0.15)] hover:shadow-[0_0_18px_3px_hsl(var(--primary)/0.25),_0_0_12px_2px_hsl(var(--accent)/0.2)] dark:shadow-[0_0_12px_2px_theme(colors.orange.400/0.35),_0_0_8px_1px_theme(colors.pink.500/0.15)] dark:hover:shadow-[0_0_18px_3px_theme(colors.orange.400/0.45),_0_0_12px_2px_theme(colors.pink.500/0.2)] w-full max-w-4xl mx-auto transition-shadow duration-300 mb-12 md:mb-16"
        >
          <Card className="w-full overflow-hidden rounded-[calc(1rem-2px)] bg-card">
            <div className="flex items-stretch bg-card/60">
              <button
                onClick={() => setActiveTab('about')}
                aria-pressed={activeTab === 'about'}
                className={cn(
                  "flex-1 text-center px-4 py-3 md:px-6 md:py-4 font-headline text-base sm:text-lg transition-all duration-300 ease-in-out border-b-4 hover:bg-primary/10 dark:hover:bg-orange-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                  activeTab === 'about'
                    ? 'border-primary dark:border-orange-400 text-primary dark:text-orange-400 font-semibold bg-primary/5 dark:bg-orange-400/5'
                    : 'border-transparent text-muted-foreground hover:text-primary dark:hover:text-orange-400 hover:border-primary/50 dark:hover:border-orange-400/50'
                )}
              >
                About Me
              </button>
              <button
                onClick={() => setActiveTab('certificate')}
                aria-pressed={activeTab === 'certificate'}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 font-headline text-base sm:text-lg transition-all duration-300 ease-in-out border-b-4 hover:bg-primary/10 dark:hover:bg-orange-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                  activeTab === 'certificate'
                    ? 'border-primary dark:border-orange-400 text-primary dark:text-orange-400 font-semibold bg-primary/5 dark:bg-orange-400/5'
                    : 'border-transparent text-muted-foreground hover:text-primary dark:hover:text-orange-400 hover:border-primary/50 dark:hover:border-orange-400/50'
                )}
              >
                Certificates
              </button>
            </div>

            <div className="p-4 py-6 sm:p-6 md:p-8">
              {activeTab === 'about' && (
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
                    <div className="lg:col-span-2 flex justify-center">
                      <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-1 bg-gradient-to-br from-primary/70 via-accent/50 to-primary/70 dark:from-orange-400/70 dark:via-pink-500/50 dark:to-purple-600/70 shadow-[0_0_15px_2px_hsl(var(--primary)/0.5),_0_0_8px_1px_hsl(var(--accent)/0.3)] dark:shadow-[0_0_15px_2px_theme(colors.orange.400/0.75),_0_0_8px_1px_theme(colors.pink.500/0.15)] group transition-shadow duration-300">
                        <Image
                          src="https://drive.google.com/uc?export=view&id=1JBaxS5-KWtRmkZDPBGoKAaY1xdpysC-m"
                          data-ai-hint="developer portrait"
                          alt="Your Name - Developer"
                          width={400}
                          height={400}
                          className="object-cover w-full h-full rounded-full transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-3 text-center lg:text-left">
                      <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-4">
                          Dimas A. <span className="text-primary dark:text-orange-400">Pradana</span>
                      </h2>
                      <p className="text-xs sm:text-sm lg:text-base text-foreground/80 mb-4 leading-relaxed text-justify lg:text-left">
                        Saya adalah mahasiswa Teknik Informatika di Universitas PGRI Madiun dengan keahlian yang kuat dalam pemrograman Aplikasi berbasis Web (Fullstack Development). Saya berpengalaman menggunakan teknologi terkini dan kerangka kerja terdepan untuk menciptakan user interface dan user experience yang optimal, dengan fokus utama pada Frontend Development.
                      </p>
                    </div>
                  </div>

                  <div className="my-12 md:my-16">
                    <h3 className="text-xl sm:text-2xl font-bold font-headline text-center mb-8">My <span className="text-primary dark:text-orange-400">Skills</span></h3>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                      {skills.map((skill) => (
                        <Popover 
                            key={skill.name} 
                            open={activeSkillName === skill.name} 
                            onOpenChange={(isOpen) => {
                                if (isOpen) {
                                    setActiveSkillName(skill.name);
                                    setDisplayLanguage('en'); 
                                } else {
                                    setActiveSkillName(null);
                                }
                            }}
                        >
                          <PopoverTrigger asChild>
                            <Badge
                              variant="secondary"
                              className="text-xs sm:text-sm px-3 py-2 rounded-full shadow-md hover:border-primary/50 dark:hover:border-orange-500/50 hover:shadow-[0_0_8px_theme(colors.primary.DEFAULT/0.25)] dark:hover:shadow-[0_0_8px_theme(colors.orange.500/0.25)] transition-all duration-300 cursor-pointer group"
                            >
                              <skill.icon className="h-4 w-4 mr-2 text-primary dark:text-orange-400 group-hover:animate-pulse" />
                              {skill.name}
                            </Badge>
                          </PopoverTrigger>
                          <PopoverContent className="w-64 sm:w-80 bg-popover text-popover-foreground shadow-xl rounded-lg">
                            <div className="grid gap-4">
                              <div className="space-y-2">
                                <h4 className="font-medium leading-none text-primary dark:text-orange-400 text-sm sm:text-base">{skill.name}</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm">
                                  {skill.descriptions[displayLanguage]}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                              <Languages className="h-4 w-4 text-muted-foreground" />
                                <Button
                                  variant={displayLanguage === 'en' ? 'default' : 'outline'}
                                  size="sm"
                                  onClick={() => setDisplayLanguage('en')}
                                  className="text-xs"
                                >
                                  English
                                </Button>
                                <Button
                                  variant={displayLanguage === 'id' ? 'default' : 'outline'}
                                  size="sm"
                                  onClick={() => setDisplayLanguage('id')}
                                  className="text-xs"
                                >
                                  Indonesian
                                </Button>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      ))}
                    </div>
                  </div>
                </>
              )}
              {activeTab === 'certificate' && (
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-headline text-center mb-10">
                    My <span className="text-primary dark:text-orange-400">Certificates</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {certificatesData.map((cert) => (
                      <div key={cert.id} className="relative p-px bg-gradient-to-br from-primary/50 via-accent/30 to-primary/50 dark:from-orange-400/50 dark:via-pink-500/30 dark:to-purple-600/50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                        <div className="bg-card rounded-[calc(0.75rem-1px)] p-3 sm:p-4">
                          <div className="aspect-[3/2] relative overflow-hidden rounded-md mb-3 group-hover:shadow-inner transition-shadow">
                             <Image
                              src={cert.imageUrl}
                              alt={cert.name}
                              data-ai-hint={cert.imageHint}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <p className="text-sm font-medium text-center text-foreground truncate" title={cert.name}>{cert.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-center mt-8 text-foreground/70">
                      More certificates will be added soon!
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Career Journey Section */}
        <div className="w-full max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold font-headline text-center mb-10 mt-16 md:mt-24">Career <span className="text-primary dark:text-orange-400">Journey</span></h3>
            <div className="relative space-y-10">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 via-accent/30 to-primary/40 dark:from-orange-400/40 dark:via-pink-500/30 dark:to-purple-600/40 -translate-x-1/2 hidden md:block rounded-full"></div>
                
                {careerJourney.map((item, index) => (
                    <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-start relative">
                    <div className={`md:col-start-${index % 2 === 0 ? 1 : 2} md:row-start-1 md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                        <div className="relative p-px bg-gradient-to-br from-primary/50 via-accent/30 to-primary/50 dark:from-orange-400/50 dark:via-pink-500/30 dark:to-purple-600/50 rounded-xl shadow-[0_0_10px_1px_hsl(var(--primary)/0.5),_0_0_5px_0px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.6),_0_0_8px_1px_hsl(var(--accent)/0.35)] dark:shadow-[0_0_10px_1px_theme(colors.orange.400/0.75),_0_0_5px_0px_theme(colors.pink.500/0.15)] dark:hover:shadow-[0_0_15px_2px_theme(colors.orange.400/0.85),_0_0_8px_1px_theme(colors.pink.500/0.2)] transition-all duration-300 transform md:hover:-translate-y-px">
                        <Card className="bg-card rounded-[calc(0.75rem-1px)]">
                            <CardHeader className="pb-2 sm:pb-3">
                            <div className={`flex items-center mb-1.5 sm:mb-2 ${index % 2 === 0 ? 'flex-row md:flex-row-reverse' : 'flex-row'}`}>
                                <div className={`p-1.5 sm:p-2 bg-gradient-to-tr from-primary/15 to-accent/15 dark:from-orange-400/15 dark:to-pink-500/15 text-primary dark:text-orange-400 rounded-full shrink-0 mr-3 ${index % 2 === 0 ? 'md:mr-0 md:ml-3' : 'md:mr-3'}`}>
                                <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <CardTitle className="text-base sm:text-lg font-headline flex-1">{item.title}</CardTitle>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground">{item.institution} &bull; {item.date}</p>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-sm text-foreground/80 whitespace-pre-line">{item.description}</p>
                              {item.isTransfer && (
                                <div className="mt-3 flex justify-start">
                                  <Badge
                                    variant="secondary"
                                    className="text-xs sm:text-sm px-3 py-2 rounded-full shadow-md inline-flex items-center cursor-default"
                                  >
                                    <GitBranch className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-primary/90 dark:text-orange-500/90" />
                                    Transfer/Pindah
                                  </Badge>
                                </div>
                              )}
                              {item.isInternship && (
                                <div className="mt-3 flex justify-start">
                                  <Badge
                                    variant="secondary"
                                    className="text-xs sm:text-sm px-3 py-2 rounded-full shadow-md inline-flex items-center cursor-default"
                                  >
                                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-primary/90 dark:text-orange-500/90" />
                                    Magang
                                  </Badge>
                                </div>
                              )}
                            </CardContent>
                        </Card>
                        </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-primary dark:bg-orange-400 rounded-full border-[3px] border-card shadow-[0_0_8px_1px_hsl(var(--primary))] dark:shadow-[0_0_8px_1px_theme(colors.orange.400)] hidden md:block"></div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}


    

      

    
