import React from "react";
import "../index.css";

const projectsData = [
  {
    id: 1,
    url: "../src/assets/Lina.jpg",
    name: "LINA: An AI Voice Assistant for Linux OS",
    description: "A brief description of Project One.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/rushikesh-portfolio/project-one",
    github: "https://github.com/rushikesh-portfolio/project-one"
  },
    {
      id: 2,
      url: "../src/assets/Gym site.jpg",
      name: "Gym Website",
      description: "A brief description of Project Two.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/rushikesh-portfolio/project-two"
    },
    {
      id: 3,
      url: "../src/assets/sales_pred.png",
      name: "Project Three",
      description: "A brief description of Project Three.",
      technologies: ["Python", "Django", "PostgreSQL"],
      github: "https://github.com/rushikesh-portfolio/project-three"
    },
    {
        id: 4,
        url: "../src/assets/Email Automation.jpg",
        name: "An Email Automation Using AI Agent",
        description: "A brief description of Project Four.",
        technologies: ["Java", "Spring Boot", "MySQL"],
        github: "https://github.com/rushikesh-portfolio/project-four"
    }
];

function Projects() {
    return (
    <section id="projects" className="project-section">
        <div className="Projects">
            <h3>// Projects</h3>
            <h2 className="Project-heading">My <span>Projects</span></h2>
            <p className="project-desc">Things I've built and things I'm building</p>
            <div className="project-card-holder">
                {projectsData.map((project) => (
                    <div className="project-top"><div key={project.id} className="project-card">
                        <img src={project.url} alt={project.name} />
                        <h3 className="project-name">{project.name}</h3>
                    </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>);

}

export default Projects;