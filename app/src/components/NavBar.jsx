import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";
import logo from "../assets/logo.png";
import { scroller } from "react-scroll";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);



  const handleClick = (section) => {
    console.log(`Scrolling to ${section}`);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, 
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };


  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={() => scroll.scrollToTop()} />
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleClick("home"); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleClick("about"); }}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleClick("experience"); }}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleClick("projects"); }}>
              Projects
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
