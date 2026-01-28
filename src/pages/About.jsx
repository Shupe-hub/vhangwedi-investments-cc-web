import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./About.css";

const About = () => {
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

            <main className="about-main">
                <div className="about-overlay"></div>

                <div className="about-content">
                    {/* PAGE INTRO */}
                    <section className="about-intro">
                        <h1 className="about-title">About Us</h1>
                        <p className="about-subtitle">
                            Vhagwedi Investments CC is a South African investment company
                            committed to building long-term value through strategic
                            investments across property, mining, and financial services.
                        </p>
                    </section>

                    {/* COMPANY OVERVIEW */}
                    <section className="about-section">
                        <div className="about-grid">
                            <div>
                                <h2 className="about-section-title">Who We Are</h2>
                                <p className="about-text">
                                    With over 15 years of experience, Vhagwedi Investments CC has
                                    established itself as a trusted partner in identifying,
                                    developing, and managing high-value investment opportunities.
                                    Our approach is rooted in disciplined decision-making, strong
                                    governance, and sustainable growth.
                                </p>
                                <p className="about-text">
                                    We work closely with investors, partners, and industry
                                    specialists to ensure each opportunity aligns with our values
                                    and delivers measurable returns.
                                </p>
                            </div>

                            <div className="about-highlight-card">
                                <h3 className="about-highlight-title">Our Focus Areas</h3>
                                <ul className="about-list">
                                    <li>Property development & acquisitions</li>
                                    <li>Mining ventures & mineral resource stakes</li>
                                    <li>Structured finance & private equity</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* VISION & MISSION */}
                    <section className="about-section">
                        <div className="about-grid">
                            <div className="about-card">
                                <h3 className="about-card-title">Our Vision</h3>
                                <p className="about-text">
                                    To be a leading African investment company known for
                                    integrity, innovation, and sustainable value creation.
                                </p>
                            </div>

                            <div className="about-card">
                                <h3 className="about-card-title">Our Mission</h3>
                                <p className="about-text">
                                    To deliver consistent returns by investing responsibly,
                                    building strong partnerships, and contributing positively to
                                    economic development.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CORE VALUES */}
                    <section className="about-section about-values-section">
                        <h2 className="about-section-title centered">Our Core Values</h2>

                        <div className="about-values-grid">
                            {[
                                {
                                    title: "Integrity",
                                    desc: "We conduct our business with honesty, transparency, and accountability.",
                                },
                                {
                                    title: "Excellence",
                                    desc: "We strive for high standards in every investment and partnership.",
                                },
                                {
                                    title: "Sustainability",
                                    desc: "We focus on long-term impact and responsible growth.",
                                },
                                {
                                    title: "Partnership",
                                    desc: "We believe strong relationships drive shared success.",
                                },
                            ].map((value) => (
                                <div key={value.title} className="about-value-card">
                                    <h4 className="about-value-title">{value.title}</h4>
                                    <p className="about-text">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* MEET OUR TEAM */}
                    <section className="about-section">
                        <h2 className="about-section-title centered">Meet Our Team</h2>

                        <div className="team-grid">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.email}
                                    className="team-card"
                                    onClick={() => setSelectedMember(member)}
                                >
                                    <img src={member.image} alt={member.name} />
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
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

export default About;
