import { useState, useRef } from "react";
import rose from "../assets/images/ROSETA.JPG";
import flower from "../assets/images/Lilies.jpg";
import playa from "../assets/images/PlayaBlanca.jpg";
import alsto from "../assets/images/Alstromeria.jpg";
import redrose from "../assets/images/Rose.jpg";
import oregano from "../assets/images/Oregano.jpg";
import parsley from "../assets/images/Parsley.jpeg";
import rosemary from "../assets/images/Rosemary.jpeg";
import grass from "../assets/images/Lemon Grass.jpeg";


const categoryData = {
  Flowers: [
    {
      id: 1,
      name: "Garden Rose ",
      subtitle: "Fresh Cut Roses",
      spec: { label: "Stem length", options: ["40cm", "50cm", "60cm"] },
      image: rose,
      swatches: ["#e8c4c4", "#f9e4e4", "#c9424a"],
    },
    {
      id: 2,
      name: "Lilies",
      subtitle: "Dried Lavender",
      spec: { label: "Stem length", options: ["45cm", "55cm"] },
      image: flower,
      swatches: ["#9b8ec4", "#c4bce0", "#6b5fa6"],
    },
    {
      id: 3,
      name: "Red Rose",
      subtitle: "Bright White Blooms",
      spec: { label: "Stem length", options: ["40cm", "50cm", "60cm", "70cm"] },
      image: redrose,
      swatches: ["#f5c842", "#e8a825", "#2d5016"],
    },
    {
      id: 4,
      name: "Playa Blanca",
      subtitle: "Spring Collection",
      spec: { label: "Stem length", options: ["45cm", "55cm", "65cm"] },
      image: playa,
      swatches: ["#e84393", "#f5a0cc", "#f5e6c8"],
    },
    {
      id: 5,
      name: "Alstromeria",
      subtitle: "Bright White Blooms",
      spec: { label: "Stem length", options: ["35cm", "45cm"] },
      image: alsto,
      swatches: ["#f5c842", "#e8a825", "#2d5016"],
    },
  ],
  Herbs: [
    {
      id: 6,
      name: "Fresh Basil Pot",
      subtitle: "Sweet Genovese",
      spec: { label: "Net weight", options: ["0.5kg", "1kg"] },
      image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400&q=80",
    },
    {
      id: 7,
      name: "Lemon Grass",
      subtitle: "Lemon Grass",
      spec: { label: "Net weight", options: ["0.5kg", "1kg"] },
      image: grass,
    },
    {
      id: 8,
      name: "Rosemary ",
      subtitle: "Aromatic Herb",
      spec: { label: "Net weight", options: ["0.5kg", "1kg", "5kg"] },
      image: rosemary,
    },
    {
      id: 9,
      name: "Parsley",
      subtitle: "Garden Fresh",
      spec: { label: "Net weight", options: ["0.5kg", "1kg"] },
      image: parsley,
    },
    {
      id: 10,
      name: "Oregano Herb",
      subtitle: "Freshly Harvested",
      spec: { label: "Net weight", options: ["0.5kg", "1kg"] },
      image: oregano,
    },
  ],
  "Vegetables & Fruits": [
    {
      id: 11,
      name: "Heirloom Tomatoes",
      subtitle: "Vine Ripened",
      spec: { label: "Net weight", options: ["1kg", "2kg", "5kg"] },
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80",
    },
    {
      id: 12,
      name: "Mango Basket",
      subtitle: "Kent & Apple Mango",
      spec: { label: "Net weight", options: ["2kg", "5kg"] },
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80",
    },
    {
      id: 13,
      name: "Avocado Pack",
      subtitle: "Hass Variety",
      spec: { label: "Net weight", options: ["1kg", "2kg", "5kg"] },
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80",
    },
    {
      id: 14,
      name: "Rainbow Peppers",
      subtitle: "Mixed Bell Peppers",
      spec: { label: "Net weight", options: ["1kg", "2kg"] },
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80",
    },
    {
      id: 15,
      name: "Passion Fruit",
      subtitle: "Purple Granadilla",
      spec: { label: "Net weight", options: ["1kg", "2kg"] },
      image: "https://images.unsplash.com/photo-1604495772376-9657f0033fa8?w=400&q=80",
    },
  ],
};

const tabs = ["Flowers", "Herbs", "Vegetables & Fruits"];
const BUYER_TYPES = ["Florist", "Wholesaler", "Retail / supermarket chain", "Event company", "Other"];

