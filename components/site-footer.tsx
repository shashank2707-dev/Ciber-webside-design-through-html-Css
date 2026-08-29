import { profile } from "@/lib/portfolio-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <p className="font-serif text-lg">
          {profile.name}
          <span className="text-primary">.</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Designed &amp; built with care.
        </p>
      </div>
    </footer>
  )
}
