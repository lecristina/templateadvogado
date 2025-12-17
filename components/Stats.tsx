"use client"

import { siteConfig } from "@/config/site.config"

export default function Stats() {
  const { hero } = siteConfig

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 overflow-hidden">
      {/* Sophisticated decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Premium Stats with sophisticated design */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 lg:w-40 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
            
            {hero.stats.map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 tracking-tight transition-all duration-500 group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="w-8 xs:w-10 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent mx-auto mb-2 sm:mb-3 group-hover:w-12 xs:group-hover:w-14 sm:group-hover:w-16 md:group-hover:w-20 transition-all duration-500"></div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-slate-400 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-light leading-tight group-hover:text-slate-300 transition-colors duration-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

