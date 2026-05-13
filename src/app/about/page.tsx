import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AboutHero from '@/components/sections/AboutHero'
import Biography from '@/components/sections/Biography'
import SpeakerSection from '@/components/sections/SpeakerSection'
import LeaderSection from '@/components/sections/LeaderSection'
import Timeline from '@/components/sections/Timeline'

export const metadata = {
  title: 'About Shadrack - Leadership & Marketplace Excellence',
  description: 'Learn more about Shadrack G Mahinda\'s journey as a transformational leader, pastor, and marketplace professional.',
}

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <AboutHero />
      <Biography />
      <SpeakerSection />
      <LeaderSection />
      <Timeline />
      <Footer />
    </main>
  )
}
