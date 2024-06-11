import { NextRequest } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { AUTH_ROOT, AUTH_ROUTES, DEFAULT_REDIRECT } from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req: NextRequest) {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);

  if (isAuthRoute && isAuthenticated)
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

  if (!isAuthenticated && !isAuthRoute)
    return Response.redirect(new URL(AUTH_ROOT, nextUrl));
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
