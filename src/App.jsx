import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, CtaBanner, Footer, Gallery, Packages, Services, Testimonials, WhyChooseUs } from './components/Sections'

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-brand-cream font-sans text-brand-deep">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <CtaBanner />
      <Footer />
    </main>
  )
}
