'use client'

import { motion } from 'framer-motion'

export default function ContactInfo() {
  const contactDetails = [
    {
      title: 'Email',
      value: 'contact@shadrack.com',
      link: 'mailto:contact@shadrack.com',
      icon: '✉️',
    },
    {
      title: 'Phone',
      value: '+254 7XX XXX XXX',
      link: 'tel:+254',
      icon: '📱',
    },
    {
      title: 'WhatsApp',
      value: '+254 7XX XXX XXX',
      link: 'https://wa.me/254',
      icon: '💬',
    },
    {
      title: 'Location',
      value: 'Thika, Kenya',
      icon: '📍',
    },
  ]

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/shadrack', icon: '📷' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/shadrack', icon: '💼' },
    { name: 'YouTube', url: 'https://youtube.com/@shadrack', icon: '📺' },
    { name: 'TikTok', url: 'https://tiktok.com/@shadrack', icon: '🎵' },
    { name: 'Facebook', url: 'https://facebook.com/shadrack', icon: '📘' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div>
        <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-sm text-text-light mb-1">{detail.title}</p>
              {detail.link ? (
                <a
                  href={detail.link}
                  target={detail.link.startsWith('http') ? '_blank' : undefined}
                  rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-lg font-semibold hover:text-accent transition-colors"
                >
                  {detail.icon} {detail.value}
                </a>
              ) : (
                <p className="text-lg font-semibold">
                  {detail.icon} {detail.value}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-2xl font-serif font-bold mb-6">Follow</h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-accent hover:text-black transition-all duration-300"
            >
              <span className="text-xl">{social.icon}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div>
        <h3 className="text-2xl font-serif font-bold mb-6">Response Time</h3>
        <p className="text-text-light">
          I typically respond to messages within 24 hours. For urgent matters, please call or use WhatsApp.
        </p>
      </div>
    </motion.div>
  )
}
