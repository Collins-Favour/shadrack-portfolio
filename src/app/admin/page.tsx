'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check - in production use proper authentication
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'admin123') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid password')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full mx-4"
        >
          <h1 className="text-3xl font-serif font-bold mb-8 text-center">Admin Dashboard</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-black rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Access Dashboard
            </button>
            {error && <p className="text-red-500 text-center text-sm">{error}</p>}
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Navigation */}
      <nav className="bg-black text-white p-6">
        <div className="container-custom flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold">Shadrack Admin</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <p className="text-text-light text-sm mb-2">Total Bookings</p>
            <h3 className="text-4xl font-serif font-bold text-accent">24</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <p className="text-text-light text-sm mb-2">Pending</p>
            <h3 className="text-4xl font-serif font-bold text-accent">8</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <p className="text-text-light text-sm mb-2">Messages</p>
            <h3 className="text-4xl font-serif font-bold text-accent">12</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <p className="text-text-light text-sm mb-2">Page Views</p>
            <h3 className="text-4xl font-serif font-bold text-accent">1.2K</h3>
          </motion.div>
        </div>

        {/* Management Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-serif font-bold mb-4">Booking Management</h2>
            <p className="text-text-light mb-6">View, approve, and manage all booking requests</p>
            <button className="btn-primary">Manage Bookings</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-serif font-bold mb-4">Message Management</h2>
            <p className="text-text-light mb-6">View and respond to contact messages</p>
            <button className="btn-primary">View Messages</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-serif font-bold mb-4">Content Management</h2>
            <p className="text-text-light mb-6">Update testimonials, events, and website content</p>
            <button className="btn-primary">Manage Content</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-serif font-bold mb-4">Analytics</h2>
            <p className="text-text-light mb-6">View traffic, engagement, and visitor insights</p>
            <button className="btn-primary">View Analytics</button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
