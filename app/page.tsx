import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Hero from "@/sections/Hero";
import Goals from "@/sections/Goals";
import Services from "@/sections/Services";
import HowItWorks from "@/sections/HowItWorks";
import About from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import CTASection from "@/sections/CTASection";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Goals />
        <Services />
        <HowItWorks />
        <About />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
