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

    // Make request to OpenRouter with streaming
    const completion = await client.chat.completions.create(
      {
        model,
        messages,
        stream: true, // Enable streaming
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

    // Create a ReadableStream for streaming response
    const encoder = new TextEncoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Send initial comment to establish connection
          controller.enqueue(encoder.encode(': ping\n\n'));
          
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              const data = JSON.stringify({ content });
              // Add timestamp to prevent caching
              const message = `data: ${data}\n\n`;
              controller.enqueue(encoder.encode(message));
              
              // Force flush by sending a comment (helps with some proxies)
              if (Math.random() < 0.1) { // 10% chance to add padding
                controller.enqueue(encoder.encode(`: ${Date.now()}\n\n`));
              }
            }
          }
          // Send completion signal
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no',
        'X-Content-Type-Options': 'nosniff',
        'Transfer-Encoding': 'chunked',
      },
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