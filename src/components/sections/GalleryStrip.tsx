'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function GalleryStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const images = [
    { title: 'Leadership Portrait', type: 'professional', image: '/images/shadrack-profile.jpg' },
    { title: 'Speaking Engagement', type: 'event', image: '/images/shadrack-profile.jpg' },
    { title: 'Community Impact', type: 'community', image: '/images/shadrack-profile.jpg' },
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
              className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-accent/10 to-black/10 rounded-xl overflow-hidden cursor-pointer group relative"
            >
              <div className="w-full h-full flex items-center justify-center relative">
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
