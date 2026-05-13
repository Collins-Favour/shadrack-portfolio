'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Timeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const events = [
    {
      year: '2014',
      title: 'Joined Samsung Electronics Kenya',
      description: 'Began journey as Key Account Manager driving strategic growth',
    },
    {
      year: '2016',
      title: 'Started Pastoral Ministry',
      description: 'Began serving at Wisdom Sanctuary Church alongside Bishop James',
    },
    {
      year: '2018',
      title: 'Expanded Market Reach',
      description: 'Successfully drove growth across DRC, Rwanda, Uganda, and Kenya',
    },
    {
      year: '2020',
      title: 'Founded Family Legacy',
      description: 'Established three children: Nathan, Nissi, and Gabriella with Hannah',
    },
    {
      year: '2023',
      title: 'Mentorship & Speaking',
      description: 'Increased speaking engagements and mentorship impact across regions',
    },
    {
      year: '2024',
      title: 'Executive Presence',
      description: 'Established personal brand as transformational leader and speaker',
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
          <h2 className="mb-6">Career Timeline</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            A journey of purposeful leadership and transformational impact
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pb-12"
            >
              <div className="flex gap-8 items-start">
                {/* Timeline dot */}
                <div className="relative flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full mt-2 relative z-10" />
                  {index !== events.length - 1 && (
                    <div className="w-1 h-24 bg-accent/20 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1 pb-8">
                  <span className="text-sm font-semibold text-accent">{event.year}</span>
                  <h3 className="text-xl font-serif font-bold mt-2 mb-2">{event.title}</h3>
                  <p className="text-text-light">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
