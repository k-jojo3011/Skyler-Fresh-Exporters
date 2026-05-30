// src/pages/Home.jsx
import { useState } from "react";
import { useCurrency } from "../context/CurrencyContext";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import FlowerStory from "../components/FlowerStory";
import ProductGrid from "../components/ProductGrid";
import AboutSection from "../components/AboutSection";
import JournalSection from "../components/JournalSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const { currencyCode, setCurrencyCode } = useCurrency();

    const cartCount = cart.reduce(
        (total, item) => total + (item.quantity || 1),
        0
    );
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    // ADD TO CART
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });

        setIsOpen(true);
    };

    // REMOVE
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // UPDATE QUANTITY (SAFE)
    const updateQty = (id, qty) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, qty) }
                    : item
            )
        );
    };

    // CartDrawer adapter
    function updateQuantity(id, direction) {
        const item = cart.find(i => i.id === id);
        if (!item) return;

        if (direction === "increase") {
            updateQty(id, item.quantity + 1);
        }

        if (direction === "decrease") {
            updateQty(id, item.quantity - 1);
        }
    }

    function removeById(id) {
        removeFromCart(id);
    }

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
               <CategorySection addToCart={addToCart} />
                <FlowerStory />
                <ProductGrid addToCart={addToCart} />
                <AboutSection />
                <JournalSection />
                <TestimonialsSection />
                <NewsletterSection />


            </main>

            <Footer />

            <CartDrawer
                cart={cart}
                cartOpen={isOpen}
                setCartOpen={(val) => (val ? openCart() : closeCart())}
                removeFromCart={removeById}
                updateQuantity={updateQuantity}
                addToCart={addToCart}
            />
        </>
    );
}