import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Equinox Vancouver Hackathon",
  description:
    "Privacy Policy for the Equinox Vancouver Hackathon 2026 website.",
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <article className="px-4 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Last updated: February 21, 2026
          </p>

          <div className="flex flex-col gap-8 text-base leading-relaxed text-foreground/80">
            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                1. Information We Collect
              </h2>
              <p>
                When you register for Equinox Vancouver Hackathon, we collect
                personal information such as your name, email address, age, and
                school name. This information is collected through our
                registration form hosted on Tally.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">
                We use your personal information to:
              </p>
              <ul className="flex flex-col gap-2 pl-6">
                <li className="list-disc">Process your event registration</li>
                <li className="list-disc">
                  Communicate important event details and updates
                </li>
                <li className="list-disc">
                  Ensure the safety and security of participants
                </li>
                <li className="list-disc">
                  Improve future events and outreach efforts
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                3. Data Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share anonymized, aggregate data with
                sponsors for reporting purposes. Registration data is stored
                securely through Tally and is only accessible to the Equinox
                organizing team.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                4. Photos and Media
              </h2>
              <p>
                During the event, photos and videos may be taken for
                promotional purposes. By attending, you consent to being
                photographed or recorded. If you prefer not to be included in
                media, please notify an organizer at the event.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                5. Cookies and Analytics
              </h2>
              <p>
                Our website uses Vercel Analytics to understand site traffic and
                improve the user experience. This may collect anonymized usage
                data such as page views and session duration. No personally
                identifiable information is collected through analytics.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                6. Data Security
              </h2>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, alteration, or destruction. However,
                no method of electronic storage or transmission is 100% secure,
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                7. Your Rights
              </h2>
              <p>
                You have the right to request access to, correction of, or
                deletion of your personal data at any time. To exercise these
                rights, please contact us at the email address below.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:equinoxhackathon2026@gmail.com"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  equinoxhackathon2026@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
