import { projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="work" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 flex items-end justify-between gap-6">
          <h2 className="text-balance font-serif text-4xl font-light tracking-tight md:text-5xl">
            Selected work
          </h2>
          <p className="hidden max-w-xs text-sm text-muted-foreground sm:block">
            A look at what I&apos;ve been building — from concept to shipped product.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.index}
              className="group grid gap-8 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/30 md:grid-cols-[0.3fr_1fr] md:p-12"
            >
              <div className="flex items-start justify-between md:flex-col md:justify-start md:gap-4">
                <span className="font-mono text-sm text-primary">{project.index}</span>
                <div className="flex flex-wrap gap-2 md:mt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-balance font-serif text-2xl font-light leading-snug md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
