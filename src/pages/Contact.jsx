import { useState } from "react";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-hero-text">
            <h1>Contact Us</h1>
            <div className="contact-breadcrumb">
              <a href="/">Home</a>
              <span>›</span>
              <span>Contact Us</span>
            </div>
          </div>
          <div className="contact-hero-media">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&q=80"
              alt="Skyler Fresh export essentials"
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* LEFT */}
          <div
            className="contact-info"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487070183336-b863922373d4?w=900&q=80)' }}
          >
            <div className="contact-info-scrim" />
            <div className="contact-info-content">
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
              <a href="tel:+254721427329">+254 719 166 196</a>
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

      {/* MAP */}
      <section className="contact-map">
        <iframe
          title="Skyler Fresh Exporters location"
          src="https://www.google.com/maps?q=Airport+North+Road,+Sphinx+Godowns,+Embakasi+district,+Nairobi&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </>
  );
}





