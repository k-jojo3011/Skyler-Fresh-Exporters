// src/components/AboutSection.jsx
import "../styles/AboutSection.css";
import flowersImg from "../assets/images/Skyler-Sig-01.png";
import aboutImg from "../assets/images/flowers.jpeg"; 

// Uncomment when you have real images:
// import farmImg   from "../assets/images/about-farm.jpg";
// import team1Img  from "../assets/images/team-1.jpg";

const timeline = [
    { year: "2018", title: "Family Farm, Limuru", desc: "Started as a 2-acre plot with roses and sukuma wiki, growing for local Nairobi markets.", icon: "🌱" },
    { year: "2020", title: "Nairobi Delivery", desc: "Launched same-day home delivery across all Nairobi neighbourhoods.", icon: "🚚" },
    { year: "2022", title: "Farmer Network", desc: "Partnered with 30+ smallholder farmers across Central Kenya.", icon: "🤝" },
    { year: "2025", title: "5,000+ Households", desc: "Serving over 5,000 Nairobi families with fresh produce every month.", icon: "🏆" },
];

const stats = [
    { value: "30+", label: "Partner Farmers" },
    { value: "5,000+", label: "Happy Households" },
    { value: "7", label: "Years Growing" },
    { value: "4", label: "Product Categories" },
];

const team = [
    { name: "Amina Wanjiku", role: "Founder & Head Grower", emoji: "👩🏾‍🌾" },
    { name: "David Kamau", role: "Delivery & Logistics Lead", emoji: "👨🏾‍💼" },
    { name: "Grace Njeri", role: "Flower & Herb Specialist", emoji: "👩🏾‍🔬" },
];

export default function AboutSection() {
    return (
        <div className="about-page" id="about">

            {/* 1. HERO */}
            {/*
<section className="about-hero">
    <div className="about-hero-bg">
        <div className="about-hero-placeholder">🌿</div>
    </div>

    <div className="about-hero-overlay">
        <p className="about-eyebrow">OUR STORY</p>
        <h1>
            Rooted in<br /><em>Kenyan Soil</em>
        </h1>
        <p className="about-hero-sub">
            Rooted in our family farm in Nairobi and trusted by customers worldwide,
            SkylerFresh brings the finest fresh produce from Kenya to tables across the globe.
        </p>
    </div>
</section>
*/}

            {/* 2. MISSION */}
            <section className="about-mission">
                <div className="about-mission-inner">
                    <div className="about-mission-img">
                        <div className="about-img-placeholder">
                            <img src={aboutImg} alt="About Skyler Fresh" />
                        </div>
                        <div className="about-mission-badge">
                            <span className="badge-year">Est.</span>
                            <span className="badge-num">2018</span>
                            <span className="badge-label">Airport Godowns, Kenya</span>
                        </div>
                    </div>
                    <div className="about-mission-text">
                        <p className="about-eyebrow blue">THE STORY OF SKYLER FRESH EXPORTERS</p>
                        <h2>Rooted in Nairobi, <br /><em>Serving the World</em></h2>

                        <p>
                            SkylerFresh began as a family-owned enterprise in Nairobi, driven by a passion
                            for connecting people with the freshest and finest produce available. Built on
                            strong relationships, quality standards, and a commitment to excellence, we
                            have grown into a trusted name in the global produce industry.
                        </p>

                        <p>
                            By partnering with leading growers and suppliers across Kenya and around the
                            world, we source and deliver premium fruits, vegetables, flowers, herbs, and
                            specialty products to international markets. Every shipment reflects our
                            dedication to freshness, sustainability, and customer satisfaction.
                        </p>
                        <div className="about-pills">
                            <span className="about-pill">🌱 Farm to Door</span>
                            <span className="about-pill">♻️ Eco Packaging</span>
                            <span className="about-pill">💚 Fair Trade</span>
                        </div>
                        <a href="#shop" className="about-cta">Shop Our Produce →</a>
                    </div>
                </div>
            </section>

            {/* 3. STATS */}
            <section className="about-stats">
                <div className="about-stats-inner">
                    {stats.map((s) => (
                        <div className="stat-item" key={s.label}>
                            <span className="stat-value">{s.value}</span>
                            <span className="stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>



        </div>
    );
}
