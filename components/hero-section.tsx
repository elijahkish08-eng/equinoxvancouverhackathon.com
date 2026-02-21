"use client"

import { ArrowDown, CalendarDays, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-contain lg:bg-cover"
        style={{ 
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 h-3 w-3 rounded-full bg-spring-blossom/40 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-16 h-4 w-4 rounded-full bg-spring-sunshine/40 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-20 h-2 w-2 rounded-full bg-spring-leaf/40 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-48 right-24 h-3 w-3 rounded-full bg-spring-blossom/30 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-spring-cream/20 bg-spring-cream/10 px-4 py-2 text-sm font-medium text-spring-cream backdrop-blur-sm">
          <CalendarDays className="h-4 w-4" />
          March 7, 2026
        </div>

        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-spring-cream md:text-7xl lg:text-8xl">
          <span className="text-balance">EQUINOX</span>
        </h1>

        <p className="mb-2 text-xl font-semibold tracking-wide text-spring-sunshine md:text-2xl">
          VANCOUVER HACKATHON
        </p>

        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-spring-cream/80 md:text-lg">
          A beginner-friendly hackathon for teenagers. Build projects, learn to code, and make lifelong friends — all in one incredible day.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base font-semibold">
            <a href="https://tally.so/r/xXpzlk" target="_blank" rel="noopener noreferrer">Sign Up — {"It's Free!"}</a>
          </Button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-sm text-spring-cream/60 sm:flex-row sm:justify-center sm:gap-6">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Vancouver, BC
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            Saturday, March 7, 2026
          </span>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 z-10 text-spring-cream/50 transition-colors hover:text-spring-cream" aria-label="Scroll down">
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
