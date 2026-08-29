import { skillGroups } from "@/lib/portfolio-data"

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[0.4fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            (Skills)
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-light tracking-tight md:text-5xl">
            The toolkit
          </h2>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {skillGroups.map((group) => (
            <div key={group.label} className="grid gap-4 py-6 sm:grid-cols-[0.4fr_1fr]">
              <h3 className="text-sm font-medium text-muted-foreground">{group.label}</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <li key={item} className="font-serif text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
