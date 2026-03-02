import React, { useState, useEffect } from "react";
import "../index.css";
import kiranSirImg from "../assets/kiran-sir-img.png";
import kiranImg from "../assets/kiran.png";
import yogeshImg from "../assets/yogesh.png";
import atulImg from "../assets/Atul.png";

const testimonialsData = [
  {
    id: 1,
    name: "Kiran Mulay",
    role: "Project Manager & Partner at GiGaWebZone LLP",
    avatar: kiranSirImg,
    text: "Rushikesh consistently delivering high-quality work during his internship. He quickly adapts to new technologies, especially AI, Web Development and automation, and always looks for ways to improve solutions beyond the assigned task."
  },
  {
    id: 2,
    name: "Kiran Satihal",
    role: "Project Teammate",
    avatar: kiranImg,
    text: "I’ve worked with Rushikesh on multiple academic projects, and he’s someone you can completely rely on. He doesn’t just do his part — he makes sure the entire project runs smoothly. His technical skills are solid, especially in development and AI-related tasks. Even during tight deadlines, he stays calm and focused. Working with him always feels organized and productive."
  },
  {
    id: 3,
    name: "Yogesh Bhoi",
    role: "Adv. Bombay High court",
    avatar: yogeshImg,
    text: "Rushikesh built my professional portfolio website with great attention to detail and clarity. He understood my requirements patiently and translated them into a clean and professional design. Throughout the process, he communicated clearly and handled revisions without hesitation. The final result exceeded my expectations. I would confidently recommend him for web development projects."
  },
  {
    id: 4,
    name: "Atul Solanke",
    role: "Hackathon Partner",
    avatar: atulImg,
    text: "Under hackathon pressure, Rushikesh handled complex technical tasks confidently. His AI and automation knowledge gave our team a strong edge, and he’s a dependable collaborator."
  }
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  // Go to a specific slide
  const goTo = (index) => {
    setCurrent(index);
    setAnimKey(prev => prev + 1); // triggers re-animation
  };

  // Go to previous slide
  const prev = () => {
    goTo((current - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Go to next slide
  const next = () => {
    goTo((current + 1) % testimonialsData.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % testimonialsData.length);
      setAnimKey(k => k + 1);
    }, 5000);
    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const t = testimonialsData[current];

  return (
    <section id="testimonials" className="testimonials-section">

      {/* ── Heading ─────────────────────────────────────────── */}
      <h3 className="testi-label">// Testimonials</h3>
      <h2 className="testi-heading">What People <span>Say</span></h2>
      <p className="testi-desc">Kind words from professors, peers, and collaborators</p>
      <div className="testi-carousel-wrapper">

        {/* Left Arrow */}
        <button className="testi-arrow testi-arrow-left" onClick={prev}>
          &#8592;
        </button>

        {/* The Card — key changes on every slide so animation re-triggers */}
        <div className="testi-card" key={animKey}>

          {/* Avatar */}
          <img src={t.avatar} alt={t.name} className="testi-avatar" />

          {/* Testimonial text */}
          <p className="testi-text">"{t.text}"</p>

          {/* Person info */}
          <div className="testi-person">
            <span className="testi-name">{t.name}</span>
            <span className="testi-role">{t.role}</span>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="testi-arrow testi-arrow-right" onClick={next}>
          &#8594;
        </button>

      </div>

      {/* ── Dot Indicators ───────────────────────────────────── */}
      <div className="testi-dots">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            className={`testi-dot ${i === current ? "testi-dot-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Slide counter */}
      <p className="testi-counter">{current + 1} / {testimonialsData.length}</p>

    </section>
  );
}

export default Testimonials;