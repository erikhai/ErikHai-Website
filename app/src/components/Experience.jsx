import usyd_logo from "../assets/university_of_sydney_logo.jpg";
import usyd_succs from "../assets/usyd_csec_logo.jpg";
import aec_logo from "../assets/aec_logo.jpg";
import paragon_logo from "../assets/paragon_logo.png";
import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    logo: paragon_logo,
    company: "Paragon 4",
    role: "Consultant Software Engineer", 
    duration: "Nov 2024 - Feb 2025",
    description: "I helped develop software applications designed to work collaboratively to support healthcare workers. The goal of these applications was to help reduce stress and to improve the overall well-being for professionals in high-pressure environments. By focusing on enhancing their mental & physical health, we aimed to enable healthcare workers to return to their peak performance.",
  },
  {
    logo: usyd_succs,
    company: "USYD Cyber Security Society", 
    role: "Industry Liaison", 
    duration: "Nov 2024 - Present",
    description: "My main role is to find companies that are interested in sponsoring the society or help out with certain events such as industry talks, CTFs, etc.", // Fixed spelling: "sponsoring", "CTFs"
  },
  {
    logo: usyd_succs,
    company: "USYD Cyber Security Society", 
    role: "Event Director",
    duration: "Nov 2023 - Nov 2024",
    description: "My main role was to help plan out what kinds of events should be conducted, how these events would look like and organise where these events would be conducted.", // Fixed spelling: "organize" (changed to British English spelling for consistency)
  },
  {
    logo: usyd_logo,
    company: "USYD",
    role: "Engineering Peer Mentor",
    duration: "Jul 2024 - Nov 2024",
    description: "My main role was to assist new first-year engineering students in their transition into university.", // Fixed spelling: "first-year", "transition"
  },
  {
    logo: aec_logo,
    company: "AEC",
    role: "Polling Assistant", 
    duration: "Oct 2023 - Oct 2023",
    description: "During the referendum, I had to help set up the place, help give out ballot papers, manage queues, keep count of all voters, sort out votes and clean up. From this experience, I gained a better understanding of what it means to work quickly but efficiently and developed a better understanding of working in a team.", // Fixed grammar: "sorting out votes" changed to "sort out votes", added a comma after "experience"
  },
];

const Experience = () => {
  return (
    <div className="timeline-container">
      <h1>Experience</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <img src={exp.logo} alt={exp.company} className="company-logo" />
            <h3 className="company">{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
