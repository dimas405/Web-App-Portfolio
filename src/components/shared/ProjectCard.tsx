
"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-[2px] bg-gradient-to-br from-primary/60 via-accent/40 to-primary/60 dark:from-orange-400 dark:via-pink-500 dark:to-purple-600 rounded-2xl shadow-[0_0_12px_2px_hsl(var(--primary)/0.3),_0_0_8px_1px_hsl(var(--accent)/0.2)] hover:shadow-[0_0_18px_3px_hsl(var(--primary)/0.35),_0_0_12px_2px_hsl(var(--accent)/0.25)] dark:shadow-[0_0_12px_2px_theme(colors.orange.400/0.5),_0_0_12px_2px_theme(colors.pink.500/0.25)] dark:hover:shadow-[0_0_18px_3px_theme(colors.orange.400/0.65),_0_0_18px_3px_theme(colors.pink.500/0.35)] group transition-all duration-300 ease-in-out hover:-translate-y-1">
      <Card className="bg-card/90 backdrop-blur-sm rounded-[calc(1rem-2px)] flex flex-col h-full overflow-hidden">
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          {project.imageUrls && project.imageUrls.length > 1 ? (
            <Carousel
              opts={{ loop: true }}
              className="w-full h-full"
            >
              <CarouselContent className="h-full">
                {project.imageUrls.map((url, index) => (
                  <CarouselItem key={index} className="h-full relative">
                    <Image
                      src={url}
                      alt={`${project.title} - Image ${index + 1}`}
                      data-ai-hint={project.imageHints?.[index] || project.title.toLowerCase().replace(/\s+/g, '-').concat(` slide ${index + 1}`)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index === 0} 
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-background/70 hover:bg-background/90 text-foreground opacity-70 hover:opacity-100 transition-opacity" />
              <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-background/70 hover:bg-background/90 text-foreground opacity-70 hover:opacity-100 transition-opacity" />
            </Carousel>
          ) : project.imageUrls && project.imageUrls.length === 1 ? (
            <Image
              src={project.imageUrls[0]}
              alt={project.title}
              data-ai-hint={project.imageHints?.[0] || project.title.toLowerCase().replace(/\s+/g, '-')}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority 
            />
          ) : (
            // Fallback if no images are provided
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">No Image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none"></div>
        </div>
        <CardHeader className="pb-3 z-10">
          <CardTitle className="text-xl font-headline text-foreground drop-shadow-sm">{project.title}</CardTitle>
          <CardDescription className="h-20 overflow-y-auto text-sm text-foreground/70 custom-scrollbar drop-shadow-sm">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow z-10">
          <div className="mb-3">
            <h4 className="text-xs font-semibold uppercase text-muted-foreground/60 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2 min-h-[2.75rem]">
              {project.technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary"
                  className="text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className={cn(
          "flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3",
          "border-t border-border pt-4 z-10 bg-card/50"
        )}>
          {project.liveLink && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild 
              className="w-full sm:w-auto"
            >
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
          {project.repoLink && (
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="w-full sm:w-auto"
            >
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </a>
            </Button>
          )}
        </CardFooter>
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 5px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: hsl(var(--border) / 0.2); 
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: hsl(var(--accent) / 0.4);
          }
        `}</style>
      </Card>
    </div>
  );
}
