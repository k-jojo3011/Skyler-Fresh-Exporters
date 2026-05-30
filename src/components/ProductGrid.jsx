import { useState } from "react";
import { useCurrency } from "../context/CurrencyContext";
import rose from "../assets/images/BlueRose.jpg";
import playa from "../assets/images/PlayaBlanca.jpg";
import oregano from "../assets/images/Oregano.jpg";
import rosemary from "../assets/images/Herbs.jpg";

const mockProducts = [
  {
    id: 4,
    name: "Playa Blanca",
    category: "Premium Stem",
    price: 4875,
    img: playa,
  },
  {
    id: 2,
    name: "Rosemary",
    category: "Signature Bundle",
    price: 5200,
    img: rosemary,
  },
  {
    id: 3,
    name: "Tulip Muse",
    category: "Seasonal Pick",
    price: 2150,
    img: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=400&q=80",
  },
  {
    id: 4,
    name: "Oregano Herbs",
    category: "All season Herbs",
    price:3499,
    img: oregano,
  },
];

const heroImg = rose;

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pg-root {
    --cream: #f8f4ef;
    --blush: #e8c9bb;
    --dusty-rose: #c4856a;
    --deep-green: #2c3e2d;
    --sage: #8a9e82;
    --charcoal: #2a2a2a;
    --gold: #b8965a;
    font-family: 'Jost', sans-serif;
    background: var(--cream);
    min-height: 100vh;
  }

  .pg-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
  }

  /* LEFT PANEL */
  .pg-left {
    padding: 56px 48px 56px 56px;
    background: var(--cream);
    overflow-y: auto;
  }

  .pg-header {
    margin-bottom: 48px;
  }

  .pg-eyebrow {
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 10px;
  }

  .pg-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 42px;
    font-weight: 300;
    color: var(--deep-green);
    line-height: 1.1;
    letter-spacing: -0.01em;
  }

  .pg-title em {
    font-style: italic;
    color: var(--dusty-rose);
  }

  .pg-divider {
    width: 48px;
    height: 1.5px;
    background: var(--gold);
    margin-top: 18px;
    border: none;
  }

  /* GRID */
  .pg-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 28px;
  }

  /* CARD */
  .pg-card {
    background: #fff;
    border: 1px solid #ede8e2;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .pg-card:hover {
    box-shadow: 0 12px 40px rgba(44, 62, 45, 0.1);
    transform: translateY(-3px);
  }

  .pg-card-img-wrap {
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
    background: #f2ede8;
  }

  .pg-card-img-wrap img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .pg-card:hover .pg-card-img-wrap img {
    transform: scale(1.06);
  }

  .pg-card-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: var(--deep-green);
    color: #fff;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 4px 9px;
    font-family: 'Jost', sans-serif;
  }

  .pg-card-body {
    padding: 18px 18px 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
  }

  .pg-card-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 400;
    color: var(--charcoal);
    letter-spacing: 0.01em;
  }

  .pg-card-category {
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 6px;
  }

  .pg-card-price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    font-weight: 500;
    color: var(--dusty-rose);
    margin-bottom: 14px;
  }

  .pg-card-price span {
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 300;
    color: #9a9086;
    margin-right: 3px;
    letter-spacing: 0.05em;
  }

  .pg-add-btn {
    margin-top: auto;
    width: 100%;
    padding: 10px 0;
    border: 1.5px solid var(--deep-green);
    background: transparent;
    color: var(--deep-green);
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.25s ease, color 0.25s ease;
    position: relative;
    overflow: hidden;
  }

  .pg-add-btn:hover {
    background: var(--deep-green);
    color: var(--cream);
  }

  .pg-add-btn.added {
    background: var(--dusty-rose);
    border-color: var(--dusty-rose);
    color: #fff;
  }

  /* RIGHT PANEL */
  .pg-right {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
  }

  .pg-hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pg-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      160deg,
      rgba(44, 62, 45, 0.18) 0%,
      rgba(44, 62, 45, 0.05) 50%,
      rgba(196, 133, 106, 0.22) 100%
    );
  }

  .pg-hero-caption {
    position: absolute;
    bottom: 48px;
    left: 40px;
    right: 40px;
  }

  .pg-hero-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 36px;
    font-weight: 300;
    font-style: italic;
    color: #fff;
    line-height: 1.2;
    text-shadow: 0 2px 20px rgba(0,0,0,0.25);
  }

  .pg-hero-sub {
    margin-top: 8px;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.75);
  }

  .pg-hero-line {
    width: 36px;
    height: 1px;
    background: rgba(255,255,255,0.6);
    margin-bottom: 12px;
  }

  /* TOAST */
  .pg-toast {
    position: fixed;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%) translateY(60px);
    background: var(--deep-green);
    color: #fff;
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.12em;
    padding: 12px 28px;
    opacity: 0;
    transition: transform 0.35s ease, opacity 0.35s ease;
    pointer-events: none;
    white-space: nowrap;
    z-index: 999;
  }

  .pg-toast.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }

  @media (max-width: 900px) {
    .pg-wrapper { grid-template-columns: 1fr; }
    .pg-right { display: none; }
    .pg-left { padding: 36px 24px; }
    .pg-title { font-size: 32px; }
  }
`;

export default function ProductGrid({ addToCart }) {
  const [addedIds, setAddedIds] = useState([]);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const { formatPrice } = useCurrency();

  function handleAdd(item) {
    if (addToCart) addToCart(item);
    setAddedIds((prev) => [...prev, item.id]);
    setToastMsg(`${item.name} added to cart`);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
      setAddedIds((prev) => prev.filter((id) => id !== item.id));
    }, 2000);
  }

  return (
    <div className="pg-root">
      <style>{styles}</style>

      <div className="pg-wrapper">
        {/* LEFT: Product Grid */}
        <div className="pg-left">
          <div className="pg-header">
            <p className="pg-eyebrow">Curated Collection</p>
            <h2 className="pg-title">
              Featured <em>Blooms</em>
            </h2>
            <hr className="pg-divider" />
          </div>

          <div className="pg-grid">
            {mockProducts.map((item) => (
              <div className="pg-card" key={item.id}>
                <div className="pg-card-img-wrap">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <div className="pg-card-badge">{item.category}</div>
                </div>
                <div className="pg-card-body">
                  <p className="pg-card-name">{item.name}</p>
                  <p className="pg-card-category">{item.category}</p>
                  <p className="pg-card-price">
                    <span>{formatPrice(item.price)}</span>
                  </p>
                  <button
                    className={`pg-add-btn${addedIds.includes(item.id) ? " added" : ""}`}
                    onClick={() => handleAdd(item)}
                  >
                    {addedIds.includes(item.id) ? "Added" : "Add To Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Hero Panel */}
        <div className="pg-right">
          <img
            className="pg-hero-img"
            src={heroImg}
            alt="Floral arrangement"
          />
          <div className="pg-hero-overlay" />
          <div className="pg-hero-caption">
            <div className="pg-hero-line" />
            <p className="pg-hero-label">
              Nature&apos;s finest,<br />delivered to your door.
            </p>
            <p className="pg-hero-sub">Fresh. Handpicked. Timeless.</p>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div className={`pg-toast${toastVisible ? " show" : ""}`}>
        {toastMsg}
      </div>
    </div>
  );
}

