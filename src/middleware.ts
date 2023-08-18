import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log(request.nextUrl.pathname);
    console.log(request.nextauth.token);
  },
  {
    pages: {
      signIn: "/auth",
    },
    callbacks: {
      authorized: ({ token }) => token?.role === "ADMIN",
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};
