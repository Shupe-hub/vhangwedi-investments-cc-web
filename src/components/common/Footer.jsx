import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Layout.css";

const Footer = () => {
    const { theme } = useTheme();

    // ✅ Choose logo based on theme
    const footerLogoSrc =
        theme === "dark"
            ? "/images/DARK_MODE_LOGO.png"
            : "/images/LIGHT_MODE_LOGO.png";

    return (
        <footer className="site-footer">
            <div className="footer-container">
                {/* BRAND */}
                <div className="footer-brand">
                    <img
                        src={footerLogoSrc}
                        alt="Vhagwedi Investments CC"
                        className="footer-logo"
                    />

                    <p>
                        Premium Property • Strategic Mining • Sophisticated Finance
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="footer-socials">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="social-icon"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.93H7.9V12H10V9.8c0-2.07 1.23-3.22 3.11-3.22.9 0 1.84.16 1.84.16v2.03h-1.04c-1.02 0-1.34.63-1.34 1.28V12h2.28l-.36 2.87h-1.92v6.93c4.56-.93 8-4.96 8-9.8z" />
                            </svg>
                        </a>

                        <a
                            href="https://wa.me/27821234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="social-icon"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.39 0 .03 5.36.03 11.98c0 2.1.55 4.15 1.6 5.95L0 24l6.22-1.63a11.94 11.94 0 0 0 5.8 1.48h.01c6.63 0 12-5.36 12-11.98 0-3.2-1.25-6.21-3.51-8.39zm-8.5 18.34a9.86 9.86 0 0 1-5.04-1.38l-.36-.22-3.69.97.99-3.6-.24-.37a9.86 9.86 0 1 1 8.34 4.6zm5.7-7.77c-.31-.16-1.84-.9-2.12-1s-.49-.16-.7.16-.8 1-.98 1.2-.36.24-.67.08a8.06 8.06 0 0 1-2.36-1.45 8.87 8.87 0 0 1-1.64-2.04c-.17-.3 0-.46.13-.62.13-.13.3-.36.46-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53l-.6-.01c-.2 0-.54.08-.82.38-.28.3-1.08 1.05-1.08 2.56 0 1.5 1.1 2.95 1.25 3.15.15.2 2.17 3.32 5.25 4.65.73.32 1.3.51 1.75.66.73.23 1.4.2 1.93.12.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.2-.6-.36z" />
                            </svg>
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="social-icon"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.8.25 2.22.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.36 1.05.42 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.8-.42 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.05.36-2.22.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.8-.25-2.22-.42a3.77 3.77 0 0 1-1.38-.9 3.77 3.77 0 0 1-.9-1.38c-.17-.42-.36-1.05-.42-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.06-1.17.25-1.8.42-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.05-.36 2.22-.42C8.42 2.17 8.8 2.16 12 2.16z" />
                                <path d="M12 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                                <circle cx="18.4" cy="5.6" r="1.44" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* CONTACT */}
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>📍 South Africa</p>
                    <p>📞 +27 82 123 4567</p>
                    <p>✉️ info@vhagwedi.co.za</p>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Vhagwedi Investments CC. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
