import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import FeaturedHighlights from '@/components/sections/FeaturedHighlights'
import TestimonialsSlider from '@/components/sections/TestimonialsSlider'
import GalleryStrip from '@/components/sections/GalleryStrip'
import Statistics from '@/components/sections/Statistics'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Intro />
      <FeaturedHighlights />
      <TestimonialsSlider />
      <GalleryStrip />
      <Statistics />
      <CTA />
      <Footer />
    </main>
  )
}
