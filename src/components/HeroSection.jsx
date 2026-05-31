import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="luxuryHero">

      {/* BACKGROUND */}
      <div className="heroBackground" />

      {/* DARK OVERLAY */}
      <div className="heroOverlay" />

      {/* CONTENT */}
      <div className="heroContent">

        {/* SMALL BRAND LINE */}
         {/*<div className="heroTag">
          KENYA · EST. 2024 · PREMIUM FLORICULTURE
        </div> */}

        {/* MAIN HEADLINE */}
        <h1 className="heroHeadline">
       Fresh Flowers, Herbs & Vegetables from Kenya’s Top Growers
        </h1>

        {/* SUPPORT TEXT */}
        <p className="heroSubtext">
          Carefully harvested at peak bloom and exported with precision, freshness,
          and consistency trusted by global buyers.
        </p>

        {/* BUTTONS */}
        <div className="heroButtons">
          <button className="btnPrimary">Shop Now</button>
          <button className="btnSecondary">View Our Varieties</button>
        </div>

      </div>

      {/* FLOATING TICKER */}
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
            "Direct From Growers"
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