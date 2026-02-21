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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wondertechinnovations.com"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "WonderTech Innovations | Software Development Solutions",
  description:
    "Custom web and mobile app development, UI/UX design, and IT consulting in Accra, Ghana. Empowering businesses through innovative software solutions. Get a quote for your next project.",
  keywords: [
    "software development Ghana",
    "web development",
    "mobile app development",
    "IT consulting",
    "UI UX design",
    "Accra",
  ],
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
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: baseUrl,
    siteName: "WonderTech Innovations",
    title: "WonderTech Innovations | Software Development Solutions",
    description:
      "Custom web and mobile app development, UI/UX design, and IT consulting in Accra, Ghana. Get a quote for your next project.",
    images: [
      {
        url: "/wondertech-logo.jpeg",
        width: 800,
        height: 800,
        alt: "WonderTech Innovations Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WonderTech Innovations | Software Development Solutions",
    description:
      "Custom web and mobile app development, UI/UX design, and IT consulting in Accra, Ghana. Get a quote for your next project.",
    images: ["/wondertech-logo.jpeg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WonderTech Innovations",
  url: baseUrl,
  logo: `${baseUrl}/wondertech-logo.jpeg`,
  description:
    "Custom web and mobile app development, UI/UX design, and IT consulting in Accra, Ghana.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  email: "wondertechinnovations@gmail.com",
  telephone: "+233594159131",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
