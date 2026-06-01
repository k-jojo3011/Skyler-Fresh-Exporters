// src/components/SignatureBlooms.jsx
// Classique "Pocket Watch" section layout — adapted for SkylerFresh
// Header with eyebrow + title + subtitle + "Explore" link
// 4-column product grid with hover "View product" hint + Add to Cart
// Footer strip with description + "View all" CTA
// Fully responsive: 4col → 2col → 1col

import { useState } from "react";
import { useCurrency } from "../context/CurrencyContext";
import "../styles/SignatureBlooms.css";
import rose from "../assets/images/Red1.jpg";
import spray1 from "../assets/images/SprayRose.jpg";
import aurora from "../assets/images/Aurora.jpg";
import tulip from "../assets/images/Tulip1.jpg";
import chive from "../assets/images/chives.jpg";
import agapa from "../assets/images/Agapanthus.jpg";

// Replace price values with your real prices (in KES base)
// Replace emoji with: image: require('../assets/images/rose.jpg')
const PRODUCTS = [
  { id: 1,  name: "Ever Red Rose",       sub: "Roses Standard",       priceKES: 650,  image: rose, badge: "Bestseller", type: "flower" },
  { id: 2,  name: "Snow Flake Spray",    sub: "Spray Roses",          priceKES: 780,  image: spray1, badge: "Popular",    type: "flower" },
  { id: 3,  name: "Aurora Delphinium",   sub: "Premium Stems",        priceKES: 1200, image: aurora, badge: "Premium",    type: "flower" },
  { id: 4,  name: "Wedding Bouquet",     sub: "Bouquets",             priceKES: 950,  image: tulip, badge: "Seasonal",   type: "flower" },
  { id: 5,  name: "Fresh Chives",        sub: "Culinary Herbs · 100g",priceKES: 420, image: chive, badge: null,         type: "herb"   },
  { id: 6,  name: "Agathanpthus",        sub: "Summer Flower",       priceKES: 120, image: agapa, badge: null,         type: "herb"   },
  { id: 7,  name: "Hypericum Triumph",   sub: "Berry Stems",          priceKES: 480, emoji: "🍒", badge: "New",        type: "flower" },
  { id: 8,  name: "Rosemary Bundle",     sub: "Dried Herbs · 100g",   priceKES: 380, emoji: "🌱", badge: null,         type: "herb"   },
];

function ProductCard({ product, onAddToCart, addedId }) {
  const { formatPrice } = useCurrency();
  const isAdded = addedId === product.id;
  const isHerb  = product.type === "herb";

  return (
    <div className="sb-card">

      {product.badge && (
        <div className="sb-card-badge">{product.badge}</div>
      )}

      {/* Image — replace emoji div with <img> when you have photos */}
      <div className="sb-card-img">
        {product.image
          ? <img src={product.image} alt={product.name} />
          : <span className="sb-card-emoji">{product.emoji}</span>
        }
        <div className="sb-card-hint" aria-hidden="true">
          <span>View product</span>
        </div>
      </div>

      <div className="sb-card-body">
        <p className="sb-card-name">{product.name}</p>
        <p className="sb-card-sub">{product.sub}</p>
        <p className="sb-card-price">
          {isHerb && <span className="sb-price-from">from </span>}
          {formatPrice(product.priceKES)}
        </p>

        <button
          className={`sb-add-btn ${isAdded ? "sb-add-btn--added" : ""}`}
          onClick={() => onAddToCart(product)}
          aria-label={`Add ${product.name} to cart`}
        >
          {isAdded ? "✓ Added" : "+ Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default function SignatureBlooms({ addToCart }) {
  const [addedId,  setAddedId]  = useState(null);
  const [toast,    setToast]    = useState({ show: false, msg: "" });

  function handleAdd(product) {
    if (addToCart) {
      addToCart({
        ...product,
        id:       product.id,
        price:    product.priceKES,
        quantity: 1,
        emoji:    product.emoji,
      });
    }

    setAddedId(product.id);
    setToast({ show: true, msg: `${product.name} added to cart` });

    clearTimeout(window._sbTimer);
    window._sbTimer = setTimeout(() => {
      setAddedId(null);
      setToast({ show: false, msg: "" });
    }, 2200);
  }

  return (
    <section className="sb-root" id="signature-blooms">

      <div className="sb-inner">

        {/* ── SECTION HEADER ── */}
        <div className="sb-head">
          <div className="sb-head-left">
            <p className="sb-eyebrow">Handpicked &amp; Farm-Fresh</p>
            <h2 className="sb-title">
              Kenya's Finest<br /><em>Signature Blooms</em>
            </h2>
            <p className="sb-subtitle">
              Our most-loved varieties  cut at dawn, packed to order, delivered
              worldwide. Every stem and bundle selected for quality you can see.
            </p>
          </div>
          <a href="#shop" className="sb-explore-link">
            Explore full collection →
          </a>
        </div>

        {/* ── PRODUCT GRID ── */}
        <div className="sb-grid">
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAdd}
              addedId={addedId}
            />
          ))}
        </div>

        {/* ── FOOTER STRIP ── */}
        <div className="sb-footer-strip">
          <p className="sb-footer-text">
            <strong>Kenya's largest range</strong> of fresh-cut flowers, herbs and
            seasonal produce all sourced directly from our network of 30+ partner
            farms across the Central Highlands.
          </p>
          <a href="#shop" className="sb-view-all-btn">
            View all products →
          </a>
        </div>

      </div>

      {/* Toast notification */}
      <div
        className={`sb-toast ${toast.show ? "sb-toast--show" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast.msg}
      </div>

    </section>
  );
}
