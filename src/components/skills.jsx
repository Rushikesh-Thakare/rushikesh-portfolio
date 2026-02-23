import { useEffect } from "react";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiMongodb, SiN8N } from "react-icons/si";
import { SiC } from "react-icons/si";
import "../index.css";

const skillsData = [
  { 
    name: "Java", 
    category: "Backend", 
    percent: 85, 
    icon: <FaJava color="#f89820" /> 
  },
  { 
    name: "React.js", 
    category: "Frontend", 
    percent: 75, 
    icon: <FaReact color="#61DBFB" /> 
  },
  { 
    name: "JavaScript", 
    category: "Frontend", 
    percent: 75, 
    icon: <SiJavascript color="#F7DF1E" /> 
  },
  { 
    name: "HTML & CSS", 
    category: "Frontend", 
    percent: 85, 
    icon: <FaHtml5 color="#E34F26" /> 
  },
  { 
    name: "PostgreSQL", 
    category: "Database", 
    percent: 65, 
    icon: <SiPostgresql color="#336791" /> 
  },
  { 
    name: "MongoDB", 
    category: "Database", 
    percent: 75, 
    icon: <SiMongodb color="#47A248" /> 
  },
  { 
    name: "Python", 
    category: "Backend / AI", 
    percent: 70, 
    icon: <FaPython color="#3776AB" /> 
  },
  { 
    name: "AI / ML", 
    category: "Artificial Intelligence", 
    percent: 50, 
    icon: <FaPython color="#9B59B6" /> 
  },
  { 
    name: "N8N", 
    category: "Automation", 
    percent: 85, 
    icon: <SiN8N color="#FF6D00" /> 
  },
  { 
    name: "C", 
    category: "Core Programming", 
    percent: 70, 
    icon: <SiC color="#A8B9CC" /> 
  },
];

const tools = ["Git", "WordPress", "VS Code", "AISensy", "Linux"];

export default function Skills() {
  useEffect(() => {
    const progresses = document.querySelectorAll(".progress");

    progresses.forEach((progress) => {
      const value = progress.getAttribute("data-progress");
      setTimeout(() => {
        progress.style.width = value + "%";
      }, 200);
    });
  }, []);

  return (
    <section className="skills-section" id="Skills">
      <p className="skill-name">// skills</p>
      <h2 className="section-title">My <span>Skills</span></h2>
      <p className="skills-desc">Technologies I work with and tools I love</p>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <div className="skill-left">
                <span className="skill-icon">{skill.icon}</span>
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.category}</p>
                </div>
              </div>
              <span className="skill-percent">{skill.percent}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                data-progress={skill.percent}
              ></div>
            </div>
          </div>
        ))}
      </div>
  <div className="tools-wrapper">
  <div className="tools-card">
    <h3>Tools & Technologies</h3>
    <div className="tools-list">
      {tools.map((tool, index) => (
        <span className="tool-badge" key={index}>
        {tool}
        </span>
      ))}
    </div>
   </div>
   </div>
    </section>
  );
}