'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Intro() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const roles = [
    { label: 'Speaker' },
    { label: 'Pastor' },
    { label: 'Marketplace Leader' },
    { label: 'Mentor' },
    { label: 'Family Man' },
  ]

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  }

  return (
    <section ref={ref} className="section-spacing bg-gradient-to-b from-bg to-black/5 relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Meet <motion.span
                className="text-accent inline-block"
                animate={inView ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Shadrack
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg text-text-light mb-6 leading-relaxed"
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Shadrack G Mahinda is a transformational leader with a thought-provoking presence and a creative, lovable personality. He brings unique value to every engagement, whether as a pastor, marketplace professional, speaker, or mentor.
            </motion.p>

            <motion.p
              className="text-base text-text-light mb-8 leading-relaxed"
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              With over 10 years of strategic market growth leadership at Samsung Electronics Kenya, Shadrack has driven expansion across DRC, Rwanda, Uganda, and Kenya. Simultaneously, he serves as a pastor at Wisdom Sanctuary Church, Thika, combining professional excellence with spiritual leadership.
            </motion.p>

            <motion.p
              className="text-base text-text-light mb-8 leading-relaxed"
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Shadrack is married to Hannah and blessed with three children: Nathan, Nissi, and Gabriella. He enjoys hiking and meditation walks as personal rejuvenation practices.
            </motion.p>

            {/* Role tags with staggered animation */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 10 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.08,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  }}
                  className="px-4 py-2 bg-white border border-black/10 rounded-full flex items-center gap-2 hover:border-accent transition-all cursor-pointer group"
                >
                  <motion.span
                    className="text-accent text-xs font-bold"
                    animate={inView ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    •
                  </motion.span>
                  <span className="text-sm font-medium group-hover:text-accent transition-colors">{role.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image placeholder with animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square bg-gradient-to-br from-accent/20 to-black/10 rounded-3xl overflow-hidden border border-accent/20"
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl border border-accent/30"
              animate={{
                borderColor: ['rgba(212, 175, 55, 0.3)', 'rgba(212, 175, 55, 0.6)', 'rgba(212, 175, 55, 0.3)'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <Image
              src="/images/shadrack-casual.jpg"
              alt="Shadrack G Mahinda - Leadership Portrait"
              fill
              className="object-cover object-top"
              quality={95}
            />
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
