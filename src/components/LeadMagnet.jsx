import React, { useState } from 'react';
import '../styles/theme.css';
import '../styles/LeadMagnet.css';

/**
 * SkylerFresh — Lead magnet callout
 * Audit Finding 3: "No downloadable resource that buyers would
 * exchange their email address for." This offers the Seasonal
 * Availability Guide the audit specifically suggests, and doubles
 * as the newsletter opt-in from Finding 3 / the expo section.
 * Drop into Shop, Journal, or as a homepage section.
 */

export default function LeadMagnet({
  variant = 'guide', // 'guide' | 'newsletter'
}) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const copy =
    variant === 'guide'
      ? {
          label: 'Free download',
          title: 'The Q3 Kenya Availability Guide',
          body:
            'What\u2019s in season, current lead times, and stem/weight ranges across every lot — one page, updated quarterly.',
          cta: 'Send me the guide',
        }
      : {
          label: 'Monthly, not weekly',
          title: 'What\u2019s in season, in your inbox',
          body:
            'A short note each month on what\u2019s moving, what\u2019s coming into bloom, and what\u2019s happening in Kenyan floriculture.',
          cta: 'Subscribe',
        };

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your actual mailing list provider.
    setSent(true);
  }

  return (
    <div className="sf-root sf-leadmagnet">
      <div className="sf-leadmagnet-text">
        <span className="sf-field-label">{copy.label}</span>
        <h3 className="sf-display sf-leadmagnet-title">{copy.title}</h3>
        <p className="sf-leadmagnet-body">{copy.body}</p>
      </div>

      {sent ? (
        <p className="sf-leadmagnet-confirm">
          Thanks — check your inbox shortly.
        </p>
      ) : (
        <form className="sf-leadmagnet-form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button type="submit">{copy.cta}</button>
        </form>
      )}
    </div>
  );
}