'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function LeaderSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const leadershipAreas = [
    {
      title: 'Corporate Leadership',
      description: 'Strategic growth and market expansion across multiple African markets',
    },
    {
      title: 'Spiritual Leadership',
      description: 'Pastoral ministry focused on spiritual transformation and discipleship',
    },
    {
      title: 'Mentorship',
      description: 'Guiding emerging leaders and professionals to reach their potential',
    },
    {
      title: 'Community Impact',
      description: 'Creating positive change in families, churches, and organizations',
    },
  ]

  return (
    <section ref={ref} className="section-spacing bg-bg">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          Leadership Impact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {leadershipAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white border border-black/10 rounded-xl"
            >
              <h3 className="text-xl font-serif font-bold mb-3">{area.title}</h3>
              <p className="text-text-light">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
