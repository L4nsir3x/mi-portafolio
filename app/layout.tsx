import "./globals.css";
import { MotionConfig } from "framer-motion";
import ThemeProvider from "../components/ThemeProvider";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Portafolio • Diego",
  description: "Fullstack Developer — React, Laravel, FastAPI, MySQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <Navbar />
            <main className="px-6 md:px-16 lg:px-32">
              {children}
              <Analytics />
            </main>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}