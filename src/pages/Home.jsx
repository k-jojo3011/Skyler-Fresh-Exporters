// src/pages/Home.jsx
// ✅ NO cart state here — all cart logic lives in App.js
// Home just receives addToCart, cartCount, openCart as props

import { useCurrency } from "../context/CurrencyContext";
import Navbar             from "../components/Navbar";
import HeroSection        from "../components/HeroSection";
import CategorySection    from "../components/CategorySection";
import FlowerStory        from "../components/FlowerStory";
import ProductGrid        from "../components/ProductGrid";
import AboutSection       from "../components/AboutSection";
import JournalSection     from "../components/JournalSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection  from "../components/NewsletterSection";
import Footer             from "../components/Footer";

// ✅ Props come from App.js — no useState for cart here
export default function Home({ addToCart, cartCount, openCart }) {
  const { currencyCode, setCurrencyCode } = useCurrency();

  return (
    <>
      <Navbar
        cartCount={cartCount}
        openCart={openCart}
        currency={currencyCode}
        setCurrency={setCurrencyCode}
      />

      <main className="page-layout">
        <HeroSection />

        {/* ✅ addToCart passed straight through — no wrapper needed */}
        <CategorySection addToCart={addToCart} />
        <FlowerStory />
        <ProductGrid addToCart={addToCart} />
        <AboutSection />
        <JournalSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>

      <Footer />

      {/* ✅ NO CartDrawer here — it lives in App.js */}
    </>
  );
}
