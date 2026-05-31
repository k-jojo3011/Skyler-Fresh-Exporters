// src/components/Certifications.jsx
import "../styles/Certifications.css";

export default function Certifications() {
  return (
    <section className="cert-section">
      <div className="cert-container">

        <p className="cert-eyebrow">Certifications</p>

        <p className="cert-subtitle">
          Our produce meets strict international agricultural and export standards,
          ensuring safety, freshness, and compliance across global markets.
        </p>

        <div className="cert-grid">

          <div className="cert-card">
            <span className="cert-icon">🌍</span>
            <h3>Global GAP Certified</h3>
            <p>Ensures safe and sustainable farming practices for international markets.</p>
          </div>

          <div className="cert-card">
            <span className="cert-icon">🧾</span>
            <h3>Phytosanitary Compliance</h3>
            <p>Meets export health standards required for plant and flower shipments.</p>
          </div>

          <div className="cert-card">
            <span className="cert-icon">❄️</span>
            <h3>Cold Chain Certified Handling</h3>
            <p>Maintains freshness from farm to global destination.</p>
          </div>

          <div className="cert-card">
            <span className="cert-icon">🌿</span>
            <h3>Sustainable Farming</h3>
            <p>Eco-friendly cultivation methods that protect soil and environment.</p>
          </div>

        </div>

      </div>
    </section>
  );
}