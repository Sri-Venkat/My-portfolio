import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "JAN 2026 — APRIL 2026",
    title: "Bharat Unnati AI Fellow",
    company: "Learners Byte",
    location: "Hyderabad (Remote)",
    description: [
      "Training in Agentic AI systems including CodExpert and Expertopedia platforms to design autonomous, task-driven AI workflows",
      "Developing Generative AI solutions focused on prompt engineering, multi-agent coordination, and real-world deployment use cases",
      "Building AI-powered applications that integrate reasoning, retrieval, and generation pipelines for scalable knowledge systems",
    ],
    skills: [
      "Agentic AI",
      "Generative AI",
      "Prompt Engineering",
      "Multi-Agent Systems",
      "Python",
      "LLMs",
    ],
  },
  {
    period: "FEB 2026 — JULY 2026",
    title: "Geo AI & ML Intern",
    company: "Geo AI & ML",
    location: "Bangalore (Hybrid)",
    description: [
      "Working on geospatial machine learning pipelines to analyze and interpret spatial datasets for real-world mapping and intelligence applications",
      "Developing data preprocessing and feature extraction workflows for satellite and location-based data using Python and computer vision techniques",
      "Collaborating with cross-functional teams to deploy AI models into hybrid production environments with performance monitoring and optimization",
    ],
    skills: [
      "Geospatial AI",
      "Machine Learning",
      "Python",
      "Computer Vision",
      "Data Pipelines",
      "Model Deployment",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <span className="inline-flex items-baseline font-medium leading-tight text-foreground group-hover:text-primary focus-visible:text-primary">
                        {exp.title}
                        <span className="mx-2">·</span>
                        {exp.company}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {exp.location}
                    </div>
                  </h3>

                  <ul className="mt-2 text-sm leading-normal text-muted-foreground list-disc ml-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.skills.map((skill) => (
                      <li key={skill} className="mr-1.5 mt-2">
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-0"
                        >
                          {skill}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Link
            className="inline-flex items-center font-medium leading-tight text-foreground group"
            href="https://drive.google.com/file/d/1s3yBM3d6lLElUfAQAiU6IQ8t3WtFgd6e/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-primary">
              View Full Resume
            </span>
            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
