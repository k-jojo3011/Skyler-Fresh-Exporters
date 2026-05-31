// src/App.js
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "./context/CurrencyContext";

import Home               from "./pages/Home";
import Contact            from "./pages/Contact";
import ProductDetailPage  from "./pages/ProductDetailPage";
import CartDrawer         from "./components/CartDrawer";
import WhatsAppButton     from "./components/WhatsAppButton";

function App() {
  const [cart,     setCart]     = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // ── ADD ──────────────────────────────────────────
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  // ── REMOVE ───────────────────────────────────────
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // ── UPDATE QTY ───────────────────────────────────
  const updateQuantity = (id, direction) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id !== id) return item;
        return {
          ...item,
          quantity: direction === "increase"
            ? item.quantity + 1
            : Math.max(1, item.quantity - 1),
        };
      })
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    // ✅ CurrencyProvider wraps everything so useCurrency() works everywhere
    <CurrencyProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                cartCount={cartCount}
                openCart={() => setCartOpen(true)}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetailPage addToCart={addToCart} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* ✅ ONE CartDrawer only — lives here, reads the ONE cart state */}
        <CartDrawer
          cart={cart}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          addToCart={addToCart}
        />

        <WhatsAppButton />
      </BrowserRouter>
    </CurrencyProvider>
  );
}

export default App;
