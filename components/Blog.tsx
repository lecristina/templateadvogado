"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/config/site.config"

export default function Blog() {
  const { blog } = siteConfig
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden py-10 xs:py-12 sm:py-16 md:py-18 lg:py-20">
      {/* Sophisticated decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      <div className="absolute left-0 top-1/3 w-32 h-px bg-gradient-to-r from-amber-600/20 to-transparent hidden lg:block"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between mb-6 xs:mb-8 max-w-7xl mx-auto gap-4 xs:gap-0">
          <div>
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-4">
              <div className="w-10 xs:w-12 sm:w-16 h-px bg-gradient-to-r from-amber-600 to-transparent"></div>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] font-light">
                {blog.badge}
              </p>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-slate-900 leading-tight tracking-tight">
              {blog.title}
            </h2>
            <div className="w-14 xs:w-18 sm:w-20 md:w-24 h-px bg-gradient-to-r from-amber-600 to-transparent mt-3 xs:mt-4"></div>
          </div>
          <Button
            variant="outline"
            className="border-slate-300/60 text-slate-700 hover:border-amber-600/60 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-white hover:text-amber-600 rounded-none font-light tracking-wide uppercase text-[10px] xs:text-xs px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-4 w-full xs:w-auto transition-all duration-500 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <span className="relative z-10 flex items-center">
              {blog.button.label}
              <ArrowRight className="ml-2 xs:ml-3 w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-1 transition-transform duration-500" />
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 max-w-7xl mx-auto">
          {blog.posts.map((post, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-none p-4 xs:p-5 sm:p-6 hover:shadow-xl hover:shadow-amber-600/10 hover:border-amber-600/60 hover:bg-white hover:-translate-y-1 transition-all duration-700 group relative overflow-hidden"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 via-amber-600/0 to-amber-600/0 group-hover:from-amber-600/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-700"></div>
              
              <div className="relative z-10">
                <div className="mb-3 xs:mb-4">
                  <span className="text-[10px] xs:text-xs text-slate-500 uppercase tracking-wider font-light group-hover:text-slate-600 transition-colors duration-500">
                    {post.category}
                  </span>
                  <span className="text-slate-400 mx-2 xs:mx-3">•</span>
                  <span className="text-[10px] xs:text-xs text-slate-500 font-light group-hover:text-slate-600 transition-colors duration-500">{post.date}</span>
                </div>
                <div className="w-10 xs:w-12 h-px bg-gradient-to-r from-amber-600 to-amber-600/50 mb-3 xs:mb-4 group-hover:w-14 xs:group-hover:w-16 group-hover:from-amber-600 group-hover:to-amber-500 transition-all duration-700"></div>
                <h3 className="text-lg xs:text-xl font-serif font-light text-slate-900 mb-3 xs:mb-4 leading-tight tracking-tight group-hover:text-amber-600 transition-colors duration-500">
                  {post.title}
                </h3>
                <Button
                  variant="ghost"
                  className="text-amber-600 hover:text-amber-700 p-0 h-auto font-light tracking-wide uppercase text-[10px] xs:text-xs transition-all duration-500 group/btn"
                >
                  <span className="flex items-center">
                    Ler Mais
                    <ArrowRight className="ml-1.5 xs:ml-2 w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover/btn:translate-x-1 transition-transform duration-500" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
