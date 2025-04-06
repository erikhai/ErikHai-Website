import { useState } from "react";
import "../styles/About.css";

const skills = [
  "C",
  "CSS",
  "Django",
  "Firebase",
  "Figma",
  "Flask",
  "Flutter",
  "Git",
  "HTML",
  "Image Classifiers",
  "Java",
  "JavaScript",
  "Machine Learning",
  "MongoDB",
  "Neural Networks",
  "Python",
  "React",
  "SQL",
  "SQLite"
];


export default function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <div className="about-container">
        <h1>Who Am I?</h1>
        <div className="about-content">

          <div className="about-card">
            <h2>About Me</h2>
            <p>
              Hai! I'm a passionate developer who loves building web applications
              and learning new technologies. Currently I am a student studying Software Engineering
              at the University Of Sydney. In my spare time, I enjoy drawing, reading manga, playing chess and
              also enjoy creating various coding projects.
            </p>
          </div>

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
