import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./Home.css";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search query:", searchQuery);
    };

    return (
        <>
            <Header />

            <main className="home-main">
                {/* HERO */}
                <section className="hero-section">
                    <div className="hero-overlay"></div>

                    <div className="hero-container">
                        <div className="hero-content">
                            <h1 className="hero-title">VHAGWEDI</h1>
                            <p className="hero-subtitle-brand">Investments CC</p>
                            <p className="hero-tagline">
                                Premium Property • Strategic Mining • Sophisticated Finance
                            </p>

                            <form onSubmit={handleSearch} className="hero-search-form">
                                <input
                                    type="text"
                                    placeholder="Explore premium investments, properties, mining ventures…"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="hero-input"
                                />
                                <button type="submit" className="hero-button">
                                    Search Opportunities
                                </button>
                            </form>
                        </div>

                        <div className="hero-about-card">
                            <p>
                                Vhagwedi Investments CC is a premier South African firm delivering
                                exceptional value through selective{" "}
                                <span>property developments</span>, high-potential{" "}
                                <span>mining investments</span>, and bespoke{" "}
                                <span>financial structures</span>.
                            </p>
                            <p className="hero-about-small">
                                15+ years of disciplined capital deployment — creating
                                generational wealth for sophisticated investors.
                            </p>
                        </div>
                    </div>

                    <div className="hero-cta-container">
                        <button className="hero-cta">
                            Start a Private Conversation About Your Portfolio →
                        </button>
                    </div>
                </section>

                {/* DIVISIONS */}
                <section className="pillars-section">
                    <h2 className="pillars-title">Core Investment Pillars</h2>

                    <div className="pillars-grid">
                        <PillarCard
                            title="Property"
                            images={[
                                "/images/property/property_4.jpg",
                                "/images/property/property_2.jpg",
                                "/images/property/property_3.jpg",
                            ]}
                            desc="Iconic developments • Prime commercial & residential acquisitions • High-yield sectional title & estates"
                            path="/property"
                        />

                        <PillarCard
                            title="Mining"
                            images={[
                                "/images/mining/mining_1.jpg",
                                "/images/mining/mining_2.jpg",
                                "/images/mining/mining_3.jpg",
                            ]}
                            desc="Strategic mineral rights • Chrome, platinum group metals, coal & critical minerals • Exploration & production partnerships"
                            path="/mining"
                        />

                        <PillarCard
                            title="Finance"
                            images={[
                                "/images/finance/finance_1.jpg",
                                "/images/finance/finance_2.jpg",
                                "/images/finance/finance_3.jpg",
                            ]}
                            desc="Private credit • Structured finance • Mezzanine & equity solutions for high-growth enterprises"
                            path="/financial"
                        />
                    </div>
                </section>

                {/* TRUST STATS */}
                <section className="stats-section">
                    <div className="stats-grid">
                        {[
                            ["15+", "Years of Disciplined Excellence"],
                            ["R2.8B+", "Capital Successfully Deployed"],
                            ["200+", "High-Net-Worth & Institutional Partners"],
                        ].map(([num, label]) => (
                            <div key={label} className="stat-card">
                                <div className="stat-number">{num}</div>
                                <p className="stat-label">{label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

/* ===== SLIDING CARD COMPONENT ===== */

const PillarCard = ({ title, images, desc, path }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3500); // slide speed

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <Link to={path} className="pillar-link">
            <div className="pillar-card">
                <div className="pillar-image-wrapper">
                    {images.map((img, i) => (
                        <img
                            key={img}
                            src={img}
                            alt={title}
                            className={`pillar-slide ${
                                i === index ? "active" : ""
                            }`}
                        />
                    ))}
                    <div className="pillar-image-overlay"></div>
                </div>

                <div className="pillar-body">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </Link>
    );
};

export default Home;
