import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Layout.css";

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { label: "Home", path: "/home" },
        {
            label: "Services",
            path: "/services",
            dropdown: [
                { label: "Property Investments", path: "/property" },
                { label: "Mining Investments", path: "/mining" },
                { label: "Financial Services", path: "/finance" },
            ],
        },
        {
            label: "About Us",
            path: "/about",
            dropdown: [
                { label: "Company Overview", path: "/about" },
                { label: "Our Team", path: "/about#team" },
            ],
        },
        { label: "Portfolio", path: "/portfolio" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <header className="site-header">
            <div className="header-logo-container">
                <Link to="/">
                    <img
                        src="/images/background.png"
                        alt="Vhagwedi"
                        className="header-logo"
                    />
                </Link>
            </div>

            <nav className="header-nav">
                {navItems.map((item) => (
                    <div
                        key={item.label}
                        className="nav-item"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <Link to={item.path} className="nav-link">
                            {item.label}
                        </Link>

                        {item.dropdown && openDropdown === item.label && (
                            <div className="dropdown-menu">
                                {item.dropdown.map((subItem) => (
                                    <Link
                                        key={subItem.label}
                                        to={subItem.path}
                                        className="dropdown-link"
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* 🌗 THEME TOGGLE ICON */}
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title="Toggle light/dark mode"
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </nav>
        </header>
    );
};

export default Header;
