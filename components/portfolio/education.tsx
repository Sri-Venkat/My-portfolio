import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Global Academy of Technology, Bangalore",
    degree: "B.E in Information Science Engineering",
    period: "2022 – 2026",
    grade: "CGPA: 8.00",
  },
  {
    institution: "S.E.T PU College, Bangalore",
    degree: "PUC - PCMC",
    period: "2020 – 2022",
    grade: "Percentage: 95%",
  },
  {
    institution: "New Public English School, Bangalore",
    degree: "SSLC",
    period: "2019 – 2020",
    grade: "Percentage: 93%",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Education
        </h2>
      </div>

      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
          <GraduationCap className="h-5 w-5 text-primary" />
          Education
        </h3>
        <div className="relative border-l-2 border-border pl-6 space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="group rounded-lg p-3 -ml-3 transition-all hover:bg-secondary/50">
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {edu.institution}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{edu.degree}</p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className="text-muted-foreground">{edu.period}</span>
                  <span className="text-primary font-medium">{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
