import { useState } from "react";
import bgImage from "../assets/images/Dreamland.jpeg";
import "../styles/TestimonialsSection.css";

const testimonials = [
    {
        stars: 5,
        quote:
            "Skyler Fresh Exporters consistently delivers premium fresh flowers. Their roses and seasonal blooms are always vibrant, long-lasting, and handled with great care from farm to export.",
        name: "Olivia Wilson",
        location: "London, UK",
    },
    {
        stars: 5,
        quote:
            "We trust Skyler for our avocado supply and herbs. The produce is always fresh, well-packed, and delivered on time. Their quality standards are exceptional.",
        name: "David Ochieng",
        location: "Mombasa, Kenya",
    },
    {
        stars: 5,
        quote:
            "Their floral arrangements and farm produce consistently exceed expectations. Every delivery reflects professionalism, reliability, and true export-grade quality.",
        name: "Tracy Mwende",
        location: "Nairobi, Kenya",
    },
    {
        stars: 5,
        quote:
            "From flowers to herbs and fresh produce, Skyler has proven to be a dependable partner. The freshness and consistency make them stand out globally.",
        name: "James Kiplagat",
        location: "Nakuru, Kenya",
    },
];

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);
    const current = testimonials[active];

    return (
        <section className="fam">
            <div className="fam-inner">
                <div className="fam-media">
                    <img src={bgImage} alt="Skyler Fresh farm" />
                </div>

                <div className="fam-content">
                    <p className="fam-eyebrow">What Our Clients Say</p>
                    <h2 className="fam-title">Testimonials</h2>

                    {/* key={active} forces a remount so the fade/slide animation replays on every switch */}
                    <div className="fam-text" key={active}>
                        <p className="fam-quote">"{current.quote}"</p>
                        <p className="fam-attribution">{current.name} — {current.location}</p>
                    </div>

                    <div className="fam-tabs">
                        {testimonials.map((t, i) => (
                            <button
                                key={t.name}
                                type="button"
                                className={`fam-tab${active === i ? " is-active" : ""}`}
                                onClick={() => setActive(i)}
                            >
                                <span className="fam-tab-line" />
                                <span className="fam-tab-label">{t.name.split(" ")[0]}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}