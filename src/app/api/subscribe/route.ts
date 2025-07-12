import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demo purposes
// In production, replace with database (Prisma, Supabase, etc.)
const subscribers: { email: string; createdAt: Date }[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      return NextResponse.json(
        { success: false, error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Add to subscribers
    subscribers.push({
      email: email.toLowerCase().trim(),
      createdAt: new Date()
    });

    // In production, you would:
    // 1. Save to database (Prisma example):
    // await prisma.subscriber.create({
    //   data: { email: email.toLowerCase().trim() }
    // });
    
    // 2. Send to email service (SendGrid, Resend, etc.):
    // await sendWelcomeEmail(email);
    
    // 3. Add to marketing automation (ConvertKit, Mailchimp, etc.)

    console.log(`New subscriber: ${email}`);
    console.log(`Total subscribers: ${subscribers.length}`);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter' 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve subscriber count (optional)
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      count: subscribers.length,
      // Don't expose actual emails for privacy
    });
  } catch (error) {
    console.error('Get subscribers error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}