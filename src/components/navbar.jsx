import React from "react";
import "../index.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navLogo">Rushi</h1>
            <ul className="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Testimonials</a></li>
            </ul>
            <button className="navButton">Contact Me</button>
        </nav>
    )
}

export default Navbar;