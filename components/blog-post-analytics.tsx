"use client"

import { useEffect } from "react"
import posthog from "posthog-js"

interface BlogPostAnalyticsProps {
  slug: string
  title: string
}

export function BlogPostAnalytics({ slug, title }: BlogPostAnalyticsProps) {
  useEffect(() => {
    posthog.capture("blog_post_viewed", {
      slug,
      title,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return null
}

export function BlogSignupCtaButton() {
  const handleClick = () => {
    posthog.capture("blog_signup_cta_clicked", {
      source: "blog_post_cta",
      cta_text: "Sign Up Now",
    })
  }

  return (
    <a
      href="https://tally.so/r/xXpzlk"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      onClick={handleClick}
    >
      Sign Up Now
    </a>
  )
}
