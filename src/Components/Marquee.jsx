const marqueeItems = [
  "Hair Artistry",
  "HydraFacial",
  "Keratin Treatments",
  "Glow Facials",
  "Bridal Packages",
  "Luxury Makeup",
  "Skin Rejuvenation",
  "Color & Balayage",
];

function Marquee() {
  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {repeated.map((item, index) => (
          <div className="marquee-item" key={`${item}-${index}`}>
            <span className="marquee-dot"></span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
