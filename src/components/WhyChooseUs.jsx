// src/components/WhyChooseUs.jsx
import "../styles/WhyChooseUs.css";

export default function WhyChooseUs() {
    return (
        <section className="wcu-section">
            <div className="wcu-container">

                <p className="wcu-eyebrow">Why Choose Us</p>

                <h2 className="wcu-title">
                    Freshness you can trust,<br />
                    <span>quality you can feel</span>
                </h2>

                <p className="wcu-subtitle">
                    We go beyond delivering flowers  we deliver freshness, reliability,
                    and care from farm to your doorstep.
                </p>

                <div className="wcu-grid">

                    <div className="wcu-card">
                        <span className="wcu-icon">🌿</span>
                        <h3>Direct from Farms</h3>
                        <p>Harvested fresh from Kenya’s finest growers for maximum freshness.</p>
                    </div>
                    <div className="wcu-card">
                        <span className="wcu-icon">✈️</span>
                        <h3>Global Export</h3>
                        <p>
                            We deliver fresh flowers, herbs, and vegetables to clients across
                            international markets with reliable logistics.
                        </p>
                    </div>

                    <div className="wcu-card">
                        <span className="wcu-icon">❄️</span>
                        <h3>Cold Chain Freshness</h3>
                        <p>
                            Temperature-controlled handling ensures every product arrives fresh and
                            farm-perfect.
                        </p>
                    </div>

                    <div className="wcu-card">
                        <span className="wcu-icon">🌿</span>
                        <h3>Premium Quality</h3>
                        <p>
                            Carefully selected produce meeting strict export standards and grading
                            consistency.
                        </p>
                    </div>

                    <div className="wcu-card">
                        <span className="wcu-icon">🌎</span>
                        <h3>Worldwide Reach</h3>
                        <p>
                            Serving wholesalers, florists, and retailers across Europe, Middle East,
                            and beyond.
                        </p>
                    </div>
                </div>

        

            </div>
        </section>
    );
}