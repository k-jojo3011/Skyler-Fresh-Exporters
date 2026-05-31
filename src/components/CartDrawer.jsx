// src/components/CartDrawer.jsx
import { useCurrency } from "../context/CurrencyContext";
import "../styles/CartDrawer.css";

const suggestedProducts = [
  { id: 101, name: "Red Rose Bouquet",   price: 650,  emoji: "🌹", type: "flower" },
  { id: 102, name: "Kenyan Protea",      price: 1200, emoji: "🌺", type: "flower" },
  { id: 103, name: "Fresh Basil",        price: 250,  emoji: "🌿", type: "herb"   },
  { id: 104, name: "Dhania (Coriander)", price: 120,  emoji: "🍃", type: "herb"   },
];

// ─────────────────────────────────────────────────────
// FLOWER item row  →  stem length · colour · grade · box info
// ─────────────────────────────────────────────────────
function FlowerCartItem({ item, updateQuantity, removeFromCart, formatPrice }) {
  const packrate  = item.packrate || 250;
  const stems     = item.quantity;
  const boxes     = stems / packrate;
  const isFullBox = stems % packrate === 0;

  return (
    <div className="cart-item-row">
      <div className="cart-item-thumb">
        {item.image ? <img src={item.image} alt={item.name} /> : <span>{item.emoji || "🌹"}</span>}
      </div>

      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        {item.farm && <p className="cart-item-sub">Farm: {item.farm}</p>}

        {/* Stem detail badges */}
        <div className="cart-badges">
          {item.variant    && <span className="cart-badge cart-badge--blue">📏 {item.variant}</span>}
          {item.color      && <span className="cart-badge cart-badge--blue">🎨 {item.color}</span>}
          {item.characteristic && <span className="cart-badge cart-badge--blue">✂️ {item.characteristic}</span>}
        </div>

        {/* ✅ Unit price — currency-aware */}
        <p className="cart-item-price">{formatPrice(item.price)} / stem</p>

        {/* Box info */}
        <p className="cart-detail-note">
          {packrate} stems/box &nbsp;·&nbsp;
          <span className={isFullBox ? "note-green" : "note-amber"}>
            {isFullBox
              ? `${boxes} ${boxes === 1 ? "box" : "boxes"}`
              : `${boxes.toFixed(1)} boxes — min. ${packrate} stems`}
          </span>
        </p>

        <div className="cart-qty-row">
          <div className="cart-qty-stepper">
            <button className="qty-btn" onClick={() => updateQuantity(item.id, "decrease")}>−</button>
            <span className="qty-val">{stems}</span>
            <button className="qty-btn" onClick={() => updateQuantity(item.id, "increase")}>+</button>
          </div>
          <span className="qty-unit">stems</span>
          <button className="cart-remove-link" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      </div>

      {/* ✅ Line total — currency-aware */}
      <div className="cart-item-total">{formatPrice(item.price * stems)}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────
// HERB item row  →  pack size (50g / 100g) · condition · grams total
// ─────────────────────────────────────────────────────
function HerbCartItem({ item, updateQuantity, removeFromCart, formatPrice }) {
  const packs      = item.quantity;
  const grams      = item.packGrams || 50;
  const totalGrams = packs * grams;

  return (
    <div className="cart-item-row">
      <div className="cart-item-thumb">
        {item.image ? <img src={item.image} alt={item.name} /> : <span>{item.emoji || "🌿"}</span>}
      </div>

      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        {item.origin && <p className="cart-item-sub">{item.origin}</p>}

        {/* Herb detail badges */}
        <div className="cart-badges">
          {item.variant   && <span className="cart-badge cart-badge--green">⚖️ {item.variant}</span>}
          {item.condition && <span className="cart-badge cart-badge--green">🌱 {item.condition}</span>}
          {item.shelfLife && <span className="cart-badge cart-badge--green">🗓 {item.shelfLife}</span>}
        </div>

        {/* ✅ Unit price — currency-aware */}
        <p className="cart-item-price">{formatPrice(item.price)} / {grams}g pack</p>

        {/* Gram total */}
        <p className="cart-detail-note">
          {grams}g per pack &nbsp;·&nbsp;
          <span className="note-green">{totalGrams}g total</span>
        </p>

        <div className="cart-qty-row">
          <div className="cart-qty-stepper">
            <button className="qty-btn" onClick={() => updateQuantity(item.id, "decrease")}>−</button>
            <span className="qty-val">{packs}</span>
            <button className="qty-btn" onClick={() => updateQuantity(item.id, "increase")}>+</button>
          </div>
          <span className="qty-unit">packs</span>
          <button className="cart-remove-link" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      </div>

      {/* ✅ Line total — currency-aware */}
      <div className="cart-item-total">{formatPrice(item.price * packs)}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────
// MAIN CART DRAWER
// ─────────────────────────────────────────────────────
function CartDrawer({ cart, cartOpen, setCartOpen, removeFromCart, updateQuantity, addToCart }) {
  // ✅ Currency context — ALL price display goes through formatPrice
  const { formatPrice, activeCurrency } = useCurrency();

  const total     = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Footer summary totals
  const totalStems = cart
    .filter(i => i.type === "flower")
    .reduce((s, i) => s + i.quantity, 0);
  const totalGrams = cart
    .filter(i => i.type === "herb")
    .reduce((s, i) => s + i.quantity * (i.packGrams || 50), 0);
  const estBoxes = cart
    .filter(i => i.type === "flower")
    .reduce((s, i) => s + i.quantity / (i.packrate || 250), 0);

  const cartIds   = cart.map(i => i.id);
  const suggested = suggestedProducts.filter(p => !cartIds.includes(p.id));

  if (!cartOpen) return null;

  return (
    <>
      <div className="cart-backdrop" onClick={() => setCartOpen(false)} />

      <div className="cart-drawer open">

        {/* ════ LEFT — You May Also Like ════ */}
        <div className="cart-left">
          <p className="cart-also-title">YOU MAY ALSO LIKE</p>
          <div className="cart-also-list">
            {suggested.map(product => (
              <div className="cart-also-card" key={product.id}>
                <div className="cart-also-img">
                  {product.image
                    ? <img src={product.image} alt={product.name} />
                    : <span>{product.emoji}</span>}
                </div>
                <p className="cart-also-name">{product.name}</p>
                <p className="cart-also-type">
                  {product.type === "herb" ? "🌿 Herb" : "🌸 Flower"}
                </p>
                {/* ✅ Currency-aware */}
                <p className="cart-also-price">{formatPrice(product.price)}</p>
                <button className="cart-also-add" onClick={() => addToCart && addToCart(product)}>
                  + Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-divider" />

        {/* ════ RIGHT — Cart items ════ */}
        <div className="cart-right">

          {/* Header */}
          <div className="cart-header">
            <div className="cart-header-left">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span className="cart-count-label">
                {itemCount} {itemCount === 1 ? "item" : "items"}
              </span>
            </div>
            <button className="cart-close-btn" onClick={() => setCartOpen(false)}>✕</button>
          </div>
          <div className="cart-header-line" />

          {/* Items list */}
          <div className="cart-items-list">
            {cart.length === 0 ? (
              <div className="cart-empty-state">
                <span>🛒</span>
                <p>Your cart is empty</p>
                <button className="cart-empty-browse" onClick={() => setCartOpen(false)}>
                  Browse Products
                </button>
              </div>
            ) : (
              <>
                {/* ── FLOWER GROUP ── */}
                {cart.some(i => i.type === "flower") && (
                  <div className="cart-type-group">
                    <p className="cart-type-label">🌸 Flowers</p>
                    {cart.filter(i => i.type === "flower").map(item => (
                      <FlowerCartItem
                        key={item.id}
                        item={item}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                        formatPrice={formatPrice}
                      />
                    ))}
                  </div>
                )}

                {/* ── HERB GROUP ── */}
                {cart.some(i => i.type === "herb") && (
                  <div className="cart-type-group">
                    <p className="cart-type-label">🌿 Herbs</p>
                    {cart.filter(i => i.type === "herb").map(item => (
                      <HerbCartItem
                        key={item.id}
                        item={item}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                        formatPrice={formatPrice}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="cart-footer">

              {/* Order summary — only shows relevant rows */}
              <div className="cart-order-summary">
                {totalStems > 0 && (
                  <>
                    <div className="summary-row">
                      <span>🌸 Total stems</span>
                      <strong>{totalStems.toLocaleString()}</strong>
                    </div>
                    <div className="summary-row">
                      <span>📦 Est. boxes</span>
                      <strong>{estBoxes.toFixed(1)}</strong>
                    </div>
                  </>
                )}
                {totalGrams > 0 && (
                  <div className="summary-row">
                    <span>🌿 Total herbs</span>
                    <strong>{totalGrams}g</strong>
                  </div>
                )}
              </div>

              <div className="cart-footer-top">
                <button className="cart-order-note">Add order note</button>
                <span className="cart-shipping-note">
                  <u>Shipping</u> &amp; taxes calculated at checkout
                </span>
              </div>

              {/* ✅ Checkout total — currency-aware, shows active currency code */}
              <button className="cart-checkout-btn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <span>CHECKOUT</span>
                <span className="checkout-divider">•</span>
                {/* ✅ formatPrice converts total to selected currency */}
                <span>{formatPrice(total)}</span>
              </button>

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default CartDrawer;