import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Check if request is arriving from overseas.zeneeai.com subdomain
  if (hostname.startsWith('overseas.')) {
    // Rewrite root / to /overseas
    if (url.pathname === '/') {
      return NextResponse.rewrite(new URL('/overseas', request.url));
    }
    // Rewrite sub-routes like /assessment or /study-visa to /overseas/assessment etc.
    if (
      !url.pathname.startsWith('/overseas') &&
      !url.pathname.startsWith('/_next') &&
      !url.pathname.startsWith('/images')
    ) {
      return NextResponse.rewrite(new URL(`/overseas${url.pathname}`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
