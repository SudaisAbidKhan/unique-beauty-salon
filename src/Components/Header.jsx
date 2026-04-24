import { useEffect, useState } from "react";
import Button from "./common/Button";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <a href="#" className="logo">
        <span>Unique</span> Beauty Salon
      </a>
      <ul className="nav-links">
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#results">Results</a>
        </li>
        <li>
          <a href="#testimonials">Reviews</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <Button href="#booking" variant="secondary" className="nav-book">
        Book Now
      </Button>
    </nav>
  );
}

export default Header;
