import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import "./Property.css";

const Property = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const images = [
        { src: "/images/property/property_1.jpeg", address: "12 Sandton Drive, Sandton, Johannesburg" },
        { src: "/images/property/property_2.jpg", address: "45 Umhlanga Ridge, Durban" },
        { src: "/images/property/property_3.jpg", address: "78 Cape Road, Sea Point, Cape Town" },
        { src: "/images/property/property_4.jpg", address: "22 Polokwane Central, Limpopo" },
        { src: "/images/property/property_5.jpg", address: "22 Djibouti St, Central, Gauteng" },
    ];

    return (
        <>
            <Header />

            <main className="property-main">
                <div className="property-overlay"></div>

                <div className="property-content">
                    {/* BACK BUTTON */}
                    <button className="property-back" onClick={() => navigate(-1)}>
                        ← Back
                    </button>

                    {/* TITLE */}
                    <h1 className="property-title">Property Investments</h1>
                    <p className="property-intro">
                        We invest in high-value residential, commercial, and land developments
                        across South Africa, focusing on sustainable growth and long-term returns.
                    </p>

                    {/* GALLERY */}
                    <section className="property-gallery">
                        <h2>Property Gallery</h2>

                        <div className="gallery-grid">
                            {images.map((item, index) => (
                                <div key={index} className="gallery-card">
                                    <img
                                        src={item.src}
                                        alt="Property Investment"
                                        onClick={() => setSelectedImage(item.src)}
                                    />
                                    <div className="gallery-caption">{item.address}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* VIDEO */}
                    <section className="property-video">
                        <h2>Property Showcase</h2>

                        <video controls>
                            <source src="/videos/pro_vid_1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </section>

                    {/* CONTACT */}
                    <section className="property-contact">
                        <h2>Property Enquiries</h2>

                        <div className="contact-grid">
                            <div>
                                <h4>Phone</h4>
                                <p>+27 11 123 4567</p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>properties@vhagwedi.co.za</p>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Johannesburg, South Africa</p>
                            </div>
                        </div>

                        <a href="/contact" className="contact-btn">
                            Enquire Now
                        </a>
                    </section>
                </div>
            </main>

            {/* IMAGE MODAL */}
            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Full View" onClick={(e) => e.stopPropagation()} />
                    <button className="modal-close" onClick={() => setSelectedImage(null)}>
                        ×
                    </button>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Property;
