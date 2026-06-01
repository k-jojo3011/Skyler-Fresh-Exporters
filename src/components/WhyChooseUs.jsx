// src/components/WhyChooseUs.jsx
import { useState } from "react";
import aboutImg from "../assets/images/flowers.jpeg";
import "../styles/WhyChooseUs.css";

export default function WhyChooseUs() {
    const [activeTab, setActiveTab] = useState("Freshness");

    return (
        <section className="wcu">

            {/* ── Hero split ── */}
            <div className="wcu-hero">
                <div className="wcu-img-wrap">
                    <img src={aboutImg} alt="Fresh flowers farm Kenya" />

                    <div className="wcu-img-accent" />
                </div>

                <div className="wcu-hero-right">
                    <p className="wcu-eyebrow">This business was built</p>
                    <h2 className="wcu-title">
                        Why<em>Choose Us</em>
                    </h2>
                    <p className="wcu-body">
                        The beauty of Kenya's highlands and the dedication of our growers
                        make us who we are. This powerful connection with the land means we
                        deliver freshness, reliability, and care from farm to your doorstep.
                    </p>
                    <div className="wcu-tabs">
                        {["Freshness", "Quality"].map((tab) => (
                            <div
                                key={tab}
                                className={`wcu-tab${activeTab === tab ? " active" : ""}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Cards ── */}
            <div className="wcu-grid">
                <div className="wcu-card">
                    <div className="wcu-num">01</div>
                    <div className="wcu-icon">🌿</div>
                    <h3>Direct from <em>Farms</em></h3>
                    <p>Harvested fresh from Kenya's finest highland growers for maximum bloom life and fragrance.</p>
                </div>
                <div className="wcu-card">
                    <div className="wcu-num">02</div>
                    <div className="wcu-icon">✈️</div>
                    <h3><em>Global</em> Export</h3>
                    <p>We deliver fresh flowers, herbs, and vegetables to international markets with reliable logistics.</p>
                </div>
                <div className="wcu-card">
                    <div className="wcu-num">03</div>
                    <div className="wcu-icon">❄️</div>
                    <h3>Cold Chain <em>Freshness</em></h3>
                    <p>Temperature-controlled handling ensures every product arrives farm-perfect, every time.</p>
                </div>
            </div>

            <div className="wcu-bottom-row">
                <div className="wcu-card">
                    <div className="wcu-num">04</div>
                    <div className="wcu-icon">🌸</div>
                    <h3><em>Premium</em> Quality</h3>
                    <p>Carefully selected produce meeting strict export standards and grading consistency.</p>
                </div>
                <div className="wcu-card">
                    <div className="wcu-num">05</div>
                    <div className="wcu-icon">🌎</div>
                    <h3>Worldwide <em>Reach</em></h3>
                    <p>Serving wholesalers, florists, and retailers across Europe, Middle East, and beyond.</p>
                </div>
            </div>

            {/* ── Stats strip ── */}
            {/* <div className="wcu-strip">
                <div className="wcu-stat">
                    <div className="wcu-stat-val">100<span>%</span></div>
                    <div className="wcu-stat-lbl">Farm Fresh</div>
                </div>
                <div className="wcu-sdiv" />
                <div className="wcu-stat">
                    <div className="wcu-stat-val">48<span>h</span></div>
                    <div className="wcu-stat-lbl">Farm to Flight</div>
                </div>
                <div className="wcu-sdiv" />
                <div className="wcu-stat">
                    <div className="wcu-stat-val">30<span>+</span></div>
                    <div className="wcu-stat-lbl">Countries Served</div>
                </div>
                <div className="wcu-sdiv" />
                <div className="wcu-stat">
                    <div className="wcu-stat-val"><span>∞</span></div>
                    <div className="wcu-stat-lbl">Quality Promise</div>
                </div>
            </div>*/}

        </section>
    );
}