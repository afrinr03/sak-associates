import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import ContactStrip from "./components/ContactStrip";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSlider />

      <Services />

      <About />

      <WhyChooseUs />

      <Gallery />

      <ContactStrip /> 
      <EnquiryForm />
    
      <Footer />

      <FloatingButtons />
    </>
  );
}
