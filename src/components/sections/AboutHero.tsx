'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-medium mb-6 inline-block">About Shadrack</span>
          <h1 className="mb-6">A Life Dedicated to Excellence</h1>
          <p className="text-lg text-text-light">
            Shadrack G Mahinda&apos;s story is one of purposeful leadership, authentic faith, and transformational impact across multiple domains.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
