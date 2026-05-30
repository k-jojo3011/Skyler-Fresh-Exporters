// src/components/ProductCard.jsx
import { useState } from "react";
import { useCart }     from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";
import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart }   = useCart();
  const { formatPrice } = useCurrency();
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}

        {product.image
          ? <img src={product.image} alt={product.name} className="product-img" />
          : <div className="product-img-placeholder">{product.emoji}</div>
        }

        <button
          className="product-quick-add"
          onClick={(e) => { e.stopPropagation(); addToCart(product, selectedVariant); }}
        >
          + ADD TO CART
        </button>
      </div>

      <div className="product-info">
        <p className="product-name">{product.name}</p>
        {/* ✅ Price converts with selected currency */}
        <p className="product-price">{formatPrice(product.price)}</p>

        {product.variants?.length > 0 && (
          <div className="product-variants">
            {product.variants.map(v => (
              <button
                key={v}
                className={`variant-pill ${selectedVariant === v ? "active" : ""}`}
                onClick={() => setSelectedVariant(v)}
              >
                {v}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
