import { education, certifications, type TimelineItem } from "@/lib/portfolio-data"

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-border">
      {items.map((item, i) => (
        <li key={i} className="relative pb-10 pl-8 last:pb-0">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-primary bg-background" />
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            {item.period}
          </p>
          <h4 className="mt-2 text-balance font-serif text-xl font-light leading-snug">
            {item.title}
          </h4>
          <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
          <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-muted-foreground">
            {item.detail ? <span>{item.detail}</span> : null}
            {item.place ? <span>{item.place}</span> : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="mb-16 text-balance font-serif text-4xl font-light tracking-tight md:text-5xl">
          Education &amp; certifications
        </h2>
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              (Education)
            </p>
            <Timeline items={education} />
          </div>
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              (Certifications)
            </p>
            <Timeline items={certifications} />
          </div>
        </div>
      </div>
    </section>
  )
}
