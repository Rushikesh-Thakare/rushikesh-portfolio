import React from "react";
import "../index.css";

const projectsData = [
  {
    id: 1,
    url: "../src/assets/Lina.jpg",
    name: "LINA: An AI Voice Assistant for Linux OS",
    description: "LINA is a desktop voice assistant designed for Linux users. It integrates speech-to-text processing, natural language understanding, and system command execution to allow hands-free interaction with the operating system. The assistant can open applications, fetch system information, automate repetitive tasks, and respond intelligently to user queries.",
    technologies: ["Python", "SpeechRecognition", "NLP", "Linux Shell Commands", "APIs", "TTS", "RAG", "LLMs","FAISS DB"],
    link: "https://github.com/rushikesh-portfolio/project-one",
    github: "https://github.com/rushikesh-portfolio/project-one"
  },
    {
      id: 2,
      url: "../src/assets/Gym site.jpg",
      name: "Rushi's Gym (A Gym Website)",
      description: "Created a fully responsive gym website using WordPress, designed to provide a smooth and engaging user experience for visitors interested in fitness and training services. The site features structured content, clear service offerings, and easy navigation for users of all devices.",
      technologies: ["WordPress", "Elementor", "Custom CSS", "Hosting & Deployment"],
      link: "https://kiranmulay.in/rishikesh/"
    },
    {
      id: 3,
      url: "../src/assets/sales_pred.png",
      name: "Sales Prediction for Retail Shop (Machine Learning)",
      description: "This project analyzes historical retail sales data to forecast future sales trends using regression models. The system helps business owners make data-driven decisions for inventory management and revenue optimization.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
      github: "https://github.com/rushikesh-portfolio/project-three"
    },
    {
        id: 4,
        url: "../src/assets/Email Automation.jpg",
        name: "An Email Automation Using AI Agent",
        description: "Built an AI-powered email automation system using AI agents and n8n to automatically classify incoming emails and generate context-aware replies. The system analyzes email content, detects intent (such as support, sales, or general inquiries), and triggers intelligent automated responses through a structured workflow. This project demonstrates my ability to combine AI-driven decision-making with workflow automation to create efficient, scalable communication systems.",
        technologies: ["AI Agents", "n8n (Workflow Automation)", "Email APIs (IMAP/SMTP)", "LLM integration"],
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
                            <a href={project.link} target="_blank" rel="noopener noreferrer">Live Project</a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>);

}

export default Projects;