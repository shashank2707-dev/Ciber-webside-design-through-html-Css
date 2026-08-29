import { profile } from "@/lib/portfolio-data"
import { ArrowUpRight, Mail, Phone } from "lucide-react"

export function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
    { label: "LinkedIn", value: "Connect with me", href: profile.linkedin, icon: ArrowUpRight },
    { label: "GitHub", value: "See my code", href: profile.github, icon: ArrowUpRight },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        (Contact)
      </p>
      <h2 className="mt-6 max-w-3xl text-balance font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
        Let&apos;s build something <span className="italic text-primary">worthwhile</span>.
      </h2>
      <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
        Open to internships, collaborations, and interesting problems in AI, ML, and data. Reach
        out through any channel below.
      </p>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {links.map((link) => {
          const Icon = link.icon
          const external = link.href.startsWith("http")
          return (
            <a
              key={link.label}
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 bg-card p-8 transition-colors hover:bg-secondary"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {link.label}
                </p>
                <p className="mt-2 font-serif text-xl font-light">{link.value}</p>
              </div>
              <Icon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
