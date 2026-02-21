import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote | WonderTech Innovations",
  description:
    "Get in touch for software development, web and mobile app projects in Accra, Ghana. Email wondertechinnovations@gmail.com or call +233 (0) 594159131.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
