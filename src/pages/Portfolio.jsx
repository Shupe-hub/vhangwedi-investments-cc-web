import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./Portfolio.css";

const Portfolio = () => {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            title: "Luxury Residential Estate",
            category: "Property",
            image: "/images/property/property_4.jpg",
            description:
                "High-end residential estate development with modern architecture and sustainable design.",
            location: "Gauteng, South Africa",
            value: "R320M",
        },
        {
            title: "Commercial Office Complex",
            category: "Property",
            image: "/images/property/property_2.jpg",
            description:
                "Prime-grade office development targeting multinational tenants.",
            location: "Sandton, South Africa",
            value: "R180M",
        },
        {
            title: "Platinum Mining Venture",
            category: "Mining",
            image: "/images/mining/mining_1.jpg",
            description:
                "Strategic stake in a platinum group metals operation with long-term production contracts.",
            location: "Limpopo, South Africa",
            value: "R450M",
        },
        {
            title: "Chrome Processing Plant",
            category: "Mining",
            image: "/images/mining/mining_2.jpg",
            description:
                "Development of a mid-scale chrome beneficiation plant.",
            location: "North West, South Africa",
            value: "R260M",
        },
        {
            title: "SME Growth Fund",
            category: "Finance",
            image: "/images/finance/finance_1.jpg",
            description:
                "Structured funding for high-growth SMEs across logistics and manufacturing.",
            location: "National",
            value: "R95M",
        },
        {
            title: "Renewable Energy Fund",
            category: "Finance",
            image: "/images/finance/finance_2.png",
            description:
                "Equity investment in renewable energy infrastructure projects.",
            location: "Western Cape, South Africa",
            value: "R210M",
        },
    ];

    return (
        <>
            <Header />

            <main className="portfolio-main">
                {/* HERO */}
                <section className="portfolio-hero">
                    <h1>Our Portfolio</h1>
                    <p>
                        A selection of high-impact investments across property, mining,
                        and financial markets.
                    </p>
                </section>

                {/* GRID */}
                <section className="portfolio-grid-section">
                    <div className="portfolio-grid">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="portfolio-card"
                                onClick={() => setActiveProject(project)}
                            >
                                <div className="portfolio-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="portfolio-image-overlay"></div>
                                    <span className="portfolio-category">
                    {project.category}
                  </span>
                                </div>

                                <div className="portfolio-body">
                                    <h3>{project.title}</h3>
                                    <p className="portfolio-location">
                                        📍 {project.location}
                                    </p>
                                    <p className="portfolio-value">
                                        Investment Value: {project.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* MODAL */}
            {activeProject && (
                <div
                    className="portfolio-modal-overlay"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="portfolio-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={activeProject.image}
                            alt={activeProject.title}
                        />

                        <h2>{activeProject.title}</h2>
                        <p className="modal-category">
                            {activeProject.category}
                        </p>

                        <p className="modal-description">
                            {activeProject.description}
                        </p>

                        <p><strong>Location:</strong> {activeProject.location}</p>
                        <p><strong>Value:</strong> {activeProject.value}</p>

                        <button
                            className="modal-close"
                            onClick={() => setActiveProject(null)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Portfolio;
