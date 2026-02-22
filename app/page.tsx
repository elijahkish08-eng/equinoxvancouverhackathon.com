import { HomePageJsonLd } from "@/components/structured-data"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ScheduleSection } from "@/components/schedule-section"
import { VenueSection } from "@/components/venue-section"
import { SignupSection } from "@/components/signup-section"
import { FaqSection } from "@/components/faq-section"
import { TeamSection } from "@/components/team-section"
import { DonateSection } from "@/components/donate-section"
import { PastEventsSection } from "@/components/past-events-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HomePageJsonLd />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ScheduleSection />
      <VenueSection />
      <SignupSection />
      <FaqSection />
      <TeamSection />
      <DonateSection />
      <PastEventsSection />
      <Footer />
    </main>
  )
}