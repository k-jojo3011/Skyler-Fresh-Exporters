import React, { useState } from 'react';
import '../styles/theme.css';
import '../styles/FAQ.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * SkylerFresh — FAQ page
 * Hero banner + two-column layout: accordion list on the left,
 * a "get in touch" enquiry card on the right. No Benefits/What We
 * Do section — Navbar and Footer render instead.
 */

const QUESTIONS = [
  {
    q: 'Do you sell to individual customers, or only businesses?',
    a: "B2B only. We work with florists, wholesalers, retailers, and event buyers placing recurring or bulk orders we don't handle single-stem or retail sales.",
  },
  {
    q: 'Is there a minimum order size?',
    a: "Minimums vary by lot and are set with your account manager based on the product and freight route. Ask when you request a quote and we'll confirm against current availability.",
  },
  {
    q: 'How is cold chain maintained from farm to airport?',
    a: "Stems and herbs are pre-cooled within two hours of cutting, held in temperature-controlled storage, and packed for cargo just ahead of departure cold chain isn't broken at any handoff.",
  },
  {
    q: 'What happens if a shipment arrives below spec?',
    a: 'Flag it with photos within 24 hours of arrival. Our export desk reviews against the manifest and farm records for that lot and resolves credit or replacement case by case.',
  },
  {
    q: 'Which airports and routes do you ship to?',
    a: 'Primarily out of Jomo Kenyatta International to major hubs in Europe and the Middle East. Ask your account manager about a specific destination most routes are supportable.',
  },
  {
    q: 'How far ahead should I place a recurring order?',
    a: 'For standing weekly or biweekly orders, confirm your schedule at least one cutting cycle ahead  roughly 5–7 days  so farms can plan volume against your order.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`fq-item${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="fq-q"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="fq-q-text">{q}</span>
        <span className="fq-chevron" aria-hidden="true">⌄</span>
      </button>
      {open && <p className="fq-a">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your enquiry pipeline / CRM.
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <div className="fq-page">
        {/* ── Hero ── */}
        <header
          className="fq-hero"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&q=80)' }}
        >
          <div className="fq-hero-scrim" />
          <h1 className="fq-hero-title">FAQ</h1>
        </header>

        {/* ── Questions + contact card ── */}
        <section className="fq-main">
          <div className="fq-left">
            <span className="fq-eyebrow">Questions/Answers</span>
            <h2 className="fq-title">
              Frequently Asked <em>Questions</em>
            </h2>
            <p className="fq-lede">
              The questions procurement teams usually ask before onboarding a
              new supplier. Anything missing goes straight to the export desk.
            </p>

            <div className="fq-list">
              {QUESTIONS.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>

          <div className="fq-card">
            <div className="fq-card-head">Any Questions? Ask Us!!</div>

            {submitted ? (
              <div className="fq-card-success">
                <p>Thanks — the export desk will reply within one business day.</p>
              </div>
            ) : (
              <form className="fq-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name*" required />
                <input type="email" placeholder="Your Email*" required />
                <input type="tel" placeholder="Mobile Number" />
                <textarea placeholder="Enter your message*" rows="5" required />
                <button type="submit">Submit Question</button>
              </form>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}