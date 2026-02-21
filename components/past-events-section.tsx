import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, DollarSign, Trophy } from "lucide-react"

export function PastEventsSection() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Track Record
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Past events we have done
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {"We've already organized a successful large-scale hackathon — and we're just getting started."}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-auto">
              <img
                src="/images/counterspell-vancouver.webp"
                alt="Group photo from Counterspell Vancouver Hackathon, November 2024"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center gap-6 p-6 md:p-10">
              <div>
                <h3 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                  Counterspell Vancouver, British Columbia Hackathon
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  The largest high school game jam in Western Canada. Teenagers came
                  together to build games from scratch in a single day, learning
                  to code, collaborating with new friends, and showcasing their
                  creativity.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Card className="border-border bg-background">
                  <CardContent className="flex flex-col items-center gap-1 p-4 text-center">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <span className="text-lg font-bold text-foreground">November 24, 2024</span>
                    <span className="text-xs text-muted-foreground">Event Date</span>
                  </CardContent>
                </Card>
                <Card className="border-border bg-background">
                  <CardContent className="flex flex-col items-center gap-1 p-4 text-center">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span className="text-lg font-bold text-foreground">$3,000</span>
                    <span className="text-xs text-muted-foreground">Raised</span>
                  </CardContent>
                </Card>
                <Card className="border-border bg-background">
                  <CardContent className="flex flex-col items-center gap-1 p-4 text-center">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span className="text-lg font-bold text-foreground">Largest</span>
                    <span className="text-xs text-muted-foreground">High School Game Jam in Western Canada</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
