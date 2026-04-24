import { useEffect } from "react";
import BookingSection from "./Components/BookingSection";
import CustomCursor from "./Components/CustomCursor";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Marquee from "./Components/Marquee";
import Pricing from "./Components/Pricing";
import Results from "./Components/Results";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import WhyChooseUs from "./Components/WhyChooseUs";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <Marquee />
      <Experience />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <Results />
      <Pricing />
      <BookingSection />
      <Footer />
    </>
  );
}

export default App;
