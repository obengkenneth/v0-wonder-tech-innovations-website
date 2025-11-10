import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ScrollAnimations from "@/components/scroll-animations"
import AOSProvider from "@/components/aos-provider"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppWidget from "@/components/whatsapp-widget"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "WonderTech Innovations | Software Development Solutions",
  description:
    "Empowering businesses through innovative software solutions. Custom web & mobile app development, UI/UX design, and IT consulting.",
  generator: "v0.app",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-background text-foreground transition-colors duration-200`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <AOSProvider />
          <ScrollAnimations />
          <WhatsAppWidget />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
