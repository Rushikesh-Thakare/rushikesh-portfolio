import React from "react";
import "../index.css";

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navLogo" src="../src/assets/portfolio-logo (2).png" alt ="Logo" />
            <ul className="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">My Work</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
            <a className="navContact" href="#contact"> Contact Me </a>
        </nav>
    );
}

export default Navbar;