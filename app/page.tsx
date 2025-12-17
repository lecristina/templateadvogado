import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Services from "@/components/Services"
import WhyChooseUs from "@/components/WhyChooseUs"
import Process from "@/components/Process"
import Consultation from "@/components/Consultation"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Process />
      <Consultation />
      <FAQ />
      <Footer />
    </main>
  )
}
