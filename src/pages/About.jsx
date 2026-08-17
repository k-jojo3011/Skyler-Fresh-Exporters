import React from "react";
import "../styles/theme.css";
import "../styles/About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import flower from "../assets/images/FlowerA.jpeg";
import storage from "../assets/images/Cld-Room.JPG";

/**
 * SkylerFresh — About page
 * Hero split (intro + stats + photo) → Mission split (photo + checklist)
 * → Vision block → Core Values (card grid) → Meet the Team (photo grid).
 *
 * Team names/photos below are placeholders — swap for real people
 * before publishing. Stats used are either counted facts already
 * established elsewhere on the site (4 partner farms) or process
 * commitments (response time, cold-chain window), not invented
 * track-record numbers.
 */

const STATS = [
  { value: "4", label: "Partner farms" },
  { value: "<48h", label: "Farm to cargo hold" },
  { value: "1 day", label: "Quote response time" },
];

const MISSION_POINTS = [
  "Named partner farms, never blind sourcing",
  "Cold chain we run ourselves, start to finish",
  "One-business-day response on every quote",
  "Graded to spec before it ships",
  "Built for recurring orders, not one-offs",
  "B2B only — no retail minimums in the way",
];

const CORE_VALUES = [
  {
    title: "Transparency",
    detail: "Every lot names its farm of origin — no anonymous sourcing.",
    featured: true,
  },
  {
    title: "Reliability",
    detail: "Confirmed volume and freight timing, not best-effort guesses.",
  },
  {
    title: "Quality",
    detail: "Grading happens by hand, stem by stem, against your spec.",
  },
  {
    title: "Sustainability",
    detail: "Working toward recycled and biodegradable packaging across every shipment.",
  },
  {
    title: "Partnership",
    detail: "Buyers get a named contact on the export desk, not a ticket queue.",
  },
  {
    title: "Speed",
    detail: "Pre-cooling within two hours of cutting, every time.",
  },
];

// Placeholder team — swap names, roles, and emoji for real people once
// you have actual photos. Emoji used deliberately instead of stock
// photos so nothing here reads as a real person until it is one.
const TEAM = [
  {
    name: "Team Member Name",
    role: "Founder & CEO",
    emoji: "👩🏽‍💼",
  },
  {
    name: "Team Member Name",
    role: "Head of Export Operations",
    emoji: "👨🏿‍💼",
  },
  {
    name: "Team Member Name",
    role: "Farm Partnerships Lead",
    emoji: "🧑🏾‍🌾",
  },
  {
    name: "Team Member Name",
    role: "Logistics Manager",
    emoji: "👩🏻‍✈️",
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      <div className="ab-page">

        {/* ── Hero split ── */}
        <section className="ab-hero">
          <div className="ab-hero-text">
            <span className="ab-eyebrow">About Us</span>
            <h1 className="ab-h1">About SkylerFresh</h1>
            <p className="ab-lede">
              SkylerFresh is a B2B export house working directly with growers
              across Kenya's flower, herb, and vegetable regions  built for
              buyers who need a supplier they can plan a season around, not
              just place one order with.
            </p>
            <div className="ab-hero-actions">
              <a href="/productpage" className="ab-btn-primary">See Current Availability</a>
              <a href="/contact" className="ab-btn-outline">Talk to the Export Desk</a>
            </div>

            <div className="ab-stats">
              {STATS.map((s) => (
                <div className="ab-stat" key={s.label}>
                  <span className="ab-stat-value">{s.value}</span>
                  <span className="ab-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ab-hero-media">
            <img
              src={flower}
              alt="SkylerFresh farm"
            />
          </div>
        </section>

        {/* ── Mission split ── */}
        <section className="ab-split">
          <div className="ab-split-media">
            <img
              src={storage}
              alt="SkylerFresh packing floor"
            />
          </div>

          <div className="ab-split-text">
            <span className="ab-eyebrow">Our Mission</span>
            <h2 className="ab-h2">
              Make Kenyan exports something buyers can build a business around.
            </h2>
            <p className="ab-p">
         We turn exceptional produce into enduring partnerships by combining disciplined execution ,transparent trade and a
commitment to sharing value across the journey from farm to market.
            </p>

            <div className="ab-checklist">
              {MISSION_POINTS.map((point) => (
                <div className="ab-check-item" key={point}>
                  <span className="ab-check-icon">✓</span>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vision ── */}
        <section className="ab-vision">
          <span className="ab-eyebrow">Our Vision</span>
          <h2 className="ab-h2">
            To be the Kenyan export partner buyers name first.
          </h2>
          <p className="ab-p ab-vision-p">
        Our aim is to craft supply chains in which every shipment  leaves growers, customers , and communities
stronger than before.
          </p>
        </section>

        {/* ── Core Values ── */}
        <section className="ab-values">
          <div className="ab-values-head">
            <span className="ab-eyebrow">Core Values</span>
            <h2 className="ab-h2">What We Won't Compromise On</h2>
            <p className="ab-p">
              Six principles that shape how every farm relationship, shipment,
              and buyer conversation gets handled.
            </p>
          </div>

          <div className="ab-values-grid">
            {CORE_VALUES.map((v) => (
              <div className={`ab-value-card${v.featured ? " is-featured" : ""}`} key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Meet the Team ── */}
        <section className="ab-team">
          <div className="ab-team-head">
            <span className="ab-eyebrow">Meet Our Team</span>
            <h2 className="ab-h2">The People Behind the Export Desk</h2>
          </div>

          <div className="ab-team-grid">
            {TEAM.map((member) => (
              <div className="ab-team-card" key={member.role}>
                <div className="ab-team-avatar" aria-hidden="true">{member.emoji}</div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}