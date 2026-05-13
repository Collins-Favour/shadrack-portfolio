'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-medium mb-6 inline-block">Get In Touch</span>
          <h1 className="mb-6">Let&apos;s Connect</h1>
          <p className="text-lg text-text-light">
            Have a question or inquiry? Send a message and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
