import { NextRequest, NextResponse } from 'next/server'
// import { decrypt } from '@/app/lib/session'
// import { cookies } from 'next/headers'
 
// // 1. Specify protected and public routes
// const protectedRoutes = ['/dashboard', '/auth/complete-signup']
// const publicRoutes = ['/auth/login', '/auth/proceed', '/', '/vacancies']
 
export default async function middleware(req: NextRequest) {
//   // 2. Check if the current route is protected or public
//   const path = req.nextUrl.pathname
//   const isProtectedRoute = protectedRoutes.includes(path)
//   const isPublicRoute = publicRoutes.includes(path)
 
//   // 3. Decrypt the session from the cookie
//   const cookie = cookies().get('appSession')?.value
//   const session = await decrypt(cookie)
 
//   // 5. Redirect to /login if the user is not authenticated
//   if (isProtectedRoute && !session?.userId) {
//     return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
//   }
 
//   // 6. Redirect to /dashboard if the user is authenticated
//   if (
//     isPublicRoute &&
//     session?.userId &&
//     !req.nextUrl.pathname.startsWith('/dashboard')
//   ) {
//     return NextResponse.redirect(new URL('/dashboard/vacancies', req.nextUrl))
//   }
 
//   return NextResponse.next()
}

//DEFINE MIDDLE WARE ROUTES IN HERE LATER
// export const config = {
//     matcher: ['/about/:path*', '/dashboard/:path*'],
// }