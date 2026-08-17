import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/theme.css";
import "../styles/Journal.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import journalArticles from "../data/journalArticles";
import hass  from "../assets/images/Hass Avocado.jpeg";

/**
 * SkylerFresh — Journal article detail page
 * Route this at /journal/:slug in your router. Pulls its content
 * from the same journalArticles data file the listing page uses,
 * so there's one source of truth instead of duplicated copy.
 */
export default function JournalArticle() {
  const { slug } = useParams();
  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="sf-root jn-page">
          <div className="jn-notfound">
            <h1>Article not found</h1>
            <p>That journal entry doesn't exist, or the link is out of date.</p>
            <Link to="/journal" className="jn-view-all">Back to the Journal</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const related = journalArticles
    .filter((a) => a.slug !== article.slug && a.tag === article.tag)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <div className="sf-root jn-page">
        <article className="jn-article">
          <Link to="/journal" className="jn-back">← Back to the Journal</Link>

          <span className="jn-article-tag">{article.tag}</span>
          <h1 className="jn-article-title">{article.title}</h1>
          <span className="jn-date">{article.date}</span>

          <div className="jn-article-hero">
            <img src={article.image} alt={article.title} />
          </div>

          <div className="jn-article-body">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <section className="jn-articles">
            <div className="jn-articles-head">
              <h2>More on <em>{article.tag}</em></h2>
            </div>
            <div className="jn-articles-grid">
              {related.map((a) => (
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
          </section>
        )}
      </div>

      <Footer />
    </>
  );
}