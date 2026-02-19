import React, { useState, useEffect } from "react";
import "../index.css";
import illustration from "../assets/illustration1.svg"; // ✅ correct image import

// ─── TypingText lives HERE in the same file ───────────────
const TypingText = ({ words }) => {
  const [wordIndex, setWordIndex]   = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
        if (displayed.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
        if (displayed.length === 1) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 55 : 100);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words]);

  return (
    <span className="hero-typing">
      <span style={{ color: "#58a6ff" }}>{displayed}</span>
      <span style={{ color: "#f78166", animation: "blink 1s step-end infinite" }}>|</span>
    </span>
  );
};

const roles = [
  "Aspiring Full Stack Java Developer",
  "I Build Modern Web Applications",
  "I Create AI & Automation Solutions",
  "Turning Ideas Into Real Projects",
];

function Hero() {  
  return (
    <div className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-start">Hello! I am</p>
        <h2
         className="hero-name">
          Rushikesh <br />
          <span className="thakare">Thakare</span>
        </h2>
        <TypingText words={roles} />
        <p className="hero-description">
          3rd Year Diploma student in Computer Engineering passionate about building scalable web applications, intelligent systems, and automation that solve real-world problems.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-project">View My Work</a>
          <a href="#" className="hero-resume">My Resume</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={illustration} alt="Illustration" />
      </div>
    </div>
  );
}

export default Hero;