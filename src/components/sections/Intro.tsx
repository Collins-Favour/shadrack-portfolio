'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Intro() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const roles = [
    { icon: '🎤', label: 'Speaker' },
    { icon: '⛪', label: 'Pastor' },
    { icon: '💼', label: 'Marketplace Leader' },
    { icon: '👥', label: 'Mentor' },
    { icon: '👨‍👩‍👧‍👦', label: 'Family Man' },
  ]

  return (
    <section ref={ref} className="section-spacing bg-bg">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8">
              Meet <span className="text-accent">Shadrack</span>
            </h2>

            <p className="text-lg text-text-light mb-6 leading-relaxed">
              Shadrack G Mahinda is a transformational leader with a thought-provoking presence and a creative, lovable personality. He brings unique value to every engagement, whether as a pastor, marketplace professional, speaker, or mentor.
            </p>

            <p className="text-base text-text-light mb-8 leading-relaxed">
              With over 10 years of strategic market growth leadership at Samsung Electronics Kenya, Shadrack has driven expansion across DRC, Rwanda, Uganda, and Kenya. Simultaneously, he serves as a pastor at Wisdom Sanctuary Church, Thika, combining professional excellence with spiritual leadership.
            </p>

            <p className="text-base text-text-light mb-8 leading-relaxed">
              Shadrack is married to Hannah and blessed with three children: Nathan, Nissi, and Gabriella. He enjoys hiking and meditation walks as personal rejuvenation practices.
            </p>

            {/* Role tags */}
            <div className="flex flex-wrap gap-3">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-white border border-black/10 rounded-full flex items-center gap-2"
                >
                  <span>{role.icon}</span>
                  <span className="text-sm font-medium">{role.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square bg-gradient-to-br from-accent/20 to-black/10 rounded-2xl overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-text-light/30">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto mb-6 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm">Professional image</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Reusable hook for intersection observer
function useInView(options = {}) {
  const [ref, inView] = require('react-intersection-observer').useInView(options)
  return { ref, inView }
}
