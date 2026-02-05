import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript (ES6+)", "Java", "C++", "C", "SQL"],
  },
  {
    title: "Web Technologies",
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "Flask",
      "MERN Stack",
    ],
  },
  {
    title: "AI & Deep Learning",
    skills: ["PyTorch", "OpenCV", "CNNs", "NLP", "Blender API"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "Jupyter Notebook", "Tableau Public", "Git", "Vercel"],
  },
  {
    title: "Concepts",
    skills: [
      "REST APIs",
      "Full-Stack Architecture",
      "System Design",
      "Data Structures",
      "Algorithms",
      "MVC",
      "OOP",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Technical skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Skills
        </h2>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
