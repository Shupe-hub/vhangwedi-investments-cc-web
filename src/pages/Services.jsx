import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./Services.css";

const Services = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
            name: "Executive Director",
            role: "Founder & Managing Director",
            image: "/images/team/shupe_1.jpeg",
            phone: "+27 82 123 4567",
            email: "director@vhagwedi.co.za",
            bio: "Over 15 years of leadership experience in property, mining, and financial investments.",
        },
        {
            name: "Investment Manager",
            role: "Property & Mining Portfolio",
            image: "/images/team/shupe_2.jpeg",
            phone: "+27 83 456 7890",
            email: "investments@vhagwedi.co.za",
            bio: "Specialist in high-value property and mining portfolio management.",
        },
        {
            name: "Financial Analyst",
            role: "Structured Finance & Equity",
            image: "/images/team/nomsa_1.jpeg",
            phone: "+27 81 987 6543",
            email: "finance@vhagwedi.co.za",
            bio: "Expert in venture capital, financial modeling, and equity investments.",
        },
    ];

    return (
        <>
            <Header />

            <main className="services-main">
                <div className="services-overlay"></div>

                <div className="services-content">
                    {/* SERVICES */}
                    <section className="services-section">
                        <h1 className="services-title">Our Services</h1>

                        <div className="services-grid">
                            <ServiceCard
                                title="Property Investments"
                                text="We invest in land, residential, commercial, and business properties with strong growth potential."
                            />
                            <ServiceCard
                                title="Mining Investments"
                                text="Strategic stakes in mining operations and mineral resource development."
                            />
                            <ServiceCard
                                title="Financial Services"
                                text="Cash loans, venture capital, bridging finance, and equity investments."
                            />
                        </div>
                    </section>

                    {/* MEET OUR TEAM */}
                    <section className="team-section">
                        <h1 className="services-title">Meet Our Team</h1>

                        <div className="team-grid">
                            {teamMembers.map((member) => (
                                <TeamCard
                                    key={member.email}
                                    {...member}
                                    onClick={() => setSelectedMember(member)}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            {/* TEAM MODAL */}
            {selectedMember && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedMember(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedMember.image}
                            alt={selectedMember.name}
                            className="modal-image"
                        />

                        <h2>{selectedMember.name}</h2>
                        <p className="modal-role">{selectedMember.role}</p>

                        <p className="modal-bio">{selectedMember.bio}</p>

                        <p><strong>📞</strong> {selectedMember.phone}</p>
                        <p><strong>✉️</strong> {selectedMember.email}</p>

                        <button
                            onClick={() => setSelectedMember(null)}
                            className="modal-close"
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

const ServiceCard = ({ title, text }) => (
    <div className="service-card">
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
);

const TeamCard = ({ name, role, image, onClick }) => (
    <div className="team-card" onClick={onClick}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>
    </div>
);

export default Services;
