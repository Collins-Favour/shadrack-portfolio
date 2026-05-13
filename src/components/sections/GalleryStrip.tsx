'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function GalleryStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const images = [
    { title: 'Speaking Engagement 1', type: 'event' },
    { title: 'Ministry Moment', type: 'ministry' },
    { title: 'Corporate Event', type: 'corporate' },
    { title: 'Speaking Engagement 2', type: 'event' },
    { title: 'Leadership Workshop', type: 'workshop' },
    { title: 'Community Impact', type: 'community' },
  ]

  return (
    <section ref={ref} className="section-spacing bg-bg overflow-hidden">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          Gallery & Media
        </motion.h2>
      </div>

      {/* Horizontal scrolling gallery */}
      <motion.div
        ref={ref}
        className="flex gap-6 overflow-x-auto pb-4 px-4 md:px-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom flex gap-6 flex-shrink-0">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-accent/10 to-black/10 rounded-xl overflow-hidden cursor-pointer group"
            >
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="text-center text-text-light/50">
                  <svg className="w-16 h-16 mx-auto mb-3 opacity-30 group-hover:opacity-50 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">{image.title}</p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
