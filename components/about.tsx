import { profile } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[0.4fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            (About)
          </p>
        </div>
        <div>
          <div className="space-y-6 text-pretty text-2xl font-light leading-relaxed md:text-3xl">
            {profile.about.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-foreground" : "text-muted-foreground"}>
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Focus
              </dt>
              <dd className="mt-2 text-sm">AI &amp; ML</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Degree
              </dt>
              <dd className="mt-2 text-sm">B.Tech CSE</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                CGPA
              </dt>
              <dd className="mt-2 text-sm">8.40</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Location
              </dt>
              <dd className="mt-2 text-sm">Punjab, IN</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
