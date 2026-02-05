import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Automated 3D Visualization from 2D Blueprints",
    description:
      "Engineered a deep learning pipeline using CNN-based segmentation to extract structural features such as walls, doors, and windows from 2D blueprint images. Built a 3D reconstruction engine using the Blender Python API to transform segmented data into high-fidelity, interactive 3D meshes in real-time.",
    tech: ["Python", "PyTorch", "OpenCV", "CNNs", "Blender API"],
    link: null,
    github:
      "https://github.com/Sri-Venkat/Automated-3D-visualizations-of-2D-blueprints",
    featured: true,
  },
  {
    title: "Food Seeker AI Chatbot",
    description:
      "Developed an AI-driven chatbot using Natural Language Processing (NLP) to automate food discovery and recommendations. Implemented intent-recognition logic to interpret user queries and deliver real-time, context-aware responses through a Flask backend.",
    tech: ["Python", "Flask", "NLP", "HTML", "CSS"],
    link: null,
    github: "https://github.com/Sri-Venkat/Food-Recommendation-",
    featured: true,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <Link
                      className="inline-flex items-baseline font-medium leading-tight text-foreground group-hover:text-primary focus-visible:text-primary group/link text-base"
                      href={project.link || project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        {project.featured && (
                          <span className="ml-2 inline-block text-xs text-primary font-normal">
                            Featured
                          </span>
                        )}
                      </span>
                      <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                    </Link>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                  </div>

                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.tech.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-0"
                        >
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link
            className="inline-flex items-center font-medium leading-tight text-foreground group"
            href="https://github.com/Sri-Venkat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-primary">
              View All Projects on GitHub
            </span>
            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
