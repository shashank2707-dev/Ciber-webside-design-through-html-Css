import type { Metadata } from "next"
import { About } from "@/components/about"

export const metadata: Metadata = {
  title: "About — Shashank Sahu",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
    </div>
  )
}
