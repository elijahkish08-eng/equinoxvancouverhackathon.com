import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for the Equinox Vancouver Hackathon 2026 website and event participation.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      <article className="px-4 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Terms of Service
          </h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Last updated: February 21, 2026
          </p>

          <div className="flex flex-col gap-8 text-base leading-relaxed text-foreground/80">
            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Equinox Vancouver Hackathon website
                and attending our events, you agree to be bound by these Terms
                of Service. If you do not agree with any part of these terms,
                please do not use our website or attend our events.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                2. Event Participation
              </h2>
              <p>
                Equinox Vancouver Hackathon is open to teenagers aged 13-19.
                Participants under 18 must have parental or guardian consent to
                attend. By registering, you confirm that all information
                provided is accurate and that you meet the eligibility
                requirements.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                3. Code of Conduct
              </h2>
              <p>
                All participants are expected to behave respectfully and
                inclusively. Harassment, discrimination, or disruptive behavior
                of any kind will not be tolerated. Organizers reserve the right
                to remove any participant who violates these standards without
                refund or compensation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                4. Intellectual Property
              </h2>
              <p>
                Projects created during the hackathon remain the intellectual
                property of the participants who built them. By participating,
                you grant Equinox Vancouver the right to showcase your project
                for promotional purposes, including photos, videos, and project
                descriptions.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                5. Liability
              </h2>
              <p>
                Equinox Vancouver Hackathon is not liable for any loss, damage,
                or injury sustained during the event. Participants attend at
                their own risk. We recommend that participants take reasonable
                care of their personal belongings and equipment.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                6. Donations
              </h2>
              <p>
                All donations are processed securely through HCB (Hack Club
                Bank). Donations are non-refundable and are used to fund event
                operations, including food, venue rental, swag, and prizes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right to update these Terms of Service at any
                time. Changes will be posted on this page with an updated
                revision date. Continued use of the website constitutes
                acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
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
