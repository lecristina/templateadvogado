"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/config/site.config"

export default function Hero() {
  const { hero } = siteConfig

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 lg:py-0"
    >
      {/* Sophisticated animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:60px_60px] opacity-50"></div>
      
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-600/5 via-transparent to-transparent"></div>

      {/* Elegant decorative lines with animation */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-32 sm:h-48 lg:h-64 bg-gradient-to-b from-transparent via-amber-600/40 to-transparent hidden lg:block animate-pulse"></div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-32 sm:h-48 lg:h-64 bg-gradient-to-b from-transparent via-amber-600/40 to-transparent hidden lg:block animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Top decorative accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 lg:w-40 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 text-white order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-5">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                <div className="w-10 sm:w-12 md:w-14 lg:w-16 h-px bg-gradient-to-r from-amber-600 to-transparent"></div>
                <span className="text-[9px] xs:text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] font-light">
                  {hero.badge}
                </span>
              </div>
              
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light leading-[1.1] sm:leading-[1.05] md:leading-[1] lg:leading-[0.95] tracking-tight">
                <span className="block text-white">{hero.title.line1}</span>
                <span className="block text-amber-500 mt-1 sm:mt-2 font-normal">
                  {hero.title.line2}
                </span>
              </h1>
              
              <div className="w-14 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-amber-600 to-transparent"></div>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-300 max-w-xl leading-relaxed font-light tracking-wide px-1 sm:px-0">
                {hero.description}
              </p>
            </div>
            
            <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-4">
              {hero.buttons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={button.variant === "primary" ? "default" : "outline"}
                  className={
                    button.variant === "primary"
                      ? "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 text-[11px] xs:text-xs sm:text-sm rounded-none shadow-xl shadow-amber-600/20 hover:shadow-2xl hover:shadow-amber-600/30 hover:scale-[1.02] transition-all duration-500 font-light tracking-wide uppercase w-full xs:w-auto relative overflow-hidden group"
                      : "border border-slate-600/50 bg-transparent hover:border-amber-600/80 hover:bg-slate-800/50 hover:shadow-[0_0_30px_rgba(217,119,6,0.2)] hover:shadow-amber-600/25 hover:scale-[1.02] text-white px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 text-[11px] xs:text-xs sm:text-sm rounded-none transition-all duration-500 font-light tracking-wide uppercase group w-full xs:w-auto relative overflow-hidden"
                  }
                >
                  {button.variant === "primary" && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  )}
                  <span className="relative z-10 flex items-center">
                    {button.label}
                    {button.icon === "ArrowRight" && (
                      <ArrowRight className="ml-2 sm:ml-3 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </span>
                </Button>
              ))}
            </div>

            {/* Premium Stats with sophisticated design */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 pt-4 sm:pt-5 md:pt-6 lg:pt-6 border-t border-slate-800/50 relative">
              <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-amber-600/50 to-transparent"></div>
              {hero.stats.map((stat, i) => (
                <div key={i} className="text-left group cursor-default">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-light bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent mb-1 sm:mb-2 tracking-tight transition-all duration-500 group-hover:scale-105">
                    {stat.number}
                  </div>
                  <div className="text-[9px] xs:text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-light leading-tight group-hover:text-slate-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Main Photo */}
          <div className="lg:col-span-1 h-full flex items-center order-1 lg:order-2 mb-4 sm:mb-6 md:mb-8 lg:mb-0">
            <div className="relative w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-none overflow-hidden shadow-2xl shadow-amber-600/10 bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-900/90 border border-slate-700/50 group hover:border-amber-600/30 transition-all duration-700">
              {/* Sophisticated animated pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff03_25%,transparent_25%,transparent_75%,#ffffff03_75%,#ffffff03),linear-gradient(45deg,#ffffff03_25%,transparent_25%,transparent_75%,#ffffff03_75%,#ffffff03)] bg-[size:20px_20px] bg-[position:0_0,10px_10px] opacity-60"></div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 text-slate-400 z-10 px-2">
                <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 border border-slate-600/40 rounded-lg flex items-center justify-center bg-slate-800/20 backdrop-blur-sm group-hover:border-amber-600/40 group-hover:bg-slate-800/30 transition-all duration-500">
                  <svg 
                    className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 text-slate-500 group-hover:text-amber-500/60 transition-colors duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <div className="text-center px-2 sm:px-4">
                  <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-base font-light uppercase tracking-wider text-slate-500 group-hover:text-slate-400 transition-colors duration-500">
                    Adicione uma imagem aqui
                  </p>
                  <p className="text-[8px] xs:text-[10px] sm:text-xs text-slate-600 mt-1">
                    Substitua este placeholder por sua imagem
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
