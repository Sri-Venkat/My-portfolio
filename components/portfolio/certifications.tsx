import { Award, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Java for Beginners",
    issuer: "Infosys Springboard",
    date: "2024",
  },
  {
    title: "HTML & CSS Foundations",
    issuer: "Infosys Springboard",
    date: "2024",
  },
  {
    title: "UNIX Operating System Fundamentals",
    issuer: "Infosys Springboard",
    date: "2025",
  },
  {
    title: "Tableau Data Visualization Fundamentals",
    issuer: "Infosys Springboard",
    date: "2025",
  },
];

const achievements = [
  // Keeping this section empty for now is fine,
  // or you can add real achievements later.
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Certifications and achievements"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Certifications & Achievements
        </h2>
      </div>

      <div className="space-y-12">
        {/* Certifications */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
            <Award className="h-5 w-5 text-primary" />
            Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group rounded-lg border border-border bg-card p-4 transition-all hover:bg-secondary/50 hover:border-primary/30"
              >
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {cert.issuer}
                </p>
                <Badge variant="outline" className="mt-2 text-xs">
                  {cert.date}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <Trophy className="h-5 w-5 text-primary" />
              Achievements
            </h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="group flex items-start gap-3 rounded-lg p-3 transition-all hover:bg-secondary/50"
                >
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      — {achievement.event}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
