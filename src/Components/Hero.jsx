import Button from "./common/Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grain"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="hero-content">
        <div className="hero-tag">Luxury Beauty · Karachi</div>
        <h1 className="hero-h1">
          Where Beauty
          <br />
          Meets <em>Perfection</em>
        </h1>
        <p className="hero-sub">
          Premium hair, skin, and beauty services designed to make you feel
          confident, radiant, and utterly unforgettable.
        </p>
        <div className="hero-cta">
          <Button href="#booking">Book Appointment</Button>
          <Button href="#services" variant="secondary">
            View Services
          </Button>
        </div>
        <div className="hero-stars">
          <span className="stars">★★★★★</span> Rated 5 Stars by Hundreds of
          Happy Clients
        </div>
      </div>
      <div className="hero-line">
        <span>Scroll</span>
        <div className="scroll-bar"></div>
      </div>
    </section>
  );
}

export default Hero;
