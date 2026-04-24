import SectionHeader from "./common/SectionHeader";

const testimonials = [
  {
    text: "I walked in unsure, and walked out absolutely in love with my hair. The stylist listened to every detail of what I wanted and delivered something even more perfect than I had imagined. Truly exceptional work.",
    name: "Mariam A.",
    service: "Precision Haircut & Style",
    delay: "",
  },
  {
    text: "My HydraFacial was an experience I will not forget. My skin felt fresh, deeply clean, and genuinely luminous. The environment is so calming — professional in every way. I left glowing, inside and out.",
    name: "Sana R.",
    service: "HydraFacial Treatment",
    delay: "reveal-delay-1",
  },
  {
    text: "The staff made me feel completely at ease from the first second. Warm, attentive, and genuinely caring — you feel like you belong there. It's rare to find a salon where the atmosphere is as beautiful as the results.",
    name: "Nadia K.",
    service: "Full Salon Experience",
    delay: "reveal-delay-2",
  },
  {
    text: "My hair after the Keratin treatment was unbelievably smooth. Silky, frizz-free, exactly what I dreamed of. You can feel the quality of every product they use. The results speak entirely for themselves.",
    name: "Fatima Z.",
    service: "Keratin Smoothing",
    delay: "",
  },
  {
    text: "This team is premium in every sense. The expertise, the attention to detail, the care taken with each client — everything feels intentional and refined. Every single visit has been worth it, without question.",
    name: "Hira M.",
    service: "Monthly Glow Plan",
    delay: "reveal-delay-1",
  },
  {
    text: "The salon is impeccably clean, beautifully designed, and the team is always attentive. I never feel rushed or overlooked. It's a space where you know your beauty is in genuinely skilled, caring hands.",
    name: "Ayesha T.",
    service: "Glow Facial & Styling",
    delay: "reveal-delay-2",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header reveal">
          <div>
            <SectionHeader
              tag="Client Reviews"
              title="Words from Our"
              emphasized="Beloved Clients"
            />
          </div>
          <p>
            Real experiences, shared with love. Our clients don't just leave
            looking beautiful — they leave feeling it.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div
              className={`testimonial-card reveal ${testimonial.delay}`.trim()}
              key={testimonial.name}
            >
              <div className="tc-verified">✓</div>
              <div className="tc-quote">"</div>
              <div className="tc-text">{testimonial.text}</div>
              <div className="tc-stars">★★★★★</div>
              <div className="tc-name">{testimonial.name}</div>
              <div className="tc-service">{testimonial.service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
