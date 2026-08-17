import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Journal from "./pages/Journal";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import JournalArticle from "./pages/JournalArticle";
import SignatureProductDetail from "./pages/SignatureProductDetail";


import CartDrawer from "./components/CartDrawer";
import WhatsAppButton from "./components/WhatsAppButton";


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

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
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
        <Route path="/about" element={<About />} />
        <Route path="/productpage" element={<ProductPage />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal/>} />
        <Route path="/journal/:slug" element={<JournalArticle />} />
        <Route path="/signature/:id" element={<SignatureProductDetail />} />
        <Route path="/faq" element={<FAQ/>}/>

        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    

      <CartDrawer
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />

      <WhatsAppButton />
    </>
  );
}

export default App;