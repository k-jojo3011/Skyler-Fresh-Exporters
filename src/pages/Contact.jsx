import { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-overlay">
          <div className="container">
            <h1>Contact Skyler Fresh Exporters</h1>
            <p>
              Premium Kenyan flowers delivered globally with reliability and care.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* LEFT */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              We are here to support your floral export needs. Reach out to us
              for inquiries, orders, or partnerships.
            </p>

            <div className="contact-block">
              <h3>Email</h3>
              <a href="mailto:marketing@skyler-fel.com">marketing@skyler-fel.com</a>
              <a href="mailto:sales@skyler-fel.com">sales@skyler-fel.com</a>
            </div>

            <div className="contact-block">
              <h3>Phone</h3>
              <a href="tel:+254721427329">+254 721 427 329</a>
            </div>

            <div className="contact-block">
              <h3>Location</h3>
              <a
                href="https://www.google.com/maps/place/Airport+North+Road,+Sphinx+Godowns,+Embakasi+district"
                target="_blank"
                rel="noreferrer"
              >
                Airport North Road, Sphinx Godowns, Embakasi district
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <h2>Send a Message</h2>

            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message" rows="6"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER NOTE */}
      <footer className="contact-footer">
        © 2025 Skyler Fresh Exporters. All rights reserved.
      </footer>
    </>
  );
}