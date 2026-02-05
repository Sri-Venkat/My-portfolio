"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CERTIFICATIONS", href: "#certifications" },
];

export function Hero() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Sri Venkata Sai Rama Gupta V
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
          Full-Stack & AI Deep Learning Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I build scalable and secure applications with clean code and innovative design.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="group flex items-center py-3"
                  href={item.href}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground" />
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground group-focus-visible:text-foreground">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <Link
            className="block text-muted-foreground transition-colors hover:text-foreground"
            href="https://github.com/Sri-Venkat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link
            className="block text-muted-foreground transition-colors hover:text-foreground"
            href="www.linkedin.com/in/sri-venkata-sai-rama-gupta-v-592b86378"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link
            className="block text-muted-foreground transition-colors hover:text-foreground"
            href="mailto:srivenkata2004@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link
            className="block text-muted-foreground transition-colors hover:text-foreground"
            href="tel:+916666666666"
            aria-label="Phone"
          >
            <Phone className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
