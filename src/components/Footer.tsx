'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Booking', href: '/booking' },
  ]

  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent">Shadrack</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Transformational leadership and marketplace excellence for organizations and individuals.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:gichuhimahinda@gmail.com" className="text-white/60 hover:text-accent transition-colors">
                  gichuhimahinda@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254" className="text-white/60 hover:text-accent transition-colors">
                  +254 7XX XXX XXX
                </a>
              </li>
              <li className="text-white/60">
                Thika, Kenya
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/50 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-black rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-8 pb-8 border-b border-white/10"
        >
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="px-4 py-2 text-sm bg-white/5 border border-white/20 hover:bg-accent hover:text-black hover:border-accent rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Facebook
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="px-4 py-2 text-sm bg-white/5 border border-white/20 hover:bg-accent hover:text-black hover:border-accent rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            className="px-4 py-2 text-sm bg-white/5 border border-white/20 hover:bg-accent hover:text-black hover:border-accent rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            YouTube
          </motion.a>
          <motion.a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
            className="px-4 py-2 text-sm bg-white/5 border border-white/20 hover:bg-accent hover:text-black hover:border-accent rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            TikTok
          </motion.a>
          <motion.a
            href="https://wa.me/254"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="px-4 py-2 text-sm bg-white/5 border border-white/20 hover:bg-accent hover:text-black hover:border-accent rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            WhatsApp
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white/50 text-sm space-y-4"
        >
          <p>
            &copy; {currentYear} Shadrack G Mahinda. All rights reserved. | 
            <Link href="#" className="hover:text-accent ml-1">
              Privacy Policy
            </Link>
          </p>
          
          {/* Admin Access */}
          <motion.div
            className="flex justify-center items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs text-white/40">Admin:</span>
            <motion.a
              href="/admin"
              className="text-xs px-3 py-1 bg-white/5 border border-white/20 rounded-full hover:bg-accent/20 hover:border-accent transition-all duration-300 text-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Dashboard Access
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
