import type { Metadata } from "next"
import { Projects } from "@/components/projects"

export const metadata: Metadata = {
  title: "Work — Shashank Sahu",
}

export default function WorkPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  )
}
