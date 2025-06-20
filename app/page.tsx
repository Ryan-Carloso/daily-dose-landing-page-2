import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProblemSolution from "@/components/ProblemSolution"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
