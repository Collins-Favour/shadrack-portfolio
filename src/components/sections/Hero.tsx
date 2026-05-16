'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-welcome.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-custom z-10 relative">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Center Content */}
          <motion.div variants={itemVariants} className="flex flex-col text-white">
            {/* Eyebrow text */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                className="text-sm uppercase tracking-widest font-semibold inline-block"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                TRANSFORMATIONAL LEADERSHIP
              </motion.span>
            </motion.div>

            {/* Main headline - Corporate & Short */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 leading-tight text-4xl md:text-5xl lg:text-6xl font-serif font-bold"
            >
              Elevating Leaders.<br className="hidden md:block" /> Transforming Organizations.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-white/90 mb-8 max-w-xl leading-relaxed"
            >
              Strategic leadership across corporate and ministry sectors. Over a decade of proven marketplace success and transformational impact.
            </motion.p>

            {/* Role tags - No Emojis */}
            <motion.div
              variants={itemVariants}
              className="text-sm text-white/80 flex gap-4 flex-wrap mb-10"
            >
              <span>Speaker</span>
              <span>Pastor</span>
              <span>Marketplace Leader</span>
              <span>Mentor</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto"
              >
                <Link href="/booking" className="btn-primary inline-block pointer-events-auto">
                  Book Speaking Engagement
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto"
              >
                <Link href="/about" className="btn-secondary inline-block pointer-events-auto">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

