// src/components/CartDrawer.jsx
import { useCurrency } from "../context/CurrencyContext";
import "../styles/CartDrawer.css";



const suggestedProducts = [
  { id: 101, name: "Red Rose Bouquet",  price: 650,  emoji: "🌹" },
  { id: 102, name: "Kenyan Protea",     price: 1200, emoji: "🌺" },
  { id: 103, name: "Sunflower Bunch",   price: 450,  emoji: "🌻" },
  { id: 104, name: "Mixed Tulips",      price: 800,  emoji: "🌷" },
];

function CartDrawer({ cart, cartOpen, setCartOpen, removeFromCart, updateQuantity, addToCart }) {
  const { formatPrice, activeCurrency } = useCurrency();

  const total     = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
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
                    : <span>{product.emoji}</span>
                  }
                </div>
                <p className="cart-also-name">{product.name}</p>
                {/* ✅ Price updates when currency changes */}
                <p className="cart-also-price">{formatPrice(product.price)}</p>
                <button
                  className="cart-also-add"
                  onClick={() => addToCart && addToCart(product)}
                >
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

          {/* Items */}
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
              cart.map(item => (
                <div className="cart-item-row" key={item.id}>
                  <div className="cart-item-thumb">
                    {item.image
                      ? <img src={item.image} alt={item.name} />
                      : <span>{item.emoji || "🌿"}</span>
                    }
                  </div>

                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    {item.variant && <p className="cart-item-variant">{item.variant}</p>}
                    {/* ✅ Unit price in selected currency */}
                    <p className="cart-item-price">{formatPrice(item.price)}</p>

                    <div className="cart-qty-row">
                      <div className="cart-qty-stepper">
                        <button className="qty-btn" onClick={() => updateQuantity(item.id, "decrease")}>−</button>
                        <span className="qty-val">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => updateQuantity(item.id, "increase")}>+</button>
                      </div>
                      <button className="cart-remove-link" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* ✅ Line total in selected currency */}
                  <div className="cart-item-total">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="cart-footer">
              <div className="cart-footer-top">
                <button className="cart-order-note">Add order note</button>
                <span className="cart-shipping-note">
                  <u>Shipping</u> &amp; taxes calculated at checkout
                </span>
              </div>

              {/* ✅ Total in selected currency — label shows active currency code */}
              <button className="cart-checkout-btn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <span>CHECKOUT</span>
                <span className="checkout-divider">•</span>
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
