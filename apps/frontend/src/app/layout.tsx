import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import the Inter font with the necessary subsets
const inter = Inter({ subsets: ["latin"] });

// Define metadata for your application
export const metadata: Metadata = {
  title: "NebriHub",
  description: "Manage your organization efficiently",
};

// RootLayout component to structure the HTML document
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
    <body className={inter.className}>
    {children}
    </body>
    </html>
  );
}
