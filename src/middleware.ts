import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(function middlewate(req) {
  if (!req.nextauth.token) {
    const url = req.nextUrl.clone();
    url.pathname = "auth/signin";
    return NextResponse.rewrite(url);
  }
});

export const config = {
  matcher: ["/cms/:path*"],
};
