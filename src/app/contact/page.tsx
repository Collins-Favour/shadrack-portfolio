import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactHero from '@/components/sections/ContactHero'
import ContactForm from '@/components/sections/ContactForm'
import ContactInfo from '@/components/sections/ContactInfo'

export const metadata = {
  title: 'Contact Shadrack - Get in Touch',
  description: 'Contact Shadrack G Mahinda for speaking engagements, mentorship, or general inquiries.',
}

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <ContactHero />
      <div className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
