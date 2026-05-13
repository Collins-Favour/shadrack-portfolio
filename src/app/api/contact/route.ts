import { NextRequest, NextResponse } from 'next/server'

// This is a placeholder API route for handling contact form submissions
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, anonymous } = body

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      )
    }

    // In a real application, this would save to the database via Prisma
    // For now, we'll just return success
    console.log('Contact message received:', { name, email, message, anonymous })

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
