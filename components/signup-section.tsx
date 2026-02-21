import { Button } from "@/components/ui/button"
import { ExternalLink, Sparkles } from "lucide-react"

const TALLY_URL = "https://tally.so/r/xXpzlk"

export function SignupSection() {
  return (
    <section id="signup" className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          Sign Up
        </span>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
          Join Equinox Vancouver
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Spots are limited! Register now to secure your place at {"Vancouver's"} spring hackathon on March 7th, 2026. {"It's"} completely free.
        </p>

        <div className="mx-auto mb-8 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Ready to hack?
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Fill out our quick registration form and {"you're"} in. No coding experience required — just bring your curiosity and creativity.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base"
          >
            <a href={TALLY_URL} target="_blank" rel="noopener noreferrer">
              Register Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            Open to anyone aged 13-19. By registering you agree to our code of conduct.
          </p>
        </div>
      </div>
    </section>
  )
}
