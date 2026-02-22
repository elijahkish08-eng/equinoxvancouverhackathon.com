"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import posthog from "posthog-js"

const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Schedule", href: "#schedule" },
	{ label: "Sign Up", href: "#signup" },
	{ label: "FAQ", href: "#faq" },
	{ label: "Donate", href: "#donate" },
]

export function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false)
	const pathname = usePathname()
	const isHome = pathname === "/"

	const getHref = (hash: string) => (isHome ? hash : `/${hash}`)

	const handleSignUpClick = (source: "navbar_desktop" | "navbar_mobile") => {
		posthog.capture("registration_cta_clicked", {
			source,
			cta_text: "Sign Up",
		})
	}

	return (
		<nav
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
				<a
					href="/"
					className="flex items-center gap-2 font-bold tracking-tight no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg"
					aria-label="Equinox Vancouver Hackathon Home"
				>
					<Leaf className="h-6 w-6 text-primary" aria-hidden="true" />
					<span className="text-lg font-bold tracking-tight text-foreground">
						EQUINOX
					</span>
				</a>

				{/* Desktop Navigation */}
				<div className="hidden items-center gap-1 md:flex">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={getHref(link.href)}
							className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
						>
							{link.label}
						</a>
					))}
					<Button
						asChild
						size="sm"
						className="ml-2 bg-primary text-primary-foreground hover:bg-primary/90"
					>
						<a
							href="https://tally.so/r/xXpzlk"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => handleSignUpClick("navbar_desktop")}
						>
							Sign Up
						</a>
					</Button>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					onClick={() => setMobileOpen(!mobileOpen)}
					className="text-foreground md:hidden p-2 rounded-lg hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
					aria-label={
						mobileOpen ? "Close navigation menu" : "Open navigation menu"
					}
					aria-expanded={mobileOpen}
					aria-controls="mobile-menu"
				>
					{mobileOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileOpen && (
				<div
					className="border-t border-border bg-background px-4 py-4 md:hidden"
					id="mobile-menu"
					role="region"
					aria-label="Mobile navigation"
				>
					<div className="flex flex-col gap-2">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={getHref(link.href)}
								onClick={() => setMobileOpen(false)}
								className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
							>
								{link.label}
							</a>
						))}
						<Button
							asChild
							size="sm"
							className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
						>
							<a
								href="https://tally.so/r/xXpzlk"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => {
									handleSignUpClick("navbar_mobile")
									setMobileOpen(false)
								}}
							>
								Sign Up
							</a>
						</Button>
					</div>
				</div>
			)}
		</nav>
	)
}
