// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { useCurrency } from "../context/CurrencyContext";
import "../styles/Navbar.css";

function Navbar({ cartCount, openCart }) {
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { currencyCode, setCurrencyCode, currencies } = useCurrency();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCurrencyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const active = currencies.find(c => c.code === currencyCode) || currencies[0];

  return (
    <>
      {/* TOP BAR */}
      <div className="topBar">
        <p>🌿 Fresh Premium Produce Delivered Worldwide</p>
      </div>

      {/* MAIN NAVBAR */}
      <header className="modernNavbar">

        {/* HAMBURGER */}
        <button
          className={`navHamburger ${menuOpen ? "navHamburger--open" : ""}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {/* LOGO */}
        <div className="navLogo">SKYLER <span>FRESH</span></div>

        {/* CENTER LINKS */}
        <nav className={`navCenter ${menuOpen ? "navCenter--open" : ""}`}>
          <a href="#"        onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#shop"    onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#about"   onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#journal" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#faq"     onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        {/* RIGHT ICONS */}
        <div className="navRight">

          {/* ── CURRENCY DROPDOWN ── */}
          <div className="currencyWrap" ref={dropdownRef}>
            <button
              className={`navIconBtn navCurrency ${currencyOpen ? "navCurrency--open" : ""}`}
              onClick={() => setCurrencyOpen(v => !v)}
              aria-label="Select currency"
              aria-expanded={currencyOpen}
            >
              {/* Globe icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>

              <span className="currencyCode">{active.code}</span>

              {/* Chevron */}
              <svg
                className={`chevron ${currencyOpen ? "chevron--up" : ""}`}
                width="10" height="10" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            {/* Dropdown */}
            {currencyOpen && (
              <div className="currencyDropdown">
                {currencies.map(cur => (
                  <button
                    key={cur.code}
                    className={`currencyOption ${cur.code === currencyCode ? "currencyOption--active" : ""}`}
                    onClick={() => { setCurrencyCode(cur.code); setCurrencyOpen(false); }}
                  >
                    <span className="curSymbol">{cur.symbol}</span>
                    <span className="curInfo">
                      <span className="curCode">{cur.code}</span>
                      <span className="curLabel">{cur.label}</span>
                    </span>
                    {cur.code === currencyCode && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a6abf" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="navDivider" />

          {/* Search */}
          <button className="navIconBtn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>

          {/* Account */}
          <button className="navIconBtn" aria-label="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>

          {/* Cart */}
          <button className="navIconBtn navCartBtn" aria-label="Cart" onClick={openCart}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && <span className="cartBadge">{cartCount}</span>}
          </button>

        </div>
      </header>

      {menuOpen && <div className="navOverlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

export default Navbar;
