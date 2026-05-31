import { useState, useRef } from "react";
import rose from "../assets/images/BlueRose.jpg";
import flower from "../assets/images/Lilies.jpg";
import { useCurrency } from "../context/CurrencyContext";
import playa from "../assets/images/PlayaBlanca.jpg";
import alsto from "../assets/images/Alstromeria.jpg";
import redrose from "../assets/images/Rose.jpg";
import oregano from "../assets/images/Oregano.jpg";

const categoryData = {
  Flowers: [
    {
      id: 1,
      name: "Garden Rose ",
      subtitle: "Fresh Cut Roses",
      price: 1200,
      from: false,
      image: rose,
      swatches: ["#e8c4c4", "#f9e4e4", "#c9424a"],
    },
    {
      id: 2,
      name: "Lilies",
      subtitle: "Dried Lavender",
      price: 850,
      from: true,
      image: flower,
      swatches: ["#9b8ec4", "#c4bce0", "#6b5fa6"],
    },
    {
      id: 3,
      name: "Red Rose",
      subtitle: "Bright White Blooms",
      price: 1950,
      from: false,
      image: redrose,
      swatches: ["#f5c842", "#e8a825", "#2d5016"],
    },
    {
      id: 4,
      name: "Playa Blanca",
      subtitle: "Spring Collection",
      price: 1400,
      from: true,
      image: playa,
      swatches: ["#e84393", "#f5a0cc", "#f5e6c8"],
    },
    {
      id: 5,
      name: "Alstromeria",
      subtitle: "Bright White Blooms",
      price: 950,
      from: false,
      image: alsto,
      swatches: ["#f5c842", "#e8a825", "#2d5016"],
    },
  ],
  Herbs: [
    {
      id: 6,
      name: "Fresh Basil Pot",
      subtitle: "Sweet Genovese",
      price: 350,
      from: false,
      image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400&q=80",

    },
    {
      id: 7,
      name: "Mint Bundle",
      subtitle: "Spearmint & Peppermint",
      price: 280,
      from: true,
      image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&q=80",

    },
    {
      id: 8,
      name: "Rosemary Sprigs",
      subtitle: "Aromatic Herb",
      price: 320,
      from: false,
      image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&q=80",

    },
    {
      id: 9,
      name: "Thyme Collection",
      subtitle: "Garden Fresh",
      price: 300,
      from: true,
      image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&q=80",

    },
    {
      id: 10,
      name: "Oregano Herb",
      subtitle: "Freshly Harvested",
      price: 180,
      from: false,
      image: oregano,

    },
  ],
  "Vegetables & Fruits": [
    {
      id: 11,
      name: "Heirloom Tomatoes",
      subtitle: "Vine Ripened",
      price: 450,
      from: true,
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80",

    },
    {
      id: 12,
      name: "Mango Basket",
      subtitle: "Kent & Apple Mango",
      price: 600,
      from: false,
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80",

    },
    {
      id: 13,
      name: "Avocado Pack",
      subtitle: "Hass Variety",
      price: 380,
      from: true,
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80",

    },
    {
      id: 14,
      name: "Rainbow Peppers",
      subtitle: "Mixed Bell Peppers",
      price: 420,
      from: false,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80",

    },
    {
      id: 15,
      name: "Passion Fruit",
      subtitle: "Purple Granadilla",
      price: 250,
      from: true,
      image: "https://images.unsplash.com/photo-1604495772376-9657f0033fa8?w=400&q=80",

    },
  ],
};

const tabs = ["Flowers", "Herbs", "Vegetables & Fruits"];

export default function CategorySection({ addToCart }) {
  const [activeTab, setActiveTab] = useState("Flowers");
  const [cartedIds, setCartedIds] = useState([]);
  const scrollRef = useRef(null);
  const { formatPrice } = useCurrency();

  const handleScroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
  };
const handleAdd = (item) => {
  const category = activeTab === "Flowers"
    ? "flower"
    : activeTab === "Herbs"
    ? "herb"
    : "vegetable";

  if (addToCart) {
    addToCart({ ...item, type: category });
  }

  setCartedIds((prev) => [...prev, item.id]);

  setTimeout(() => {
    setCartedIds((prev) => prev.filter((id) => id !== item.id));
  }, 2000);
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

        .cs-tab.active {
          color: #1a1612;
        }

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

        .cs-card:hover .cs-img-wrap img {
          transform: scale(1.04);
        }

        .cs-cart-btn {
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

        .cs-cart-btn:hover { background: #1a1612; }
        .cs-cart-btn:hover svg { stroke: #fff; }

        .cs-cart-btn.added { background: #7a8c5a; border-color: #7a8c5a; }
        .cs-cart-btn.added svg { stroke: #fff; }

        .cs-info {
          padding: 12px 4px 4px;
        }

        .cs-name {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: #1a1612;
          margin: 0 0 3px;
          letter-spacing: 0.01em;
        }

        .cs-price-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 0 8px;
        }

        .cs-from {
          font-size: 0.72rem;
          color: #8a7f74;
          font-weight: 300;
        }

        .cs-price {
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
          border: 1.5px solid rgba(255,255,255,0.7);
          box-shadow: 0 0 0 1px rgba(0,0,0,0.12);
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

        .cs-arrow:hover {
          background: #1a1612;
          box-shadow: 0 4px 16px rgba(0,0,0,0.14);
        }

        .cs-arrow:hover svg { stroke: #fff; }

        @media (max-width: 520px) {
          .cs-arrow { display: none; }
        }
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
            {products.map((item) => {
              const isAdded = cartedIds.includes(item.id);
              return (
                <div className="cs-card" key={item.id}>
                  <div className="cs-img-wrap">
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <button
                      className={`cs-cart-btn${isAdded ? " added" : ""}`}
                      onClick={() => handleAdd(item)}
                      title="Add to cart"
                    >
                      {isAdded ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1612" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="cs-info">
                    <p className="cs-name">{item.name}</p>
                    <div className="cs-price-row">
                      {item.from && <span className="cs-from">From</span>}
                      <span className="cs-price">{formatPrice(item.price)}</span>
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
              );
            })}
          </div>

          <button className="cs-arrow" onClick={() => handleScroll("right")} title="Scroll right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1612" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}