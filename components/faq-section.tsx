"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import posthog from "posthog-js"

const faqs = [
  {
    q: "What is Equinox Vancouver Hackathon 2026?",
    a: "Equinox Vancouver Hackathon 2026 is Vancouver\u2019s premier beginner-friendly hackathon designed exclusively for teenagers. It\u2019s an all-day event on March 7, 2026 where students come together to build projects, learn to code, attend workshops, and make lifelong friends \u2014 all in one incredible day.",
  },
  {
    q: "Where is Equinox Vancouver taking place in 2026?",
    a: "Equinox Vancouver Hackathon is taking place at 200 \u2013 1490 W Broadway, Vancouver, BC. The venue is conveniently located on West Broadway and is easily accessible by transit.",
  },
  {
    q: "Am I eligible to participate?",
    a: "If you\u2019re a teenager (ages 13-19), yes \u2014 we can\u2019t wait to see you! If you\u2019re slightly outside this range but still in high school, email us at equinoxhackathon2026@gmail.com and we\u2019ll figure it out.",
  },
  {
    q: "Does it cost anything?",
    a: "Nope! Equinox Vancouver is entirely free. We\u2019ll have meals, snacks, drinks, swag, and prizes \u2014 all covered.",
  },
  {
    q: "I\u2019ve never coded before. Can I still join?",
    a: "Absolutely! This hackathon is for hackers of all skill levels. We\u2019ll have beginner-friendly workshops, mentors on-hand, and resources to help you build your first project. You\u2019ll learn a ton just by showing up.",
  },
  {
    q: "What can I build?",
    a: "Anything you want! Websites, apps, games, AI projects, hardware hacks \u2014 the sky\u2019s the limit. A theme will be announced at the opening ceremony to spark your creativity.",
  },
  {
    q: "Do I need a team?",
    a: "Not at all. You can come solo and we\u2019ll help you find a team at the event. Teams of 1-4 are welcome. Bring friends or make new ones!",
  },
  {
    q: "What should I bring?",
    a: "Just your laptop, charger, and an open mind. We\u2019ll provide everything else \u2014 food, drinks, wifi, and a great venue.",
  },
  {
    q: "My parents are worried \u2014 can they contact you?",
    a: "Of course! Have them email us at equinoxhackathon2026@gmail.com and we\u2019ll answer all their questions. Safety is our top priority and we\u2019ll have adult supervisors present throughout the event.",
  },
  {
    q: "How can I contact you with more questions?",
    a: "Email us anytime at equinoxhackathon2026@gmail.com, or hop into our Discord server at discord.gg/V689CZHVac \u2014 we\u2019re always happy to help!",
  },
]

function FaqCard({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    const nextOpen = !isOpen
    setIsOpen(nextOpen)
    if (nextOpen) {
      posthog.capture("faq_item_expanded", {
        question,
      })
    }
  }

  return (
    <div
      className="group rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Equinox Vancouver Hackathon FAQ
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Got questions about the hackathon? {"We've"} got answers. If you {"don't"} find what
            {"you're"} looking for, email us at equinoxhackathon2026@gmail.com.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqCard key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
