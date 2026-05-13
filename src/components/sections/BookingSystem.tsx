'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function BookingSystem() {
  const [step, setStep] = useState(1)
  const [bookingType, setBookingType] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    date: '',
    time: '',
    location: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const bookingTypes = [
    { id: 'speaking', label: 'Speaking Engagement', description: 'Corporate event, conference, or community talk' },
    { id: 'ministry', label: 'Church Ministry', description: 'Sermon, worship service, or spiritual event' },
    { id: 'corporate', label: 'Corporate Event', description: 'Team building, workshop, or training session' },
    { id: 'mentorship', label: 'Mentorship', description: 'One-on-one or group mentoring session' },
    { id: 'consultation', label: 'Consultation', description: 'Strategic business or leadership consultation' },
  ]

  const availableHours = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, date: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, eventType: bookingType }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setStep(1)
          setBookingType('')
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            organization: '',
            date: '',
            time: '',
            location: '',
            notes: '',
          })
          setSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting booking:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom max-w-2xl">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">✓</div>
            <h2 className="mb-4">Booking Confirmed!</h2>
            <p className="text-text-light mb-2">Thank you for your booking request.</p>
            <p className="text-text-light">A confirmation email has been sent to {formData.email}</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Select Booking Type */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="mb-8 text-center">What would you like to book?</h2>
                <div className="grid gap-4">
                  {bookingTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setBookingType(type.id)
                        setStep(2)
                      }}
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 border-2 rounded-xl text-left transition-all ${
                        bookingType === type.id
                          ? 'border-accent bg-accent/5'
                          : 'border-black/10 hover:border-accent/50'
                      }`}
                    >
                      <h3 className="font-semibold mb-1">{type.label}</h3>
                      <p className="text-sm text-text-light">{type.description}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Date & Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="mb-8">Select Date & Time</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleDateChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Preferred Time *</label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {availableHours.map((hour) => (
                        <button
                          key={hour}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, time: hour }))}
                          className={`py-2 rounded-lg font-medium transition-all ${
                            formData.time === hour
                              ? 'bg-accent text-black'
                              : 'bg-black/5 hover:bg-black/10'
                          }`}
                        >
                          {hour}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 btn-secondary"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.date || !formData.time}
                      className="flex-1 btn-primary disabled:opacity-50"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Fill Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="mb-8">Your Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Notes</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-accent resize-none"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 btn-secondary"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 btn-primary disabled:opacity-50"
                    >
                      {loading ? 'Submitting...' : 'Complete Booking'}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
