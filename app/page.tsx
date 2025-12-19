import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
