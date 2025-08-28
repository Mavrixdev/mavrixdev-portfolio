import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // optional: có thể config protected routes
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
