import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Certifications } from "@/components/portfolio/certifications";
import { Education } from "@/components/portfolio/education";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient effect */}
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Hero />
          
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Education />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
