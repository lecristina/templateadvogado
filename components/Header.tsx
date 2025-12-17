"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/config/site.config"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      setIsHeroSection(scrollY < window.innerHeight * 0.5)
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showLightHeader = scrolled || !isHeroSection
  const { logo, navigation } = siteConfig.header

  // Mapeamento de cores para classes Tailwind
  const logoBgClass = logo.letterBgColor === "amber-600" ? "bg-amber-600" : "bg-amber-600"
  const logoTextClass = logo.letterTextColor === "white" ? "text-white" : "text-white"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        showLightHeader
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 xs:h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-1.5 xs:space-x-2 sm:space-x-3 lg:space-x-4">
            <div className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 ${logoBgClass} flex items-center justify-center`}>
              <span className={`${logoTextClass} font-light text-base xs:text-lg sm:text-xl font-serif`}>
                {logo.letter}
              </span>
            </div>
            <span
              className={`text-base xs:text-lg sm:text-xl lg:text-2xl font-serif font-light tracking-tight transition-colors ${
                showLightHeader ? "text-slate-900" : "text-white"
              }`}
            >
              {logo.text}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
            {navigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-all duration-500 font-light text-[11px] md:text-xs lg:text-sm tracking-wide uppercase relative group ${
                  showLightHeader
                    ? "text-slate-700 hover:text-amber-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-600 to-amber-500 group-hover:w-full transition-all duration-500 ${showLightHeader ? "" : "from-white to-white"}`}></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-1.5 xs:p-2 transition-colors ${
              showLightHeader ? "text-slate-900" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 xs:w-6 xs:h-6" />
            ) : (
              <Menu className="w-5 h-5 xs:w-6 xs:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 pb-4 sm:pb-6 border-t border-slate-200/50" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-3 sm:space-y-4 pt-4 sm:pt-6">
            {navigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-900 hover:text-amber-600 hover:underline underline-offset-4 transition-all duration-300 font-light tracking-wide uppercase text-xs sm:text-sm px-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
