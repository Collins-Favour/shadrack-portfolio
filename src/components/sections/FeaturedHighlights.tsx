'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function FeaturedHighlights() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const highlights = [
    {
      title: 'Leadership',
      description: 'Transformational leadership across corporate and ministry sectors',
      icon: '👑',
    },
    {
      title: 'Marketplace Impact',
      description: '10+ years driving strategic growth across multiple African markets',
      icon: '🌍',
    },
    {
      title: 'Ministry',
      description: 'Serving as pastor at Wisdom Sanctuary Church, guiding spiritual growth',
      icon: '✨',
    },
    {
      title: 'Mentorship',
      description: 'Empowering leaders and professionals through coaching and guidance',
      icon: '🤝',
    },
  ]

  return (
    <section ref={ref} className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Featured Highlights</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Shadrack&apos;s multifaceted expertise spans leadership, marketplace innovation, spiritual guidance, and mentorship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-bg border border-black/10 rounded-xl hover:border-accent/30 transition-colors"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-3">{highlight.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
