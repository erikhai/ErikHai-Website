import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";
import logo from "../assets/logo.png";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

     
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

     
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
