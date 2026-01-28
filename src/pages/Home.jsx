import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./Home.css";

const SUGGESTIONS = [
    { label: "Property Investments", keywords: ["property", "properties", "real estate"], path: "/property" },
    { label: "Mining Investments", keywords: ["mining", "mine", "minerals"], path: "/mining" },
    { label: "Financial Services", keywords: ["finance", "funding", "loans", "equity"], path: "/financial" },
    { label: "Portfolio", keywords: ["portfolio", "projects"], path: "/portfolio" },
    { label: "About Us", keywords: ["about", "company", "team"], path: "/about" },
    { label: "Contact Us", keywords: ["contact", "support", "help"], path: "/contact" },
    { label: "Services", keywords: ["services"], path: "/services" },
];

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const query = searchQuery.toLowerCase().trim();

        if (!query) {
            setFilteredSuggestions([]);
            return;
        }

        const matches = SUGGESTIONS.filter((item) =>
            item.keywords.some((key) => key.includes(query) || query.includes(key)) ||
            item.label.toLowerCase().includes(query)
        );

        setFilteredSuggestions(matches);
        setShowSuggestions(true);
    }, [searchQuery]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if (filteredSuggestions.length > 0) {
            navigate(filteredSuggestions[0].path);
            setShowSuggestions(false);
        } else {
            alert(
                "Try: property, mining, finance, portfolio, about, or contact."
            );
        }
    };

    const handleSuggestionClick = (path) => {
        navigate(path);
        setShowSuggestions(false);
        setSearchQuery("");
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

                            {/* 🔎 LIVE SEARCH */}
                            <form onSubmit={handleSearchSubmit} className="hero-search-form">
                                <div className="search-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Try: property, mining, finance, portfolio…"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onFocus={() => searchQuery && setShowSuggestions(true)}
                                        className="hero-input"
                                    />

                                    {showSuggestions && filteredSuggestions.length > 0 && (
                                        <ul className="search-suggestions">
                                            {filteredSuggestions.map((item) => (
                                                <li
                                                    key={item.label}
                                                    onClick={() => handleSuggestionClick(item.path)}
                                                >
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

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
                        <button
                            className="hero-cta"
                            onClick={() => navigate("/contact")}
                        >
                            Start a Private Conversation About Your Portfolio →
                        </button>
                    </div>
                </section>

                {/* ===== FEATURED PROJECTS ===== */}
                <section className="featured-section">
                    <h2 className="featured-title">Featured Investment Projects</h2>
                    <p className="featured-subtitle">
                        A selection of high-value investments delivered across South Africa.
                    </p>

                    <FeaturedSlider />
                </section>

                {/* ===== WHY CHOOSE US ===== */}
                <section className="why-section">
                    <h2 className="why-title">Why Choose Vhagwedi Investments</h2>
                    <p className="why-subtitle">
                        We combine disciplined capital deployment with strategic partnerships to deliver
                        sustainable, high-impact investment outcomes.
                    </p>

                    <div className="why-grid">
                        <div className="why-card">
                            <div className="why-icon">🛡️</div>
                            <h3>Regulated & Compliant</h3>
                            <p>
                                Fully compliant with South African regulations, ensuring transparency,
                                governance, and investor protection.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon">📈</div>
                            <h3>Proven Returns</h3>
                            <p>
                                A strong track record of delivering consistent returns across property,
                                mining, and financial investments.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon">🤝</div>
                            <h3>Trusted Partnerships</h3>
                            <p>
                                Long-term partnerships with institutional investors, developers, and
                                industry specialists.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon">🌍</div>
                            <h3>Sustainable Investments</h3>
                            <p>
                                Responsible investing focused on long-term impact, environmental care,
                                and economic development.
                            </p>
                        </div>
                    </div>
                </section>


                {/* DIVISIONS (UNCHANGED) */}
                <section className="pillars-section">
                    <h2 className="pillars-title">Core Investment Pillars</h2>

                    <div className="pillars-grid">
                        <PillarCard
                            title="Property"
                            images={[
                                "/images/property/property_4.jpg",
                                "/images/property/property_2.jpg",
                                "/images/property/property_3.jpg",
                                "/images/property/property_5.jpg",
                                "/images/property/property_6.jpg",
                                "/images/property/property_7.jpg",
                                "/images/property/property_8.jpg",
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

                {/* ===== QUICK ENQUIRY ===== */}
                <section className="enquiry-section">
                    <h2 className="enquiry-title">Start a Private Investment Conversation</h2>
                    <p className="enquiry-subtitle">
                        Tell us your area of interest and our investment team will contact you within 24 hours.
                    </p>

                    <form className="enquiry-form" onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thank you! Your enquiry has been sent.");
                    }}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className="enquiry-input"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="enquiry-input"
                        />

                        <select className="enquiry-input" required>
                            <option value="">Select Investment Interest</option>
                            <option value="Property">Property</option>
                            <option value="Mining">Mining</option>
                            <option value="Finance">Finance</option>
                        </select>

                        <button type="submit" className="enquiry-btn">
                            Submit Enquiry
                        </button>
                    </form>
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
        }, 3500);

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

const FEATURED_PROJECTS = [
    {
        title: "Sandton Luxury Apartments",
        location: "Sandton, Johannesburg",
        image: "/images/property/property_3.jpg",
        path: "/portfolio",
    },
    {
        title: "Limpopo Chrome Mine",
        location: "Limpopo Province",
        image: "/images/projects/fea_2.jpg",
        path: "/portfolio",
    },
    {
        title: "Durban Office Park",
        location: "Durban, KwaZulu-Natal",
        image: "/images/projects/fea_3.jpg",
        path: "/portfolio",
    },
    {
        title: "Cape Town Retail Hub",
        location: "Cape Town, Western Cape",
        image: "/images/projects/fea_4.jpg",
        path: "/portfolio",
    },
];

const FeaturedSlider = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
        }, 4500);

        return () => clearInterval(timer);
    }, []);

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? FEATURED_PROJECTS.length - 1 : prev - 1
        );
    };

    const next = () => {
        setIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
    };

    return (
        <div className="featured-slider">
            <button className="slider-btn left" onClick={prev}>‹</button>

            <div className="slider-window">
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {FEATURED_PROJECTS.map((item) => (
                        <div
                            key={item.title}
                            className="featured-card"
                            onClick={() => navigate(item.path)}
                        >
                            <img src={item.image} alt={item.title} />
                            <div className="featured-overlay"></div>

                            <div className="featured-info">
                                <h3>{item.title}</h3>
                                <p>{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="slider-btn right" onClick={next}>›</button>
        </div>
    );
};



export default Home;
