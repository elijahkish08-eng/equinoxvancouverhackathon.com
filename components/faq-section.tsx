import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Am I eligible to participate?",
    a: "If you're a teenager (ages 13-19), yes — we can't wait to see you! If you're slightly outside this range but still in high school, email us at equinox@example.com and we'll figure it out.",
  },
  {
    q: "Does it cost anything?",
    a: "Nope! Equinox Vancouver is entirely free. We'll have meals, snacks, drinks, swag, and prizes — all covered.",
  },
  {
    q: "I've never coded before. Can I still join?",
    a: "Absolutely! This hackathon is for hackers of all skill levels. We'll have beginner-friendly workshops, mentors on-hand, and resources to help you build your first project. You'll learn a ton just by showing up.",
  },
  {
    q: "What can I build?",
    a: "Anything you want! Websites, apps, games, AI projects, hardware hacks — the sky's the limit. A theme will be announced at the opening ceremony to spark your creativity.",
  },
  {
    q: "Do I need a team?",
    a: "Not at all. You can come solo and we'll help you find a team at the event. Teams of 1-4 are welcome. Bring friends or make new ones!",
  },
  {
    q: "What should I bring?",
    a: "Just your laptop, charger, and an open mind. We'll provide everything else — food, drinks, wifi, and a great venue.",
  },
  {
    q: "My parents are worried — can they contact you?",
    a: "Of course! Have them email us at equinox@example.com and we'll answer all their questions. Safety is our top priority and we'll have adult supervisors present throughout the event.",
  },
  {
    q: "How can I contact you with more questions?",
    a: "Email us anytime at equinox@example.com, or hop into our Discord server at discord.gg/V689CZHVac — we're always happy to help!",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Frequently asked questions
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Got questions? {"We've"} got answers. If you {"don't"} find what
            {"you're"} looking for, feel free to email us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary [&[data-state=open]]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
