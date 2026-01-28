import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./Services.css";

const SERVICES = [
    {
        title: "Property Investments",
        summary:
            "Strategic investments in residential, commercial, and land assets.",
        details: [
            "Residential developments & rentals",
            "Commercial properties & office parks",
            "Land banking opportunities",
        ],
        risk: "Low – Medium",
        returns: "8% – 18% p.a.",
        link: "/property",
        pdf: "/docs/property-investments.pdf",
    },
    {
        title: "Mining Investments",
        summary:
            "High-potential mineral ventures and strategic mining partnerships.",
        details: [
            "Chrome & platinum group metals",
            "Exploration-stage opportunities",
            "Operational mining partnerships",
        ],
        risk: "Medium – High",
        returns: "15% – 35%+ p.a.",
        link: "/mining",
        pdf: "/docs/mining-investments.pdf",
    },
    {
        title: "Financial Services",
        summary:
            "Tailored funding, private credit, and structured finance solutions.",
        details: [
            "Private lending & bridging finance",
            "Equity & mezzanine finance",
            "Business growth funding",
        ],
        risk: "Medium",
        returns: "12% – 25% p.a.",
        link: "/finance",
        pdf: "/docs/financial-services.pdf",
    },
];

const Services = () => {
    return (
        <>
            <Header />

            <main className="services-main">
                <div className="services-overlay"></div>

                <section className="services-section">
                    <h1 className="services-title">Our Services</h1>
                    <p className="services-subtitle">
                        Disciplined capital deployment across property, mining, and
                        structured financial investments.
                    </p>

                    <div className="services-accordion">
                        {SERVICES.map((service) => (
                            <ServiceAccordion
                                key={service.title}
                                service={service}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

const ServiceAccordion = ({ service }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={`service-card ${open ? "open" : ""}`}>
            {/* HEADER */}
            <button
                className="service-header"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <div>
                    <h2>{service.title}</h2>
                    <p>{service.summary}</p>
                </div>
                <span className="toggle-icon">{open ? "−" : "+"}</span>
            </button>

            {/* CONTENT */}
            <div className="service-content">
                <ul>
                    {service.details.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                {/* BADGES */}
                <div className="service-badges">
                    <span className="badge risk">
                        Risk: {service.risk}
                    </span>
                    <span className="badge return">
                        Returns: {service.returns}
                    </span>
                </div>

                {/* ACTIONS */}
                <div className="service-actions">
                    <button
                        className="service-btn primary"
                        onClick={() => navigate("/contact")}
                    >
                        Discuss This Service
                    </button>

                    <button
                        className="service-btn outline"
                        onClick={() => navigate(service.link)}
                    >
                        View Opportunities →
                    </button>

                    <a
                        href={service.pdf}
                        download
                        className="service-btn ghost"
                    >
                        Download Overview PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
