export function HomePageJsonLd() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Equinox Vancouver Hackathon 2026",
    description:
      "Vancouver's premier beginner-friendly hackathon for teenagers. Build projects, learn to code, and make lifelong friends — completely free for high school students aged 13-19.",
    startDate: "2026-03-07T09:00:00-08:00",
    endDate: "2026-03-07T18:30:00-08:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Equinox Vancouver Hackathon Venue",
      address: {
        "@type": "PostalAddress",
        streetAddress: "200 - 1490 W Broadway",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V6H 4E8",
        addressCountry: "CA",
      },
    },
    image: "https://equinoxvancouver.com/images/hero-bg.jpg",
    organizer: {
      "@type": "Organization",
      name: "Equinox Vancouver Hackathon",
      url: "https://equinoxvancouver.com",
      email: "equinoxhackathon2026@gmail.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: "https://tally.so/r/xXpzlk",
      validFrom: "2026-02-15T00:00:00-08:00",
    },
    performer: {
      "@type": "Organization",
      name: "Equinox Vancouver Hackathon Team",
    },
    audience: {
      "@type": "Audience",
      audienceType: "High school students and teenagers aged 13-19",
    },
    typicalAgeRange: "13-19",
    isAccessibleForFree: true,
    keywords:
      "hackathon Vancouver 2026, teen hackathon, high school hackathon, youth coding event, Vancouver hackathon for teenagers, beginner-friendly hackathon, free hackathon Vancouver",
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Equinox Vancouver Hackathon",
    url: "https://equinoxvancouver.com",
    logo: "https://equinoxvancouver.com/icon.svg",
    email: "equinoxhackathon2026@gmail.com",
    sameAs: [
      "https://www.instagram.com/equinoxvancouverhackathon",
      "https://discord.gg/V689CZHVac",
    ],
    description:
      "Equinox Vancouver organizes beginner-friendly hackathons for teenagers in Vancouver, BC. Free coding events for high school students featuring workshops, mentors, and prizes.",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Equinox Vancouver Hackathon",
    url: "https://equinoxvancouver.com",
    description:
      "Equinox Vancouver Hackathon 2026 — Vancouver's premier free hackathon for teenagers. Register now for March 7, 2026.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://equinoxvancouver.com/blogs?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Equinox Vancouver Hackathon 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Equinox Vancouver Hackathon 2026 is Vancouver\u2019s premier beginner-friendly hackathon designed exclusively for teenagers. It\u2019s an all-day event on March 7, 2026 where students come together to build projects, learn to code, attend workshops, and make lifelong friends.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Equinox Vancouver taking place in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Equinox Vancouver Hackathon is taking place at 200 \u2013 1490 W Broadway, Vancouver, BC. The venue is conveniently located on West Broadway and is easily accessible by transit.",
        },
      },
      {
        "@type": "Question",
        name: "Am I eligible to participate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you\u2019re a teenager aged 13-19, yes! If you\u2019re slightly outside this range but still in high school, email us at equinoxhackathon2026@gmail.com and we\u2019ll figure it out.",
        },
      },
      {
        "@type": "Question",
        name: "Does the hackathon cost anything?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nope! Equinox Vancouver is entirely free. We\u2019ll have meals, snacks, drinks, swag, and prizes \u2014 all covered.",
        },
      },
      {
        "@type": "Question",
        name: "I've never coded before. Can I still join?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! This hackathon is for hackers of all skill levels. We\u2019ll have beginner-friendly workshops, mentors on-hand, and resources to help you build your first project.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a team for the hackathon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at all. You can come solo and we\u2019ll help you find a team at the event. Teams of 1-4 are welcome. Bring friends or make new ones!",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export function BlogPostJsonLd({
  title,
  description,
  author,
  datePublished,
  heroImage,
  slug,
}: {
  title: string
  description: string
  author: string
  datePublished: string
  heroImage: string
  slug: string
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    image: heroImage,
    url: `https://equinoxvancouver.com/blogposts/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "Equinox Vancouver Hackathon",
      url: "https://equinoxvancouver.com",
      logo: "https://equinoxvancouver.com/icon.svg",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://equinoxvancouver.com/blogposts/${slug}`,
    },
    keywords:
      "hackathon project ideas, high school hackathon, teen hackathon Vancouver, coding for teenagers, hackathon 2026",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}
