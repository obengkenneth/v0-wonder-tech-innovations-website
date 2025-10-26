import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/wondertechLogo-transparent.png"
                  alt="WonderTech Innovations Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold">WonderTech</p>
                <p className="text-xs text-white/70">Innovations</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Empowering businesses through innovative software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:wondertechinnovations@gmail.com"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  wondertechinnovations@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+233594159131"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +233 (0) 594159131
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-white/70">Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} WonderTech Innovations. All rights reserved.
          </p>
          {/* <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
