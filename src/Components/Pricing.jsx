import Button from "./common/Button";
import SectionHeader from "./common/SectionHeader";

const plans = [
  {
    name: "Basic",
    price: "4,500",
    note: "Per visit · Individual services",
    features: [
      ["Choice of 1 Service", true],
      ["Personal Consultation", true],
      ["Premium Products Used", true],
      ["Multi-service Discount", false],
      ["Package Bundling", false],
      ["Priority Booking", false],
    ],
    cta: "Book Basic",
    featured: false,
  },
  {
    name: "Standard",
    price: "9,500",
    note: "Per visit · 2–3 Services Bundled",
    features: [
      ["2–3 Combined Services", true],
      ["Personal Consultation", true],
      ["Premium Products", true],
      ["20% Bundle Savings", true],
      ["Package Customization", true],
      ["Priority Booking", false],
    ],
    cta: "Book Standard",
    featured: true,
  },
  {
    name: "Premium",
    price: "18,000",
    note: "Per visit · Full Experience",
    features: [
      ["Full-Day Experience", true],
      ["Dedicated Stylist", true],
      ["All Premium Services", true],
      ["25%+ Bundle Savings", true],
      ["Priority Booking", true],
      ["Complimentary Refreshments", true],
    ],
    cta: "Book Premium",
    featured: false,
  },
];

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-inner">
        <div className="pricing-header reveal">
          <SectionHeader
            tag="Transparent Pricing"
            title="Clear Packages,"
            emphasized="No Surprises"
            centered
          />
        </div>

        <div className="pricing-subtext reveal">
          Every package includes a personal consultation. Individual services
          are also available — just ask our team.
        </div>

        <div className="pricing-grid reveal">
          {plans.map((plan) => (
            <div
              className={`pricing-card ${plan.featured ? "featured" : ""}`.trim()}
              key={plan.name}
            >
              {plan.featured ? (
                <div className="featured-tag">Most Popular</div>
              ) : null}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                <span className="currency">Rs.</span> {plan.price}
              </div>
              <div className="plan-price-note">{plan.note}</div>
              <div className="plan-divider"></div>
              <ul className="plan-features">
                {plan.features.map(([feature, included]) => (
                  <li key={feature} className={included ? "included" : ""}>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="#booking"
                variant={plan.featured ? "primary" : "secondary"}
                className={`plan-cta ${plan.featured ? "plan-cta-gold" : "plan-cta-outline"}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
