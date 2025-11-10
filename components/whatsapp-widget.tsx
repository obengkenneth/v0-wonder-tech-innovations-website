"use client"

import Image from "next/image"

export default function WhatsAppWidget() {
  const phoneNumber = "233594159131"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello! I'm interested in your services.`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group overflow-hidden"
      aria-label="Chat with us on WhatsApp"
      style={{
        animation: "float 3s ease-in-out infinite",
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Pulse ring animation */}
      <span 
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 -z-10"
        style={{
          animation: "whatsappPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      ></span>
    </a>
  )
}
