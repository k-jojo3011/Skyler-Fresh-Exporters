// App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import Contact from "./pages/Contact";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, type) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (type === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          }

          if (type === "decrease") {
            return {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            };
          }
        }
        return item;
      })
    );
  };

  const cartCount = cart.reduce((a, b) => a + b.quantity, 0);

  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
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

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* GLOBAL CART (always visible) */}
      <CartDrawer
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <WhatsAppButton /> 
    </BrowserRouter>
  );
}

export default App;