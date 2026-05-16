'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-24 md:py-40 bg-gradient-to-br from-black via-black/98 to-black text-white relative overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <motion.span
              className="text-sm uppercase tracking-widest text-accent font-semibold inline-block mb-6"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Next Steps
            </motion.span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-8 text-white"
          >
            Ready to <motion.span
              className="text-accent inline-block"
              animate={inView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Connect?
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed"
          >
            Whether you&apos;re seeking leadership guidance, looking for a speaker, or exploring partnership opportunities, let&apos;s have a conversation that transforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/booking"
                className="px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-black rounded-full font-semibold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 inline-block"
              >
                Book Shadrack Now
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition-all duration-300 inline-block"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 pt-8 border-t border-white/10"
          >
            {[
              { label: 'Phone' },
              { label: 'Email' },
              { label: 'Message' },
            ].map((method, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <p className="text-xs text-white/80">{method.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-white/50 text-sm mt-8"
          >
            Response typically within 24 hours • Available for consultations, speaking engagements & partnerships
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
