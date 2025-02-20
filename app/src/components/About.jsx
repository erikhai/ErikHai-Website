import { useState } from "react";
import "../styles/About.css";
import usyd_logo from "../assets/university_of_sydney_logo.jpg";
import usyd_succs from "../assets/usyd_csec_logo.jpg";
import aec_logo from "../assets/aec_logo.jpg";
import paragon_logo from "../assets/paragon_logo.png";

const skills = [
    "C",
    "CSS",
    "Django",
    "Firebase",
    "Flask",
    "Flutter",
    "Git",
    "HTML",
    "Java",
    "JavaScript",
    "Machine Learning",
    "MongoDB",
    "Python",
    "React",
    "SQL"
  ];
  

export default function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
    <div className="about-container">
      <h1>Who Am I?</h1>
      <div className="about-content">
        {/* About Me Card */}
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            Hai! I'm a passionate developer who loves building web applications
            and learning new technologies. Currently I am a student studying Software Engineering
            at the University Of Sydney. In my spare time, I enjoy drawing, reading manga, playing chess and
            also enjoy creating various coding projects. 
          </p>
        </div>

        {/* Skills Card */}
        <div className="skills-card">
          <h2>Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`skill-item ${hovered === index ? "hovered" : ""}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
