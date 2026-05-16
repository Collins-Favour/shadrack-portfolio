'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fetchBookings, fetchMessages, fetchTestimonials, Booking, Message } from '@/lib/adminData'

interface DashboardStats {
  totalBookings: number
  pendingBookings: number
  messages: number
  pageViews: number
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [stats, setStats] = useState<DashboardStats>({
    totalBookings: 0,
    pendingBookings: 0,
    messages: 0,
    pageViews: 1200,
  })
  const [bookings, setBookings] = useState<Booking[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  // Fetch real-time data
  const fetchDashboardData = async () => {
    setLoading(true)
    try {
      const [bookingsData, messagesData] = await Promise.all([
        fetchBookings(),
        fetchMessages(),
      ])

      setBookings(bookingsData)
      setMessages(messagesData)

      // Update stats
      setStats({
        totalBookings: bookingsData.length,
        pendingBookings: bookingsData.filter((b) => b.status === 'pending').length,
        messages: messagesData.filter((m) => m.status === 'unread').length,
        pageViews: Math.floor(Math.random() * 2000) + 1000, // Demo data
      })
    } catch (err) {
      console.error('Error fetching dashboard data:', err)
    } finally {
      setLoading(false)
    }
  }

  // Fetch data on mount and setup interval
  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData()
      const interval = setInterval(fetchDashboardData, 5000) // Refresh every 5 seconds
      return () => clearInterval(interval)
    }
  }, [isAuthenticated])

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
      <div className="min-h-screen bg-gradient-to-br from-black via-black to-accent/10 text-white flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-md w-full mx-4 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl font-serif font-bold mb-2 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-white/60 text-sm">Secure access required</p>
          </motion.div>

          <motion.form
            onSubmit={handleLogin}
            className="space-y-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent focus:bg-white/15 transition-all duration-300"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Access Dashboard
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: error ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {error && (
                <p className="text-red-400 text-center text-sm font-medium">{error}</p>
              )}
            </motion.div>
          </motion.form>

          <motion.p
            className="text-center text-white/40 text-xs mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Default password: <span className="text-accent">admin123</span>
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg to-black">
      {/* Animated Navigation */}
      <motion.nav
        className="bg-black/80 backdrop-blur-md text-white p-6 border-b border-accent/20 sticky top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom flex justify-between items-center">
          <motion.h1
            className="text-3xl font-serif font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Shadrack Admin
          </motion.h1>
          <motion.button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-white/10 hover:bg-accent/20 rounded-lg transition-all duration-300 border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </div>
      </motion.nav>

      {/* Dashboard Content */}
      <div className="container-custom py-12">
        {/* Real-time Status Indicator */}
        <motion.div
          className="mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-white/60 text-sm">
            {loading ? 'Updating...' : 'Real-time Data Active'}
          </span>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Bookings', value: stats.totalBookings, delay: 0 },
            { label: 'Pending', value: stats.pendingBookings, delay: 0.1 },
            { label: 'Messages', value: stats.messages, delay: 0.2 },
            { label: 'Page Views', value: `${stats.pageViews.toLocaleString()}`, delay: 0.3 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="bg-gradient-to-br from-white to-white/90 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-accent/10"
              whileHover={{ scale: 1.05, translateY: -5 }}
            >
              <motion.p
                className="text-text-light text-sm mb-2 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: stat.delay + 0.2 }}
              >
                {stat.label}
              </motion.p>
              <motion.h3
                className="text-4xl font-serif font-bold text-accent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: stat.delay + 0.3 }}
              >
                {stat.value}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Recent Bookings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-serif font-bold mb-6">Recent Bookings</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {bookings.length > 0 ? (
                bookings.slice(0, 5).map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-between justify-between p-4 bg-white/50 rounded-lg border border-accent/20 hover:border-accent/50 transition-all"
                  >
                    <div>
                      <p className="font-semibold text-text">{booking.name}</p>
                      <p className="text-sm text-text-light">{booking.email}</p>
                    </div>
                    <motion.span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : booking.status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {booking.status}
                    </motion.span>
                  </motion.div>
                ))
              ) : (
                <p className="text-text-light text-center py-8">No bookings yet</p>
              )}
            </div>
          </motion.div>

          {/* Management Cards */}
          <div className="space-y-6">
            {[
              { title: 'Bookings', desc: 'Manage requests', color: 'from-blue-500 to-blue-600' },
              { title: 'Messages', desc: 'View contact info', color: 'from-purple-500 to-purple-600' },
              { title: 'Analytics', desc: 'View insights', color: 'from-accent to-accent/80' },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`bg-gradient-to-br ${card.color} p-6 rounded-xl text-white shadow-lg cursor-pointer overflow-hidden relative`}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-bold mb-2 relative z-10">{card.title}</h3>
                <p className="text-white/80 text-sm relative z-10">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-serif font-bold mb-6">Recent Messages</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-accent/20">
                  <th className="text-left py-3 px-4 font-semibold text-text">From</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Subject</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-text">Date</th>
                </tr>
              </thead>
              <tbody>
                {messages.length > 0 ? (
                  messages.slice(0, 5).map((message, index) => (
                    <motion.tr
                      key={message.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className="border-b border-accent/10 hover:bg-accent/5 transition-all"
                    >
                      <td className="py-4 px-4 text-text">{message.name}</td>
                      <td className="py-4 px-4 text-text">{message.subject}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            message.status === 'unread'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {message.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-text-light text-sm">
                        {new Date(message.createdAt).toLocaleDateString()}
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-8 text-text-light">
                      No messages yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
