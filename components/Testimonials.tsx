"use client"

const testimonials = [
  {
    quote:
      "A equipe forneceu representação excepcional em uma questão corporativa complexa. Sua expertise e dedicação foram evidentes em cada etapa.",
    author: "Cliente Corporativo",
    role: "CEO, Empresa de Tecnologia",
  },
  {
    quote:
      "Profissionais, responsivos e orientados a resultados. Eles conduziram nossa transação imobiliária com precisão e cuidado.",
    author: "Cliente Imobiliário",
    role: "Desenvolvedor Imobiliário",
  },
  {
    quote:
      "Durante uma questão familiar difícil, eles forneceram não apenas expertise jurídica, mas também apoio genuíno e compreensão.",
    author: "Cliente de Direito de Família",
    role: "Pessoa Física",
  },
]

export default function Testimonials() {
  return (
    <section className="min-h-screen flex items-center bg-slate-900 text-white relative overflow-hidden py-10 xs:py-12 sm:py-16 md:py-18 lg:py-20">
      {/* Elegant decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-3.5 sm:mb-4">
            <div className="w-12 xs:w-16 sm:w-20 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] font-light">
              Depoimentos de Clientes
            </p>
            <div className="w-12 xs:w-16 sm:w-20 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.05] xs:leading-[1] sm:leading-[0.95] mb-3 xs:mb-3.5 sm:mb-4 tracking-tight px-2">
            O Que Nossos Clientes Dizem
          </h2>
          
          <div className="w-14 xs:w-18 sm:w-20 md:w-24 h-px bg-gradient-to-r from-amber-600 to-transparent mx-auto mb-3 xs:mb-3.5 sm:mb-4"></div>
          
          <p className="text-xs xs:text-sm sm:text-base text-slate-400 leading-relaxed font-light max-w-2xl mx-auto px-3 xs:px-4">
            A confiança de nossos clientes é a base da nossa prática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700/50 rounded-none p-4 xs:p-5 sm:p-6 hover:border-amber-600/30 transition-all duration-500 group"
            >
              <div className="mb-4 xs:mb-5 sm:mb-6">
                <div className="text-amber-500 text-3xl xs:text-4xl font-serif font-light mb-3 xs:mb-4 leading-none">&ldquo;</div>
                <p className="text-slate-300 leading-relaxed text-xs xs:text-sm font-light">
                  {testimonial.quote}
                </p>
              </div>
              <div className="pt-4 xs:pt-5 sm:pt-6 border-t border-slate-700/50">
                <div className="w-10 xs:w-12 h-px bg-amber-600 mb-2 xs:mb-3"></div>
                <p className="font-light text-white mb-1 tracking-wide text-xs xs:text-sm">
                  {testimonial.author}
                </p>
                <p className="text-[10px] xs:text-xs text-slate-400 font-light">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
