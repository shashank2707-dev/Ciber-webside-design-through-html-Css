import type { Metadata } from "next"
import { Experience } from "@/components/experience"

export const metadata: Metadata = {
  title: "Experience — Shashank Sahu",
}

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <Experience />
    </div>
  )
}
