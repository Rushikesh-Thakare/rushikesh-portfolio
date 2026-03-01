import React, { useState } from "react";
import "../index.css";
import logo from "../assets/portfolio-logo (2).png";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            <img className="navLogo" src={logo} alt="Logo" />

            {/* Backdrop overlay - closes menu when clicked */}
            {menuOpen && (
                <div 
                    className="menu-backdrop" 
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <ul className={`navLinks ${menuOpen ? "active" : ""}`}>
                <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>My Work</a></li>
                <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
            </ul>

            <a className="navContact" href="#contact"> Contact Me </a>

            {/* Hamburger */}
            <div 
                className={`hamburger ${menuOpen ? "open" : ""}`} 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav>
    );
}

export default Navbar;