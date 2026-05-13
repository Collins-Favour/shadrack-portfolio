'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function TestimonialsSlider() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const testimonials = [
    {
      author: 'John Mwangi',
      role: 'CEO, Tech Solutions',
      content: 'Shadrack\'s leadership insights transformed how our organization approaches growth strategy.',
      rating: 5,
    },
    {
      author: 'Grace Kipchoge',
      role: 'Business Owner',
      content: 'His mentorship has been invaluable in navigating complex marketplace challenges with wisdom and grace.',
      rating: 5,
    },
    {
      author: 'David Ochieng',
      role: 'Church Member',
      content: 'A true spiritual leader whose authentic presence and wisdom inspire everyone he encounters.',
      rating: 5,
    },
    {
      author: 'Sarah Kiplagat',
      role: 'HR Director',
      content: 'Shadrack\'s speaking engagement energized our entire team. Highly recommended for corporate events.',
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="section-spacing bg-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Testimonials from Leaders, Professionals & Community Members</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Testimonials from leaders, professionals, and community members
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-white/90 mb-6 leading-relaxed italic">&quot;{testimonial.content}&quot;</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
