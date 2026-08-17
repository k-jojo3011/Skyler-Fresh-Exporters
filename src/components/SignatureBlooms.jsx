// src/components/SignatureBlooms.jsx
// "View product" now navigates to a product detail page — no cart,
// no checkout. Ordering happens via WhatsApp on that detail page.

import { Link } from "react-router-dom";
import "../styles/SignatureBlooms.css";
import PRODUCTS from "../data/signatureBlooms";

function ProductCard({ product }) {
  const isHerb = product.type === "herb";

  return (
    <Link to={`/signature/${product.id}`} className="sb-card">

      {product.badge && (
        <div className="sb-card-badge">{product.badge}</div>
      )}

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
        <p className="sb-card-spec">
          {isHerb ? `Weight: ${product.weightKg}` : `Stem size: ${product.stemSize}`}
        </p>
      </div>
    </Link>
  );
}

export default function SignatureBlooms() {
  return (
    <section className="sb-root" id="signature-blooms">

      <div className="sb-inner">

        {/* ── SECTION HEADER ── */}
        <div className="sb-head">
          <div className="sb-head-left">
            <p className="sb-eyebrow">Handpicked &amp; Farm-Fresh</p>
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
            />
          ))}
        </div>

      </div>

    </section>
  );
}