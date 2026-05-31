// src/components/ProductGrid.jsx
// Cards are now clickable — click image or card → ProductDetailPage
import { useState } from "react";
import { useCurrency } from "../context/CurrencyContext";
import ProductDetailPage from "../pages/ProductDetailPage";
import { useNavigate } from "react-router-dom";

import rose    from "../assets/images/BlueRose.jpg";
import playa   from "../assets/images/PlayaBlanca.jpg";
import oregano from "../assets/images/Oregano.jpg";
import rosemary from "../assets/images/Herbs.jpg";

const mockProducts = [
  { id: 1, name: "Playa Blanca",   category: "Premium Stem",    price: 4875, img: playa,    type: "flower" },
  { id: 2, name: "Rosemary",       category: "Signature Bundle", price: 5200, img: rosemary, type: "herb"   },
  { id: 3, name: "Tulip Muse",     category: "Seasonal Pick",   price: 2150,
    img: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=400&q=80", type: "flower" },
  { id: 4, name: "Oregano Herbs",  category: "All Season Herbs", price: 3499, img: oregano,  type: "herb"   },
];

const heroImg = rose;

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .pg-root { font-family: 'DM Sans', sans-serif; background: #fff; min-height: 100vh; }
  .pg-wrapper { display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; }
  .pg-left { padding: 56px 48px 56px 56px; background: #ffffff; overflow-y: auto; }
  .pg-header { margin-bottom: 48px; }
  .pg-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #8aabcc; margin-bottom: 10px; }
  .pg-title { font-family: 'Cormorant Garamond', serif; font-size: 42px; font-weight: 300; color: #0d1117; line-height: 1.1; }
  .pg-title em { font-style: italic; color: #1a6abf; }
  .pg-divider { width: 48px; height: 2px; background: #1a6abf; margin-top: 18px; border: none; }
  .pg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 28px; }
  .pg-card { background: #fff; border: 1px solid #e2eaf4; display: flex; flex-direction: column; transition: box-shadow 0.3s, transform 0.3s; cursor: pointer; position: relative; overflow: hidden; border-radius: 4px; }
  .pg-card:hover { box-shadow: 0 12px 40px rgba(26,106,191,0.12); transform: translateY(-3px); }
  .pg-card-img-wrap { position: relative; width: 100%; padding-top: 110%; overflow: hidden; background: #f0f6ff; }
  .pg-card-img-wrap img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
  .pg-card:hover .pg-card-img-wrap img { transform: scale(1.06); }
  .pg-card-badge { position: absolute; top: 12px; left: 12px; background: #0d1117; color: #fff; font-size: 9px; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 10px; border-radius: 2px; }
  .pg-view-hint { position: absolute; inset: 0; background: rgba(13,17,23,0); display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
  .pg-view-hint span { background: rgba(13,17,23,0.85); color: white; font-size: 11px; font-weight: 500; letter-spacing: 0.14em; padding: 9px 20px; border-radius: 2px; opacity: 0; transform: translateY(6px); transition: opacity 0.25s, transform 0.25s; text-transform: uppercase; }
  .pg-card:hover .pg-view-hint { background: rgba(13,17,23,0.08); }
  .pg-card:hover .pg-view-hint span { opacity: 1; transform: translateY(0); }
  .pg-card-body { padding: 18px 18px 20px; display: flex; flex-direction: column; gap: 4px; flex: 1; }
  .pg-card-name { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 400; color: #0d1117; }
  .pg-card-category { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #8aabcc; margin-bottom: 6px; }
  .pg-card-price { font-size: 14px; font-weight: 500; color: #1a6abf; margin-bottom: 14px; }
  .pg-add-btn { margin-top: auto; width: 100%; padding: 10px 0; border: 1.5px solid #0d1117; background: transparent; color: #0d1117; font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; cursor: pointer; transition: background 0.25s, color 0.25s; border-radius: 2px; font-family: 'DM Sans', sans-serif; }
  .pg-add-btn:hover { background: #0d1117; color: #fff; }
  .pg-add-btn.added { background: #1a6abf; border-color: #1a6abf; color: #fff; }
  .pg-right { position: sticky; top: 0; height: 100vh; overflow: hidden; }
  .pg-hero-img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .pg-hero-overlay { position: absolute; inset: 0; background: linear-gradient(160deg, rgba(13,17,23,0.18) 0%, rgba(26,106,191,0.12) 100%); }
  .pg-hero-caption { position: absolute; bottom: 48px; left: 40px; right: 40px; }
  .pg-hero-label { font-family: 'Cormorant Garamond', serif; font-size: 36px; font-weight: 300; font-style: italic; color: #fff; line-height: 1.2; text-shadow: 0 2px 20px rgba(0,0,0,0.25); }
  .pg-hero-sub { margin-top: 8px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.75); }
  .pg-hero-line { width: 36px; height: 1.5px; background: rgba(255,255,255,0.6); margin-bottom: 12px; }
  .pg-toast { position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%) translateY(60px); background: #0d1117; color: #fff; font-size: 12px; letter-spacing: 0.12em; padding: 12px 28px; opacity: 0; transition: transform 0.35s, opacity 0.35s; pointer-events: none; white-space: nowrap; z-index: 999; border-radius: 4px; }
  .pg-toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }
  @media (max-width: 900px) { .pg-wrapper { grid-template-columns: 1fr; } .pg-right { display: none; } .pg-left { padding: 36px 20px; } .pg-title { font-size: 32px; } }
`;

export default function ProductGrid({ addToCart }) {
  const [addedIds,     setAddedIds]     = useState([]);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg,     setToastMsg]     = useState("");
  const [detailProduct, setDetailProduct] = useState(null); // null = grid, object = detail
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  // Open product detail page
function openDetail(item, e) {
  e.stopPropagation();
  navigate(`/product/${item.id}`);
}

  function handleAdd(item, e) {
    e.stopPropagation();
    if (addToCart) addToCart({ ...item, quantity: 1, price: item.price });
    setAddedIds(prev => [...prev, item.id]);
    setToastMsg(`${item.name} added to cart`);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
      setAddedIds(prev => prev.filter(id => id !== item.id));
    }, 2000);
  }

  // If a product is selected → show detail page

  // Otherwise → show grid
  return (
    <div className="pg-root">
      <style>{styles}</style>
      <div className="pg-wrapper">

        {/* LEFT: Product Grid */}
        <div className="pg-left">
          <div className="pg-header">
            <p className="pg-eyebrow">Curated Collection</p>
            <h2 className="pg-title">Featured <em>Blooms</em></h2>
            <hr className="pg-divider" />
          </div>

          <div className="pg-grid">
            {mockProducts.map(item => (
              <div
                className="pg-card"
                key={item.id}
                onClick={e => openDetail(item, e)}
              >
                {/* Image — clicking opens detail */}
                <div className="pg-card-img-wrap">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <div className="pg-card-badge">{item.category}</div>
                  {/* Hover overlay hint */}
                  <div className="pg-view-hint">
                    <span>View product</span>
                  </div>
                </div>

                <div className="pg-card-body">
                  <p className="pg-card-name">{item.name}</p>
                  <p className="pg-card-category">{item.category}</p>
                  <p className="pg-card-price">{formatPrice(item.price)}</p>
                  <button
                    className={`pg-add-btn${addedIds.includes(item.id) ? " added" : ""}`}
                    onClick={e => handleAdd(item, e)}
                  >
                    {addedIds.includes(item.id) ? "Added ✓" : "Add To Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Hero panel */}
        <div className="pg-right">
          <img className="pg-hero-img" src={heroImg} alt="Floral arrangement" />
          <div className="pg-hero-overlay" />
          <div className="pg-hero-caption">
            <div className="pg-hero-line" />
            <p className="pg-hero-label">Nature&apos;s finest,<br />delivered to your door.</p>
            <p className="pg-hero-sub">Fresh. Handpicked. Timeless.</p>
          </div>
        </div>

      </div>
      <div className={`pg-toast${toastVisible ? " show" : ""}`}>{toastMsg}</div>
    </div>
  );
}
