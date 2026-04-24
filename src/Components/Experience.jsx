import SectionHeader from "./common/SectionHeader";

const pillars = [
  {
    title: "Personalized Consultation",
    text: "Every visit begins with understanding exactly what you want and how to achieve it beautifully.",
  },
  {
    title: "Expert-Led, Results-Focused",
    text: "Our certified stylists and skin specialists are trained to deliver visible, lasting results.",
  },
  {
    title: "Transparent & Trustworthy",
    text: "Clear pricing, honest guidance — no surprises, only beautiful outcomes.",
  },
];

function Experience() {
  return (
    <section>
      <div className="experience">
        <div className="exp-visual reveal">
          <div className="exp-frame">
            <div className="exp-frame-inner">
              <div className="exp-icon">💫</div>
              <div className="exp-quote">
                "From the moment you walk in, you're treated with nothing but
                care, attention, and expertise."
              </div>
              <div className="exp-attr">— The Unique Beauty Promise</div>
            </div>
          </div>
          <div className="exp-badge">
            <div className="exp-badge-num">5★</div>
            <div className="exp-badge-text">Always</div>
          </div>
          <div className="exp-stats">
            <div className="exp-stat">
              <div className="exp-stat-num">500+</div>
              <div className="exp-stat-label">Happy Clients</div>
            </div>
            <div className="exp-stat">
              <div className="exp-stat-num">12+</div>
              <div className="exp-stat-label">Experts</div>
            </div>
            <div className="exp-stat">
              <div className="exp-stat-num">98%</div>
              <div className="exp-stat-label">Satisfaction</div>
            </div>
            <div className="exp-stat">
              <div className="exp-stat-num">6+</div>
              <div className="exp-stat-label">Yrs. Excellence</div>
            </div>
          </div>
        </div>

        <div className="exp-body reveal reveal-delay-2">
          <SectionHeader
            tag="The Experience"
            title="Beauty Crafted"
            emphasized="with Purpose"
          />
          <p>
            Every visit to Unique Beauty Salon is more than a service — it is a
            carefully curated experience.
            <strong>
              {" "}
              From the moment you walk in, you are welcomed into a space of
              calm, elegance, and undivided attention.
            </strong>
          </p>
          <p>
            Our expert team listens deeply, understands your vision, and
            delivers results that exceed expectation. Every treatment is
            tailored to you — your features, your goals, your confidence.
          </p>
          <div className="exp-pillars">
            {pillars.map((pillar) => (
              <div className="pillar" key={pillar.title}>
                <div className="pillar-icon">✦</div>
                <div className="pillar-text">
                  <strong>{pillar.title}</strong>
                  <span>{pillar.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
