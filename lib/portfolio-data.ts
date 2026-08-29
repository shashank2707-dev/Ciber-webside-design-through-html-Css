export const profile = {
  name: "Shashank Sahu",
  role: "Computer Science Engineer",
  tagline:
    "Building intelligent systems at the intersection of machine learning, generative AI, and data.",
  location: "Bansa, Chhattishgarh, India",
  email: "sahushashank77@gmail.com",
  phone: "+91 70677 99567",
  linkedin: "https://me-l.co/8vqtclg2",
  github: "https://shorturl.at/araTW",
  about: [
    "I'm a Computer Science Engineering undergraduate at Lovely Professional University with a deep interest in machine learning, deep learning, and generative AI. I enjoy turning research ideas into working, human-friendly software.",
    "My focus is on data-driven problem solving — from building conversational AI experiences to exploring analytics that surface meaning in messy datasets. I care about clean engineering, curiosity, and shipping things that actually work.",
  ],
}

export const marqueeWords = [
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Data Analytics",
  "Python",
  "C++",
  "PostgreSQL",
]

export type SkillGroup = {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C", "C++", "Python", "MySQL", "PostgreSQL", "HTML", "CSS", "JavaScript"],
  },
  {
    label: "Engineering Tools",
    items: ["NumPy", "Pandas", "Matplotlib", "Git", "GitHub"],
  },
  {
    label: "Domain Expertise",
    items: ["Machine Learning", "Deep Learning", "Generative AI", "Data Analytics"],
  },
  {
    label: "Soft Skills",
    items: ["Problem-Solving", "Leadership", "Adaptability", "Resilience", "Self-Confidence"],
  },
]

export type Project = {
  index: string
  title: string
  summary: string
  highlights: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    index: "01",
    title: "Personality-Driven Conversational AI Chatbot",
    summary:
      "An interactive AI chatbot with a humorous, sarcastic, and fully customizable personality that adapts its tone in real time.",
    highlights: [
      "Built a responsive real-time chat interface with HTML, CSS, and JavaScript.",
      "Integrated a Python backend to process messages and manage responses.",
      "Implemented multiple personality modes — Funny, Roast, Friendly, Smart, and Savage.",
      "Added conversation memory for relevant, personalized replies.",
      "Designed prompt-based control to keep a consistent AI tone.",
    ],
    stack: ["Python", "AI / LLM API", "HTML", "CSS", "JavaScript"],
  },
]

export type TimelineItem = {
  period: string
  title: string
  org: string
  detail?: string
  place?: string
}

export const education: TimelineItem[] = [
  {
    period: "2026 — Ongoing",
    title: "B.Tech in Computer Science Engineering",
    org: "Lovely Professional University",
    detail: "CGPA: 8.40",
    place: "Phagwara, Punjab",
  },
  {
    period: "2022 — 2023",
    title: "Class XII (PCM)",
    org: "ST Charles H.S. School, Basna",
    detail: "Percentage: 74.0%",
    place: "Raipur, Chhattisgarh",
  },
  {
    period: "2020 — 2021",
    title: "Class X",
    org: "Sarswati Shishu Mandir H.S. School, Basna",
    detail: "Percentage: 94.0%",
    place: "Raipur, Chhattisgarh",
  },
]

export const certifications: TimelineItem[] = [
  {
    period: "Aug 2026 — Ongoing",
    title: "Cloud Computing",
    org: "NPTEL",
  },
  {
    period: "Nov 2026 — Dec 2026",
    title: "Database Management System",
    org: "NPTEL",
  },
  {
    period: "Oct 2025 — Nov 2025",
    title: "Python",
    org: "Cisco Networking Academy",
  },
  {
    period: "Oct 2025 — Nov 2025",
    title: "C++",
    org: "Cisco Networking Academy",
  },
]
