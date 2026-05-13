import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingHero from '@/components/sections/BookingHero'
import BookingSystem from '@/components/sections/BookingSystem'

export const metadata = {
  title: 'Book Shadrack - Speaking, Mentorship & Events',
  description: 'Book Shadrack G Mahinda for speaking engagements, corporate events, mentorship sessions, or church ministry.',
}

export default function BookingPage() {
  return (
    <main>
      <Navigation />
      <BookingHero />
      <BookingSystem />
      <Footer />
    </main>
  )
}
