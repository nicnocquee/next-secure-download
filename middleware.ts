// This Basic Auth code is from https://vancelucas.com/blog/how-to-add-http-basic-auth-to-next-js/
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const adminUser = process.env.ADMIN_USERNAME || "";
const adminPassword = process.env.ADMIN_PASSWORD || "";

// Step 1. HTTP Basic Auth Middleware for Challenge
export function middleware(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" }
    });
  }

  return NextResponse.next();
}

// Step 2. Check HTTP Basic Auth header if present
function isAuthenticated(req: NextRequest) {
  const authheader =
    req.headers.get("authorization") || req.headers.get("Authorization");

  if (!authheader) {
    return false;
  }

  const auth = Buffer.from(authheader.split(" ")[1], "base64")
    .toString()
    .split(":");
  const user = auth[0];
  const pass = auth[1];

  if (user === adminUser && pass === adminPassword) {
    return true;
  } else {
    return false;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/download/:path*"
};
