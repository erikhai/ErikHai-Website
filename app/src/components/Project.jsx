import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Project.css';
import test from "../assets/test.jpg"; // Ensure the correct path

const projects = [
  {
    name: 'Portfolio',
    type: 'Web Application (Personal Project)',
    banner: test,
    description: 'A brief description of Project One.',
    skills: ['React', 'CSS'],
    github: 'https://github.com/yourusername/project-one',
  },
  {
    name: 'Cardify',
    type: 'Uni Assignment (ELEC3609)',
    banner: 'path/to/banner2.jpg',
    description: 'A brief description of Project Two.',
    skills: ['React', 'Django', 'AWS', 'Figma'],
    github: null,
  },
  {
    name: 'Capstone Assignment',
    type: 'Uni Assignment (SOFT3888)',
    banner: 'path/to/banner3.jpg',
    description: 'A brief description of Project Three.',
    skills: ['Django', 'Figma', "Python"],
    github: null, // No GitHub link
  },
  {
    name: 'Bank Replica',
    type: 'GUI (Personal Project',
    banner: 'path/to/banner3.jpg',
    description: 'A brief description of Project Four.',
    skills: ['Java'],
    github:  'https://github.com/yourusername/project-one', // No GitHub link
  },
  {
    name: 'Cyphers',
    type: 'Terminal Based (Personal Project)',
    banner: 'path/to/banner3.jpg',
    description: 'A brief description of Project Five.',
    skills: ['Python'],
    github: null, // No GitHub link
  },
  {
    name: 'Project Three',
    type: 'Football????',
    banner: 'path/to/banner3.jpg',
    description: 'A brief description of Project Six.',
    skills: ['Java', 'React', 'CSS', 'MongoDB'],
    github: null, // No GitHub link
  },
  {
    name: 'Discord Bot',
    type: 'Terminal Based (Personal Project)',
    banner: 'path/to/banner3.jpg',
    description: 'A brief description of Project Seven.',
    skills: ['Electron', 'Node.js'],
    github: null, // No GitHub link
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
      <h1 className="projects-title">My Projects</h1>
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
