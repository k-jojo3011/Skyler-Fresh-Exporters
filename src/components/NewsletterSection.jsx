import { useState } from "react";
import "../styles/NewsletterSection.css";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) return;

    setSubmitted("Thank you for joining our community.");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Join Our Community</h2>

        <p className="newsletter-description">
          Be the first to discover fresh arrivals, seasonal offers, and
          exclusive updates from <strong>Skyler Fresh</strong>.
        </p>

        {submitted ? (
          <p className="newsletter-success">{submitted}</p>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}