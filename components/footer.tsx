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
          <a href="https://tally.so/r/xXpzlk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
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
            href="https://www.instagram.com/equinoxvancouverhackathon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="https://discord.gg/V689CZHVac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Discord"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.12 20.32c-1.93-.16-3.56-1.06-4.76-2.51A21.1 21.1 0 0 1 1 11.42a.75.75 0 0 1 .43-.67A17.07 17.07 0 0 1 7.4 8.58l.47 1.43a12 12 0 0 0-2.05.68 .38.38 0 0 0 .33.67A14.5 14.5 0 0 1 12 10a14.5 14.5 0 0 1 5.85 1.36.38.38 0 0 0 .33-.67 12 12 0 0 0-2.05-.68l.47-1.43a17.07 17.07 0 0 1 5.97 2.17.75.75 0 0 1 .43.67 21.1 21.1 0 0 1-2.36 6.39c-1.2 1.45-2.83 2.35-4.76 2.51l-.98-1.47c.8-.26 1.54-.62 2.2-1.07a.38.38 0 0 0-.4-.64A13.2 13.2 0 0 1 12 19a13.2 13.2 0 0 1-4.7-1.14.38.38 0 0 0-.4.64c.66.45 1.4.81 2.2 1.07z"/><circle cx="9.5" cy="14.5" r="1.5"/><circle cx="14.5" cy="14.5" r="1.5"/></svg>
          </a>
          <a
            href="mailto:equinoxhackathon2026@gmail.com"
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
