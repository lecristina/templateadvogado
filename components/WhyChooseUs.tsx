"use client"

import { siteConfig } from "@/config/site.config"

export default function WhyChooseUs() {
  const { whyChooseUs } = siteConfig

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden py-10 xs:py-12 sm:py-16 md:py-18 lg:py-20">
      {/* Sophisticated decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      <div className="absolute left-0 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-amber-600/20 to-transparent hidden lg:block"></div>
      <div className="absolute right-0 top-1/3 w-px h-32 bg-gradient-to-b from-transparent via-amber-600/20 to-transparent hidden lg:block"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-4 mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-6">
              <div className="w-10 xs:w-12 sm:w-14 md:w-16 lg:w-16 h-px bg-gradient-to-r from-amber-600 to-transparent"></div>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.3em] font-light">
                {whyChooseUs.badge}
              </p>
            </div>
            
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-slate-900 leading-[1.1] xs:leading-[1.05] sm:leading-[1] md:leading-[0.95] lg:leading-[0.95] mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-6 tracking-tight">
              {whyChooseUs.title}
            </h2>
            
            <div className="w-14 xs:w-16 sm:w-20 md:w-24 lg:w-24 h-px bg-gradient-to-r from-amber-600 to-transparent mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-6"></div>
            
            <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed font-light mb-5 xs:mb-6 sm:mb-7 md:mb-8 lg:mb-8">
              {whyChooseUs.description}
            </p>
          </div>

          {/* Right Side - Values */}
          <div className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-8">
            {whyChooseUs.values.map((value, index) => (
              <div key={index} className="flex gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-8 group cursor-pointer hover:translate-x-1 transition-transform duration-500">
                <div className="flex-shrink-0 relative">
                  <div className="w-px h-14 xs:h-16 sm:h-18 md:h-20 lg:h-20 bg-gradient-to-b from-amber-600 via-amber-600/60 to-amber-600/30 group-hover:from-amber-600 group-hover:via-amber-500 group-hover:to-amber-700 group-hover:h-16 xs:group-hover:h-18 sm:group-hover:h-20 md:group-hover:h-22 lg:group-hover:h-24 transition-all duration-500 shadow-lg shadow-amber-600/20"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full group-hover:w-3 xs:group-hover:w-3.5 xs:group-hover:h-3.5 sm:group-hover:w-4 sm:group-hover:h-4 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-500 shadow-md shadow-amber-600/30"></div>
                </div>
                <div className="flex-1 pt-1 xs:pt-1.5 sm:pt-2">
                  <h3 className="text-base xs:text-lg sm:text-xl font-serif font-light text-slate-900 mb-1.5 xs:mb-2 sm:mb-3 tracking-tight group-hover:text-amber-600 transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light text-[11px] xs:text-xs sm:text-sm group-hover:text-slate-700 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