export default function CategorySection() {
  const [activeTab, setActiveTab] = useState("Flowers");
  const [quoteItem, setQuoteItem] = useState(null);
  const [quoteSpec, setQuoteSpec] = useState(null);
  const [quoteColor, setQuoteColor] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
  };

  const openQuote = (item) => {
    setSubmitted(false);
    setQuoteSpec(item.spec.options[0]);
    setQuoteColor(item.swatches ? item.swatches[0] : null);
    setQuoteItem(item);
  };

  const closeQuote = () => setQuoteItem(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your enquiry pipeline / CRM.
    setSubmitted(true);
  };

  const products = categoryData[activeTab] || [];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        .cs-root {
          background: #fefdfa;
          padding: 60px 0 70px;
          font-family: 'Jost', sans-serif;
        }

        .cs-header {
          text-align: center;
          margin-bottom: 28px;
          padding: 0 24px;
        }

        .cs-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 600;
          color: #1a1612;
          margin: 0 0 28px;
          letter-spacing: -0.02em;
        }

        .cs-tabs {
          display: flex;
          justify-content: center;
          gap: 0;
          border-bottom: 1px solid #d6cfc6;
          padding-bottom: 0;
          flex-wrap: wrap;
        }

        .cs-tab {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8a7f74;
          padding: 10px 28px 14px;
          position: relative;
          transition: color 0.2s;
        }

        .cs-tab:hover { color: #1a1612; }
        .cs-tab.active { color: #1a1612; }
        .cs-tab.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: #1a1612;
        }

        .cs-scroll-wrapper {
          position: relative;
          margin-top: 36px;
          padding: 0 24px;
        }

        .cs-track {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 8px;
        }

        .cs-track::-webkit-scrollbar { display: none; }

        .cs-card {
          flex: 0 0 calc(25% - 16px);
          min-width: 220px;
          max-width: 260px;
          scroll-snap-align: start;
          background: transparent;
        }

        @media (max-width: 900px) {
          .cs-card { flex: 0 0 calc(50% - 12px); max-width: none; }
        }

        @media (max-width: 520px) {
          .cs-card { flex: 0 0 calc(85vw); max-width: none; }
          .cs-scroll-wrapper { padding: 0 16px; }
        }

        .cs-img-wrap {
          position: relative;
          background: #ece8e2;
          aspect-ratio: 3/4;
          overflow: hidden;
          border-radius: 2px;
        }

        .cs-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cs-card:hover .cs-img-wrap img { transform: scale(1.04); }

        .cs-quote-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          background: #fff;
          border: 1px solid #d6cfc6;
          border-radius: 2px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
        }

        .cs-quote-btn:hover { background: #1a6abf; border-color: #1a6abf; }
        .cs-quote-btn:hover svg { stroke: #fff; }

        .cs-info { padding: 12px 4px 4px; }

        .cs-name {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: #1a1612;
          margin: 0 0 3px;
          letter-spacing: 0.01em;
        }

        .cs-spec-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 0 8px;
        }

        .cs-spec-label {
          font-size: 0.68rem;
          color: #8a7f74;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .cs-spec-value {
          font-size: 0.8rem;
          color: #1a1612;
          font-weight: 400;
        }

        .cs-swatches {
          display: flex;
          gap: 5px;
          align-items: center;
        }

        .cs-swatch {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          border: 1.5px solid rgba(26,106,191,0.6);
          box-shadow: 0 0 0 1px rgba(26,106,191,0.35);
          cursor: pointer;
          transition: transform 0.15s;
        }

        .cs-swatch:hover { transform: scale(1.2); }

        .cs-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-60%);
          right: 0;
          width: 40px;
          height: 40px;
          background: #fff;
          border: 1px solid #d6cfc6;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .cs-arrow:hover { background: #1a1612; box-shadow: 0 4px 16px rgba(0,0,0,0.14); }
        .cs-arrow:hover svg { stroke: #fff; }

        @media (max-width: 520px) { .cs-arrow { display: none; } }

        /* ── Quote request modal ── */
        .cs-modal-backdrop {
          position: fixed; inset: 0; background: rgba(26,22,18,0.55);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000; padding: 20px;
        }
        .cs-modal {
          background: #fff; width: 100%; max-width: 420px; border-radius: 6px;
          padding: 32px 28px 28px; position: relative; max-height: 90vh; overflow-y: auto;
        }
        .cs-modal-close {
          position: absolute; top: 16px; right: 16px; background: none; border: none;
          font-size: 20px; line-height: 1; color: #8a7f74; cursor: pointer;
        }
        .cs-modal-close:hover { color: #1a1612; }
        .cs-modal-eyebrow {
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: #8a7f74; margin-bottom: 6px;
        }
        .cs-modal-title {
          font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 600;
          color: #1a1612; margin-bottom: 20px;
        }
        .cs-form { display: flex; flex-direction: column; gap: 14px; }
        .cs-form label {
          display: flex; flex-direction: column; gap: 5px; font-size: 11px;
          letter-spacing: 0.06em; text-transform: uppercase; color: #6b7a8c;
        }
        .cs-form input, .cs-form select {
          font-family: 'Jost', sans-serif; font-size: 14px; padding: 10px 12px;
          border: 1px solid #dfe6ee; border-radius: 3px; color: #1a1612; background: #fafcff;
        }
        .cs-form input:focus, .cs-form select:focus { outline: none; border-color: #1a6abf; background: #fff; }
        .cs-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .cs-form-swatches { display: flex; gap: 8px; margin-top: 2px; }
        .cs-form-swatch {
          width: 26px; height: 26px; border-radius: 50%; cursor: pointer;
          border: 2px solid transparent; box-shadow: 0 0 0 1px rgba(26,106,191,0.35);
        }
        .cs-form-swatch.is-selected { border-color: #1a6abf; }
        .cs-form-submit {
          margin-top: 6px; background: #1a1612; color: #fff; border: none; padding: 13px 0;
          font-size: 12px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
          border-radius: 3px; cursor: pointer; transition: background 0.2s ease;
        }
        .cs-form-submit:hover { background: #1a6abf; }
        .cs-form-success { text-align: center; padding: 20px 0 4px; }
        .cs-form-success p { font-size: 14px; color: #4a5a6e; margin-top: 8px; }
      `}</style>

      <section className="cs-root">
        <div className="cs-header">
          <h2 className="cs-title">Order By category</h2>

          <div className="cs-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`cs-tab${activeTab === tab ? " active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="cs-scroll-wrapper">
          <div className="cs-track" ref={scrollRef}>
            {products.map((item) => (
              <div className="cs-card" key={item.id}>
                <div className="cs-img-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <button
                    className="cs-quote-btn"
                    onClick={() => openQuote(item)}
                    title="Request quote"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1612" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16v12H7l-3 3V4z" />
                      <line x1="8" y1="9" x2="16" y2="9" />
                      <line x1="8" y1="13" x2="13" y2="13" />
                    </svg>
                  </button>
                </div>

                <div className="cs-info">
                  <p className="cs-name">{item.name}</p>
                  <div className="cs-spec-row">
                    <span className="cs-spec-label">{item.spec.label}</span>
                    <span className="cs-spec-value">{item.spec.options[0]}{item.spec.options.length > 1 ? `+` : ""}</span>
                  </div>
                  {item.swatches && item.swatches.length > 0 && (
                    <div className="cs-swatches">
                      {item.swatches.map((color, i) => (
                        <span
                          key={i}
                          className="cs-swatch"
                          style={{ background: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="cs-arrow" onClick={() => handleScroll("right")} title="Scroll right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1612" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </section>

      {/* Quote request modal */}
      {quoteItem && (
        <div className="cs-modal-backdrop" onClick={closeQuote}>
          <div className="cs-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cs-modal-close" onClick={closeQuote} aria-label="Close">×</button>

            {submitted ? (
              <div className="cs-form-success">
                <p className="cs-modal-eyebrow">Request sent</p>
                <h3 className="cs-modal-title">You're all set</h3>
                <p>The export desk will reply with a quote for <strong>{quoteItem.name}</strong> within one business day.</p>
              </div>
            ) : (
              <>
                <p className="cs-modal-eyebrow">Request a quote</p>
                <h3 className="cs-modal-title">{quoteItem.name}</h3>

                <form className="cs-form" onSubmit={handleSubmit}>
                  <label>
                    Name
                    <input type="text" required placeholder="Your full name" />
                  </label>
                  <label>
                    Email
                    <input type="email" required placeholder="you@company.com" />
                  </label>
                  <label>
                    Buyer type
                    <select required defaultValue="">
                      <option value="" disabled>Select one</option>
                      {BUYER_TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </label>

                  <label>
                    {quoteItem.spec.label}
                    <select value={quoteSpec} onChange={(e) => setQuoteSpec(e.target.value)}>
                      {quoteItem.spec.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </label>

                  {quoteItem.swatches && (
                    <label>
                      Colour
                      <div className="cs-form-swatches">
                        {quoteItem.swatches.map((c) => (
                          <span
                            key={c}
                            className={`cs-form-swatch${quoteColor === c ? " is-selected" : ""}`}
                            style={{ background: c }}
                            onClick={() => setQuoteColor(c)}
                            title={c}
                          />
                        ))}
                      </div>
                    </label>
                  )}

                  <div className="cs-form-row">
                    <label>
                      Country
                      <input type="text" required placeholder="e.g. Netherlands" />
                    </label>
                    <label>
                      Volume / week
                      <input type="text" required placeholder="e.g. 500 stems" />
                    </label>
                  </div>
                  <button type="submit" className="cs-form-submit">Send Request</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}