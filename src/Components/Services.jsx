import { useMemo, useState } from "react";
import SectionHeader from "./common/SectionHeader";

const tabs = [
  { key: "hair", label: "✂ Hair" },
  { key: "skin", label: "✦ Skin" },
  { key: "makeup", label: "💋 Makeup" },
  { key: "packages", label: "◈ Packages" },
];

const services = {
  hair: [
    {
      icon: "✂",
      name: "Precision Haircut",
      desc: "A custom cut shaped to your face structure and lifestyle. Our stylists ensure every strand falls perfectly.",
      price: "Starting from Rs. 1,500",
    },
    {
      icon: "🎨",
      name: "Color & Balayage",
      desc: "From vibrant transformations to subtle sun-kissed balayage — seamless, glossy, and personalized.",
      price: "Starting from Rs. 4,500",
    },
    {
      icon: "✨",
      name: "Keratin Treatment",
      desc: "Eliminate frizz and restore silky smoothness. Results last months — hair that's effortlessly beautiful.",
      price: "Starting from Rs. 6,000",
    },
    {
      icon: "🌿",
      name: "Deep Conditioning",
      desc: "Intense moisture and protein therapy to restore strength, softness, and brilliant shine.",
      price: "Starting from Rs. 2,500",
    },
    {
      icon: "👑",
      name: "Bridal Hair Styling",
      desc: "Your most important day deserves perfection. Trial session included for every bridal booking.",
      price: "Starting from Rs. 8,000",
    },
    {
      icon: "💫",
      name: "Hair Extensions",
      desc: "Premium quality extensions applied for instant length, volume, and glamour.",
      price: "On Consultation",
    },
  ],
  skin: [
    {
      icon: "💧",
      name: "HydraFacial",
      desc: "Cleanse, exfoliate, and hydrate in one treatment. Leaves skin fresh, plump, and visibly glowing.",
      price: "Starting from Rs. 5,500",
    },
    {
      icon: "✦",
      name: "Glow Facial",
      desc: "A brightening treatment that evens tone, reduces dullness, and gives your skin a lit-from-within glow.",
      price: "Starting from Rs. 3,500",
    },
    {
      icon: "🌸",
      name: "Anti-Aging Treatment",
      desc: "Targeted therapies that firm, lift, and smooth — revealing your most youthful complexion.",
      price: "Starting from Rs. 6,000",
    },
    {
      icon: "🫧",
      name: "Deep Cleanse Facial",
      desc: "Purifies pores, extracts impurities, and rebalances your skin's natural equilibrium.",
      price: "Starting from Rs. 2,800",
    },
    {
      icon: "☀",
      name: "Skin Brightening",
      desc: "Vitamin C infused treatment targeting dark spots, uneven tone, and hyperpigmentation.",
      price: "Starting from Rs. 4,000",
    },
    {
      icon: "🌙",
      name: "Luxury Spa Facial",
      desc: "A full-sensory experience combining premium masks, serums, and relaxation techniques.",
      price: "Starting from Rs. 7,000",
    },
  ],
  makeup: [
    {
      icon: "💋",
      name: "Bridal Makeup",
      desc: "Every bride deserves flawless artistry. We create your perfect look — from subtle elegance to full glam.",
      price: "Starting from Rs. 12,000",
    },
    {
      icon: "🌟",
      name: "Party & Event Glam",
      desc: "Long-lasting, camera-ready looks designed to turn heads and stay stunning all evening.",
      price: "Starting from Rs. 3,500",
    },
    {
      icon: "🎭",
      name: "Editorial Makeup",
      desc: "Bold, artistic, expressive. Perfect for photoshoots, fashion events, and special occasions.",
      price: "Starting from Rs. 5,000",
    },
    {
      icon: "🪄",
      name: "Everyday Natural Look",
      desc: "Effortless, polished, and fresh. Learn or book your signature everyday glow.",
      price: "Starting from Rs. 2,000",
    },
    {
      icon: "👁",
      name: "Eye Definition",
      desc: "Lash extensions, tinting, and expert liner work that frames your eyes perfectly.",
      price: "Starting from Rs. 1,800",
    },
    {
      icon: "💅",
      name: "Full Face + Nail Art",
      desc: "Complete head-to-fingertip beauty with coordinated nail art and full makeup application.",
      price: "Starting from Rs. 5,500",
    },
  ],
  packages: [
    {
      icon: "🌸",
      name: "Glow Day Package",
      desc: "HydraFacial + Hair Deep Conditioning + Nail Treatment. A complete refresh in one visit.",
      price: "Rs. 9,500 (Save 20%)",
    },
    {
      icon: "👑",
      name: "Bridal Complete Package",
      desc: "Bridal Hair + Full Makeup + Skin Prep Facial + Trial Session. Everything for your perfect day.",
      price: "Rs. 28,000 (Save 25%)",
    },
    {
      icon: "✨",
      name: "Monthly Glow Plan",
      desc: "Monthly Facial + Haircut + Express Styling. Maintain your radiance with a consistent care routine.",
      price: "Rs. 6,500/month",
    },
    {
      icon: "💆",
      name: "Relaxation & Beauty",
      desc: "Full Spa Facial + Scalp Massage + Hair Treatment. The ultimate escape from daily stress.",
      price: "Rs. 12,000 (Save 18%)",
    },
    {
      icon: "🎀",
      name: "Party-Ready Package",
      desc: "Hair Style + Party Makeup + Nail Art. Walk into any event looking and feeling spectacular.",
      price: "Rs. 8,000 (Save 15%)",
    },
    {
      icon: "🌟",
      name: "Custom Bundle",
      desc: "Build your own package with our team. Mixed services at special bundled rates, designed for you.",
      price: "On Consultation",
    },
  ],
};

function Services() {
  const [activeTab, setActiveTab] = useState("hair");
  const activeServices = useMemo(() => services[activeTab], [activeTab]);

  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header reveal">
          <SectionHeader
            tag="Our Services"
            title="Luxurious Treatments,"
            emphasized="Extraordinary Results"
            centered
            description="Every service is crafted to bring out your natural radiance with professional precision and care."
          />
        </div>

        <div className="service-tabs reveal">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="service-panels reveal">
          <div className="service-panel active">
            {activeServices.map((service) => (
              <div className="service-card" key={service.name}>
                <span className="sc-icon">{service.icon}</span>
                <div className="sc-name">{service.name}</div>
                <div className="sc-desc">{service.desc}</div>
                <div className="sc-price">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
