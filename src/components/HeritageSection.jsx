
// src/components/HeritageSection.jsx
// Classique-inspired "Our Heritage" section — black & blue theme
import "../styles/HeritageSection.css";

const milestones = [
  {
    year: "2018",
    title: "Founded in Limuru",
    desc: "Started as a 2-acre family farm with roses, kale and a dream of fresh, honest produce.",
  },
  {
    year: "2020",
    title: "Nairobi Delivery Launch",
    desc: "Launched same-day home delivery across all Nairobi neighbourhoods.",
  },
  {
    year: "2022",
    title: "30+ Farmer Network",
    desc: "Partnered with smallholder farmers across Central Kenya on fair-trade terms.",
  },
  {
    year: "2025",
    title: "Global Export Programme",
    desc: "Now shipping fresh flowers and herbs to 9 international destinations.",
  },
];

const stats = [
  { number: "7+",   label: "Years growing"        },
  { number: "30+",  label: "Partner farmers"       },
  { number: "5,000+",label: "Households served"   },
  { number: "9",    label: "Export destinations"   },
];

export default function HeritageSection() {
  return (
    <section className="heritage-root" id="heritage">

      {/* Background decorations */}
      <div className="heritage-bg-grid"   aria-hidden="true" />
      <div className="heritage-bg-glow1"  aria-hidden="true" />
      <div className="heritage-bg-glow2"  aria-hidden="true" />

      <div className="heritage-inner">

        {/* Top eyebrow label */}
        <div className="heritage-eyebrow">
          <span className="heritage-eyebrow-line" />
          <span className="heritage-eyebrow-text">Rooted in Kenya since 2018</span>
        </div>

        {/* Main headline */}
        <h2 className="heritage-headline">
          Our<br /><em>Heritage</em>
        </h2>

        {/* Two-column body */}
        <div className="heritage-body">

          {/* Left — paragraphs */}
          <div className="heritage-text">
            <p>
              SkylerFresh began as a small family farm on two acres of Limuru's cool highlands.
              What started with a patch of sukuma wiki and a dozen rose bushes has grown into
              one of Kenya's most trusted sources of fresh-cut flowers, vegetables, fruits and
              herbs delivered across Nairobi and exported worldwide.
            </p>
            <p>
              We work directly with over 30 smallholder farmers across Central Kenya, paying
              fair prices and harvesting at dawn so every stem and leaf arrives at your door
              at peak freshness. Our roots are in Kenyan soil, but our reach extends to
              florists and buyers in London, Tokyo, Jeddah, Singapore and beyond.
            </p>
            <p>
              Every product carries the promise our founders made in 2018 freshness you
              can see, quality you can trust, and a supply chain that supports the families
              who grow it.
            </p>
          </div>

          {/* Right — milestone timeline */}
          <div className="heritage-milestones">
            {milestones.map((m, i) => (
              <div className="milestone-row" key={m.year}>
                <div className={`milestone-dot ${i === 0 ? "milestone-dot--active" : ""}`}>
                  <div className="milestone-dot-inner" />
                </div>
                <div className="milestone-content">
                  <p className="milestone-year">{m.year}</p>
                  <p className="milestone-title">{m.title}</p>
                  <p className="milestone-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Stats row */}
        <div className="heritage-stats">
          {stats.map(s => (
            <div className="heritage-stat" key={s.label}>
              <p className="heritage-stat-num">{s.number}</p>
              <p className="heritage-stat-label">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Footer — quote + CTA */}
        <div className="heritage-footer">
          <p className="heritage-quote">
            "From Limuru's highlands to your door freshness is not a feature,
            it is our foundation."
          </p>
          <a href="#about" className="heritage-cta">
            Read our full story <span className="heritage-cta-arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

