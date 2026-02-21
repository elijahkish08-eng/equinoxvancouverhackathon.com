import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ScheduleSection } from "@/components/schedule-section"
import { SignupSection } from "@/components/signup-section"
import { DonateSection } from "@/components/donate-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ScheduleSection />
      <SignupSection />
      <DonateSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
