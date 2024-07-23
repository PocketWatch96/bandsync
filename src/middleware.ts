import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that do not require authentication
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware((auth, request) => {
    console.log(`Processing request for: ${request.url}`);
    if (!isPublicRoute(request)) {
        console.log(`Protecting route: ${request.url}`);
        auth().protect(); // Protect routes that are not public
    } else {
        console.log(`Public route: ${request.url}`);
    }
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    "/clients/:path*", // Explicitly include the /clients/new route
  ],
};