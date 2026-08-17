// src/components/FAQHomeSection.jsx
// Condensed FAQ preview for the homepage — dark section, centered
// header with a blue title badge, plus/minus toggles, first item
// open by default. Links through to /faq for everything else.

import React, { useState } from "react";
import "../styles/theme.css";
import "../styles/FAQHomeSection.css";

const PREVIEW_ITEMS = [
  {
    q: "Do you sell to individual customers, or only businesses?",
    a: "B2B only. We work with florists, wholesalers, retailers, and event buyers placing recurring or bulk orders we don't handle single-stem or retail sales.",
  },
  {
    q: "How is cold chain maintained from farm to airport?",
    a: "Stems and herbs are pre-cooled within two hours of cutting, held in temperature-controlled storage, and packed for cargo just ahead of departure cold chain isn't broken at any handoff.",
  },
  {
    q: "Which airports and routes do you ship to?",
    a: "Primarily out of Jomo Kenyatta International to major hubs in Europe and the Middle East. Ask your account manager about a specific destination  most routes are supportable.",
  },
  {
    q: "Is there a minimum order size?",
    a: "Minimums vary by lot and are set with your account manager based on the product and freight route. Ask when you request a quote and we'll confirm against current availability.",
  },
  {
    q: "How far ahead should I place a recurring order?",
    a: "For standing weekly or biweekly orders, confirm your schedule at least one cutting cycle ahead  roughly 5–7 days so farms can plan volume against your order.",
  },
];

function FAQPreviewItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`fh-item${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="fh-q"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="fh-q-text">{q}</span>
        <span className="fh-icon" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="fh-a">{a}</p>}
    </div>
  );
}

export default function FAQHomeSection() {
  return (
    <section className="fh-section">
      <div className="fh-head">
        <span className="fh-title-badge">Frequently Asked Questions</span>
        <p className="fh-sub">
          Answered the questions buyers ask most. Still not sure?
          <br />
          Feel free to contact the export desk.
        </p>
      </div>

      <div className="fh-list">
        {PREVIEW_ITEMS.map((item, i) => (
          <FAQPreviewItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
        ))}
      </div>

      <a href="/faq" className="fh-view-all">View all FAQs →</a>
    </section>
  );
}