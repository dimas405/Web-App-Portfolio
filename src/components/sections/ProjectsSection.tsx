
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projectsData } from "@/lib/data/projects";

export function ProjectsSection() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
  const otherProjects = projectsData.filter(p => !p.featured);

  return (
    <section className="py-16 lg:py-24 bg-background/50 dark:bg-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center mb-4">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary dark:from-orange-400 dark:via-pink-500 dark:to-purple-600">Projects</span>
        </h2>
        <p className="text-center text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in frontend and backend development.
        </p>
        
        {featuredProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold font-headline text-center mb-8 text-foreground/90">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {otherProjects.length > 0 && (
           <>
            <h3 className="text-2xl font-semibold font-headline text-center mb-8 text-foreground/90">More Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
           </>
        )}
      </div>
    </section>
  );
}
