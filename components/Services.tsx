"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site.config"

export default function Services() {
  const { services } = siteConfig

  return (
    <section id="servicos" className="min-h-screen flex items-center bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden py-10 xs:py-12 sm:py-16 md:py-18 lg:py-20">
      {/* Sophisticated decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      <div className="absolute top-20 left-0 w-32 h-px bg-gradient-to-r from-amber-600/20 to-transparent hidden lg:block"></div>
      <div className="absolute bottom-20 right-0 w-32 h-px bg-gradient-to-l from-amber-600/20 to-transparent hidden lg:block"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header - Premium */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-4 mb-2 xs:mb-3 sm:mb-4">
            <div className="w-8 xs:w-10 sm:w-12 md:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.3em] font-light">
              {services.badge}
            </p>
            <div className="w-8 xs:w-10 sm:w-12 md:w-16 lg:w-20 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
          </div>
          
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-slate-900 leading-[1.1] xs:leading-[1.05] sm:leading-[1] md:leading-[0.95] lg:leading-[0.95] mb-2 xs:mb-3 sm:mb-4 tracking-tight px-2">
            {services.title}
          </h2>
          
          <div className="w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-amber-600 to-transparent mx-auto mb-2 xs:mb-3 sm:mb-4"></div>
          
          <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed font-light max-w-2xl mx-auto px-3 xs:px-4">
            {services.description}
          </p>
        </div>

        {/* Services Grid - Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-6xl mx-auto">
          {services.items.map((service, index) => (
            <Card
              key={index}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-amber-600/10 hover:border-amber-600/60 transition-all duration-700 border border-slate-200/60 rounded-none relative overflow-hidden hover:-translate-y-1"
            >
              {/* Sophisticated accent line with gradient */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-600 via-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 via-amber-600/0 to-amber-600/0 group-hover:from-amber-600/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-700"></div>
              
              <CardHeader className="pb-3 xs:pb-3.5 sm:pb-4 pt-4 xs:pt-5 sm:pt-6 px-4 xs:px-5 sm:px-6 relative z-10">
                <div className="w-10 xs:w-12 sm:w-16 h-px bg-gradient-to-r from-amber-600 to-amber-600/50 mb-2.5 xs:mb-3 sm:mb-4 group-hover:w-14 xs:group-hover:w-16 sm:group-hover:w-24 group-hover:from-amber-600 group-hover:to-amber-500 transition-all duration-700"></div>
                <CardTitle className="text-lg xs:text-xl sm:text-2xl font-serif font-light text-slate-900 mb-2 xs:mb-2.5 sm:mb-3 tracking-tight group-hover:text-amber-600 transition-colors duration-500">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 xs:px-5 sm:px-6 pb-4 xs:pb-5 sm:pb-6 relative z-10">
                <CardDescription className="text-slate-600 leading-relaxed text-[11px] xs:text-xs sm:text-sm font-light group-hover:text-slate-700 transition-colors duration-500">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
