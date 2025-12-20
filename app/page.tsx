import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <HeroSlider />
      <Services />
      <WhyChooseUs />
      <About />
      <Gallery />
      {/* Contact removed (footer will show contact strip like JKM) */}
      <Footer />
      <FloatingButtons />
    </main>
  );
}
