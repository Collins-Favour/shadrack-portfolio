'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-br from-black via-black/95 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="mb-6 text-white">Ready to Connect?</h2>

          <p className="text-xl text-white/80 mb-12">
            Whether you're seeking leadership guidance, looking for a speaker, or exploring partnership opportunities, let's have a conversation.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="/booking"
              className="px-8 py-3 bg-accent text-black rounded-full font-medium hover:bg-accent/90 transition-all duration-300 ease-out"
            >
              Book Shadrack Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 ease-out"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60"
          >
            Response typically within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
