// src/components/FlowerStory.jsx
import "../styles/FlowerStory.css";

export default function FlowerStory() {
  return (
    <section className="fs-section">
      <div className="fs-container">

        <div className="fs-text">

          <p className="fs-eyebrow">Curated Collection</p>

          <h2 className="fs-title">
            The language of<br />
            <em>fresh flowers</em>
          </h2>

          <p className="fs-desc">
            Every bloom tells a story. From delicate roses to seasonal
            field flowers, we carefully select each stem to create natural
            harmony in every arrangement.
          </p>

          <p className="fs-desc">
            Designed for moments that matter celebrations, gifts, or
            everyday beauty brought straight from Kenyan farms.
          </p>

          <button className="fs-btn">Explore Collection</button>

        </div>

      </div>
    </section>
  );
}