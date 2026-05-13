'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Statistics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const stats = [
    { value: '10+', label: 'Years in Leadership', icon: '📈' },
    { value: '4', label: 'Countries Impacted', icon: '🌍' },
    { value: '1000+', label: 'Professionals Mentored', icon: '👥' },
    { value: '50+', label: 'Speaking Engagements', icon: '🎤' },
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
          <h2 className="mb-6">By The Numbers</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Measurable impact across leadership, marketplace, and community spheres
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
              >
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                  {stat.value}
                </h3>
              </motion.div>
              <p className="text-text-light font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
