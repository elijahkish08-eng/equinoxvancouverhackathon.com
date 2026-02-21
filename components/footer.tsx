import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <a href="#" className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold text-foreground">
            EQUINOX
          </span>
        </a>

        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Built with love by teenagers, for teenagers in Vancouver.
          Equinox is a community-organized hackathon celebrating the start
          of spring.
        </p>

        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
            About
          </a>
          <a href="#schedule" className="text-muted-foreground transition-colors hover:text-foreground">
            Schedule
          </a>
          <a href="#signup" className="text-muted-foreground transition-colors hover:text-foreground">
            Sign Up
          </a>
          <a href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </a>
          <a href="#donate" className="text-muted-foreground transition-colors hover:text-foreground">
            Donate
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="X / Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
          </a>
          <a
            href="mailto:equinox@example.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          Equinox Vancouver Hackathon 2026. Made with care in Vancouver, BC.
        </p>
      </div>
    </footer>
  )
}
