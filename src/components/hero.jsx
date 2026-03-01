import React, { useState, useEffect } from "react";
import "../index.css";
import illustration from "../assets/illustration1.svg"; 
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

// stats for hero section
const stats = [
    { number: "6+",  label: "Projects Built"    },
    { number: "10+",  label: "Technologies"       },
    { number: "100%",label: "Dedication"         },
    { number: "∞",   label: "Passion for Coding"   },
  ];


function Hero() {  
  return (
    <div className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-start">Hello! I am....</p>
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
          <a href="https://drive.google.com/file/d/1wl6YZ7zOedL-BGDj075ZDyWRj1uk773T/view?usp=sharing" className="hero-resume" target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={illustration} alt="Illustration" />
      </div>
    </div>
  
  );
}
function Stats() {
  return (
    <div className="hero-stats">
      {stats.map((stat, index) => (
        <div key={index} className="hero-stats-items">
          <span className="stat-num">{stat.number}</span> <br /> 
          <span className="stat-label">{stat.label}</span>
        </div>))
      }  
    </div>
  );
}

export { Hero, Stats };