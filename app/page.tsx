import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { MissionSection } from "@/components/mission-section"
import { ArticlesSection } from "@/components/articles-section"
import { VideoSection } from "@/components/video-section"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <MissionSection />
      <ArticlesSection />
      <VideoSection />
      <Footer/>
      <CookieConsent />
    </main>
  )
}
