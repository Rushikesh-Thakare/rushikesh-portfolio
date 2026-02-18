import React from "react";
import "../index.css";

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navLogo" src="../src/assets/portfolio-logo (2).png" alt ="Logo" />
            <ul className="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
            <button className="navButton">Blogs</button>
        </nav>
    )
}

export default Navbar;