import { UserPlus, Users, Wrench, Presentation, Trophy } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up",
    description: "Register for Equinox Vancouver — it only takes a minute.",
  },
  {
    icon: Users,
    step: "02",
    title: "Find a Team",
    description: "Meet other teenagers at the event and form your dream team.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Start Building",
    description: "Pick a project and start hacking! No prior experience needed.",
  },
  {
    icon: Presentation,
    step: "04",
    title: "Get Help",
    description: "Attend workshops or chat with mentors whenever you're stuck.",
  },
  {
    icon: Trophy,
    step: "05",
    title: "Ship & Share",
    description: "Demo your project and share what you built with everyone!",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hackathon-group.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            How It Works
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            How does a hackathon work?
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {"It's"} simpler than you think. Here are the steps to get from
            sign-up to demo day.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="absolute top-6 left-1/2 hidden h-px w-full bg-border md:block" />
              )}
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                Step {s.step}
              </span>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
