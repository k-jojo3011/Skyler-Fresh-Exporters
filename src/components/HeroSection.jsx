
import "../styles/HeroSection.css";
import rose from "../assets/images/BlueRose.jpg";

function HeroSection() {
  return (
    <section className="luxuryHero">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1487530811015-780c9e9b4f0a?q=80&w=2070&auto=format&fit=crop"
        alt="Beautiful flowers"
        className="heroBackground"
      />

      {/* SOFT OVERLAY */}
      <div className="heroOverlay" />

      {/* CONTENT */}
      <div className="heroContent">

        {/* AVATAR + LABEL like reference */}
        <div className="heroIdentity">
          <div className="heroAvatar">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=100&auto=format&fit=crop"
              alt="Skyler Fresh"
            />
          </div>
          <span className="heroLabel">SKYLER FRESH</span>
        </div>

        {/* HEADLINE */}
        <h1 className="heroHeadline">
          Fresh Kenyan blooms,<br />delivered worldwide
        </h1>

        {/* CTA */}
        <button className="heroMainBtn">Shop our flowers</button>

      </div>

      {/* BOTTOM TICKER */}
      <div className="heroTicker">
        <div className="heroTickerTrack">
          {["Farm Fresh", "Export Quality", "Organic", "Same-Day Delivery", "100% Kenyan", "Award Winning",
            "Farm Fresh", "Export Quality", "Organic", "Same-Day Delivery", "100% Kenyan", "Award Winning"].map((item, i) => (
              <span key={i} className="heroTickerItem">{item}</span>
            ))}
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
