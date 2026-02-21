import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Coffee, Pizza, Laptop } from "lucide-react"

const presetAmounts = [
  { label: "$25", icon: Coffee, description: "Buys snacks for a hacker" },
  { label: "$50", icon: Pizza, description: "Covers a meal for the whole event" },
  { label: "$100", icon: Laptop, description: "Sponsors a hacker's full day" },
  { label: "$500", icon: Sparkles, description: "Funds workshops & materials" },
]

export function DonateSection() {
  return (
    <section id="donate" className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Support Us
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Help us make Equinox happen
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Equinox Vancouver is completely free for attendees. Your donation
            helps cover food, venue, swag, and all the things that make this
            event unforgettable for teenagers.
          </p>
        </div>

        <Card className="border-border bg-card overflow-hidden">
          <CardContent className="p-6 md:p-8">
            {/* Preset amounts — display only */}
            <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {presetAmounts.map((preset) => (
                <div
                  key={preset.label}
                  className="flex flex-col items-center gap-2 rounded-xl border-2 border-border bg-background p-4"
                >
                  <preset.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-xl font-bold text-foreground">
                    {preset.label}
                  </span>
                  <span className="text-xs text-muted-foreground text-center leading-tight">
                    {preset.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Send support button */}
            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base h-14 shadow-md"
            >
              <a
                href="https://hcb.hackclub.com/donations/start/equinox-vancouver-hackathon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="mr-2 h-5 w-5" />
                Send a Support
              </a>
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Donations are processed securely through HCB (Hack Club Bank).
              Every dollar goes directly toward making Equinox amazing for
              teens.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
