import { Clock } from "lucide-react"

const schedule = [
  { time: "9:00 AM", event: "Doors Open & Check-In", highlight: false },
  { time: "9:30 AM", event: "Opening Ceremony", highlight: true },
  { time: "10:00 AM", event: "Team Formation & Hacking Begins!", highlight: true },
  { time: "11:00 AM", event: "Workshop: Intro to Web Dev", highlight: false },
  { time: "12:30 PM", event: "Lunch (Free!)", highlight: false },
  { time: "1:30 PM", event: "Workshop: Building with AI", highlight: false },
  { time: "3:00 PM", event: "Mini Activity & Snack Break", highlight: false },
  { time: "3:30 PM", event: "Workshop: Game Dev Basics", highlight: false },
  { time: "5:00 PM", event: "Dinner (Free!)", highlight: false },
  { time: "6:00 PM", event: "Final Hacking Sprint", highlight: true },
  { time: "7:00 PM", event: "Project Demos", highlight: true },
  { time: "8:00 PM", event: "Awards & Closing Ceremony", highlight: true },
]

export function ScheduleSection() {
  return (
    <section id="schedule" className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Schedule
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Here's"} what to expect
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            One day packed with building, learning, and fun. All events happen
            on <strong className="text-foreground">Saturday, March 7th, 2026</strong>.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-24" />

          <div className="flex flex-col gap-1">
            {schedule.map((item) => (
              <div key={item.time + item.event} className="group relative flex items-start gap-4 py-3">
                {/* Time */}
                <div className="hidden w-20 shrink-0 text-right md:block">
                  <span className="text-sm font-mono font-medium text-muted-foreground">
                    {item.time}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative z-10 flex h-3 w-3 shrink-0 translate-y-1.5 items-center justify-center mt-1">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      item.highlight
                        ? "bg-primary ring-4 ring-primary/20"
                        : "bg-border"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 rounded-xl px-4 py-3 transition-colors ${
                  item.highlight
                    ? "bg-primary/5 border border-primary/15"
                    : "hover:bg-secondary"
                }`}>
                  <span className="block text-xs font-mono text-muted-foreground md:hidden">
                    {item.time}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.highlight && <Clock className="h-4 w-4 text-primary" />}
                    <span
                      className={`text-sm font-medium ${
                        item.highlight ? "text-foreground" : "text-foreground/80"
                      }`}
                    >
                      {item.event}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
