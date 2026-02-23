import React from "react";
import "../index.css";

const projectsData = [
  {
    id: 1,
    url: "https://via.placeholder.com/300x200",
    name: "Project One",
    description: "A brief description of Project One.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/rushikesh-portfolio/project-one",
    github: "https://github.com/rushikesh-portfolio/project-one"
  },
    {
      id: 2,
      url: "https://via.placeholder.com/300x200",
      name: "Project Two",
      description: "A brief description of Project Two.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/rushikesh-portfolio/project-two",
      github: "https://github.com/rushikesh-portfolio/project-two"
    },
    {
      id: 3,
      url: "https://via.placeholder.com/300x200",
      name: "Project Three",
      description: "A brief description of Project Three.",
      technologies: ["Python", "Django", "PostgreSQL"],
      link: "https://github.com/rushikesh-portfolio/project-three",
      github: "https://github.com/rushikesh-portfolio/project-three"
    },
    {
        id: 4,
        url: "https://via.placeholder.com/300x200",
        name: "Project Four",
        description: "A brief description of Project Four.",
        technologies: ["Java", "Spring Boot", "MySQL"],
        link: "https://github.com/rushikesh-portfolio/project-four",
        github: "https://github.com/rushikesh-portfolio/project-four"
    }
];

function Projects() {
    return (
    <section id="projects" className="project-section">
        <div className="Projects">
            <h3 className="project-small">// Projects</h3>
            <h2 className="Project-heading">My Projects</h2>
            <p className="project-desc">Things I've built and things I'm building</p>
            <div>
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.url} alt={project.name} className="project-image" />
                        <h3 className="project-name">{project.name}</h3>
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