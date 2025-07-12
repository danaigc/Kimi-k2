import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with OpenRouter configuration
function getClient() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey || apiKey === 'demo-key-replace-with-real-key') {
    return null;
  }
  
  return new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: apiKey,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, model = "moonshotai/kimi-k2" } = body;

    // Validate request
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required and cannot be empty' },
        { status: 400 }
      );
    }

    // Get client and validate API key
    const client = getClient();
    if (!client) {
      return NextResponse.json(
        { 
          error: 'Demo mode: Please configure OPENROUTER_API_KEY to enable live chat',
          isDemo: true 
        },
        { status: 503 }
      );
    }

    // Make request to OpenRouter
    const completion = await client.chat.completions.create(
      {
        model,
        messages,
        stream: false, // For simplicity, not using streaming yet
        max_tokens: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "https://kimik2.ai",
          "X-Title": process.env.NEXT_PUBLIC_SITE_NAME || "Kimi K2 AI",
        },
      }
    );

    const responseMessage = completion.choices[0]?.message;

    if (!responseMessage) {
      return NextResponse.json(
        { error: 'No response from AI model' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: responseMessage,
      model: completion.model,
      usage: completion.usage,
    });

  } catch (error: unknown) {
    console.error('Chat API error:', error);

    // Handle specific OpenRouter errors
    if (error && typeof error === 'object' && 'status' in error) {
      const errorWithStatus = error as { status: number; message?: string };
      
      if (errorWithStatus.status === 401) {
        return NextResponse.json(
          { error: 'Invalid API key' },
          { status: 401 }
        );
      }

      if (errorWithStatus.status === 429) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }

      if (errorWithStatus.status === 402) {
        return NextResponse.json(
          { error: 'Insufficient credits. Please check your OpenRouter account.' },
          { status: 402 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to check API status
export async function GET() {
  try {
    const client = getClient();
    const isConfigured = !!client;
    
    return NextResponse.json({
      status: 'ok',
      configured: isConfigured,
      model: 'moonshotai/kimi-k2',
      baseURL: 'https://openrouter.ai/api/v1',
      demo: !isConfigured,
    });
  } catch (error) {
    console.error('API status error:', error);
    return NextResponse.json(
      { error: 'Failed to check API status' },
      { status: 500 }
    );
  }
}