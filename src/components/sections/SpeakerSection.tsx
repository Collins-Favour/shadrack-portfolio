'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SpeakerSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const speakingTopics = [
    'Transformational Leadership',
    'Marketplace Innovation & Growth',
    'Authentic Faith & Leadership',
    'Building High-Performing Teams',
    'Strategic Vision & Execution',
    'Mentorship & Personal Development',
  ]

  return (
    <section ref={ref} className="section-spacing bg-white">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          Speaker & Thought Leader
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6">Speaking Expertise</h3>
            <p className="text-text-light mb-8">
              Shadrack brings practical wisdom and transformational insights to every speaking engagement. His presentations are engaging, thought-provoking, and actionable.
            </p>
            
            <div className="space-y-3">
              {speakingTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-text-light">{topic}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-gradient-to-br from-accent/20 to-black/10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
