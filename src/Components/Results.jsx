import SectionHeader from "./common/SectionHeader";
import hairImage from "../assets/hair.jpg";
import skinImage from "../assets/Skin Transformatio.jpg";
import colorImage from "../assets/Color & Style (Hair Coloring).jpg";

const results = [
  {
    className: "rv-hair",
    image: hairImage,
    alt: "Hair transformation result",
    tag: "Hair Transformation",
    title: "Silky, Frizz-Free Perfection",
    body: "Our Keratin and deep conditioning treatments transform dry, damaged, unruly hair into smooth, luminous silk — with results lasting up to 5 months.",
    delay: "",
  },
  {
    className: "rv-skin",
    image: skinImage,
    alt: "Skin transformation result",
    tag: "Skin Transformation",
    title: "Radiant, Glowing Skin",
    body: "One HydraFacial session delivers visible results — refined pores, even skin tone, deep hydration, and a natural glow that turns heads.",
    delay: "reveal-delay-2",
  },
  {
    className: "rv-glow",
    image: colorImage,
    alt: "Color and style hair result",
    tag: "Color & Style",
    title: "Flawless Color, Every Time",
    body: "Our color specialists create seamless, dimensional results — from sun-kissed balayage to bold transformations — always glossy, always perfect.",
    delay: "reveal-delay-4",
  },
];

function Results() {
  return (
    <section className="results-section" id="results">
      <div className="results-inner">
        <div className="results-header reveal">
          <SectionHeader
            tag="Visible Transformations"
            title="Real Results,"
            emphasized="Real Beauty"
            centered
            description="Each transformation is a testament to our expertise, precision, and the trust our clients place in our hands."
          />
        </div>

        <div className="results-grid">
          {results.map((result) => (
            <div
              className={`result-card reveal ${result.delay}`.trim()}
              key={result.title}
            >
              <div className="result-visual">
                <div className={`result-visual-inner ${result.className}`}>
                  <div className="result-glow"></div>
                  <img
                    src={result.image}
                    alt={result.alt}
                    className="result-image"
                  />
                </div>
                <div className="result-label">
                  <div className="result-tag">{result.tag}</div>
                  <div className="result-title">{result.title}</div>
                </div>
              </div>
              <div className="result-body">
                <p>{result.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
