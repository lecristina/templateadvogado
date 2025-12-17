"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ImageIcon } from "lucide-react"
import { siteConfig } from "@/config/site.config"

export default function Consultation() {
  const { consultation } = siteConfig

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden py-10 xs:py-12 sm:py-16 md:py-18 lg:py-20">
      {/* Sophisticated decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      <div className="absolute left-0 top-1/3 w-24 h-px bg-gradient-to-r from-amber-600/20 to-transparent hidden lg:block"></div>
      <div className="absolute right-0 bottom-1/3 w-24 h-px bg-gradient-to-l from-amber-600/20 to-transparent hidden lg:block"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Image Placeholder */}
          <div className="relative h-[250px] xs:h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-none overflow-hidden shadow-xl shadow-slate-200/50 bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200/60 order-2 lg:order-1 flex items-center justify-center group hover:border-amber-600/30 hover:shadow-2xl hover:shadow-amber-600/10 transition-all duration-700">
            {/* Sophisticated animated pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#e2e8f008_25%,transparent_25%,transparent_75%,#e2e8f008_75%,#e2e8f008),linear-gradient(45deg,#e2e8f008_25%,transparent_25%,transparent_75%,#e2e8f008_75%,#e2e8f008)] bg-[size:20px_20px] bg-[position:0_0,10px_10px] opacity-60"></div>
            
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 via-amber-600/0 to-amber-600/0 group-hover:from-amber-600/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-700"></div>
            
            {/* Placeholder Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 xs:p-8 sm:p-10 md:p-12">
              <div className="mb-4 xs:mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-700">
                <div className="p-4 xs:p-5 sm:p-6 rounded-lg bg-slate-100/50 group-hover:bg-amber-50/50 transition-colors duration-700">
                  <ImageIcon className="w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 text-slate-400 group-hover:text-amber-600/60 transition-colors duration-700" strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-slate-500 text-xs xs:text-sm sm:text-base font-light mb-2 xs:mb-3 uppercase tracking-wider group-hover:text-slate-600 transition-colors duration-500">
                Adicione uma imagem
              </p>
              <p className="text-slate-400 text-[10px] xs:text-xs sm:text-sm font-light max-w-xs">
                Configure a imagem em <span className="font-mono text-slate-500 group-hover:text-slate-600 transition-colors duration-500">site.config.ts</span>
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 order-1 lg:order-2">
            <div>
              <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-4 mb-2.5 xs:mb-3 sm:mb-4">
                <div className="w-10 xs:w-12 sm:w-14 md:w-16 lg:w-16 h-px bg-gradient-to-r from-amber-600 to-transparent"></div>
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.3em] font-light">
                  {consultation.badge}
                </p>
              </div>
              
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-slate-900 leading-[1.1] xs:leading-[1.05] sm:leading-[1] md:leading-[0.95] lg:leading-[0.95] mb-2.5 xs:mb-3 sm:mb-4 tracking-tight">
                {consultation.title}
              </h2>
              
              <div className="w-14 xs:w-16 sm:w-20 md:w-24 lg:w-24 h-px bg-gradient-to-r from-amber-600 to-transparent mb-2.5 xs:mb-3 sm:mb-4"></div>
              
              <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed font-light mb-4 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-6">
                {consultation.description}
              </p>
            </div>

            <div className="space-y-3 xs:space-y-3 sm:space-y-4">
              {consultation.features.map((item, i) => (
                <div key={i} className="flex gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-6 group cursor-pointer hover:translate-x-1 transition-transform duration-500">
                  <div className="flex-shrink-0 relative">
                    <div className="w-px h-10 xs:h-12 sm:h-14 md:h-16 lg:h-16 bg-gradient-to-b from-amber-600 via-amber-600/60 to-amber-600/30 group-hover:from-amber-600 group-hover:via-amber-500 group-hover:to-amber-700 group-hover:h-12 xs:group-hover:h-14 sm:group-hover:h-16 md:group-hover:h-18 lg:group-hover:h-20 transition-all duration-500 shadow-lg shadow-amber-600/20"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full group-hover:w-2 group-hover:h-2 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-500 shadow-md shadow-amber-600/30"></div>
                  </div>
                  <div>
                    <h3 className="font-light text-slate-900 mb-1 text-xs xs:text-sm sm:text-base tracking-wide group-hover:text-amber-600 transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[11px] xs:text-xs font-light group-hover:text-slate-700 transition-colors duration-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 hover:shadow-xl hover:shadow-amber-600/30 hover:scale-[1.02] text-white px-5 xs:px-6 sm:px-8 md:px-10 lg:px-10 py-3 xs:py-4 sm:py-5 md:py-6 lg:py-6 text-[11px] xs:text-xs sm:text-sm rounded-none shadow-xl shadow-amber-600/20 transition-all duration-500 font-light tracking-wide uppercase mt-2 xs:mt-2 sm:mt-3 md:mt-4 lg:mt-4 w-full sm:w-auto relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center">
                <Calendar className="mr-1.5 xs:mr-2 sm:mr-3 w-3.5 xs:w-3.5 sm:w-4 h-3.5 xs:h-3.5 sm:h-4 group-hover:scale-110 transition-transform duration-500" />
                {consultation.button.label}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
