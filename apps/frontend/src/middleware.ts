// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Definir las rutas que no requieren autenticación
const unprotectedRoutes = ["/login", "/register"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // Obtén el token JWT de las cookies

  // Si el usuario intenta acceder a una página protegida sin token, redirigir a login
  if (!token && !unprotectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Si el usuario ya está autenticado y trata de acceder a login/register, redirigir a dashboard
  if (token && ["/login", "/register"].includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

// Aplicar el middleware a todas las rutas protegidas
export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/attendance/:path*",
    "/projects/:path*",
    "/members/:path*",
    "/settings/:path*",
    "/calendar/:path*",
  ],
};
