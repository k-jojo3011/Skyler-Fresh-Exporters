// src/components/NewsletterSection.jsx
import { useState } from "react";
import "../styles/NewsletterSection.css";

export default function NewsletterSection() {
  const [email, setEmail]       = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]       = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-inner">

        {/* Left — text */}
        <div className="newsletter-text">
          <p className="newsletter-eyebrow">JOIN THE SKYLER FRESH COMMUNITY</p>
          <h2>
            Get <em>10% Off</em><br />Your First Order
          </h2>
          <p className="newsletter-sub">
            Sign up for weekly farm updates, seasonal picks, new arrivals
            and exclusive offers. 
          </p>

          <ul className="newsletter-perks">
            <li>
              <span className="perk-icon">✓</span>
              10% off your very first order
            </li>
            <li>
              <span className="perk-icon">✓</span>
              Weekly harvest updates & seasonal picks
            </li>
            <li>
              <span className="perk-icon">✓</span>
              Early access to new arrivals & bundles
            </li>
          </ul>
        </div>

        {/* Right — form */}
        <div className="newsletter-form-wrap">
          {submitted ? (
            <div className="newsletter-success">
              <span className="success-icon">🎉</span>
              <h3>You're in!</h3>
              <p>
                Check your inbox  your 10% off code is on its way.
                Welcome to the SkylerFresh family.
              </p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="nl-first-name">First Name</label>
              <input
                id="nl-first-name"
                type="text"
                placeholder="e.g. Amina"
                autoComplete="given-name"
              />

              <label htmlFor="nl-email">Email Address *</label>
              <input
                id="nl-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />

              {error && <p className="newsletter-error">{error}</p>}

              <button type="submit" className="newsletter-btn">
                SUBSCRIBE &amp; GET 10% OFF
              </button>

              <p className="newsletter-fine">
                By subscribing you agree to receive marketing emails from SkylerFresh.
                You can unsubscribe at any time.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
