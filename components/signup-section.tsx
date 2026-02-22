"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Sparkles } from "lucide-react"
import posthog from "posthog-js"

const TALLY_URL = "https://tally.so/r/xXpzlk"

export function SignupSection() {
  const handleRegisterClick = () => {
    posthog.capture("registration_cta_clicked", {
      source: "signup_section",
      cta_text: "Register Now",
    })
  }

  const handleDiscordClick = () => {
    posthog.capture("discord_join_clicked", {
      source: "signup_section",
    })
  }

  return (
    <section id="signup" className="relative overflow-hidden px-4 py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hackathon-group.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          Sign Up
        </span>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
          Register for Equinox Vancouver Hackathon 2026
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Spots are limited! Register now to secure your place at {"Vancouver's"} premier teen hackathon on March 7th, 2026. Free registration for high school students aged 13-19.
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
            <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" onClick={handleRegisterClick}>
              Register Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full font-semibold text-base border-primary text-primary hover:bg-primary/5"
          >
            <a href="https://discord.gg/BKuz26yxdN" target="_blank" rel="noopener noreferrer" onClick={handleDiscordClick}>
              Join the Discord
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
