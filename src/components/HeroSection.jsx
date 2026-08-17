import "../styles/HeroSection.css";
import heroImage from "../assets/images/FlowerE.jpeg"; // adjust the path

function HeroSection() {
  return (
    <section className="luxuryHero">

      {/* BACKGROUND */}
      <div
        className="heroBackground"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* DARK OVERLAY */}
      <div className="heroOverlay" />

      {/* CONTENT */}
      <div className="heroContent">
        <h1 className="heroHeadline">
          Fresh Flowers, Herbs & Vegetables from Kenya’s Top Growers
        </h1>

        <p className="heroSubtext">
          Carefully harvested at peak bloom and exported with precision,
          freshness, and consistency trusted by global buyers.
        </p>

        <div className="heroButtons">
          <button className="btnPrimary">Shop Now</button>
          <button className="btnSecondary">View Our Varieties</button>
        </div>
      </div>

      <div className="heroTicker">
        <div className="heroTickerTrack">
          {[
            "Farm Fresh",
            "Export Quality",
            "Cold Chain Protected",
            "Direct From Growers",
            "Kenya Grown",
            "Premium Grade",
            "Farm Fresh",
            "Export Quality",
            "Cold Chain Protected",
            "Direct From Growers",
          ].map((item, i) => (
            <span key={i} className="heroTickerItem">
              {item}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}

export default HeroSection;