import { Mail, MapPin, Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 py-10 bg-[#E3E7EA]" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center">
              <img
                src="/auto-parts-direct-logo.png"
                alt="Auto Parts Direct Logo"
                className="h-10 w-[100px] object-cover"
              />
            </div>
            <p className="text-[#3C464D] text-sm leading-relaxed mt-4 max-w-md">
              Nigeria's first AI-powered platform for instant auto parts
              sourcing. Connecting car owners with verified vendors across the
              country.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-base text-[#3C464D] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:autopartsdirect4@gmail.com"
                  className="group flex items-center gap-3 text-[#3C464D] hover:text-secondary transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-sm">autopartsdirect4@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+2347047263984"
                  className="group flex items-center gap-3 text-[#3C464D] hover:text-secondary transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-sm">+2347047263984</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#3C464D]">
                <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </span>
                <span className="text-sm">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-base text-[#3C464D] mb-4">
              Follow Us
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/share/1BPmqNzynH/"
                className="flex items-center gap-3 text-[#3C464D] hover:text-secondary transition-colors"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <span className="text-sm">autopartsdirect</span>
              </a>
              <a
                href="https://www.instagram.com/auto.partdirect?igsh=OGU5MmFsYnZ5aXo2"
                className="flex items-center gap-3 text-[#3C464D] hover:text-secondary transition-colors"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <span className="text-sm">auto.partdirect</span>
              </a>
              <a
                href="https://www.tiktok.com/@auto_partsdirect2?is_from_webapp=1&sender_device=pc"
                className="flex items-center gap-3 text-[#3C464D] hover:text-secondary transition-colors"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <img src="/tiktok.png" alt="TikTok" className="w-4 h-4" />
                </div>
                <span className="text-sm">auto_partsdirect2</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#3C464D] text-xs text-center sm:text-left">
            © 2025 Autoparts Direct. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[#3C464D] text-xs">
            <a
              href="/privacy-policy"
              className="hover:text-secondary transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="/terms-and-conditions"
              className="hover:text-secondary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
