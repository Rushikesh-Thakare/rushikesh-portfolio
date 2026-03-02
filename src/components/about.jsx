import React from "react";
import "../index.css";
import profilePic from "../assets/rushikesh_photo.png";

function About() {
    return (
        <div id="about">
            <h4 className="about-title">//About_Me</h4>
            <div className="about-section">
                <div className="about-img">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                </div>
                <div className="about-content">
                    <h3 className="about-start">Who Am <span>I?</span></h3>
                    <hr /> 
                    <p>
                       I am <span style={{color: "white", fontSize: "1rem"}}>Rushikesh Thakare,</span> a 3rd Year Diploma student in Computer Engineering at Government Polytechnic, Mumbai, with a strong interest in Full Stack Java Development, AI, and Automation. <br /><br />

                       I enjoy building scalable web applications and intelligent systems that solve real-world problems. My journey started with core programming in C and Java, and gradually expanded into frontend development with React, backend logic, databases like PostgreSQL and MongoDB, and workflow automation using N8N. <br /><br />

                       I believe in learning by building. From developing a Gym Website to creating a Linux Voice Assistant and a Retail Sales Prediction system, I continuously challenge myself to turn ideas into practical solutions. <br /><br />

                       I am currently focused on becoming a highly skilled Full Stack Java Developer while exploring AI-driven automation technologies.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;