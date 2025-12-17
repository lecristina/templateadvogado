"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteConfig } from "@/config/site.config"

export default function FAQ() {
  const { faq } = siteConfig

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden py-10 xs:py-12 sm:py-16 md:py-18 lg:py-20">
      {/* Sophisticated decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      <div className="absolute left-1/4 top-20 w-px h-24 bg-gradient-to-b from-transparent via-amber-600/15 to-transparent hidden lg:block"></div>
      <div className="absolute right-1/4 bottom-20 w-px h-24 bg-gradient-to-b from-transparent via-amber-600/15 to-transparent hidden lg:block"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-3.5 sm:mb-4">
            <div className="w-12 xs:w-16 sm:w-20 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] font-light">
              {faq.badge}
            </p>
            <div className="w-12 xs:w-16 sm:w-20 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-slate-900 leading-[1.05] xs:leading-[1] sm:leading-[0.95] mb-3 xs:mb-3.5 sm:mb-4 tracking-tight px-2">
            {faq.title}
          </h2>
          
          <div className="w-14 xs:w-18 sm:w-20 md:w-24 h-px bg-gradient-to-r from-amber-600 to-transparent mx-auto mb-3 xs:mb-3.5 sm:mb-4"></div>
          
          <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed font-light max-w-2xl mx-auto px-3 xs:px-4">
            {faq.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2 xs:space-y-2.5 sm:space-y-3">
            {faq.items.map((faqItem, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-none px-3 xs:px-4 sm:px-6 py-3 xs:py-3.5 sm:py-4 hover:border-amber-600/70 hover:shadow-lg hover:shadow-amber-600/10 hover:bg-gradient-to-br hover:from-amber-50/40 hover:to-white hover:-translate-y-0.5 transition-all duration-700 group relative overflow-hidden"
              >
                {/* Subtle accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <AccordionTrigger className="text-left text-sm xs:text-base font-light text-slate-900 hover:no-underline font-serif tracking-tight hover:text-amber-600 transition-colors duration-500 relative z-10">
                  <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                    <div className="w-px h-6 xs:h-7 sm:h-8 bg-gradient-to-b from-amber-600 to-amber-600/50 flex-shrink-0 group-hover:from-amber-600 group-hover:to-amber-500 transition-all duration-500"></div>
                    <span className="flex-1 text-left pr-2">{faqItem.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-3 xs:pt-4 leading-relaxed font-light text-xs xs:text-sm pl-4 xs:pl-5 sm:pl-6 relative z-10 group-hover:text-slate-700 transition-colors duration-500">
                  {faqItem.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
