import { NextResponse, type NextRequest } from 'next/server';
import { createMiddlewareClient } from '@/lib/supabase/server';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Create Supabase client for middleware
  const supabase = createMiddlewareClient(request);

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Define your route patterns
  const authRoutes = ['/login', '/signup'];
  const protectedRoutes = ['/dashboard', '/profile'];

  // If user is authenticated and tries to access auth pages
  if (user && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If user is not authenticated and tries to access protected routes
  if (!user && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
