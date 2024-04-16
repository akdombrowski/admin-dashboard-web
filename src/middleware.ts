import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((request) => {
  // really basic check
  if (!request.auth) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
});

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|signin).*)"],
};
