import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const VENUE_ADDRESS = "200 - 1490 W Broadway, Vancouver, BC"
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.3!2d-123.1425!3d49.2635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d0b9b1b8f1%3A0x0!2s1490+W+Broadway%2C+Vancouver%2C+BC!5e0!3m2!1sen!2sca!4v1700000000000"
const MAPS_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=200+-+1490+W+Broadway,+Vancouver,+BC"

export function VenueSection() {
  return (
    <section id="venue" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Venue
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Where to find us
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Equinox Vancouver is happening at a single, easy-to-reach location
            right on West Broadway.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {/* Map embed */}
          <div className="relative aspect-video w-full md:aspect-[21/9]">
            <iframe
              title="Equinox Vancouver Hackathon Venue"
              src={MAPS_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address bar */}
          <div className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{VENUE_ADDRESS}</p>
                <p className="text-sm text-muted-foreground">
                  March 7, 2026 &middot; 9:00 AM &ndash; 6:30 PM
                </p>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-border text-foreground hover:bg-secondary shrink-0"
            >
              <a
                href={MAPS_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
