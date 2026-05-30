import { useState, useEffect } from "react";
import bgImage from "../assets/images/PlayaBlanca.jpg";

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

const ts = {
    section: {
        position: "relative",
        padding: "100px 20px",
        textAlign: "center",
        overflow: "hidden",
        color: "#fff",
    },

    bg: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0,
    },
    overlay: {
        position: "absolute",
        inset: 0,
        background:
            "linear-gradient(180deg, rgba(65,112,205,0.25), rgba(255,255,255,0.05))",
        zIndex: 1,
    },
    content: {
        position: "relative",
        zIndex: 2,
    },

    header: { marginBottom: "50px" },

    subheading: {
        fontSize: "13px",
        letterSpacing: "3px",
        color: "#ddd",
        textTransform: "uppercase",
    },

    title: {
        fontSize: "42px",
        color: "#fff",
        marginTop: "10px",
        fontFamily: "Georgia, serif",
    },

    slider: {
        width: "100%",
        overflow: "hidden",
        maxWidth: "900px",
        margin: "0 auto",
    },

    track: {
        display: "flex",
        transition: "transform 0.5s ease",
    },

    slide: {
        minWidth: "100%",
        padding: "40px",
        boxSizing: "border-box",
    },

    stars: {
        color: "#D4AF37",
        fontSize: "22px",
        marginBottom: "20px",
    },

    quote: {
        fontSize: "22px",
        lineHeight: "1.8",
        fontStyle: "italic",
        marginBottom: "30px",
    },

    name: { fontSize: "20px", color: "#fff", marginBottom: "8px" },

    location: { color: "#ccc", fontSize: "14px" },

    dots: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "30px",
    },

    dot: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        cursor: "pointer",
    },

    arrows: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginTop: "30px",
    },

    btn: {
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.4)",
        background: "transparent",
        color: "#fff",
        cursor: "pointer",
        fontSize: "18px",
    },
};

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);

    const next = () =>
        setCurrent((c) => (c + 1) % testimonials.length);

    const prev = () =>
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const t = setInterval(next, 5000);
        return () => clearInterval(t);
    }, []);

    return (
        <section style={ts.section}>
            {/* BACKGROUND IMAGE */}
            <img src={bgImage} alt="farm background" style={ts.bg} />

            {/* DARK OVERLAY */}
            <div style={ts.overlay}></div>

            {/* CONTENT */}
            <div style={ts.content}>
                <div style={ts.header}>
                    <p style={ts.subheading}>What our clients say</p>
                    <h2 style={ts.title}>Testimonials</h2>
                </div>

                <div style={ts.slider}>
                    <div
                        style={{
                            ...ts.track,
                            transform: `translateX(-${current * 100}%)`,
                        }}
                    >
                        {testimonials.map((t, i) => (
                            <div key={i} style={ts.slide}>
                                <div style={ts.stars}>{"★".repeat(t.stars)}</div>
                                <blockquote style={ts.quote}>"{t.quote}"</blockquote>
                                <h3 style={ts.name}>{t.name}</h3>
                                <p style={ts.location}>{t.location}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={ts.dots}>
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setCurrent(i)}
                            style={{
                                ...ts.dot,
                                background: i === current ? "#D4AF37" : "#555",
                            }}
                        />
                    ))}
                </div>

                <div style={ts.arrows}>
                    <button style={ts.btn} onClick={prev}>←</button>
                    <button style={ts.btn} onClick={next}>→</button>
                </div>
            </div>
        </section>
    );
}