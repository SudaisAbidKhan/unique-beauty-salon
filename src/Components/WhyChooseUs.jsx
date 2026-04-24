import SectionHeader from "./common/SectionHeader";

const reasons = [
  [
    "01",
    "Expert Stylists & Specialists",
    "Every team member is certified, trained, and passionate about delivering results you'll love and remember.",
  ],
  [
    "02",
    "Warm, Professional Atmosphere",
    "From first greeting to final touch, we ensure you feel heard, comfortable, and genuinely cared for.",
  ],
  [
    "03",
    "Transparent Pricing",
    "No hidden costs, no confusion. Clear packages and honest consultations so you always know what to expect.",
  ],
  [
    "04",
    "Affordable Luxury",
    "Premium quality doesn't have to mean unaffordable. We offer high-end results at prices that respect your budget.",
  ],
  [
    "05",
    "Personalized Approach",
    "No two clients are the same. Every treatment plan, color choice, and technique is tailored entirely to you.",
  ],
  [
    "06",
    "Consistent 5-Star Results",
    "Hundreds of happy clients trust us with their beauty. Our track record speaks — and our clients always return.",
  ],
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-inner">
        <div className="why-left reveal">
          <SectionHeader
            tag="Why Choose Us"
            title="The Standard"
            emphasized="of Excellence"
          />
          <p>
            We don't just provide beauty services — we craft transformative
            experiences. Here is what sets us apart from the rest.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map(([num, title, desc], index) => (
            <div
              className={`why-card reveal ${index % 3 === 1 ? "reveal-delay-1" : index % 3 === 2 ? "reveal-delay-2" : ""}`.trim()}
              key={num}
            >
              <div className="why-num">{num}</div>
              <div className="why-title">{title}</div>
              <div className="why-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
