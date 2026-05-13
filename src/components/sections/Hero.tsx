'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="container-custom z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow text */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              Welcome to my brand
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={itemVariants} className="mb-6 leading-tight">
            Transformational <span className="text-accent">Leadership</span> & Marketplace Excellence
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering organizations and individuals through authentic leadership, strategic wisdom, and transformative vision. Speaker • Pastor • Mentor • Marketplace Leader.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/booking" className="btn-primary">
              Book Shadrack
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </motion.div>

          {/* Hero image placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative w-full aspect-video md:aspect-auto md:h-96 bg-gradient-to-br from-black/10 to-accent/10 rounded-2xl overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-text-light/50">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Professional portrait placeholder</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
