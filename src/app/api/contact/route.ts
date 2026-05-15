import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

interface ContactRequestBody {
  name: string
  email: string
  subject: string
  message: string
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequestBody = await request.json()

    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    if (!subject || typeof subject !== 'string' || subject.trim() === '') {
      return NextResponse.json(
        { success: false, error: 'Subject is required' },
        { status: 400 }
      )
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      )
    }

    // Save to database
    const contactMessage = await db.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
        data: {
          id: contactMessage.id,
          createdAt: contactMessage.createdAt,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    )
  }
}
