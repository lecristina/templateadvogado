"use client"

import { siteConfig } from "@/config/site.config"

export default function Footer() {
  const { footer } = siteConfig

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative">
      {/* Sophisticated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute left-0 top-1/4 w-24 h-px bg-gradient-to-r from-amber-600/20 to-transparent hidden lg:block"></div>
      <div className="absolute right-0 bottom-1/4 w-24 h-px bg-gradient-to-l from-amber-600/20 to-transparent hidden lg:block"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-16">
        <div className="grid md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-12 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-12 max-w-5xl mx-auto">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2.5 xs:space-x-3 sm:space-x-4 mb-5 xs:mb-6 sm:mb-8">
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 bg-amber-600 flex items-center justify-center">
                <span className="text-white font-light text-base xs:text-lg sm:text-xl font-serif">{footer.logo.letter}</span>
              </div>
              <span className="text-lg xs:text-xl sm:text-2xl font-serif font-light">{footer.logo.text}</span>
            </div>
            <div className="w-10 xs:w-12 sm:w-16 h-px bg-gradient-to-r from-amber-600 to-amber-600/50 mb-3 xs:mb-4 sm:mb-6"></div>
            <p className="text-xs xs:text-sm sm:text-base text-slate-400 leading-relaxed max-w-md mb-3 xs:mb-4 sm:mb-6 font-light">
              {footer.description}
            </p>
            <div className="text-[10px] xs:text-xs sm:text-sm text-slate-500 space-y-1 xs:space-y-1.5 sm:space-y-2 font-light">
              <p>Telefone: {footer.contact.phone}</p>
              <p>Email: {footer.contact.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm xs:text-base sm:text-lg font-light mb-3 xs:mb-4 sm:mb-6 font-serif tracking-wide">{footer.quickLinks.title}</h3>
            <div className="w-8 xs:w-10 sm:w-12 h-px bg-gradient-to-r from-amber-600 to-amber-600/50 mb-3 xs:mb-4 sm:mb-6"></div>
            <ul className="space-y-2.5 xs:space-y-3 sm:space-y-4">
              {footer.quickLinks.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-amber-500 transition-all duration-500 text-[10px] xs:text-xs sm:text-sm font-light tracking-wide uppercase relative group inline-block"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-amber-400 group-hover:w-full transition-all duration-500"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-5 xs:pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 xs:gap-4 sm:gap-6 max-w-5xl mx-auto">
            <p className="text-slate-500 text-[10px] xs:text-xs sm:text-sm font-light text-center md:text-left">{footer.copyright}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-8 text-[10px] xs:text-xs sm:text-sm">
              {footer.legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-500 hover:text-amber-500 transition-all duration-500 font-light relative group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-500"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
