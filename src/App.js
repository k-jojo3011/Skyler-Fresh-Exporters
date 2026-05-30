import { useState } from "react";
import "./styles/global.css";

import Home from "./pages/Home";
import CartDrawer from "./components/CartDrawer";
import { CurrencyProvider } from "./context/CurrencyContext";

export default function App() {
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

  const updateQuantity = (id, action) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        if (action === "increase") {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return {
          ...item,
          quantity: Math.max(1, item.quantity - 1),
        };
      })
    );
  };

  return (
    <CurrencyProvider>
      <Home
        cart={cart}
        addToCart={addToCart}
        setCartOpen={setCartOpen}
      />

      <CartDrawer
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        addToCart={addToCart}
      />
    </CurrencyProvider>
  );
}