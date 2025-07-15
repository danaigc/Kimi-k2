import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply to API routes
  if (request.nextUrl.pathname.startsWith('/api/chat')) {
    const response = NextResponse.next();
    
    // Add headers to prevent Cloudflare buffering
    response.headers.set('X-Accel-Buffering', 'no');
    response.headers.set('Cache-Control', 'no-cache, no-transform');
    
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};