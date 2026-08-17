// src/components/WhyChooseUs.jsx
import "../styles/WhyChooseUs.css";

const FEATURES = [
    {
        icon: "🌿",
        title: "Direct From Named Farms",
        body: "Every lot lists exactly which partner farm it came from no blind sourcing.",
    },
    {
        icon: "⏱️",
        title: "We Answer Fast",
        body: "Quote requests go to the export desk, not a queue confirmed within one business day.",
    },
    {
        icon: "❄️",
        title: "Cold Chain We Own",
        body: "Pre-cooling and grading happen on our schedule the two hours after cutting decide quality.",
    },
    {
        icon: "📋",
        title: "Graded to Spec",
        body: "Stem length and weight confirmed against your order before it ships, not discovered on arrival.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="wcu">
            <div className="wcu-inner">

                {/* ── Left: eyebrow, heading, copy, CTA ── */}
                <div className="wcu-left">
                    <p className="wcu-eyebrow">
                        Features
                        <span className="wcu-eyebrow-line" />
                    </p>
                    <h2 className="wcu-title">
                        Why Buyers <em>Choose Skyler Fresh</em>
                    </h2>
                    <p className="wcu-body">
                        Late deliveries and inconsistent stem counts are the norm buyers
                        put up with from Kenya. We work direct with named growers, run
                        our own cold chain, and confirm every order within one business
                        day built for buyers who need to plan a season, not gamble on
                        one order.
                    </p>
                    <a href="/product" className="wcu-cta">See Current Availability</a>
                </div>

                {/* ── Right: two-column feature list ── */}
                <div className="wcu-features">
                    <div className="wcu-features-col">
                        {FEATURES.slice(0, 2).map((f) => (
                            <div className="wcu-feature-item" key={f.title}>
                                <div className="wcu-feature-icon">{f.icon}</div>
                                <div className="wcu-feature-text">
                                    <h4>{f.title}</h4>
                                    <p>{f.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="wcu-features-col">
                        {FEATURES.slice(2, 4).map((f) => (
                            <div className="wcu-feature-item" key={f.title}>
                                <div className="wcu-feature-icon">{f.icon}</div>
                                <div className="wcu-feature-text">
                                    <h4>{f.title}</h4>
                                    <p>{f.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}