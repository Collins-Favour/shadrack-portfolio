// Fetch real-time data from API endpoints

export interface Booking {
  id: string
  name: string
  email: string
  date: string
  status: 'pending' | 'approved' | 'completed'
  createdAt: string
}

export interface Message {
  id: string
  name: string
  email: string
  subject: string
  status: 'unread' | 'read'
  createdAt: string
}

export interface Testimonial {
  id: string
  name: string
  content: string
  rating: number
}

export async function fetchBookings(): Promise<Booking[]> {
  try {
    const response = await fetch('/api/bookings', {
      method: 'GET',
      cache: 'no-store',
    })
    if (!response.ok) return []
    return await response.json()
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return []
  }
}

export async function fetchMessages(): Promise<Message[]> {
  try {
    const response = await fetch('/api/contact', {
      method: 'GET',
      cache: 'no-store',
    })
    if (!response.ok) return []
    return await response.json()
  } catch (error) {
    console.error('Error fetching messages:', error)
    return []
  }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch('/api/testimonials', {
      method: 'GET',
      cache: 'no-store',
    })
    if (!response.ok) return []
    return await response.json()
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}
