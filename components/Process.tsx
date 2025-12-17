"use client"

import { siteConfig } from "@/config/site.config"

export default function Process() {
  const { process } = siteConfig

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden py-10 xs:py-12 sm:py-16 md:py-18 lg:py-20">
      {/* Sophisticated decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-4 mb-2 xs:mb-3 sm:mb-4">
            <div className="w-8 xs:w-10 sm:w-12 md:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.3em] font-light">
              {process.badge}
            </p>
            <div className="w-8 xs:w-10 sm:w-12 md:w-16 lg:w-20 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
          </div>
          
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-slate-900 leading-[1.1] xs:leading-[1.05] sm:leading-[1] md:leading-[0.95] lg:leading-[0.95] mb-2 xs:mb-3 sm:mb-4 tracking-tight px-2">
            {process.title}
          </h2>
          
          <div className="w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-amber-600 to-transparent mx-auto mb-2 xs:mb-3 sm:mb-4"></div>
          
          <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed font-light max-w-2xl mx-auto px-3 xs:px-4">
            {process.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-6 max-w-7xl mx-auto">
          {process.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-none p-4 xs:p-4.5 sm:p-5 md:p-6 lg:p-6 h-full hover:border-amber-600/70 hover:bg-gradient-to-br hover:from-amber-50/40 hover:to-white hover:shadow-xl hover:shadow-amber-600/10 hover:-translate-y-1 transition-all duration-700 group cursor-pointer relative overflow-hidden">
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 via-amber-600/0 to-amber-600/0 group-hover:from-amber-600/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-light bg-gradient-to-br from-amber-600/10 via-amber-600/5 to-transparent bg-clip-text text-transparent mb-2.5 xs:mb-3 sm:mb-4 tracking-tight group-hover:from-amber-600/30 group-hover:via-amber-600/20 group-hover:to-transparent transition-all duration-700">
                    {step.number}
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-serif font-light text-slate-900 mb-2 xs:mb-2.5 sm:mb-3 tracking-tight group-hover:text-amber-600 transition-colors duration-500">
                    {step.title}
                  </h3>
                  <div className="w-8 xs:w-10 sm:w-12 h-px bg-gradient-to-r from-amber-600 to-amber-600/50 mb-2 xs:mb-2.5 sm:mb-3 group-hover:w-12 xs:group-hover:w-14 sm:group-hover:w-16 group-hover:from-amber-600 group-hover:to-amber-500 transition-all duration-700"></div>
                  <p className="text-slate-600 leading-relaxed text-[11px] xs:text-xs font-light group-hover:text-slate-700 transition-colors duration-500">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 xl:-right-4 w-6 xl:w-8 h-px bg-gradient-to-r from-amber-600/40 via-slate-300/60 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
