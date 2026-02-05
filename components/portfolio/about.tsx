export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>

      <div>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          I’m a <span className="text-foreground font-medium">final-year Information Science & Engineering student</span> 
          specializing in <span className="text-foreground font-medium">Full-Stack Development (MERN)</span> and 
          <span className="text-foreground font-medium"> AI & Deep Learning</span>. My academic and project experience 
          focuses on building scalable web applications, NLP-driven systems, and automated 3D visualization pipelines.
        </p>

        <p className="mb-4 leading-relaxed text-muted-foreground">
          I have hands-on experience developing <span className="text-foreground font-medium">AI-powered chatbots</span>, 
          full-stack MERN applications, and deep learning workflows using technologies such as 
          <span className="text-foreground font-medium"> Python, React, Flask, PyTorch, and OpenCV</span>. 
          I enjoy translating complex technical problems into clean, efficient, and user-focused solutions.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          I’m actively expanding my skills in <span className="text-foreground font-medium">system design, performance optimization, and real-world deployment</span>, 
          and I’m motivated by continuous learning and building projects that bridge the gap between research and production.
        </p>
      </div>
    </section>
  );
}
