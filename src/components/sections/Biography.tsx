'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Biography() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="section-spacing bg-bg">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8">Biography</h2>
            
            <div className="space-y-6 text-text-light leading-relaxed">
              <p>
                Shadrack G Mahinda is a transformational leader, thought-provoking speaker, and phenomenal individual with a creative and lovable personality. He brings unique value to every engagement, adapting his approach to the needs and aspirations of those he serves.
              </p>

              <p>
                As a pastor at Wisdom Sanctuary Church in Thika, Shadrack serves alongside Bishop James and Rev Agnes Maina, guiding the spiritual growth and development of the congregation. His ministry is characterized by authenticity, deep wisdom, and a genuine commitment to transforming lives.
              </p>

              <p>
                In his professional capacity, Shadrack serves as Key Account Manager at Samsung Electronics Kenya, where over the last decade, he has been instrumental in driving strategic market growth across DRC, Rwanda, Uganda, and Kenya. His leadership has significantly impacted distributor accounts and regional expansion strategies, establishing him as a trusted marketplace leader.
              </p>

              <p>
                Shadrack is married to his beautiful wife Hannah, and together they have been blessed with three children: Nathan, Nissi, and Gabriella. His family serves as his greatest source of joy and inspiration, grounding him in the values that define his leadership.
              </p>

              <p>
                Throughout his journey, Shadrack has benefited from mentorship and coaching from industry experts including Pauline of Talent Gurus and Lilian Ngala of LGN, who have helped him refine his leadership skills and strategic thinking for various marketplace roles.
              </p>

              <p>
                During his free time, Shadrack enjoys hiking and meditation walks as a means of rejuvenation and spiritual renewal. These practices help him maintain the clarity, balance, and vitality necessary to serve at his highest capacity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
