import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MousePositionTracker from "@/components/mouse-position-tracker"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Glow Card Hover",
  description: "Interactive glow card hover effects with React and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MousePositionTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'