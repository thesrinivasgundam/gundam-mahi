import Navbar from "./components/Navbar";
import SectionWrapper from "./components/SectionWrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MarqueePage from "./components/marqee";

export default function Home() {
  return (
    <>
      <Navbar />

      <SectionWrapper id="home" bgColor="#F6F6F6">
        <Hero />
      </SectionWrapper>

      <SectionWrapper id="work" bgColor="#6A9DE9">
        <Work />
      </SectionWrapper>

            <SectionWrapper id='tools' bgColor="#ffffff">
        <MarqueePage/>
      </SectionWrapper>

      <SectionWrapper id="services" bgColor="#68A86A">
        <Services />
      </SectionWrapper>

      <SectionWrapper id="about" bgColor="#E5C5E2">
        <About />
      </SectionWrapper>

      <SectionWrapper id="contact" bgColor="#F8EE72">
        <Contact />
      </SectionWrapper>



      <Footer />
    </>
  );
}