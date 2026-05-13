'use client'

import { motion } from 'framer-motion'

export default function BookingHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-black to-black/95 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-medium mb-6 inline-block">Professional Booking</span>
          <h1 className="mb-6 text-white">Book Shadrack for Your Event</h1>
          <p className="text-lg text-white/80">
            Select your booking type, choose your preferred date and time, and get on Shadrack's calendar. Professional speaking and mentorship for organizations and communities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
