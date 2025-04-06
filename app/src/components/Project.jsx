import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Project.css';

import banner1 from "../assets/portfolio-banner.png"
import banner2 from "../assets/cardify-banner.png"
import banner3 from "../assets/usyd-banner.png"
import banner4 from "../assets/bank-banner.jpg"
import banner5 from "../assets/cypher-banner.jpg"
import banner6 from "../assets/syncs-banner.jpg"

const projects = [
  {
    name: 'Portfolio',
    type: 'Web Application (Personal Project)',
    banner: banner1,
    description: 'This website has been coded using React. The main purpose of this website was to see how much my front-end skills have improved while also designing a website that showcases who I am.',
    skills: ['React', 'CSS'],
    github: 'https://github.com/erikhai/ErikHai-Website',
    video: null
  },
  {
    name: 'SYNCS Bot Bottle',
    type: 'Competition',
    banner: banner6,
    description: 'This competition hosted by the SYNCS Society lasted for roughly 2 weeks. The purpose of this competition is to was to develop an algorithm that would achieve a high win rate for the game RISK. Out of 80 teams, we ended up finishing in the top 10.',
    skills: ['Python'],
    github: "https://github.com/erikhai/risk-game-engine",
    video: null
  },
  {
    name: 'Cardify',
    type: 'Uni Assignment (ELEC3609)',
    banner: banner2,
    description: 'This was a full stack university assignment conducted in a group of 5. This project is a flashcard application where users can make their own decks of cards for studying and utilise various game modes to test their memory. This assignment made us go through the entire software life cycle, from planning out scope requirements and wireframes to developing, testing and deploying the application. We used react to design the frontend and django for the backend. We used the amazon services to deploy our project.',
    skills: ['React', 'Django', 'AWS', 'Figma', "SQLite"],
    github: null,
    video: "https://drive.google.com/file/d/1aG3_fUuXUlMfwUo425EOOi87ju4bJNeX/view?usp=sharing"
  },
  {
    name: 'Capstone Project',
    type: 'Uni Assignment (SOFT3888)',
    banner: banner3,
    description: 'This was a full stack university assignment conducted in a group of 6. This project was about developing a website that would allow users to forecast values of a dataset so that the user can study how their dataset may behave in the future. This project uses django for the front and back end and python for the machine learning models.',
    skills: ['Django', 'Figma', "Python"],
    github: null,
    video: null
  },
  {
    name: 'Bank Replica',
    type: 'Terminal Based (Personal Project)',
    banner: banner4,
    description: 'This is a terminal based replica of what would happen in a bank. It uses ORM to manage a database and allows users to deposit, withdraw and transfer money. There is also an administrative viewpoint setup for overall system management.',
    skills: ['Java'],
    github: 'https://github.com/erikhai/Bank-Replica', 
    video: null
  },
  {
    name: 'Cyphers',
    type: 'Terminal Based (Personal Project)',
    banner: banner5,
    description: 'This is a terminal based system that allows users to encrypt and decrypt messages. The user is presented with various methods to chose from. This was a quick side project for me to do to better understand how encryption/decryption works and understand how hard it is to make a secure system.',
    skills: ['Python'],
    github: "https://github.com/erikhai/Cyphers", 
    video: null
  },


];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects & Competitions</h1>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-banner-container">
              <img src={project.banner} alt={project.name} className="project-banner" />
            </div>
            <div className="project-details">
              <h3 className="project-name">{project.name}</h3>
              <p><strong>Type:</strong> {project.type}</p>
              <p>{project.description}</p>
              <div className="skills">
                {project.skills.map((skill, idx) => (
                  <span key={idx} className="skill-icon">{skill}</span>
                ))}
              </div>
              <div className="github-placeholder">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                ) : (
                  <span className="no-github">No GitHub link available</span>
                )}
              </div>
              <div className="github-placeholder">
                {project.video ? (
                  <a href={project.video} target="_blank" rel="noopener noreferrer">
                    View Video Demo
                  </a>
                ) : (
                  <span className="no-github">No video demo available</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
