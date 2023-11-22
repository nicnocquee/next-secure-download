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
/**
  * isAuthenticated is a function that checks if an incoming request
  * is authenticated by verifying the authorization headers are correctly formatted
  * and the credentials match a predefined admin user and password.
  *
  * @param {NextRequest} req - The incoming request object.
  * @return {Boolean} True if authenticated, false otherwise.
  
  */
function isAuthenticated(req: NextRequest): boolean {
  //Retrieve the authorization header from the request. It considers both lowercase and proper case 'Authorization' for flexibility.
  const authheader =
    req.headers.get("authorization") || req.headers.get("Authorization");

  //Checks if the authheader variable is null or undefined, meaning the request lacks an authorization header.
  if (!authheader) {
    return false; //The request is considered unauthenticated if it lacks an authorization header.
  }

  // Splitting the 'Bearer' prefix from auth string & encoding it in base64.
  const encodedCredentials = authheader.split(" ")[1];
  const buffer = Buffer.from(encodedCredentials, "base64");
  const decodedCredentials = buffer.toString();

  // Identify the index where the user and password are separated.
  const colonIndex = decodedCredentials.indexOf(":");

  if (colonIndex === -1) {
    return false; // Malformed credentials. Invalid credentials format returns false i.e., not authenticated
  }

  // Extract the user & password from the decoded credentials.
  const user = decodedCredentials.substring(0, colonIndex);
  const pass = decodedCredentials.substring(colonIndex + 1);

  // If user and password match predefined admin credentials, the request is authenticated
  if (user === adminUser && pass === adminPassword) {
    return true; //User is authenticated
  } else {
    return false; //Incorrect credentials, not authenticated
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/download/:path*"
};
