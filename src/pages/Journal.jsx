import React from "react";
import { Link } from "react-router-dom";
import "../styles/theme.css";
import "../styles/Journal.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import journalArticles from "../data/journalArticles";
import hass  from "../assets/images/Hass Avocado.jpeg";


/**
 * SkylerFresh — Journal listing page
 * First article = featured, next three = side posts, remaining six
 * fill the "Explore Our Latest Articles" grid. All content comes
 * from journalArticles.js — the detail page (JournalArticle.jsx)
 * reads from the same file, so listing and detail never drift apart.
 */

const [FEATURED, ...rest] = journalArticles;
const SIDE_POSTS = rest.slice(0, 3);
const ARTICLES = rest.slice(3, 9);

export default function Journal() {
  return (
    <>
      <Navbar />

      <div className="sf-root jn-page">
        {/* ── Header ── */}
        <header className="jn-header">
          <h1 className="jn-title">
            Our Insightful <em>Journal</em>
          </h1>
          <p className="jn-sub">
            Notes from the farms, the cold room, and the export desk 
            trends in flowers, herbs, and vegetables shaping what buyers
            are asking for this season.
          </p>
        </header>

        {/* ── Featured + side posts ── */}
        <section className="jn-feature-row">
          <Link to={`/journal/${FEATURED.slug}`} className="jn-feature">
            <img src={FEATURED.image} alt={FEATURED.title} loading="lazy" />
            <div className="jn-feature-scrim" />
            <div className="jn-feature-text">
              <h2>{FEATURED.title}</h2>
              <span className="jn-date">{FEATURED.date}</span>
              <p>{FEATURED.excerpt}</p>
            </div>
          </Link>

          <div className="jn-side-list">
            {SIDE_POSTS.map((p) => (
              <div className="jn-side-item" key={p.slug}>
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="jn-side-text">
                  <h3>{p.title}</h3>
                  <span className="jn-date">{p.date}</span>
                  <Link to={`/journal/${p.slug}`} className="jn-read-more">
                    Read More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Articles grid ── */}
        <section className="jn-articles">
          <div className="jn-articles-head">
            <h2>
              Explore Our Latest <em>Articles</em>
            </h2>
            <p>
              What's moving in Kenyan floriculture, herbs, and vegetable
              exports  straight from the field and the export desk.
            </p>
          </div>

          <div className="jn-articles-grid">
            {ARTICLES.map((a) => (
              <article className="jn-card" key={a.slug}>
                <img src={a.image} alt={a.title} loading="lazy" />
                <div className="jn-card-body">
                  <h3>{a.title}</h3>
                  <span className="jn-date">{a.date}</span>
                  <Link to={`/journal/${a.slug}`} className="jn-read-more">
                    Read More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="jn-view-all-wrap">
            <Link to="/journal/all" className="jn-view-all">View All Articles</Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}