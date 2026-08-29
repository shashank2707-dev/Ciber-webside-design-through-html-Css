import Image from "next/image"
import Link from "next/link"
import { profile, marqueeWords } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-end gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              {profile.role}
            </p>
            <h1 className="text-balance font-serif text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              {profile.name}
            </h1>
            <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View selected work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
              >
                Contact me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-secondary">
              <Image
                src="/portrait.png"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-background px-4 py-3 shadow-sm sm:block">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Based in
              </p>
              <p className="text-sm font-medium">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-border py-5">
        <div className="flex w-max marquee-track">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {marqueeWords.map((word) => (
                <li key={word} className="flex items-center">
                  <span className="whitespace-nowrap px-6 font-serif text-2xl italic text-muted-foreground">
                    {word}
                  </span>
                  <span className="text-primary">/</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
