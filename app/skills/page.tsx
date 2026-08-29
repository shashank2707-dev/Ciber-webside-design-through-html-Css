import type { Metadata } from "next"
import { Skills } from "@/components/skills"

export const metadata: Metadata = {
  title: "Skills — Shashank Sahu",
}

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <Skills />
    </div>
  )
}
