import Button from "./common/Button";

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-book-row reveal">
        <div className="footer-book-text">
          <h3>Walk In. Transform. Leave Glowing.</h3>
          <p>Open 7 days a week · Appointments & Walk-ins Welcome</p>
        </div>
        <Button href="tel:+923225123701">Reserve Your Spot</Button>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">
            <span>Unique</span> Beauty Salon
          </a>
          <p>
            Where luxury meets expertise. We are dedicated to making every
            client feel seen, celebrated, and radiantly beautiful.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#services">Hair Treatments</a>
            </li>
            <li>
              <a href="#services">Skin & Facials</a>
            </li>
            <li>
              <a href="#services">Makeup Artistry</a>
            </li>
            <li>
              <a href="#services">Packages & Deals</a>
            </li>
            <li>
              <a href="#services">Bridal Services</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Information</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>

            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#results">Gallery</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>
              2nd floor, United plaza, Markaz G-9 <br />
              Islamabad, 46000, Pakistan
            </span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>+92 322 5123701</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💬</span>
            <span>WhatsApp Available</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🕐</span>
            <span>Mon – Sun: 10am – 8pm</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Unique Beauty Salon. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
