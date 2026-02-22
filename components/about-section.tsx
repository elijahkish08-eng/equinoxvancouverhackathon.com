import { Code, Palette, Music, Users, Rocket, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Code,
    title: "Build Anything",
    description:
      "Apps, games, websites — whatever inspires you. The only limit is your imagination.",
  },
  {
    icon: Users,
    title: "Meet Cool People",
    description:
      "Team up with other teenagers who love creating things. Make friends who share your passions.",
  },
  {
    icon: Rocket,
    title: "No Experience Needed",
    description:
      "Whether you've never coded before or you're a seasoned dev, we've got workshops and mentors to help.",
  },
  {
    icon: Palette,
    title: "Designers Welcome",
    description:
      "Art, UI/UX, graphics — if you're creative, there's a place for you on every team.",
  },
  {
    icon: Music,
    title: "Vibes All Day",
    description:
      "Free food, music, swag, and a high-energy atmosphere that keeps you inspired.",
  },
  {
    icon: Heart,
    title: "100% Free",
    description:
      "Everything is completely free — meals, snacks, swag, and an unforgettable experience.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            About Equinox
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Build projects, make friends at Vancouver{"'"}s hackathon
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Equinox Vancouver is a beginner-friendly teen hackathon for high school students
            where coders, designers, and creators come together to build amazing
            projects in a single day. Join the largest youth hackathon in Vancouver on{" "}
            <strong className="text-foreground">March 7th, 2026</strong> in
            Vancouver, BC — completely free for all teenagers aged 13-19.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
